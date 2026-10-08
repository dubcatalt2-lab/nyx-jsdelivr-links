import { httpRelayUrl as λ54f0a38a854b } from "\x2e\x2f\x40\x72\x36\x39\x34\x62\x61\x38\x32\x65\x39\x34\x34\x31\x37\x38\x64\x65\x36\x38\x66\x39\x62\x66\x38\x64\x21\x2e\x6a\x73";

export function normalizeRelay(λ54f0a38a854b, λ5454f9ca2e88 = globalThis.location?.protocol || "\x68\x74\x74\x70\x73\x3a") {
  try {
    const λ2ed4ee85319f = new URL(λ54f0a38a854b);
    return ![ "\x77\x73\x3a", "\x77\x73\x73\x3a" ].includes(λ2ed4ee85319f.protocol) || λ2ed4ee85319f.username || λ2ed4ee85319f.password || λ2ed4ee85319f.hash || "\x68\x74\x74\x70\x73\x3a" === λ5454f9ca2e88 && "\x77\x73\x73\x3a" !== λ2ed4ee85319f.protocol ? "" : λ2ed4ee85319f.href;
  } catch {
    return "";
  }
}

export function relayCandidates(λ54f0a38a854b, λ5454f9ca2e88 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ2ed4ee85319f = location) {
  const λ16db786f0d00 = `${"\x68\x74\x74\x70\x73\x3a" === λ2ed4ee85319f.protocol ? "\x77\x73\x73\x3a" : "\x77\x73\x3a"}\x2f\x2f${λ2ed4ee85319f.host}\x2f\x72\x65\x73\x6f\x75\x72\x63\x65\x73\x2f\x6c\x69\x76\x65\x2f`, λc873e1c880fe = normalizeRelay(λ54f0a38a854b.relay, λ2ed4ee85319f.protocol) || normalizeRelay(λ5454f9ca2e88.wispUrl, λ2ed4ee85319f.protocol) || λ16db786f0d00;
  return !1 === λ54f0a38a854b.autoRelay ? [ λc873e1c880fe ] : [ ...new Set([ λc873e1c880fe, λ16db786f0d00, ...Array.isArray(λ5454f9ca2e88.wispUrls) ? λ5454f9ca2e88.wispUrls : [], "\x77\x73\x73\x3a\x2f\x2f\x63\x6f\x70\x69\x75\x6d\x2d\x77\x69\x73\x70\x2d\x39\x35\x32\x39\x34\x36\x33\x2e\x6f\x6e\x72\x65\x6e\x64\x65\x72\x2e\x63\x6f\x6d\x2f\x77\x69\x73\x70\x2f" ].map(λ54f0a38a854b => normalizeRelay(λ54f0a38a854b, λ2ed4ee85319f.protocol)).filter(Boolean)) ].slice(0, 6);
}

export function transportCandidates(λ5454f9ca2e88, λ2ed4ee85319f = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ16db786f0d00 = location) {
  const λc873e1c880fe = λ54f0a38a854b(λ16db786f0d00), λ4afb38bf7fb4 = relayCandidates(λ5454f9ca2e88, λ2ed4ee85319f, λ16db786f0d00);
  return !1 === λ5454f9ca2e88.httpBridge ? relayCandidates(λ5454f9ca2e88.relay === λc873e1c880fe ? {
    ...λ5454f9ca2e88,
    relay: ""
  } : λ5454f9ca2e88, λ2ed4ee85319f.wispUrl === λc873e1c880fe ? {
    ...λ2ed4ee85319f,
    wispUrl: ""
  } : λ2ed4ee85319f, λ16db786f0d00).filter(λ54f0a38a854b => λ54f0a38a854b !== λc873e1c880fe) : λ5454f9ca2e88.relay && λ5454f9ca2e88.relay !== λc873e1c880fe ? [ ...new Set([ ...λ4afb38bf7fb4, ...!1 === λ5454f9ca2e88.autoRelay ? [] : [ λc873e1c880fe ] ]) ] : [ ...new Set([ λc873e1c880fe, ...!1 === λ5454f9ca2e88.autoRelay ? [] : λ4afb38bf7fb4 ]) ];
}

