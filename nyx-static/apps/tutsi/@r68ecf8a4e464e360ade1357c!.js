import { httpRelayUrl as λ7c74cfccc3fb } from "\x2e\x2f\x40\x72\x36\x39\x34\x62\x61\x38\x32\x65\x39\x34\x34\x31\x37\x38\x64\x65\x36\x38\x66\x39\x62\x66\x38\x64\x21\x2e\x6a\x73";

export function normalizeRelay(λ7c74cfccc3fb, λ78706004ae4f = globalThis.location?.protocol || "\x68\x74\x74\x70\x73\x3a") {
  try {
    const λ6e1893073a92 = new URL(λ7c74cfccc3fb);
    return ![ "\x77\x73\x3a", "\x77\x73\x73\x3a" ].includes(λ6e1893073a92.protocol) || λ6e1893073a92.username || λ6e1893073a92.password || λ6e1893073a92.hash || "\x68\x74\x74\x70\x73\x3a" === λ78706004ae4f && "\x77\x73\x73\x3a" !== λ6e1893073a92.protocol ? "" : λ6e1893073a92.href;
  } catch {
    return "";
  }
}

export function relayCandidates(λ7c74cfccc3fb, λ78706004ae4f = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ6e1893073a92 = location) {
  const λd0dfa6e11260 = `${"\x68\x74\x74\x70\x73\x3a" === λ6e1893073a92.protocol ? "\x77\x73\x73\x3a" : "\x77\x73\x3a"}\x2f\x2f${λ6e1893073a92.host}\x2f\x72\x65\x73\x6f\x75\x72\x63\x65\x73\x2f\x6c\x69\x76\x65\x2f`, λ3edbf3e566f6 = normalizeRelay(λ7c74cfccc3fb.relay, λ6e1893073a92.protocol) || normalizeRelay(λ78706004ae4f.wispUrl, λ6e1893073a92.protocol) || λd0dfa6e11260;
  return !1 === λ7c74cfccc3fb.autoRelay ? [ λ3edbf3e566f6 ] : [ ...new Set([ λ3edbf3e566f6, λd0dfa6e11260, ...Array.isArray(λ78706004ae4f.wispUrls) ? λ78706004ae4f.wispUrls : [], "\x77\x73\x73\x3a\x2f\x2f\x63\x6f\x70\x69\x75\x6d\x2d\x77\x69\x73\x70\x2d\x39\x35\x32\x39\x34\x36\x33\x2e\x6f\x6e\x72\x65\x6e\x64\x65\x72\x2e\x63\x6f\x6d\x2f\x77\x69\x73\x70\x2f" ].map(λ7c74cfccc3fb => normalizeRelay(λ7c74cfccc3fb, λ6e1893073a92.protocol)).filter(Boolean)) ].slice(0, 6);
}

export function transportCandidates(λ78706004ae4f, λ6e1893073a92 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λd0dfa6e11260 = location) {
  const λ3edbf3e566f6 = λ7c74cfccc3fb(λd0dfa6e11260), λb9e4bc3d868c = relayCandidates(λ78706004ae4f, λ6e1893073a92, λd0dfa6e11260);
  return !1 === λ78706004ae4f.httpBridge ? relayCandidates(λ78706004ae4f.relay === λ3edbf3e566f6 ? {
    ...λ78706004ae4f,
    relay: ""
  } : λ78706004ae4f, λ6e1893073a92.wispUrl === λ3edbf3e566f6 ? {
    ...λ6e1893073a92,
    wispUrl: ""
  } : λ6e1893073a92, λd0dfa6e11260).filter(λ7c74cfccc3fb => λ7c74cfccc3fb !== λ3edbf3e566f6) : λ78706004ae4f.relay && λ78706004ae4f.relay !== λ3edbf3e566f6 ? [ ...new Set([ ...λb9e4bc3d868c, ...!1 === λ78706004ae4f.autoRelay ? [] : [ λ3edbf3e566f6 ] ]) ] : [ ...new Set([ λ3edbf3e566f6, ...!1 === λ78706004ae4f.autoRelay ? [] : λb9e4bc3d868c ]) ];
}

