export const httpRelayUrl = (λd2d01bdf4cf8 = location) => `${"https:" === λd2d01bdf4cf8.protocol ? "wss:" : "ws:"}//${λd2d01bdf4cf8.host}/api/tutsi-relay/socket/`;

export async function readRelayFrames(λd2d01bdf4cf8, λ7e7ba857c1fd, λ005ee7f28aeb = () => {}) {
  const λd55863836bf5 = λd2d01bdf4cf8.getReader(), λ61e794e15ecc = new Uint8Array(4);
  let λ43e4e3c0c2ab = 0, λa89cfab1ee9c = null, λcdae28ee9673 = 0, λ41c841302c87 = 0;
  try {
    for (;;) {
      const {done: λd2d01bdf4cf8, value: λ4769880ed20e} = await λd55863836bf5.read();
      if (λd2d01bdf4cf8) break;
      if (!λ4769880ed20e?.length) continue;
      if (λ005ee7f28aeb(), λ41c841302c87 += λ4769880ed20e.length, λ41c841302c87 > 20971520) throw new Error("Relay response is too large");
      let λa0c8519a6e28 = 0;
      for (;λa0c8519a6e28 < λ4769880ed20e.length; ) {
        if (!λa89cfab1ee9c) {
          const λd2d01bdf4cf8 = Math.min(4 - λ43e4e3c0c2ab, λ4769880ed20e.length - λa0c8519a6e28);
          if (λ61e794e15ecc.set(λ4769880ed20e.subarray(λa0c8519a6e28, λa0c8519a6e28 + λd2d01bdf4cf8), λ43e4e3c0c2ab), 
          λ43e4e3c0c2ab += λd2d01bdf4cf8, λa0c8519a6e28 += λd2d01bdf4cf8, λ43e4e3c0c2ab < 4) continue;
          const λ7e7ba857c1fd = new DataView(λ61e794e15ecc.buffer).getUint32(0, !0);
          if (λ7e7ba857c1fd > 2097152) throw new Error("Relay frame is too large");
          λa89cfab1ee9c = new Uint8Array(λ7e7ba857c1fd), λcdae28ee9673 = 0, λ43e4e3c0c2ab = 0;
        }
        const λd2d01bdf4cf8 = Math.min(λa89cfab1ee9c.length - λcdae28ee9673, λ4769880ed20e.length - λa0c8519a6e28);
        λa89cfab1ee9c.set(λ4769880ed20e.subarray(λa0c8519a6e28, λa0c8519a6e28 + λd2d01bdf4cf8), λcdae28ee9673), 
        λcdae28ee9673 += λd2d01bdf4cf8, λa0c8519a6e28 += λd2d01bdf4cf8, λcdae28ee9673 === λa89cfab1ee9c.length && (λ7e7ba857c1fd(λa89cfab1ee9c.buffer), 
        λa89cfab1ee9c = null);
      }
    }
    if (λ43e4e3c0c2ab || λa89cfab1ee9c) throw new Error("Incomplete relay frame");
  } finally {
    await λd55863836bf5.cancel().catch(() => {}), λd55863836bf5.releaseLock();
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
  constructor(λd2d01bdf4cf8) {
    super(), this.url = String(λd2d01bdf4cf8), this.abort = new AbortController, this.sequence = 0, 
    this.queue = [], this.sending = !1, this.start();
  }
  emit(λd2d01bdf4cf8, λ7e7ba857c1fd = new Event(λd2d01bdf4cf8)) {
    this.dispatchEvent(λ7e7ba857c1fd), this["on" + λd2d01bdf4cf8]?.call(this, λ7e7ba857c1fd);
  }
  async request(λd2d01bdf4cf8, λ7e7ba857c1fd = {}, λ005ee7f28aeb = AbortSignal.timeout(3e4)) {
    const λd55863836bf5 = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/tutsi-relay/" + λd2d01bdf4cf8, {
      ...λ7e7ba857c1fd,
      cache: "no-store",
      credentials: "same-origin",
      signal: AbortSignal.any([ this.abort.signal, λ005ee7f28aeb ]),
      headers: {
        ...λ7e7ba857c1fd.headers,
        ...this.token ? {
          Authorization: "Bearer " + this.token
        } : {}
      }
    });
    if (!λd55863836bf5.ok) throw new Error("Connection unavailable");
    return λd55863836bf5;
  }
  async start() {
    try {
      const λd2d01bdf4cf8 = await (await this.request("sessions", {
        method: "POST"
      })).json();
      if (this.token = λd2d01bdf4cf8.token, this.batchSend = 1 === λd2d01bdf4cf8.sendBatch, 
      0 !== this.readyState) return this.cleanup();
      for (this.readyState = 1, this.emit("open"); 1 === this.readyState; ) {
        const λd2d01bdf4cf8 = new AbortController;
        let λ7e7ba857c1fd;
        const s = () => {
          clearTimeout(λ7e7ba857c1fd), λ7e7ba857c1fd = setTimeout(() => λd2d01bdf4cf8.abort(), 3e4);
        };
        s();
        try {
          const λ7e7ba857c1fd = await this.request("receive", {}, AbortSignal.any([ λd2d01bdf4cf8.signal, AbortSignal.timeout(12e4) ]));
          if (204 === λ7e7ba857c1fd.status) continue;
          s(), await readRelayFrames(λ7e7ba857c1fd.body, λd2d01bdf4cf8 => {
            1 === this.readyState && this.emit("message", new MessageEvent("message", {
              data: "arraybuffer" === this.binaryType ? λd2d01bdf4cf8 : new Blob([ λd2d01bdf4cf8 ])
            }));
          }, s);
        } finally {
          clearTimeout(λ7e7ba857c1fd);
        }
      }
    } catch {
      this.readyState < 2 && (this.emit("error"), this.close(1006));
    }
  }
  send(λd2d01bdf4cf8) {
    if (1 !== this.readyState) throw new DOMException("Socket is not open", "InvalidStateError");
    const λ7e7ba857c1fd = new Blob([ λd2d01bdf4cf8 ]);
    if (λ7e7ba857c1fd.size > 262144 || this.bufferedAmount + λ7e7ba857c1fd.size > 2097152 || this.queue.length >= 512) return this.emit("error"), 
    void this.close(1006);
    this.bufferedAmount += λ7e7ba857c1fd.size, this.queue.push(λ7e7ba857c1fd), this.flush();
  }
  flush() {
    !this.sending && 1 === this.readyState && this.queue.length && (this.sending = !0, 
    Promise.resolve().then(async () => {
      for (;1 === this.readyState && this.queue.length; ) {
        const λd2d01bdf4cf8 = [], λ7e7ba857c1fd = [];
        let λ005ee7f28aeb = 0, λd55863836bf5 = 0;
        do {
          const λ61e794e15ecc = this.queue[0];
          if (λd2d01bdf4cf8.length && λd55863836bf5 + 4 + λ61e794e15ecc.size > 1048576) break;
          if (this.queue.shift(), λd2d01bdf4cf8.push(λ61e794e15ecc), λ005ee7f28aeb += λ61e794e15ecc.size, 
          λd55863836bf5 += λ61e794e15ecc.size + 4, this.batchSend) {
            const λd2d01bdf4cf8 = new Uint8Array(4);
            new DataView(λd2d01bdf4cf8.buffer).setUint32(0, λ61e794e15ecc.size, !0), λ7e7ba857c1fd.push(λd2d01bdf4cf8, λ61e794e15ecc);
          }
        } while (this.batchSend && this.queue.length && λd2d01bdf4cf8.length < 64);
        const λ61e794e15ecc = this.sequence;
        if (this.sequence += λd2d01bdf4cf8.length, await this.request(this.batchSend ? "send-batch" : "send", {
          method: "POST",
          headers: {
            "Content-Type": "application/octet-stream",
            "X-Tutsi-Sequence": String(λ61e794e15ecc)
          },
          body: this.batchSend ? new Blob(λ7e7ba857c1fd) : λd2d01bdf4cf8[0]
        }), 1 !== this.readyState) return;
        this.bufferedAmount -= λ005ee7f28aeb;
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
  close(λd2d01bdf4cf8 = 1e3, λ7e7ba857c1fd = "") {
    3 !== this.readyState && (this.readyState = 3, this.abort.abort(), this.cleanup(), 
    this.bufferedAmount = 0, this.queue.length = 0, this.emit("close", new CloseEvent("close", {
      code: λd2d01bdf4cf8,
      reason: λ7e7ba857c1fd,
      wasClean: 1e3 === λd2d01bdf4cf8
    })));
  }
}

const λd2d01bdf4cf8 = new Map;

export function createHttpRelayEndpoint() {
  const λ7e7ba857c1fd = httpRelayUrl() + crypto.randomUUID() + "/", λ005ee7f28aeb = new Set;
  return λd2d01bdf4cf8.set(λ7e7ba857c1fd, λ005ee7f28aeb), {
    url: λ7e7ba857c1fd,
    close() {
      λd2d01bdf4cf8.delete(λ7e7ba857c1fd);
      for (const λd2d01bdf4cf8 of λ005ee7f28aeb) λd2d01bdf4cf8.close();
      λ005ee7f28aeb.clear();
    }
  };
}

let λ7e7ba857c1fd = !1;

export function installHttpRelaySocket() {
  if (λ7e7ba857c1fd) return;
  λ7e7ba857c1fd = !0;
  const λ005ee7f28aeb = globalThis.WebSocket;
  function t(λ7e7ba857c1fd, λd55863836bf5) {
    const λ61e794e15ecc = String(λ7e7ba857c1fd), λ43e4e3c0c2ab = λd2d01bdf4cf8.get(λ61e794e15ecc);
    if (λ61e794e15ecc === httpRelayUrl() || λ43e4e3c0c2ab) {
      const λd2d01bdf4cf8 = new HttpRelaySocket(λ7e7ba857c1fd);
      return λ43e4e3c0c2ab && (λ43e4e3c0c2ab.add(λd2d01bdf4cf8), λd2d01bdf4cf8.addEventListener("close", () => λ43e4e3c0c2ab.delete(λd2d01bdf4cf8), {
        once: !0
      })), λd2d01bdf4cf8;
    }
    return void 0 === λd55863836bf5 ? new λ005ee7f28aeb(λ7e7ba857c1fd) : new λ005ee7f28aeb(λ7e7ba857c1fd, λd55863836bf5);
  }
  Object.setPrototypeOf(t, λ005ee7f28aeb), t.prototype = λ005ee7f28aeb.prototype, 
  Object.defineProperty(t, Symbol.hasInstance, {
    value: λd2d01bdf4cf8 => λd2d01bdf4cf8 instanceof λ005ee7f28aeb || λd2d01bdf4cf8 instanceof HttpRelaySocket
  }), globalThis.WebSocket = t, addEventListener("pagehide", () => {
    for (const λ7e7ba857c1fd of λd2d01bdf4cf8.values()) for (const λd2d01bdf4cf8 of λ7e7ba857c1fd) λd2d01bdf4cf8.close();
    λd2d01bdf4cf8.clear();
  });
}
