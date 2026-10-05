export const httpRelayUrl = (λ95e2efd99a6a = location) => `${"https:" === λ95e2efd99a6a.protocol ? "wss:" : "ws:"}//${λ95e2efd99a6a.host}/api/tutsi-relay/socket/`;

export async function readRelayFrames(λ95e2efd99a6a, λ651d4a9e6419, λe000476e7fc5 = () => {}) {
  const λ366187dad23d = λ95e2efd99a6a.getReader(), λd65b48573170 = new Uint8Array(4);
  let λ81f30c64ef34 = 0, λa9a1e6dc1287 = null, λ15111ae82e56 = 0, λ57b2f2337f2a = 0;
  try {
    for (;;) {
      const {done: λ95e2efd99a6a, value: λedd0bfb68c7a} = await λ366187dad23d.read();
      if (λ95e2efd99a6a) break;
      if (!λedd0bfb68c7a?.length) continue;
      if (λe000476e7fc5(), λ57b2f2337f2a += λedd0bfb68c7a.length, λ57b2f2337f2a > 20971520) throw new Error("Relay response is too large");
      let λ07f14f8ff06a = 0;
      for (;λ07f14f8ff06a < λedd0bfb68c7a.length; ) {
        if (!λa9a1e6dc1287) {
          const λ95e2efd99a6a = Math.min(4 - λ81f30c64ef34, λedd0bfb68c7a.length - λ07f14f8ff06a);
          if (λd65b48573170.set(λedd0bfb68c7a.subarray(λ07f14f8ff06a, λ07f14f8ff06a + λ95e2efd99a6a), λ81f30c64ef34), 
          λ81f30c64ef34 += λ95e2efd99a6a, λ07f14f8ff06a += λ95e2efd99a6a, λ81f30c64ef34 < 4) continue;
          const λ651d4a9e6419 = new DataView(λd65b48573170.buffer).getUint32(0, !0);
          if (λ651d4a9e6419 > 2097152) throw new Error("Relay frame is too large");
          λa9a1e6dc1287 = new Uint8Array(λ651d4a9e6419), λ15111ae82e56 = 0, λ81f30c64ef34 = 0;
        }
        const λ95e2efd99a6a = Math.min(λa9a1e6dc1287.length - λ15111ae82e56, λedd0bfb68c7a.length - λ07f14f8ff06a);
        λa9a1e6dc1287.set(λedd0bfb68c7a.subarray(λ07f14f8ff06a, λ07f14f8ff06a + λ95e2efd99a6a), λ15111ae82e56), 
        λ15111ae82e56 += λ95e2efd99a6a, λ07f14f8ff06a += λ95e2efd99a6a, λ15111ae82e56 === λa9a1e6dc1287.length && (λ651d4a9e6419(λa9a1e6dc1287.buffer), 
        λa9a1e6dc1287 = null);
      }
    }
    if (λ81f30c64ef34 || λa9a1e6dc1287) throw new Error("Incomplete relay frame");
  } finally {
    await λ366187dad23d.cancel().catch(() => {}), λ366187dad23d.releaseLock();
  }
}

