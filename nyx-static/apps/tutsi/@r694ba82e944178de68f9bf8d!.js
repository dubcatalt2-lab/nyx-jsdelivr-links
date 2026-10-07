export const httpRelayUrl = (λcef8d261c249 = location) => `${"\x68\x74\x74\x70\x73\x3a" === λcef8d261c249.protocol ? "\x77\x73\x73\x3a" : "\x77\x73\x3a"}\x2f\x2f${λcef8d261c249.host}\x2f\x61\x70\x69\x2f\x74\x75\x74\x73\x69\x2d\x72\x65\x6c\x61\x79\x2f\x73\x6f\x63\x6b\x65\x74\x2f`;

export async function readRelayFrames(λcef8d261c249, λ2e672470cc7d, λ124f53bcad7b = () => {}) {
  const λd61a4e35c30f = λcef8d261c249.getReader(), λ32b77157ad6e = new Uint8Array(4);
  let λ83bfa576d652 = 0, λ6ed91746289f = null, λ564e9cbf75c1 = 0, λa9f3de5fd285 = 0;
  try {
    for (;;) {
      const {done: λcef8d261c249, value: λ0fd763bbe737} = await λd61a4e35c30f.read();
      if (λcef8d261c249) break;
      if (!λ0fd763bbe737?.length) continue;
      if (λ124f53bcad7b(), λa9f3de5fd285 += λ0fd763bbe737.length, λa9f3de5fd285 > 20971520) throw new Error("\x52\x65\x6c\x61\x79\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65");
      let λ7ef6ae0cb28f = 0;
      for (;λ7ef6ae0cb28f < λ0fd763bbe737.length; ) {
        if (!λ6ed91746289f) {
          const λcef8d261c249 = Math.min(4 - λ83bfa576d652, λ0fd763bbe737.length - λ7ef6ae0cb28f);
          if (λ32b77157ad6e.set(λ0fd763bbe737.subarray(λ7ef6ae0cb28f, λ7ef6ae0cb28f + λcef8d261c249), λ83bfa576d652), 
          λ83bfa576d652 += λcef8d261c249, λ7ef6ae0cb28f += λcef8d261c249, λ83bfa576d652 < 4) continue;
          const λ2e672470cc7d = new DataView(λ32b77157ad6e.buffer).getUint32(0, !0);
          if (λ2e672470cc7d > 2097152) throw new Error("\x52\x65\x6c\x61\x79\x20\x66\x72\x61\x6d\x65\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65");
          λ6ed91746289f = new Uint8Array(λ2e672470cc7d), λ564e9cbf75c1 = 0, λ83bfa576d652 = 0;
        }
        const λcef8d261c249 = Math.min(λ6ed91746289f.length - λ564e9cbf75c1, λ0fd763bbe737.length - λ7ef6ae0cb28f);
        λ6ed91746289f.set(λ0fd763bbe737.subarray(λ7ef6ae0cb28f, λ7ef6ae0cb28f + λcef8d261c249), λ564e9cbf75c1), 
        λ564e9cbf75c1 += λcef8d261c249, λ7ef6ae0cb28f += λcef8d261c249, λ564e9cbf75c1 === λ6ed91746289f.length && (λ2e672470cc7d(λ6ed91746289f.buffer), 
        λ6ed91746289f = null);
      }
    }
    if (λ83bfa576d652 || λ6ed91746289f) throw new Error("\x49\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x72\x65\x6c\x61\x79\x20\x66\x72\x61\x6d\x65");
  } finally {
    await λd61a4e35c30f.cancel().catch(() => {}), λd61a4e35c30f.releaseLock();
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
  binaryType="\x62\x6c\x6f\x62";
  bufferedAmount=0;
  protocol="";
  extensions="";
  constructor(λcef8d261c249) {
    super(), this.url = String(λcef8d261c249), this.abort = new AbortController, this.sequence = 0, 
    this.queue = [], this.sending = !1, this.start();
  }
  emit(λcef8d261c249, λ2e672470cc7d = new Event(λcef8d261c249)) {
    this.dispatchEvent(λ2e672470cc7d), this["\x6f\x6e" + λcef8d261c249]?.call(this, λ2e672470cc7d);
  }
  async request(λcef8d261c249, λ2e672470cc7d = {}, λ124f53bcad7b = AbortSignal.timeout(3e4)) {
    const λd61a4e35c30f = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x74\x75\x74\x73\x69\x2d\x72\x65\x6c\x61\x79\x2f" + λcef8d261c249, {
      ...λ2e672470cc7d,
      cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65",
      credentials: "\x73\x61\x6d\x65\x2d\x6f\x72\x69\x67\x69\x6e",
      signal: AbortSignal.any([ this.abort.signal, λ124f53bcad7b ]),
      headers: {
        ...λ2e672470cc7d.headers,
        ...this.token ? {
          Authorization: "\x42\x65\x61\x72\x65\x72\x20" + this.token
        } : {}
      }
    });
    if (!λd61a4e35c30f.ok) throw new Error("\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65");
    return λd61a4e35c30f;
  }
  async start() {
    try {
      const λcef8d261c249 = await (await this.request("\x73\x65\x73\x73\x69\x6f\x6e\x73", {
        method: "\x50\x4f\x53\x54"
      })).json();
      if (this.token = λcef8d261c249.token, this.batchSend = 1 === λcef8d261c249.sendBatch, 
      0 !== this.readyState) return this.cleanup();
      for (this.readyState = 1, this.emit("\x6f\x70\x65\x6e"); 1 === this.readyState; ) {
        const λcef8d261c249 = new AbortController;
        let λ2e672470cc7d;
        const _0x0205d6_2 = () => {
          clearTimeout(λ2e672470cc7d), λ2e672470cc7d = setTimeout(() => λcef8d261c249.abort(), 3e4);
        };
        _0x0205d6_2();
        try {
          const λ2e672470cc7d = await this.request("\x72\x65\x63\x65\x69\x76\x65", {}, AbortSignal.any([ λcef8d261c249.signal, AbortSignal.timeout(12e4) ]));
          if (204 === λ2e672470cc7d.status) continue;
          _0x0205d6_2(), await readRelayFrames(λ2e672470cc7d.body, λcef8d261c249 => {
            1 === this.readyState && this.emit("\x6d\x65\x73\x73\x61\x67\x65", new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
              data: "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72" === this.binaryType ? λcef8d261c249 : new Blob([ λcef8d261c249 ])
            }));
          }, _0x0205d6_2);
        } finally {
          clearTimeout(λ2e672470cc7d);
        }
      }
    } catch {
      this.readyState < 2 && (this.emit("\x65\x72\x72\x6f\x72"), this.close(1006));
    }
  }
  send(λcef8d261c249) {
    if (1 !== this.readyState) throw new DOMException("\x53\x6f\x63\x6b\x65\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x6f\x70\x65\x6e", "\x49\x6e\x76\x61\x6c\x69\x64\x53\x74\x61\x74\x65\x45\x72\x72\x6f\x72");
    const λ2e672470cc7d = new Blob([ λcef8d261c249 ]);
    if (λ2e672470cc7d.size > 262144 || this.bufferedAmount + λ2e672470cc7d.size > 2097152 || this.queue.length >= 512) return this.emit("\x65\x72\x72\x6f\x72"), 
    void this.close(1006);
    this.bufferedAmount += λ2e672470cc7d.size, this.queue.push(λ2e672470cc7d), this.flush();
  }
  flush() {
    !this.sending && 1 === this.readyState && this.queue.length && (this.sending = !0, 
    Promise.resolve().then(async () => {
      for (;1 === this.readyState && this.queue.length; ) {
        const λcef8d261c249 = [], λ2e672470cc7d = [];
        let λ124f53bcad7b = 0, λd61a4e35c30f = 0;
        do {
          const λ32b77157ad6e = this.queue[0];
          if (λcef8d261c249.length && λd61a4e35c30f + 4 + λ32b77157ad6e.size > 1048576) break;
          if (this.queue.shift(), λcef8d261c249.push(λ32b77157ad6e), λ124f53bcad7b += λ32b77157ad6e.size, 
          λd61a4e35c30f += λ32b77157ad6e.size + 4, this.batchSend) {
            const λcef8d261c249 = new Uint8Array(4);
            new DataView(λcef8d261c249.buffer).setUint32(0, λ32b77157ad6e.size, !0), λ2e672470cc7d.push(λcef8d261c249, λ32b77157ad6e);
          }
        } while (this.batchSend && this.queue.length && λcef8d261c249.length < 64);
        const λ32b77157ad6e = this.sequence;
        if (this.sequence += λcef8d261c249.length, await this.request(this.batchSend ? "\x73\x65\x6e\x64\x2d\x62\x61\x74\x63\x68" : "\x73\x65\x6e\x64", {
          method: "\x50\x4f\x53\x54",
          headers: {
            "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6f\x63\x74\x65\x74\x2d\x73\x74\x72\x65\x61\x6d",
            "\x58\x2d\x54\x75\x74\x73\x69\x2d\x53\x65\x71\x75\x65\x6e\x63\x65": String(λ32b77157ad6e)
          },
          body: this.batchSend ? new Blob(λ2e672470cc7d) : λcef8d261c249[0]
        }), 1 !== this.readyState) return;
        this.bufferedAmount -= λ124f53bcad7b;
      }
    }).catch(() => {
      this.readyState < 2 && (this.emit("\x65\x72\x72\x6f\x72"), this.close(1006));
    }).finally(() => {
      this.sending = !1, this.flush();
    }));
  }
  cleanup() {
    this.token && fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x74\x75\x74\x73\x69\x2d\x72\x65\x6c\x61\x79\x2f\x73\x65\x73\x73\x69\x6f\x6e", {
      method: "\x44\x45\x4c\x45\x54\x45",
      headers: {
        Authorization: "\x42\x65\x61\x72\x65\x72\x20" + this.token
      },
      keepalive: !0
    }).catch(() => {});
  }
  close(λcef8d261c249 = 1e3, λ2e672470cc7d = "") {
    3 !== this.readyState && (this.readyState = 3, this.abort.abort(), this.cleanup(), 
    this.bufferedAmount = 0, this.queue.length = 0, this.emit("\x63\x6c\x6f\x73\x65", new CloseEvent("\x63\x6c\x6f\x73\x65", {
      code: λcef8d261c249,
      reason: λ2e672470cc7d,
      wasClean: 1e3 === λcef8d261c249
    })));
  }
}

