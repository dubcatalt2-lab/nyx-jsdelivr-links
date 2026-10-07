import { httpRelayUrl as λ11b869468258 } from "\x2e\x2f\x40\x72\x36\x39\x34\x62\x61\x38\x32\x65\x39\x34\x34\x31\x37\x38\x64\x65\x36\x38\x66\x39\x62\x66\x38\x64\x21\x2e\x6a\x73";

export function normalizeRelay(λ11b869468258, λ9a021453f2f3 = globalThis.location?.protocol || "\x68\x74\x74\x70\x73\x3a") {
  try {
    const λf08268171a73 = new URL(λ11b869468258);
    return ![ "\x77\x73\x3a", "\x77\x73\x73\x3a" ].includes(λf08268171a73.protocol) || λf08268171a73.username || λf08268171a73.password || λf08268171a73.hash || "\x68\x74\x74\x70\x73\x3a" === λ9a021453f2f3 && "\x77\x73\x73\x3a" !== λf08268171a73.protocol ? "" : λf08268171a73.href;
  } catch {
    return "";
  }
}

export function relayCandidates(λ11b869468258, λ9a021453f2f3 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λf08268171a73 = location) {
  const λ94b93097f507 = `${"\x68\x74\x74\x70\x73\x3a" === λf08268171a73.protocol ? "\x77\x73\x73\x3a" : "\x77\x73\x3a"}\x2f\x2f${λf08268171a73.host}\x2f\x72\x65\x73\x6f\x75\x72\x63\x65\x73\x2f\x6c\x69\x76\x65\x2f`, λcb64696a450a = normalizeRelay(λ11b869468258.relay, λf08268171a73.protocol) || normalizeRelay(λ9a021453f2f3.wispUrl, λf08268171a73.protocol) || λ94b93097f507;
  return !1 === λ11b869468258.autoRelay ? [ λcb64696a450a ] : [ ...new Set([ λcb64696a450a, λ94b93097f507, ...Array.isArray(λ9a021453f2f3.wispUrls) ? λ9a021453f2f3.wispUrls : [], "\x77\x73\x73\x3a\x2f\x2f\x63\x6f\x70\x69\x75\x6d\x2d\x77\x69\x73\x70\x2d\x39\x35\x32\x39\x34\x36\x33\x2e\x6f\x6e\x72\x65\x6e\x64\x65\x72\x2e\x63\x6f\x6d\x2f\x77\x69\x73\x70\x2f" ].map(λ11b869468258 => normalizeRelay(λ11b869468258, λf08268171a73.protocol)).filter(Boolean)) ].slice(0, 6);
}

export function transportCandidates(λ9a021453f2f3, λf08268171a73 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ94b93097f507 = location) {
  const λcb64696a450a = λ11b869468258(λ94b93097f507), λf84e5dc4d122 = relayCandidates(λ9a021453f2f3, λf08268171a73, λ94b93097f507);
  return !1 === λ9a021453f2f3.httpBridge ? relayCandidates(λ9a021453f2f3.relay === λcb64696a450a ? {
    ...λ9a021453f2f3,
    relay: ""
  } : λ9a021453f2f3, λf08268171a73.wispUrl === λcb64696a450a ? {
    ...λf08268171a73,
    wispUrl: ""
  } : λf08268171a73, λ94b93097f507).filter(λ11b869468258 => λ11b869468258 !== λcb64696a450a) : λ9a021453f2f3.relay && λ9a021453f2f3.relay !== λcb64696a450a ? [ ...new Set([ ...λf84e5dc4d122, ...!1 === λ9a021453f2f3.autoRelay ? [] : [ λcb64696a450a ] ]) ] : [ ...new Set([ λcb64696a450a, ...!1 === λ9a021453f2f3.autoRelay ? [] : λf84e5dc4d122 ]) ];
}

