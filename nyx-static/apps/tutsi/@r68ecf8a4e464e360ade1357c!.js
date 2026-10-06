import { httpRelayUrl as λ3486bf34e352 } from "./@r694ba82e944178de68f9bf8d!.js";

export function normalizeRelay(λ3486bf34e352, λ7dc8ee0e96d2 = globalThis.location?.protocol || "https:") {
  try {
    const λe2a3ab38990b = new URL(λ3486bf34e352);
    return ![ "ws:", "wss:" ].includes(λe2a3ab38990b.protocol) || λe2a3ab38990b.username || λe2a3ab38990b.password || λe2a3ab38990b.hash || "https:" === λ7dc8ee0e96d2 && "wss:" !== λe2a3ab38990b.protocol ? "" : λe2a3ab38990b.href;
  } catch {
    return "";
  }
}

export function relayCandidates(λ3486bf34e352, λ7dc8ee0e96d2 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λe2a3ab38990b = location) {
  const λ366719cf68cd = `${"https:" === λe2a3ab38990b.protocol ? "wss:" : "ws:"}//${λe2a3ab38990b.host}/resources/live/`, λ6ade0a84c641 = normalizeRelay(λ3486bf34e352.relay, λe2a3ab38990b.protocol) || normalizeRelay(λ7dc8ee0e96d2.wispUrl, λe2a3ab38990b.protocol) || λ366719cf68cd;
  return !1 === λ3486bf34e352.autoRelay ? [ λ6ade0a84c641 ] : [ ...new Set([ λ6ade0a84c641, λ366719cf68cd, ...Array.isArray(λ7dc8ee0e96d2.wispUrls) ? λ7dc8ee0e96d2.wispUrls : [], "wss://copium-wisp-9529463.onrender.com/wisp/" ].map(λ3486bf34e352 => normalizeRelay(λ3486bf34e352, λe2a3ab38990b.protocol)).filter(Boolean)) ].slice(0, 6);
}

export function transportCandidates(λ7dc8ee0e96d2, λe2a3ab38990b = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ366719cf68cd = location) {
  const λ6ade0a84c641 = λ3486bf34e352(λ366719cf68cd), λf2b2eb4f0ce5 = relayCandidates(λ7dc8ee0e96d2, λe2a3ab38990b, λ366719cf68cd);
  return !1 === λ7dc8ee0e96d2.httpBridge ? relayCandidates(λ7dc8ee0e96d2.relay === λ6ade0a84c641 ? {
    ...λ7dc8ee0e96d2,
    relay: ""
  } : λ7dc8ee0e96d2, λe2a3ab38990b.wispUrl === λ6ade0a84c641 ? {
    ...λe2a3ab38990b,
    wispUrl: ""
  } : λe2a3ab38990b, λ366719cf68cd).filter(λ3486bf34e352 => λ3486bf34e352 !== λ6ade0a84c641) : λ7dc8ee0e96d2.relay && λ7dc8ee0e96d2.relay !== λ6ade0a84c641 ? [ ...new Set([ ...λf2b2eb4f0ce5, ...!1 === λ7dc8ee0e96d2.autoRelay ? [] : [ λ6ade0a84c641 ] ]) ] : [ ...new Set([ λ6ade0a84c641, ...!1 === λ7dc8ee0e96d2.autoRelay ? [] : λf2b2eb4f0ce5 ]) ];
}

export function probeWisp(λ3486bf34e352, {timeout: λ7dc8ee0e96d2 = 7e3, Socket: λe2a3ab38990b = WebSocket} = {}) {
  return new Promise(λ366719cf68cd => {
    let λ6ade0a84c641, λf2b2eb4f0ce5 = !1;
    const n = λ3486bf34e352 => {
      if (!λf2b2eb4f0ce5) {
        if (λf2b2eb4f0ce5 = !0, clearTimeout(λfb236a702740), λ6ade0a84c641) {
          λ6ade0a84c641.onmessage = λ6ade0a84c641.onerror = λ6ade0a84c641.onclose = null;
          try {
            λ6ade0a84c641.close();
          } catch {}
        }
        λ366719cf68cd(λ3486bf34e352);
      }
    }, λfb236a702740 = setTimeout(() => n(!1), λ7dc8ee0e96d2);
    try {
      λ6ade0a84c641 = new λe2a3ab38990b(λ3486bf34e352), λ6ade0a84c641.binaryType = "arraybuffer", 
      λ6ade0a84c641.onmessage = λ3486bf34e352 => {
        if (!(λ3486bf34e352.data instanceof ArrayBuffer)) return;
        const λ7dc8ee0e96d2 = new Uint8Array(λ3486bf34e352.data);
        λ7dc8ee0e96d2.length >= 9 && 3 === λ7dc8ee0e96d2[0] && 0 === new DataView(λ3486bf34e352.data).getUint32(1, !0) && n(!0);
      }, λ6ade0a84c641.onerror = λ6ade0a84c641.onclose = () => n(!1);
    } catch {
      n(!1);
    }
  });
}