export function probeWisp(λ54f0a38a854b, {timeout: λ5454f9ca2e88 = 7e3, Socket: λ2ed4ee85319f = WebSocket} = {}) {
  return new Promise(λ16db786f0d00 => {
    let λc873e1c880fe, λ4afb38bf7fb4 = !1;
    const _0x06a923_6 = λ54f0a38a854b => {
      if (!λ4afb38bf7fb4) {
        if (λ4afb38bf7fb4 = !0, clearTimeout(λ5f476d10aaad), λc873e1c880fe) {
          λc873e1c880fe.onmessage = λc873e1c880fe.onerror = λc873e1c880fe.onclose = null;
          try {
            λc873e1c880fe.close();
          } catch {}
        }
        λ16db786f0d00(λ54f0a38a854b);
      }
    }, λ5f476d10aaad = setTimeout(() => _0x06a923_6(!1), λ5454f9ca2e88);
    try {
      λc873e1c880fe = new λ2ed4ee85319f(λ54f0a38a854b), λc873e1c880fe.binaryType = "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72", 
      λc873e1c880fe.onmessage = λ54f0a38a854b => {
        if (!(λ54f0a38a854b.data instanceof ArrayBuffer)) return;
        const λ5454f9ca2e88 = new Uint8Array(λ54f0a38a854b.data);
        λ5454f9ca2e88.length >= 9 && 3 === λ5454f9ca2e88[0] && 0 === new DataView(λ54f0a38a854b.data).getUint32(1, !0) && _0x06a923_6(!0);
      }, λc873e1c880fe.onerror = λc873e1c880fe.onclose = () => _0x06a923_6(!1);
    } catch {
      _0x06a923_6(!1);
    }
  });
}

