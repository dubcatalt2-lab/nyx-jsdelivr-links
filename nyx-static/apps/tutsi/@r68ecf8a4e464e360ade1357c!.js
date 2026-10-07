import { httpRelayUrl as λ0654f8fae26c } from "\x2e\x2f\x40\x72\x36\x39\x34\x62\x61\x38\x32\x65\x39\x34\x34\x31\x37\x38\x64\x65\x36\x38\x66\x39\x62\x66\x38\x64\x21\x2e\x6a\x73";

export function normalizeRelay(λ0654f8fae26c, λb257c730ad53 = globalThis.location?.protocol || "\x68\x74\x74\x70\x73\x3a") {
  try {
    const λ0d010d887981 = new URL(λ0654f8fae26c);
    return ![ "\x77\x73\x3a", "\x77\x73\x73\x3a" ].includes(λ0d010d887981.protocol) || λ0d010d887981.username || λ0d010d887981.password || λ0d010d887981.hash || "\x68\x74\x74\x70\x73\x3a" === λb257c730ad53 && "\x77\x73\x73\x3a" !== λ0d010d887981.protocol ? "" : λ0d010d887981.href;
  } catch {
    return "";
  }
}

export function relayCandidates(λ0654f8fae26c, λb257c730ad53 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ0d010d887981 = location) {
  const λd6b3eeab04d6 = `${"\x68\x74\x74\x70\x73\x3a" === λ0d010d887981.protocol ? "\x77\x73\x73\x3a" : "\x77\x73\x3a"}\x2f\x2f${λ0d010d887981.host}\x2f\x72\x65\x73\x6f\x75\x72\x63\x65\x73\x2f\x6c\x69\x76\x65\x2f`, λ37c03445fbbd = normalizeRelay(λ0654f8fae26c.relay, λ0d010d887981.protocol) || normalizeRelay(λb257c730ad53.wispUrl, λ0d010d887981.protocol) || λd6b3eeab04d6;
  return !1 === λ0654f8fae26c.autoRelay ? [ λ37c03445fbbd ] : [ ...new Set([ λ37c03445fbbd, λd6b3eeab04d6, ...Array.isArray(λb257c730ad53.wispUrls) ? λb257c730ad53.wispUrls : [], "\x77\x73\x73\x3a\x2f\x2f\x63\x6f\x70\x69\x75\x6d\x2d\x77\x69\x73\x70\x2d\x39\x35\x32\x39\x34\x36\x33\x2e\x6f\x6e\x72\x65\x6e\x64\x65\x72\x2e\x63\x6f\x6d\x2f\x77\x69\x73\x70\x2f" ].map(λ0654f8fae26c => normalizeRelay(λ0654f8fae26c, λ0d010d887981.protocol)).filter(Boolean)) ].slice(0, 6);
}

export function transportCandidates(λb257c730ad53, λ0d010d887981 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λd6b3eeab04d6 = location) {
  const λ37c03445fbbd = λ0654f8fae26c(λd6b3eeab04d6), λ00fea495f66b = relayCandidates(λb257c730ad53, λ0d010d887981, λd6b3eeab04d6);
  return !1 === λb257c730ad53.httpBridge ? relayCandidates(λb257c730ad53.relay === λ37c03445fbbd ? {
    ...λb257c730ad53,
    relay: ""
  } : λb257c730ad53, λ0d010d887981.wispUrl === λ37c03445fbbd ? {
    ...λ0d010d887981,
    wispUrl: ""
  } : λ0d010d887981, λd6b3eeab04d6).filter(λ0654f8fae26c => λ0654f8fae26c !== λ37c03445fbbd) : λb257c730ad53.relay && λb257c730ad53.relay !== λ37c03445fbbd ? [ ...new Set([ ...λ00fea495f66b, ...!1 === λb257c730ad53.autoRelay ? [] : [ λ37c03445fbbd ] ]) ] : [ ...new Set([ λ37c03445fbbd, ...!1 === λb257c730ad53.autoRelay ? [] : λ00fea495f66b ]) ];
}

