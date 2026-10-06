export const httpRelayUrl = (λ519a59cf7ee7 = location) => `${"https:" === λ519a59cf7ee7.protocol ? "wss:" : "ws:"}//${λ519a59cf7ee7.host}/api/tutsi-relay/socket/`;

export async function readRelayFrames(λ519a59cf7ee7, λ0fd0dbce2f62, λ3814972c9760 = () => {}) {
  const λ9e1ba844e3e7 = λ519a59cf7ee7.getReader(), λ56bc2e08a922 = new Uint8Array(4);
  let λ99b43a26ae6a = 0, λ108e8dcfec48 = null, λ285b6e99146f = 0, λ250aef54cbd8 = 0;
  try {
    for (;;) {
      const {done: λ519a59cf7ee7, value: λb6158670384d} = await λ9e1ba844e3e7.read();
      if (λ519a59cf7ee7) break;
      if (!λb6158670384d?.length) continue;
      if (λ3814972c9760(), λ250aef54cbd8 += λb6158670384d.length, λ250aef54cbd8 > 20971520) throw new Error("Relay response is too large");
      let λb5a8d6551ef8 = 0;
      for (;λb5a8d6551ef8 < λb6158670384d.length; ) {
        if (!λ108e8dcfec48) {
          const λ519a59cf7ee7 = Math.min(4 - λ99b43a26ae6a, λb6158670384d.length - λb5a8d6551ef8);
          if (λ56bc2e08a922.set(λb6158670384d.subarray(λb5a8d6551ef8, λb5a8d6551ef8 + λ519a59cf7ee7), λ99b43a26ae6a), 
          λ99b43a26ae6a += λ519a59cf7ee7, λb5a8d6551ef8 += λ519a59cf7ee7, λ99b43a26ae6a < 4) continue;
          const λ0fd0dbce2f62 = new DataView(λ56bc2e08a922.buffer).getUint32(0, !0);
          if (λ0fd0dbce2f62 > 2097152) throw new Error("Relay frame is too large");
          λ108e8dcfec48 = new Uint8Array(λ0fd0dbce2f62), λ285b6e99146f = 0, λ99b43a26ae6a = 0;
        }
        const λ519a59cf7ee7 = Math.min(λ108e8dcfec48.length - λ285b6e99146f, λb6158670384d.length - λb5a8d6551ef8);
        λ108e8dcfec48.set(λb6158670384d.subarray(λb5a8d6551ef8, λb5a8d6551ef8 + λ519a59cf7ee7), λ285b6e99146f), 
        λ285b6e99146f += λ519a59cf7ee7, λb5a8d6551ef8 += λ519a59cf7ee7, λ285b6e99146f === λ108e8dcfec48.length && (λ0fd0dbce2f62(λ108e8dcfec48.buffer), 
        λ108e8dcfec48 = null);
      }
    }
    if (λ99b43a26ae6a || λ108e8dcfec48) throw new Error("Incomplete relay frame");
  } finally {
    await λ9e1ba844e3e7.cancel().catch(() => {}), λ9e1ba844e3e7.releaseLock();
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
  constructor(λ519a59cf7ee7) {
    super(), this.url = String(λ519a59cf7ee7), this.abort = new AbortController, this.sequence = 0, 
    this.queue = [], this.sending = !1, this.start();
  }
  emit(λ519a59cf7ee7, λ0fd0dbce2f62 = new Event(λ519a59cf7ee7)) {
    this.dispatchEvent(λ0fd0dbce2f62), this["on" + λ519a59cf7ee7]?.call(this, λ0fd0dbce2f62);
  }
  async request(λ519a59cf7ee7, λ0fd0dbce2f62 = {}, λ3814972c9760 = AbortSignal.timeout(3e4)) {
    const λ9e1ba844e3e7 = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/tutsi-relay/" + λ519a59cf7ee7, {
      ...λ0fd0dbce2f62,
      cache: "no-store",
      credentials: "same-origin",
      signal: AbortSignal.any([ this.abort.signal, λ3814972c9760 ]),
      headers: {
        ...λ0fd0dbce2f62.headers,
        ...this.token ? {
          Authorization: "Bearer " + this.token
        } : {}
      }
    });
    if (!λ9e1ba844e3e7.ok) throw new Error("Connection unavailable");
    return λ9e1ba844e3e7;
  }
  async start() {
    try {
      const λ519a59cf7ee7 = await (await this.request("sessions", {
        method: "POST"
      })).json();
      if (this.token = λ519a59cf7ee7.token, this.batchSend = 1 === λ519a59cf7ee7.sendBatch, 
      0 !== this.readyState) return this.cleanup();
      for (this.readyState = 1, this.emit("open"); 1 === this.readyState; ) {
        const λ519a59cf7ee7 = new AbortController;
        let λ0fd0dbce2f62;
        const s = () => {
          clearTimeout(λ0fd0dbce2f62), λ0fd0dbce2f62 = setTimeout(() => λ519a59cf7ee7.abort(), 3e4);
        };
        s();
        try {
          const λ0fd0dbce2f62 = await this.request("receive", {}, AbortSignal.any([ λ519a59cf7ee7.signal, AbortSignal.timeout(12e4) ]));
          if (204 === λ0fd0dbce2f62.status) continue;
          s(), await readRelayFrames(λ0fd0dbce2f62.body, λ519a59cf7ee7 => {
            1 === this.readyState && this.emit("message", new MessageEvent("message", {
              data: "arraybuffer" === this.binaryType ? λ519a59cf7ee7 : new Blob([ λ519a59cf7ee7 ])
            }));
          }, s);
        } finally {
          clearTimeout(λ0fd0dbce2f62);
        }
      }
    } catch {
      this.readyState < 2 && (this.emit("error"), this.close(1006));
    }
  }
  send(λ519a59cf7ee7) {
    if (1 !== this.readyState) throw new DOMException("Socket is not open", "InvalidStateError");
    const λ0fd0dbce2f62 = new Blob([ λ519a59cf7ee7 ]);
    if (λ0fd0dbce2f62.size > 262144 || this.bufferedAmount + λ0fd0dbce2f62.size > 2097152 || this.queue.length >= 512) return this.emit("error"), 
    void this.close(1006);
    this.bufferedAmount += λ0fd0dbce2f62.size, this.queue.push(λ0fd0dbce2f62), this.flush();
  }
  flush() {
    !this.sending && 1 === this.readyState && this.queue.length && (this.sending = !0, 
    Promise.resolve().then(async () => {
      for (;1 === this.readyState && this.queue.length; ) {
        const λ519a59cf7ee7 = [], λ0fd0dbce2f62 = [];
        let λ3814972c9760 = 0, λ9e1ba844e3e7 = 0;
        do {
          const λ56bc2e08a922 = this.queue[0];
          if (λ519a59cf7ee7.length && λ9e1ba844e3e7 + 4 + λ56bc2e08a922.size > 1048576) break;
          if (this.queue.shift(), λ519a59cf7ee7.push(λ56bc2e08a922), λ3814972c9760 += λ56bc2e08a922.size, 
          λ9e1ba844e3e7 += λ56bc2e08a922.size + 4, this.batchSend) {
            const λ519a59cf7ee7 = new Uint8Array(4);
            new DataView(λ519a59cf7ee7.buffer).setUint32(0, λ56bc2e08a922.size, !0), λ0fd0dbce2f62.push(λ519a59cf7ee7, λ56bc2e08a922);
          }
        } while (this.batchSend && this.queue.length && λ519a59cf7ee7.length < 64);
        const λ56bc2e08a922 = this.sequence;
        if (this.sequence += λ519a59cf7ee7.length, await this.request(this.batchSend ? "send-batch" : "send", {
          method: "POST",
          headers: {
            "Content-Type": "application/octet-stream",
            "X-Tutsi-Sequence": String(λ56bc2e08a922)
          },
          body: this.batchSend ? new Blob(λ0fd0dbce2f62) : λ519a59cf7ee7[0]
        }), 1 !== this.readyState) return;
        this.bufferedAmount -= λ3814972c9760;
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
  close(λ519a59cf7ee7 = 1e3, λ0fd0dbce2f62 = "") {
    3 !== this.readyState && (this.readyState = 3, this.abort.abort(), this.cleanup(), 
    this.bufferedAmount = 0, this.queue.length = 0, this.emit("close", new CloseEvent("close", {
      code: λ519a59cf7ee7,
      reason: λ0fd0dbce2f62,
      wasClean: 1e3 === λ519a59cf7ee7
    })));
  }
}

const λ519a59cf7ee7 = new Map;

export function createHttpRelayEndpoint() {
  const λ0fd0dbce2f62 = httpRelayUrl() + crypto.randomUUID() + "/", λ3814972c9760 = new Set;
  return λ519a59cf7ee7.set(λ0fd0dbce2f62, λ3814972c9760), {
    url: λ0fd0dbce2f62,
    close() {
      λ519a59cf7ee7.delete(λ0fd0dbce2f62);
      for (const λ519a59cf7ee7 of λ3814972c9760) λ519a59cf7ee7.close();
      λ3814972c9760.clear();
    }
  };
}

let λ0fd0dbce2f62 = !1;

export function installHttpRelaySocket() {
  if (λ0fd0dbce2f62) return;
  λ0fd0dbce2f62 = !0;
  const λ3814972c9760 = globalThis.WebSocket;
  function t(λ0fd0dbce2f62, λ9e1ba844e3e7) {
    const λ56bc2e08a922 = String(λ0fd0dbce2f62), λ99b43a26ae6a = λ519a59cf7ee7.get(λ56bc2e08a922);
    if (λ56bc2e08a922 === httpRelayUrl() || λ99b43a26ae6a) {
      const λ519a59cf7ee7 = new HttpRelaySocket(λ0fd0dbce2f62);
      return λ99b43a26ae6a && (λ99b43a26ae6a.add(λ519a59cf7ee7), λ519a59cf7ee7.addEventListener("close", () => λ99b43a26ae6a.delete(λ519a59cf7ee7), {
        once: !0
      })), λ519a59cf7ee7;
    }
    return void 0 === λ9e1ba844e3e7 ? new λ3814972c9760(λ0fd0dbce2f62) : new λ3814972c9760(λ0fd0dbce2f62, λ9e1ba844e3e7);
  }
  Object.setPrototypeOf(t, λ3814972c9760), t.prototype = λ3814972c9760.prototype, 
  Object.defineProperty(t, Symbol.hasInstance, {
    value: λ519a59cf7ee7 => λ519a59cf7ee7 instanceof λ3814972c9760 || λ519a59cf7ee7 instanceof HttpRelaySocket
  }), globalThis.WebSocket = t, addEventListener("pagehide", () => {
    for (const λ0fd0dbce2f62 of λ519a59cf7ee7.values()) for (const λ519a59cf7ee7 of λ0fd0dbce2f62) λ519a59cf7ee7.close();
    λ519a59cf7ee7.clear();
  });
}
