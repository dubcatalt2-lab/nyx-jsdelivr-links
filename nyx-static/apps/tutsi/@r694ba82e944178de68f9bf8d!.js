export const httpRelayUrl = (λ3639a3bd7402 = location) => `${"\x68\x74\x74\x70\x73\x3a" === λ3639a3bd7402.protocol ? "\x77\x73\x73\x3a" : "\x77\x73\x3a"}\x2f\x2f${λ3639a3bd7402.host}\x2f\x61\x70\x69\x2f\x74\x75\x74\x73\x69\x2d\x72\x65\x6c\x61\x79\x2f\x73\x6f\x63\x6b\x65\x74\x2f`;

export async function readRelayFrames(λ3639a3bd7402, λ96040401403b, λ916257a4f893 = () => {}) {
  const λacc33d9b3b8f = λ3639a3bd7402.getReader(), λ3f56bc3aef21 = new Uint8Array(4);
  let λb3e116a2132a = 0, λ315686d5fec8 = null, λf14f8452bed4 = 0, λc939f7e43067 = 0;
  try {
    for (;;) {
      const {done: λ3639a3bd7402, value: λ3ff49558fbc4} = await λacc33d9b3b8f.read();
      if (λ3639a3bd7402) break;
      if (!λ3ff49558fbc4?.length) continue;
      if (λ916257a4f893(), λc939f7e43067 += λ3ff49558fbc4.length, λc939f7e43067 > 20971520) throw new Error("\x52\x65\x6c\x61\x79\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65");
      let λ4d19321451e0 = 0;
      for (;λ4d19321451e0 < λ3ff49558fbc4.length; ) {
        if (!λ315686d5fec8) {
          const λ3639a3bd7402 = Math.min(4 - λb3e116a2132a, λ3ff49558fbc4.length - λ4d19321451e0);
          if (λ3f56bc3aef21.set(λ3ff49558fbc4.subarray(λ4d19321451e0, λ4d19321451e0 + λ3639a3bd7402), λb3e116a2132a), 
          λb3e116a2132a += λ3639a3bd7402, λ4d19321451e0 += λ3639a3bd7402, λb3e116a2132a < 4) continue;
          const λ96040401403b = new DataView(λ3f56bc3aef21.buffer).getUint32(0, !0);
          if (λ96040401403b > 2097152) throw new Error("\x52\x65\x6c\x61\x79\x20\x66\x72\x61\x6d\x65\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65");
          λ315686d5fec8 = new Uint8Array(λ96040401403b), λf14f8452bed4 = 0, λb3e116a2132a = 0;
        }
        const λ3639a3bd7402 = Math.min(λ315686d5fec8.length - λf14f8452bed4, λ3ff49558fbc4.length - λ4d19321451e0);
        λ315686d5fec8.set(λ3ff49558fbc4.subarray(λ4d19321451e0, λ4d19321451e0 + λ3639a3bd7402), λf14f8452bed4), 
        λf14f8452bed4 += λ3639a3bd7402, λ4d19321451e0 += λ3639a3bd7402, λf14f8452bed4 === λ315686d5fec8.length && (λ96040401403b(λ315686d5fec8.buffer), 
        λ315686d5fec8 = null);
      }
    }
    if (λb3e116a2132a || λ315686d5fec8) throw new Error("\x49\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x72\x65\x6c\x61\x79\x20\x66\x72\x61\x6d\x65");
  } finally {
    await λacc33d9b3b8f.cancel().catch(() => {}), λacc33d9b3b8f.releaseLock();
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
  constructor(λ3639a3bd7402) {
    super(), this.url = String(λ3639a3bd7402), this.abort = new AbortController, this.sequence = 0, 
    this.queue = [], this.sending = !1, this.start();
  }
  emit(λ3639a3bd7402, λ96040401403b = new Event(λ3639a3bd7402)) {
    this.dispatchEvent(λ96040401403b), this["\x6f\x6e" + λ3639a3bd7402]?.call(this, λ96040401403b);
  }
  async request(λ3639a3bd7402, λ96040401403b = {}, λ916257a4f893 = AbortSignal.timeout(3e4)) {
    const λacc33d9b3b8f = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x74\x75\x74\x73\x69\x2d\x72\x65\x6c\x61\x79\x2f" + λ3639a3bd7402, {
      ...λ96040401403b,
      cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65",
      credentials: "\x73\x61\x6d\x65\x2d\x6f\x72\x69\x67\x69\x6e",
      signal: AbortSignal.any([ this.abort.signal, λ916257a4f893 ]),
      headers: {
        ...λ96040401403b.headers,
        ...this.token ? {
          Authorization: "\x42\x65\x61\x72\x65\x72\x20" + this.token
        } : {}
      }
    });
    if (!λacc33d9b3b8f.ok) throw new Error("\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65");
    return λacc33d9b3b8f;
  }
  async start() {
    try {
      const λ3639a3bd7402 = await (await this.request("\x73\x65\x73\x73\x69\x6f\x6e\x73", {
        method: "\x50\x4f\x53\x54"
      })).json();
      if (this.token = λ3639a3bd7402.token, this.batchSend = 1 === λ3639a3bd7402.sendBatch, 
      0 !== this.readyState) return this.cleanup();
      for (this.readyState = 1, this.emit("\x6f\x70\x65\x6e"); 1 === this.readyState; ) {
        const λ3639a3bd7402 = new AbortController;
        let λ96040401403b;
        const _0x0205d6_2 = () => {
          clearTimeout(λ96040401403b), λ96040401403b = setTimeout(() => λ3639a3bd7402.abort(), 3e4);
        };
        _0x0205d6_2();
        try {
          const λ96040401403b = await this.request("\x72\x65\x63\x65\x69\x76\x65", {}, AbortSignal.any([ λ3639a3bd7402.signal, AbortSignal.timeout(12e4) ]));
          if (204 === λ96040401403b.status) continue;
          _0x0205d6_2(), await readRelayFrames(λ96040401403b.body, λ3639a3bd7402 => {
            1 === this.readyState && this.emit("\x6d\x65\x73\x73\x61\x67\x65", new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
              data: "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72" === this.binaryType ? λ3639a3bd7402 : new Blob([ λ3639a3bd7402 ])
            }));
          }, _0x0205d6_2);
        } finally {
          clearTimeout(λ96040401403b);
        }
      }
    } catch {
      this.readyState < 2 && (this.emit("\x65\x72\x72\x6f\x72"), this.close(1006));
    }
  }
  send(λ3639a3bd7402) {
    if (1 !== this.readyState) throw new DOMException("\x53\x6f\x63\x6b\x65\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x6f\x70\x65\x6e", "\x49\x6e\x76\x61\x6c\x69\x64\x53\x74\x61\x74\x65\x45\x72\x72\x6f\x72");
    const λ96040401403b = new Blob([ λ3639a3bd7402 ]);
    if (λ96040401403b.size > 262144 || this.bufferedAmount + λ96040401403b.size > 2097152 || this.queue.length >= 512) return this.emit("\x65\x72\x72\x6f\x72"), 
    void this.close(1006);
    this.bufferedAmount += λ96040401403b.size, this.queue.push(λ96040401403b), this.flush();
  }
  flush() {
    !this.sending && 1 === this.readyState && this.queue.length && (this.sending = !0, 
    Promise.resolve().then(async () => {
      for (;1 === this.readyState && this.queue.length; ) {
        const λ3639a3bd7402 = [], λ96040401403b = [];
        let λ916257a4f893 = 0, λacc33d9b3b8f = 0;
        do {
          const λ3f56bc3aef21 = this.queue[0];
          if (λ3639a3bd7402.length && λacc33d9b3b8f + 4 + λ3f56bc3aef21.size > 1048576) break;
          if (this.queue.shift(), λ3639a3bd7402.push(λ3f56bc3aef21), λ916257a4f893 += λ3f56bc3aef21.size, 
          λacc33d9b3b8f += λ3f56bc3aef21.size + 4, this.batchSend) {
            const λ3639a3bd7402 = new Uint8Array(4);
            new DataView(λ3639a3bd7402.buffer).setUint32(0, λ3f56bc3aef21.size, !0), λ96040401403b.push(λ3639a3bd7402, λ3f56bc3aef21);
          }
        } while (this.batchSend && this.queue.length && λ3639a3bd7402.length < 64);
        const λ3f56bc3aef21 = this.sequence;
        if (this.sequence += λ3639a3bd7402.length, await this.request(this.batchSend ? "\x73\x65\x6e\x64\x2d\x62\x61\x74\x63\x68" : "\x73\x65\x6e\x64", {
          method: "\x50\x4f\x53\x54",
          headers: {
            "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6f\x63\x74\x65\x74\x2d\x73\x74\x72\x65\x61\x6d",
            "\x58\x2d\x54\x75\x74\x73\x69\x2d\x53\x65\x71\x75\x65\x6e\x63\x65": String(λ3f56bc3aef21)
          },
          body: this.batchSend ? new Blob(λ96040401403b) : λ3639a3bd7402[0]
        }), 1 !== this.readyState) return;
        this.bufferedAmount -= λ916257a4f893;
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
  close(λ3639a3bd7402 = 1e3, λ96040401403b = "") {
    3 !== this.readyState && (this.readyState = 3, this.abort.abort(), this.cleanup(), 
    this.bufferedAmount = 0, this.queue.length = 0, this.emit("\x63\x6c\x6f\x73\x65", new CloseEvent("\x63\x6c\x6f\x73\x65", {
      code: λ3639a3bd7402,
      reason: λ96040401403b,
      wasClean: 1e3 === λ3639a3bd7402
    })));
  }
}

const λ3639a3bd7402 = new Map;

export function createHttpRelayEndpoint() {
  const λ96040401403b = httpRelayUrl() + crypto.randomUUID() + "\x2f", λ916257a4f893 = new Set;
  return λ3639a3bd7402.set(λ96040401403b, λ916257a4f893), {
    url: λ96040401403b,
    close() {
      λ3639a3bd7402.delete(λ96040401403b);
      for (const λ3639a3bd7402 of λ916257a4f893) λ3639a3bd7402.close();
      λ916257a4f893.clear();
    }
  };
}

let λ96040401403b = !1;

export function installHttpRelaySocket() {
  if (λ96040401403b) return;
  λ96040401403b = !0;
  const λ916257a4f893 = globalThis.WebSocket;
  function _0x0205d6_3(λ96040401403b, λacc33d9b3b8f) {
    const λ3f56bc3aef21 = String(λ96040401403b), λb3e116a2132a = λ3639a3bd7402.get(λ3f56bc3aef21);
    if (λ3f56bc3aef21 === httpRelayUrl() || λb3e116a2132a) {
      const λ3639a3bd7402 = new HttpRelaySocket(λ96040401403b);
      return λb3e116a2132a && (λb3e116a2132a.add(λ3639a3bd7402), λ3639a3bd7402.addEventListener("\x63\x6c\x6f\x73\x65", () => λb3e116a2132a.delete(λ3639a3bd7402), {
        once: !0
      })), λ3639a3bd7402;
    }
    return void 0 === λacc33d9b3b8f ? new λ916257a4f893(λ96040401403b) : new λ916257a4f893(λ96040401403b, λacc33d9b3b8f);
  }
  Object.setPrototypeOf(_0x0205d6_3, λ916257a4f893), _0x0205d6_3.prototype = λ916257a4f893.prototype, 
  Object.defineProperty(_0x0205d6_3, Symbol.hasInstance, {
    value: λ3639a3bd7402 => λ3639a3bd7402 instanceof λ916257a4f893 || λ3639a3bd7402 instanceof HttpRelaySocket
  }), globalThis.WebSocket = _0x0205d6_3, addEventListener("\x70\x61\x67\x65\x68\x69\x64\x65", () => {
    for (const λ96040401403b of λ3639a3bd7402.values()) for (const λ3639a3bd7402 of λ96040401403b) λ3639a3bd7402.close();
    λ3639a3bd7402.clear();
  });
}