export function probeWisp(λ0654f8fae26c, {timeout: λb257c730ad53 = 7e3, Socket: λ0d010d887981 = WebSocket} = {}) {
  return new Promise(λd6b3eeab04d6 => {
    let λ37c03445fbbd, λ00fea495f66b = !1;
    const _0x06a923_6 = λ0654f8fae26c => {
      if (!λ00fea495f66b) {
        if (λ00fea495f66b = !0, clearTimeout(λ615754a89e1a), λ37c03445fbbd) {
          λ37c03445fbbd.onmessage = λ37c03445fbbd.onerror = λ37c03445fbbd.onclose = null;
          try {
            λ37c03445fbbd.close();
          } catch {}
        }
        λd6b3eeab04d6(λ0654f8fae26c);
      }
    }, λ615754a89e1a = setTimeout(() => _0x06a923_6(!1), λb257c730ad53);
    try {
      λ37c03445fbbd = new λ0d010d887981(λ0654f8fae26c), λ37c03445fbbd.binaryType = "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72", 
      λ37c03445fbbd.onmessage = λ0654f8fae26c => {
        if (!(λ0654f8fae26c.data instanceof ArrayBuffer)) return;
        const λb257c730ad53 = new Uint8Array(λ0654f8fae26c.data);
        λb257c730ad53.length >= 9 && 3 === λb257c730ad53[0] && 0 === new DataView(λ0654f8fae26c.data).getUint32(1, !0) && _0x06a923_6(!0);
      }, λ37c03445fbbd.onerror = λ37c03445fbbd.onclose = () => _0x06a923_6(!1);
    } catch {
      _0x06a923_6(!1);
    }
  });
}

