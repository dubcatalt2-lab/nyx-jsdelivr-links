export const httpRelayUrl = (λ94ee7d8b1590 = location) => `${"\x68\x74\x74\x70\x73\x3a" === λ94ee7d8b1590.protocol ? "\x77\x73\x73\x3a" : "\x77\x73\x3a"}\x2f\x2f${λ94ee7d8b1590.host}\x2f\x61\x70\x69\x2f\x74\x75\x74\x73\x69\x2d\x72\x65\x6c\x61\x79\x2f\x73\x6f\x63\x6b\x65\x74\x2f`;

export async function readRelayFrames(λ94ee7d8b1590, λ90f1dcb51954, λde69ff92a122 = () => {}) {
  const λ9ffba21aa545 = λ94ee7d8b1590.getReader(), λaf0eb5dd6249 = new Uint8Array(4);
  let λa5f56bce7a53 = 0, λb6760f84f073 = null, λ49ed003b0e51 = 0, λd18ce28a2fd5 = 0;
  try {
    for (;;) {
      const {done: λ94ee7d8b1590, value: λ6af389553b60} = await λ9ffba21aa545.read();
      if (λ94ee7d8b1590) break;
      if (!λ6af389553b60?.length) continue;
      if (λde69ff92a122(), λd18ce28a2fd5 += λ6af389553b60.length, λd18ce28a2fd5 > 20971520) throw new Error("\x52\x65\x6c\x61\x79\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65");
      let λd911a9bf5713 = 0;
      for (;λd911a9bf5713 < λ6af389553b60.length; ) {
        if (!λb6760f84f073) {
          const λ94ee7d8b1590 = Math.min(4 - λa5f56bce7a53, λ6af389553b60.length - λd911a9bf5713);
          if (λaf0eb5dd6249.set(λ6af389553b60.subarray(λd911a9bf5713, λd911a9bf5713 + λ94ee7d8b1590), λa5f56bce7a53), 
          λa5f56bce7a53 += λ94ee7d8b1590, λd911a9bf5713 += λ94ee7d8b1590, λa5f56bce7a53 < 4) continue;
          const λ90f1dcb51954 = new DataView(λaf0eb5dd6249.buffer).getUint32(0, !0);
          if (λ90f1dcb51954 > 2097152) throw new Error("\x52\x65\x6c\x61\x79\x20\x66\x72\x61\x6d\x65\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65");
          λb6760f84f073 = new Uint8Array(λ90f1dcb51954), λ49ed003b0e51 = 0, λa5f56bce7a53 = 0;
        }
        const λ94ee7d8b1590 = Math.min(λb6760f84f073.length - λ49ed003b0e51, λ6af389553b60.length - λd911a9bf5713);
        λb6760f84f073.set(λ6af389553b60.subarray(λd911a9bf5713, λd911a9bf5713 + λ94ee7d8b1590), λ49ed003b0e51), 
        λ49ed003b0e51 += λ94ee7d8b1590, λd911a9bf5713 += λ94ee7d8b1590, λ49ed003b0e51 === λb6760f84f073.length && (λ90f1dcb51954(λb6760f84f073.buffer), 
        λb6760f84f073 = null);
      }
    }
    if (λa5f56bce7a53 || λb6760f84f073) throw new Error("\x49\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x72\x65\x6c\x61\x79\x20\x66\x72\x61\x6d\x65");
  } finally {
    await λ9ffba21aa545.cancel().catch(() => {}), λ9ffba21aa545.releaseLock();
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
  constructor(λ94ee7d8b1590) {
    super(), this.url = String(λ94ee7d8b1590), this.abort = new AbortController, this.sequence = 0, 
    this.queue = [], this.sending = !1, this.start();
  }
  emit(λ94ee7d8b1590, λ90f1dcb51954 = new Event(λ94ee7d8b1590)) {
    this.dispatchEvent(λ90f1dcb51954), this["\x6f\x6e" + λ94ee7d8b1590]?.call(this, λ90f1dcb51954);
  }
  async request(λ94ee7d8b1590, λ90f1dcb51954 = {}, λde69ff92a122 = AbortSignal.timeout(3e4)) {
    const λ9ffba21aa545 = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x74\x75\x74\x73\x69\x2d\x72\x65\x6c\x61\x79\x2f" + λ94ee7d8b1590, {
      ...λ90f1dcb51954,
      cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65",
      credentials: "\x73\x61\x6d\x65\x2d\x6f\x72\x69\x67\x69\x6e",
      signal: AbortSignal.any([ this.abort.signal, λde69ff92a122 ]),
      headers: {
        ...λ90f1dcb51954.headers,
        ...this.token ? {
          Authorization: "\x42\x65\x61\x72\x65\x72\x20" + this.token
        } : {}
      }
    });
    if (!λ9ffba21aa545.ok) throw new Error("\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65");
    return λ9ffba21aa545;
  }
  async start() {
    try {
      const λ94ee7d8b1590 = await (await this.request("\x73\x65\x73\x73\x69\x6f\x6e\x73", {
        method: "\x50\x4f\x53\x54"
      })).json();
      if (this.token = λ94ee7d8b1590.token, this.batchSend = 1 === λ94ee7d8b1590.sendBatch, 
      0 !== this.readyState) return this.cleanup();
      for (this.readyState = 1, this.emit("\x6f\x70\x65\x6e"); 1 === this.readyState; ) {
        const λ94ee7d8b1590 = new AbortController;
        let λ90f1dcb51954;
        const _0x0205d6_2 = () => {
          clearTimeout(λ90f1dcb51954), λ90f1dcb51954 = setTimeout(() => λ94ee7d8b1590.abort(), 3e4);
        };
        _0x0205d6_2();
        try {
          const λ90f1dcb51954 = await this.request("\x72\x65\x63\x65\x69\x76\x65", {}, AbortSignal.any([ λ94ee7d8b1590.signal, AbortSignal.timeout(12e4) ]));
          if (204 === λ90f1dcb51954.status) continue;
          _0x0205d6_2(), await readRelayFrames(λ90f1dcb51954.body, λ94ee7d8b1590 => {
            1 === this.readyState && this.emit("\x6d\x65\x73\x73\x61\x67\x65", new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
              data: "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72" === this.binaryType ? λ94ee7d8b1590 : new Blob([ λ94ee7d8b1590 ])
            }));
          }, _0x0205d6_2);
        } finally {
          clearTimeout(λ90f1dcb51954);
        }
      }
    } catch {
      this.readyState < 2 && (this.emit("\x65\x72\x72\x6f\x72"), this.close(1006));
    }
  }
  send(λ94ee7d8b1590) {
    if (1 !== this.readyState) throw new DOMException("\x53\x6f\x63\x6b\x65\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x6f\x70\x65\x6e", "\x49\x6e\x76\x61\x6c\x69\x64\x53\x74\x61\x74\x65\x45\x72\x72\x6f\x72");
    const λ90f1dcb51954 = new Blob([ λ94ee7d8b1590 ]);
    if (λ90f1dcb51954.size > 262144 || this.bufferedAmount + λ90f1dcb51954.size > 2097152 || this.queue.length >= 512) return this.emit("\x65\x72\x72\x6f\x72"), 
    void this.close(1006);
    this.bufferedAmount += λ90f1dcb51954.size, this.queue.push(λ90f1dcb51954), this.flush();
  }
  flush() {
    !this.sending && 1 === this.readyState && this.queue.length && (this.sending = !0, 
    Promise.resolve().then(async () => {
      for (;1 === this.readyState && this.queue.length; ) {
        const λ94ee7d8b1590 = [], λ90f1dcb51954 = [];
        let λde69ff92a122 = 0, λ9ffba21aa545 = 0;
        do {
          const λaf0eb5dd6249 = this.queue[0];
          if (λ94ee7d8b1590.length && λ9ffba21aa545 + 4 + λaf0eb5dd6249.size > 1048576) break;
          if (this.queue.shift(), λ94ee7d8b1590.push(λaf0eb5dd6249), λde69ff92a122 += λaf0eb5dd6249.size, 
          λ9ffba21aa545 += λaf0eb5dd6249.size + 4, this.batchSend) {
            const λ94ee7d8b1590 = new Uint8Array(4);
            new DataView(λ94ee7d8b1590.buffer).setUint32(0, λaf0eb5dd6249.size, !0), λ90f1dcb51954.push(λ94ee7d8b1590, λaf0eb5dd6249);
          }
        } while (this.batchSend && this.queue.length && λ94ee7d8b1590.length < 64);
        const λaf0eb5dd6249 = this.sequence;
        if (this.sequence += λ94ee7d8b1590.length, await this.request(this.batchSend ? "\x73\x65\x6e\x64\x2d\x62\x61\x74\x63\x68" : "\x73\x65\x6e\x64", {
          method: "\x50\x4f\x53\x54",
          headers: {
            "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6f\x63\x74\x65\x74\x2d\x73\x74\x72\x65\x61\x6d",
            "\x58\x2d\x54\x75\x74\x73\x69\x2d\x53\x65\x71\x75\x65\x6e\x63\x65": String(λaf0eb5dd6249)
          },
          body: this.batchSend ? new Blob(λ90f1dcb51954) : λ94ee7d8b1590[0]
        }), 1 !== this.readyState) return;
        this.bufferedAmount -= λde69ff92a122;
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
  close(λ94ee7d8b1590 = 1e3, λ90f1dcb51954 = "") {
    3 !== this.readyState && (this.readyState = 3, this.abort.abort(), this.cleanup(), 
    this.bufferedAmount = 0, this.queue.length = 0, this.emit("\x63\x6c\x6f\x73\x65", new CloseEvent("\x63\x6c\x6f\x73\x65", {
      code: λ94ee7d8b1590,
      reason: λ90f1dcb51954,
      wasClean: 1e3 === λ94ee7d8b1590
    })));
  }
}

const λ94ee7d8b1590 = new Map;

export function createHttpRelayEndpoint() {
  const λ90f1dcb51954 = httpRelayUrl() + crypto.randomUUID() + "\x2f", λde69ff92a122 = new Set;
  return λ94ee7d8b1590.set(λ90f1dcb51954, λde69ff92a122), {
    url: λ90f1dcb51954,
    close() {
      λ94ee7d8b1590.delete(λ90f1dcb51954);
      for (const λ94ee7d8b1590 of λde69ff92a122) λ94ee7d8b1590.close();
      λde69ff92a122.clear();
    }
  };
}

let λ90f1dcb51954 = !1;

export function installHttpRelaySocket() {
  if (λ90f1dcb51954) return;
  λ90f1dcb51954 = !0;
  const λde69ff92a122 = globalThis.WebSocket;
  function _0x0205d6_3(λ90f1dcb51954, λ9ffba21aa545) {
    const λaf0eb5dd6249 = String(λ90f1dcb51954), λa5f56bce7a53 = λ94ee7d8b1590.get(λaf0eb5dd6249);
    if (λaf0eb5dd6249 === httpRelayUrl() || λa5f56bce7a53) {
      const λ94ee7d8b1590 = new HttpRelaySocket(λ90f1dcb51954);
      return λa5f56bce7a53 && (λa5f56bce7a53.add(λ94ee7d8b1590), λ94ee7d8b1590.addEventListener("\x63\x6c\x6f\x73\x65", () => λa5f56bce7a53.delete(λ94ee7d8b1590), {
        once: !0
      })), λ94ee7d8b1590;
    }
    return void 0 === λ9ffba21aa545 ? new λde69ff92a122(λ90f1dcb51954) : new λde69ff92a122(λ90f1dcb51954, λ9ffba21aa545);
  }
  Object.setPrototypeOf(_0x0205d6_3, λde69ff92a122), _0x0205d6_3.prototype = λde69ff92a122.prototype, 
  Object.defineProperty(_0x0205d6_3, Symbol.hasInstance, {
    value: λ94ee7d8b1590 => λ94ee7d8b1590 instanceof λde69ff92a122 || λ94ee7d8b1590 instanceof HttpRelaySocket
  }), globalThis.WebSocket = _0x0205d6_3, addEventListener("\x70\x61\x67\x65\x68\x69\x64\x65", () => {
    for (const λ90f1dcb51954 of λ94ee7d8b1590.values()) for (const λ94ee7d8b1590 of λ90f1dcb51954) λ94ee7d8b1590.close();
    λ94ee7d8b1590.clear();
  });
}
