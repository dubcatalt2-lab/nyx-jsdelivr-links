import { httpRelayUrl as λ34beabca06c4 } from "./@r694ba82e944178de68f9bf8d!.js";

export function normalizeRelay(λ34beabca06c4, λ06abeb369339 = globalThis.location?.protocol || "https:") {
  try {
    const λa61b278a5207 = new URL(λ34beabca06c4);
    return ![ "ws:", "wss:" ].includes(λa61b278a5207.protocol) || λa61b278a5207.username || λa61b278a5207.password || λa61b278a5207.hash || "https:" === λ06abeb369339 && "wss:" !== λa61b278a5207.protocol ? "" : λa61b278a5207.href;
  } catch {
    return "";
  }
}

export function relayCandidates(λ34beabca06c4, λ06abeb369339 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λa61b278a5207 = location) {
  const λe907a054a5c1 = `${"https:" === λa61b278a5207.protocol ? "wss:" : "ws:"}//${λa61b278a5207.host}/resources/live/`, λ964733907890 = normalizeRelay(λ34beabca06c4.relay, λa61b278a5207.protocol) || normalizeRelay(λ06abeb369339.wispUrl, λa61b278a5207.protocol) || λe907a054a5c1;
  return !1 === λ34beabca06c4.autoRelay ? [ λ964733907890 ] : [ ...new Set([ λ964733907890, λe907a054a5c1, ...Array.isArray(λ06abeb369339.wispUrls) ? λ06abeb369339.wispUrls : [], "wss://copium-wisp-9529463.onrender.com/wisp/" ].map(λ34beabca06c4 => normalizeRelay(λ34beabca06c4, λa61b278a5207.protocol)).filter(Boolean)) ].slice(0, 6);
}

export function transportCandidates(λ06abeb369339, λa61b278a5207 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λe907a054a5c1 = location) {
  const λ964733907890 = λ34beabca06c4(λe907a054a5c1), λec79d3819351 = relayCandidates(λ06abeb369339, λa61b278a5207, λe907a054a5c1);
  return !1 === λ06abeb369339.httpBridge ? relayCandidates(λ06abeb369339.relay === λ964733907890 ? {
    ...λ06abeb369339,
    relay: ""
  } : λ06abeb369339, λa61b278a5207.wispUrl === λ964733907890 ? {
    ...λa61b278a5207,
    wispUrl: ""
  } : λa61b278a5207, λe907a054a5c1).filter(λ34beabca06c4 => λ34beabca06c4 !== λ964733907890) : λ06abeb369339.relay && λ06abeb369339.relay !== λ964733907890 ? [ ...new Set([ ...λec79d3819351, ...!1 === λ06abeb369339.autoRelay ? [] : [ λ964733907890 ] ]) ] : [ ...new Set([ λ964733907890, ...!1 === λ06abeb369339.autoRelay ? [] : λec79d3819351 ]) ];
}

export function probeWisp(λ34beabca06c4, {timeout: λ06abeb369339 = 7e3, Socket: λa61b278a5207 = WebSocket} = {}) {
  return new Promise(λe907a054a5c1 => {
    let λ964733907890, λec79d3819351 = !1;
    const n = λ34beabca06c4 => {
      if (!λec79d3819351) {
        if (λec79d3819351 = !0, clearTimeout(λ3f5ed1db1bf8), λ964733907890) {
          λ964733907890.onmessage = λ964733907890.onerror = λ964733907890.onclose = null;
          try {
            λ964733907890.close();
          } catch {}
        }
        λe907a054a5c1(λ34beabca06c4);
      }
    }, λ3f5ed1db1bf8 = setTimeout(() => n(!1), λ06abeb369339);
    try {
      λ964733907890 = new λa61b278a5207(λ34beabca06c4), λ964733907890.binaryType = "arraybuffer", 
      λ964733907890.onmessage = λ34beabca06c4 => {
        if (!(λ34beabca06c4.data instanceof ArrayBuffer)) return;
        const λ06abeb369339 = new Uint8Array(λ34beabca06c4.data);
        λ06abeb369339.length >= 9 && 3 === λ06abeb369339[0] && 0 === new DataView(λ34beabca06c4.data).getUint32(1, !0) && n(!0);
      }, λ964733907890.onerror = λ964733907890.onclose = () => n(!1);
    } catch {
      n(!1);
    }
  });
}

