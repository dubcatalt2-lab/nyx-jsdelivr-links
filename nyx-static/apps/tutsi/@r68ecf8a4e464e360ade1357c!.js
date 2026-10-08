import { httpRelayUrl as λ3533c205aa2b } from "\x2e\x2f\x40\x72\x36\x39\x34\x62\x61\x38\x32\x65\x39\x34\x34\x31\x37\x38\x64\x65\x36\x38\x66\x39\x62\x66\x38\x64\x21\x2e\x6a\x73";

export function normalizeRelay(λ3533c205aa2b, λ7a05785e0945 = globalThis.location?.protocol || "\x68\x74\x74\x70\x73\x3a") {
  try {
    const λ7c0509d0680b = new URL(λ3533c205aa2b);
    return ![ "\x77\x73\x3a", "\x77\x73\x73\x3a" ].includes(λ7c0509d0680b.protocol) || λ7c0509d0680b.username || λ7c0509d0680b.password || λ7c0509d0680b.hash || "\x68\x74\x74\x70\x73\x3a" === λ7a05785e0945 && "\x77\x73\x73\x3a" !== λ7c0509d0680b.protocol ? "" : λ7c0509d0680b.href;
  } catch {
    return "";
  }
}

export function relayCandidates(λ3533c205aa2b, λ7a05785e0945 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ7c0509d0680b = location) {
  const λ3b324654d85e = `${"\x68\x74\x74\x70\x73\x3a" === λ7c0509d0680b.protocol ? "\x77\x73\x73\x3a" : "\x77\x73\x3a"}\x2f\x2f${λ7c0509d0680b.host}\x2f\x72\x65\x73\x6f\x75\x72\x63\x65\x73\x2f\x6c\x69\x76\x65\x2f`, λ3d9ad517a11f = normalizeRelay(λ3533c205aa2b.relay, λ7c0509d0680b.protocol) || normalizeRelay(λ7a05785e0945.wispUrl, λ7c0509d0680b.protocol) || λ3b324654d85e;
  return !1 === λ3533c205aa2b.autoRelay ? [ λ3d9ad517a11f ] : [ ...new Set([ λ3d9ad517a11f, λ3b324654d85e, ...Array.isArray(λ7a05785e0945.wispUrls) ? λ7a05785e0945.wispUrls : [], "\x77\x73\x73\x3a\x2f\x2f\x63\x6f\x70\x69\x75\x6d\x2d\x77\x69\x73\x70\x2d\x39\x35\x32\x39\x34\x36\x33\x2e\x6f\x6e\x72\x65\x6e\x64\x65\x72\x2e\x63\x6f\x6d\x2f\x77\x69\x73\x70\x2f" ].map(λ3533c205aa2b => normalizeRelay(λ3533c205aa2b, λ7c0509d0680b.protocol)).filter(Boolean)) ].slice(0, 6);
}

export function transportCandidates(λ7a05785e0945, λ7c0509d0680b = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ3b324654d85e = location) {
  const λ3d9ad517a11f = λ3533c205aa2b(λ3b324654d85e), λ0afb8db68549 = relayCandidates(λ7a05785e0945, λ7c0509d0680b, λ3b324654d85e);
  return !1 === λ7a05785e0945.httpBridge ? relayCandidates(λ7a05785e0945.relay === λ3d9ad517a11f ? {
    ...λ7a05785e0945,
    relay: ""
  } : λ7a05785e0945, λ7c0509d0680b.wispUrl === λ3d9ad517a11f ? {
    ...λ7c0509d0680b,
    wispUrl: ""
  } : λ7c0509d0680b, λ3b324654d85e).filter(λ3533c205aa2b => λ3533c205aa2b !== λ3d9ad517a11f) : λ7a05785e0945.relay && λ7a05785e0945.relay !== λ3d9ad517a11f ? [ ...new Set([ ...λ0afb8db68549, ...!1 === λ7a05785e0945.autoRelay ? [] : [ λ3d9ad517a11f ] ]) ] : [ ...new Set([ λ3d9ad517a11f, ...!1 === λ7a05785e0945.autoRelay ? [] : λ0afb8db68549 ]) ];
}

