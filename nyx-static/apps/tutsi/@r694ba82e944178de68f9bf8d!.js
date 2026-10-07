export const httpRelayUrl = (λf37ed74810e9 = location) => `${"\x68\x74\x74\x70\x73\x3a" === λf37ed74810e9.protocol ? "\x77\x73\x73\x3a" : "\x77\x73\x3a"}\x2f\x2f${λf37ed74810e9.host}\x2f\x61\x70\x69\x2f\x74\x75\x74\x73\x69\x2d\x72\x65\x6c\x61\x79\x2f\x73\x6f\x63\x6b\x65\x74\x2f`;

export async function readRelayFrames(λf37ed74810e9, λ4d690c69dff7, λa3a0c41c8a3c = () => {}) {
  const λd3a10a028203 = λf37ed74810e9.getReader(), λ4e703eaed02e = new Uint8Array(4);
  let λ2c1043f5273f = 0, λff6866c3ea45 = null, λe2be52fff761 = 0, λ3ec2a4706f97 = 0;
  try {
    for (;;) {
      const {done: λf37ed74810e9, value: λ38845c036373} = await λd3a10a028203.read();
      if (λf37ed74810e9) break;
      if (!λ38845c036373?.length) continue;
      if (λa3a0c41c8a3c(), λ3ec2a4706f97 += λ38845c036373.length, λ3ec2a4706f97 > 20971520) throw new Error("\x52\x65\x6c\x61\x79\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65");
      let λ8b323c7ef90a = 0;
      for (;λ8b323c7ef90a < λ38845c036373.length; ) {
        if (!λff6866c3ea45) {
          const λf37ed74810e9 = Math.min(4 - λ2c1043f5273f, λ38845c036373.length - λ8b323c7ef90a);
          if (λ4e703eaed02e.set(λ38845c036373.subarray(λ8b323c7ef90a, λ8b323c7ef90a + λf37ed74810e9), λ2c1043f5273f), 
          λ2c1043f5273f += λf37ed74810e9, λ8b323c7ef90a += λf37ed74810e9, λ2c1043f5273f < 4) continue;
          const λ4d690c69dff7 = new DataView(λ4e703eaed02e.buffer).getUint32(0, !0);
          if (λ4d690c69dff7 > 2097152) throw new Error("\x52\x65\x6c\x61\x79\x20\x66\x72\x61\x6d\x65\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65");
          λff6866c3ea45 = new Uint8Array(λ4d690c69dff7), λe2be52fff761 = 0, λ2c1043f5273f = 0;
        }
        const λf37ed74810e9 = Math.min(λff6866c3ea45.length - λe2be52fff761, λ38845c036373.length - λ8b323c7ef90a);
        λff6866c3ea45.set(λ38845c036373.subarray(λ8b323c7ef90a, λ8b323c7ef90a + λf37ed74810e9), λe2be52fff761), 
        λe2be52fff761 += λf37ed74810e9, λ8b323c7ef90a += λf37ed74810e9, λe2be52fff761 === λff6866c3ea45.length && (λ4d690c69dff7(λff6866c3ea45.buffer), 
        λff6866c3ea45 = null);
      }
    }
    if (λ2c1043f5273f || λff6866c3ea45) throw new Error("\x49\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x72\x65\x6c\x61\x79\x20\x66\x72\x61\x6d\x65");
  } finally {
    await λd3a10a028203.cancel().catch(() => {}), λd3a10a028203.releaseLock();
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
  constructor(λf37ed74810e9) {
    super(), this.url = String(λf37ed74810e9), this.abort = new AbortController, this.sequence = 0, 
    this.queue = [], this.sending = !1, this.start();
  }
  emit(λf37ed74810e9, λ4d690c69dff7 = new Event(λf37ed74810e9)) {
    this.dispatchEvent(λ4d690c69dff7), this["\x6f\x6e" + λf37ed74810e9]?.call(this, λ4d690c69dff7);
  }
  async request(λf37ed74810e9, λ4d690c69dff7 = {}, λa3a0c41c8a3c = AbortSignal.timeout(3e4)) {
    const λd3a10a028203 = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x74\x75\x74\x73\x69\x2d\x72\x65\x6c\x61\x79\x2f" + λf37ed74810e9, {
      ...λ4d690c69dff7,
      cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65",
      credentials: "\x73\x61\x6d\x65\x2d\x6f\x72\x69\x67\x69\x6e",
      signal: AbortSignal.any([ this.abort.signal, λa3a0c41c8a3c ]),
      headers: {
        ...λ4d690c69dff7.headers,
        ...this.token ? {
          Authorization: "\x42\x65\x61\x72\x65\x72\x20" + this.token
        } : {}
      }
    });
    if (!λd3a10a028203.ok) throw new Error("\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65");
    return λd3a10a028203;
  }
  async start() {
    try {
      const λf37ed74810e9 = await (await this.request("\x73\x65\x73\x73\x69\x6f\x6e\x73", {
        method: "\x50\x4f\x53\x54"
      })).json();
      if (this.token = λf37ed74810e9.token, this.batchSend = 1 === λf37ed74810e9.sendBatch, 
      0 !== this.readyState) return this.cleanup();
      for (this.readyState = 1, this.emit("\x6f\x70\x65\x6e"); 1 === this.readyState; ) {
        const λf37ed74810e9 = new AbortController;
        let λ4d690c69dff7;
        const _0x0205d6_2 = () => {
          clearTimeout(λ4d690c69dff7), λ4d690c69dff7 = setTimeout(() => λf37ed74810e9.abort(), 3e4);
        };
        _0x0205d6_2();
        try {
          const λ4d690c69dff7 = await this.request("\x72\x65\x63\x65\x69\x76\x65", {}, AbortSignal.any([ λf37ed74810e9.signal, AbortSignal.timeout(12e4) ]));
          if (204 === λ4d690c69dff7.status) continue;
          _0x0205d6_2(), await readRelayFrames(λ4d690c69dff7.body, λf37ed74810e9 => {
            1 === this.readyState && this.emit("\x6d\x65\x73\x73\x61\x67\x65", new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
              data: "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72" === this.binaryType ? λf37ed74810e9 : new Blob([ λf37ed74810e9 ])
            }));
          }, _0x0205d6_2);
        } finally {
          clearTimeout(λ4d690c69dff7);
        }
      }
    } catch {
      this.readyState < 2 && (this.emit("\x65\x72\x72\x6f\x72"), this.close(1006));
    }
  }
  send(λf37ed74810e9) {
    if (1 !== this.readyState) throw new DOMException("\x53\x6f\x63\x6b\x65\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x6f\x70\x65\x6e", "\x49\x6e\x76\x61\x6c\x69\x64\x53\x74\x61\x74\x65\x45\x72\x72\x6f\x72");
    const λ4d690c69dff7 = new Blob([ λf37ed74810e9 ]);
    if (λ4d690c69dff7.size > 262144 || this.bufferedAmount + λ4d690c69dff7.size > 2097152 || this.queue.length >= 512) return this.emit("\x65\x72\x72\x6f\x72"), 
    void this.close(1006);
    this.bufferedAmount += λ4d690c69dff7.size, this.queue.push(λ4d690c69dff7), this.flush();
  }
  flush() {
    !this.sending && 1 === this.readyState && this.queue.length && (this.sending = !0, 
    Promise.resolve().then(async () => {
      for (;1 === this.readyState && this.queue.length; ) {
        const λf37ed74810e9 = [], λ4d690c69dff7 = [];
        let λa3a0c41c8a3c = 0, λd3a10a028203 = 0;
        do {
          const λ4e703eaed02e = this.queue[0];
          if (λf37ed74810e9.length && λd3a10a028203 + 4 + λ4e703eaed02e.size > 1048576) break;
          if (this.queue.shift(), λf37ed74810e9.push(λ4e703eaed02e), λa3a0c41c8a3c += λ4e703eaed02e.size, 
          λd3a10a028203 += λ4e703eaed02e.size + 4, this.batchSend) {
            const λf37ed74810e9 = new Uint8Array(4);
            new DataView(λf37ed74810e9.buffer).setUint32(0, λ4e703eaed02e.size, !0), λ4d690c69dff7.push(λf37ed74810e9, λ4e703eaed02e);
          }
        } while (this.batchSend && this.queue.length && λf37ed74810e9.length < 64);
        const λ4e703eaed02e = this.sequence;
        if (this.sequence += λf37ed74810e9.length, await this.request(this.batchSend ? "\x73\x65\x6e\x64\x2d\x62\x61\x74\x63\x68" : "\x73\x65\x6e\x64", {
          method: "\x50\x4f\x53\x54",
          headers: {
            "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6f\x63\x74\x65\x74\x2d\x73\x74\x72\x65\x61\x6d",
            "\x58\x2d\x54\x75\x74\x73\x69\x2d\x53\x65\x71\x75\x65\x6e\x63\x65": String(λ4e703eaed02e)
          },
          body: this.batchSend ? new Blob(λ4d690c69dff7) : λf37ed74810e9[0]
        }), 1 !== this.readyState) return;
        this.bufferedAmount -= λa3a0c41c8a3c;
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
  close(λf37ed74810e9 = 1e3, λ4d690c69dff7 = "") {
    3 !== this.readyState && (this.readyState = 3, this.abort.abort(), this.cleanup(), 
    this.bufferedAmount = 0, this.queue.length = 0, this.emit("\x63\x6c\x6f\x73\x65", new CloseEvent("\x63\x6c\x6f\x73\x65", {
      code: λf37ed74810e9,
      reason: λ4d690c69dff7,
      wasClean: 1e3 === λf37ed74810e9
    })));
  }
}

const λf37ed74810e9 = new Map;

export function createHttpRelayEndpoint() {
  const λ4d690c69dff7 = httpRelayUrl() + crypto.randomUUID() + "\x2f", λa3a0c41c8a3c = new Set;
  return λf37ed74810e9.set(λ4d690c69dff7, λa3a0c41c8a3c), {
    url: λ4d690c69dff7,
    close() {
      λf37ed74810e9.delete(λ4d690c69dff7);
      for (const λf37ed74810e9 of λa3a0c41c8a3c) λf37ed74810e9.close();
      λa3a0c41c8a3c.clear();
    }
  };
}

let λ4d690c69dff7 = !1;

export function installHttpRelaySocket() {
  if (λ4d690c69dff7) return;
  λ4d690c69dff7 = !0;
  const λa3a0c41c8a3c = globalThis.WebSocket;
  function _0x0205d6_3(λ4d690c69dff7, λd3a10a028203) {
    const λ4e703eaed02e = String(λ4d690c69dff7), λ2c1043f5273f = λf37ed74810e9.get(λ4e703eaed02e);
    if (λ4e703eaed02e === httpRelayUrl() || λ2c1043f5273f) {
      const λf37ed74810e9 = new HttpRelaySocket(λ4d690c69dff7);
      return λ2c1043f5273f && (λ2c1043f5273f.add(λf37ed74810e9), λf37ed74810e9.addEventListener("\x63\x6c\x6f\x73\x65", () => λ2c1043f5273f.delete(λf37ed74810e9), {
        once: !0
      })), λf37ed74810e9;
    }
    return void 0 === λd3a10a028203 ? new λa3a0c41c8a3c(λ4d690c69dff7) : new λa3a0c41c8a3c(λ4d690c69dff7, λd3a10a028203);
  }
  Object.setPrototypeOf(_0x0205d6_3, λa3a0c41c8a3c), _0x0205d6_3.prototype = λa3a0c41c8a3c.prototype, 
  Object.defineProperty(_0x0205d6_3, Symbol.hasInstance, {
    value: λf37ed74810e9 => λf37ed74810e9 instanceof λa3a0c41c8a3c || λf37ed74810e9 instanceof HttpRelaySocket
  }), globalThis.WebSocket = _0x0205d6_3, addEventListener("\x70\x61\x67\x65\x68\x69\x64\x65", () => {
    for (const λ4d690c69dff7 of λf37ed74810e9.values()) for (const λf37ed74810e9 of λ4d690c69dff7) λf37ed74810e9.close();
    λf37ed74810e9.clear();
  });
}