export class HttpRelaySocket extends EventTarget {
  static CONNECTING=0;
  static OPEN=1;
  static CLOSING=2;
  static CLOSED=3;
  CONNECTING=0;
  OPEN=1;
  CLOSING=2;
  CLOSED=3;
  readyState=0;
  binaryType="blob";
  bufferedAmount=0;
  protocol="";
  extensions="";
  constructor(λ95e2efd99a6a) {
    super(), this.url = String(λ95e2efd99a6a), this.abort = new AbortController, this.sequence = 0, 
    this.queue = [], this.sending = !1, this.start();
  }
  emit(λ95e2efd99a6a, λ651d4a9e6419 = new Event(λ95e2efd99a6a)) {
    this.dispatchEvent(λ651d4a9e6419), this["on" + λ95e2efd99a6a]?.call(this, λ651d4a9e6419);
  }
  async request(λ95e2efd99a6a, λ651d4a9e6419 = {}, λe000476e7fc5 = AbortSignal.timeout(3e4)) {
    const λ366187dad23d = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/tutsi-relay/" + λ95e2efd99a6a, {
      ...λ651d4a9e6419,
      cache: "no-store",
      credentials: "same-origin",
      signal: AbortSignal.any([ this.abort.signal, λe000476e7fc5 ]),
      headers: {
        ...λ651d4a9e6419.headers,
        ...this.token ? {
          Authorization: "Bearer " + this.token
        } : {}
      }
    });
    if (!λ366187dad23d.ok) throw new Error("Connection unavailable");
    return λ366187dad23d;
  }
  async start() {
    try {
      const λ95e2efd99a6a = await (await this.request("sessions", {
        method: "POST"
      })).json();
      if (this.token = λ95e2efd99a6a.token, this.batchSend = 1 === λ95e2efd99a6a.sendBatch, 
      0 !== this.readyState) return this.cleanup();
      for (this.readyState = 1, this.emit("open"); 1 === this.readyState; ) {
        const λ95e2efd99a6a = new AbortController;
        let λ651d4a9e6419;
        const s = () => {
          clearTimeout(λ651d4a9e6419), λ651d4a9e6419 = setTimeout(() => λ95e2efd99a6a.abort(), 3e4);
        };
        s();
        try {
          const λ651d4a9e6419 = await this.request("receive", {}, AbortSignal.any([ λ95e2efd99a6a.signal, AbortSignal.timeout(12e4) ]));
          if (204 === λ651d4a9e6419.status) continue;
          s(), await readRelayFrames(λ651d4a9e6419.body, λ95e2efd99a6a => {
            1 === this.readyState && this.emit("message", new MessageEvent("message", {
              data: "arraybuffer" === this.binaryType ? λ95e2efd99a6a : new Blob([ λ95e2efd99a6a ])
            }));
          }, s);
        } finally {
          clearTimeout(λ651d4a9e6419);
        }
      }
    } catch {
      this.readyState < 2 && (this.emit("error"), this.close(1006));
    }
  }
  send(λ95e2efd99a6a) {
    if (1 !== this.readyState) throw new DOMException("Socket is not open", "InvalidStateError");
    const λ651d4a9e6419 = new Blob([ λ95e2efd99a6a ]);
    if (λ651d4a9e6419.size > 262144 || this.bufferedAmount + λ651d4a9e6419.size > 2097152 || this.queue.length >= 512) return this.emit("error"), 
    void this.close(1006);
    this.bufferedAmount += λ651d4a9e6419.size, this.queue.push(λ651d4a9e6419), this.flush();
  }
  flush() {
    !this.sending && 1 === this.readyState && this.queue.length && (this.sending = !0, 
    Promise.resolve().then(async () => {
      for (;1 === this.readyState && this.queue.length; ) {
        const λ95e2efd99a6a = [], λ651d4a9e6419 = [];
        let λe000476e7fc5 = 0, λ366187dad23d = 0;
        do {
          const λd65b48573170 = this.queue[0];
          if (λ95e2efd99a6a.length && λ366187dad23d + 4 + λd65b48573170.size > 1048576) break;
          if (this.queue.shift(), λ95e2efd99a6a.push(λd65b48573170), λe000476e7fc5 += λd65b48573170.size, 
          λ366187dad23d += λd65b48573170.size + 4, this.batchSend) {
            const λ95e2efd99a6a = new Uint8Array(4);
            new DataView(λ95e2efd99a6a.buffer).setUint32(0, λd65b48573170.size, !0), λ651d4a9e6419.push(λ95e2efd99a6a, λd65b48573170);
          }
        } while (this.batchSend && this.queue.length && λ95e2efd99a6a.length < 64);
        const λd65b48573170 = this.sequence;
        if (this.sequence += λ95e2efd99a6a.length, await this.request(this.batchSend ? "send-batch" : "send", {
          method: "POST",
          headers: {
            "Content-Type": "application/octet-stream",
            "X-Tutsi-Sequence": String(λd65b48573170)
          },
          body: this.batchSend ? new Blob(λ651d4a9e6419) : λ95e2efd99a6a[0]
        }), 1 !== this.readyState) return;
        this.bufferedAmount -= λe000476e7fc5;
      }
    }).catch(() => {
      this.readyState < 2 && (this.emit("error"), this.close(1006));
    }).finally(() => {
      this.sending = !1, this.flush();
    }));
  }
  cleanup() {
    this.token && fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/tutsi-relay/session", {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + this.token
      },
      keepalive: !0
    }).catch(() => {});
  }
  close(λ95e2efd99a6a = 1e3, λ651d4a9e6419 = "") {
    3 !== this.readyState && (this.readyState = 3, this.abort.abort(), this.cleanup(), 
    this.bufferedAmount = 0, this.queue.length = 0, this.emit("close", new CloseEvent("close", {
      code: λ95e2efd99a6a,
      reason: λ651d4a9e6419,
      wasClean: 1e3 === λ95e2efd99a6a
    })));
  }
}

const λ95e2efd99a6a = new Map;

export function createHttpRelayEndpoint() {
  const λ651d4a9e6419 = httpRelayUrl() + crypto.randomUUID() + "/", λe000476e7fc5 = new Set;
  return λ95e2efd99a6a.set(λ651d4a9e6419, λe000476e7fc5), {
    url: λ651d4a9e6419,
    close() {
      λ95e2efd99a6a.delete(λ651d4a9e6419);
      for (const λ95e2efd99a6a of λe000476e7fc5) λ95e2efd99a6a.close();
      λe000476e7fc5.clear();
    }
  };
}

let λ651d4a9e6419 = !1;

export function installHttpRelaySocket() {
  if (λ651d4a9e6419) return;
  λ651d4a9e6419 = !0;
  const λe000476e7fc5 = globalThis.WebSocket;
  function t(λ651d4a9e6419, λ366187dad23d) {
    const λd65b48573170 = String(λ651d4a9e6419), λ81f30c64ef34 = λ95e2efd99a6a.get(λd65b48573170);
    if (λd65b48573170 === httpRelayUrl() || λ81f30c64ef34) {
      const λ95e2efd99a6a = new HttpRelaySocket(λ651d4a9e6419);
      return λ81f30c64ef34 && (λ81f30c64ef34.add(λ95e2efd99a6a), λ95e2efd99a6a.addEventListener("close", () => λ81f30c64ef34.delete(λ95e2efd99a6a), {
        once: !0
      })), λ95e2efd99a6a;
    }
    return void 0 === λ366187dad23d ? new λe000476e7fc5(λ651d4a9e6419) : new λe000476e7fc5(λ651d4a9e6419, λ366187dad23d);
  }
  Object.setPrototypeOf(t, λe000476e7fc5), t.prototype = λe000476e7fc5.prototype, 
  Object.defineProperty(t, Symbol.hasInstance, {
    value: λ95e2efd99a6a => λ95e2efd99a6a instanceof λe000476e7fc5 || λ95e2efd99a6a instanceof HttpRelaySocket
  }), globalThis.WebSocket = t, addEventListener("pagehide", () => {
    for (const λ651d4a9e6419 of λ95e2efd99a6a.values()) for (const λ95e2efd99a6a of λ651d4a9e6419) λ95e2efd99a6a.close();
    λ95e2efd99a6a.clear();
  });
}
