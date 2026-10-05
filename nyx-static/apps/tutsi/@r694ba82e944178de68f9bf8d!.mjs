export const httpRelayUrl = (λf5e0130390db = location) => `${"https:" === λf5e0130390db.protocol ? "wss:" : "ws:"}//${λf5e0130390db.host}/api/tutsi-relay/socket/`;

export async function readRelayFrames(λf5e0130390db, λc143491c15ac, λa19643b5ea6e = () => {}) {
  const λ943a15653f49 = λf5e0130390db.getReader(), λ9cc75e924741 = new Uint8Array(4);
  let λd48ac943a0ba = 0, λb16698ee0206 = null, λ7c4670b90be3 = 0, λ00a5ba027404 = 0;
  try {
    for (;;) {
      const {done: λf5e0130390db, value: λa8175d129c16} = await λ943a15653f49.read();
      if (λf5e0130390db) break;
      if (!λa8175d129c16?.length) continue;
      if (λa19643b5ea6e(), λ00a5ba027404 += λa8175d129c16.length, λ00a5ba027404 > 20971520) throw new Error("Relay response is too large");
      let λ3043e88711cd = 0;
      for (;λ3043e88711cd < λa8175d129c16.length; ) {
        if (!λb16698ee0206) {
          const λf5e0130390db = Math.min(4 - λd48ac943a0ba, λa8175d129c16.length - λ3043e88711cd);
          if (λ9cc75e924741.set(λa8175d129c16.subarray(λ3043e88711cd, λ3043e88711cd + λf5e0130390db), λd48ac943a0ba), 
          λd48ac943a0ba += λf5e0130390db, λ3043e88711cd += λf5e0130390db, λd48ac943a0ba < 4) continue;
          const λc143491c15ac = new DataView(λ9cc75e924741.buffer).getUint32(0, !0);
          if (λc143491c15ac > 2097152) throw new Error("Relay frame is too large");
          λb16698ee0206 = new Uint8Array(λc143491c15ac), λ7c4670b90be3 = 0, λd48ac943a0ba = 0;
        }
        const λf5e0130390db = Math.min(λb16698ee0206.length - λ7c4670b90be3, λa8175d129c16.length - λ3043e88711cd);
        λb16698ee0206.set(λa8175d129c16.subarray(λ3043e88711cd, λ3043e88711cd + λf5e0130390db), λ7c4670b90be3), 
        λ7c4670b90be3 += λf5e0130390db, λ3043e88711cd += λf5e0130390db, λ7c4670b90be3 === λb16698ee0206.length && (λc143491c15ac(λb16698ee0206.buffer), 
        λb16698ee0206 = null);
      }
    }
    if (λd48ac943a0ba || λb16698ee0206) throw new Error("Incomplete relay frame");
  } finally {
    await λ943a15653f49.cancel().catch(() => {}), λ943a15653f49.releaseLock();
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
  constructor(λf5e0130390db) {
    super(), this.url = String(λf5e0130390db), this.abort = new AbortController, this.sequence = 0, 
    this.queue = [], this.sending = !1, this.start();
  }
  emit(λf5e0130390db, λc143491c15ac = new Event(λf5e0130390db)) {
    this.dispatchEvent(λc143491c15ac), this["on" + λf5e0130390db]?.call(this, λc143491c15ac);
  }
  async request(λf5e0130390db, λc143491c15ac = {}, λa19643b5ea6e = AbortSignal.timeout(3e4)) {
    const λ943a15653f49 = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/tutsi-relay/" + λf5e0130390db, {
      ...λc143491c15ac,
      cache: "no-store",
      credentials: "same-origin",
      signal: AbortSignal.any([ this.abort.signal, λa19643b5ea6e ]),
      headers: {
        ...λc143491c15ac.headers,
        ...this.token ? {
          Authorization: "Bearer " + this.token
        } : {}
      }
    });
    if (!λ943a15653f49.ok) throw new Error("Connection unavailable");
    return λ943a15653f49;
  }
  async start() {
    try {
      const λf5e0130390db = await (await this.request("sessions", {
        method: "POST"
      })).json();
      if (this.token = λf5e0130390db.token, this.batchSend = 1 === λf5e0130390db.sendBatch, 
      0 !== this.readyState) return this.cleanup();
      for (this.readyState = 1, this.emit("open"); 1 === this.readyState; ) {
        const λf5e0130390db = new AbortController;
        let λc143491c15ac;
        const s = () => {
          clearTimeout(λc143491c15ac), λc143491c15ac = setTimeout(() => λf5e0130390db.abort(), 3e4);
        };
        s();
        try {
          const λc143491c15ac = await this.request("receive", {}, AbortSignal.any([ λf5e0130390db.signal, AbortSignal.timeout(12e4) ]));
          if (204 === λc143491c15ac.status) continue;
          s(), await readRelayFrames(λc143491c15ac.body, λf5e0130390db => {
            1 === this.readyState && this.emit("message", new MessageEvent("message", {
              data: "arraybuffer" === this.binaryType ? λf5e0130390db : new Blob([ λf5e0130390db ])
            }));
          }, s);
        } finally {
          clearTimeout(λc143491c15ac);
        }
      }
    } catch {
      this.readyState < 2 && (this.emit("error"), this.close(1006));
    }
  }
  send(λf5e0130390db) {
    if (1 !== this.readyState) throw new DOMException("Socket is not open", "InvalidStateError");
    const λc143491c15ac = new Blob([ λf5e0130390db ]);
    if (λc143491c15ac.size > 262144 || this.bufferedAmount + λc143491c15ac.size > 2097152 || this.queue.length >= 512) return this.emit("error"), 
    void this.close(1006);
    this.bufferedAmount += λc143491c15ac.size, this.queue.push(λc143491c15ac), this.flush();
  }
  flush() {
    !this.sending && 1 === this.readyState && this.queue.length && (this.sending = !0, 
    Promise.resolve().then(async () => {
      for (;1 === this.readyState && this.queue.length; ) {
        const λf5e0130390db = [], λc143491c15ac = [];
        let λa19643b5ea6e = 0, λ943a15653f49 = 0;
        do {
          const λ9cc75e924741 = this.queue[0];
          if (λf5e0130390db.length && λ943a15653f49 + 4 + λ9cc75e924741.size > 1048576) break;
          if (this.queue.shift(), λf5e0130390db.push(λ9cc75e924741), λa19643b5ea6e += λ9cc75e924741.size, 
          λ943a15653f49 += λ9cc75e924741.size + 4, this.batchSend) {
            const λf5e0130390db = new Uint8Array(4);
            new DataView(λf5e0130390db.buffer).setUint32(0, λ9cc75e924741.size, !0), λc143491c15ac.push(λf5e0130390db, λ9cc75e924741);
          }
        } while (this.batchSend && this.queue.length && λf5e0130390db.length < 64);
        const λ9cc75e924741 = this.sequence;
        if (this.sequence += λf5e0130390db.length, await this.request(this.batchSend ? "send-batch" : "send", {
          method: "POST",
          headers: {
            "Content-Type": "application/octet-stream",
            "X-Tutsi-Sequence": String(λ9cc75e924741)
          },
          body: this.batchSend ? new Blob(λc143491c15ac) : λf5e0130390db[0]
        }), 1 !== this.readyState) return;
        this.bufferedAmount -= λa19643b5ea6e;
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
  close(λf5e0130390db = 1e3, λc143491c15ac = "") {
    3 !== this.readyState && (this.readyState = 3, this.abort.abort(), this.cleanup(), 
    this.bufferedAmount = 0, this.queue.length = 0, this.emit("close", new CloseEvent("close", {
      code: λf5e0130390db,
      reason: λc143491c15ac,
      wasClean: 1e3 === λf5e0130390db
    })));
  }
}

const λf5e0130390db = new Map;

export function createHttpRelayEndpoint() {
  const λc143491c15ac = httpRelayUrl() + crypto.randomUUID() + "/", λa19643b5ea6e = new Set;
  return λf5e0130390db.set(λc143491c15ac, λa19643b5ea6e), {
    url: λc143491c15ac,
    close() {
      λf5e0130390db.delete(λc143491c15ac);
      for (const λf5e0130390db of λa19643b5ea6e) λf5e0130390db.close();
      λa19643b5ea6e.clear();
    }
  };
}

let λc143491c15ac = !1;

export function installHttpRelaySocket() {
  if (λc143491c15ac) return;
  λc143491c15ac = !0;
  const λa19643b5ea6e = globalThis.WebSocket;
  function t(λc143491c15ac, λ943a15653f49) {
    const λ9cc75e924741 = String(λc143491c15ac), λd48ac943a0ba = λf5e0130390db.get(λ9cc75e924741);
    if (λ9cc75e924741 === httpRelayUrl() || λd48ac943a0ba) {
      const λf5e0130390db = new HttpRelaySocket(λc143491c15ac);
      return λd48ac943a0ba && (λd48ac943a0ba.add(λf5e0130390db), λf5e0130390db.addEventListener("close", () => λd48ac943a0ba.delete(λf5e0130390db), {
        once: !0
      })), λf5e0130390db;
    }
    return void 0 === λ943a15653f49 ? new λa19643b5ea6e(λc143491c15ac) : new λa19643b5ea6e(λc143491c15ac, λ943a15653f49);
  }
  Object.setPrototypeOf(t, λa19643b5ea6e), t.prototype = λa19643b5ea6e.prototype, 
  Object.defineProperty(t, Symbol.hasInstance, {
    value: λf5e0130390db => λf5e0130390db instanceof λa19643b5ea6e || λf5e0130390db instanceof HttpRelaySocket
  }), globalThis.WebSocket = t, addEventListener("pagehide", () => {
    for (const λc143491c15ac of λf5e0130390db.values()) for (const λf5e0130390db of λc143491c15ac) λf5e0130390db.close();
    λf5e0130390db.clear();
  });
}