export class RelayTransport {
  constructor({urls: λ0654f8fae26c, createClient: λb257c730ad53, probe: λ0d010d887981 = probeWisp, onStatus: λd6b3eeab04d6 = () => {}, storage: λ37c03445fbbd = globalThis.sessionStorage, monitorMs: λ00fea495f66b = 3e4, requestTimeoutMs: λ615754a89e1a = 2e4, rank: λ8b7a3d707640 = async λ0654f8fae26c => λ0654f8fae26c, online: λa93155343a30 = () => !1 !== globalThis.navigator?.onLine, visible: λ04da5e698fcc = () => !globalThis.document?.hidden}) {
    Object.assign(this, {
      urls: λ0654f8fae26c,
      createClient: λb257c730ad53,
      probe: λ0d010d887981,
      onStatus: λd6b3eeab04d6,
      storage: λ37c03445fbbd,
      monitorMs: λ00fea495f66b,
      requestTimeoutMs: λ615754a89e1a,
      rank: λ8b7a3d707640,
      online: λa93155343a30,
      visible: λ04da5e698fcc
    }), this.ready = !1, this.closed = !1, this.url = "", this.client = null, this.switching = null, 
    this.failures = 0, this.retired = [];
  }
  async init() {
    await this.select(), this.ready = !0, this.schedule();
  }
  async select(λ0654f8fae26c = "") {
    if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
    if (this.switching) return this.switching;
    if (!this.online()) throw new Error("\x59\x6f\x75\x20\x61\x72\x65\x20\x6f\x66\x66\x6c\x69\x6e\x65\x2e\x20\x52\x65\x63\x6f\x6e\x6e\x65\x63\x74\x20\x74\x6f\x20\x57\x69\x2d\x46\x69\x20\x61\x6e\x64\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x2e");
    let λb257c730ad53 = "";
    try {
      λb257c730ad53 = this.storage?.getItem("\x74\x75\x74\x73\x69\x2e\x77\x6f\x72\x6b\x69\x6e\x67\x52\x65\x6c\x61\x79\x3a" + this.urls.join("\x7c")) || "";
    } catch {}
    const λ0d010d887981 = [ ...new Set([ this.url, λb257c730ad53, ...this.urls ]) ].filter(λb257c730ad53 => this.urls.includes(λb257c730ad53) && λb257c730ad53 !== λ0654f8fae26c);
    this.switching = (async () => {
      let λb257c730ad53;
      const λd6b3eeab04d6 = await Promise.race([ Promise.resolve().then(() => this.rank(λ0d010d887981)).catch(() => λ0d010d887981), new Promise(λ0654f8fae26c => {
        λb257c730ad53 = setTimeout(() => λ0654f8fae26c(λ0d010d887981), 300);
      }) ]).finally(() => clearTimeout(λb257c730ad53));
      for (const λb257c730ad53 of λd6b3eeab04d6) {
        if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
        if (this.onStatus({
          state: "\x63\x68\x65\x63\x6b\x69\x6e\x67",
          url: λb257c730ad53
        }), !await this.probe(λb257c730ad53)) continue;
        let λ0d010d887981;
        try {
          λ0d010d887981 = await this.createClient(λb257c730ad53);
        } catch {
          continue;
        }
        if (this.closed) throw λ0d010d887981.close?.(), new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
        for (this.client && this.retired.push(this.client); this.retired.length > 2; ) try {
          this.retired.shift()?.close?.();
        } catch {}
        this.client = λ0d010d887981, this.url = λb257c730ad53, this.failures = 0;
        try {
          this.storage?.setItem("\x74\x75\x74\x73\x69\x2e\x77\x6f\x72\x6b\x69\x6e\x67\x52\x65\x6c\x61\x79\x3a" + this.urls.join("\x7c"), λb257c730ad53);
        } catch {}
        return void this.onStatus({
          state: λ0654f8fae26c ? "\x73\x77\x69\x74\x63\x68\x65\x64" : "\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64",
          url: λb257c730ad53
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
  async recover(λ0654f8fae26c, λb257c730ad53 = !1, λ0d010d887981 = !1) {
    return !(this.closed || !this.online() || this.client === λ0654f8fae26c && (this.switching ? (await this.switching, 
    this.client === λ0654f8fae26c) : !λb257c730ad53 && await this.probe(this.url) || this.client === λ0654f8fae26c && (await this.select(λ0d010d887981 ? "" : this.url), 
    this.client === λ0654f8fae26c)));
  }
  async attempt(λ0654f8fae26c, λb257c730ad53) {
    const λ0d010d887981 = λb257c730ad53[4], λd6b3eeab04d6 = new AbortController;
    if (λ0d010d887981?.aborted) throw λ0d010d887981.reason || new DOMException("\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
    let λ37c03445fbbd, λ00fea495f66b = !1, λ615754a89e1a = !1;
    const λ8b7a3d707640 = λ0d010d887981 ? AbortSignal.any([ λ0d010d887981, λd6b3eeab04d6.signal ]) : λd6b3eeab04d6.signal, λa93155343a30 = Promise.resolve().then(() => λ0654f8fae26c.request(...λb257c730ad53.slice(0, 4), λ8b7a3d707640));
    λa93155343a30.then(λ0654f8fae26c => {
      λ615754a89e1a && λ8b7a3d707640.aborted && λ0654f8fae26c?.body?.cancel?.().catch(() => {});
    }, () => {});
    const λ04da5e698fcc = new Promise((λ0654f8fae26c, λb257c730ad53) => {
      const _0x06a923_2 = () => λb257c730ad53(λ00fea495f66b ? Object.assign(new Error("\x52\x65\x6c\x61\x79\x20\x72\x65\x71\x75\x65\x73\x74\x20\x74\x69\x6d\x65\x64\x20\x6f\x75\x74"), {
        name: "\x54\x69\x6d\x65\x6f\x75\x74\x45\x72\x72\x6f\x72"
      }) : λ8b7a3d707640.reason);
      λ8b7a3d707640.addEventListener("\x61\x62\x6f\x72\x74", _0x06a923_2, {
        once: !0
      }), λ37c03445fbbd = setTimeout(() => {
        λ00fea495f66b = !0, λd6b3eeab04d6.abort();
      }, this.requestTimeoutMs), λa93155343a30.finally(() => λ8b7a3d707640.removeEventListener("\x61\x62\x6f\x72\x74", _0x06a923_2)).catch(() => {});
    });
    try {
      return await Promise.race([ λa93155343a30, λ04da5e698fcc ]);
    } finally {
      λ615754a89e1a = !0, clearTimeout(λ37c03445fbbd);
    }
  }
  async request(...λ0654f8fae26c) {
    if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
    this.ready || await this.init();
    const λb257c730ad53 = this.client;
    try {
      return await this.attempt(λb257c730ad53, λ0654f8fae26c);
    } catch (λ0d010d887981) {
      if (λ0654f8fae26c[4]?.aborted || "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72" === λ0d010d887981?.name) throw λ0d010d887981;
      const λd6b3eeab04d6 = "\x54\x69\x6d\x65\x6f\x75\x74\x45\x72\x72\x6f\x72" === λ0d010d887981?.name || /timed?\s*out|timeout|ETIMEDOUT|ECONNRESET|network|socket|wisp|hyper.*(?:error|client)|muxtaskended|connection.*(?:closed|reset|lost|failed)|unexpected.*(?:eof|cutoff)|transport.*(?:closed|failed)/i.test(String(λ0d010d887981?.message || λ0d010d887981 || ""));
      let λ37c03445fbbd = !1;
      try {
        λ37c03445fbbd = await this.recover(λb257c730ad53, λd6b3eeab04d6, λd6b3eeab04d6);
      } catch {}
      if (λ37c03445fbbd && /^(GET|HEAD)$/i.test(String(λ0654f8fae26c[1] || "\x47\x45\x54")) && !λ0654f8fae26c[4]?.aborted && !this.closed && this.online()) return this.attempt(this.client, λ0654f8fae26c);
      throw λ0d010d887981;
    }
  }
  connect(...λ0654f8fae26c) {
    const λb257c730ad53 = this.client, λ0d010d887981 = λ0654f8fae26c[6];
    λ0654f8fae26c[6] = (...λ0654f8fae26c) => {
      this.recover(λb257c730ad53).catch(() => {}), λ0d010d887981?.(...λ0654f8fae26c);
    };
    try {
      return λb257c730ad53.connect(...λ0654f8fae26c);
    } catch (λ0654f8fae26c) {
      throw this.recover(λb257c730ad53).catch(() => {}), λ0654f8fae26c;
    }
  }
  async check() {
    if (this.closed || !this.client || !this.online() || !this.visible()) return;
    const λ0654f8fae26c = this.client, λb257c730ad53 = this.url, λ0d010d887981 = await this.probe(λb257c730ad53);
    this.closed || λ0654f8fae26c !== this.client || (this.failures = λ0d010d887981 ? 0 : this.failures + 1, 
    this.failures >= 2 && await this.recover(λ0654f8fae26c, !0).catch(() => {}));
  }
  schedule() {
    !this.closed && this.monitorMs && (this.timer = setTimeout(async () => {
      await this.check(), this.schedule();
    }, this.monitorMs));
  }
  close() {
    this.closed = !0, clearTimeout(this.timer);
    for (const λ0654f8fae26c of [ this.client, ...this.retired ]) try {
      λ0654f8fae26c?.close?.();
    } catch {}
    this.retired = [];
  }
}

const λb257c730ad53 = new Map;

export async function rankForBlocker(λ0654f8fae26c, λ0d010d887981, {fetcher: λd6b3eeab04d6 = fetch, onHint: λ37c03445fbbd = () => {}} = {}) {
  if (!/^[a-z0-9_-]{1,64}$/.test(λ0d010d887981 || "")) return λ0654f8fae26c;
  const λ00fea495f66b = await Promise.all(λ0654f8fae26c.map(async λ0654f8fae26c => {
    const λ37c03445fbbd = new URL(λ0654f8fae26c).hostname;
    if ("\x6c\x6f\x63\x61\x6c\x68\x6f\x73\x74" === λ37c03445fbbd || λ37c03445fbbd.endsWith("\x2e\x6c\x6f\x63\x61\x6c") || /^[\d.]+$/.test(λ37c03445fbbd) || λ37c03445fbbd.includes("\x3a")) return {
      url: λ0654f8fae26c,
      blocked: null
    };
    const λ00fea495f66b = λ0d010d887981 + "\x3a" + λ37c03445fbbd, λ615754a89e1a = λb257c730ad53.get(λ00fea495f66b);
    if (λ615754a89e1a && λ615754a89e1a.until > Date.now()) return {
      url: λ0654f8fae26c,
      blocked: λ615754a89e1a.blocked
    };
    let λ8b7a3d707640 = null;
    const λa93155343a30 = new AbortController, λ04da5e698fcc = setTimeout(() => λa93155343a30.abort(), 4e3);
    try {
      const λ0654f8fae26c = await λd6b3eeab04d6("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6c\x69\x6e\x6b\x2d\x63\x68\x65\x63\x6b\x65\x72\x2f\x63\x68\x65\x63\x6b", {
        method: "\x50\x4f\x53\x54",
        signal: λa93155343a30.signal,
        headers: {
          "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"
        },
        body: JSON.stringify({
          url: "\x68\x74\x74\x70\x73\x3a\x2f\x2f" + λ37c03445fbbd + "\x2f",
          vendor: λ0d010d887981
        })
      });
      if (λ0654f8fae26c.ok) {
        const λb257c730ad53 = await λ0654f8fae26c.json(), λd6b3eeab04d6 = λb257c730ad53?.vendors?.[λ0d010d887981];
        λd6b3eeab04d6?.error || "\x62\x6f\x6f\x6c\x65\x61\x6e" != typeof λd6b3eeab04d6?.blocked || (λ8b7a3d707640 = λd6b3eeab04d6.blocked);
      }
    } catch {} finally {
      clearTimeout(λ04da5e698fcc);
    }
    return λb257c730ad53.set(λ00fea495f66b, {
      blocked: λ8b7a3d707640,
      until: Date.now() + (null === λ8b7a3d707640 ? 3e4 : 6e5)
    }), λb257c730ad53.size > 100 && λb257c730ad53.delete(λb257c730ad53.keys().next().value), 
    {
      url: λ0654f8fae26c,
      blocked: λ8b7a3d707640
    };
  }));
  return λ37c03445fbbd({
    vendor: λ0d010d887981,
    results: λ00fea495f66b
  }), λ00fea495f66b.sort((λ0654f8fae26c, λb257c730ad53) => Number(!0 === λ0654f8fae26c.blocked) - Number(!0 === λb257c730ad53.blocked)).map(λ0654f8fae26c => λ0654f8fae26c.url);
}
