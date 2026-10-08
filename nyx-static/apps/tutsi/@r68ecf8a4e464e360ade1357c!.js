import { httpRelayUrl as λ73082c0c2aec } from "\x2e\x2f\x40\x72\x36\x39\x34\x62\x61\x38\x32\x65\x39\x34\x34\x31\x37\x38\x64\x65\x36\x38\x66\x39\x62\x66\x38\x64\x21\x2e\x6a\x73";

export function normalizeRelay(λ73082c0c2aec, λ6bb8d9d5e72e = globalThis.location?.protocol || "\x68\x74\x74\x70\x73\x3a") {
  try {
    const λc8dfc178d012 = new URL(λ73082c0c2aec);
    return ![ "\x77\x73\x3a", "\x77\x73\x73\x3a" ].includes(λc8dfc178d012.protocol) || λc8dfc178d012.username || λc8dfc178d012.password || λc8dfc178d012.hash || "\x68\x74\x74\x70\x73\x3a" === λ6bb8d9d5e72e && "\x77\x73\x73\x3a" !== λc8dfc178d012.protocol ? "" : λc8dfc178d012.href;
  } catch {
    return "";
  }
}

export function relayCandidates(λ73082c0c2aec, λ6bb8d9d5e72e = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λc8dfc178d012 = location) {
  const λ9b40f26c7ff7 = `${"\x68\x74\x74\x70\x73\x3a" === λc8dfc178d012.protocol ? "\x77\x73\x73\x3a" : "\x77\x73\x3a"}\x2f\x2f${λc8dfc178d012.host}\x2f\x72\x65\x73\x6f\x75\x72\x63\x65\x73\x2f\x6c\x69\x76\x65\x2f`, λ516230a5109c = normalizeRelay(λ73082c0c2aec.relay, λc8dfc178d012.protocol) || normalizeRelay(λ6bb8d9d5e72e.wispUrl, λc8dfc178d012.protocol) || λ9b40f26c7ff7;
  return !1 === λ73082c0c2aec.autoRelay ? [ λ516230a5109c ] : [ ...new Set([ λ516230a5109c, λ9b40f26c7ff7, ...Array.isArray(λ6bb8d9d5e72e.wispUrls) ? λ6bb8d9d5e72e.wispUrls : [], "\x77\x73\x73\x3a\x2f\x2f\x63\x6f\x70\x69\x75\x6d\x2d\x77\x69\x73\x70\x2d\x39\x35\x32\x39\x34\x36\x33\x2e\x6f\x6e\x72\x65\x6e\x64\x65\x72\x2e\x63\x6f\x6d\x2f\x77\x69\x73\x70\x2f" ].map(λ73082c0c2aec => normalizeRelay(λ73082c0c2aec, λc8dfc178d012.protocol)).filter(Boolean)) ].slice(0, 6);
}

export function transportCandidates(λ6bb8d9d5e72e, λc8dfc178d012 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ9b40f26c7ff7 = location) {
  const λ516230a5109c = λ73082c0c2aec(λ9b40f26c7ff7), λ067fadfc6215 = relayCandidates(λ6bb8d9d5e72e, λc8dfc178d012, λ9b40f26c7ff7);
  return !1 === λ6bb8d9d5e72e.httpBridge ? relayCandidates(λ6bb8d9d5e72e.relay === λ516230a5109c ? {
    ...λ6bb8d9d5e72e,
    relay: ""
  } : λ6bb8d9d5e72e, λc8dfc178d012.wispUrl === λ516230a5109c ? {
    ...λc8dfc178d012,
    wispUrl: ""
  } : λc8dfc178d012, λ9b40f26c7ff7).filter(λ73082c0c2aec => λ73082c0c2aec !== λ516230a5109c) : λ6bb8d9d5e72e.relay && λ6bb8d9d5e72e.relay !== λ516230a5109c ? [ ...new Set([ ...λ067fadfc6215, ...!1 === λ6bb8d9d5e72e.autoRelay ? [] : [ λ516230a5109c ] ]) ] : [ ...new Set([ λ516230a5109c, ...!1 === λ6bb8d9d5e72e.autoRelay ? [] : λ067fadfc6215 ]) ];
}

