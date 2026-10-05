export const httpRelayUrl = (λecb57e15a67b = location) => `${"https:" === λecb57e15a67b.protocol ? "wss:" : "ws:"}//${λecb57e15a67b.host}/api/tutsi-relay/socket/`;

export async function readRelayFrames(λecb57e15a67b, λd785f2b33f2a, λ3266c5e299a0 = () => {}) {
  const λfc3f22c9304f = λecb57e15a67b.getReader(), λ994b5ee4f145 = new Uint8Array(4);
  let λ23013e725441 = 0, λ965dfe05cfef = null, λ1b3e6b3b58f4 = 0, λ3b17631a89dd = 0;
  try {
    for (;;) {
      const {done: λecb57e15a67b, value: λ5bd6f47a007a} = await λfc3f22c9304f.read();
      if (λecb57e15a67b) break;
      if (!λ5bd6f47a007a?.length) continue;
      if (λ3266c5e299a0(), λ3b17631a89dd += λ5bd6f47a007a.length, λ3b17631a89dd > 20971520) throw new Error("Relay response is too large");
      let λ1509300247e1 = 0;
      for (;λ1509300247e1 < λ5bd6f47a007a.length; ) {
        if (!λ965dfe05cfef) {
          const λecb57e15a67b = Math.min(4 - λ23013e725441, λ5bd6f47a007a.length - λ1509300247e1);
          if (λ994b5ee4f145.set(λ5bd6f47a007a.subarray(λ1509300247e1, λ1509300247e1 + λecb57e15a67b), λ23013e725441), 
          λ23013e725441 += λecb57e15a67b, λ1509300247e1 += λecb57e15a67b, λ23013e725441 < 4) continue;
          const λd785f2b33f2a = new DataView(λ994b5ee4f145.buffer).getUint32(0, !0);
          if (λd785f2b33f2a > 2097152) throw new Error("Relay frame is too large");
          λ965dfe05cfef = new Uint8Array(λd785f2b33f2a), λ1b3e6b3b58f4 = 0, λ23013e725441 = 0;
        }
        const λecb57e15a67b = Math.min(λ965dfe05cfef.length - λ1b3e6b3b58f4, λ5bd6f47a007a.length - λ1509300247e1);
        λ965dfe05cfef.set(λ5bd6f47a007a.subarray(λ1509300247e1, λ1509300247e1 + λecb57e15a67b), λ1b3e6b3b58f4), 
        λ1b3e6b3b58f4 += λecb57e15a67b, λ1509300247e1 += λecb57e15a67b, λ1b3e6b3b58f4 === λ965dfe05cfef.length && (λd785f2b33f2a(λ965dfe05cfef.buffer), 
        λ965dfe05cfef = null);
      }
    }
    if (λ23013e725441 || λ965dfe05cfef) throw new Error("Incomplete relay frame");
  } finally {
    await λfc3f22c9304f.cancel().catch(() => {}), λfc3f22c9304f.releaseLock();
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
  constructor(λecb57e15a67b) {
    super(), this.url = String(λecb57e15a67b), this.abort = new AbortController, this.sequence = 0, 
    this.queue = [], this.sending = !1, this.start();
  }
  emit(λecb57e15a67b, λd785f2b33f2a = new Event(λecb57e15a67b)) {
    this.dispatchEvent(λd785f2b33f2a), this["on" + λecb57e15a67b]?.call(this, λd785f2b33f2a);
  }
  async request(λecb57e15a67b, λd785f2b33f2a = {}, λ3266c5e299a0 = AbortSignal.timeout(3e4)) {
    const λfc3f22c9304f = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/tutsi-relay/" + λecb57e15a67b, {
      ...λd785f2b33f2a,
      cache: "no-store",
      credentials: "same-origin",
      signal: AbortSignal.any([ this.abort.signal, λ3266c5e299a0 ]),
      headers: {
        ...λd785f2b33f2a.headers,
        ...this.token ? {
          Authorization: "Bearer " + this.token
        } : {}
      }
    });
    if (!λfc3f22c9304f.ok) throw new Error("Connection unavailable");
    return λfc3f22c9304f;
  }
  async start() {
    try {
      const λecb57e15a67b = await (await this.request("sessions", {
        method: "POST"
      })).json();
      if (this.token = λecb57e15a67b.token, this.batchSend = 1 === λecb57e15a67b.sendBatch, 
      0 !== this.readyState) return this.cleanup();
      for (this.readyState = 1, this.emit("open"); 1 === this.readyState; ) {
        const λecb57e15a67b = new AbortController;
        let λd785f2b33f2a;
        const s = () => {
          clearTimeout(λd785f2b33f2a), λd785f2b33f2a = setTimeout(() => λecb57e15a67b.abort(), 3e4);
        };
        s();
        try {
          const λd785f2b33f2a = await this.request("receive", {}, AbortSignal.any([ λecb57e15a67b.signal, AbortSignal.timeout(12e4) ]));
          if (204 === λd785f2b33f2a.status) continue;
          s(), await readRelayFrames(λd785f2b33f2a.body, λecb57e15a67b => {
            1 === this.readyState && this.emit("message", new MessageEvent("message", {
              data: "arraybuffer" === this.binaryType ? λecb57e15a67b : new Blob([ λecb57e15a67b ])
            }));
          }, s);
        } finally {
          clearTimeout(λd785f2b33f2a);
        }
      }
    } catch {
      this.readyState < 2 && (this.emit("error"), this.close(1006));
    }
  }
  send(λecb57e15a67b) {
    if (1 !== this.readyState) throw new DOMException("Socket is not open", "InvalidStateError");
    const λd785f2b33f2a = new Blob([ λecb57e15a67b ]);
    if (λd785f2b33f2a.size > 262144 || this.bufferedAmount + λd785f2b33f2a.size > 2097152 || this.queue.length >= 512) return this.emit("error"), 
    void this.close(1006);
    this.bufferedAmount += λd785f2b33f2a.size, this.queue.push(λd785f2b33f2a), this.flush();
  }
  flush() {
    !this.sending && 1 === this.readyState && this.queue.length && (this.sending = !0, 
    Promise.resolve().then(async () => {
      for (;1 === this.readyState && this.queue.length; ) {
        const λecb57e15a67b = [], λd785f2b33f2a = [];
        let λ3266c5e299a0 = 0, λfc3f22c9304f = 0;
        do {
          const λ994b5ee4f145 = this.queue[0];
          if (λecb57e15a67b.length && λfc3f22c9304f + 4 + λ994b5ee4f145.size > 1048576) break;
          if (this.queue.shift(), λecb57e15a67b.push(λ994b5ee4f145), λ3266c5e299a0 += λ994b5ee4f145.size, 
          λfc3f22c9304f += λ994b5ee4f145.size + 4, this.batchSend) {
            const λecb57e15a67b = new Uint8Array(4);
            new DataView(λecb57e15a67b.buffer).setUint32(0, λ994b5ee4f145.size, !0), λd785f2b33f2a.push(λecb57e15a67b, λ994b5ee4f145);
          }
        } while (this.batchSend && this.queue.length && λecb57e15a67b.length < 64);
        const λ994b5ee4f145 = this.sequence;
        if (this.sequence += λecb57e15a67b.length, await this.request(this.batchSend ? "send-batch" : "send", {
          method: "POST",
          headers: {
            "Content-Type": "application/octet-stream",
            "X-Tutsi-Sequence": String(λ994b5ee4f145)
          },
          body: this.batchSend ? new Blob(λd785f2b33f2a) : λecb57e15a67b[0]
        }), 1 !== this.readyState) return;
        this.bufferedAmount -= λ3266c5e299a0;
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
  close(λecb57e15a67b = 1e3, λd785f2b33f2a = "") {
    3 !== this.readyState && (this.readyState = 3, this.abort.abort(), this.cleanup(), 
    this.bufferedAmount = 0, this.queue.length = 0, this.emit("close", new CloseEvent("close", {
      code: λecb57e15a67b,
      reason: λd785f2b33f2a,
      wasClean: 1e3 === λecb57e15a67b
    })));
  }
}

const λecb57e15a67b = new Map;

export function createHttpRelayEndpoint() {
  const λd785f2b33f2a = httpRelayUrl() + crypto.randomUUID() + "/", λ3266c5e299a0 = new Set;
  return λecb57e15a67b.set(λd785f2b33f2a, λ3266c5e299a0), {
    url: λd785f2b33f2a,
    close() {
      λecb57e15a67b.delete(λd785f2b33f2a);
      for (const λecb57e15a67b of λ3266c5e299a0) λecb57e15a67b.close();
      λ3266c5e299a0.clear();
    }
  };
}

let λd785f2b33f2a = !1;

export function installHttpRelaySocket() {
  if (λd785f2b33f2a) return;
  λd785f2b33f2a = !0;
  const λ3266c5e299a0 = globalThis.WebSocket;
  function t(λd785f2b33f2a, λfc3f22c9304f) {
    const λ994b5ee4f145 = String(λd785f2b33f2a), λ23013e725441 = λecb57e15a67b.get(λ994b5ee4f145);
    if (λ994b5ee4f145 === httpRelayUrl() || λ23013e725441) {
      const λecb57e15a67b = new HttpRelaySocket(λd785f2b33f2a);
      return λ23013e725441 && (λ23013e725441.add(λecb57e15a67b), λecb57e15a67b.addEventListener("close", () => λ23013e725441.delete(λecb57e15a67b), {
        once: !0
      })), λecb57e15a67b;
    }
    return void 0 === λfc3f22c9304f ? new λ3266c5e299a0(λd785f2b33f2a) : new λ3266c5e299a0(λd785f2b33f2a, λfc3f22c9304f);
  }
  Object.setPrototypeOf(t, λ3266c5e299a0), t.prototype = λ3266c5e299a0.prototype, 
  Object.defineProperty(t, Symbol.hasInstance, {
    value: λecb57e15a67b => λecb57e15a67b instanceof λ3266c5e299a0 || λecb57e15a67b instanceof HttpRelaySocket
  }), globalThis.WebSocket = t, addEventListener("pagehide", () => {
    for (const λd785f2b33f2a of λecb57e15a67b.values()) for (const λecb57e15a67b of λd785f2b33f2a) λecb57e15a67b.close();
    λecb57e15a67b.clear();
  });
}
