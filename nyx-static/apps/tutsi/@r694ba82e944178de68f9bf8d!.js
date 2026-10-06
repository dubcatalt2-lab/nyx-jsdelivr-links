export const httpRelayUrl = (λ8b99981859c0 = location) => `${"https:" === λ8b99981859c0.protocol ? "wss:" : "ws:"}//${λ8b99981859c0.host}/api/tutsi-relay/socket/`;

export async function readRelayFrames(λ8b99981859c0, λ65ff72d81b64, λ3b1de0ffc2d2 = () => {}) {
  const λ64203a7f2038 = λ8b99981859c0.getReader(), λ0ee7fd3da36a = new Uint8Array(4);
  let λe5fb056c67f3 = 0, λ8f84d4d6c612 = null, λf2b2309067d1 = 0, λb6af14a791f4 = 0;
  try {
    for (;;) {
      const {done: λ8b99981859c0, value: λd768079c876c} = await λ64203a7f2038.read();
      if (λ8b99981859c0) break;
      if (!λd768079c876c?.length) continue;
      if (λ3b1de0ffc2d2(), λb6af14a791f4 += λd768079c876c.length, λb6af14a791f4 > 20971520) throw new Error("Relay response is too large");
      let λ40ee4e3907c9 = 0;
      for (;λ40ee4e3907c9 < λd768079c876c.length; ) {
        if (!λ8f84d4d6c612) {
          const λ8b99981859c0 = Math.min(4 - λe5fb056c67f3, λd768079c876c.length - λ40ee4e3907c9);
          if (λ0ee7fd3da36a.set(λd768079c876c.subarray(λ40ee4e3907c9, λ40ee4e3907c9 + λ8b99981859c0), λe5fb056c67f3), 
          λe5fb056c67f3 += λ8b99981859c0, λ40ee4e3907c9 += λ8b99981859c0, λe5fb056c67f3 < 4) continue;
          const λ65ff72d81b64 = new DataView(λ0ee7fd3da36a.buffer).getUint32(0, !0);
          if (λ65ff72d81b64 > 2097152) throw new Error("Relay frame is too large");
          λ8f84d4d6c612 = new Uint8Array(λ65ff72d81b64), λf2b2309067d1 = 0, λe5fb056c67f3 = 0;
        }
        const λ8b99981859c0 = Math.min(λ8f84d4d6c612.length - λf2b2309067d1, λd768079c876c.length - λ40ee4e3907c9);
        λ8f84d4d6c612.set(λd768079c876c.subarray(λ40ee4e3907c9, λ40ee4e3907c9 + λ8b99981859c0), λf2b2309067d1), 
        λf2b2309067d1 += λ8b99981859c0, λ40ee4e3907c9 += λ8b99981859c0, λf2b2309067d1 === λ8f84d4d6c612.length && (λ65ff72d81b64(λ8f84d4d6c612.buffer), 
        λ8f84d4d6c612 = null);
      }
    }
    if (λe5fb056c67f3 || λ8f84d4d6c612) throw new Error("Incomplete relay frame");
  } finally {
    await λ64203a7f2038.cancel().catch(() => {}), λ64203a7f2038.releaseLock();
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
  constructor(λ8b99981859c0) {
    super(), this.url = String(λ8b99981859c0), this.abort = new AbortController, this.sequence = 0, 
    this.queue = [], this.sending = !1, this.start();
  }
  emit(λ8b99981859c0, λ65ff72d81b64 = new Event(λ8b99981859c0)) {
    this.dispatchEvent(λ65ff72d81b64), this["on" + λ8b99981859c0]?.call(this, λ65ff72d81b64);
  }
  async request(λ8b99981859c0, λ65ff72d81b64 = {}, λ3b1de0ffc2d2 = AbortSignal.timeout(3e4)) {
    const λ64203a7f2038 = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/tutsi-relay/" + λ8b99981859c0, {
      ...λ65ff72d81b64,
      cache: "no-store",
      credentials: "same-origin",
      signal: AbortSignal.any([ this.abort.signal, λ3b1de0ffc2d2 ]),
      headers: {
        ...λ65ff72d81b64.headers,
        ...this.token ? {
          Authorization: "Bearer " + this.token
        } : {}
      }
    });
    if (!λ64203a7f2038.ok) throw new Error("Connection unavailable");
    return λ64203a7f2038;
  }
  async start() {
    try {
      const λ8b99981859c0 = await (await this.request("sessions", {
        method: "POST"
      })).json();
      if (this.token = λ8b99981859c0.token, this.batchSend = 1 === λ8b99981859c0.sendBatch, 
      0 !== this.readyState) return this.cleanup();
      for (this.readyState = 1, this.emit("open"); 1 === this.readyState; ) {
        const λ8b99981859c0 = new AbortController;
        let λ65ff72d81b64;
        const s = () => {
          clearTimeout(λ65ff72d81b64), λ65ff72d81b64 = setTimeout(() => λ8b99981859c0.abort(), 3e4);
        };
        s();
        try {
          const λ65ff72d81b64 = await this.request("receive", {}, AbortSignal.any([ λ8b99981859c0.signal, AbortSignal.timeout(12e4) ]));
          if (204 === λ65ff72d81b64.status) continue;
          s(), await readRelayFrames(λ65ff72d81b64.body, λ8b99981859c0 => {
            1 === this.readyState && this.emit("message", new MessageEvent("message", {
              data: "arraybuffer" === this.binaryType ? λ8b99981859c0 : new Blob([ λ8b99981859c0 ])
            }));
          }, s);
        } finally {
          clearTimeout(λ65ff72d81b64);
        }
      }
    } catch {
      this.readyState < 2 && (this.emit("error"), this.close(1006));
    }
  }
  send(λ8b99981859c0) {
    if (1 !== this.readyState) throw new DOMException("Socket is not open", "InvalidStateError");
    const λ65ff72d81b64 = new Blob([ λ8b99981859c0 ]);
    if (λ65ff72d81b64.size > 262144 || this.bufferedAmount + λ65ff72d81b64.size > 2097152 || this.queue.length >= 512) return this.emit("error"), 
    void this.close(1006);
    this.bufferedAmount += λ65ff72d81b64.size, this.queue.push(λ65ff72d81b64), this.flush();
  }
  flush() {
    !this.sending && 1 === this.readyState && this.queue.length && (this.sending = !0, 
    Promise.resolve().then(async () => {
      for (;1 === this.readyState && this.queue.length; ) {
        const λ8b99981859c0 = [], λ65ff72d81b64 = [];
        let λ3b1de0ffc2d2 = 0, λ64203a7f2038 = 0;
        do {
          const λ0ee7fd3da36a = this.queue[0];
          if (λ8b99981859c0.length && λ64203a7f2038 + 4 + λ0ee7fd3da36a.size > 1048576) break;
          if (this.queue.shift(), λ8b99981859c0.push(λ0ee7fd3da36a), λ3b1de0ffc2d2 += λ0ee7fd3da36a.size, 
          λ64203a7f2038 += λ0ee7fd3da36a.size + 4, this.batchSend) {
            const λ8b99981859c0 = new Uint8Array(4);
            new DataView(λ8b99981859c0.buffer).setUint32(0, λ0ee7fd3da36a.size, !0), λ65ff72d81b64.push(λ8b99981859c0, λ0ee7fd3da36a);
          }
        } while (this.batchSend && this.queue.length && λ8b99981859c0.length < 64);
        const λ0ee7fd3da36a = this.sequence;
        if (this.sequence += λ8b99981859c0.length, await this.request(this.batchSend ? "send-batch" : "send", {
          method: "POST",
          headers: {
            "Content-Type": "application/octet-stream",
            "X-Tutsi-Sequence": String(λ0ee7fd3da36a)
          },
          body: this.batchSend ? new Blob(λ65ff72d81b64) : λ8b99981859c0[0]
        }), 1 !== this.readyState) return;
        this.bufferedAmount -= λ3b1de0ffc2d2;
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
  close(λ8b99981859c0 = 1e3, λ65ff72d81b64 = "") {
    3 !== this.readyState && (this.readyState = 3, this.abort.abort(), this.cleanup(), 
    this.bufferedAmount = 0, this.queue.length = 0, this.emit("close", new CloseEvent("close", {
      code: λ8b99981859c0,
      reason: λ65ff72d81b64,
      wasClean: 1e3 === λ8b99981859c0
    })));
  }
}

const λ8b99981859c0 = new Map;

export function createHttpRelayEndpoint() {
  const λ65ff72d81b64 = httpRelayUrl() + crypto.randomUUID() + "/", λ3b1de0ffc2d2 = new Set;
  return λ8b99981859c0.set(λ65ff72d81b64, λ3b1de0ffc2d2), {
    url: λ65ff72d81b64,
    close() {
      λ8b99981859c0.delete(λ65ff72d81b64);
      for (const λ8b99981859c0 of λ3b1de0ffc2d2) λ8b99981859c0.close();
      λ3b1de0ffc2d2.clear();
    }
  };
}

let λ65ff72d81b64 = !1;

export function installHttpRelaySocket() {
  if (λ65ff72d81b64) return;
  λ65ff72d81b64 = !0;
  const λ3b1de0ffc2d2 = globalThis.WebSocket;
  function t(λ65ff72d81b64, λ64203a7f2038) {
    const λ0ee7fd3da36a = String(λ65ff72d81b64), λe5fb056c67f3 = λ8b99981859c0.get(λ0ee7fd3da36a);
    if (λ0ee7fd3da36a === httpRelayUrl() || λe5fb056c67f3) {
      const λ8b99981859c0 = new HttpRelaySocket(λ65ff72d81b64);
      return λe5fb056c67f3 && (λe5fb056c67f3.add(λ8b99981859c0), λ8b99981859c0.addEventListener("close", () => λe5fb056c67f3.delete(λ8b99981859c0), {
        once: !0
      })), λ8b99981859c0;
    }
    return void 0 === λ64203a7f2038 ? new λ3b1de0ffc2d2(λ65ff72d81b64) : new λ3b1de0ffc2d2(λ65ff72d81b64, λ64203a7f2038);
  }
  Object.setPrototypeOf(t, λ3b1de0ffc2d2), t.prototype = λ3b1de0ffc2d2.prototype, 
  Object.defineProperty(t, Symbol.hasInstance, {
    value: λ8b99981859c0 => λ8b99981859c0 instanceof λ3b1de0ffc2d2 || λ8b99981859c0 instanceof HttpRelaySocket
  }), globalThis.WebSocket = t, addEventListener("pagehide", () => {
    for (const λ65ff72d81b64 of λ8b99981859c0.values()) for (const λ8b99981859c0 of λ65ff72d81b64) λ8b99981859c0.close();
    λ8b99981859c0.clear();
  });
}