export class RelayTransport {
  constructor({urls: λ34beabca06c4, createClient: λ06abeb369339, probe: λa61b278a5207 = probeWisp, onStatus: λe907a054a5c1 = () => {}, storage: λ964733907890 = globalThis.sessionStorage, monitorMs: λec79d3819351 = 3e4, requestTimeoutMs: λ3f5ed1db1bf8 = 2e4, rank: λe535d740c7fc = async λ34beabca06c4 => λ34beabca06c4, online: λ14ceb5e95260 = () => !1 !== globalThis.navigator?.onLine, visible: λb8601322101b = () => !globalThis.document?.hidden}) {
    Object.assign(this, {
      urls: λ34beabca06c4,
      createClient: λ06abeb369339,
      probe: λa61b278a5207,
      onStatus: λe907a054a5c1,
      storage: λ964733907890,
      monitorMs: λec79d3819351,
      requestTimeoutMs: λ3f5ed1db1bf8,
      rank: λe535d740c7fc,
      online: λ14ceb5e95260,
      visible: λb8601322101b
    }), this.ready = !1, this.closed = !1, this.url = "", this.client = null, this.switching = null, 
    this.failures = 0, this.retired = [];
  }
  async init() {
    await this.select(), this.ready = !0, this.schedule();
  }
  async select(λ34beabca06c4 = "") {
    if (this.closed) throw new Error("Relay connection closed.");
    if (this.switching) return this.switching;
    if (!this.online()) throw new Error("You are offline. Reconnect to Wi-Fi and try again.");
    let λ06abeb369339 = "";
    try {
      λ06abeb369339 = this.storage?.getItem("tutsi.workingRelay:" + this.urls.join("|")) || "";
    } catch {}
    const λa61b278a5207 = [ ...new Set([ this.url, λ06abeb369339, ...this.urls ]) ].filter(λ06abeb369339 => this.urls.includes(λ06abeb369339) && λ06abeb369339 !== λ34beabca06c4);
    this.switching = (async () => {
      let λ06abeb369339;
      const λe907a054a5c1 = await Promise.race([ Promise.resolve().then(() => this.rank(λa61b278a5207)).catch(() => λa61b278a5207), new Promise(λ34beabca06c4 => {
        λ06abeb369339 = setTimeout(() => λ34beabca06c4(λa61b278a5207), 300);
      }) ]).finally(() => clearTimeout(λ06abeb369339));
      for (const λ06abeb369339 of λe907a054a5c1) {
        if (this.closed) throw new Error("Relay connection closed.");
        if (this.onStatus({
          state: "checking",
          url: λ06abeb369339
        }), !await this.probe(λ06abeb369339)) continue;
        let λa61b278a5207;
        try {
          λa61b278a5207 = await this.createClient(λ06abeb369339);
        } catch {
          continue;
        }
        if (this.closed) throw λa61b278a5207.close?.(), new Error("Relay connection closed.");
        for (this.client && this.retired.push(this.client); this.retired.length > 2; ) try {
          this.retired.shift()?.close?.();
        } catch {}
        this.client = λa61b278a5207, this.url = λ06abeb369339, this.failures = 0;
        try {
          this.storage?.setItem("tutsi.workingRelay:" + this.urls.join("|"), λ06abeb369339);
        } catch {}
        return void this.onStatus({
          state: λ34beabca06c4 ? "switched" : "connected",
          url: λ06abeb369339
        });
      }
      throw this.onStatus({
        state: "unavailable",
        url: ""
      }), new Error("No configured Wisp relay is reachable from this device. Try again or change the relay in Settings.");
    })();
    try {
      return await this.switching;
    } finally {
      this.switching = null;
    }
  }
  async recover(λ34beabca06c4, λ06abeb369339 = !1, λa61b278a5207 = !1) {
    return !(this.closed || !this.online() || this.client === λ34beabca06c4 && (this.switching ? (await this.switching, 
    this.client === λ34beabca06c4) : !λ06abeb369339 && await this.probe(this.url) || this.client === λ34beabca06c4 && (await this.select(λa61b278a5207 ? "" : this.url), 
    this.client === λ34beabca06c4)));
  }
  async attempt(λ34beabca06c4, λ06abeb369339) {
    const λa61b278a5207 = λ06abeb369339[4], λe907a054a5c1 = new AbortController;
    if (λa61b278a5207?.aborted) throw λa61b278a5207.reason || new DOMException("Cancelled", "AbortError");
    let λ964733907890, λec79d3819351 = !1, λ3f5ed1db1bf8 = !1;
    const λe535d740c7fc = λa61b278a5207 ? AbortSignal.any([ λa61b278a5207, λe907a054a5c1.signal ]) : λe907a054a5c1.signal, λ14ceb5e95260 = Promise.resolve().then(() => λ34beabca06c4.request(...λ06abeb369339.slice(0, 4), λe535d740c7fc));
    λ14ceb5e95260.then(λ34beabca06c4 => {
      λ3f5ed1db1bf8 && λe535d740c7fc.aborted && λ34beabca06c4?.body?.cancel?.().catch(() => {});
    }, () => {});
    const λb8601322101b = new Promise((λ34beabca06c4, λ06abeb369339) => {
      const i = () => λ06abeb369339(λec79d3819351 ? Object.assign(new Error("Relay request timed out"), {
        name: "TimeoutError"
      }) : λe535d740c7fc.reason);
      λe535d740c7fc.addEventListener("abort", i, {
        once: !0
      }), λ964733907890 = setTimeout(() => {
        λec79d3819351 = !0, λe907a054a5c1.abort();
      }, this.requestTimeoutMs), λ14ceb5e95260.finally(() => λe535d740c7fc.removeEventListener("abort", i)).catch(() => {});
    });
    try {
      return await Promise.race([ λ14ceb5e95260, λb8601322101b ]);
    } finally {
      λ3f5ed1db1bf8 = !0, clearTimeout(λ964733907890);
    }
  }
  async request(...λ34beabca06c4) {
    if (this.closed) throw new Error("Relay connection closed.");
    this.ready || await this.init();
    const λ06abeb369339 = this.client;
    try {
      return await this.attempt(λ06abeb369339, λ34beabca06c4);
    } catch (λa61b278a5207) {
      if (λ34beabca06c4[4]?.aborted || "AbortError" === λa61b278a5207?.name) throw λa61b278a5207;
      const λe907a054a5c1 = "TimeoutError" === λa61b278a5207?.name || /timed?\s*out|timeout|ETIMEDOUT|ECONNRESET|network|socket|wisp|hyper.*(?:error|client)|muxtaskended|connection.*(?:closed|reset|lost|failed)|unexpected.*(?:eof|cutoff)|transport.*(?:closed|failed)/i.test(String(λa61b278a5207?.message || λa61b278a5207 || ""));
      let λ964733907890 = !1;
      try {
        λ964733907890 = await this.recover(λ06abeb369339, λe907a054a5c1, λe907a054a5c1);
      } catch {}
      if (λ964733907890 && /^(GET|HEAD)$/i.test(String(λ34beabca06c4[1] || "GET")) && !λ34beabca06c4[4]?.aborted && !this.closed && this.online()) return this.attempt(this.client, λ34beabca06c4);
      throw λa61b278a5207;
    }
  }
  connect(...λ34beabca06c4) {
    const λ06abeb369339 = this.client, λa61b278a5207 = λ34beabca06c4[6];
    λ34beabca06c4[6] = (...λ34beabca06c4) => {
      this.recover(λ06abeb369339).catch(() => {}), λa61b278a5207?.(...λ34beabca06c4);
    };
    try {
      return λ06abeb369339.connect(...λ34beabca06c4);
    } catch (λ34beabca06c4) {
      throw this.recover(λ06abeb369339).catch(() => {}), λ34beabca06c4;
    }
  }
  async check() {
    if (this.closed || !this.client || !this.online() || !this.visible()) return;
    const λ34beabca06c4 = this.client, λ06abeb369339 = this.url, λa61b278a5207 = await this.probe(λ06abeb369339);
    this.closed || λ34beabca06c4 !== this.client || (this.failures = λa61b278a5207 ? 0 : this.failures + 1, 
    this.failures >= 2 && await this.recover(λ34beabca06c4, !0).catch(() => {}));
  }
  schedule() {
    !this.closed && this.monitorMs && (this.timer = setTimeout(async () => {
      await this.check(), this.schedule();
    }, this.monitorMs));
  }
  close() {
    this.closed = !0, clearTimeout(this.timer);
    for (const λ34beabca06c4 of [ this.client, ...this.retired ]) try {
      λ34beabca06c4?.close?.();
    } catch {}
    this.retired = [];
  }
}