export class RelayTransport {
  constructor({urls: λ3486bf34e352, createClient: λ7dc8ee0e96d2, probe: λe2a3ab38990b = probeWisp, onStatus: λ366719cf68cd = () => {}, storage: λ6ade0a84c641 = globalThis.sessionStorage, monitorMs: λf2b2eb4f0ce5 = 3e4, requestTimeoutMs: λfb236a702740 = 2e4, rank: λdf60e0858a7f = async λ3486bf34e352 => λ3486bf34e352, online: λf71e40de800a = () => !1 !== globalThis.navigator?.onLine, visible: λ264b62bc005b = () => !globalThis.document?.hidden}) {
    Object.assign(this, {
      urls: λ3486bf34e352,
      createClient: λ7dc8ee0e96d2,
      probe: λe2a3ab38990b,
      onStatus: λ366719cf68cd,
      storage: λ6ade0a84c641,
      monitorMs: λf2b2eb4f0ce5,
      requestTimeoutMs: λfb236a702740,
      rank: λdf60e0858a7f,
      online: λf71e40de800a,
      visible: λ264b62bc005b
    }), this.ready = !1, this.closed = !1, this.url = "", this.client = null, this.switching = null, 
    this.failures = 0, this.retired = [];
  }
  async init() {
    await this.select(), this.ready = !0, this.schedule();
  }
  async select(λ3486bf34e352 = "") {
    if (this.closed) throw new Error("Relay connection closed.");
    if (this.switching) return this.switching;
    if (!this.online()) throw new Error("You are offline. Reconnect to Wi-Fi and try again.");
    let λ7dc8ee0e96d2 = "";
    try {
      λ7dc8ee0e96d2 = this.storage?.getItem("tutsi.workingRelay:" + this.urls.join("|")) || "";
    } catch {}
    const λe2a3ab38990b = [ ...new Set([ this.url, λ7dc8ee0e96d2, ...this.urls ]) ].filter(λ7dc8ee0e96d2 => this.urls.includes(λ7dc8ee0e96d2) && λ7dc8ee0e96d2 !== λ3486bf34e352);
    this.switching = (async () => {
      let λ7dc8ee0e96d2;
      const λ366719cf68cd = await Promise.race([ Promise.resolve().then(() => this.rank(λe2a3ab38990b)).catch(() => λe2a3ab38990b), new Promise(λ3486bf34e352 => {
        λ7dc8ee0e96d2 = setTimeout(() => λ3486bf34e352(λe2a3ab38990b), 300);
      }) ]).finally(() => clearTimeout(λ7dc8ee0e96d2));
      for (const λ7dc8ee0e96d2 of λ366719cf68cd) {
        if (this.closed) throw new Error("Relay connection closed.");
        if (this.onStatus({
          state: "checking",
          url: λ7dc8ee0e96d2
        }), !await this.probe(λ7dc8ee0e96d2)) continue;
        let λe2a3ab38990b;
        try {
          λe2a3ab38990b = await this.createClient(λ7dc8ee0e96d2);
        } catch {
          continue;
        }
        if (this.closed) throw λe2a3ab38990b.close?.(), new Error("Relay connection closed.");
        for (this.client && this.retired.push(this.client); this.retired.length > 2; ) try {
          this.retired.shift()?.close?.();
        } catch {}
        this.client = λe2a3ab38990b, this.url = λ7dc8ee0e96d2, this.failures = 0;
        try {
          this.storage?.setItem("tutsi.workingRelay:" + this.urls.join("|"), λ7dc8ee0e96d2);
        } catch {}
        return void this.onStatus({
          state: λ3486bf34e352 ? "switched" : "connected",
          url: λ7dc8ee0e96d2
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
  async recover(λ3486bf34e352, λ7dc8ee0e96d2 = !1, λe2a3ab38990b = !1) {
    return !(this.closed || !this.online() || this.client === λ3486bf34e352 && (this.switching ? (await this.switching, 
    this.client === λ3486bf34e352) : !λ7dc8ee0e96d2 && await this.probe(this.url) || this.client === λ3486bf34e352 && (await this.select(λe2a3ab38990b ? "" : this.url), 
    this.client === λ3486bf34e352)));
  }
  async attempt(λ3486bf34e352, λ7dc8ee0e96d2) {
    const λe2a3ab38990b = λ7dc8ee0e96d2[4], λ366719cf68cd = new AbortController;
    if (λe2a3ab38990b?.aborted) throw λe2a3ab38990b.reason || new DOMException("Cancelled", "AbortError");
    let λ6ade0a84c641, λf2b2eb4f0ce5 = !1, λfb236a702740 = !1;
    const λdf60e0858a7f = λe2a3ab38990b ? AbortSignal.any([ λe2a3ab38990b, λ366719cf68cd.signal ]) : λ366719cf68cd.signal, λf71e40de800a = Promise.resolve().then(() => λ3486bf34e352.request(...λ7dc8ee0e96d2.slice(0, 4), λdf60e0858a7f));
    λf71e40de800a.then(λ3486bf34e352 => {
      λfb236a702740 && λdf60e0858a7f.aborted && λ3486bf34e352?.body?.cancel?.().catch(() => {});
    }, () => {});
    const λ264b62bc005b = new Promise((λ3486bf34e352, λ7dc8ee0e96d2) => {
      const i = () => λ7dc8ee0e96d2(λf2b2eb4f0ce5 ? Object.assign(new Error("Relay request timed out"), {
        name: "TimeoutError"
      }) : λdf60e0858a7f.reason);
      λdf60e0858a7f.addEventListener("abort", i, {
        once: !0
      }), λ6ade0a84c641 = setTimeout(() => {
        λf2b2eb4f0ce5 = !0, λ366719cf68cd.abort();
      }, this.requestTimeoutMs), λf71e40de800a.finally(() => λdf60e0858a7f.removeEventListener("abort", i)).catch(() => {});
    });
    try {
      return await Promise.race([ λf71e40de800a, λ264b62bc005b ]);
    } finally {
      λfb236a702740 = !0, clearTimeout(λ6ade0a84c641);
    }
  }
  async request(...λ3486bf34e352) {
    if (this.closed) throw new Error("Relay connection closed.");
    this.ready || await this.init();
    const λ7dc8ee0e96d2 = this.client;
    try {
      return await this.attempt(λ7dc8ee0e96d2, λ3486bf34e352);
    } catch (λe2a3ab38990b) {
      if (λ3486bf34e352[4]?.aborted || "AbortError" === λe2a3ab38990b?.name) throw λe2a3ab38990b;
      const λ366719cf68cd = "TimeoutError" === λe2a3ab38990b?.name || /timed?\s*out|timeout|ETIMEDOUT|ECONNRESET|network|socket|wisp|hyper.*(?:error|client)|muxtaskended|connection.*(?:closed|reset|lost|failed)|unexpected.*(?:eof|cutoff)|transport.*(?:closed|failed)/i.test(String(λe2a3ab38990b?.message || λe2a3ab38990b || ""));
      let λ6ade0a84c641 = !1;
      try {
        λ6ade0a84c641 = await this.recover(λ7dc8ee0e96d2, λ366719cf68cd, λ366719cf68cd);
      } catch {}
      if (λ6ade0a84c641 && /^(GET|HEAD)$/i.test(String(λ3486bf34e352[1] || "GET")) && !λ3486bf34e352[4]?.aborted && !this.closed && this.online()) return this.attempt(this.client, λ3486bf34e352);
      throw λe2a3ab38990b;
    }
  }
  connect(...λ3486bf34e352) {
    const λ7dc8ee0e96d2 = this.client, λe2a3ab38990b = λ3486bf34e352[6];
    λ3486bf34e352[6] = (...λ3486bf34e352) => {
      this.recover(λ7dc8ee0e96d2).catch(() => {}), λe2a3ab38990b?.(...λ3486bf34e352);
    };
    try {
      return λ7dc8ee0e96d2.connect(...λ3486bf34e352);
    } catch (λ3486bf34e352) {
      throw this.recover(λ7dc8ee0e96d2).catch(() => {}), λ3486bf34e352;
    }
  }
  async check() {
    if (this.closed || !this.client || !this.online() || !this.visible()) return;
    const λ3486bf34e352 = this.client, λ7dc8ee0e96d2 = this.url, λe2a3ab38990b = await this.probe(λ7dc8ee0e96d2);
    this.closed || λ3486bf34e352 !== this.client || (this.failures = λe2a3ab38990b ? 0 : this.failures + 1, 
    this.failures >= 2 && await this.recover(λ3486bf34e352, !0).catch(() => {}));
  }
  schedule() {
    !this.closed && this.monitorMs && (this.timer = setTimeout(async () => {
      await this.check(), this.schedule();
    }, this.monitorMs));
  }
  close() {
    this.closed = !0, clearTimeout(this.timer);
    for (const λ3486bf34e352 of [ this.client, ...this.retired ]) try {
      λ3486bf34e352?.close?.();
    } catch {}
    this.retired = [];
  }
}

const λ7dc8ee0e96d2 = new Map;

export async function rankForBlocker(λ3486bf34e352, λe2a3ab38990b, {fetcher: λ366719cf68cd = fetch, onHint: λ6ade0a84c641 = () => {}} = {}) {
  if (!/^[a-z0-9_-]{1,64}$/.test(λe2a3ab38990b || "")) return λ3486bf34e352;
  const λf2b2eb4f0ce5 = await Promise.all(λ3486bf34e352.map(async λ3486bf34e352 => {
    const λ6ade0a84c641 = new URL(λ3486bf34e352).hostname;
    if ("localhost" === λ6ade0a84c641 || λ6ade0a84c641.endsWith(".local") || /^[\d.]+$/.test(λ6ade0a84c641) || λ6ade0a84c641.includes(":")) return {
      url: λ3486bf34e352,
      blocked: null
    };
    const λf2b2eb4f0ce5 = λe2a3ab38990b + ":" + λ6ade0a84c641, λfb236a702740 = λ7dc8ee0e96d2.get(λf2b2eb4f0ce5);
    if (λfb236a702740 && λfb236a702740.until > Date.now()) return {
      url: λ3486bf34e352,
      blocked: λfb236a702740.blocked
    };
    let λdf60e0858a7f = null;
    const λf71e40de800a = new AbortController, λ264b62bc005b = setTimeout(() => λf71e40de800a.abort(), 4e3);
    try {
      const λ3486bf34e352 = await λ366719cf68cd("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-checker/check", {
        method: "POST",
        signal: λf71e40de800a.signal,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: "https://" + λ6ade0a84c641 + "/",
          vendor: λe2a3ab38990b
        })
      });
      if (λ3486bf34e352.ok) {
        const λ7dc8ee0e96d2 = await λ3486bf34e352.json(), λ366719cf68cd = λ7dc8ee0e96d2?.vendors?.[λe2a3ab38990b];
        λ366719cf68cd?.error || "boolean" != typeof λ366719cf68cd?.blocked || (λdf60e0858a7f = λ366719cf68cd.blocked);
      }
    } catch {} finally {
      clearTimeout(λ264b62bc005b);
    }
    return λ7dc8ee0e96d2.set(λf2b2eb4f0ce5, {
      blocked: λdf60e0858a7f,
      until: Date.now() + (null === λdf60e0858a7f ? 3e4 : 6e5)
    }), λ7dc8ee0e96d2.size > 100 && λ7dc8ee0e96d2.delete(λ7dc8ee0e96d2.keys().next().value), 
    {
      url: λ3486bf34e352,
      blocked: λdf60e0858a7f
    };
  }));
  return λ6ade0a84c641({
    vendor: λe2a3ab38990b,
    results: λf2b2eb4f0ce5
  }), λf2b2eb4f0ce5.sort((λ3486bf34e352, λ7dc8ee0e96d2) => Number(!0 === λ3486bf34e352.blocked) - Number(!0 === λ7dc8ee0e96d2.blocked)).map(λ3486bf34e352 => λ3486bf34e352.url);
}