export class RelayTransport {
  constructor({urls: λ54f0a38a854b, createClient: λ5454f9ca2e88, probe: λ2ed4ee85319f = probeWisp, onStatus: λ16db786f0d00 = () => {}, storage: λc873e1c880fe = globalThis.sessionStorage, monitorMs: λ4afb38bf7fb4 = 3e4, requestTimeoutMs: λ5f476d10aaad = 2e4, rank: λf5dcff6a86bf = async λ54f0a38a854b => λ54f0a38a854b, online: λ7c513ceea6a5 = () => !1 !== globalThis.navigator?.onLine, visible: λ225afaedc6b8 = () => !globalThis.document?.hidden}) {
    Object.assign(this, {
      urls: λ54f0a38a854b,
      createClient: λ5454f9ca2e88,
      probe: λ2ed4ee85319f,
      onStatus: λ16db786f0d00,
      storage: λc873e1c880fe,
      monitorMs: λ4afb38bf7fb4,
      requestTimeoutMs: λ5f476d10aaad,
      rank: λf5dcff6a86bf,
      online: λ7c513ceea6a5,
      visible: λ225afaedc6b8
    }), this.ready = !1, this.closed = !1, this.url = "", this.client = null, this.switching = null, 
    this.failures = 0, this.retired = [];
  }
  async init() {
    await this.select(), this.ready = !0, this.schedule();
  }
  async select(λ54f0a38a854b = "") {
    if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
    if (this.switching) return this.switching;
    if (!this.online()) throw new Error("\x59\x6f\x75\x20\x61\x72\x65\x20\x6f\x66\x66\x6c\x69\x6e\x65\x2e\x20\x52\x65\x63\x6f\x6e\x6e\x65\x63\x74\x20\x74\x6f\x20\x57\x69\x2d\x46\x69\x20\x61\x6e\x64\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x2e");
    let λ5454f9ca2e88 = "";
    try {
      λ5454f9ca2e88 = this.storage?.getItem("\x74\x75\x74\x73\x69\x2e\x77\x6f\x72\x6b\x69\x6e\x67\x52\x65\x6c\x61\x79\x3a" + this.urls.join("\x7c")) || "";
    } catch {}
    const λ2ed4ee85319f = [ ...new Set([ this.url, λ5454f9ca2e88, ...this.urls ]) ].filter(λ5454f9ca2e88 => this.urls.includes(λ5454f9ca2e88) && λ5454f9ca2e88 !== λ54f0a38a854b);
    this.switching = (async () => {
      let λ5454f9ca2e88;
      const λ16db786f0d00 = await Promise.race([ Promise.resolve().then(() => this.rank(λ2ed4ee85319f)).catch(() => λ2ed4ee85319f), new Promise(λ54f0a38a854b => {
        λ5454f9ca2e88 = setTimeout(() => λ54f0a38a854b(λ2ed4ee85319f), 300);
      }) ]).finally(() => clearTimeout(λ5454f9ca2e88));
      for (const λ5454f9ca2e88 of λ16db786f0d00) {
        if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
        if (this.onStatus({
          state: "\x63\x68\x65\x63\x6b\x69\x6e\x67",
          url: λ5454f9ca2e88
        }), !await this.probe(λ5454f9ca2e88)) continue;
        let λ2ed4ee85319f;
        try {
          λ2ed4ee85319f = await this.createClient(λ5454f9ca2e88);
        } catch {
          continue;
        }
        if (this.closed) throw λ2ed4ee85319f.close?.(), new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
        for (this.client && this.retired.push(this.client); this.retired.length > 2; ) try {
          this.retired.shift()?.close?.();
        } catch {}
        this.client = λ2ed4ee85319f, this.url = λ5454f9ca2e88, this.failures = 0;
        try {
          this.storage?.setItem("\x74\x75\x74\x73\x69\x2e\x77\x6f\x72\x6b\x69\x6e\x67\x52\x65\x6c\x61\x79\x3a" + this.urls.join("\x7c"), λ5454f9ca2e88);
        } catch {}
        return void this.onStatus({
          state: λ54f0a38a854b ? "\x73\x77\x69\x74\x63\x68\x65\x64" : "\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64",
          url: λ5454f9ca2e88
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
  async recover(λ54f0a38a854b, λ5454f9ca2e88 = !1, λ2ed4ee85319f = !1) {
    return !(this.closed || !this.online() || this.client === λ54f0a38a854b && (this.switching ? (await this.switching, 
    this.client === λ54f0a38a854b) : !λ5454f9ca2e88 && await this.probe(this.url) || this.client === λ54f0a38a854b && (await this.select(λ2ed4ee85319f ? "" : this.url), 
    this.client === λ54f0a38a854b)));
  }
  async attempt(λ54f0a38a854b, λ5454f9ca2e88) {
    const λ2ed4ee85319f = λ5454f9ca2e88[4], λ16db786f0d00 = new AbortController;
    if (λ2ed4ee85319f?.aborted) throw λ2ed4ee85319f.reason || new DOMException("\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
    let λc873e1c880fe, λ4afb38bf7fb4 = !1, λ5f476d10aaad = !1;
    const λf5dcff6a86bf = λ2ed4ee85319f ? AbortSignal.any([ λ2ed4ee85319f, λ16db786f0d00.signal ]) : λ16db786f0d00.signal, λ7c513ceea6a5 = Promise.resolve().then(() => λ54f0a38a854b.request(...λ5454f9ca2e88.slice(0, 4), λf5dcff6a86bf));
    λ7c513ceea6a5.then(λ54f0a38a854b => {
      λ5f476d10aaad && λf5dcff6a86bf.aborted && λ54f0a38a854b?.body?.cancel?.().catch(() => {});
    }, () => {});
    const λ225afaedc6b8 = new Promise((λ54f0a38a854b, λ5454f9ca2e88) => {
      const _0x06a923_2 = () => λ5454f9ca2e88(λ4afb38bf7fb4 ? Object.assign(new Error("\x52\x65\x6c\x61\x79\x20\x72\x65\x71\x75\x65\x73\x74\x20\x74\x69\x6d\x65\x64\x20\x6f\x75\x74"), {
        name: "\x54\x69\x6d\x65\x6f\x75\x74\x45\x72\x72\x6f\x72"
      }) : λf5dcff6a86bf.reason);
      λf5dcff6a86bf.addEventListener("\x61\x62\x6f\x72\x74", _0x06a923_2, {
        once: !0
      }), λc873e1c880fe = setTimeout(() => {
        λ4afb38bf7fb4 = !0, λ16db786f0d00.abort();
      }, this.requestTimeoutMs), λ7c513ceea6a5.finally(() => λf5dcff6a86bf.removeEventListener("\x61\x62\x6f\x72\x74", _0x06a923_2)).catch(() => {});
    });
    try {
      return await Promise.race([ λ7c513ceea6a5, λ225afaedc6b8 ]);
    } finally {
      λ5f476d10aaad = !0, clearTimeout(λc873e1c880fe);
    }
  }
  async request(...λ54f0a38a854b) {
    if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
    this.ready || await this.init();
    const λ5454f9ca2e88 = this.client;
    try {
      return await this.attempt(λ5454f9ca2e88, λ54f0a38a854b);
    } catch (λ2ed4ee85319f) {
      if (λ54f0a38a854b[4]?.aborted || "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72" === λ2ed4ee85319f?.name) throw λ2ed4ee85319f;
      const λ16db786f0d00 = "\x54\x69\x6d\x65\x6f\x75\x74\x45\x72\x72\x6f\x72" === λ2ed4ee85319f?.name || /timed?\s*out|timeout|ETIMEDOUT|ECONNRESET|network|socket|wisp|hyper.*(?:error|client)|muxtaskended|connection.*(?:closed|reset|lost|failed)|unexpected.*(?:eof|cutoff)|transport.*(?:closed|failed)/i.test(String(λ2ed4ee85319f?.message || λ2ed4ee85319f || ""));
      let λc873e1c880fe = !1;
      try {
        λc873e1c880fe = await this.recover(λ5454f9ca2e88, λ16db786f0d00, λ16db786f0d00);
      } catch {}
      if (λc873e1c880fe && /^(GET|HEAD)$/i.test(String(λ54f0a38a854b[1] || "\x47\x45\x54")) && !λ54f0a38a854b[4]?.aborted && !this.closed && this.online()) return this.attempt(this.client, λ54f0a38a854b);
      throw λ2ed4ee85319f;
    }
  }
  connect(...λ54f0a38a854b) {
    const λ5454f9ca2e88 = this.client, λ2ed4ee85319f = λ54f0a38a854b[6];
    λ54f0a38a854b[6] = (...λ54f0a38a854b) => {
      this.recover(λ5454f9ca2e88).catch(() => {}), λ2ed4ee85319f?.(...λ54f0a38a854b);
    };
    try {
      return λ5454f9ca2e88.connect(...λ54f0a38a854b);
    } catch (λ54f0a38a854b) {
      throw this.recover(λ5454f9ca2e88).catch(() => {}), λ54f0a38a854b;
    }
  }
  async check() {
    if (this.closed || !this.client || !this.online() || !this.visible()) return;
    const λ54f0a38a854b = this.client, λ5454f9ca2e88 = this.url, λ2ed4ee85319f = await this.probe(λ5454f9ca2e88);
    this.closed || λ54f0a38a854b !== this.client || (this.failures = λ2ed4ee85319f ? 0 : this.failures + 1, 
    this.failures >= 2 && await this.recover(λ54f0a38a854b, !0).catch(() => {}));
  }
  schedule() {
    !this.closed && this.monitorMs && (this.timer = setTimeout(async () => {
      await this.check(), this.schedule();
    }, this.monitorMs));
  }
  close() {
    this.closed = !0, clearTimeout(this.timer);
    for (const λ54f0a38a854b of [ this.client, ...this.retired ]) try {
      λ54f0a38a854b?.close?.();
    } catch {}
    this.retired = [];
  }
}

const λ5454f9ca2e88 = new Map;

export async function rankForBlocker(λ54f0a38a854b, λ2ed4ee85319f, {fetcher: λ16db786f0d00 = fetch, onHint: λc873e1c880fe = () => {}} = {}) {
  if (!/^[a-z0-9_-]{1,64}$/.test(λ2ed4ee85319f || "")) return λ54f0a38a854b;
  const λ4afb38bf7fb4 = await Promise.all(λ54f0a38a854b.map(async λ54f0a38a854b => {
    const λc873e1c880fe = new URL(λ54f0a38a854b).hostname;
    if ("\x6c\x6f\x63\x61\x6c\x68\x6f\x73\x74" === λc873e1c880fe || λc873e1c880fe.endsWith("\x2e\x6c\x6f\x63\x61\x6c") || /^[\d.]+$/.test(λc873e1c880fe) || λc873e1c880fe.includes("\x3a")) return {
      url: λ54f0a38a854b,
      blocked: null
    };
    const λ4afb38bf7fb4 = λ2ed4ee85319f + "\x3a" + λc873e1c880fe, λ5f476d10aaad = λ5454f9ca2e88.get(λ4afb38bf7fb4);
    if (λ5f476d10aaad && λ5f476d10aaad.until > Date.now()) return {
      url: λ54f0a38a854b,
      blocked: λ5f476d10aaad.blocked
    };
    let λf5dcff6a86bf = null;
    const λ7c513ceea6a5 = new AbortController, λ225afaedc6b8 = setTimeout(() => λ7c513ceea6a5.abort(), 4e3);
    try {
      const λ54f0a38a854b = await λ16db786f0d00("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6c\x69\x6e\x6b\x2d\x63\x68\x65\x63\x6b\x65\x72\x2f\x63\x68\x65\x63\x6b", {
        method: "\x50\x4f\x53\x54",
        signal: λ7c513ceea6a5.signal,
        headers: {
          "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"
        },
        body: JSON.stringify({
          url: "\x68\x74\x74\x70\x73\x3a\x2f\x2f" + λc873e1c880fe + "\x2f",
          vendor: λ2ed4ee85319f
        })
      });
      if (λ54f0a38a854b.ok) {
        const λ5454f9ca2e88 = await λ54f0a38a854b.json(), λ16db786f0d00 = λ5454f9ca2e88?.vendors?.[λ2ed4ee85319f];
        λ16db786f0d00?.error || "\x62\x6f\x6f\x6c\x65\x61\x6e" != typeof λ16db786f0d00?.blocked || (λf5dcff6a86bf = λ16db786f0d00.blocked);
      }
    } catch {} finally {
      clearTimeout(λ225afaedc6b8);
    }
    return λ5454f9ca2e88.set(λ4afb38bf7fb4, {
      blocked: λf5dcff6a86bf,
      until: Date.now() + (null === λf5dcff6a86bf ? 3e4 : 6e5)
    }), λ5454f9ca2e88.size > 100 && λ5454f9ca2e88.delete(λ5454f9ca2e88.keys().next().value), 
    {
      url: λ54f0a38a854b,
      blocked: λf5dcff6a86bf
    };
  }));
  return λc873e1c880fe({
    vendor: λ2ed4ee85319f,
    results: λ4afb38bf7fb4
  }), λ4afb38bf7fb4.sort((λ54f0a38a854b, λ5454f9ca2e88) => Number(!0 === λ54f0a38a854b.blocked) - Number(!0 === λ5454f9ca2e88.blocked)).map(λ54f0a38a854b => λ54f0a38a854b.url);
}