export function probeWisp(λ7c74cfccc3fb, {timeout: λ78706004ae4f = 7e3, Socket: λ6e1893073a92 = WebSocket} = {}) {
  return new Promise(λd0dfa6e11260 => {
    let λ3edbf3e566f6, λb9e4bc3d868c = !1;
    const _0x06a923_6 = λ7c74cfccc3fb => {
      if (!λb9e4bc3d868c) {
        if (λb9e4bc3d868c = !0, clearTimeout(λafe774269970), λ3edbf3e566f6) {
          λ3edbf3e566f6.onmessage = λ3edbf3e566f6.onerror = λ3edbf3e566f6.onclose = null;
          try {
            λ3edbf3e566f6.close();
          } catch {}
        }
        λd0dfa6e11260(λ7c74cfccc3fb);
      }
    }, λafe774269970 = setTimeout(() => _0x06a923_6(!1), λ78706004ae4f);
    try {
      λ3edbf3e566f6 = new λ6e1893073a92(λ7c74cfccc3fb), λ3edbf3e566f6.binaryType = "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72", 
      λ3edbf3e566f6.onmessage = λ7c74cfccc3fb => {
        if (!(λ7c74cfccc3fb.data instanceof ArrayBuffer)) return;
        const λ78706004ae4f = new Uint8Array(λ7c74cfccc3fb.data);
        λ78706004ae4f.length >= 9 && 3 === λ78706004ae4f[0] && 0 === new DataView(λ7c74cfccc3fb.data).getUint32(1, !0) && _0x06a923_6(!0);
      }, λ3edbf3e566f6.onerror = λ3edbf3e566f6.onclose = () => _0x06a923_6(!1);
    } catch {
      _0x06a923_6(!1);
    }
  });
}