const λcef8d261c249 = new Map;

export function createHttpRelayEndpoint() {
  const λ2e672470cc7d = httpRelayUrl() + crypto.randomUUID() + "\x2f", λ124f53bcad7b = new Set;
  return λcef8d261c249.set(λ2e672470cc7d, λ124f53bcad7b), {
    url: λ2e672470cc7d,
    close() {
      λcef8d261c249.delete(λ2e672470cc7d);
      for (const λcef8d261c249 of λ124f53bcad7b) λcef8d261c249.close();
      λ124f53bcad7b.clear();
    }
  };
}

let λ2e672470cc7d = !1;

export function installHttpRelaySocket() {
  if (λ2e672470cc7d) return;
  λ2e672470cc7d = !0;
  const λ124f53bcad7b = globalThis.WebSocket;
  function _0x0205d6_3(λ2e672470cc7d, λd61a4e35c30f) {
    const λ32b77157ad6e = String(λ2e672470cc7d), λ83bfa576d652 = λcef8d261c249.get(λ32b77157ad6e);
    if (λ32b77157ad6e === httpRelayUrl() || λ83bfa576d652) {
      const λcef8d261c249 = new HttpRelaySocket(λ2e672470cc7d);
      return λ83bfa576d652 && (λ83bfa576d652.add(λcef8d261c249), λcef8d261c249.addEventListener("\x63\x6c\x6f\x73\x65", () => λ83bfa576d652.delete(λcef8d261c249), {
        once: !0
      })), λcef8d261c249;
    }
    return void 0 === λd61a4e35c30f ? new λ124f53bcad7b(λ2e672470cc7d) : new λ124f53bcad7b(λ2e672470cc7d, λd61a4e35c30f);
  }
  Object.setPrototypeOf(_0x0205d6_3, λ124f53bcad7b), _0x0205d6_3.prototype = λ124f53bcad7b.prototype, 
  Object.defineProperty(_0x0205d6_3, Symbol.hasInstance, {
    value: λcef8d261c249 => λcef8d261c249 instanceof λ124f53bcad7b || λcef8d261c249 instanceof HttpRelaySocket
  }), globalThis.WebSocket = _0x0205d6_3, addEventListener("\x70\x61\x67\x65\x68\x69\x64\x65", () => {
    for (const λ2e672470cc7d of λcef8d261c249.values()) for (const λcef8d261c249 of λ2e672470cc7d) λcef8d261c249.close();
    λcef8d261c249.clear();
  });
}
