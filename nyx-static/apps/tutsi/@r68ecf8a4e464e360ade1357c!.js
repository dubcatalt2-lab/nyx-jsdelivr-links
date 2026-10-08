import { httpRelayUrl as λa7e702bc6e0b } from "\x2e\x2f\x40\x72\x36\x39\x34\x62\x61\x38\x32\x65\x39\x34\x34\x31\x37\x38\x64\x65\x36\x38\x66\x39\x62\x66\x38\x64\x21\x2e\x6a\x73";

export function normalizeRelay(λa7e702bc6e0b, λ6e7a0756acd1 = globalThis.location?.protocol || "\x68\x74\x74\x70\x73\x3a") {
  try {
    const λd601ac247353 = new URL(λa7e702bc6e0b);
    return ![ "\x77\x73\x3a", "\x77\x73\x73\x3a" ].includes(λd601ac247353.protocol) || λd601ac247353.username || λd601ac247353.password || λd601ac247353.hash || "\x68\x74\x74\x70\x73\x3a" === λ6e7a0756acd1 && "\x77\x73\x73\x3a" !== λd601ac247353.protocol ? "" : λd601ac247353.href;
  } catch {
    return "";
  }
}

export function relayCandidates(λa7e702bc6e0b, λ6e7a0756acd1 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λd601ac247353 = location) {
  const λ588ce18ccf65 = `${"\x68\x74\x74\x70\x73\x3a" === λd601ac247353.protocol ? "\x77\x73\x73\x3a" : "\x77\x73\x3a"}\x2f\x2f${λd601ac247353.host}\x2f\x72\x65\x73\x6f\x75\x72\x63\x65\x73\x2f\x6c\x69\x76\x65\x2f`, λd939bff0ad88 = normalizeRelay(λa7e702bc6e0b.relay, λd601ac247353.protocol) || normalizeRelay(λ6e7a0756acd1.wispUrl, λd601ac247353.protocol) || λ588ce18ccf65;
  return !1 === λa7e702bc6e0b.autoRelay ? [ λd939bff0ad88 ] : [ ...new Set([ λd939bff0ad88, λ588ce18ccf65, ...Array.isArray(λ6e7a0756acd1.wispUrls) ? λ6e7a0756acd1.wispUrls : [], "\x77\x73\x73\x3a\x2f\x2f\x63\x6f\x70\x69\x75\x6d\x2d\x77\x69\x73\x70\x2d\x39\x35\x32\x39\x34\x36\x33\x2e\x6f\x6e\x72\x65\x6e\x64\x65\x72\x2e\x63\x6f\x6d\x2f\x77\x69\x73\x70\x2f" ].map(λa7e702bc6e0b => normalizeRelay(λa7e702bc6e0b, λd601ac247353.protocol)).filter(Boolean)) ].slice(0, 6);
}

export function transportCandidates(λ6e7a0756acd1, λd601ac247353 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ588ce18ccf65 = location) {
  const λd939bff0ad88 = λa7e702bc6e0b(λ588ce18ccf65), λ37089a0c3c3e = relayCandidates(λ6e7a0756acd1, λd601ac247353, λ588ce18ccf65);
  return !1 === λ6e7a0756acd1.httpBridge ? relayCandidates(λ6e7a0756acd1.relay === λd939bff0ad88 ? {
    ...λ6e7a0756acd1,
    relay: ""
  } : λ6e7a0756acd1, λd601ac247353.wispUrl === λd939bff0ad88 ? {
    ...λd601ac247353,
    wispUrl: ""
  } : λd601ac247353, λ588ce18ccf65).filter(λa7e702bc6e0b => λa7e702bc6e0b !== λd939bff0ad88) : λ6e7a0756acd1.relay && λ6e7a0756acd1.relay !== λd939bff0ad88 ? [ ...new Set([ ...λ37089a0c3c3e, ...!1 === λ6e7a0756acd1.autoRelay ? [] : [ λd939bff0ad88 ] ]) ] : [ ...new Set([ λd939bff0ad88, ...!1 === λ6e7a0756acd1.autoRelay ? [] : λ37089a0c3c3e ]) ];
}

