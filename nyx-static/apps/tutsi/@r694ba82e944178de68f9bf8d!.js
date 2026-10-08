export const httpRelayUrl = (λ063702515040 = location) => `${"\x68\x74\x74\x70\x73\x3a" === λ063702515040.protocol ? "\x77\x73\x73\x3a" : "\x77\x73\x3a"}\x2f\x2f${λ063702515040.host}\x2f\x61\x70\x69\x2f\x74\x75\x74\x73\x69\x2d\x72\x65\x6c\x61\x79\x2f\x73\x6f\x63\x6b\x65\x74\x2f`;

export async function readRelayFrames(λ063702515040, λbaf0bdc7fe07, λf82fa21ce3fe = () => {}) {
  const λ1107a5d9c124 = λ063702515040.getReader(), λ796c3461b13b = new Uint8Array(4);
  let λ0906591a7095 = 0, λcf36b403e289 = null, λ994dab1aee1a = 0, λ9c9142ce1ef2 = 0;
  try {
    for (;;) {
      const {done: λ063702515040, value: λ3b678a3a3758} = await λ1107a5d9c124.read();
      if (λ063702515040) break;
      if (!λ3b678a3a3758?.length) continue;
      if (λf82fa21ce3fe(), λ9c9142ce1ef2 += λ3b678a3a3758.length, λ9c9142ce1ef2 > 20971520) throw new Error("\x52\x65\x6c\x61\x79\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65");
      let λb4178b31667c = 0;
      for (;λb4178b31667c < λ3b678a3a3758.length; ) {
        if (!λcf36b403e289) {
          const λ063702515040 = Math.min(4 - λ0906591a7095, λ3b678a3a3758.length - λb4178b31667c);
          if (λ796c3461b13b.set(λ3b678a3a3758.subarray(λb4178b31667c, λb4178b31667c + λ063702515040), λ0906591a7095), 
          λ0906591a7095 += λ063702515040, λb4178b31667c += λ063702515040, λ0906591a7095 < 4) continue;
          const λbaf0bdc7fe07 = new DataView(λ796c3461b13b.buffer).getUint32(0, !0);
          if (λbaf0bdc7fe07 > 2097152) throw new Error("\x52\x65\x6c\x61\x79\x20\x66\x72\x61\x6d\x65\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65");
          λcf36b403e289 = new Uint8Array(λbaf0bdc7fe07), λ994dab1aee1a = 0, λ0906591a7095 = 0;
        }
        const λ063702515040 = Math.min(λcf36b403e289.length - λ994dab1aee1a, λ3b678a3a3758.length - λb4178b31667c);
        λcf36b403e289.set(λ3b678a3a3758.subarray(λb4178b31667c, λb4178b31667c + λ063702515040), λ994dab1aee1a), 
        λ994dab1aee1a += λ063702515040, λb4178b31667c += λ063702515040, λ994dab1aee1a === λcf36b403e289.length && (λbaf0bdc7fe07(λcf36b403e289.buffer), 
        λcf36b403e289 = null);
      }
    }
    if (λ0906591a7095 || λcf36b403e289) throw new Error("\x49\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x72\x65\x6c\x61\x79\x20\x66\x72\x61\x6d\x65");
  } finally {
    await λ1107a5d9c124.cancel().catch(() => {}), λ1107a5d9c124.releaseLock();
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
  constructor(λ063702515040) {
    super(), this.url = String(λ063702515040), this.abort = new AbortController, this.sequence = 0, 
    this.queue = [], this.sending = !1, this.start();
  }
  emit(λ063702515040, λbaf0bdc7fe07 = new Event(λ063702515040)) {
    this.dispatchEvent(λbaf0bdc7fe07), this["\x6f\x6e" + λ063702515040]?.call(this, λbaf0bdc7fe07);
  }
  async request(λ063702515040, λbaf0bdc7fe07 = {}, λf82fa21ce3fe = AbortSignal.timeout(3e4)) {
    const λ1107a5d9c124 = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x74\x75\x74\x73\x69\x2d\x72\x65\x6c\x61\x79\x2f" + λ063702515040, {
      ...λbaf0bdc7fe07,
      cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65",
      credentials: "\x73\x61\x6d\x65\x2d\x6f\x72\x69\x67\x69\x6e",
      signal: AbortSignal.any([ this.abort.signal, λf82fa21ce3fe ]),
      headers: {
        ...λbaf0bdc7fe07.headers,
        ...this.token ? {
          Authorization: "\x42\x65\x61\x72\x65\x72\x20" + this.token
        } : {}
      }
    });
    if (!λ1107a5d9c124.ok) throw new Error("\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65");
    return λ1107a5d9c124;
  }
  async start() {
    try {
      const λ063702515040 = await (await this.request("\x73\x65\x73\x73\x69\x6f\x6e\x73", {
        method: "\x50\x4f\x53\x54"
      })).json();
      if (this.token = λ063702515040.token, this.batchSend = 1 === λ063702515040.sendBatch, 
      0 !== this.readyState) return this.cleanup();
      for (this.readyState = 1, this.emit("\x6f\x70\x65\x6e"); 1 === this.readyState; ) {
        const λ063702515040 = new AbortController;
        let λbaf0bdc7fe07;
        const _0x0205d6_2 = () => {
          clearTimeout(λbaf0bdc7fe07), λbaf0bdc7fe07 = setTimeout(() => λ063702515040.abort(), 3e4);
        };
        _0x0205d6_2();
        try {
          const λbaf0bdc7fe07 = await this.request("\x72\x65\x63\x65\x69\x76\x65", {}, AbortSignal.any([ λ063702515040.signal, AbortSignal.timeout(12e4) ]));
          if (204 === λbaf0bdc7fe07.status) continue;
          _0x0205d6_2(), await readRelayFrames(λbaf0bdc7fe07.body, λ063702515040 => {
            1 === this.readyState && this.emit("\x6d\x65\x73\x73\x61\x67\x65", new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
              data: "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72" === this.binaryType ? λ063702515040 : new Blob([ λ063702515040 ])
            }));
          }, _0x0205d6_2);
        } finally {
          clearTimeout(λbaf0bdc7fe07);
        }
      }
    } catch {
      this.readyState < 2 && (this.emit("\x65\x72\x72\x6f\x72"), this.close(1006));
    }
  }
  send(λ063702515040) {
    if (1 !== this.readyState) throw new DOMException("\x53\x6f\x63\x6b\x65\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x6f\x70\x65\x6e", "\x49\x6e\x76\x61\x6c\x69\x64\x53\x74\x61\x74\x65\x45\x72\x72\x6f\x72");
    const λbaf0bdc7fe07 = new Blob([ λ063702515040 ]);
    if (λbaf0bdc7fe07.size > 262144 || this.bufferedAmount + λbaf0bdc7fe07.size > 2097152 || this.queue.length >= 512) return this.emit("\x65\x72\x72\x6f\x72"), 
    void this.close(1006);
    this.bufferedAmount += λbaf0bdc7fe07.size, this.queue.push(λbaf0bdc7fe07), this.flush();
  }
  flush() {
    !this.sending && 1 === this.readyState && this.queue.length && (this.sending = !0, 
    Promise.resolve().then(async () => {
      for (;1 === this.readyState && this.queue.length; ) {
        const λ063702515040 = [], λbaf0bdc7fe07 = [];
        let λf82fa21ce3fe = 0, λ1107a5d9c124 = 0;
        do {
          const λ796c3461b13b = this.queue[0];
          if (λ063702515040.length && λ1107a5d9c124 + 4 + λ796c3461b13b.size > 1048576) break;
          if (this.queue.shift(), λ063702515040.push(λ796c3461b13b), λf82fa21ce3fe += λ796c3461b13b.size, 
          λ1107a5d9c124 += λ796c3461b13b.size + 4, this.batchSend) {
            const λ063702515040 = new Uint8Array(4);
            new DataView(λ063702515040.buffer).setUint32(0, λ796c3461b13b.size, !0), λbaf0bdc7fe07.push(λ063702515040, λ796c3461b13b);
          }
        } while (this.batchSend && this.queue.length && λ063702515040.length < 64);
        const λ796c3461b13b = this.sequence;
        if (this.sequence += λ063702515040.length, await this.request(this.batchSend ? "\x73\x65\x6e\x64\x2d\x62\x61\x74\x63\x68" : "\x73\x65\x6e\x64", {
          method: "\x50\x4f\x53\x54",
          headers: {
            "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6f\x63\x74\x65\x74\x2d\x73\x74\x72\x65\x61\x6d",
            "\x58\x2d\x54\x75\x74\x73\x69\x2d\x53\x65\x71\x75\x65\x6e\x63\x65": String(λ796c3461b13b)
          },
          body: this.batchSend ? new Blob(λbaf0bdc7fe07) : λ063702515040[0]
        }), 1 !== this.readyState) return;
        this.bufferedAmount -= λf82fa21ce3fe;
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
  close(λ063702515040 = 1e3, λbaf0bdc7fe07 = "") {
    3 !== this.readyState && (this.readyState = 3, this.abort.abort(), this.cleanup(), 
    this.bufferedAmount = 0, this.queue.length = 0, this.emit("\x63\x6c\x6f\x73\x65", new CloseEvent("\x63\x6c\x6f\x73\x65", {
      code: λ063702515040,
      reason: λbaf0bdc7fe07,
      wasClean: 1e3 === λ063702515040
    })));
  }
}

const λ063702515040 = new Map;

export function createHttpRelayEndpoint() {
  const λbaf0bdc7fe07 = httpRelayUrl() + crypto.randomUUID() + "\x2f", λf82fa21ce3fe = new Set;
  return λ063702515040.set(λbaf0bdc7fe07, λf82fa21ce3fe), {
    url: λbaf0bdc7fe07,
    close() {
      λ063702515040.delete(λbaf0bdc7fe07);
      for (const λ063702515040 of λf82fa21ce3fe) λ063702515040.close();
      λf82fa21ce3fe.clear();
    }
  };
}

let λbaf0bdc7fe07 = !1;

export function installHttpRelaySocket() {
  if (λbaf0bdc7fe07) return;
  λbaf0bdc7fe07 = !0;
  const λf82fa21ce3fe = globalThis.WebSocket;
  function _0x0205d6_3(λbaf0bdc7fe07, λ1107a5d9c124) {
    const λ796c3461b13b = String(λbaf0bdc7fe07), λ0906591a7095 = λ063702515040.get(λ796c3461b13b);
    if (λ796c3461b13b === httpRelayUrl() || λ0906591a7095) {
      const λ063702515040 = new HttpRelaySocket(λbaf0bdc7fe07);
      return λ0906591a7095 && (λ0906591a7095.add(λ063702515040), λ063702515040.addEventListener("\x63\x6c\x6f\x73\x65", () => λ0906591a7095.delete(λ063702515040), {
        once: !0
      })), λ063702515040;
    }
    return void 0 === λ1107a5d9c124 ? new λf82fa21ce3fe(λbaf0bdc7fe07) : new λf82fa21ce3fe(λbaf0bdc7fe07, λ1107a5d9c124);
  }
  Object.setPrototypeOf(_0x0205d6_3, λf82fa21ce3fe), _0x0205d6_3.prototype = λf82fa21ce3fe.prototype, 
  Object.defineProperty(_0x0205d6_3, Symbol.hasInstance, {
    value: λ063702515040 => λ063702515040 instanceof λf82fa21ce3fe || λ063702515040 instanceof HttpRelaySocket
  }), globalThis.WebSocket = _0x0205d6_3, addEventListener("\x70\x61\x67\x65\x68\x69\x64\x65", () => {
    for (const λbaf0bdc7fe07 of λ063702515040.values()) for (const λ063702515040 of λbaf0bdc7fe07) λ063702515040.close();
    λ063702515040.clear();
  });
}