export function probeWisp(λ3533c205aa2b, {timeout: λ7a05785e0945 = 7e3, Socket: λ7c0509d0680b = WebSocket} = {}) {
  return new Promise(λ3b324654d85e => {
    let λ3d9ad517a11f, λ0afb8db68549 = !1;
    const _0x06a923_6 = λ3533c205aa2b => {
      if (!λ0afb8db68549) {
        if (λ0afb8db68549 = !0, clearTimeout(λ48c3b5a37e7c), λ3d9ad517a11f) {
          λ3d9ad517a11f.onmessage = λ3d9ad517a11f.onerror = λ3d9ad517a11f.onclose = null;
          try {
            λ3d9ad517a11f.close();
          } catch {}
        }
        λ3b324654d85e(λ3533c205aa2b);
      }
    }, λ48c3b5a37e7c = setTimeout(() => _0x06a923_6(!1), λ7a05785e0945);
    try {
      λ3d9ad517a11f = new λ7c0509d0680b(λ3533c205aa2b), λ3d9ad517a11f.binaryType = "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72", 
      λ3d9ad517a11f.onmessage = λ3533c205aa2b => {
        if (!(λ3533c205aa2b.data instanceof ArrayBuffer)) return;
        const λ7a05785e0945 = new Uint8Array(λ3533c205aa2b.data);
        λ7a05785e0945.length >= 9 && 3 === λ7a05785e0945[0] && 0 === new DataView(λ3533c205aa2b.data).getUint32(1, !0) && _0x06a923_6(!0);
      }, λ3d9ad517a11f.onerror = λ3d9ad517a11f.onclose = () => _0x06a923_6(!1);
    } catch {
      _0x06a923_6(!1);
    }
  });
}

