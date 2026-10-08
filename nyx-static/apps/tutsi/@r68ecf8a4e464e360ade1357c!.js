import { httpRelayUrl as λab7eb0e8325f } from "\x2e\x2f\x40\x72\x36\x39\x34\x62\x61\x38\x32\x65\x39\x34\x34\x31\x37\x38\x64\x65\x36\x38\x66\x39\x62\x66\x38\x64\x21\x2e\x6a\x73";

export function normalizeRelay(λab7eb0e8325f, λ70e66e25d624 = globalThis.location?.protocol || "\x68\x74\x74\x70\x73\x3a") {
  try {
    const λf0879d5b9217 = new URL(λab7eb0e8325f);
    return ![ "\x77\x73\x3a", "\x77\x73\x73\x3a" ].includes(λf0879d5b9217.protocol) || λf0879d5b9217.username || λf0879d5b9217.password || λf0879d5b9217.hash || "\x68\x74\x74\x70\x73\x3a" === λ70e66e25d624 && "\x77\x73\x73\x3a" !== λf0879d5b9217.protocol ? "" : λf0879d5b9217.href;
  } catch {
    return "";
  }
}

export function relayCandidates(λab7eb0e8325f, λ70e66e25d624 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λf0879d5b9217 = location) {
  const λ7cb1054b8938 = `${"\x68\x74\x74\x70\x73\x3a" === λf0879d5b9217.protocol ? "\x77\x73\x73\x3a" : "\x77\x73\x3a"}\x2f\x2f${λf0879d5b9217.host}\x2f\x72\x65\x73\x6f\x75\x72\x63\x65\x73\x2f\x6c\x69\x76\x65\x2f`, λeaa2992eb0b4 = normalizeRelay(λab7eb0e8325f.relay, λf0879d5b9217.protocol) || normalizeRelay(λ70e66e25d624.wispUrl, λf0879d5b9217.protocol) || λ7cb1054b8938;
  return !1 === λab7eb0e8325f.autoRelay ? [ λeaa2992eb0b4 ] : [ ...new Set([ λeaa2992eb0b4, λ7cb1054b8938, ...Array.isArray(λ70e66e25d624.wispUrls) ? λ70e66e25d624.wispUrls : [], "\x77\x73\x73\x3a\x2f\x2f\x63\x6f\x70\x69\x75\x6d\x2d\x77\x69\x73\x70\x2d\x39\x35\x32\x39\x34\x36\x33\x2e\x6f\x6e\x72\x65\x6e\x64\x65\x72\x2e\x63\x6f\x6d\x2f\x77\x69\x73\x70\x2f" ].map(λab7eb0e8325f => normalizeRelay(λab7eb0e8325f, λf0879d5b9217.protocol)).filter(Boolean)) ].slice(0, 6);
}

export function transportCandidates(λ70e66e25d624, λf0879d5b9217 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ7cb1054b8938 = location) {
  const λeaa2992eb0b4 = λab7eb0e8325f(λ7cb1054b8938), λ3312d7b10a6b = relayCandidates(λ70e66e25d624, λf0879d5b9217, λ7cb1054b8938);
  return !1 === λ70e66e25d624.httpBridge ? relayCandidates(λ70e66e25d624.relay === λeaa2992eb0b4 ? {
    ...λ70e66e25d624,
    relay: ""
  } : λ70e66e25d624, λf0879d5b9217.wispUrl === λeaa2992eb0b4 ? {
    ...λf0879d5b9217,
    wispUrl: ""
  } : λf0879d5b9217, λ7cb1054b8938).filter(λab7eb0e8325f => λab7eb0e8325f !== λeaa2992eb0b4) : λ70e66e25d624.relay && λ70e66e25d624.relay !== λeaa2992eb0b4 ? [ ...new Set([ ...λ3312d7b10a6b, ...!1 === λ70e66e25d624.autoRelay ? [] : [ λeaa2992eb0b4 ] ]) ] : [ ...new Set([ λeaa2992eb0b4, ...!1 === λ70e66e25d624.autoRelay ? [] : λ3312d7b10a6b ]) ];
}

