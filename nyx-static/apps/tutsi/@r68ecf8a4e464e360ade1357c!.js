import { httpRelayUrl as λdc39482463f1 } from "\x2e\x2f\x40\x72\x36\x39\x34\x62\x61\x38\x32\x65\x39\x34\x34\x31\x37\x38\x64\x65\x36\x38\x66\x39\x62\x66\x38\x64\x21\x2e\x6a\x73";

export function normalizeRelay(λdc39482463f1, λ2b030af38860 = globalThis.location?.protocol || "\x68\x74\x74\x70\x73\x3a") {
  try {
    const λc2f0668a6dad = new URL(λdc39482463f1);
    return ![ "\x77\x73\x3a", "\x77\x73\x73\x3a" ].includes(λc2f0668a6dad.protocol) || λc2f0668a6dad.username || λc2f0668a6dad.password || λc2f0668a6dad.hash || "\x68\x74\x74\x70\x73\x3a" === λ2b030af38860 && "\x77\x73\x73\x3a" !== λc2f0668a6dad.protocol ? "" : λc2f0668a6dad.href;
  } catch {
    return "";
  }
}

export function relayCandidates(λdc39482463f1, λ2b030af38860 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λc2f0668a6dad = location) {
  const λef8e6ad88c3e = `${"\x68\x74\x74\x70\x73\x3a" === λc2f0668a6dad.protocol ? "\x77\x73\x73\x3a" : "\x77\x73\x3a"}\x2f\x2f${λc2f0668a6dad.host}\x2f\x72\x65\x73\x6f\x75\x72\x63\x65\x73\x2f\x6c\x69\x76\x65\x2f`, λ920dc959ab2d = normalizeRelay(λdc39482463f1.relay, λc2f0668a6dad.protocol) || normalizeRelay(λ2b030af38860.wispUrl, λc2f0668a6dad.protocol) || λef8e6ad88c3e;
  return !1 === λdc39482463f1.autoRelay ? [ λ920dc959ab2d ] : [ ...new Set([ λ920dc959ab2d, λef8e6ad88c3e, ...Array.isArray(λ2b030af38860.wispUrls) ? λ2b030af38860.wispUrls : [], "\x77\x73\x73\x3a\x2f\x2f\x63\x6f\x70\x69\x75\x6d\x2d\x77\x69\x73\x70\x2d\x39\x35\x32\x39\x34\x36\x33\x2e\x6f\x6e\x72\x65\x6e\x64\x65\x72\x2e\x63\x6f\x6d\x2f\x77\x69\x73\x70\x2f" ].map(λdc39482463f1 => normalizeRelay(λdc39482463f1, λc2f0668a6dad.protocol)).filter(Boolean)) ].slice(0, 6);
}

export function transportCandidates(λ2b030af38860, λc2f0668a6dad = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λef8e6ad88c3e = location) {
  const λ920dc959ab2d = λdc39482463f1(λef8e6ad88c3e), λ97850d0475f4 = relayCandidates(λ2b030af38860, λc2f0668a6dad, λef8e6ad88c3e);
  return !1 === λ2b030af38860.httpBridge ? relayCandidates(λ2b030af38860.relay === λ920dc959ab2d ? {
    ...λ2b030af38860,
    relay: ""
  } : λ2b030af38860, λc2f0668a6dad.wispUrl === λ920dc959ab2d ? {
    ...λc2f0668a6dad,
    wispUrl: ""
  } : λc2f0668a6dad, λef8e6ad88c3e).filter(λdc39482463f1 => λdc39482463f1 !== λ920dc959ab2d) : λ2b030af38860.relay && λ2b030af38860.relay !== λ920dc959ab2d ? [ ...new Set([ ...λ97850d0475f4, ...!1 === λ2b030af38860.autoRelay ? [] : [ λ920dc959ab2d ] ]) ] : [ ...new Set([ λ920dc959ab2d, ...!1 === λ2b030af38860.autoRelay ? [] : λ97850d0475f4 ]) ];
}

