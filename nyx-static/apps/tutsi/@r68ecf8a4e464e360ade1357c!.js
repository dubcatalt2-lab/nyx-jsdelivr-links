import { httpRelayUrl as λ5ca667f48c5d } from "\x2e\x2f\x40\x72\x36\x39\x34\x62\x61\x38\x32\x65\x39\x34\x34\x31\x37\x38\x64\x65\x36\x38\x66\x39\x62\x66\x38\x64\x21\x2e\x6a\x73";

export function normalizeRelay(λ5ca667f48c5d, λb3750ce3ea42 = globalThis.location?.protocol || "\x68\x74\x74\x70\x73\x3a") {
  try {
    const λc47e464856d7 = new URL(λ5ca667f48c5d);
    return ![ "\x77\x73\x3a", "\x77\x73\x73\x3a" ].includes(λc47e464856d7.protocol) || λc47e464856d7.username || λc47e464856d7.password || λc47e464856d7.hash || "\x68\x74\x74\x70\x73\x3a" === λb3750ce3ea42 && "\x77\x73\x73\x3a" !== λc47e464856d7.protocol ? "" : λc47e464856d7.href;
  } catch {
    return "";
  }
}

export function relayCandidates(λ5ca667f48c5d, λb3750ce3ea42 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λc47e464856d7 = location) {
  const λ3f3e34418378 = `${"\x68\x74\x74\x70\x73\x3a" === λc47e464856d7.protocol ? "\x77\x73\x73\x3a" : "\x77\x73\x3a"}\x2f\x2f${λc47e464856d7.host}\x2f\x72\x65\x73\x6f\x75\x72\x63\x65\x73\x2f\x6c\x69\x76\x65\x2f`, λ4220a305fce3 = normalizeRelay(λ5ca667f48c5d.relay, λc47e464856d7.protocol) || normalizeRelay(λb3750ce3ea42.wispUrl, λc47e464856d7.protocol) || λ3f3e34418378;
  return !1 === λ5ca667f48c5d.autoRelay ? [ λ4220a305fce3 ] : [ ...new Set([ λ4220a305fce3, λ3f3e34418378, ...Array.isArray(λb3750ce3ea42.wispUrls) ? λb3750ce3ea42.wispUrls : [], "\x77\x73\x73\x3a\x2f\x2f\x63\x6f\x70\x69\x75\x6d\x2d\x77\x69\x73\x70\x2d\x39\x35\x32\x39\x34\x36\x33\x2e\x6f\x6e\x72\x65\x6e\x64\x65\x72\x2e\x63\x6f\x6d\x2f\x77\x69\x73\x70\x2f" ].map(λ5ca667f48c5d => normalizeRelay(λ5ca667f48c5d, λc47e464856d7.protocol)).filter(Boolean)) ].slice(0, 6);
}

export function transportCandidates(λb3750ce3ea42, λc47e464856d7 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ3f3e34418378 = location) {
  const λ4220a305fce3 = λ5ca667f48c5d(λ3f3e34418378), λd7a68eb799ba = relayCandidates(λb3750ce3ea42, λc47e464856d7, λ3f3e34418378);
  return !1 === λb3750ce3ea42.httpBridge ? relayCandidates(λb3750ce3ea42.relay === λ4220a305fce3 ? {
    ...λb3750ce3ea42,
    relay: ""
  } : λb3750ce3ea42, λc47e464856d7.wispUrl === λ4220a305fce3 ? {
    ...λc47e464856d7,
    wispUrl: ""
  } : λc47e464856d7, λ3f3e34418378).filter(λ5ca667f48c5d => λ5ca667f48c5d !== λ4220a305fce3) : λb3750ce3ea42.relay && λb3750ce3ea42.relay !== λ4220a305fce3 ? [ ...new Set([ ...λd7a68eb799ba, ...!1 === λb3750ce3ea42.autoRelay ? [] : [ λ4220a305fce3 ] ]) ] : [ ...new Set([ λ4220a305fce3, ...!1 === λb3750ce3ea42.autoRelay ? [] : λd7a68eb799ba ]) ];
}