export function probeWisp(λa7e702bc6e0b, {timeout: λ6e7a0756acd1 = 7e3, Socket: λd601ac247353 = WebSocket} = {}) {
  return new Promise(λ588ce18ccf65 => {
    let λd939bff0ad88, λ37089a0c3c3e = !1;
    const _0x06a923_6 = λa7e702bc6e0b => {
      if (!λ37089a0c3c3e) {
        if (λ37089a0c3c3e = !0, clearTimeout(λb1a45a50f4ee), λd939bff0ad88) {
          λd939bff0ad88.onmessage = λd939bff0ad88.onerror = λd939bff0ad88.onclose = null;
          try {
            λd939bff0ad88.close();
          } catch {}
        }
        λ588ce18ccf65(λa7e702bc6e0b);
      }
    }, λb1a45a50f4ee = setTimeout(() => _0x06a923_6(!1), λ6e7a0756acd1);
    try {
      λd939bff0ad88 = new λd601ac247353(λa7e702bc6e0b), λd939bff0ad88.binaryType = "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72", 
      λd939bff0ad88.onmessage = λa7e702bc6e0b => {
        if (!(λa7e702bc6e0b.data instanceof ArrayBuffer)) return;
        const λ6e7a0756acd1 = new Uint8Array(λa7e702bc6e0b.data);
        λ6e7a0756acd1.length >= 9 && 3 === λ6e7a0756acd1[0] && 0 === new DataView(λa7e702bc6e0b.data).getUint32(1, !0) && _0x06a923_6(!0);
      }, λd939bff0ad88.onerror = λd939bff0ad88.onclose = () => _0x06a923_6(!1);
    } catch {
      _0x06a923_6(!1);
    }
  });
}