export function probeWisp(λ73082c0c2aec, {timeout: λ6bb8d9d5e72e = 7e3, Socket: λc8dfc178d012 = WebSocket} = {}) {
  return new Promise(λ9b40f26c7ff7 => {
    let λ516230a5109c, λ067fadfc6215 = !1;
    const _0x06a923_6 = λ73082c0c2aec => {
      if (!λ067fadfc6215) {
        if (λ067fadfc6215 = !0, clearTimeout(λde1e1fd91966), λ516230a5109c) {
          λ516230a5109c.onmessage = λ516230a5109c.onerror = λ516230a5109c.onclose = null;
          try {
            λ516230a5109c.close();
          } catch {}
        }
        λ9b40f26c7ff7(λ73082c0c2aec);
      }
    }, λde1e1fd91966 = setTimeout(() => _0x06a923_6(!1), λ6bb8d9d5e72e);
    try {
      λ516230a5109c = new λc8dfc178d012(λ73082c0c2aec), λ516230a5109c.binaryType = "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72", 
      λ516230a5109c.onmessage = λ73082c0c2aec => {
        if (!(λ73082c0c2aec.data instanceof ArrayBuffer)) return;
        const λ6bb8d9d5e72e = new Uint8Array(λ73082c0c2aec.data);
        λ6bb8d9d5e72e.length >= 9 && 3 === λ6bb8d9d5e72e[0] && 0 === new DataView(λ73082c0c2aec.data).getUint32(1, !0) && _0x06a923_6(!0);
      }, λ516230a5109c.onerror = λ516230a5109c.onclose = () => _0x06a923_6(!1);
    } catch {
      _0x06a923_6(!1);
    }
  });
}