export function probeWisp(λab7eb0e8325f, {timeout: λ70e66e25d624 = 7e3, Socket: λf0879d5b9217 = WebSocket} = {}) {
  return new Promise(λ7cb1054b8938 => {
    let λeaa2992eb0b4, λ3312d7b10a6b = !1;
    const _0x06a923_6 = λab7eb0e8325f => {
      if (!λ3312d7b10a6b) {
        if (λ3312d7b10a6b = !0, clearTimeout(λ3743d3b4279b), λeaa2992eb0b4) {
          λeaa2992eb0b4.onmessage = λeaa2992eb0b4.onerror = λeaa2992eb0b4.onclose = null;
          try {
            λeaa2992eb0b4.close();
          } catch {}
        }
        λ7cb1054b8938(λab7eb0e8325f);
      }
    }, λ3743d3b4279b = setTimeout(() => _0x06a923_6(!1), λ70e66e25d624);
    try {
      λeaa2992eb0b4 = new λf0879d5b9217(λab7eb0e8325f), λeaa2992eb0b4.binaryType = "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72", 
      λeaa2992eb0b4.onmessage = λab7eb0e8325f => {
        if (!(λab7eb0e8325f.data instanceof ArrayBuffer)) return;
        const λ70e66e25d624 = new Uint8Array(λab7eb0e8325f.data);
        λ70e66e25d624.length >= 9 && 3 === λ70e66e25d624[0] && 0 === new DataView(λab7eb0e8325f.data).getUint32(1, !0) && _0x06a923_6(!0);
      }, λeaa2992eb0b4.onerror = λeaa2992eb0b4.onclose = () => _0x06a923_6(!1);
    } catch {
      _0x06a923_6(!1);
    }
  });
}