export function probeWisp(λ11b869468258, {timeout: λ9a021453f2f3 = 7e3, Socket: λf08268171a73 = WebSocket} = {}) {
  return new Promise(λ94b93097f507 => {
    let λcb64696a450a, λf84e5dc4d122 = !1;
    const _0x06a923_6 = λ11b869468258 => {
      if (!λf84e5dc4d122) {
        if (λf84e5dc4d122 = !0, clearTimeout(λ07204b43b804), λcb64696a450a) {
          λcb64696a450a.onmessage = λcb64696a450a.onerror = λcb64696a450a.onclose = null;
          try {
            λcb64696a450a.close();
          } catch {}
        }
        λ94b93097f507(λ11b869468258);
      }
    }, λ07204b43b804 = setTimeout(() => _0x06a923_6(!1), λ9a021453f2f3);
    try {
      λcb64696a450a = new λf08268171a73(λ11b869468258), λcb64696a450a.binaryType = "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72", 
      λcb64696a450a.onmessage = λ11b869468258 => {
        if (!(λ11b869468258.data instanceof ArrayBuffer)) return;
        const λ9a021453f2f3 = new Uint8Array(λ11b869468258.data);
        λ9a021453f2f3.length >= 9 && 3 === λ9a021453f2f3[0] && 0 === new DataView(λ11b869468258.data).getUint32(1, !0) && _0x06a923_6(!0);
      }, λcb64696a450a.onerror = λcb64696a450a.onclose = () => _0x06a923_6(!1);
    } catch {
      _0x06a923_6(!1);
    }
  });
}

