export const httpRelayUrl = (λec9f0677dd64 = location) => `${"https:" === λec9f0677dd64.protocol ? "wss:" : "ws:"}//${λec9f0677dd64.host}/api/tutsi-relay/socket/`;

export async function readRelayFrames(λec9f0677dd64, λddc30feeba9f, λ84a742b52447 = () => {}) {
  const λ162e8430a3ae = λec9f0677dd64.getReader(), λ68c52a2fbb00 = new Uint8Array(4);
  let λc6b1e88dfa1c = 0, λ6fa823a0d763 = null, λ9f6f7ff92002 = 0, λ56b6a8ee5b20 = 0;
  try {
    for (;;) {
      const {done: λec9f0677dd64, value: λe1bf533d661b} = await λ162e8430a3ae.read();
      if (λec9f0677dd64) break;
      if (!λe1bf533d661b?.length) continue;
      if (λ84a742b52447(), λ56b6a8ee5b20 += λe1bf533d661b.length, λ56b6a8ee5b20 > 20971520) throw new Error("Relay response is too large");
      let λ2356cf1911e0 = 0;
      for (;λ2356cf1911e0 < λe1bf533d661b.length; ) {
        if (!λ6fa823a0d763) {
          const λec9f0677dd64 = Math.min(4 - λc6b1e88dfa1c, λe1bf533d661b.length - λ2356cf1911e0);
          if (λ68c52a2fbb00.set(λe1bf533d661b.subarray(λ2356cf1911e0, λ2356cf1911e0 + λec9f0677dd64), λc6b1e88dfa1c), 
          λc6b1e88dfa1c += λec9f0677dd64, λ2356cf1911e0 += λec9f0677dd64, λc6b1e88dfa1c < 4) continue;
          const λddc30feeba9f = new DataView(λ68c52a2fbb00.buffer).getUint32(0, !0);
          if (λddc30feeba9f > 2097152) throw new Error("Relay frame is too large");
          λ6fa823a0d763 = new Uint8Array(λddc30feeba9f), λ9f6f7ff92002 = 0, λc6b1e88dfa1c = 0;
        }
        const λec9f0677dd64 = Math.min(λ6fa823a0d763.length - λ9f6f7ff92002, λe1bf533d661b.length - λ2356cf1911e0);
        λ6fa823a0d763.set(λe1bf533d661b.subarray(λ2356cf1911e0, λ2356cf1911e0 + λec9f0677dd64), λ9f6f7ff92002), 
        λ9f6f7ff92002 += λec9f0677dd64, λ2356cf1911e0 += λec9f0677dd64, λ9f6f7ff92002 === λ6fa823a0d763.length && (λddc30feeba9f(λ6fa823a0d763.buffer), 
        λ6fa823a0d763 = null);
      }
    }
    if (λc6b1e88dfa1c || λ6fa823a0d763) throw new Error("Incomplete relay frame");
  } finally {
    await λ162e8430a3ae.cancel().catch(() => {}), λ162e8430a3ae.releaseLock();
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
  constructor(λec9f0677dd64) {
    super(), this.url = String(λec9f0677dd64), this.abort = new AbortController, this.sequence = 0, 
    this.queue = [], this.sending = !1, this.start();
  }
  emit(λec9f0677dd64, λddc30feeba9f = new Event(λec9f0677dd64)) {
    this.dispatchEvent(λddc30feeba9f), this["on" + λec9f0677dd64]?.call(this, λddc30feeba9f);
  }
  async request(λec9f0677dd64, λddc30feeba9f = {}, λ84a742b52447 = AbortSignal.timeout(3e4)) {
    const λ162e8430a3ae = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/tutsi-relay/" + λec9f0677dd64, {
      ...λddc30feeba9f,
      cache: "no-store",
      credentials: "same-origin",
      signal: AbortSignal.any([ this.abort.signal, λ84a742b52447 ]),
      headers: {
        ...λddc30feeba9f.headers,
        ...this.token ? {
          Authorization: "Bearer " + this.token
        } : {}
      }
    });
    if (!λ162e8430a3ae.ok) throw new Error("Connection unavailable");
    return λ162e8430a3ae;
  }
  async start() {
    try {
      const λec9f0677dd64 = await (await this.request("sessions", {
        method: "POST"
      })).json();
      if (this.token = λec9f0677dd64.token, this.batchSend = 1 === λec9f0677dd64.sendBatch, 
      0 !== this.readyState) return this.cleanup();
      for (this.readyState = 1, this.emit("open"); 1 === this.readyState; ) {
        const λec9f0677dd64 = new AbortController;
        let λddc30feeba9f;
        const s = () => {
          clearTimeout(λddc30feeba9f), λddc30feeba9f = setTimeout(() => λec9f0677dd64.abort(), 3e4);
        };
        s();
        try {
          const λddc30feeba9f = await this.request("receive", {}, AbortSignal.any([ λec9f0677dd64.signal, AbortSignal.timeout(12e4) ]));
          if (204 === λddc30feeba9f.status) continue;
          s(), await readRelayFrames(λddc30feeba9f.body, λec9f0677dd64 => {
            1 === this.readyState && this.emit("message", new MessageEvent("message", {
              data: "arraybuffer" === this.binaryType ? λec9f0677dd64 : new Blob([ λec9f0677dd64 ])
            }));
          }, s);
        } finally {
          clearTimeout(λddc30feeba9f);
        }
      }
    } catch {
      this.readyState < 2 && (this.emit("error"), this.close(1006));
    }
  }
  send(λec9f0677dd64) {
    if (1 !== this.readyState) throw new DOMException("Socket is not open", "InvalidStateError");
    const λddc30feeba9f = new Blob([ λec9f0677dd64 ]);
    if (λddc30feeba9f.size > 262144 || this.bufferedAmount + λddc30feeba9f.size > 2097152 || this.queue.length >= 512) return this.emit("error"), 
    void this.close(1006);
    this.bufferedAmount += λddc30feeba9f.size, this.queue.push(λddc30feeba9f), this.flush();
  }
  flush() {
    !this.sending && 1 === this.readyState && this.queue.length && (this.sending = !0, 
    Promise.resolve().then(async () => {
      for (;1 === this.readyState && this.queue.length; ) {
        const λec9f0677dd64 = [], λddc30feeba9f = [];
        let λ84a742b52447 = 0, λ162e8430a3ae = 0;
        do {
          const λ68c52a2fbb00 = this.queue[0];
          if (λec9f0677dd64.length && λ162e8430a3ae + 4 + λ68c52a2fbb00.size > 1048576) break;
          if (this.queue.shift(), λec9f0677dd64.push(λ68c52a2fbb00), λ84a742b52447 += λ68c52a2fbb00.size, 
          λ162e8430a3ae += λ68c52a2fbb00.size + 4, this.batchSend) {
            const λec9f0677dd64 = new Uint8Array(4);
            new DataView(λec9f0677dd64.buffer).setUint32(0, λ68c52a2fbb00.size, !0), λddc30feeba9f.push(λec9f0677dd64, λ68c52a2fbb00);
          }
        } while (this.batchSend && this.queue.length && λec9f0677dd64.length < 64);
        const λ68c52a2fbb00 = this.sequence;
        if (this.sequence += λec9f0677dd64.length, await this.request(this.batchSend ? "send-batch" : "send", {
          method: "POST",
          headers: {
            "Content-Type": "application/octet-stream",
            "X-Tutsi-Sequence": String(λ68c52a2fbb00)
          },
          body: this.batchSend ? new Blob(λddc30feeba9f) : λec9f0677dd64[0]
        }), 1 !== this.readyState) return;
        this.bufferedAmount -= λ84a742b52447;
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
  close(λec9f0677dd64 = 1e3, λddc30feeba9f = "") {
    3 !== this.readyState && (this.readyState = 3, this.abort.abort(), this.cleanup(), 
    this.bufferedAmount = 0, this.queue.length = 0, this.emit("close", new CloseEvent("close", {
      code: λec9f0677dd64,
      reason: λddc30feeba9f,
      wasClean: 1e3 === λec9f0677dd64
    })));
  }
}

const λec9f0677dd64 = new Map;

export function createHttpRelayEndpoint() {
  const λddc30feeba9f = httpRelayUrl() + crypto.randomUUID() + "/", λ84a742b52447 = new Set;
  return λec9f0677dd64.set(λddc30feeba9f, λ84a742b52447), {
    url: λddc30feeba9f,
    close() {
      λec9f0677dd64.delete(λddc30feeba9f);
      for (const λec9f0677dd64 of λ84a742b52447) λec9f0677dd64.close();
      λ84a742b52447.clear();
    }
  };
}

let λddc30feeba9f = !1;

export function installHttpRelaySocket() {
  if (λddc30feeba9f) return;
  λddc30feeba9f = !0;
  const λ84a742b52447 = globalThis.WebSocket;
  function t(λddc30feeba9f, λ162e8430a3ae) {
    const λ68c52a2fbb00 = String(λddc30feeba9f), λc6b1e88dfa1c = λec9f0677dd64.get(λ68c52a2fbb00);
    if (λ68c52a2fbb00 === httpRelayUrl() || λc6b1e88dfa1c) {
      const λec9f0677dd64 = new HttpRelaySocket(λddc30feeba9f);
      return λc6b1e88dfa1c && (λc6b1e88dfa1c.add(λec9f0677dd64), λec9f0677dd64.addEventListener("close", () => λc6b1e88dfa1c.delete(λec9f0677dd64), {
        once: !0
      })), λec9f0677dd64;
    }
    return void 0 === λ162e8430a3ae ? new λ84a742b52447(λddc30feeba9f) : new λ84a742b52447(λddc30feeba9f, λ162e8430a3ae);
  }
  Object.setPrototypeOf(t, λ84a742b52447), t.prototype = λ84a742b52447.prototype, 
  Object.defineProperty(t, Symbol.hasInstance, {
    value: λec9f0677dd64 => λec9f0677dd64 instanceof λ84a742b52447 || λec9f0677dd64 instanceof HttpRelaySocket
  }), globalThis.WebSocket = t, addEventListener("pagehide", () => {
    for (const λddc30feeba9f of λec9f0677dd64.values()) for (const λec9f0677dd64 of λddc30feeba9f) λec9f0677dd64.close();
    λec9f0677dd64.clear();
  });
}