export class RelayTransport {
  constructor({urls: λ7c74cfccc3fb, createClient: λ78706004ae4f, probe: λ6e1893073a92 = probeWisp, onStatus: λd0dfa6e11260 = () => {}, storage: λ3edbf3e566f6 = globalThis.sessionStorage, monitorMs: λb9e4bc3d868c = 3e4, requestTimeoutMs: λafe774269970 = 2e4, rank: λ9ba8f126805c = async λ7c74cfccc3fb => λ7c74cfccc3fb, online: λ2e72b8420d38 = () => !1 !== globalThis.navigator?.onLine, visible: λ4cb9e58e991b = () => !globalThis.document?.hidden}) {
    Object.assign(this, {
      urls: λ7c74cfccc3fb,
      createClient: λ78706004ae4f,
      probe: λ6e1893073a92,
      onStatus: λd0dfa6e11260,
      storage: λ3edbf3e566f6,
      monitorMs: λb9e4bc3d868c,
      requestTimeoutMs: λafe774269970,
      rank: λ9ba8f126805c,
      online: λ2e72b8420d38,
      visible: λ4cb9e58e991b
    }), this.ready = !1, this.closed = !1, this.url = "", this.client = null, this.switching = null, 
    this.failures = 0, this.retired = [];
  }
  async init() {
    await this.select(), this.ready = !0, this.schedule();
  }
  async select(λ7c74cfccc3fb = "") {
    if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
    if (this.switching) return this.switching;
    if (!this.online()) throw new Error("\x59\x6f\x75\x20\x61\x72\x65\x20\x6f\x66\x66\x6c\x69\x6e\x65\x2e\x20\x52\x65\x63\x6f\x6e\x6e\x65\x63\x74\x20\x74\x6f\x20\x57\x69\x2d\x46\x69\x20\x61\x6e\x64\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x2e");
    let λ78706004ae4f = "";
    try {
      λ78706004ae4f = this.storage?.getItem("\x74\x75\x74\x73\x69\x2e\x77\x6f\x72\x6b\x69\x6e\x67\x52\x65\x6c\x61\x79\x3a" + this.urls.join("\x7c")) || "";
    } catch {}
    const λ6e1893073a92 = [ ...new Set([ this.url, λ78706004ae4f, ...this.urls ]) ].filter(λ78706004ae4f => this.urls.includes(λ78706004ae4f) && λ78706004ae4f !== λ7c74cfccc3fb);
    this.switching = (async () => {
      let λ78706004ae4f;
      const λd0dfa6e11260 = await Promise.race([ Promise.resolve().then(() => this.rank(λ6e1893073a92)).catch(() => λ6e1893073a92), new Promise(λ7c74cfccc3fb => {
        λ78706004ae4f = setTimeout(() => λ7c74cfccc3fb(λ6e1893073a92), 300);
      }) ]).finally(() => clearTimeout(λ78706004ae4f));
      for (const λ78706004ae4f of λd0dfa6e11260) {
        if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
        if (this.onStatus({
          state: "\x63\x68\x65\x63\x6b\x69\x6e\x67",
          url: λ78706004ae4f
        }), !await this.probe(λ78706004ae4f)) continue;
        let λ6e1893073a92;
        try {
          λ6e1893073a92 = await this.createClient(λ78706004ae4f);
        } catch {
          continue;
        }
        if (this.closed) throw λ6e1893073a92.close?.(), new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
        for (this.client && this.retired.push(this.client); this.retired.length > 2; ) try {
          this.retired.shift()?.close?.();
        } catch {}
        this.client = λ6e1893073a92, this.url = λ78706004ae4f, this.failures = 0;
        try {
          this.storage?.setItem("\x74\x75\x74\x73\x69\x2e\x77\x6f\x72\x6b\x69\x6e\x67\x52\x65\x6c\x61\x79\x3a" + this.urls.join("\x7c"), λ78706004ae4f);
        } catch {}
        return void this.onStatus({
          state: λ7c74cfccc3fb ? "\x73\x77\x69\x74\x63\x68\x65\x64" : "\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64",
          url: λ78706004ae4f
        });
      }
      throw this.onStatus({
        state: "\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65",
        url: ""
      }), new Error("\x4e\x6f\x20\x63\x6f\x6e\x66\x69\x67\x75\x72\x65\x64\x20\x57\x69\x73\x70\x20\x72\x65\x6c\x61\x79\x20\x69\x73\x20\x72\x65\x61\x63\x68\x61\x62\x6c\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x69\x73\x20\x64\x65\x76\x69\x63\x65\x2e\x20\x54\x72\x79\x20\x61\x67\x61\x69\x6e\x20\x6f\x72\x20\x63\x68\x61\x6e\x67\x65\x20\x74\x68\x65\x20\x72\x65\x6c\x61\x79\x20\x69\x6e\x20\x53\x65\x74\x74\x69\x6e\x67\x73\x2e");
    })();
    try {
      return await this.switching;
    } finally {
      this.switching = null;
    }
  }
  async recover(λ7c74cfccc3fb, λ78706004ae4f = !1, λ6e1893073a92 = !1) {
    return !(this.closed || !this.online() || this.client === λ7c74cfccc3fb && (this.switching ? (await this.switching, 
    this.client === λ7c74cfccc3fb) : !λ78706004ae4f && await this.probe(this.url) || this.client === λ7c74cfccc3fb && (await this.select(λ6e1893073a92 ? "" : this.url), 
    this.client === λ7c74cfccc3fb)));
  }
  async attempt(λ7c74cfccc3fb, λ78706004ae4f) {
    const λ6e1893073a92 = λ78706004ae4f[4], λd0dfa6e11260 = new AbortController;
    if (λ6e1893073a92?.aborted) throw λ6e1893073a92.reason || new DOMException("\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
    let λ3edbf3e566f6, λb9e4bc3d868c = !1, λafe774269970 = !1;
    const λ9ba8f126805c = λ6e1893073a92 ? AbortSignal.any([ λ6e1893073a92, λd0dfa6e11260.signal ]) : λd0dfa6e11260.signal, λ2e72b8420d38 = Promise.resolve().then(() => λ7c74cfccc3fb.request(...λ78706004ae4f.slice(0, 4), λ9ba8f126805c));
    λ2e72b8420d38.then(λ7c74cfccc3fb => {
      λafe774269970 && λ9ba8f126805c.aborted && λ7c74cfccc3fb?.body?.cancel?.().catch(() => {});
    }, () => {});
    const λ4cb9e58e991b = new Promise((λ7c74cfccc3fb, λ78706004ae4f) => {
      const _0x06a923_2 = () => λ78706004ae4f(λb9e4bc3d868c ? Object.assign(new Error("\x52\x65\x6c\x61\x79\x20\x72\x65\x71\x75\x65\x73\x74\x20\x74\x69\x6d\x65\x64\x20\x6f\x75\x74"), {
        name: "\x54\x69\x6d\x65\x6f\x75\x74\x45\x72\x72\x6f\x72"
      }) : λ9ba8f126805c.reason);
      λ9ba8f126805c.addEventListener("\x61\x62\x6f\x72\x74", _0x06a923_2, {
        once: !0
      }), λ3edbf3e566f6 = setTimeout(() => {
        λb9e4bc3d868c = !0, λd0dfa6e11260.abort();
      }, this.requestTimeoutMs), λ2e72b8420d38.finally(() => λ9ba8f126805c.removeEventListener("\x61\x62\x6f\x72\x74", _0x06a923_2)).catch(() => {});
    });
    try {
      return await Promise.race([ λ2e72b8420d38, λ4cb9e58e991b ]);
    } finally {
      λafe774269970 = !0, clearTimeout(λ3edbf3e566f6);
    }
  }
  async request(...λ7c74cfccc3fb) {
    if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
    this.ready || await this.init();
    const λ78706004ae4f = this.client;
    try {
      return await this.attempt(λ78706004ae4f, λ7c74cfccc3fb);
    } catch (λ6e1893073a92) {
      if (λ7c74cfccc3fb[4]?.aborted || "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72" === λ6e1893073a92?.name) throw λ6e1893073a92;
      const λd0dfa6e11260 = "\x54\x69\x6d\x65\x6f\x75\x74\x45\x72\x72\x6f\x72" === λ6e1893073a92?.name || /timed?\s*out|timeout|ETIMEDOUT|ECONNRESET|network|socket|wisp|hyper.*(?:error|client)|muxtaskended|connection.*(?:closed|reset|lost|failed)|unexpected.*(?:eof|cutoff)|transport.*(?:closed|failed)/i.test(String(λ6e1893073a92?.message || λ6e1893073a92 || ""));
      let λ3edbf3e566f6 = !1;
      try {
        λ3edbf3e566f6 = await this.recover(λ78706004ae4f, λd0dfa6e11260, λd0dfa6e11260);
      } catch {}
      if (λ3edbf3e566f6 && /^(GET|HEAD)$/i.test(String(λ7c74cfccc3fb[1] || "\x47\x45\x54")) && !λ7c74cfccc3fb[4]?.aborted && !this.closed && this.online()) return this.attempt(this.client, λ7c74cfccc3fb);
      throw λ6e1893073a92;
    }
  }
  connect(...λ7c74cfccc3fb) {
    const λ78706004ae4f = this.client, λ6e1893073a92 = λ7c74cfccc3fb[6];
    λ7c74cfccc3fb[6] = (...λ7c74cfccc3fb) => {
      this.recover(λ78706004ae4f).catch(() => {}), λ6e1893073a92?.(...λ7c74cfccc3fb);
    };
    try {
      return λ78706004ae4f.connect(...λ7c74cfccc3fb);
    } catch (λ7c74cfccc3fb) {
      throw this.recover(λ78706004ae4f).catch(() => {}), λ7c74cfccc3fb;
    }
  }
  async check() {
    if (this.closed || !this.client || !this.online() || !this.visible()) return;
    const λ7c74cfccc3fb = this.client, λ78706004ae4f = this.url, λ6e1893073a92 = await this.probe(λ78706004ae4f);
    this.closed || λ7c74cfccc3fb !== this.client || (this.failures = λ6e1893073a92 ? 0 : this.failures + 1, 
    this.failures >= 2 && await this.recover(λ7c74cfccc3fb, !0).catch(() => {}));
  }
  schedule() {
    !this.closed && this.monitorMs && (this.timer = setTimeout(async () => {
      await this.check(), this.schedule();
    }, this.monitorMs));
  }
  close() {
    this.closed = !0, clearTimeout(this.timer);
    for (const λ7c74cfccc3fb of [ this.client, ...this.retired ]) try {
      λ7c74cfccc3fb?.close?.();
    } catch {}
    this.retired = [];
  }
}

const λ78706004ae4f = new Map;

export async function rankForBlocker(λ7c74cfccc3fb, λ6e1893073a92, {fetcher: λd0dfa6e11260 = fetch, onHint: λ3edbf3e566f6 = () => {}} = {}) {
  if (!/^[a-z0-9_-]{1,64}$/.test(λ6e1893073a92 || "")) return λ7c74cfccc3fb;
  const λb9e4bc3d868c = await Promise.all(λ7c74cfccc3fb.map(async λ7c74cfccc3fb => {
    const λ3edbf3e566f6 = new URL(λ7c74cfccc3fb).hostname;
    if ("\x6c\x6f\x63\x61\x6c\x68\x6f\x73\x74" === λ3edbf3e566f6 || λ3edbf3e566f6.endsWith("\x2e\x6c\x6f\x63\x61\x6c") || /^[\d.]+$/.test(λ3edbf3e566f6) || λ3edbf3e566f6.includes("\x3a")) return {
      url: λ7c74cfccc3fb,
      blocked: null
    };
    const λb9e4bc3d868c = λ6e1893073a92 + "\x3a" + λ3edbf3e566f6, λafe774269970 = λ78706004ae4f.get(λb9e4bc3d868c);
    if (λafe774269970 && λafe774269970.until > Date.now()) return {
      url: λ7c74cfccc3fb,
      blocked: λafe774269970.blocked
    };
    let λ9ba8f126805c = null;
    const λ2e72b8420d38 = new AbortController, λ4cb9e58e991b = setTimeout(() => λ2e72b8420d38.abort(), 4e3);
    try {
      const λ7c74cfccc3fb = await λd0dfa6e11260("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6c\x69\x6e\x6b\x2d\x63\x68\x65\x63\x6b\x65\x72\x2f\x63\x68\x65\x63\x6b", {
        method: "\x50\x4f\x53\x54",
        signal: λ2e72b8420d38.signal,
        headers: {
          "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"
        },
        body: JSON.stringify({
          url: "\x68\x74\x74\x70\x73\x3a\x2f\x2f" + λ3edbf3e566f6 + "\x2f",
          vendor: λ6e1893073a92
        })
      });
      if (λ7c74cfccc3fb.ok) {
        const λ78706004ae4f = await λ7c74cfccc3fb.json(), λd0dfa6e11260 = λ78706004ae4f?.vendors?.[λ6e1893073a92];
        λd0dfa6e11260?.error || "\x62\x6f\x6f\x6c\x65\x61\x6e" != typeof λd0dfa6e11260?.blocked || (λ9ba8f126805c = λd0dfa6e11260.blocked);
      }
    } catch {} finally {
      clearTimeout(λ4cb9e58e991b);
    }
    return λ78706004ae4f.set(λb9e4bc3d868c, {
      blocked: λ9ba8f126805c,
      until: Date.now() + (null === λ9ba8f126805c ? 3e4 : 6e5)
    }), λ78706004ae4f.size > 100 && λ78706004ae4f.delete(λ78706004ae4f.keys().next().value), 
    {
      url: λ7c74cfccc3fb,
      blocked: λ9ba8f126805c
    };
  }));
  return λ3edbf3e566f6({
    vendor: λ6e1893073a92,
    results: λb9e4bc3d868c
  }), λb9e4bc3d868c.sort((λ7c74cfccc3fb, λ78706004ae4f) => Number(!0 === λ7c74cfccc3fb.blocked) - Number(!0 === λ78706004ae4f.blocked)).map(λ7c74cfccc3fb => λ7c74cfccc3fb.url);
}