export function probeWisp(λ5ca667f48c5d, {timeout: λb3750ce3ea42 = 7e3, Socket: λc47e464856d7 = WebSocket} = {}) {
  return new Promise(λ3f3e34418378 => {
    let λ4220a305fce3, λd7a68eb799ba = !1;
    const _0x06a923_6 = λ5ca667f48c5d => {
      if (!λd7a68eb799ba) {
        if (λd7a68eb799ba = !0, clearTimeout(λ91a4888bbeb5), λ4220a305fce3) {
          λ4220a305fce3.onmessage = λ4220a305fce3.onerror = λ4220a305fce3.onclose = null;
          try {
            λ4220a305fce3.close();
          } catch {}
        }
        λ3f3e34418378(λ5ca667f48c5d);
      }
    }, λ91a4888bbeb5 = setTimeout(() => _0x06a923_6(!1), λb3750ce3ea42);
    try {
      λ4220a305fce3 = new λc47e464856d7(λ5ca667f48c5d), λ4220a305fce3.binaryType = "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72", 
      λ4220a305fce3.onmessage = λ5ca667f48c5d => {
        if (!(λ5ca667f48c5d.data instanceof ArrayBuffer)) return;
        const λb3750ce3ea42 = new Uint8Array(λ5ca667f48c5d.data);
        λb3750ce3ea42.length >= 9 && 3 === λb3750ce3ea42[0] && 0 === new DataView(λ5ca667f48c5d.data).getUint32(1, !0) && _0x06a923_6(!0);
      }, λ4220a305fce3.onerror = λ4220a305fce3.onclose = () => _0x06a923_6(!1);
    } catch {
      _0x06a923_6(!1);
    }
  });
}