export class RelayTransport {
  constructor({urls: λa7e702bc6e0b, createClient: λ6e7a0756acd1, probe: λd601ac247353 = probeWisp, onStatus: λ588ce18ccf65 = () => {}, storage: λd939bff0ad88 = globalThis.sessionStorage, monitorMs: λ37089a0c3c3e = 3e4, requestTimeoutMs: λb1a45a50f4ee = 2e4, rank: λfb9d01c5e884 = async λa7e702bc6e0b => λa7e702bc6e0b, online: λce7d127a2a23 = () => !1 !== globalThis.navigator?.onLine, visible: λ979d3b1be186 = () => !globalThis.document?.hidden}) {
    Object.assign(this, {
      urls: λa7e702bc6e0b,
      createClient: λ6e7a0756acd1,
      probe: λd601ac247353,
      onStatus: λ588ce18ccf65,
      storage: λd939bff0ad88,
      monitorMs: λ37089a0c3c3e,
      requestTimeoutMs: λb1a45a50f4ee,
      rank: λfb9d01c5e884,
      online: λce7d127a2a23,
      visible: λ979d3b1be186
    }), this.ready = !1, this.closed = !1, this.url = "", this.client = null, this.switching = null, 
    this.failures = 0, this.retired = [];
  }
  async init() {
    await this.select(), this.ready = !0, this.schedule();
  }
  async select(λa7e702bc6e0b = "") {
    if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
    if (this.switching) return this.switching;
    if (!this.online()) throw new Error("\x59\x6f\x75\x20\x61\x72\x65\x20\x6f\x66\x66\x6c\x69\x6e\x65\x2e\x20\x52\x65\x63\x6f\x6e\x6e\x65\x63\x74\x20\x74\x6f\x20\x57\x69\x2d\x46\x69\x20\x61\x6e\x64\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x2e");
    let λ6e7a0756acd1 = "";
    try {
      λ6e7a0756acd1 = this.storage?.getItem("\x74\x75\x74\x73\x69\x2e\x77\x6f\x72\x6b\x69\x6e\x67\x52\x65\x6c\x61\x79\x3a" + this.urls.join("\x7c")) || "";
    } catch {}
    const λd601ac247353 = [ ...new Set([ this.url, λ6e7a0756acd1, ...this.urls ]) ].filter(λ6e7a0756acd1 => this.urls.includes(λ6e7a0756acd1) && λ6e7a0756acd1 !== λa7e702bc6e0b);
    this.switching = (async () => {
      let λ6e7a0756acd1;
      const λ588ce18ccf65 = await Promise.race([ Promise.resolve().then(() => this.rank(λd601ac247353)).catch(() => λd601ac247353), new Promise(λa7e702bc6e0b => {
        λ6e7a0756acd1 = setTimeout(() => λa7e702bc6e0b(λd601ac247353), 300);
      }) ]).finally(() => clearTimeout(λ6e7a0756acd1));
      for (const λ6e7a0756acd1 of λ588ce18ccf65) {
        if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
        if (this.onStatus({
          state: "\x63\x68\x65\x63\x6b\x69\x6e\x67",
          url: λ6e7a0756acd1
        }), !await this.probe(λ6e7a0756acd1)) continue;
        let λd601ac247353;
        try {
          λd601ac247353 = await this.createClient(λ6e7a0756acd1);
        } catch {
          continue;
        }
        if (this.closed) throw λd601ac247353.close?.(), new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
        for (this.client && this.retired.push(this.client); this.retired.length > 2; ) try {
          this.retired.shift()?.close?.();
        } catch {}
        this.client = λd601ac247353, this.url = λ6e7a0756acd1, this.failures = 0;
        try {
          this.storage?.setItem("\x74\x75\x74\x73\x69\x2e\x77\x6f\x72\x6b\x69\x6e\x67\x52\x65\x6c\x61\x79\x3a" + this.urls.join("\x7c"), λ6e7a0756acd1);
        } catch {}
        return void this.onStatus({
          state: λa7e702bc6e0b ? "\x73\x77\x69\x74\x63\x68\x65\x64" : "\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64",
          url: λ6e7a0756acd1
        });
      }
      throw this.onStatus({
        state: "\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65",
        url: ""
      }), new Error("\x4e\x6f\x20\x63\x6f\x6e\x66\x69\x67\x75\x72\x65\x64\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x72\x65\x6c\x61\x79\x20\x69\x73\x20\x72\x65\x61\x63\x68\x61\x62\x6c\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x69\x73\x20\x64\x65\x76\x69\x63\x65\x2e\x20\x54\x72\x79\x20\x61\x67\x61\x69\x6e\x20\x6f\x72\x20\x63\x68\x61\x6e\x67\x65\x20\x74\x68\x65\x20\x72\x65\x6c\x61\x79\x20\x69\x6e\x20\x53\x65\x74\x74\x69\x6e\x67\x73\x2e");
    })();
    try {
      return await this.switching;
    } finally {
      this.switching = null;
    }
  }
  async recover(λa7e702bc6e0b, λ6e7a0756acd1 = !1, λd601ac247353 = !1) {
    return !(this.closed || !this.online() || this.client === λa7e702bc6e0b && (this.switching ? (await this.switching, 
    this.client === λa7e702bc6e0b) : !λ6e7a0756acd1 && await this.probe(this.url) || this.client === λa7e702bc6e0b && (await this.select(λd601ac247353 ? "" : this.url), 
    this.client === λa7e702bc6e0b)));
  }
  async attempt(λa7e702bc6e0b, λ6e7a0756acd1) {
    const λd601ac247353 = λ6e7a0756acd1[4], λ588ce18ccf65 = new AbortController;
    if (λd601ac247353?.aborted) throw λd601ac247353.reason || new DOMException("\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
    let λd939bff0ad88, λ37089a0c3c3e = !1, λb1a45a50f4ee = !1;
    const λfb9d01c5e884 = λd601ac247353 ? AbortSignal.any([ λd601ac247353, λ588ce18ccf65.signal ]) : λ588ce18ccf65.signal, λce7d127a2a23 = Promise.resolve().then(() => λa7e702bc6e0b.request(...λ6e7a0756acd1.slice(0, 4), λfb9d01c5e884));
    λce7d127a2a23.then(λa7e702bc6e0b => {
      λb1a45a50f4ee && λfb9d01c5e884.aborted && λa7e702bc6e0b?.body?.cancel?.().catch(() => {});
    }, () => {});
    const λ979d3b1be186 = new Promise((λa7e702bc6e0b, λ6e7a0756acd1) => {
      const _0x06a923_2 = () => λ6e7a0756acd1(λ37089a0c3c3e ? Object.assign(new Error("\x52\x65\x6c\x61\x79\x20\x72\x65\x71\x75\x65\x73\x74\x20\x74\x69\x6d\x65\x64\x20\x6f\x75\x74"), {
        name: "\x54\x69\x6d\x65\x6f\x75\x74\x45\x72\x72\x6f\x72"
      }) : λfb9d01c5e884.reason);
      λfb9d01c5e884.addEventListener("\x61\x62\x6f\x72\x74", _0x06a923_2, {
        once: !0
      }), λd939bff0ad88 = setTimeout(() => {
        λ37089a0c3c3e = !0, λ588ce18ccf65.abort();
      }, this.requestTimeoutMs), λce7d127a2a23.finally(() => λfb9d01c5e884.removeEventListener("\x61\x62\x6f\x72\x74", _0x06a923_2)).catch(() => {});
    });
    try {
      return await Promise.race([ λce7d127a2a23, λ979d3b1be186 ]);
    } finally {
      λb1a45a50f4ee = !0, clearTimeout(λd939bff0ad88);
    }
  }
  async request(...λa7e702bc6e0b) {
    if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
    this.ready || await this.init();
    const λ6e7a0756acd1 = this.client;
    try {
      return await this.attempt(λ6e7a0756acd1, λa7e702bc6e0b);
    } catch (λd601ac247353) {
      if (λa7e702bc6e0b[4]?.aborted || "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72" === λd601ac247353?.name) throw λd601ac247353;
      const λ588ce18ccf65 = "\x54\x69\x6d\x65\x6f\x75\x74\x45\x72\x72\x6f\x72" === λd601ac247353?.name || /timed?\s*out|timeout|ETIMEDOUT|ECONNRESET|network|socket|wisp|hyper.*(?:error|client)|muxtaskended|connection.*(?:closed|reset|lost|failed)|unexpected.*(?:eof|cutoff)|transport.*(?:closed|failed)/i.test(String(λd601ac247353?.message || λd601ac247353 || ""));
      let λd939bff0ad88 = !1;
      try {
        λd939bff0ad88 = await this.recover(λ6e7a0756acd1, λ588ce18ccf65, λ588ce18ccf65);
      } catch {}
      if (λd939bff0ad88 && /^(GET|HEAD)$/i.test(String(λa7e702bc6e0b[1] || "\x47\x45\x54")) && !λa7e702bc6e0b[4]?.aborted && !this.closed && this.online()) return this.attempt(this.client, λa7e702bc6e0b);
      throw λd601ac247353;
    }
  }
  connect(...λa7e702bc6e0b) {
    const λ6e7a0756acd1 = this.client, λd601ac247353 = λa7e702bc6e0b[6];
    λa7e702bc6e0b[6] = (...λa7e702bc6e0b) => {
      this.recover(λ6e7a0756acd1).catch(() => {}), λd601ac247353?.(...λa7e702bc6e0b);
    };
    try {
      return λ6e7a0756acd1.connect(...λa7e702bc6e0b);
    } catch (λa7e702bc6e0b) {
      throw this.recover(λ6e7a0756acd1).catch(() => {}), λa7e702bc6e0b;
    }
  }
  async check() {
    if (this.closed || !this.client || !this.online() || !this.visible()) return;
    const λa7e702bc6e0b = this.client, λ6e7a0756acd1 = this.url, λd601ac247353 = await this.probe(λ6e7a0756acd1);
    this.closed || λa7e702bc6e0b !== this.client || (this.failures = λd601ac247353 ? 0 : this.failures + 1, 
    this.failures >= 2 && await this.recover(λa7e702bc6e0b, !0).catch(() => {}));
  }
  schedule() {
    !this.closed && this.monitorMs && (this.timer = setTimeout(async () => {
      await this.check(), this.schedule();
    }, this.monitorMs));
  }
  close() {
    this.closed = !0, clearTimeout(this.timer);
    for (const λa7e702bc6e0b of [ this.client, ...this.retired ]) try {
      λa7e702bc6e0b?.close?.();
    } catch {}
    this.retired = [];
  }
}

const λ6e7a0756acd1 = new Map;

export async function rankForBlocker(λa7e702bc6e0b, λd601ac247353, {fetcher: λ588ce18ccf65 = fetch, onHint: λd939bff0ad88 = () => {}} = {}) {
  if (!/^[a-z0-9_-]{1,64}$/.test(λd601ac247353 || "")) return λa7e702bc6e0b;
  const λ37089a0c3c3e = await Promise.all(λa7e702bc6e0b.map(async λa7e702bc6e0b => {
    const λd939bff0ad88 = new URL(λa7e702bc6e0b).hostname;
    if ("\x6c\x6f\x63\x61\x6c\x68\x6f\x73\x74" === λd939bff0ad88 || λd939bff0ad88.endsWith("\x2e\x6c\x6f\x63\x61\x6c") || /^[\d.]+$/.test(λd939bff0ad88) || λd939bff0ad88.includes("\x3a")) return {
      url: λa7e702bc6e0b,
      blocked: null
    };
    const λ37089a0c3c3e = λd601ac247353 + "\x3a" + λd939bff0ad88, λb1a45a50f4ee = λ6e7a0756acd1.get(λ37089a0c3c3e);
    if (λb1a45a50f4ee && λb1a45a50f4ee.until > Date.now()) return {
      url: λa7e702bc6e0b,
      blocked: λb1a45a50f4ee.blocked
    };
    let λfb9d01c5e884 = null;
    const λce7d127a2a23 = new AbortController, λ979d3b1be186 = setTimeout(() => λce7d127a2a23.abort(), 4e3);
    try {
      const λa7e702bc6e0b = await λ588ce18ccf65("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6c\x69\x6e\x6b\x2d\x63\x68\x65\x63\x6b\x65\x72\x2f\x63\x68\x65\x63\x6b", {
        method: "\x50\x4f\x53\x54",
        signal: λce7d127a2a23.signal,
        headers: {
          "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"
        },
        body: JSON.stringify({
          url: "\x68\x74\x74\x70\x73\x3a\x2f\x2f" + λd939bff0ad88 + "\x2f",
          vendor: λd601ac247353
        })
      });
      if (λa7e702bc6e0b.ok) {
        const λ6e7a0756acd1 = await λa7e702bc6e0b.json(), λ588ce18ccf65 = λ6e7a0756acd1?.vendors?.[λd601ac247353];
        λ588ce18ccf65?.error || "\x62\x6f\x6f\x6c\x65\x61\x6e" != typeof λ588ce18ccf65?.blocked || (λfb9d01c5e884 = λ588ce18ccf65.blocked);
      }
    } catch {} finally {
      clearTimeout(λ979d3b1be186);
    }
    return λ6e7a0756acd1.set(λ37089a0c3c3e, {
      blocked: λfb9d01c5e884,
      until: Date.now() + (null === λfb9d01c5e884 ? 3e4 : 6e5)
    }), λ6e7a0756acd1.size > 100 && λ6e7a0756acd1.delete(λ6e7a0756acd1.keys().next().value), 
    {
      url: λa7e702bc6e0b,
      blocked: λfb9d01c5e884
    };
  }));
  return λd939bff0ad88({
    vendor: λd601ac247353,
    results: λ37089a0c3c3e
  }), λ37089a0c3c3e.sort((λa7e702bc6e0b, λ6e7a0756acd1) => Number(!0 === λa7e702bc6e0b.blocked) - Number(!0 === λ6e7a0756acd1.blocked)).map(λa7e702bc6e0b => λa7e702bc6e0b.url);
}