export class RelayTransport {
  constructor({urls: λ3533c205aa2b, createClient: λ7a05785e0945, probe: λ7c0509d0680b = probeWisp, onStatus: λ3b324654d85e = () => {}, storage: λ3d9ad517a11f = globalThis.sessionStorage, monitorMs: λ0afb8db68549 = 3e4, requestTimeoutMs: λ48c3b5a37e7c = 2e4, rank: λ71255817c9d3 = async λ3533c205aa2b => λ3533c205aa2b, online: λ74f9b6a90f2e = () => !1 !== globalThis.navigator?.onLine, visible: λ14151dda1be7 = () => !globalThis.document?.hidden}) {
    Object.assign(this, {
      urls: λ3533c205aa2b,
      createClient: λ7a05785e0945,
      probe: λ7c0509d0680b,
      onStatus: λ3b324654d85e,
      storage: λ3d9ad517a11f,
      monitorMs: λ0afb8db68549,
      requestTimeoutMs: λ48c3b5a37e7c,
      rank: λ71255817c9d3,
      online: λ74f9b6a90f2e,
      visible: λ14151dda1be7
    }), this.ready = !1, this.closed = !1, this.url = "", this.client = null, this.switching = null, 
    this.failures = 0, this.retired = [];
  }
  async init() {
    await this.select(), this.ready = !0, this.schedule();
  }
  async select(λ3533c205aa2b = "") {
    if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
    if (this.switching) return this.switching;
    if (!this.online()) throw new Error("\x59\x6f\x75\x20\x61\x72\x65\x20\x6f\x66\x66\x6c\x69\x6e\x65\x2e\x20\x52\x65\x63\x6f\x6e\x6e\x65\x63\x74\x20\x74\x6f\x20\x57\x69\x2d\x46\x69\x20\x61\x6e\x64\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x2e");
    let λ7a05785e0945 = "";
    try {
      λ7a05785e0945 = this.storage?.getItem("\x74\x75\x74\x73\x69\x2e\x77\x6f\x72\x6b\x69\x6e\x67\x52\x65\x6c\x61\x79\x3a" + this.urls.join("\x7c")) || "";
    } catch {}
    const λ7c0509d0680b = [ ...new Set([ this.url, λ7a05785e0945, ...this.urls ]) ].filter(λ7a05785e0945 => this.urls.includes(λ7a05785e0945) && λ7a05785e0945 !== λ3533c205aa2b);
    this.switching = (async () => {
      let λ7a05785e0945;
      const λ3b324654d85e = await Promise.race([ Promise.resolve().then(() => this.rank(λ7c0509d0680b)).catch(() => λ7c0509d0680b), new Promise(λ3533c205aa2b => {
        λ7a05785e0945 = setTimeout(() => λ3533c205aa2b(λ7c0509d0680b), 300);
      }) ]).finally(() => clearTimeout(λ7a05785e0945));
      for (const λ7a05785e0945 of λ3b324654d85e) {
        if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
        if (this.onStatus({
          state: "\x63\x68\x65\x63\x6b\x69\x6e\x67",
          url: λ7a05785e0945
        }), !await this.probe(λ7a05785e0945)) continue;
        let λ7c0509d0680b;
        try {
          λ7c0509d0680b = await this.createClient(λ7a05785e0945);
        } catch {
          continue;
        }
        if (this.closed) throw λ7c0509d0680b.close?.(), new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
        for (this.client && this.retired.push(this.client); this.retired.length > 2; ) try {
          this.retired.shift()?.close?.();
        } catch {}
        this.client = λ7c0509d0680b, this.url = λ7a05785e0945, this.failures = 0;
        try {
          this.storage?.setItem("\x74\x75\x74\x73\x69\x2e\x77\x6f\x72\x6b\x69\x6e\x67\x52\x65\x6c\x61\x79\x3a" + this.urls.join("\x7c"), λ7a05785e0945);
        } catch {}
        return void this.onStatus({
          state: λ3533c205aa2b ? "\x73\x77\x69\x74\x63\x68\x65\x64" : "\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64",
          url: λ7a05785e0945
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
  async recover(λ3533c205aa2b, λ7a05785e0945 = !1, λ7c0509d0680b = !1) {
    return !(this.closed || !this.online() || this.client === λ3533c205aa2b && (this.switching ? (await this.switching, 
    this.client === λ3533c205aa2b) : !λ7a05785e0945 && await this.probe(this.url) || this.client === λ3533c205aa2b && (await this.select(λ7c0509d0680b ? "" : this.url), 
    this.client === λ3533c205aa2b)));
  }
  async attempt(λ3533c205aa2b, λ7a05785e0945) {
    const λ7c0509d0680b = λ7a05785e0945[4], λ3b324654d85e = new AbortController;
    if (λ7c0509d0680b?.aborted) throw λ7c0509d0680b.reason || new DOMException("\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
    let λ3d9ad517a11f, λ0afb8db68549 = !1, λ48c3b5a37e7c = !1;
    const λ71255817c9d3 = λ7c0509d0680b ? AbortSignal.any([ λ7c0509d0680b, λ3b324654d85e.signal ]) : λ3b324654d85e.signal, λ74f9b6a90f2e = Promise.resolve().then(() => λ3533c205aa2b.request(...λ7a05785e0945.slice(0, 4), λ71255817c9d3));
    λ74f9b6a90f2e.then(λ3533c205aa2b => {
      λ48c3b5a37e7c && λ71255817c9d3.aborted && λ3533c205aa2b?.body?.cancel?.().catch(() => {});
    }, () => {});
    const λ14151dda1be7 = new Promise((λ3533c205aa2b, λ7a05785e0945) => {
      const _0x06a923_2 = () => λ7a05785e0945(λ0afb8db68549 ? Object.assign(new Error("\x52\x65\x6c\x61\x79\x20\x72\x65\x71\x75\x65\x73\x74\x20\x74\x69\x6d\x65\x64\x20\x6f\x75\x74"), {
        name: "\x54\x69\x6d\x65\x6f\x75\x74\x45\x72\x72\x6f\x72"
      }) : λ71255817c9d3.reason);
      λ71255817c9d3.addEventListener("\x61\x62\x6f\x72\x74", _0x06a923_2, {
        once: !0
      }), λ3d9ad517a11f = setTimeout(() => {
        λ0afb8db68549 = !0, λ3b324654d85e.abort();
      }, this.requestTimeoutMs), λ74f9b6a90f2e.finally(() => λ71255817c9d3.removeEventListener("\x61\x62\x6f\x72\x74", _0x06a923_2)).catch(() => {});
    });
    try {
      return await Promise.race([ λ74f9b6a90f2e, λ14151dda1be7 ]);
    } finally {
      λ48c3b5a37e7c = !0, clearTimeout(λ3d9ad517a11f);
    }
  }
  async request(...λ3533c205aa2b) {
    if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
    this.ready || await this.init();
    const λ7a05785e0945 = this.client;
    try {
      return await this.attempt(λ7a05785e0945, λ3533c205aa2b);
    } catch (λ7c0509d0680b) {
      if (λ3533c205aa2b[4]?.aborted || "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72" === λ7c0509d0680b?.name) throw λ7c0509d0680b;
      const λ3b324654d85e = "\x54\x69\x6d\x65\x6f\x75\x74\x45\x72\x72\x6f\x72" === λ7c0509d0680b?.name || /timed?\s*out|timeout|ETIMEDOUT|ECONNRESET|network|socket|wisp|hyper.*(?:error|client)|muxtaskended|connection.*(?:closed|reset|lost|failed)|unexpected.*(?:eof|cutoff)|transport.*(?:closed|failed)/i.test(String(λ7c0509d0680b?.message || λ7c0509d0680b || ""));
      let λ3d9ad517a11f = !1;
      try {
        λ3d9ad517a11f = await this.recover(λ7a05785e0945, λ3b324654d85e, λ3b324654d85e);
      } catch {}
      if (λ3d9ad517a11f && /^(GET|HEAD)$/i.test(String(λ3533c205aa2b[1] || "\x47\x45\x54")) && !λ3533c205aa2b[4]?.aborted && !this.closed && this.online()) return this.attempt(this.client, λ3533c205aa2b);
      throw λ7c0509d0680b;
    }
  }
  connect(...λ3533c205aa2b) {
    const λ7a05785e0945 = this.client, λ7c0509d0680b = λ3533c205aa2b[6];
    λ3533c205aa2b[6] = (...λ3533c205aa2b) => {
      this.recover(λ7a05785e0945).catch(() => {}), λ7c0509d0680b?.(...λ3533c205aa2b);
    };
    try {
      return λ7a05785e0945.connect(...λ3533c205aa2b);
    } catch (λ3533c205aa2b) {
      throw this.recover(λ7a05785e0945).catch(() => {}), λ3533c205aa2b;
    }
  }
  async check() {
    if (this.closed || !this.client || !this.online() || !this.visible()) return;
    const λ3533c205aa2b = this.client, λ7a05785e0945 = this.url, λ7c0509d0680b = await this.probe(λ7a05785e0945);
    this.closed || λ3533c205aa2b !== this.client || (this.failures = λ7c0509d0680b ? 0 : this.failures + 1, 
    this.failures >= 2 && await this.recover(λ3533c205aa2b, !0).catch(() => {}));
  }
  schedule() {
    !this.closed && this.monitorMs && (this.timer = setTimeout(async () => {
      await this.check(), this.schedule();
    }, this.monitorMs));
  }
  close() {
    this.closed = !0, clearTimeout(this.timer);
    for (const λ3533c205aa2b of [ this.client, ...this.retired ]) try {
      λ3533c205aa2b?.close?.();
    } catch {}
    this.retired = [];
  }
}

const λ7a05785e0945 = new Map;

export async function rankForBlocker(λ3533c205aa2b, λ7c0509d0680b, {fetcher: λ3b324654d85e = fetch, onHint: λ3d9ad517a11f = () => {}} = {}) {
  if (!/^[a-z0-9_-]{1,64}$/.test(λ7c0509d0680b || "")) return λ3533c205aa2b;
  const λ0afb8db68549 = await Promise.all(λ3533c205aa2b.map(async λ3533c205aa2b => {
    const λ3d9ad517a11f = new URL(λ3533c205aa2b).hostname;
    if ("\x6c\x6f\x63\x61\x6c\x68\x6f\x73\x74" === λ3d9ad517a11f || λ3d9ad517a11f.endsWith("\x2e\x6c\x6f\x63\x61\x6c") || /^[\d.]+$/.test(λ3d9ad517a11f) || λ3d9ad517a11f.includes("\x3a")) return {
      url: λ3533c205aa2b,
      blocked: null
    };
    const λ0afb8db68549 = λ7c0509d0680b + "\x3a" + λ3d9ad517a11f, λ48c3b5a37e7c = λ7a05785e0945.get(λ0afb8db68549);
    if (λ48c3b5a37e7c && λ48c3b5a37e7c.until > Date.now()) return {
      url: λ3533c205aa2b,
      blocked: λ48c3b5a37e7c.blocked
    };
    let λ71255817c9d3 = null;
    const λ74f9b6a90f2e = new AbortController, λ14151dda1be7 = setTimeout(() => λ74f9b6a90f2e.abort(), 4e3);
    try {
      const λ3533c205aa2b = await λ3b324654d85e("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6c\x69\x6e\x6b\x2d\x63\x68\x65\x63\x6b\x65\x72\x2f\x63\x68\x65\x63\x6b", {
        method: "\x50\x4f\x53\x54",
        signal: λ74f9b6a90f2e.signal,
        headers: {
          "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"
        },
        body: JSON.stringify({
          url: "\x68\x74\x74\x70\x73\x3a\x2f\x2f" + λ3d9ad517a11f + "\x2f",
          vendor: λ7c0509d0680b
        })
      });
      if (λ3533c205aa2b.ok) {
        const λ7a05785e0945 = await λ3533c205aa2b.json(), λ3b324654d85e = λ7a05785e0945?.vendors?.[λ7c0509d0680b];
        λ3b324654d85e?.error || "\x62\x6f\x6f\x6c\x65\x61\x6e" != typeof λ3b324654d85e?.blocked || (λ71255817c9d3 = λ3b324654d85e.blocked);
      }
    } catch {} finally {
      clearTimeout(λ14151dda1be7);
    }
    return λ7a05785e0945.set(λ0afb8db68549, {
      blocked: λ71255817c9d3,
      until: Date.now() + (null === λ71255817c9d3 ? 3e4 : 6e5)
    }), λ7a05785e0945.size > 100 && λ7a05785e0945.delete(λ7a05785e0945.keys().next().value), 
    {
      url: λ3533c205aa2b,
      blocked: λ71255817c9d3
    };
  }));
  return λ3d9ad517a11f({
    vendor: λ7c0509d0680b,
    results: λ0afb8db68549
  }), λ0afb8db68549.sort((λ3533c205aa2b, λ7a05785e0945) => Number(!0 === λ3533c205aa2b.blocked) - Number(!0 === λ7a05785e0945.blocked)).map(λ3533c205aa2b => λ3533c205aa2b.url);
}
