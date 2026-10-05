export const httpRelayUrl = (λ7ac1fc690877 = location) => `${"https:" === λ7ac1fc690877.protocol ? "wss:" : "ws:"}//${λ7ac1fc690877.host}/api/tutsi-relay/socket/`;

export async function readRelayFrames(λ7ac1fc690877, λ1201985ab415, λ5f24269f7324 = () => {}) {
  const λ5c11795bf066 = λ7ac1fc690877.getReader(), λ1e6976d37538 = new Uint8Array(4);
  let λ5689d8f1ac2a = 0, λ74bd5860bc57 = null, λ6303acb17137 = 0, λ5489c2c7cc57 = 0;
  try {
    for (;;) {
      const {done: λ7ac1fc690877, value: λe7a9805887ca} = await λ5c11795bf066.read();
      if (λ7ac1fc690877) break;
      if (!λe7a9805887ca?.length) continue;
      if (λ5f24269f7324(), λ5489c2c7cc57 += λe7a9805887ca.length, λ5489c2c7cc57 > 20971520) throw new Error("Relay response is too large");
      let λ84906ae4b533 = 0;
      for (;λ84906ae4b533 < λe7a9805887ca.length; ) {
        if (!λ74bd5860bc57) {
          const λ7ac1fc690877 = Math.min(4 - λ5689d8f1ac2a, λe7a9805887ca.length - λ84906ae4b533);
          if (λ1e6976d37538.set(λe7a9805887ca.subarray(λ84906ae4b533, λ84906ae4b533 + λ7ac1fc690877), λ5689d8f1ac2a), 
          λ5689d8f1ac2a += λ7ac1fc690877, λ84906ae4b533 += λ7ac1fc690877, λ5689d8f1ac2a < 4) continue;
          const λ1201985ab415 = new DataView(λ1e6976d37538.buffer).getUint32(0, !0);
          if (λ1201985ab415 > 2097152) throw new Error("Relay frame is too large");
          λ74bd5860bc57 = new Uint8Array(λ1201985ab415), λ6303acb17137 = 0, λ5689d8f1ac2a = 0;
        }
        const λ7ac1fc690877 = Math.min(λ74bd5860bc57.length - λ6303acb17137, λe7a9805887ca.length - λ84906ae4b533);
        λ74bd5860bc57.set(λe7a9805887ca.subarray(λ84906ae4b533, λ84906ae4b533 + λ7ac1fc690877), λ6303acb17137), 
        λ6303acb17137 += λ7ac1fc690877, λ84906ae4b533 += λ7ac1fc690877, λ6303acb17137 === λ74bd5860bc57.length && (λ1201985ab415(λ74bd5860bc57.buffer), 
        λ74bd5860bc57 = null);
      }
    }
    if (λ5689d8f1ac2a || λ74bd5860bc57) throw new Error("Incomplete relay frame");
  } finally {
    await λ5c11795bf066.cancel().catch(() => {}), λ5c11795bf066.releaseLock();
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
  constructor(λ7ac1fc690877) {
    super(), this.url = String(λ7ac1fc690877), this.abort = new AbortController, this.sequence = 0, 
    this.queue = [], this.sending = !1, this.start();
  }
  emit(λ7ac1fc690877, λ1201985ab415 = new Event(λ7ac1fc690877)) {
    this.dispatchEvent(λ1201985ab415), this["on" + λ7ac1fc690877]?.call(this, λ1201985ab415);
  }
  async request(λ7ac1fc690877, λ1201985ab415 = {}, λ5f24269f7324 = AbortSignal.timeout(3e4)) {
    const λ5c11795bf066 = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/tutsi-relay/" + λ7ac1fc690877, {
      ...λ1201985ab415,
      cache: "no-store",
      credentials: "same-origin",
      signal: AbortSignal.any([ this.abort.signal, λ5f24269f7324 ]),
      headers: {
        ...λ1201985ab415.headers,
        ...this.token ? {
          Authorization: "Bearer " + this.token
        } : {}
      }
    });
    if (!λ5c11795bf066.ok) throw new Error("Connection unavailable");
    return λ5c11795bf066;
  }
  async start() {
    try {
      const λ7ac1fc690877 = await (await this.request("sessions", {
        method: "POST"
      })).json();
      if (this.token = λ7ac1fc690877.token, this.batchSend = 1 === λ7ac1fc690877.sendBatch, 
      0 !== this.readyState) return this.cleanup();
      for (this.readyState = 1, this.emit("open"); 1 === this.readyState; ) {
        const λ7ac1fc690877 = new AbortController;
        let λ1201985ab415;
        const s = () => {
          clearTimeout(λ1201985ab415), λ1201985ab415 = setTimeout(() => λ7ac1fc690877.abort(), 3e4);
        };
        s();
        try {
          const λ1201985ab415 = await this.request("receive", {}, AbortSignal.any([ λ7ac1fc690877.signal, AbortSignal.timeout(12e4) ]));
          if (204 === λ1201985ab415.status) continue;
          s(), await readRelayFrames(λ1201985ab415.body, λ7ac1fc690877 => {
            1 === this.readyState && this.emit("message", new MessageEvent("message", {
              data: "arraybuffer" === this.binaryType ? λ7ac1fc690877 : new Blob([ λ7ac1fc690877 ])
            }));
          }, s);
        } finally {
          clearTimeout(λ1201985ab415);
        }
      }
    } catch {
      this.readyState < 2 && (this.emit("error"), this.close(1006));
    }
  }
  send(λ7ac1fc690877) {
    if (1 !== this.readyState) throw new DOMException("Socket is not open", "InvalidStateError");
    const λ1201985ab415 = new Blob([ λ7ac1fc690877 ]);
    if (λ1201985ab415.size > 262144 || this.bufferedAmount + λ1201985ab415.size > 2097152 || this.queue.length >= 512) return this.emit("error"), 
    void this.close(1006);
    this.bufferedAmount += λ1201985ab415.size, this.queue.push(λ1201985ab415), this.flush();
  }
  flush() {
    !this.sending && 1 === this.readyState && this.queue.length && (this.sending = !0, 
    Promise.resolve().then(async () => {
      for (;1 === this.readyState && this.queue.length; ) {
        const λ7ac1fc690877 = [], λ1201985ab415 = [];
        let λ5f24269f7324 = 0, λ5c11795bf066 = 0;
        do {
          const λ1e6976d37538 = this.queue[0];
          if (λ7ac1fc690877.length && λ5c11795bf066 + 4 + λ1e6976d37538.size > 1048576) break;
          if (this.queue.shift(), λ7ac1fc690877.push(λ1e6976d37538), λ5f24269f7324 += λ1e6976d37538.size, 
          λ5c11795bf066 += λ1e6976d37538.size + 4, this.batchSend) {
            const λ7ac1fc690877 = new Uint8Array(4);
            new DataView(λ7ac1fc690877.buffer).setUint32(0, λ1e6976d37538.size, !0), λ1201985ab415.push(λ7ac1fc690877, λ1e6976d37538);
          }
        } while (this.batchSend && this.queue.length && λ7ac1fc690877.length < 64);
        const λ1e6976d37538 = this.sequence;
        if (this.sequence += λ7ac1fc690877.length, await this.request(this.batchSend ? "send-batch" : "send", {
          method: "POST",
          headers: {
            "Content-Type": "application/octet-stream",
            "X-Tutsi-Sequence": String(λ1e6976d37538)
          },
          body: this.batchSend ? new Blob(λ1201985ab415) : λ7ac1fc690877[0]
        }), 1 !== this.readyState) return;
        this.bufferedAmount -= λ5f24269f7324;
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
  close(λ7ac1fc690877 = 1e3, λ1201985ab415 = "") {
    3 !== this.readyState && (this.readyState = 3, this.abort.abort(), this.cleanup(), 
    this.bufferedAmount = 0, this.queue.length = 0, this.emit("close", new CloseEvent("close", {
      code: λ7ac1fc690877,
      reason: λ1201985ab415,
      wasClean: 1e3 === λ7ac1fc690877
    })));
  }
}

const λ7ac1fc690877 = new Map;

export function createHttpRelayEndpoint() {
  const λ1201985ab415 = httpRelayUrl() + crypto.randomUUID() + "/", λ5f24269f7324 = new Set;
  return λ7ac1fc690877.set(λ1201985ab415, λ5f24269f7324), {
    url: λ1201985ab415,
    close() {
      λ7ac1fc690877.delete(λ1201985ab415);
      for (const λ7ac1fc690877 of λ5f24269f7324) λ7ac1fc690877.close();
      λ5f24269f7324.clear();
    }
  };
}

let λ1201985ab415 = !1;

export function installHttpRelaySocket() {
  if (λ1201985ab415) return;
  λ1201985ab415 = !0;
  const λ5f24269f7324 = globalThis.WebSocket;
  function t(λ1201985ab415, λ5c11795bf066) {
    const λ1e6976d37538 = String(λ1201985ab415), λ5689d8f1ac2a = λ7ac1fc690877.get(λ1e6976d37538);
    if (λ1e6976d37538 === httpRelayUrl() || λ5689d8f1ac2a) {
      const λ7ac1fc690877 = new HttpRelaySocket(λ1201985ab415);
      return λ5689d8f1ac2a && (λ5689d8f1ac2a.add(λ7ac1fc690877), λ7ac1fc690877.addEventListener("close", () => λ5689d8f1ac2a.delete(λ7ac1fc690877), {
        once: !0
      })), λ7ac1fc690877;
    }
    return void 0 === λ5c11795bf066 ? new λ5f24269f7324(λ1201985ab415) : new λ5f24269f7324(λ1201985ab415, λ5c11795bf066);
  }
  Object.setPrototypeOf(t, λ5f24269f7324), t.prototype = λ5f24269f7324.prototype, 
  Object.defineProperty(t, Symbol.hasInstance, {
    value: λ7ac1fc690877 => λ7ac1fc690877 instanceof λ5f24269f7324 || λ7ac1fc690877 instanceof HttpRelaySocket
  }), globalThis.WebSocket = t, addEventListener("pagehide", () => {
    for (const λ1201985ab415 of λ7ac1fc690877.values()) for (const λ7ac1fc690877 of λ1201985ab415) λ7ac1fc690877.close();
    λ7ac1fc690877.clear();
  });
}
