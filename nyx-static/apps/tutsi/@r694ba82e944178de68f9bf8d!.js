export const httpRelayUrl = (λ09bf581cc2a3 = location) => `${"\x68\x74\x74\x70\x73\x3a" === λ09bf581cc2a3.protocol ? "\x77\x73\x73\x3a" : "\x77\x73\x3a"}\x2f\x2f${λ09bf581cc2a3.host}\x2f\x61\x70\x69\x2f\x74\x75\x74\x73\x69\x2d\x72\x65\x6c\x61\x79\x2f\x73\x6f\x63\x6b\x65\x74\x2f`;

export async function readRelayFrames(λ09bf581cc2a3, λ63bbd9c3893e, λ00eb8b738a99 = () => {}) {
  const λ7f1664969173 = λ09bf581cc2a3.getReader(), λe89fe25b3c66 = new Uint8Array(4);
  let λface44f3fbd5 = 0, λ15922f61e08b = null, λ557ed1c1ba23 = 0, λdda8654a68b1 = 0;
  try {
    for (;;) {
      const {done: λ09bf581cc2a3, value: λ3716b151011e} = await λ7f1664969173.read();
      if (λ09bf581cc2a3) break;
      if (!λ3716b151011e?.length) continue;
      if (λ00eb8b738a99(), λdda8654a68b1 += λ3716b151011e.length, λdda8654a68b1 > 20971520) throw new Error("\x52\x65\x6c\x61\x79\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65");
      let λ12590e4a1455 = 0;
      for (;λ12590e4a1455 < λ3716b151011e.length; ) {
        if (!λ15922f61e08b) {
          const λ09bf581cc2a3 = Math.min(4 - λface44f3fbd5, λ3716b151011e.length - λ12590e4a1455);
          if (λe89fe25b3c66.set(λ3716b151011e.subarray(λ12590e4a1455, λ12590e4a1455 + λ09bf581cc2a3), λface44f3fbd5), 
          λface44f3fbd5 += λ09bf581cc2a3, λ12590e4a1455 += λ09bf581cc2a3, λface44f3fbd5 < 4) continue;
          const λ63bbd9c3893e = new DataView(λe89fe25b3c66.buffer).getUint32(0, !0);
          if (λ63bbd9c3893e > 2097152) throw new Error("\x52\x65\x6c\x61\x79\x20\x66\x72\x61\x6d\x65\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65");
          λ15922f61e08b = new Uint8Array(λ63bbd9c3893e), λ557ed1c1ba23 = 0, λface44f3fbd5 = 0;
        }
        const λ09bf581cc2a3 = Math.min(λ15922f61e08b.length - λ557ed1c1ba23, λ3716b151011e.length - λ12590e4a1455);
        λ15922f61e08b.set(λ3716b151011e.subarray(λ12590e4a1455, λ12590e4a1455 + λ09bf581cc2a3), λ557ed1c1ba23), 
        λ557ed1c1ba23 += λ09bf581cc2a3, λ12590e4a1455 += λ09bf581cc2a3, λ557ed1c1ba23 === λ15922f61e08b.length && (λ63bbd9c3893e(λ15922f61e08b.buffer), 
        λ15922f61e08b = null);
      }
    }
    if (λface44f3fbd5 || λ15922f61e08b) throw new Error("\x49\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x72\x65\x6c\x61\x79\x20\x66\x72\x61\x6d\x65");
  } finally {
    await λ7f1664969173.cancel().catch(() => {}), λ7f1664969173.releaseLock();
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
  constructor(λ09bf581cc2a3) {
    super(), this.url = String(λ09bf581cc2a3), this.abort = new AbortController, this.sequence = 0, 
    this.queue = [], this.sending = !1, this.start();
  }
  emit(λ09bf581cc2a3, λ63bbd9c3893e = new Event(λ09bf581cc2a3)) {
    this.dispatchEvent(λ63bbd9c3893e), this["\x6f\x6e" + λ09bf581cc2a3]?.call(this, λ63bbd9c3893e);
  }
  async request(λ09bf581cc2a3, λ63bbd9c3893e = {}, λ00eb8b738a99 = AbortSignal.timeout(3e4)) {
    const λ7f1664969173 = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x74\x75\x74\x73\x69\x2d\x72\x65\x6c\x61\x79\x2f" + λ09bf581cc2a3, {
      ...λ63bbd9c3893e,
      cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65",
      credentials: "\x73\x61\x6d\x65\x2d\x6f\x72\x69\x67\x69\x6e",
      signal: AbortSignal.any([ this.abort.signal, λ00eb8b738a99 ]),
      headers: {
        ...λ63bbd9c3893e.headers,
        ...this.token ? {
          Authorization: "\x42\x65\x61\x72\x65\x72\x20" + this.token
        } : {}
      }
    });
    if (!λ7f1664969173.ok) throw new Error("\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65");
    return λ7f1664969173;
  }
  async start() {
    try {
      const λ09bf581cc2a3 = await (await this.request("\x73\x65\x73\x73\x69\x6f\x6e\x73", {
        method: "\x50\x4f\x53\x54"
      })).json();
      if (this.token = λ09bf581cc2a3.token, this.batchSend = 1 === λ09bf581cc2a3.sendBatch, 
      0 !== this.readyState) return this.cleanup();
      for (this.readyState = 1, this.emit("\x6f\x70\x65\x6e"); 1 === this.readyState; ) {
        const λ09bf581cc2a3 = new AbortController;
        let λ63bbd9c3893e;
        const _0x0205d6_2 = () => {
          clearTimeout(λ63bbd9c3893e), λ63bbd9c3893e = setTimeout(() => λ09bf581cc2a3.abort(), 3e4);
        };
        _0x0205d6_2();
        try {
          const λ63bbd9c3893e = await this.request("\x72\x65\x63\x65\x69\x76\x65", {}, AbortSignal.any([ λ09bf581cc2a3.signal, AbortSignal.timeout(12e4) ]));
          if (204 === λ63bbd9c3893e.status) continue;
          _0x0205d6_2(), await readRelayFrames(λ63bbd9c3893e.body, λ09bf581cc2a3 => {
            1 === this.readyState && this.emit("\x6d\x65\x73\x73\x61\x67\x65", new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
              data: "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72" === this.binaryType ? λ09bf581cc2a3 : new Blob([ λ09bf581cc2a3 ])
            }));
          }, _0x0205d6_2);
        } finally {
          clearTimeout(λ63bbd9c3893e);
        }
      }
    } catch {
      this.readyState < 2 && (this.emit("\x65\x72\x72\x6f\x72"), this.close(1006));
    }
  }
  send(λ09bf581cc2a3) {
    if (1 !== this.readyState) throw new DOMException("\x53\x6f\x63\x6b\x65\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x6f\x70\x65\x6e", "\x49\x6e\x76\x61\x6c\x69\x64\x53\x74\x61\x74\x65\x45\x72\x72\x6f\x72");
    const λ63bbd9c3893e = new Blob([ λ09bf581cc2a3 ]);
    if (λ63bbd9c3893e.size > 262144 || this.bufferedAmount + λ63bbd9c3893e.size > 2097152 || this.queue.length >= 512) return this.emit("\x65\x72\x72\x6f\x72"), 
    void this.close(1006);
    this.bufferedAmount += λ63bbd9c3893e.size, this.queue.push(λ63bbd9c3893e), this.flush();
  }
  flush() {
    !this.sending && 1 === this.readyState && this.queue.length && (this.sending = !0, 
    Promise.resolve().then(async () => {
      for (;1 === this.readyState && this.queue.length; ) {
        const λ09bf581cc2a3 = [], λ63bbd9c3893e = [];
        let λ00eb8b738a99 = 0, λ7f1664969173 = 0;
        do {
          const λe89fe25b3c66 = this.queue[0];
          if (λ09bf581cc2a3.length && λ7f1664969173 + 4 + λe89fe25b3c66.size > 1048576) break;
          if (this.queue.shift(), λ09bf581cc2a3.push(λe89fe25b3c66), λ00eb8b738a99 += λe89fe25b3c66.size, 
          λ7f1664969173 += λe89fe25b3c66.size + 4, this.batchSend) {
            const λ09bf581cc2a3 = new Uint8Array(4);
            new DataView(λ09bf581cc2a3.buffer).setUint32(0, λe89fe25b3c66.size, !0), λ63bbd9c3893e.push(λ09bf581cc2a3, λe89fe25b3c66);
          }
        } while (this.batchSend && this.queue.length && λ09bf581cc2a3.length < 64);
        const λe89fe25b3c66 = this.sequence;
        if (this.sequence += λ09bf581cc2a3.length, await this.request(this.batchSend ? "\x73\x65\x6e\x64\x2d\x62\x61\x74\x63\x68" : "\x73\x65\x6e\x64", {
          method: "\x50\x4f\x53\x54",
          headers: {
            "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6f\x63\x74\x65\x74\x2d\x73\x74\x72\x65\x61\x6d",
            "\x58\x2d\x54\x75\x74\x73\x69\x2d\x53\x65\x71\x75\x65\x6e\x63\x65": String(λe89fe25b3c66)
          },
          body: this.batchSend ? new Blob(λ63bbd9c3893e) : λ09bf581cc2a3[0]
        }), 1 !== this.readyState) return;
        this.bufferedAmount -= λ00eb8b738a99;
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
  close(λ09bf581cc2a3 = 1e3, λ63bbd9c3893e = "") {
    3 !== this.readyState && (this.readyState = 3, this.abort.abort(), this.cleanup(), 
    this.bufferedAmount = 0, this.queue.length = 0, this.emit("\x63\x6c\x6f\x73\x65", new CloseEvent("\x63\x6c\x6f\x73\x65", {
      code: λ09bf581cc2a3,
      reason: λ63bbd9c3893e,
      wasClean: 1e3 === λ09bf581cc2a3
    })));
  }
}

const λ09bf581cc2a3 = new Map;

export function createHttpRelayEndpoint() {
  const λ63bbd9c3893e = httpRelayUrl() + crypto.randomUUID() + "\x2f", λ00eb8b738a99 = new Set;
  return λ09bf581cc2a3.set(λ63bbd9c3893e, λ00eb8b738a99), {
    url: λ63bbd9c3893e,
    close() {
      λ09bf581cc2a3.delete(λ63bbd9c3893e);
      for (const λ09bf581cc2a3 of λ00eb8b738a99) λ09bf581cc2a3.close();
      λ00eb8b738a99.clear();
    }
  };
}

let λ63bbd9c3893e = !1;

export function installHttpRelaySocket() {
  if (λ63bbd9c3893e) return;
  λ63bbd9c3893e = !0;
  const λ00eb8b738a99 = globalThis.WebSocket;
  function _0x0205d6_3(λ63bbd9c3893e, λ7f1664969173) {
    const λe89fe25b3c66 = String(λ63bbd9c3893e), λface44f3fbd5 = λ09bf581cc2a3.get(λe89fe25b3c66);
    if (λe89fe25b3c66 === httpRelayUrl() || λface44f3fbd5) {
      const λ09bf581cc2a3 = new HttpRelaySocket(λ63bbd9c3893e);
      return λface44f3fbd5 && (λface44f3fbd5.add(λ09bf581cc2a3), λ09bf581cc2a3.addEventListener("\x63\x6c\x6f\x73\x65", () => λface44f3fbd5.delete(λ09bf581cc2a3), {
        once: !0
      })), λ09bf581cc2a3;
    }
    return void 0 === λ7f1664969173 ? new λ00eb8b738a99(λ63bbd9c3893e) : new λ00eb8b738a99(λ63bbd9c3893e, λ7f1664969173);
  }
  Object.setPrototypeOf(_0x0205d6_3, λ00eb8b738a99), _0x0205d6_3.prototype = λ00eb8b738a99.prototype, 
  Object.defineProperty(_0x0205d6_3, Symbol.hasInstance, {
    value: λ09bf581cc2a3 => λ09bf581cc2a3 instanceof λ00eb8b738a99 || λ09bf581cc2a3 instanceof HttpRelaySocket
  }), globalThis.WebSocket = _0x0205d6_3, addEventListener("\x70\x61\x67\x65\x68\x69\x64\x65", () => {
    for (const λ63bbd9c3893e of λ09bf581cc2a3.values()) for (const λ09bf581cc2a3 of λ63bbd9c3893e) λ09bf581cc2a3.close();
    λ09bf581cc2a3.clear();
  });
}