export function probeWisp(λdc39482463f1, {timeout: λ2b030af38860 = 7e3, Socket: λc2f0668a6dad = WebSocket} = {}) {
  return new Promise(λef8e6ad88c3e => {
    let λ920dc959ab2d, λ97850d0475f4 = !1;
    const _0x06a923_6 = λdc39482463f1 => {
      if (!λ97850d0475f4) {
        if (λ97850d0475f4 = !0, clearTimeout(λ2348e3009d5c), λ920dc959ab2d) {
          λ920dc959ab2d.onmessage = λ920dc959ab2d.onerror = λ920dc959ab2d.onclose = null;
          try {
            λ920dc959ab2d.close();
          } catch {}
        }
        λef8e6ad88c3e(λdc39482463f1);
      }
    }, λ2348e3009d5c = setTimeout(() => _0x06a923_6(!1), λ2b030af38860);
    try {
      λ920dc959ab2d = new λc2f0668a6dad(λdc39482463f1), λ920dc959ab2d.binaryType = "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72", 
      λ920dc959ab2d.onmessage = λdc39482463f1 => {
        if (!(λdc39482463f1.data instanceof ArrayBuffer)) return;
        const λ2b030af38860 = new Uint8Array(λdc39482463f1.data);
        λ2b030af38860.length >= 9 && 3 === λ2b030af38860[0] && 0 === new DataView(λdc39482463f1.data).getUint32(1, !0) && _0x06a923_6(!0);
      }, λ920dc959ab2d.onerror = λ920dc959ab2d.onclose = () => _0x06a923_6(!1);
    } catch {
      _0x06a923_6(!1);
    }
  });
}

