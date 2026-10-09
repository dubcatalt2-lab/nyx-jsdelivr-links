export const httpRelayUrl = (λa91acd60cb1a = location) => `${"\x68\x74\x74\x70\x73\x3a" === λa91acd60cb1a.protocol ? "\x77\x73\x73\x3a" : "\x77\x73\x3a"}\x2f\x2f${λa91acd60cb1a.host}\x2f\x61\x70\x69\x2f\x74\x75\x74\x73\x69\x2d\x72\x65\x6c\x61\x79\x2f\x73\x6f\x63\x6b\x65\x74\x2f`;

export async function readRelayFrames(λa91acd60cb1a, λ90d99e492688, λ06a9181b8d6d = () => {}) {
  const λ08edd215f941 = λa91acd60cb1a.getReader(), λ0b069b240222 = new Uint8Array(4);
  let λ0e00dd5caec4 = 0, λe59e5671e417 = null, λ3d2dcf0c1ea6 = 0, λd3a0fd189c07 = 0;
  try {
    for (;;) {
      const {done: λa91acd60cb1a, value: λ4f9b6195b2b8} = await λ08edd215f941.read();
      if (λa91acd60cb1a) break;
      if (!λ4f9b6195b2b8?.length) continue;
      if (λ06a9181b8d6d(), λd3a0fd189c07 += λ4f9b6195b2b8.length, λd3a0fd189c07 > 20971520) throw new Error("\x52\x65\x6c\x61\x79\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65");
      let λa30c399d2acb = 0;
      for (;λa30c399d2acb < λ4f9b6195b2b8.length; ) {
        if (!λe59e5671e417) {
          const λa91acd60cb1a = Math.min(4 - λ0e00dd5caec4, λ4f9b6195b2b8.length - λa30c399d2acb);
          if (λ0b069b240222.set(λ4f9b6195b2b8.subarray(λa30c399d2acb, λa30c399d2acb + λa91acd60cb1a), λ0e00dd5caec4), 
          λ0e00dd5caec4 += λa91acd60cb1a, λa30c399d2acb += λa91acd60cb1a, λ0e00dd5caec4 < 4) continue;
          const λ90d99e492688 = new DataView(λ0b069b240222.buffer).getUint32(0, !0);
          if (λ90d99e492688 > 2097152) throw new Error("\x52\x65\x6c\x61\x79\x20\x66\x72\x61\x6d\x65\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65");
          λe59e5671e417 = new Uint8Array(λ90d99e492688), λ3d2dcf0c1ea6 = 0, λ0e00dd5caec4 = 0;
        }
        const λa91acd60cb1a = Math.min(λe59e5671e417.length - λ3d2dcf0c1ea6, λ4f9b6195b2b8.length - λa30c399d2acb);
        λe59e5671e417.set(λ4f9b6195b2b8.subarray(λa30c399d2acb, λa30c399d2acb + λa91acd60cb1a), λ3d2dcf0c1ea6), 
        λ3d2dcf0c1ea6 += λa91acd60cb1a, λa30c399d2acb += λa91acd60cb1a, λ3d2dcf0c1ea6 === λe59e5671e417.length && (λ90d99e492688(λe59e5671e417.buffer), 
        λe59e5671e417 = null);
      }
    }
    if (λ0e00dd5caec4 || λe59e5671e417) throw new Error("\x49\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x72\x65\x6c\x61\x79\x20\x66\x72\x61\x6d\x65");
  } finally {
    await λ08edd215f941.cancel().catch(() => {}), λ08edd215f941.releaseLock();
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
  constructor(λa91acd60cb1a) {
    super(), this.url = String(λa91acd60cb1a), this.abort = new AbortController, this.sequence = 0, 
    this.queue = [], this.sending = !1, this.start();
  }
  emit(λa91acd60cb1a, λ90d99e492688 = new Event(λa91acd60cb1a)) {
    this.dispatchEvent(λ90d99e492688), this["\x6f\x6e" + λa91acd60cb1a]?.call(this, λ90d99e492688);
  }
  async request(λa91acd60cb1a, λ90d99e492688 = {}, λ06a9181b8d6d = AbortSignal.timeout(3e4)) {
    const λ08edd215f941 = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x74\x75\x74\x73\x69\x2d\x72\x65\x6c\x61\x79\x2f" + λa91acd60cb1a, {
      ...λ90d99e492688,
      cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65",
      credentials: "\x73\x61\x6d\x65\x2d\x6f\x72\x69\x67\x69\x6e",
      signal: AbortSignal.any([ this.abort.signal, λ06a9181b8d6d ]),
      headers: {
        ...λ90d99e492688.headers,
        ...this.token ? {
          Authorization: "\x42\x65\x61\x72\x65\x72\x20" + this.token
        } : {}
      }
    });
    if (!λ08edd215f941.ok) throw new Error("\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65");
    return λ08edd215f941;
  }
  async start() {
    try {
      const λa91acd60cb1a = await (await this.request("\x73\x65\x73\x73\x69\x6f\x6e\x73", {
        method: "\x50\x4f\x53\x54"
      })).json();
      if (this.token = λa91acd60cb1a.token, this.batchSend = 1 === λa91acd60cb1a.sendBatch, 
      0 !== this.readyState) return this.cleanup();
      for (this.readyState = 1, this.emit("\x6f\x70\x65\x6e"); 1 === this.readyState; ) {
        const λa91acd60cb1a = new AbortController;
        let λ90d99e492688;
        const _0x0205d6_2 = () => {
          clearTimeout(λ90d99e492688), λ90d99e492688 = setTimeout(() => λa91acd60cb1a.abort(), 3e4);
        };
        _0x0205d6_2();
        try {
          const λ90d99e492688 = await this.request("\x72\x65\x63\x65\x69\x76\x65", {}, AbortSignal.any([ λa91acd60cb1a.signal, AbortSignal.timeout(12e4) ]));
          if (204 === λ90d99e492688.status) continue;
          _0x0205d6_2(), await readRelayFrames(λ90d99e492688.body, λa91acd60cb1a => {
            1 === this.readyState && this.emit("\x6d\x65\x73\x73\x61\x67\x65", new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
              data: "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72" === this.binaryType ? λa91acd60cb1a : new Blob([ λa91acd60cb1a ])
            }));
          }, _0x0205d6_2);
        } finally {
          clearTimeout(λ90d99e492688);
        }
      }
    } catch {
      this.readyState < 2 && (this.emit("\x65\x72\x72\x6f\x72"), this.close(1006));
    }
  }
  send(λa91acd60cb1a) {
    if (1 !== this.readyState) throw new DOMException("\x53\x6f\x63\x6b\x65\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x6f\x70\x65\x6e", "\x49\x6e\x76\x61\x6c\x69\x64\x53\x74\x61\x74\x65\x45\x72\x72\x6f\x72");
    const λ90d99e492688 = new Blob([ λa91acd60cb1a ]);
    if (λ90d99e492688.size > 262144 || this.bufferedAmount + λ90d99e492688.size > 2097152 || this.queue.length >= 512) return this.emit("\x65\x72\x72\x6f\x72"), 
    void this.close(1006);
    this.bufferedAmount += λ90d99e492688.size, this.queue.push(λ90d99e492688), this.flush();
  }
  flush() {
    !this.sending && 1 === this.readyState && this.queue.length && (this.sending = !0, 
    Promise.resolve().then(async () => {
      for (;1 === this.readyState && this.queue.length; ) {
        const λa91acd60cb1a = [], λ90d99e492688 = [];
        let λ06a9181b8d6d = 0, λ08edd215f941 = 0;
        do {
          const λ0b069b240222 = this.queue[0];
          if (λa91acd60cb1a.length && λ08edd215f941 + 4 + λ0b069b240222.size > 1048576) break;
          if (this.queue.shift(), λa91acd60cb1a.push(λ0b069b240222), λ06a9181b8d6d += λ0b069b240222.size, 
          λ08edd215f941 += λ0b069b240222.size + 4, this.batchSend) {
            const λa91acd60cb1a = new Uint8Array(4);
            new DataView(λa91acd60cb1a.buffer).setUint32(0, λ0b069b240222.size, !0), λ90d99e492688.push(λa91acd60cb1a, λ0b069b240222);
          }
        } while (this.batchSend && this.queue.length && λa91acd60cb1a.length < 64);
        const λ0b069b240222 = this.sequence;
        if (this.sequence += λa91acd60cb1a.length, await this.request(this.batchSend ? "\x73\x65\x6e\x64\x2d\x62\x61\x74\x63\x68" : "\x73\x65\x6e\x64", {
          method: "\x50\x4f\x53\x54",
          headers: {
            "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6f\x63\x74\x65\x74\x2d\x73\x74\x72\x65\x61\x6d",
            "\x58\x2d\x54\x75\x74\x73\x69\x2d\x53\x65\x71\x75\x65\x6e\x63\x65": String(λ0b069b240222)
          },
          body: this.batchSend ? new Blob(λ90d99e492688) : λa91acd60cb1a[0]
        }), 1 !== this.readyState) return;
        this.bufferedAmount -= λ06a9181b8d6d;
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
  close(λa91acd60cb1a = 1e3, λ90d99e492688 = "") {
    3 !== this.readyState && (this.readyState = 3, this.abort.abort(), this.cleanup(), 
    this.bufferedAmount = 0, this.queue.length = 0, this.emit("\x63\x6c\x6f\x73\x65", new CloseEvent("\x63\x6c\x6f\x73\x65", {
      code: λa91acd60cb1a,
      reason: λ90d99e492688,
      wasClean: 1e3 === λa91acd60cb1a
    })));
  }
}

const λa91acd60cb1a = new Map;

export function createHttpRelayEndpoint() {
  const λ90d99e492688 = httpRelayUrl() + crypto.randomUUID() + "\x2f", λ06a9181b8d6d = new Set;
  return λa91acd60cb1a.set(λ90d99e492688, λ06a9181b8d6d), {
    url: λ90d99e492688,
    close() {
      λa91acd60cb1a.delete(λ90d99e492688);
      for (const λa91acd60cb1a of λ06a9181b8d6d) λa91acd60cb1a.close();
      λ06a9181b8d6d.clear();
    }
  };
}

let λ90d99e492688 = !1;

export function installHttpRelaySocket() {
  if (λ90d99e492688) return;
  λ90d99e492688 = !0;
  const λ06a9181b8d6d = globalThis.WebSocket;
  function _0x0205d6_3(λ90d99e492688, λ08edd215f941) {
    const λ0b069b240222 = String(λ90d99e492688), λ0e00dd5caec4 = λa91acd60cb1a.get(λ0b069b240222);
    if (λ0b069b240222 === httpRelayUrl() || λ0e00dd5caec4) {
      const λa91acd60cb1a = new HttpRelaySocket(λ90d99e492688);
      return λ0e00dd5caec4 && (λ0e00dd5caec4.add(λa91acd60cb1a), λa91acd60cb1a.addEventListener("\x63\x6c\x6f\x73\x65", () => λ0e00dd5caec4.delete(λa91acd60cb1a), {
        once: !0
      })), λa91acd60cb1a;
    }
    return void 0 === λ08edd215f941 ? new λ06a9181b8d6d(λ90d99e492688) : new λ06a9181b8d6d(λ90d99e492688, λ08edd215f941);
  }
  Object.setPrototypeOf(_0x0205d6_3, λ06a9181b8d6d), _0x0205d6_3.prototype = λ06a9181b8d6d.prototype, 
  Object.defineProperty(_0x0205d6_3, Symbol.hasInstance, {
    value: λa91acd60cb1a => λa91acd60cb1a instanceof λ06a9181b8d6d || λa91acd60cb1a instanceof HttpRelaySocket
  }), globalThis.WebSocket = _0x0205d6_3, addEventListener("\x70\x61\x67\x65\x68\x69\x64\x65", () => {
    for (const λ90d99e492688 of λa91acd60cb1a.values()) for (const λa91acd60cb1a of λ90d99e492688) λa91acd60cb1a.close();
    λa91acd60cb1a.clear();
  });
}