export class RelayTransport {
  constructor({urls: λ11b869468258, createClient: λ9a021453f2f3, probe: λf08268171a73 = probeWisp, onStatus: λ94b93097f507 = () => {}, storage: λcb64696a450a = globalThis.sessionStorage, monitorMs: λf84e5dc4d122 = 3e4, requestTimeoutMs: λ07204b43b804 = 2e4, rank: λ548e0009f38c = async λ11b869468258 => λ11b869468258, online: λd64760863d73 = () => !1 !== globalThis.navigator?.onLine, visible: λ697c6c05f532 = () => !globalThis.document?.hidden}) {
    Object.assign(this, {
      urls: λ11b869468258,
      createClient: λ9a021453f2f3,
      probe: λf08268171a73,
      onStatus: λ94b93097f507,
      storage: λcb64696a450a,
      monitorMs: λf84e5dc4d122,
      requestTimeoutMs: λ07204b43b804,
      rank: λ548e0009f38c,
      online: λd64760863d73,
      visible: λ697c6c05f532
    }), this.ready = !1, this.closed = !1, this.url = "", this.client = null, this.switching = null, 
    this.failures = 0, this.retired = [];
  }
  async init() {
    await this.select(), this.ready = !0, this.schedule();
  }
  async select(λ11b869468258 = "") {
    if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
    if (this.switching) return this.switching;
    if (!this.online()) throw new Error("\x59\x6f\x75\x20\x61\x72\x65\x20\x6f\x66\x66\x6c\x69\x6e\x65\x2e\x20\x52\x65\x63\x6f\x6e\x6e\x65\x63\x74\x20\x74\x6f\x20\x57\x69\x2d\x46\x69\x20\x61\x6e\x64\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x2e");
    let λ9a021453f2f3 = "";
    try {
      λ9a021453f2f3 = this.storage?.getItem("\x74\x75\x74\x73\x69\x2e\x77\x6f\x72\x6b\x69\x6e\x67\x52\x65\x6c\x61\x79\x3a" + this.urls.join("\x7c")) || "";
    } catch {}
    const λf08268171a73 = [ ...new Set([ this.url, λ9a021453f2f3, ...this.urls ]) ].filter(λ9a021453f2f3 => this.urls.includes(λ9a021453f2f3) && λ9a021453f2f3 !== λ11b869468258);
    this.switching = (async () => {
      let λ9a021453f2f3;
      const λ94b93097f507 = await Promise.race([ Promise.resolve().then(() => this.rank(λf08268171a73)).catch(() => λf08268171a73), new Promise(λ11b869468258 => {
        λ9a021453f2f3 = setTimeout(() => λ11b869468258(λf08268171a73), 300);
      }) ]).finally(() => clearTimeout(λ9a021453f2f3));
      for (const λ9a021453f2f3 of λ94b93097f507) {
        if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
        if (this.onStatus({
          state: "\x63\x68\x65\x63\x6b\x69\x6e\x67",
          url: λ9a021453f2f3
        }), !await this.probe(λ9a021453f2f3)) continue;
        let λf08268171a73;
        try {
          λf08268171a73 = await this.createClient(λ9a021453f2f3);
        } catch {
          continue;
        }
        if (this.closed) throw λf08268171a73.close?.(), new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
        for (this.client && this.retired.push(this.client); this.retired.length > 2; ) try {
          this.retired.shift()?.close?.();
        } catch {}
        this.client = λf08268171a73, this.url = λ9a021453f2f3, this.failures = 0;
        try {
          this.storage?.setItem("\x74\x75\x74\x73\x69\x2e\x77\x6f\x72\x6b\x69\x6e\x67\x52\x65\x6c\x61\x79\x3a" + this.urls.join("\x7c"), λ9a021453f2f3);
        } catch {}
        return void this.onStatus({
          state: λ11b869468258 ? "\x73\x77\x69\x74\x63\x68\x65\x64" : "\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64",
          url: λ9a021453f2f3
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
  async recover(λ11b869468258, λ9a021453f2f3 = !1, λf08268171a73 = !1) {
    return !(this.closed || !this.online() || this.client === λ11b869468258 && (this.switching ? (await this.switching, 
    this.client === λ11b869468258) : !λ9a021453f2f3 && await this.probe(this.url) || this.client === λ11b869468258 && (await this.select(λf08268171a73 ? "" : this.url), 
    this.client === λ11b869468258)));
  }
  async attempt(λ11b869468258, λ9a021453f2f3) {
    const λf08268171a73 = λ9a021453f2f3[4], λ94b93097f507 = new AbortController;
    if (λf08268171a73?.aborted) throw λf08268171a73.reason || new DOMException("\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
    let λcb64696a450a, λf84e5dc4d122 = !1, λ07204b43b804 = !1;
    const λ548e0009f38c = λf08268171a73 ? AbortSignal.any([ λf08268171a73, λ94b93097f507.signal ]) : λ94b93097f507.signal, λd64760863d73 = Promise.resolve().then(() => λ11b869468258.request(...λ9a021453f2f3.slice(0, 4), λ548e0009f38c));
    λd64760863d73.then(λ11b869468258 => {
      λ07204b43b804 && λ548e0009f38c.aborted && λ11b869468258?.body?.cancel?.().catch(() => {});
    }, () => {});
    const λ697c6c05f532 = new Promise((λ11b869468258, λ9a021453f2f3) => {
      const _0x06a923_2 = () => λ9a021453f2f3(λf84e5dc4d122 ? Object.assign(new Error("\x52\x65\x6c\x61\x79\x20\x72\x65\x71\x75\x65\x73\x74\x20\x74\x69\x6d\x65\x64\x20\x6f\x75\x74"), {
        name: "\x54\x69\x6d\x65\x6f\x75\x74\x45\x72\x72\x6f\x72"
      }) : λ548e0009f38c.reason);
      λ548e0009f38c.addEventListener("\x61\x62\x6f\x72\x74", _0x06a923_2, {
        once: !0
      }), λcb64696a450a = setTimeout(() => {
        λf84e5dc4d122 = !0, λ94b93097f507.abort();
      }, this.requestTimeoutMs), λd64760863d73.finally(() => λ548e0009f38c.removeEventListener("\x61\x62\x6f\x72\x74", _0x06a923_2)).catch(() => {});
    });
    try {
      return await Promise.race([ λd64760863d73, λ697c6c05f532 ]);
    } finally {
      λ07204b43b804 = !0, clearTimeout(λcb64696a450a);
    }
  }
  async request(...λ11b869468258) {
    if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
    this.ready || await this.init();
    const λ9a021453f2f3 = this.client;
    try {
      return await this.attempt(λ9a021453f2f3, λ11b869468258);
    } catch (λf08268171a73) {
      if (λ11b869468258[4]?.aborted || "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72" === λf08268171a73?.name) throw λf08268171a73;
      const λ94b93097f507 = "\x54\x69\x6d\x65\x6f\x75\x74\x45\x72\x72\x6f\x72" === λf08268171a73?.name || /timed?\s*out|timeout|ETIMEDOUT|ECONNRESET|network|socket|wisp|hyper.*(?:error|client)|muxtaskended|connection.*(?:closed|reset|lost|failed)|unexpected.*(?:eof|cutoff)|transport.*(?:closed|failed)/i.test(String(λf08268171a73?.message || λf08268171a73 || ""));
      let λcb64696a450a = !1;
      try {
        λcb64696a450a = await this.recover(λ9a021453f2f3, λ94b93097f507, λ94b93097f507);
      } catch {}
      if (λcb64696a450a && /^(GET|HEAD)$/i.test(String(λ11b869468258[1] || "\x47\x45\x54")) && !λ11b869468258[4]?.aborted && !this.closed && this.online()) return this.attempt(this.client, λ11b869468258);
      throw λf08268171a73;
    }
  }
  connect(...λ11b869468258) {
    const λ9a021453f2f3 = this.client, λf08268171a73 = λ11b869468258[6];
    λ11b869468258[6] = (...λ11b869468258) => {
      this.recover(λ9a021453f2f3).catch(() => {}), λf08268171a73?.(...λ11b869468258);
    };
    try {
      return λ9a021453f2f3.connect(...λ11b869468258);
    } catch (λ11b869468258) {
      throw this.recover(λ9a021453f2f3).catch(() => {}), λ11b869468258;
    }
  }
  async check() {
    if (this.closed || !this.client || !this.online() || !this.visible()) return;
    const λ11b869468258 = this.client, λ9a021453f2f3 = this.url, λf08268171a73 = await this.probe(λ9a021453f2f3);
    this.closed || λ11b869468258 !== this.client || (this.failures = λf08268171a73 ? 0 : this.failures + 1, 
    this.failures >= 2 && await this.recover(λ11b869468258, !0).catch(() => {}));
  }
  schedule() {
    !this.closed && this.monitorMs && (this.timer = setTimeout(async () => {
      await this.check(), this.schedule();
    }, this.monitorMs));
  }
  close() {
    this.closed = !0, clearTimeout(this.timer);
    for (const λ11b869468258 of [ this.client, ...this.retired ]) try {
      λ11b869468258?.close?.();
    } catch {}
    this.retired = [];
  }
}

const λ9a021453f2f3 = new Map;

export async function rankForBlocker(λ11b869468258, λf08268171a73, {fetcher: λ94b93097f507 = fetch, onHint: λcb64696a450a = () => {}} = {}) {
  if (!/^[a-z0-9_-]{1,64}$/.test(λf08268171a73 || "")) return λ11b869468258;
  const λf84e5dc4d122 = await Promise.all(λ11b869468258.map(async λ11b869468258 => {
    const λcb64696a450a = new URL(λ11b869468258).hostname;
    if ("\x6c\x6f\x63\x61\x6c\x68\x6f\x73\x74" === λcb64696a450a || λcb64696a450a.endsWith("\x2e\x6c\x6f\x63\x61\x6c") || /^[\d.]+$/.test(λcb64696a450a) || λcb64696a450a.includes("\x3a")) return {
      url: λ11b869468258,
      blocked: null
    };
    const λf84e5dc4d122 = λf08268171a73 + "\x3a" + λcb64696a450a, λ07204b43b804 = λ9a021453f2f3.get(λf84e5dc4d122);
    if (λ07204b43b804 && λ07204b43b804.until > Date.now()) return {
      url: λ11b869468258,
      blocked: λ07204b43b804.blocked
    };
    let λ548e0009f38c = null;
    const λd64760863d73 = new AbortController, λ697c6c05f532 = setTimeout(() => λd64760863d73.abort(), 4e3);
    try {
      const λ11b869468258 = await λ94b93097f507("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6c\x69\x6e\x6b\x2d\x63\x68\x65\x63\x6b\x65\x72\x2f\x63\x68\x65\x63\x6b", {
        method: "\x50\x4f\x53\x54",
        signal: λd64760863d73.signal,
        headers: {
          "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"
        },
        body: JSON.stringify({
          url: "\x68\x74\x74\x70\x73\x3a\x2f\x2f" + λcb64696a450a + "\x2f",
          vendor: λf08268171a73
        })
      });
      if (λ11b869468258.ok) {
        const λ9a021453f2f3 = await λ11b869468258.json(), λ94b93097f507 = λ9a021453f2f3?.vendors?.[λf08268171a73];
        λ94b93097f507?.error || "\x62\x6f\x6f\x6c\x65\x61\x6e" != typeof λ94b93097f507?.blocked || (λ548e0009f38c = λ94b93097f507.blocked);
      }
    } catch {} finally {
      clearTimeout(λ697c6c05f532);
    }
    return λ9a021453f2f3.set(λf84e5dc4d122, {
      blocked: λ548e0009f38c,
      until: Date.now() + (null === λ548e0009f38c ? 3e4 : 6e5)
    }), λ9a021453f2f3.size > 100 && λ9a021453f2f3.delete(λ9a021453f2f3.keys().next().value), 
    {
      url: λ11b869468258,
      blocked: λ548e0009f38c
    };
  }));
  return λcb64696a450a({
    vendor: λf08268171a73,
    results: λf84e5dc4d122
  }), λf84e5dc4d122.sort((λ11b869468258, λ9a021453f2f3) => Number(!0 === λ11b869468258.blocked) - Number(!0 === λ9a021453f2f3.blocked)).map(λ11b869468258 => λ11b869468258.url);
}
