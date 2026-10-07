export const httpRelayUrl = (λ4f0eb6c778ac = location) => `${"\x68\x74\x74\x70\x73\x3a" === λ4f0eb6c778ac.protocol ? "\x77\x73\x73\x3a" : "\x77\x73\x3a"}\x2f\x2f${λ4f0eb6c778ac.host}\x2f\x61\x70\x69\x2f\x74\x75\x74\x73\x69\x2d\x72\x65\x6c\x61\x79\x2f\x73\x6f\x63\x6b\x65\x74\x2f`;

export async function readRelayFrames(λ4f0eb6c778ac, λb9c9d21626a5, λb04d2ed34dbf = () => {}) {
  const λfa7e2637e014 = λ4f0eb6c778ac.getReader(), λc6958bd344f8 = new Uint8Array(4);
  let λb59f0881b357 = 0, λaae28046c901 = null, λ32248c6f85ea = 0, λ12e4e57398ea = 0;
  try {
    for (;;) {
      const {done: λ4f0eb6c778ac, value: λa0eb27e53e0e} = await λfa7e2637e014.read();
      if (λ4f0eb6c778ac) break;
      if (!λa0eb27e53e0e?.length) continue;
      if (λb04d2ed34dbf(), λ12e4e57398ea += λa0eb27e53e0e.length, λ12e4e57398ea > 20971520) throw new Error("\x52\x65\x6c\x61\x79\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65");
      let λ9a4835db2131 = 0;
      for (;λ9a4835db2131 < λa0eb27e53e0e.length; ) {
        if (!λaae28046c901) {
          const λ4f0eb6c778ac = Math.min(4 - λb59f0881b357, λa0eb27e53e0e.length - λ9a4835db2131);
          if (λc6958bd344f8.set(λa0eb27e53e0e.subarray(λ9a4835db2131, λ9a4835db2131 + λ4f0eb6c778ac), λb59f0881b357), 
          λb59f0881b357 += λ4f0eb6c778ac, λ9a4835db2131 += λ4f0eb6c778ac, λb59f0881b357 < 4) continue;
          const λb9c9d21626a5 = new DataView(λc6958bd344f8.buffer).getUint32(0, !0);
          if (λb9c9d21626a5 > 2097152) throw new Error("\x52\x65\x6c\x61\x79\x20\x66\x72\x61\x6d\x65\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65");
          λaae28046c901 = new Uint8Array(λb9c9d21626a5), λ32248c6f85ea = 0, λb59f0881b357 = 0;
        }
        const λ4f0eb6c778ac = Math.min(λaae28046c901.length - λ32248c6f85ea, λa0eb27e53e0e.length - λ9a4835db2131);
        λaae28046c901.set(λa0eb27e53e0e.subarray(λ9a4835db2131, λ9a4835db2131 + λ4f0eb6c778ac), λ32248c6f85ea), 
        λ32248c6f85ea += λ4f0eb6c778ac, λ9a4835db2131 += λ4f0eb6c778ac, λ32248c6f85ea === λaae28046c901.length && (λb9c9d21626a5(λaae28046c901.buffer), 
        λaae28046c901 = null);
      }
    }
    if (λb59f0881b357 || λaae28046c901) throw new Error("\x49\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x72\x65\x6c\x61\x79\x20\x66\x72\x61\x6d\x65");
  } finally {
    await λfa7e2637e014.cancel().catch(() => {}), λfa7e2637e014.releaseLock();
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
  constructor(λ4f0eb6c778ac) {
    super(), this.url = String(λ4f0eb6c778ac), this.abort = new AbortController, this.sequence = 0, 
    this.queue = [], this.sending = !1, this.start();
  }
  emit(λ4f0eb6c778ac, λb9c9d21626a5 = new Event(λ4f0eb6c778ac)) {
    this.dispatchEvent(λb9c9d21626a5), this["\x6f\x6e" + λ4f0eb6c778ac]?.call(this, λb9c9d21626a5);
  }
  async request(λ4f0eb6c778ac, λb9c9d21626a5 = {}, λb04d2ed34dbf = AbortSignal.timeout(3e4)) {
    const λfa7e2637e014 = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x74\x75\x74\x73\x69\x2d\x72\x65\x6c\x61\x79\x2f" + λ4f0eb6c778ac, {
      ...λb9c9d21626a5,
      cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65",
      credentials: "\x73\x61\x6d\x65\x2d\x6f\x72\x69\x67\x69\x6e",
      signal: AbortSignal.any([ this.abort.signal, λb04d2ed34dbf ]),
      headers: {
        ...λb9c9d21626a5.headers,
        ...this.token ? {
          Authorization: "\x42\x65\x61\x72\x65\x72\x20" + this.token
        } : {}
      }
    });
    if (!λfa7e2637e014.ok) throw new Error("\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65");
    return λfa7e2637e014;
  }
  async start() {
    try {
      const λ4f0eb6c778ac = await (await this.request("\x73\x65\x73\x73\x69\x6f\x6e\x73", {
        method: "\x50\x4f\x53\x54"
      })).json();
      if (this.token = λ4f0eb6c778ac.token, this.batchSend = 1 === λ4f0eb6c778ac.sendBatch, 
      0 !== this.readyState) return this.cleanup();
      for (this.readyState = 1, this.emit("\x6f\x70\x65\x6e"); 1 === this.readyState; ) {
        const λ4f0eb6c778ac = new AbortController;
        let λb9c9d21626a5;
        const _0x0205d6_2 = () => {
          clearTimeout(λb9c9d21626a5), λb9c9d21626a5 = setTimeout(() => λ4f0eb6c778ac.abort(), 3e4);
        };
        _0x0205d6_2();
        try {
          const λb9c9d21626a5 = await this.request("\x72\x65\x63\x65\x69\x76\x65", {}, AbortSignal.any([ λ4f0eb6c778ac.signal, AbortSignal.timeout(12e4) ]));
          if (204 === λb9c9d21626a5.status) continue;
          _0x0205d6_2(), await readRelayFrames(λb9c9d21626a5.body, λ4f0eb6c778ac => {
            1 === this.readyState && this.emit("\x6d\x65\x73\x73\x61\x67\x65", new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
              data: "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72" === this.binaryType ? λ4f0eb6c778ac : new Blob([ λ4f0eb6c778ac ])
            }));
          }, _0x0205d6_2);
        } finally {
          clearTimeout(λb9c9d21626a5);
        }
      }
    } catch {
      this.readyState < 2 && (this.emit("\x65\x72\x72\x6f\x72"), this.close(1006));
    }
  }
  send(λ4f0eb6c778ac) {
    if (1 !== this.readyState) throw new DOMException("\x53\x6f\x63\x6b\x65\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x6f\x70\x65\x6e", "\x49\x6e\x76\x61\x6c\x69\x64\x53\x74\x61\x74\x65\x45\x72\x72\x6f\x72");
    const λb9c9d21626a5 = new Blob([ λ4f0eb6c778ac ]);
    if (λb9c9d21626a5.size > 262144 || this.bufferedAmount + λb9c9d21626a5.size > 2097152 || this.queue.length >= 512) return this.emit("\x65\x72\x72\x6f\x72"), 
    void this.close(1006);
    this.bufferedAmount += λb9c9d21626a5.size, this.queue.push(λb9c9d21626a5), this.flush();
  }
  flush() {
    !this.sending && 1 === this.readyState && this.queue.length && (this.sending = !0, 
    Promise.resolve().then(async () => {
      for (;1 === this.readyState && this.queue.length; ) {
        const λ4f0eb6c778ac = [], λb9c9d21626a5 = [];
        let λb04d2ed34dbf = 0, λfa7e2637e014 = 0;
        do {
          const λc6958bd344f8 = this.queue[0];
          if (λ4f0eb6c778ac.length && λfa7e2637e014 + 4 + λc6958bd344f8.size > 1048576) break;
          if (this.queue.shift(), λ4f0eb6c778ac.push(λc6958bd344f8), λb04d2ed34dbf += λc6958bd344f8.size, 
          λfa7e2637e014 += λc6958bd344f8.size + 4, this.batchSend) {
            const λ4f0eb6c778ac = new Uint8Array(4);
            new DataView(λ4f0eb6c778ac.buffer).setUint32(0, λc6958bd344f8.size, !0), λb9c9d21626a5.push(λ4f0eb6c778ac, λc6958bd344f8);
          }
        } while (this.batchSend && this.queue.length && λ4f0eb6c778ac.length < 64);
        const λc6958bd344f8 = this.sequence;
        if (this.sequence += λ4f0eb6c778ac.length, await this.request(this.batchSend ? "\x73\x65\x6e\x64\x2d\x62\x61\x74\x63\x68" : "\x73\x65\x6e\x64", {
          method: "\x50\x4f\x53\x54",
          headers: {
            "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6f\x63\x74\x65\x74\x2d\x73\x74\x72\x65\x61\x6d",
            "\x58\x2d\x54\x75\x74\x73\x69\x2d\x53\x65\x71\x75\x65\x6e\x63\x65": String(λc6958bd344f8)
          },
          body: this.batchSend ? new Blob(λb9c9d21626a5) : λ4f0eb6c778ac[0]
        }), 1 !== this.readyState) return;
        this.bufferedAmount -= λb04d2ed34dbf;
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
  close(λ4f0eb6c778ac = 1e3, λb9c9d21626a5 = "") {
    3 !== this.readyState && (this.readyState = 3, this.abort.abort(), this.cleanup(), 
    this.bufferedAmount = 0, this.queue.length = 0, this.emit("\x63\x6c\x6f\x73\x65", new CloseEvent("\x63\x6c\x6f\x73\x65", {
      code: λ4f0eb6c778ac,
      reason: λb9c9d21626a5,
      wasClean: 1e3 === λ4f0eb6c778ac
    })));
  }
}

const λ4f0eb6c778ac = new Map;

export function createHttpRelayEndpoint() {
  const λb9c9d21626a5 = httpRelayUrl() + crypto.randomUUID() + "\x2f", λb04d2ed34dbf = new Set;
  return λ4f0eb6c778ac.set(λb9c9d21626a5, λb04d2ed34dbf), {
    url: λb9c9d21626a5,
    close() {
      λ4f0eb6c778ac.delete(λb9c9d21626a5);
      for (const λ4f0eb6c778ac of λb04d2ed34dbf) λ4f0eb6c778ac.close();
      λb04d2ed34dbf.clear();
    }
  };
}

let λb9c9d21626a5 = !1;

export function installHttpRelaySocket() {
  if (λb9c9d21626a5) return;
  λb9c9d21626a5 = !0;
  const λb04d2ed34dbf = globalThis.WebSocket;
  function _0x0205d6_3(λb9c9d21626a5, λfa7e2637e014) {
    const λc6958bd344f8 = String(λb9c9d21626a5), λb59f0881b357 = λ4f0eb6c778ac.get(λc6958bd344f8);
    if (λc6958bd344f8 === httpRelayUrl() || λb59f0881b357) {
      const λ4f0eb6c778ac = new HttpRelaySocket(λb9c9d21626a5);
      return λb59f0881b357 && (λb59f0881b357.add(λ4f0eb6c778ac), λ4f0eb6c778ac.addEventListener("\x63\x6c\x6f\x73\x65", () => λb59f0881b357.delete(λ4f0eb6c778ac), {
        once: !0
      })), λ4f0eb6c778ac;
    }
    return void 0 === λfa7e2637e014 ? new λb04d2ed34dbf(λb9c9d21626a5) : new λb04d2ed34dbf(λb9c9d21626a5, λfa7e2637e014);
  }
  Object.setPrototypeOf(_0x0205d6_3, λb04d2ed34dbf), _0x0205d6_3.prototype = λb04d2ed34dbf.prototype, 
  Object.defineProperty(_0x0205d6_3, Symbol.hasInstance, {
    value: λ4f0eb6c778ac => λ4f0eb6c778ac instanceof λb04d2ed34dbf || λ4f0eb6c778ac instanceof HttpRelaySocket
  }), globalThis.WebSocket = _0x0205d6_3, addEventListener("\x70\x61\x67\x65\x68\x69\x64\x65", () => {
    for (const λb9c9d21626a5 of λ4f0eb6c778ac.values()) for (const λ4f0eb6c778ac of λb9c9d21626a5) λ4f0eb6c778ac.close();
    λ4f0eb6c778ac.clear();
  });
}