export class RelayTransport {
  constructor({urls: λ73082c0c2aec, createClient: λ6bb8d9d5e72e, probe: λc8dfc178d012 = probeWisp, onStatus: λ9b40f26c7ff7 = () => {}, storage: λ516230a5109c = globalThis.sessionStorage, monitorMs: λ067fadfc6215 = 3e4, requestTimeoutMs: λde1e1fd91966 = 2e4, rank: λ2c61704ce05d = async λ73082c0c2aec => λ73082c0c2aec, online: λ3057bd348a8e = () => !1 !== globalThis.navigator?.onLine, visible: λcc33d45a1f48 = () => !globalThis.document?.hidden}) {
    Object.assign(this, {
      urls: λ73082c0c2aec,
      createClient: λ6bb8d9d5e72e,
      probe: λc8dfc178d012,
      onStatus: λ9b40f26c7ff7,
      storage: λ516230a5109c,
      monitorMs: λ067fadfc6215,
      requestTimeoutMs: λde1e1fd91966,
      rank: λ2c61704ce05d,
      online: λ3057bd348a8e,
      visible: λcc33d45a1f48
    }), this.ready = !1, this.closed = !1, this.url = "", this.client = null, this.switching = null, 
    this.failures = 0, this.retired = [];
  }
  async init() {
    await this.select(), this.ready = !0, this.schedule();
  }
  async select(λ73082c0c2aec = "") {
    if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
    if (this.switching) return this.switching;
    if (!this.online()) throw new Error("\x59\x6f\x75\x20\x61\x72\x65\x20\x6f\x66\x66\x6c\x69\x6e\x65\x2e\x20\x52\x65\x63\x6f\x6e\x6e\x65\x63\x74\x20\x74\x6f\x20\x57\x69\x2d\x46\x69\x20\x61\x6e\x64\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x2e");
    let λ6bb8d9d5e72e = "";
    try {
      λ6bb8d9d5e72e = this.storage?.getItem("\x74\x75\x74\x73\x69\x2e\x77\x6f\x72\x6b\x69\x6e\x67\x52\x65\x6c\x61\x79\x3a" + this.urls.join("\x7c")) || "";
    } catch {}
    const λc8dfc178d012 = [ ...new Set([ this.url, λ6bb8d9d5e72e, ...this.urls ]) ].filter(λ6bb8d9d5e72e => this.urls.includes(λ6bb8d9d5e72e) && λ6bb8d9d5e72e !== λ73082c0c2aec);
    this.switching = (async () => {
      let λ6bb8d9d5e72e;
      const λ9b40f26c7ff7 = await Promise.race([ Promise.resolve().then(() => this.rank(λc8dfc178d012)).catch(() => λc8dfc178d012), new Promise(λ73082c0c2aec => {
        λ6bb8d9d5e72e = setTimeout(() => λ73082c0c2aec(λc8dfc178d012), 300);
      }) ]).finally(() => clearTimeout(λ6bb8d9d5e72e));
      for (const λ6bb8d9d5e72e of λ9b40f26c7ff7) {
        if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
        if (this.onStatus({
          state: "\x63\x68\x65\x63\x6b\x69\x6e\x67",
          url: λ6bb8d9d5e72e
        }), !await this.probe(λ6bb8d9d5e72e)) continue;
        let λc8dfc178d012;
        try {
          λc8dfc178d012 = await this.createClient(λ6bb8d9d5e72e);
        } catch {
          continue;
        }
        if (this.closed) throw λc8dfc178d012.close?.(), new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
        for (this.client && this.retired.push(this.client); this.retired.length > 2; ) try {
          this.retired.shift()?.close?.();
        } catch {}
        this.client = λc8dfc178d012, this.url = λ6bb8d9d5e72e, this.failures = 0;
        try {
          this.storage?.setItem("\x74\x75\x74\x73\x69\x2e\x77\x6f\x72\x6b\x69\x6e\x67\x52\x65\x6c\x61\x79\x3a" + this.urls.join("\x7c"), λ6bb8d9d5e72e);
        } catch {}
        return void this.onStatus({
          state: λ73082c0c2aec ? "\x73\x77\x69\x74\x63\x68\x65\x64" : "\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64",
          url: λ6bb8d9d5e72e
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
  async recover(λ73082c0c2aec, λ6bb8d9d5e72e = !1, λc8dfc178d012 = !1) {
    return !(this.closed || !this.online() || this.client === λ73082c0c2aec && (this.switching ? (await this.switching, 
    this.client === λ73082c0c2aec) : !λ6bb8d9d5e72e && await this.probe(this.url) || this.client === λ73082c0c2aec && (await this.select(λc8dfc178d012 ? "" : this.url), 
    this.client === λ73082c0c2aec)));
  }
  async attempt(λ73082c0c2aec, λ6bb8d9d5e72e) {
    const λc8dfc178d012 = λ6bb8d9d5e72e[4], λ9b40f26c7ff7 = new AbortController;
    if (λc8dfc178d012?.aborted) throw λc8dfc178d012.reason || new DOMException("\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
    let λ516230a5109c, λ067fadfc6215 = !1, λde1e1fd91966 = !1;
    const λ2c61704ce05d = λc8dfc178d012 ? AbortSignal.any([ λc8dfc178d012, λ9b40f26c7ff7.signal ]) : λ9b40f26c7ff7.signal, λ3057bd348a8e = Promise.resolve().then(() => λ73082c0c2aec.request(...λ6bb8d9d5e72e.slice(0, 4), λ2c61704ce05d));
    λ3057bd348a8e.then(λ73082c0c2aec => {
      λde1e1fd91966 && λ2c61704ce05d.aborted && λ73082c0c2aec?.body?.cancel?.().catch(() => {});
    }, () => {});
    const λcc33d45a1f48 = new Promise((λ73082c0c2aec, λ6bb8d9d5e72e) => {
      const _0x06a923_2 = () => λ6bb8d9d5e72e(λ067fadfc6215 ? Object.assign(new Error("\x52\x65\x6c\x61\x79\x20\x72\x65\x71\x75\x65\x73\x74\x20\x74\x69\x6d\x65\x64\x20\x6f\x75\x74"), {
        name: "\x54\x69\x6d\x65\x6f\x75\x74\x45\x72\x72\x6f\x72"
      }) : λ2c61704ce05d.reason);
      λ2c61704ce05d.addEventListener("\x61\x62\x6f\x72\x74", _0x06a923_2, {
        once: !0
      }), λ516230a5109c = setTimeout(() => {
        λ067fadfc6215 = !0, λ9b40f26c7ff7.abort();
      }, this.requestTimeoutMs), λ3057bd348a8e.finally(() => λ2c61704ce05d.removeEventListener("\x61\x62\x6f\x72\x74", _0x06a923_2)).catch(() => {});
    });
    try {
      return await Promise.race([ λ3057bd348a8e, λcc33d45a1f48 ]);
    } finally {
      λde1e1fd91966 = !0, clearTimeout(λ516230a5109c);
    }
  }
  async request(...λ73082c0c2aec) {
    if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
    this.ready || await this.init();
    const λ6bb8d9d5e72e = this.client;
    try {
      return await this.attempt(λ6bb8d9d5e72e, λ73082c0c2aec);
    } catch (λc8dfc178d012) {
      if (λ73082c0c2aec[4]?.aborted || "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72" === λc8dfc178d012?.name) throw λc8dfc178d012;
      const λ9b40f26c7ff7 = "\x54\x69\x6d\x65\x6f\x75\x74\x45\x72\x72\x6f\x72" === λc8dfc178d012?.name || /timed?\s*out|timeout|ETIMEDOUT|ECONNRESET|network|socket|wisp|hyper.*(?:error|client)|muxtaskended|connection.*(?:closed|reset|lost|failed)|unexpected.*(?:eof|cutoff)|transport.*(?:closed|failed)/i.test(String(λc8dfc178d012?.message || λc8dfc178d012 || ""));
      let λ516230a5109c = !1;
      try {
        λ516230a5109c = await this.recover(λ6bb8d9d5e72e, λ9b40f26c7ff7, λ9b40f26c7ff7);
      } catch {}
      if (λ516230a5109c && /^(GET|HEAD)$/i.test(String(λ73082c0c2aec[1] || "\x47\x45\x54")) && !λ73082c0c2aec[4]?.aborted && !this.closed && this.online()) return this.attempt(this.client, λ73082c0c2aec);
      throw λc8dfc178d012;
    }
  }
  connect(...λ73082c0c2aec) {
    const λ6bb8d9d5e72e = this.client, λc8dfc178d012 = λ73082c0c2aec[6];
    λ73082c0c2aec[6] = (...λ73082c0c2aec) => {
      this.recover(λ6bb8d9d5e72e).catch(() => {}), λc8dfc178d012?.(...λ73082c0c2aec);
    };
    try {
      return λ6bb8d9d5e72e.connect(...λ73082c0c2aec);
    } catch (λ73082c0c2aec) {
      throw this.recover(λ6bb8d9d5e72e).catch(() => {}), λ73082c0c2aec;
    }
  }
  async check() {
    if (this.closed || !this.client || !this.online() || !this.visible()) return;
    const λ73082c0c2aec = this.client, λ6bb8d9d5e72e = this.url, λc8dfc178d012 = await this.probe(λ6bb8d9d5e72e);
    this.closed || λ73082c0c2aec !== this.client || (this.failures = λc8dfc178d012 ? 0 : this.failures + 1, 
    this.failures >= 2 && await this.recover(λ73082c0c2aec, !0).catch(() => {}));
  }
  schedule() {
    !this.closed && this.monitorMs && (this.timer = setTimeout(async () => {
      await this.check(), this.schedule();
    }, this.monitorMs));
  }
  close() {
    this.closed = !0, clearTimeout(this.timer);
    for (const λ73082c0c2aec of [ this.client, ...this.retired ]) try {
      λ73082c0c2aec?.close?.();
    } catch {}
    this.retired = [];
  }
}

const λ6bb8d9d5e72e = new Map;

export async function rankForBlocker(λ73082c0c2aec, λc8dfc178d012, {fetcher: λ9b40f26c7ff7 = fetch, onHint: λ516230a5109c = () => {}} = {}) {
  if (!/^[a-z0-9_-]{1,64}$/.test(λc8dfc178d012 || "")) return λ73082c0c2aec;
  const λ067fadfc6215 = await Promise.all(λ73082c0c2aec.map(async λ73082c0c2aec => {
    const λ516230a5109c = new URL(λ73082c0c2aec).hostname;
    if ("\x6c\x6f\x63\x61\x6c\x68\x6f\x73\x74" === λ516230a5109c || λ516230a5109c.endsWith("\x2e\x6c\x6f\x63\x61\x6c") || /^[\d.]+$/.test(λ516230a5109c) || λ516230a5109c.includes("\x3a")) return {
      url: λ73082c0c2aec,
      blocked: null
    };
    const λ067fadfc6215 = λc8dfc178d012 + "\x3a" + λ516230a5109c, λde1e1fd91966 = λ6bb8d9d5e72e.get(λ067fadfc6215);
    if (λde1e1fd91966 && λde1e1fd91966.until > Date.now()) return {
      url: λ73082c0c2aec,
      blocked: λde1e1fd91966.blocked
    };
    let λ2c61704ce05d = null;
    const λ3057bd348a8e = new AbortController, λcc33d45a1f48 = setTimeout(() => λ3057bd348a8e.abort(), 4e3);
    try {
      const λ73082c0c2aec = await λ9b40f26c7ff7("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6c\x69\x6e\x6b\x2d\x63\x68\x65\x63\x6b\x65\x72\x2f\x63\x68\x65\x63\x6b", {
        method: "\x50\x4f\x53\x54",
        signal: λ3057bd348a8e.signal,
        headers: {
          "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"
        },
        body: JSON.stringify({
          url: "\x68\x74\x74\x70\x73\x3a\x2f\x2f" + λ516230a5109c + "\x2f",
          vendor: λc8dfc178d012
        })
      });
      if (λ73082c0c2aec.ok) {
        const λ6bb8d9d5e72e = await λ73082c0c2aec.json(), λ9b40f26c7ff7 = λ6bb8d9d5e72e?.vendors?.[λc8dfc178d012];
        λ9b40f26c7ff7?.error || "\x62\x6f\x6f\x6c\x65\x61\x6e" != typeof λ9b40f26c7ff7?.blocked || (λ2c61704ce05d = λ9b40f26c7ff7.blocked);
      }
    } catch {} finally {
      clearTimeout(λcc33d45a1f48);
    }
    return λ6bb8d9d5e72e.set(λ067fadfc6215, {
      blocked: λ2c61704ce05d,
      until: Date.now() + (null === λ2c61704ce05d ? 3e4 : 6e5)
    }), λ6bb8d9d5e72e.size > 100 && λ6bb8d9d5e72e.delete(λ6bb8d9d5e72e.keys().next().value), 
    {
      url: λ73082c0c2aec,
      blocked: λ2c61704ce05d
    };
  }));
  return λ516230a5109c({
    vendor: λc8dfc178d012,
    results: λ067fadfc6215
  }), λ067fadfc6215.sort((λ73082c0c2aec, λ6bb8d9d5e72e) => Number(!0 === λ73082c0c2aec.blocked) - Number(!0 === λ6bb8d9d5e72e.blocked)).map(λ73082c0c2aec => λ73082c0c2aec.url);
}
