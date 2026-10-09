export const httpRelayUrl = (λf3395d45dc0c = location) => `${"\x68\x74\x74\x70\x73\x3a" === λf3395d45dc0c.protocol ? "\x77\x73\x73\x3a" : "\x77\x73\x3a"}\x2f\x2f${λf3395d45dc0c.host}\x2f\x61\x70\x69\x2f\x74\x75\x74\x73\x69\x2d\x72\x65\x6c\x61\x79\x2f\x73\x6f\x63\x6b\x65\x74\x2f`;

export async function readRelayFrames(λf3395d45dc0c, λ21832848e8d4, λbffd33d93ff4 = () => {}) {
  const λ903df16edf91 = λf3395d45dc0c.getReader(), λ9821db661011 = new Uint8Array(4);
  let λa41cf6dc8039 = 0, λ4bcdf7aa4acb = null, λ6e5825e0a349 = 0, λ5e6e3d347503 = 0;
  try {
    for (;;) {
      const {done: λf3395d45dc0c, value: λdf3bdaa9b8b2} = await λ903df16edf91.read();
      if (λf3395d45dc0c) break;
      if (!λdf3bdaa9b8b2?.length) continue;
      if (λbffd33d93ff4(), λ5e6e3d347503 += λdf3bdaa9b8b2.length, λ5e6e3d347503 > 20971520) throw new Error("\x52\x65\x6c\x61\x79\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65");
      let λf3b938f394d9 = 0;
      for (;λf3b938f394d9 < λdf3bdaa9b8b2.length; ) {
        if (!λ4bcdf7aa4acb) {
          const λf3395d45dc0c = Math.min(4 - λa41cf6dc8039, λdf3bdaa9b8b2.length - λf3b938f394d9);
          if (λ9821db661011.set(λdf3bdaa9b8b2.subarray(λf3b938f394d9, λf3b938f394d9 + λf3395d45dc0c), λa41cf6dc8039), 
          λa41cf6dc8039 += λf3395d45dc0c, λf3b938f394d9 += λf3395d45dc0c, λa41cf6dc8039 < 4) continue;
          const λ21832848e8d4 = new DataView(λ9821db661011.buffer).getUint32(0, !0);
          if (λ21832848e8d4 > 2097152) throw new Error("\x52\x65\x6c\x61\x79\x20\x66\x72\x61\x6d\x65\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65");
          λ4bcdf7aa4acb = new Uint8Array(λ21832848e8d4), λ6e5825e0a349 = 0, λa41cf6dc8039 = 0;
        }
        const λf3395d45dc0c = Math.min(λ4bcdf7aa4acb.length - λ6e5825e0a349, λdf3bdaa9b8b2.length - λf3b938f394d9);
        λ4bcdf7aa4acb.set(λdf3bdaa9b8b2.subarray(λf3b938f394d9, λf3b938f394d9 + λf3395d45dc0c), λ6e5825e0a349), 
        λ6e5825e0a349 += λf3395d45dc0c, λf3b938f394d9 += λf3395d45dc0c, λ6e5825e0a349 === λ4bcdf7aa4acb.length && (λ21832848e8d4(λ4bcdf7aa4acb.buffer), 
        λ4bcdf7aa4acb = null);
      }
    }
    if (λa41cf6dc8039 || λ4bcdf7aa4acb) throw new Error("\x49\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x72\x65\x6c\x61\x79\x20\x66\x72\x61\x6d\x65");
  } finally {
    await λ903df16edf91.cancel().catch(() => {}), λ903df16edf91.releaseLock();
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
  constructor(λf3395d45dc0c) {
    super(), this.url = String(λf3395d45dc0c), this.abort = new AbortController, this.sequence = 0, 
    this.queue = [], this.sending = !1, this.start();
  }
  emit(λf3395d45dc0c, λ21832848e8d4 = new Event(λf3395d45dc0c)) {
    this.dispatchEvent(λ21832848e8d4), this["\x6f\x6e" + λf3395d45dc0c]?.call(this, λ21832848e8d4);
  }
  async request(λf3395d45dc0c, λ21832848e8d4 = {}, λbffd33d93ff4 = AbortSignal.timeout(3e4)) {
    const λ903df16edf91 = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x74\x75\x74\x73\x69\x2d\x72\x65\x6c\x61\x79\x2f" + λf3395d45dc0c, {
      ...λ21832848e8d4,
      cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65",
      credentials: "\x73\x61\x6d\x65\x2d\x6f\x72\x69\x67\x69\x6e",
      signal: AbortSignal.any([ this.abort.signal, λbffd33d93ff4 ]),
      headers: {
        ...λ21832848e8d4.headers,
        ...this.token ? {
          Authorization: "\x42\x65\x61\x72\x65\x72\x20" + this.token
        } : {}
      }
    });
    if (!λ903df16edf91.ok) throw new Error("\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65");
    return λ903df16edf91;
  }
  async start() {
    try {
      const λf3395d45dc0c = await (await this.request("\x73\x65\x73\x73\x69\x6f\x6e\x73", {
        method: "\x50\x4f\x53\x54"
      })).json();
      if (this.token = λf3395d45dc0c.token, this.batchSend = 1 === λf3395d45dc0c.sendBatch, 
      0 !== this.readyState) return this.cleanup();
      for (this.readyState = 1, this.emit("\x6f\x70\x65\x6e"); 1 === this.readyState; ) {
        const λf3395d45dc0c = new AbortController;
        let λ21832848e8d4;
        const _0x0205d6_2 = () => {
          clearTimeout(λ21832848e8d4), λ21832848e8d4 = setTimeout(() => λf3395d45dc0c.abort(), 3e4);
        };
        _0x0205d6_2();
        try {
          const λ21832848e8d4 = await this.request("\x72\x65\x63\x65\x69\x76\x65", {}, AbortSignal.any([ λf3395d45dc0c.signal, AbortSignal.timeout(12e4) ]));
          if (204 === λ21832848e8d4.status) continue;
          _0x0205d6_2(), await readRelayFrames(λ21832848e8d4.body, λf3395d45dc0c => {
            1 === this.readyState && this.emit("\x6d\x65\x73\x73\x61\x67\x65", new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
              data: "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72" === this.binaryType ? λf3395d45dc0c : new Blob([ λf3395d45dc0c ])
            }));
          }, _0x0205d6_2);
        } finally {
          clearTimeout(λ21832848e8d4);
        }
      }
    } catch {
      this.readyState < 2 && (this.emit("\x65\x72\x72\x6f\x72"), this.close(1006));
    }
  }
  send(λf3395d45dc0c) {
    if (1 !== this.readyState) throw new DOMException("\x53\x6f\x63\x6b\x65\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x6f\x70\x65\x6e", "\x49\x6e\x76\x61\x6c\x69\x64\x53\x74\x61\x74\x65\x45\x72\x72\x6f\x72");
    const λ21832848e8d4 = new Blob([ λf3395d45dc0c ]);
    if (λ21832848e8d4.size > 262144 || this.bufferedAmount + λ21832848e8d4.size > 2097152 || this.queue.length >= 512) return this.emit("\x65\x72\x72\x6f\x72"), 
    void this.close(1006);
    this.bufferedAmount += λ21832848e8d4.size, this.queue.push(λ21832848e8d4), this.flush();
  }
  flush() {
    !this.sending && 1 === this.readyState && this.queue.length && (this.sending = !0, 
    Promise.resolve().then(async () => {
      for (;1 === this.readyState && this.queue.length; ) {
        const λf3395d45dc0c = [], λ21832848e8d4 = [];
        let λbffd33d93ff4 = 0, λ903df16edf91 = 0;
        do {
          const λ9821db661011 = this.queue[0];
          if (λf3395d45dc0c.length && λ903df16edf91 + 4 + λ9821db661011.size > 1048576) break;
          if (this.queue.shift(), λf3395d45dc0c.push(λ9821db661011), λbffd33d93ff4 += λ9821db661011.size, 
          λ903df16edf91 += λ9821db661011.size + 4, this.batchSend) {
            const λf3395d45dc0c = new Uint8Array(4);
            new DataView(λf3395d45dc0c.buffer).setUint32(0, λ9821db661011.size, !0), λ21832848e8d4.push(λf3395d45dc0c, λ9821db661011);
          }
        } while (this.batchSend && this.queue.length && λf3395d45dc0c.length < 64);
        const λ9821db661011 = this.sequence;
        if (this.sequence += λf3395d45dc0c.length, await this.request(this.batchSend ? "\x73\x65\x6e\x64\x2d\x62\x61\x74\x63\x68" : "\x73\x65\x6e\x64", {
          method: "\x50\x4f\x53\x54",
          headers: {
            "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6f\x63\x74\x65\x74\x2d\x73\x74\x72\x65\x61\x6d",
            "\x58\x2d\x54\x75\x74\x73\x69\x2d\x53\x65\x71\x75\x65\x6e\x63\x65": String(λ9821db661011)
          },
          body: this.batchSend ? new Blob(λ21832848e8d4) : λf3395d45dc0c[0]
        }), 1 !== this.readyState) return;
        this.bufferedAmount -= λbffd33d93ff4;
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
  close(λf3395d45dc0c = 1e3, λ21832848e8d4 = "") {
    3 !== this.readyState && (this.readyState = 3, this.abort.abort(), this.cleanup(), 
    this.bufferedAmount = 0, this.queue.length = 0, this.emit("\x63\x6c\x6f\x73\x65", new CloseEvent("\x63\x6c\x6f\x73\x65", {
      code: λf3395d45dc0c,
      reason: λ21832848e8d4,
      wasClean: 1e3 === λf3395d45dc0c
    })));
  }
}

const λf3395d45dc0c = new Map;

export function createHttpRelayEndpoint() {
  const λ21832848e8d4 = httpRelayUrl() + crypto.randomUUID() + "\x2f", λbffd33d93ff4 = new Set;
  return λf3395d45dc0c.set(λ21832848e8d4, λbffd33d93ff4), {
    url: λ21832848e8d4,
    close() {
      λf3395d45dc0c.delete(λ21832848e8d4);
      for (const λf3395d45dc0c of λbffd33d93ff4) λf3395d45dc0c.close();
      λbffd33d93ff4.clear();
    }
  };
}

let λ21832848e8d4 = !1;

export function installHttpRelaySocket() {
  if (λ21832848e8d4) return;
  λ21832848e8d4 = !0;
  const λbffd33d93ff4 = globalThis.WebSocket;
  function _0x0205d6_3(λ21832848e8d4, λ903df16edf91) {
    const λ9821db661011 = String(λ21832848e8d4), λa41cf6dc8039 = λf3395d45dc0c.get(λ9821db661011);
    if (λ9821db661011 === httpRelayUrl() || λa41cf6dc8039) {
      const λf3395d45dc0c = new HttpRelaySocket(λ21832848e8d4);
      return λa41cf6dc8039 && (λa41cf6dc8039.add(λf3395d45dc0c), λf3395d45dc0c.addEventListener("\x63\x6c\x6f\x73\x65", () => λa41cf6dc8039.delete(λf3395d45dc0c), {
        once: !0
      })), λf3395d45dc0c;
    }
    return void 0 === λ903df16edf91 ? new λbffd33d93ff4(λ21832848e8d4) : new λbffd33d93ff4(λ21832848e8d4, λ903df16edf91);
  }
  Object.setPrototypeOf(_0x0205d6_3, λbffd33d93ff4), _0x0205d6_3.prototype = λbffd33d93ff4.prototype, 
  Object.defineProperty(_0x0205d6_3, Symbol.hasInstance, {
    value: λf3395d45dc0c => λf3395d45dc0c instanceof λbffd33d93ff4 || λf3395d45dc0c instanceof HttpRelaySocket
  }), globalThis.WebSocket = _0x0205d6_3, addEventListener("\x70\x61\x67\x65\x68\x69\x64\x65", () => {
    for (const λ21832848e8d4 of λf3395d45dc0c.values()) for (const λf3395d45dc0c of λ21832848e8d4) λf3395d45dc0c.close();
    λf3395d45dc0c.clear();
  });
}
