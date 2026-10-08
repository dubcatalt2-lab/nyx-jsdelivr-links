export const httpRelayUrl = (λ7205a2b01080 = location) => `${"\x68\x74\x74\x70\x73\x3a" === λ7205a2b01080.protocol ? "\x77\x73\x73\x3a" : "\x77\x73\x3a"}\x2f\x2f${λ7205a2b01080.host}\x2f\x61\x70\x69\x2f\x74\x75\x74\x73\x69\x2d\x72\x65\x6c\x61\x79\x2f\x73\x6f\x63\x6b\x65\x74\x2f`;

export async function readRelayFrames(λ7205a2b01080, λ9691256b227f, λ64feaa2300f6 = () => {}) {
  const λd6fb9876e2a0 = λ7205a2b01080.getReader(), λe210e9e66477 = new Uint8Array(4);
  let λd1a95a25885b = 0, λ417fbd542a83 = null, λ13704234b0c0 = 0, λ80b582c97a0f = 0;
  try {
    for (;;) {
      const {done: λ7205a2b01080, value: λ998c110eb67c} = await λd6fb9876e2a0.read();
      if (λ7205a2b01080) break;
      if (!λ998c110eb67c?.length) continue;
      if (λ64feaa2300f6(), λ80b582c97a0f += λ998c110eb67c.length, λ80b582c97a0f > 20971520) throw new Error("\x52\x65\x6c\x61\x79\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65");
      let λbc27a66913e5 = 0;
      for (;λbc27a66913e5 < λ998c110eb67c.length; ) {
        if (!λ417fbd542a83) {
          const λ7205a2b01080 = Math.min(4 - λd1a95a25885b, λ998c110eb67c.length - λbc27a66913e5);
          if (λe210e9e66477.set(λ998c110eb67c.subarray(λbc27a66913e5, λbc27a66913e5 + λ7205a2b01080), λd1a95a25885b), 
          λd1a95a25885b += λ7205a2b01080, λbc27a66913e5 += λ7205a2b01080, λd1a95a25885b < 4) continue;
          const λ9691256b227f = new DataView(λe210e9e66477.buffer).getUint32(0, !0);
          if (λ9691256b227f > 2097152) throw new Error("\x52\x65\x6c\x61\x79\x20\x66\x72\x61\x6d\x65\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65");
          λ417fbd542a83 = new Uint8Array(λ9691256b227f), λ13704234b0c0 = 0, λd1a95a25885b = 0;
        }
        const λ7205a2b01080 = Math.min(λ417fbd542a83.length - λ13704234b0c0, λ998c110eb67c.length - λbc27a66913e5);
        λ417fbd542a83.set(λ998c110eb67c.subarray(λbc27a66913e5, λbc27a66913e5 + λ7205a2b01080), λ13704234b0c0), 
        λ13704234b0c0 += λ7205a2b01080, λbc27a66913e5 += λ7205a2b01080, λ13704234b0c0 === λ417fbd542a83.length && (λ9691256b227f(λ417fbd542a83.buffer), 
        λ417fbd542a83 = null);
      }
    }
    if (λd1a95a25885b || λ417fbd542a83) throw new Error("\x49\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x72\x65\x6c\x61\x79\x20\x66\x72\x61\x6d\x65");
  } finally {
    await λd6fb9876e2a0.cancel().catch(() => {}), λd6fb9876e2a0.releaseLock();
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
  constructor(λ7205a2b01080) {
    super(), this.url = String(λ7205a2b01080), this.abort = new AbortController, this.sequence = 0, 
    this.queue = [], this.sending = !1, this.start();
  }
  emit(λ7205a2b01080, λ9691256b227f = new Event(λ7205a2b01080)) {
    this.dispatchEvent(λ9691256b227f), this["\x6f\x6e" + λ7205a2b01080]?.call(this, λ9691256b227f);
  }
  async request(λ7205a2b01080, λ9691256b227f = {}, λ64feaa2300f6 = AbortSignal.timeout(3e4)) {
    const λd6fb9876e2a0 = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x74\x75\x74\x73\x69\x2d\x72\x65\x6c\x61\x79\x2f" + λ7205a2b01080, {
      ...λ9691256b227f,
      cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65",
      credentials: "\x73\x61\x6d\x65\x2d\x6f\x72\x69\x67\x69\x6e",
      signal: AbortSignal.any([ this.abort.signal, λ64feaa2300f6 ]),
      headers: {
        ...λ9691256b227f.headers,
        ...this.token ? {
          Authorization: "\x42\x65\x61\x72\x65\x72\x20" + this.token
        } : {}
      }
    });
    if (!λd6fb9876e2a0.ok) throw new Error("\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65");
    return λd6fb9876e2a0;
  }
  async start() {
    try {
      const λ7205a2b01080 = await (await this.request("\x73\x65\x73\x73\x69\x6f\x6e\x73", {
        method: "\x50\x4f\x53\x54"
      })).json();
      if (this.token = λ7205a2b01080.token, this.batchSend = 1 === λ7205a2b01080.sendBatch, 
      0 !== this.readyState) return this.cleanup();
      for (this.readyState = 1, this.emit("\x6f\x70\x65\x6e"); 1 === this.readyState; ) {
        const λ7205a2b01080 = new AbortController;
        let λ9691256b227f;
        const _0x0205d6_2 = () => {
          clearTimeout(λ9691256b227f), λ9691256b227f = setTimeout(() => λ7205a2b01080.abort(), 3e4);
        };
        _0x0205d6_2();
        try {
          const λ9691256b227f = await this.request("\x72\x65\x63\x65\x69\x76\x65", {}, AbortSignal.any([ λ7205a2b01080.signal, AbortSignal.timeout(12e4) ]));
          if (204 === λ9691256b227f.status) continue;
          _0x0205d6_2(), await readRelayFrames(λ9691256b227f.body, λ7205a2b01080 => {
            1 === this.readyState && this.emit("\x6d\x65\x73\x73\x61\x67\x65", new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
              data: "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72" === this.binaryType ? λ7205a2b01080 : new Blob([ λ7205a2b01080 ])
            }));
          }, _0x0205d6_2);
        } finally {
          clearTimeout(λ9691256b227f);
        }
      }
    } catch {
      this.readyState < 2 && (this.emit("\x65\x72\x72\x6f\x72"), this.close(1006));
    }
  }
  send(λ7205a2b01080) {
    if (1 !== this.readyState) throw new DOMException("\x53\x6f\x63\x6b\x65\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x6f\x70\x65\x6e", "\x49\x6e\x76\x61\x6c\x69\x64\x53\x74\x61\x74\x65\x45\x72\x72\x6f\x72");
    const λ9691256b227f = new Blob([ λ7205a2b01080 ]);
    if (λ9691256b227f.size > 262144 || this.bufferedAmount + λ9691256b227f.size > 2097152 || this.queue.length >= 512) return this.emit("\x65\x72\x72\x6f\x72"), 
    void this.close(1006);
    this.bufferedAmount += λ9691256b227f.size, this.queue.push(λ9691256b227f), this.flush();
  }
  flush() {
    !this.sending && 1 === this.readyState && this.queue.length && (this.sending = !0, 
    Promise.resolve().then(async () => {
      for (;1 === this.readyState && this.queue.length; ) {
        const λ7205a2b01080 = [], λ9691256b227f = [];
        let λ64feaa2300f6 = 0, λd6fb9876e2a0 = 0;
        do {
          const λe210e9e66477 = this.queue[0];
          if (λ7205a2b01080.length && λd6fb9876e2a0 + 4 + λe210e9e66477.size > 1048576) break;
          if (this.queue.shift(), λ7205a2b01080.push(λe210e9e66477), λ64feaa2300f6 += λe210e9e66477.size, 
          λd6fb9876e2a0 += λe210e9e66477.size + 4, this.batchSend) {
            const λ7205a2b01080 = new Uint8Array(4);
            new DataView(λ7205a2b01080.buffer).setUint32(0, λe210e9e66477.size, !0), λ9691256b227f.push(λ7205a2b01080, λe210e9e66477);
          }
        } while (this.batchSend && this.queue.length && λ7205a2b01080.length < 64);
        const λe210e9e66477 = this.sequence;
        if (this.sequence += λ7205a2b01080.length, await this.request(this.batchSend ? "\x73\x65\x6e\x64\x2d\x62\x61\x74\x63\x68" : "\x73\x65\x6e\x64", {
          method: "\x50\x4f\x53\x54",
          headers: {
            "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6f\x63\x74\x65\x74\x2d\x73\x74\x72\x65\x61\x6d",
            "\x58\x2d\x54\x75\x74\x73\x69\x2d\x53\x65\x71\x75\x65\x6e\x63\x65": String(λe210e9e66477)
          },
          body: this.batchSend ? new Blob(λ9691256b227f) : λ7205a2b01080[0]
        }), 1 !== this.readyState) return;
        this.bufferedAmount -= λ64feaa2300f6;
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
  close(λ7205a2b01080 = 1e3, λ9691256b227f = "") {
    3 !== this.readyState && (this.readyState = 3, this.abort.abort(), this.cleanup(), 
    this.bufferedAmount = 0, this.queue.length = 0, this.emit("\x63\x6c\x6f\x73\x65", new CloseEvent("\x63\x6c\x6f\x73\x65", {
      code: λ7205a2b01080,
      reason: λ9691256b227f,
      wasClean: 1e3 === λ7205a2b01080
    })));
  }
}

const λ7205a2b01080 = new Map;

export function createHttpRelayEndpoint() {
  const λ9691256b227f = httpRelayUrl() + crypto.randomUUID() + "\x2f", λ64feaa2300f6 = new Set;
  return λ7205a2b01080.set(λ9691256b227f, λ64feaa2300f6), {
    url: λ9691256b227f,
    close() {
      λ7205a2b01080.delete(λ9691256b227f);
      for (const λ7205a2b01080 of λ64feaa2300f6) λ7205a2b01080.close();
      λ64feaa2300f6.clear();
    }
  };
}

let λ9691256b227f = !1;

export function installHttpRelaySocket() {
  if (λ9691256b227f) return;
  λ9691256b227f = !0;
  const λ64feaa2300f6 = globalThis.WebSocket;
  function _0x0205d6_3(λ9691256b227f, λd6fb9876e2a0) {
    const λe210e9e66477 = String(λ9691256b227f), λd1a95a25885b = λ7205a2b01080.get(λe210e9e66477);
    if (λe210e9e66477 === httpRelayUrl() || λd1a95a25885b) {
      const λ7205a2b01080 = new HttpRelaySocket(λ9691256b227f);
      return λd1a95a25885b && (λd1a95a25885b.add(λ7205a2b01080), λ7205a2b01080.addEventListener("\x63\x6c\x6f\x73\x65", () => λd1a95a25885b.delete(λ7205a2b01080), {
        once: !0
      })), λ7205a2b01080;
    }
    return void 0 === λd6fb9876e2a0 ? new λ64feaa2300f6(λ9691256b227f) : new λ64feaa2300f6(λ9691256b227f, λd6fb9876e2a0);
  }
  Object.setPrototypeOf(_0x0205d6_3, λ64feaa2300f6), _0x0205d6_3.prototype = λ64feaa2300f6.prototype, 
  Object.defineProperty(_0x0205d6_3, Symbol.hasInstance, {
    value: λ7205a2b01080 => λ7205a2b01080 instanceof λ64feaa2300f6 || λ7205a2b01080 instanceof HttpRelaySocket
  }), globalThis.WebSocket = _0x0205d6_3, addEventListener("\x70\x61\x67\x65\x68\x69\x64\x65", () => {
    for (const λ9691256b227f of λ7205a2b01080.values()) for (const λ7205a2b01080 of λ9691256b227f) λ7205a2b01080.close();
    λ7205a2b01080.clear();
  });
}