export class RelayTransport {
  constructor({urls: λ5ca667f48c5d, createClient: λb3750ce3ea42, probe: λc47e464856d7 = probeWisp, onStatus: λ3f3e34418378 = () => {}, storage: λ4220a305fce3 = globalThis.sessionStorage, monitorMs: λd7a68eb799ba = 3e4, requestTimeoutMs: λ91a4888bbeb5 = 2e4, rank: λ63b9ddf72623 = async λ5ca667f48c5d => λ5ca667f48c5d, online: λa142f57b8f7d = () => !1 !== globalThis.navigator?.onLine, visible: λ1c5da3c2bf90 = () => !globalThis.document?.hidden}) {
    Object.assign(this, {
      urls: λ5ca667f48c5d,
      createClient: λb3750ce3ea42,
      probe: λc47e464856d7,
      onStatus: λ3f3e34418378,
      storage: λ4220a305fce3,
      monitorMs: λd7a68eb799ba,
      requestTimeoutMs: λ91a4888bbeb5,
      rank: λ63b9ddf72623,
      online: λa142f57b8f7d,
      visible: λ1c5da3c2bf90
    }), this.ready = !1, this.closed = !1, this.url = "", this.client = null, this.switching = null, 
    this.failures = 0, this.retired = [];
  }
  async init() {
    await this.select(), this.ready = !0, this.schedule();
  }
  async select(λ5ca667f48c5d = "") {
    if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
    if (this.switching) return this.switching;
    if (!this.online()) throw new Error("\x59\x6f\x75\x20\x61\x72\x65\x20\x6f\x66\x66\x6c\x69\x6e\x65\x2e\x20\x52\x65\x63\x6f\x6e\x6e\x65\x63\x74\x20\x74\x6f\x20\x57\x69\x2d\x46\x69\x20\x61\x6e\x64\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x2e");
    let λb3750ce3ea42 = "";
    try {
      λb3750ce3ea42 = this.storage?.getItem("\x74\x75\x74\x73\x69\x2e\x77\x6f\x72\x6b\x69\x6e\x67\x52\x65\x6c\x61\x79\x3a" + this.urls.join("\x7c")) || "";
    } catch {}
    const λc47e464856d7 = [ ...new Set([ this.url, λb3750ce3ea42, ...this.urls ]) ].filter(λb3750ce3ea42 => this.urls.includes(λb3750ce3ea42) && λb3750ce3ea42 !== λ5ca667f48c5d);
    this.switching = (async () => {
      let λb3750ce3ea42;
      const λ3f3e34418378 = await Promise.race([ Promise.resolve().then(() => this.rank(λc47e464856d7)).catch(() => λc47e464856d7), new Promise(λ5ca667f48c5d => {
        λb3750ce3ea42 = setTimeout(() => λ5ca667f48c5d(λc47e464856d7), 300);
      }) ]).finally(() => clearTimeout(λb3750ce3ea42));
      for (const λb3750ce3ea42 of λ3f3e34418378) {
        if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
        if (this.onStatus({
          state: "\x63\x68\x65\x63\x6b\x69\x6e\x67",
          url: λb3750ce3ea42
        }), !await this.probe(λb3750ce3ea42)) continue;
        let λc47e464856d7;
        try {
          λc47e464856d7 = await this.createClient(λb3750ce3ea42);
        } catch {
          continue;
        }
        if (this.closed) throw λc47e464856d7.close?.(), new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
        for (this.client && this.retired.push(this.client); this.retired.length > 2; ) try {
          this.retired.shift()?.close?.();
        } catch {}
        this.client = λc47e464856d7, this.url = λb3750ce3ea42, this.failures = 0;
        try {
          this.storage?.setItem("\x74\x75\x74\x73\x69\x2e\x77\x6f\x72\x6b\x69\x6e\x67\x52\x65\x6c\x61\x79\x3a" + this.urls.join("\x7c"), λb3750ce3ea42);
        } catch {}
        return void this.onStatus({
          state: λ5ca667f48c5d ? "\x73\x77\x69\x74\x63\x68\x65\x64" : "\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64",
          url: λb3750ce3ea42
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
  async recover(λ5ca667f48c5d, λb3750ce3ea42 = !1, λc47e464856d7 = !1) {
    return !(this.closed || !this.online() || this.client === λ5ca667f48c5d && (this.switching ? (await this.switching, 
    this.client === λ5ca667f48c5d) : !λb3750ce3ea42 && await this.probe(this.url) || this.client === λ5ca667f48c5d && (await this.select(λc47e464856d7 ? "" : this.url), 
    this.client === λ5ca667f48c5d)));
  }
  async attempt(λ5ca667f48c5d, λb3750ce3ea42) {
    const λc47e464856d7 = λb3750ce3ea42[4], λ3f3e34418378 = new AbortController;
    if (λc47e464856d7?.aborted) throw λc47e464856d7.reason || new DOMException("\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
    let λ4220a305fce3, λd7a68eb799ba = !1, λ91a4888bbeb5 = !1;
    const λ63b9ddf72623 = λc47e464856d7 ? AbortSignal.any([ λc47e464856d7, λ3f3e34418378.signal ]) : λ3f3e34418378.signal, λa142f57b8f7d = Promise.resolve().then(() => λ5ca667f48c5d.request(...λb3750ce3ea42.slice(0, 4), λ63b9ddf72623));
    λa142f57b8f7d.then(λ5ca667f48c5d => {
      λ91a4888bbeb5 && λ63b9ddf72623.aborted && λ5ca667f48c5d?.body?.cancel?.().catch(() => {});
    }, () => {});
    const λ1c5da3c2bf90 = new Promise((λ5ca667f48c5d, λb3750ce3ea42) => {
      const _0x06a923_2 = () => λb3750ce3ea42(λd7a68eb799ba ? Object.assign(new Error("\x52\x65\x6c\x61\x79\x20\x72\x65\x71\x75\x65\x73\x74\x20\x74\x69\x6d\x65\x64\x20\x6f\x75\x74"), {
        name: "\x54\x69\x6d\x65\x6f\x75\x74\x45\x72\x72\x6f\x72"
      }) : λ63b9ddf72623.reason);
      λ63b9ddf72623.addEventListener("\x61\x62\x6f\x72\x74", _0x06a923_2, {
        once: !0
      }), λ4220a305fce3 = setTimeout(() => {
        λd7a68eb799ba = !0, λ3f3e34418378.abort();
      }, this.requestTimeoutMs), λa142f57b8f7d.finally(() => λ63b9ddf72623.removeEventListener("\x61\x62\x6f\x72\x74", _0x06a923_2)).catch(() => {});
    });
    try {
      return await Promise.race([ λa142f57b8f7d, λ1c5da3c2bf90 ]);
    } finally {
      λ91a4888bbeb5 = !0, clearTimeout(λ4220a305fce3);
    }
  }
  async request(...λ5ca667f48c5d) {
    if (this.closed) throw new Error("\x52\x65\x6c\x61\x79\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6c\x6f\x73\x65\x64\x2e");
    this.ready || await this.init();
    const λb3750ce3ea42 = this.client;
    try {
      return await this.attempt(λb3750ce3ea42, λ5ca667f48c5d);
    } catch (λc47e464856d7) {
      if (λ5ca667f48c5d[4]?.aborted || "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72" === λc47e464856d7?.name) throw λc47e464856d7;
      const λ3f3e34418378 = "\x54\x69\x6d\x65\x6f\x75\x74\x45\x72\x72\x6f\x72" === λc47e464856d7?.name || /timed?\s*out|timeout|ETIMEDOUT|ECONNRESET|network|socket|wisp|hyper.*(?:error|client)|muxtaskended|connection.*(?:closed|reset|lost|failed)|unexpected.*(?:eof|cutoff)|transport.*(?:closed|failed)/i.test(String(λc47e464856d7?.message || λc47e464856d7 || ""));
      let λ4220a305fce3 = !1;
      try {
        λ4220a305fce3 = await this.recover(λb3750ce3ea42, λ3f3e34418378, λ3f3e34418378);
      } catch {}
      if (λ4220a305fce3 && /^(GET|HEAD)$/i.test(String(λ5ca667f48c5d[1] || "\x47\x45\x54")) && !λ5ca667f48c5d[4]?.aborted && !this.closed && this.online()) return this.attempt(this.client, λ5ca667f48c5d);
      throw λc47e464856d7;
    }
  }
  connect(...λ5ca667f48c5d) {
    const λb3750ce3ea42 = this.client, λc47e464856d7 = λ5ca667f48c5d[6];
    λ5ca667f48c5d[6] = (...λ5ca667f48c5d) => {
      this.recover(λb3750ce3ea42).catch(() => {}), λc47e464856d7?.(...λ5ca667f48c5d);
    };
    try {
      return λb3750ce3ea42.connect(...λ5ca667f48c5d);
    } catch (λ5ca667f48c5d) {
      throw this.recover(λb3750ce3ea42).catch(() => {}), λ5ca667f48c5d;
    }
  }
  async check() {
    if (this.closed || !this.client || !this.online() || !this.visible()) return;
    const λ5ca667f48c5d = this.client, λb3750ce3ea42 = this.url, λc47e464856d7 = await this.probe(λb3750ce3ea42);
    this.closed || λ5ca667f48c5d !== this.client || (this.failures = λc47e464856d7 ? 0 : this.failures + 1, 
    this.failures >= 2 && await this.recover(λ5ca667f48c5d, !0).catch(() => {}));
  }
  schedule() {
    !this.closed && this.monitorMs && (this.timer = setTimeout(async () => {
      await this.check(), this.schedule();
    }, this.monitorMs));
  }
  close() {
    this.closed = !0, clearTimeout(this.timer);
    for (const λ5ca667f48c5d of [ this.client, ...this.retired ]) try {
      λ5ca667f48c5d?.close?.();
    } catch {}
    this.retired = [];
  }
}

const λb3750ce3ea42 = new Map;

export async function rankForBlocker(λ5ca667f48c5d, λc47e464856d7, {fetcher: λ3f3e34418378 = fetch, onHint: λ4220a305fce3 = () => {}} = {}) {
  if (!/^[a-z0-9_-]{1,64}$/.test(λc47e464856d7 || "")) return λ5ca667f48c5d;
  const λd7a68eb799ba = await Promise.all(λ5ca667f48c5d.map(async λ5ca667f48c5d => {
    const λ4220a305fce3 = new URL(λ5ca667f48c5d).hostname;
    if ("\x6c\x6f\x63\x61\x6c\x68\x6f\x73\x74" === λ4220a305fce3 || λ4220a305fce3.endsWith("\x2e\x6c\x6f\x63\x61\x6c") || /^[\d.]+$/.test(λ4220a305fce3) || λ4220a305fce3.includes("\x3a")) return {
      url: λ5ca667f48c5d,
      blocked: null
    };
    const λd7a68eb799ba = λc47e464856d7 + "\x3a" + λ4220a305fce3, λ91a4888bbeb5 = λb3750ce3ea42.get(λd7a68eb799ba);
    if (λ91a4888bbeb5 && λ91a4888bbeb5.until > Date.now()) return {
      url: λ5ca667f48c5d,
      blocked: λ91a4888bbeb5.blocked
    };
    let λ63b9ddf72623 = null;
    const λa142f57b8f7d = new AbortController, λ1c5da3c2bf90 = setTimeout(() => λa142f57b8f7d.abort(), 4e3);
    try {
      const λ5ca667f48c5d = await λ3f3e34418378("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6c\x69\x6e\x6b\x2d\x63\x68\x65\x63\x6b\x65\x72\x2f\x63\x68\x65\x63\x6b", {
        method: "\x50\x4f\x53\x54",
        signal: λa142f57b8f7d.signal,
        headers: {
          "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"
        },
        body: JSON.stringify({
          url: "\x68\x74\x74\x70\x73\x3a\x2f\x2f" + λ4220a305fce3 + "\x2f",
          vendor: λc47e464856d7
        })
      });
      if (λ5ca667f48c5d.ok) {
        const λb3750ce3ea42 = await λ5ca667f48c5d.json(), λ3f3e34418378 = λb3750ce3ea42?.vendors?.[λc47e464856d7];
        λ3f3e34418378?.error || "\x62\x6f\x6f\x6c\x65\x61\x6e" != typeof λ3f3e34418378?.blocked || (λ63b9ddf72623 = λ3f3e34418378.blocked);
      }
    } catch {} finally {
      clearTimeout(λ1c5da3c2bf90);
    }
    return λb3750ce3ea42.set(λd7a68eb799ba, {
      blocked: λ63b9ddf72623,
      until: Date.now() + (null === λ63b9ddf72623 ? 3e4 : 6e5)
    }), λb3750ce3ea42.size > 100 && λb3750ce3ea42.delete(λb3750ce3ea42.keys().next().value), 
    {
      url: λ5ca667f48c5d,
      blocked: λ63b9ddf72623
    };
  }));
  return λ4220a305fce3({
    vendor: λc47e464856d7,
    results: λd7a68eb799ba
  }), λd7a68eb799ba.sort((λ5ca667f48c5d, λb3750ce3ea42) => Number(!0 === λ5ca667f48c5d.blocked) - Number(!0 === λb3750ce3ea42.blocked)).map(λ5ca667f48c5d => λ5ca667f48c5d.url);
}
