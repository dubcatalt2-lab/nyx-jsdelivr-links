export const httpRelayUrl = (λ8b5eb5ece0ff = location) => `${"https:" === λ8b5eb5ece0ff.protocol ? "wss:" : "ws:"}//${λ8b5eb5ece0ff.host}/api/tutsi-relay/socket/`;

export async function readRelayFrames(λ8b5eb5ece0ff, λf8b46f9187b1, λdccb2c4b410d = () => {}) {
  const λ075fd681140a = λ8b5eb5ece0ff.getReader(), λ7b4bee84944e = new Uint8Array(4);
  let λeaa3a691ad1c = 0, λ14f7583d6482 = null, λe8ebcf5c22bf = 0, λ394e5cdb4bf1 = 0;
  try {
    for (;;) {
      const {done: λ8b5eb5ece0ff, value: λbcb4833aeec8} = await λ075fd681140a.read();
      if (λ8b5eb5ece0ff) break;
      if (!λbcb4833aeec8?.length) continue;
      if (λdccb2c4b410d(), λ394e5cdb4bf1 += λbcb4833aeec8.length, λ394e5cdb4bf1 > 20971520) throw new Error("Relay response is too large");
      let λfeb10d1bcac7 = 0;
      for (;λfeb10d1bcac7 < λbcb4833aeec8.length; ) {
        if (!λ14f7583d6482) {
          const λ8b5eb5ece0ff = Math.min(4 - λeaa3a691ad1c, λbcb4833aeec8.length - λfeb10d1bcac7);
          if (λ7b4bee84944e.set(λbcb4833aeec8.subarray(λfeb10d1bcac7, λfeb10d1bcac7 + λ8b5eb5ece0ff), λeaa3a691ad1c), 
          λeaa3a691ad1c += λ8b5eb5ece0ff, λfeb10d1bcac7 += λ8b5eb5ece0ff, λeaa3a691ad1c < 4) continue;
          const λf8b46f9187b1 = new DataView(λ7b4bee84944e.buffer).getUint32(0, !0);
          if (λf8b46f9187b1 > 2097152) throw new Error("Relay frame is too large");
          λ14f7583d6482 = new Uint8Array(λf8b46f9187b1), λe8ebcf5c22bf = 0, λeaa3a691ad1c = 0;
        }
        const λ8b5eb5ece0ff = Math.min(λ14f7583d6482.length - λe8ebcf5c22bf, λbcb4833aeec8.length - λfeb10d1bcac7);
        λ14f7583d6482.set(λbcb4833aeec8.subarray(λfeb10d1bcac7, λfeb10d1bcac7 + λ8b5eb5ece0ff), λe8ebcf5c22bf), 
        λe8ebcf5c22bf += λ8b5eb5ece0ff, λfeb10d1bcac7 += λ8b5eb5ece0ff, λe8ebcf5c22bf === λ14f7583d6482.length && (λf8b46f9187b1(λ14f7583d6482.buffer), 
        λ14f7583d6482 = null);
      }
    }
    if (λeaa3a691ad1c || λ14f7583d6482) throw new Error("Incomplete relay frame");
  } finally {
    await λ075fd681140a.cancel().catch(() => {}), λ075fd681140a.releaseLock();
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
  constructor(λ8b5eb5ece0ff) {
    super(), this.url = String(λ8b5eb5ece0ff), this.abort = new AbortController, this.sequence = 0, 
    this.queue = [], this.sending = !1, this.start();
  }
  emit(λ8b5eb5ece0ff, λf8b46f9187b1 = new Event(λ8b5eb5ece0ff)) {
    this.dispatchEvent(λf8b46f9187b1), this["on" + λ8b5eb5ece0ff]?.call(this, λf8b46f9187b1);
  }
  async request(λ8b5eb5ece0ff, λf8b46f9187b1 = {}, λdccb2c4b410d = AbortSignal.timeout(3e4)) {
    const λ075fd681140a = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/tutsi-relay/" + λ8b5eb5ece0ff, {
      ...λf8b46f9187b1,
      cache: "no-store",
      credentials: "same-origin",
      signal: AbortSignal.any([ this.abort.signal, λdccb2c4b410d ]),
      headers: {
        ...λf8b46f9187b1.headers,
        ...this.token ? {
          Authorization: "Bearer " + this.token
        } : {}
      }
    });
    if (!λ075fd681140a.ok) throw new Error("Connection unavailable");
    return λ075fd681140a;
  }
  async start() {
    try {
      const λ8b5eb5ece0ff = await (await this.request("sessions", {
        method: "POST"
      })).json();
      if (this.token = λ8b5eb5ece0ff.token, this.batchSend = 1 === λ8b5eb5ece0ff.sendBatch, 
      0 !== this.readyState) return this.cleanup();
      for (this.readyState = 1, this.emit("open"); 1 === this.readyState; ) {
        const λ8b5eb5ece0ff = new AbortController;
        let λf8b46f9187b1;
        const s = () => {
          clearTimeout(λf8b46f9187b1), λf8b46f9187b1 = setTimeout(() => λ8b5eb5ece0ff.abort(), 3e4);
        };
        s();
        try {
          const λf8b46f9187b1 = await this.request("receive", {}, AbortSignal.any([ λ8b5eb5ece0ff.signal, AbortSignal.timeout(12e4) ]));
          if (204 === λf8b46f9187b1.status) continue;
          s(), await readRelayFrames(λf8b46f9187b1.body, λ8b5eb5ece0ff => {
            1 === this.readyState && this.emit("message", new MessageEvent("message", {
              data: "arraybuffer" === this.binaryType ? λ8b5eb5ece0ff : new Blob([ λ8b5eb5ece0ff ])
            }));
          }, s);
        } finally {
          clearTimeout(λf8b46f9187b1);
        }
      }
    } catch {
      this.readyState < 2 && (this.emit("error"), this.close(1006));
    }
  }
  send(λ8b5eb5ece0ff) {
    if (1 !== this.readyState) throw new DOMException("Socket is not open", "InvalidStateError");
    const λf8b46f9187b1 = new Blob([ λ8b5eb5ece0ff ]);
    if (λf8b46f9187b1.size > 262144 || this.bufferedAmount + λf8b46f9187b1.size > 2097152 || this.queue.length >= 512) return this.emit("error"), 
    void this.close(1006);
    this.bufferedAmount += λf8b46f9187b1.size, this.queue.push(λf8b46f9187b1), this.flush();
  }
  flush() {
    !this.sending && 1 === this.readyState && this.queue.length && (this.sending = !0, 
    Promise.resolve().then(async () => {
      for (;1 === this.readyState && this.queue.length; ) {
        const λ8b5eb5ece0ff = [], λf8b46f9187b1 = [];
        let λdccb2c4b410d = 0, λ075fd681140a = 0;
        do {
          const λ7b4bee84944e = this.queue[0];
          if (λ8b5eb5ece0ff.length && λ075fd681140a + 4 + λ7b4bee84944e.size > 1048576) break;
          if (this.queue.shift(), λ8b5eb5ece0ff.push(λ7b4bee84944e), λdccb2c4b410d += λ7b4bee84944e.size, 
          λ075fd681140a += λ7b4bee84944e.size + 4, this.batchSend) {
            const λ8b5eb5ece0ff = new Uint8Array(4);
            new DataView(λ8b5eb5ece0ff.buffer).setUint32(0, λ7b4bee84944e.size, !0), λf8b46f9187b1.push(λ8b5eb5ece0ff, λ7b4bee84944e);
          }
        } while (this.batchSend && this.queue.length && λ8b5eb5ece0ff.length < 64);
        const λ7b4bee84944e = this.sequence;
        if (this.sequence += λ8b5eb5ece0ff.length, await this.request(this.batchSend ? "send-batch" : "send", {
          method: "POST",
          headers: {
            "Content-Type": "application/octet-stream",
            "X-Tutsi-Sequence": String(λ7b4bee84944e)
          },
          body: this.batchSend ? new Blob(λf8b46f9187b1) : λ8b5eb5ece0ff[0]
        }), 1 !== this.readyState) return;
        this.bufferedAmount -= λdccb2c4b410d;
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
  close(λ8b5eb5ece0ff = 1e3, λf8b46f9187b1 = "") {
    3 !== this.readyState && (this.readyState = 3, this.abort.abort(), this.cleanup(), 
    this.bufferedAmount = 0, this.queue.length = 0, this.emit("close", new CloseEvent("close", {
      code: λ8b5eb5ece0ff,
      reason: λf8b46f9187b1,
      wasClean: 1e3 === λ8b5eb5ece0ff
    })));
  }
}

const λ8b5eb5ece0ff = new Map;

export function createHttpRelayEndpoint() {
  const λf8b46f9187b1 = httpRelayUrl() + crypto.randomUUID() + "/", λdccb2c4b410d = new Set;
  return λ8b5eb5ece0ff.set(λf8b46f9187b1, λdccb2c4b410d), {
    url: λf8b46f9187b1,
    close() {
      λ8b5eb5ece0ff.delete(λf8b46f9187b1);
      for (const λ8b5eb5ece0ff of λdccb2c4b410d) λ8b5eb5ece0ff.close();
      λdccb2c4b410d.clear();
    }
  };
}

let λf8b46f9187b1 = !1;

export function installHttpRelaySocket() {
  if (λf8b46f9187b1) return;
  λf8b46f9187b1 = !0;
  const λdccb2c4b410d = globalThis.WebSocket;
  function t(λf8b46f9187b1, λ075fd681140a) {
    const λ7b4bee84944e = String(λf8b46f9187b1), λeaa3a691ad1c = λ8b5eb5ece0ff.get(λ7b4bee84944e);
    if (λ7b4bee84944e === httpRelayUrl() || λeaa3a691ad1c) {
      const λ8b5eb5ece0ff = new HttpRelaySocket(λf8b46f9187b1);
      return λeaa3a691ad1c && (λeaa3a691ad1c.add(λ8b5eb5ece0ff), λ8b5eb5ece0ff.addEventListener("close", () => λeaa3a691ad1c.delete(λ8b5eb5ece0ff), {
        once: !0
      })), λ8b5eb5ece0ff;
    }
    return void 0 === λ075fd681140a ? new λdccb2c4b410d(λf8b46f9187b1) : new λdccb2c4b410d(λf8b46f9187b1, λ075fd681140a);
  }
  Object.setPrototypeOf(t, λdccb2c4b410d), t.prototype = λdccb2c4b410d.prototype, 
  Object.defineProperty(t, Symbol.hasInstance, {
    value: λ8b5eb5ece0ff => λ8b5eb5ece0ff instanceof λdccb2c4b410d || λ8b5eb5ece0ff instanceof HttpRelaySocket
  }), globalThis.WebSocket = t, addEventListener("pagehide", () => {
    for (const λf8b46f9187b1 of λ8b5eb5ece0ff.values()) for (const λ8b5eb5ece0ff of λf8b46f9187b1) λ8b5eb5ece0ff.close();
    λ8b5eb5ece0ff.clear();
  });
}