const λ06abeb369339 = new Map;

export async function rankForBlocker(λ34beabca06c4, λa61b278a5207, {fetcher: λe907a054a5c1 = fetch, onHint: λ964733907890 = () => {}} = {}) {
  if (!/^[a-z0-9_-]{1,64}$/.test(λa61b278a5207 || "")) return λ34beabca06c4;
  const λec79d3819351 = await Promise.all(λ34beabca06c4.map(async λ34beabca06c4 => {
    const λ964733907890 = new URL(λ34beabca06c4).hostname;
    if ("localhost" === λ964733907890 || λ964733907890.endsWith(".local") || /^[\d.]+$/.test(λ964733907890) || λ964733907890.includes(":")) return {
      url: λ34beabca06c4,
      blocked: null
    };
    const λec79d3819351 = λa61b278a5207 + ":" + λ964733907890, λ3f5ed1db1bf8 = λ06abeb369339.get(λec79d3819351);
    if (λ3f5ed1db1bf8 && λ3f5ed1db1bf8.until > Date.now()) return {
      url: λ34beabca06c4,
      blocked: λ3f5ed1db1bf8.blocked
    };
    let λe535d740c7fc = null;
    const λ14ceb5e95260 = new AbortController, λb8601322101b = setTimeout(() => λ14ceb5e95260.abort(), 4e3);
    try {
      const λ34beabca06c4 = await λe907a054a5c1("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-checker/check", {
        method: "POST",
        signal: λ14ceb5e95260.signal,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: "https://" + λ964733907890 + "/",
          vendor: λa61b278a5207
        })
      });
      if (λ34beabca06c4.ok) {
        const λ06abeb369339 = await λ34beabca06c4.json(), λe907a054a5c1 = λ06abeb369339?.vendors?.[λa61b278a5207];
        λe907a054a5c1?.error || "boolean" != typeof λe907a054a5c1?.blocked || (λe535d740c7fc = λe907a054a5c1.blocked);
      }
    } catch {} finally {
      clearTimeout(λb8601322101b);
    }
    return λ06abeb369339.set(λec79d3819351, {
      blocked: λe535d740c7fc,
      until: Date.now() + (null === λe535d740c7fc ? 3e4 : 6e5)
    }), λ06abeb369339.size > 100 && λ06abeb369339.delete(λ06abeb369339.keys().next().value), 
    {
      url: λ34beabca06c4,
      blocked: λe535d740c7fc
    };
  }));
  return λ964733907890({
    vendor: λa61b278a5207,
    results: λec79d3819351
  }), λec79d3819351.sort((λ34beabca06c4, λ06abeb369339) => Number(!0 === λ34beabca06c4.blocked) - Number(!0 === λ06abeb369339.blocked)).map(λ34beabca06c4 => λ34beabca06c4.url);
}