export class RelayTransport {
  constructor({urls: λdc39482463f1, createClient: λ2b030af38860, probe: λc2f0668a6dad = probeWisp, onStatus: λef8e6ad88c3e = () => {}, storage: λ920dc959ab2d = globalThis.sessionStorage, monitorMs: λ97850d0475f4 = 3e4, requestTimeoutMs: λ2348e3009d5c = 2e4, rank: λd7e1864ed9f0 = async λdc39482463f1 => λdc39482463f1, online: λ7121fc3328e1 = () => !1 !== globalThis.navigator?.onLine, visible: λ843c45205e4c = () => !globalThis.document?.hidden}) {
    Object.assign(this, {
      urls: λdc39482463f1,
      createClient: λ2b030af38860,
      probe: λc2f0668a6dad,
      onStatus: λef8e6ad88c3e,
      storage: λ920dc959ab2d,
      monitorMs: λ97850d0475f4,
      requestTimeoutMs: λ2348e3009d5c,
      rank: λd7e1864ed9f0,
      online: λ7121fc3328e1,
      visible: λ843c45205e4c
    }), this.ready = !1, this.closed = !1, this.url = "", this.client = null, this.switching = null, 
    this.failures = 0, this.retired = [];
  }
  async init() {
    await this.select(), this.ready = !0, this.schedule();
  }
  async select(λdc39482463f1 = "") {
    if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
    if (this.switching) return this.switching;
    if (!this.online()) throw new Error("\x59\x6f\x75\x20\x61\x72\x65\x20\x6f\x66\x66\x6c\x69\x6e\x65\x2e\x20\x52\x65\x63\x6f\x6e\x6e\x65\x63\x74\x20\x74\x6f\x20\x57\x69\x2d\x46\x69\x20\x61\x6e\x64\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x2e");
    let λ2b030af38860 = "";
    try {
      λ2b030af38860 = this.storage?.getItem("\x74\x75\x74\x73\x69\x2e\x77\x6f\x72\x6b\x69\x6e\x67\x52\x65\x6c\x61\x79\x3a" + this.urls.join("\x7c")) || "";
    } catch {}
    const λc2f0668a6dad = [ ...new Set([ this.url, λ2b030af38860, ...this.urls ]) ].filter(λ2b030af38860 => this.urls.includes(λ2b030af38860) && λ2b030af38860 !== λdc39482463f1);
    this.switching = (async () => {
      let λ2b030af38860;
      const λef8e6ad88c3e = await Promise.race([ Promise.resolve().then(() => this.rank(λc2f0668a6dad)).catch(() => λc2f0668a6dad), new Promise(λdc39482463f1 => {
        λ2b030af38860 = setTimeout(() => λdc39482463f1(λc2f0668a6dad), 300);
      }) ]).finally(() => clearTimeout(λ2b030af38860));
      for (const λ2b030af38860 of λef8e6ad88c3e) {
        if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
        if (this.onStatus({
          state: "\x63\x68\x65\x63\x6b\x69\x6e\x67",
          url: λ2b030af38860
        }), !await this.probe(λ2b030af38860)) continue;
        let λc2f0668a6dad;
        try {
          λc2f0668a6dad = await this.createClient(λ2b030af38860);
        } catch {
          continue;
        }
        if (this.closed) throw λc2f0668a6dad.close?.(), new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
        for (this.client && this.retired.push(this.client); this.retired.length > 2; ) try {
          this.retired.shift()?.close?.();
        } catch {}
        this.client = λc2f0668a6dad, this.url = λ2b030af38860, this.failures = 0;
        try {
          this.storage?.setItem("\x74\x75\x74\x73\x69\x2e\x77\x6f\x72\x6b\x69\x6e\x67\x52\x65\x6c\x61\x79\x3a" + this.urls.join("\x7c"), λ2b030af38860);
        } catch {}
        return void this.onStatus({
          state: λdc39482463f1 ? "\x73\x77\x69\x74\x63\x68\x65\x64" : "\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64",
          url: λ2b030af38860
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
  async recover(λdc39482463f1, λ2b030af38860 = !1, λc2f0668a6dad = !1) {
    return !(this.closed || !this.online() || this.client === λdc39482463f1 && (this.switching ? (await this.switching, 
    this.client === λdc39482463f1) : !λ2b030af38860 && await this.probe(this.url) || this.client === λdc39482463f1 && (await this.select(λc2f0668a6dad ? "" : this.url), 
    this.client === λdc39482463f1)));
  }
  async attempt(λdc39482463f1, λ2b030af38860) {
    const λc2f0668a6dad = λ2b030af38860[4], λef8e6ad88c3e = new AbortController;
    if (λc2f0668a6dad?.aborted) throw λc2f0668a6dad.reason || new DOMException("\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
    let λ920dc959ab2d, λ97850d0475f4 = !1, λ2348e3009d5c = !1;
    const λd7e1864ed9f0 = λc2f0668a6dad ? AbortSignal.any([ λc2f0668a6dad, λef8e6ad88c3e.signal ]) : λef8e6ad88c3e.signal, λ7121fc3328e1 = Promise.resolve().then(() => λdc39482463f1.request(...λ2b030af38860.slice(0, 4), λd7e1864ed9f0));
    λ7121fc3328e1.then(λdc39482463f1 => {
      λ2348e3009d5c && λd7e1864ed9f0.aborted && λdc39482463f1?.body?.cancel?.().catch(() => {});
    }, () => {});
    const λ843c45205e4c = new Promise((λdc39482463f1, λ2b030af38860) => {
      const _0x06a923_2 = () => λ2b030af38860(λ97850d0475f4 ? Object.assign(new Error("\x52\x65\x6c\x61\x79\x20\x72\x65\x71\x75\x65\x73\x74\x20\x74\x69\x6d\x65\x64\x20\x6f\x75\x74"), {
        name: "\x54\x69\x6d\x65\x6f\x75\x74\x45\x72\x72\x6f\x72"
      }) : λd7e1864ed9f0.reason);
      λd7e1864ed9f0.addEventListener("\x61\x62\x6f\x72\x74", _0x06a923_2, {
        once: !0
      }), λ920dc959ab2d = setTimeout(() => {
        λ97850d0475f4 = !0, λef8e6ad88c3e.abort();
      }, this.requestTimeoutMs), λ7121fc3328e1.finally(() => λd7e1864ed9f0.removeEventListener("\x61\x62\x6f\x72\x74", _0x06a923_2)).catch(() => {});
    });
    try {
      return await Promise.race([ λ7121fc3328e1, λ843c45205e4c ]);
    } finally {
      λ2348e3009d5c = !0, clearTimeout(λ920dc959ab2d);
    }
  }
  async request(...λdc39482463f1) {
    if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
    this.ready || await this.init();
    const λ2b030af38860 = this.client;
    try {
      return await this.attempt(λ2b030af38860, λdc39482463f1);
    } catch (λc2f0668a6dad) {
      if (λdc39482463f1[4]?.aborted || "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72" === λc2f0668a6dad?.name) throw λc2f0668a6dad;
      const λef8e6ad88c3e = "\x54\x69\x6d\x65\x6f\x75\x74\x45\x72\x72\x6f\x72" === λc2f0668a6dad?.name || /timed?\s*out|timeout|ETIMEDOUT|ECONNRESET|network|socket|wisp|hyper.*(?:error|client)|muxtaskended|connection.*(?:closed|reset|lost|failed)|unexpected.*(?:eof|cutoff)|transport.*(?:closed|failed)/i.test(String(λc2f0668a6dad?.message || λc2f0668a6dad || ""));
      let λ920dc959ab2d = !1;
      try {
        λ920dc959ab2d = await this.recover(λ2b030af38860, λef8e6ad88c3e, λef8e6ad88c3e);
      } catch {}
      if (λ920dc959ab2d && /^(GET|HEAD)$/i.test(String(λdc39482463f1[1] || "\x47\x45\x54")) && !λdc39482463f1[4]?.aborted && !this.closed && this.online()) return this.attempt(this.client, λdc39482463f1);
      throw λc2f0668a6dad;
    }
  }
  connect(...λdc39482463f1) {
    const λ2b030af38860 = this.client, λc2f0668a6dad = λdc39482463f1[6];
    λdc39482463f1[6] = (...λdc39482463f1) => {
      this.recover(λ2b030af38860).catch(() => {}), λc2f0668a6dad?.(...λdc39482463f1);
    };
    try {
      return λ2b030af38860.connect(...λdc39482463f1);
    } catch (λdc39482463f1) {
      throw this.recover(λ2b030af38860).catch(() => {}), λdc39482463f1;
    }
  }
  async check() {
    if (this.closed || !this.client || !this.online() || !this.visible()) return;
    const λdc39482463f1 = this.client, λ2b030af38860 = this.url, λc2f0668a6dad = await this.probe(λ2b030af38860);
    this.closed || λdc39482463f1 !== this.client || (this.failures = λc2f0668a6dad ? 0 : this.failures + 1, 
    this.failures >= 2 && await this.recover(λdc39482463f1, !0).catch(() => {}));
  }
  schedule() {
    !this.closed && this.monitorMs && (this.timer = setTimeout(async () => {
      await this.check(), this.schedule();
    }, this.monitorMs));
  }
  close() {
    this.closed = !0, clearTimeout(this.timer);
    for (const λdc39482463f1 of [ this.client, ...this.retired ]) try {
      λdc39482463f1?.close?.();
    } catch {}
    this.retired = [];
  }
}

const λ2b030af38860 = new Map;

export async function rankForBlocker(λdc39482463f1, λc2f0668a6dad, {fetcher: λef8e6ad88c3e = fetch, onHint: λ920dc959ab2d = () => {}} = {}) {
  if (!/^[a-z0-9_-]{1,64}$/.test(λc2f0668a6dad || "")) return λdc39482463f1;
  const λ97850d0475f4 = await Promise.all(λdc39482463f1.map(async λdc39482463f1 => {
    const λ920dc959ab2d = new URL(λdc39482463f1).hostname;
    if ("\x6c\x6f\x63\x61\x6c\x68\x6f\x73\x74" === λ920dc959ab2d || λ920dc959ab2d.endsWith("\x2e\x6c\x6f\x63\x61\x6c") || /^[\d.]+$/.test(λ920dc959ab2d) || λ920dc959ab2d.includes("\x3a")) return {
      url: λdc39482463f1,
      blocked: null
    };
    const λ97850d0475f4 = λc2f0668a6dad + "\x3a" + λ920dc959ab2d, λ2348e3009d5c = λ2b030af38860.get(λ97850d0475f4);
    if (λ2348e3009d5c && λ2348e3009d5c.until > Date.now()) return {
      url: λdc39482463f1,
      blocked: λ2348e3009d5c.blocked
    };
    let λd7e1864ed9f0 = null;
    const λ7121fc3328e1 = new AbortController, λ843c45205e4c = setTimeout(() => λ7121fc3328e1.abort(), 4e3);
    try {
      const λdc39482463f1 = await λef8e6ad88c3e("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6c\x69\x6e\x6b\x2d\x63\x68\x65\x63\x6b\x65\x72\x2f\x63\x68\x65\x63\x6b", {
        method: "\x50\x4f\x53\x54",
        signal: λ7121fc3328e1.signal,
        headers: {
          "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"
        },
        body: JSON.stringify({
          url: "\x68\x74\x74\x70\x73\x3a\x2f\x2f" + λ920dc959ab2d + "\x2f",
          vendor: λc2f0668a6dad
        })
      });
      if (λdc39482463f1.ok) {
        const λ2b030af38860 = await λdc39482463f1.json(), λef8e6ad88c3e = λ2b030af38860?.vendors?.[λc2f0668a6dad];
        λef8e6ad88c3e?.error || "\x62\x6f\x6f\x6c\x65\x61\x6e" != typeof λef8e6ad88c3e?.blocked || (λd7e1864ed9f0 = λef8e6ad88c3e.blocked);
      }
    } catch {} finally {
      clearTimeout(λ843c45205e4c);
    }
    return λ2b030af38860.set(λ97850d0475f4, {
      blocked: λd7e1864ed9f0,
      until: Date.now() + (null === λd7e1864ed9f0 ? 3e4 : 6e5)
    }), λ2b030af38860.size > 100 && λ2b030af38860.delete(λ2b030af38860.keys().next().value), 
    {
      url: λdc39482463f1,
      blocked: λd7e1864ed9f0
    };
  }));
  return λ920dc959ab2d({
    vendor: λc2f0668a6dad,
    results: λ97850d0475f4
  }), λ97850d0475f4.sort((λdc39482463f1, λ2b030af38860) => Number(!0 === λdc39482463f1.blocked) - Number(!0 === λ2b030af38860.blocked)).map(λdc39482463f1 => λdc39482463f1.url);
}