export class RelayTransport {
  constructor({urls: λab7eb0e8325f, createClient: λ70e66e25d624, probe: λf0879d5b9217 = probeWisp, onStatus: λ7cb1054b8938 = () => {}, storage: λeaa2992eb0b4 = globalThis.sessionStorage, monitorMs: λ3312d7b10a6b = 3e4, requestTimeoutMs: λ3743d3b4279b = 2e4, rank: λdaef168c2c74 = async λab7eb0e8325f => λab7eb0e8325f, online: λ6cc37f1bfad2 = () => !1 !== globalThis.navigator?.onLine, visible: λb642348f9e43 = () => !globalThis.document?.hidden}) {
    Object.assign(this, {
      urls: λab7eb0e8325f,
      createClient: λ70e66e25d624,
      probe: λf0879d5b9217,
      onStatus: λ7cb1054b8938,
      storage: λeaa2992eb0b4,
      monitorMs: λ3312d7b10a6b,
      requestTimeoutMs: λ3743d3b4279b,
      rank: λdaef168c2c74,
      online: λ6cc37f1bfad2,
      visible: λb642348f9e43
    }), this.ready = !1, this.closed = !1, this.url = "", this.client = null, this.switching = null, 
    this.failures = 0, this.retired = [];
  }
  async init() {
    await this.select(), this.ready = !0, this.schedule();
  }
  async select(λab7eb0e8325f = "") {
    if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
    if (this.switching) return this.switching;
    if (!this.online()) throw new Error("\x59\x6f\x75\x20\x61\x72\x65\x20\x6f\x66\x66\x6c\x69\x6e\x65\x2e\x20\x52\x65\x63\x6f\x6e\x6e\x65\x63\x74\x20\x74\x6f\x20\x57\x69\x2d\x46\x69\x20\x61\x6e\x64\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x2e");
    let λ70e66e25d624 = "";
    try {
      λ70e66e25d624 = this.storage?.getItem("\x74\x75\x74\x73\x69\x2e\x77\x6f\x72\x6b\x69\x6e\x67\x52\x65\x6c\x61\x79\x3a" + this.urls.join("\x7c")) || "";
    } catch {}
    const λf0879d5b9217 = [ ...new Set([ this.url, λ70e66e25d624, ...this.urls ]) ].filter(λ70e66e25d624 => this.urls.includes(λ70e66e25d624) && λ70e66e25d624 !== λab7eb0e8325f);
    this.switching = (async () => {
      let λ70e66e25d624;
      const λ7cb1054b8938 = await Promise.race([ Promise.resolve().then(() => this.rank(λf0879d5b9217)).catch(() => λf0879d5b9217), new Promise(λab7eb0e8325f => {
        λ70e66e25d624 = setTimeout(() => λab7eb0e8325f(λf0879d5b9217), 300);
      }) ]).finally(() => clearTimeout(λ70e66e25d624));
      for (const λ70e66e25d624 of λ7cb1054b8938) {
        if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
        if (this.onStatus({
          state: "\x63\x68\x65\x63\x6b\x69\x6e\x67",
          url: λ70e66e25d624
        }), !await this.probe(λ70e66e25d624)) continue;
        let λf0879d5b9217;
        try {
          λf0879d5b9217 = await this.createClient(λ70e66e25d624);
        } catch {
          continue;
        }
        if (this.closed) throw λf0879d5b9217.close?.(), new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
        for (this.client && this.retired.push(this.client); this.retired.length > 2; ) try {
          this.retired.shift()?.close?.();
        } catch {}
        this.client = λf0879d5b9217, this.url = λ70e66e25d624, this.failures = 0;
        try {
          this.storage?.setItem("\x74\x75\x74\x73\x69\x2e\x77\x6f\x72\x6b\x69\x6e\x67\x52\x65\x6c\x61\x79\x3a" + this.urls.join("\x7c"), λ70e66e25d624);
        } catch {}
        return void this.onStatus({
          state: λab7eb0e8325f ? "\x73\x77\x69\x74\x63\x68\x65\x64" : "\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64",
          url: λ70e66e25d624
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
  async recover(λab7eb0e8325f, λ70e66e25d624 = !1, λf0879d5b9217 = !1) {
    return !(this.closed || !this.online() || this.client === λab7eb0e8325f && (this.switching ? (await this.switching, 
    this.client === λab7eb0e8325f) : !λ70e66e25d624 && await this.probe(this.url) || this.client === λab7eb0e8325f && (await this.select(λf0879d5b9217 ? "" : this.url), 
    this.client === λab7eb0e8325f)));
  }
  async attempt(λab7eb0e8325f, λ70e66e25d624) {
    const λf0879d5b9217 = λ70e66e25d624[4], λ7cb1054b8938 = new AbortController;
    if (λf0879d5b9217?.aborted) throw λf0879d5b9217.reason || new DOMException("\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
    let λeaa2992eb0b4, λ3312d7b10a6b = !1, λ3743d3b4279b = !1;
    const λdaef168c2c74 = λf0879d5b9217 ? AbortSignal.any([ λf0879d5b9217, λ7cb1054b8938.signal ]) : λ7cb1054b8938.signal, λ6cc37f1bfad2 = Promise.resolve().then(() => λab7eb0e8325f.request(...λ70e66e25d624.slice(0, 4), λdaef168c2c74));
    λ6cc37f1bfad2.then(λab7eb0e8325f => {
      λ3743d3b4279b && λdaef168c2c74.aborted && λab7eb0e8325f?.body?.cancel?.().catch(() => {});
    }, () => {});
    const λb642348f9e43 = new Promise((λab7eb0e8325f, λ70e66e25d624) => {
      const _0x06a923_2 = () => λ70e66e25d624(λ3312d7b10a6b ? Object.assign(new Error("\x52\x65\x6c\x61\x79\x20\x72\x65\x71\x75\x65\x73\x74\x20\x74\x69\x6d\x65\x64\x20\x6f\x75\x74"), {
        name: "\x54\x69\x6d\x65\x6f\x75\x74\x45\x72\x72\x6f\x72"
      }) : λdaef168c2c74.reason);
      λdaef168c2c74.addEventListener("\x61\x62\x6f\x72\x74", _0x06a923_2, {
        once: !0
      }), λeaa2992eb0b4 = setTimeout(() => {
        λ3312d7b10a6b = !0, λ7cb1054b8938.abort();
      }, this.requestTimeoutMs), λ6cc37f1bfad2.finally(() => λdaef168c2c74.removeEventListener("\x61\x62\x6f\x72\x74", _0x06a923_2)).catch(() => {});
    });
    try {
      return await Promise.race([ λ6cc37f1bfad2, λb642348f9e43 ]);
    } finally {
      λ3743d3b4279b = !0, clearTimeout(λeaa2992eb0b4);
    }
  }
  async request(...λab7eb0e8325f) {
    if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
    this.ready || await this.init();
    const λ70e66e25d624 = this.client;
    try {
      return await this.attempt(λ70e66e25d624, λab7eb0e8325f);
    } catch (λf0879d5b9217) {
      if (λab7eb0e8325f[4]?.aborted || "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72" === λf0879d5b9217?.name) throw λf0879d5b9217;
      const λ7cb1054b8938 = "\x54\x69\x6d\x65\x6f\x75\x74\x45\x72\x72\x6f\x72" === λf0879d5b9217?.name || /timed?\s*out|timeout|ETIMEDOUT|ECONNRESET|network|socket|wisp|hyper.*(?:error|client)|muxtaskended|connection.*(?:closed|reset|lost|failed)|unexpected.*(?:eof|cutoff)|transport.*(?:closed|failed)/i.test(String(λf0879d5b9217?.message || λf0879d5b9217 || ""));
      let λeaa2992eb0b4 = !1;
      try {
        λeaa2992eb0b4 = await this.recover(λ70e66e25d624, λ7cb1054b8938, λ7cb1054b8938);
      } catch {}
      if (λeaa2992eb0b4 && /^(GET|HEAD)$/i.test(String(λab7eb0e8325f[1] || "\x47\x45\x54")) && !λab7eb0e8325f[4]?.aborted && !this.closed && this.online()) return this.attempt(this.client, λab7eb0e8325f);
      throw λf0879d5b9217;
    }
  }
  connect(...λab7eb0e8325f) {
    const λ70e66e25d624 = this.client, λf0879d5b9217 = λab7eb0e8325f[6];
    λab7eb0e8325f[6] = (...λab7eb0e8325f) => {
      this.recover(λ70e66e25d624).catch(() => {}), λf0879d5b9217?.(...λab7eb0e8325f);
    };
    try {
      return λ70e66e25d624.connect(...λab7eb0e8325f);
    } catch (λab7eb0e8325f) {
      throw this.recover(λ70e66e25d624).catch(() => {}), λab7eb0e8325f;
    }
  }
  async check() {
    if (this.closed || !this.client || !this.online() || !this.visible()) return;
    const λab7eb0e8325f = this.client, λ70e66e25d624 = this.url, λf0879d5b9217 = await this.probe(λ70e66e25d624);
    this.closed || λab7eb0e8325f !== this.client || (this.failures = λf0879d5b9217 ? 0 : this.failures + 1, 
    this.failures >= 2 && await this.recover(λab7eb0e8325f, !0).catch(() => {}));
  }
  schedule() {
    !this.closed && this.monitorMs && (this.timer = setTimeout(async () => {
      await this.check(), this.schedule();
    }, this.monitorMs));
  }
  close() {
    this.closed = !0, clearTimeout(this.timer);
    for (const λab7eb0e8325f of [ this.client, ...this.retired ]) try {
      λab7eb0e8325f?.close?.();
    } catch {}
    this.retired = [];
  }
}

const λ70e66e25d624 = new Map;

export async function rankForBlocker(λab7eb0e8325f, λf0879d5b9217, {fetcher: λ7cb1054b8938 = fetch, onHint: λeaa2992eb0b4 = () => {}} = {}) {
  if (!/^[a-z0-9_-]{1,64}$/.test(λf0879d5b9217 || "")) return λab7eb0e8325f;
  const λ3312d7b10a6b = await Promise.all(λab7eb0e8325f.map(async λab7eb0e8325f => {
    const λeaa2992eb0b4 = new URL(λab7eb0e8325f).hostname;
    if ("\x6c\x6f\x63\x61\x6c\x68\x6f\x73\x74" === λeaa2992eb0b4 || λeaa2992eb0b4.endsWith("\x2e\x6c\x6f\x63\x61\x6c") || /^[\d.]+$/.test(λeaa2992eb0b4) || λeaa2992eb0b4.includes("\x3a")) return {
      url: λab7eb0e8325f,
      blocked: null
    };
    const λ3312d7b10a6b = λf0879d5b9217 + "\x3a" + λeaa2992eb0b4, λ3743d3b4279b = λ70e66e25d624.get(λ3312d7b10a6b);
    if (λ3743d3b4279b && λ3743d3b4279b.until > Date.now()) return {
      url: λab7eb0e8325f,
      blocked: λ3743d3b4279b.blocked
    };
    let λdaef168c2c74 = null;
    const λ6cc37f1bfad2 = new AbortController, λb642348f9e43 = setTimeout(() => λ6cc37f1bfad2.abort(), 4e3);
    try {
      const λab7eb0e8325f = await λ7cb1054b8938("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6c\x69\x6e\x6b\x2d\x63\x68\x65\x63\x6b\x65\x72\x2f\x63\x68\x65\x63\x6b", {
        method: "\x50\x4f\x53\x54",
        signal: λ6cc37f1bfad2.signal,
        headers: {
          "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"
        },
        body: JSON.stringify({
          url: "\x68\x74\x74\x70\x73\x3a\x2f\x2f" + λeaa2992eb0b4 + "\x2f",
          vendor: λf0879d5b9217
        })
      });
      if (λab7eb0e8325f.ok) {
        const λ70e66e25d624 = await λab7eb0e8325f.json(), λ7cb1054b8938 = λ70e66e25d624?.vendors?.[λf0879d5b9217];
        λ7cb1054b8938?.error || "\x62\x6f\x6f\x6c\x65\x61\x6e" != typeof λ7cb1054b8938?.blocked || (λdaef168c2c74 = λ7cb1054b8938.blocked);
      }
    } catch {} finally {
      clearTimeout(λb642348f9e43);
    }
    return λ70e66e25d624.set(λ3312d7b10a6b, {
      blocked: λdaef168c2c74,
      until: Date.now() + (null === λdaef168c2c74 ? 3e4 : 6e5)
    }), λ70e66e25d624.size > 100 && λ70e66e25d624.delete(λ70e66e25d624.keys().next().value), 
    {
      url: λab7eb0e8325f,
      blocked: λdaef168c2c74
    };
  }));
  return λeaa2992eb0b4({
    vendor: λf0879d5b9217,
    results: λ3312d7b10a6b
  }), λ3312d7b10a6b.sort((λab7eb0e8325f, λ70e66e25d624) => Number(!0 === λab7eb0e8325f.blocked) - Number(!0 === λ70e66e25d624.blocked)).map(λab7eb0e8325f => λab7eb0e8325f.url);
}
