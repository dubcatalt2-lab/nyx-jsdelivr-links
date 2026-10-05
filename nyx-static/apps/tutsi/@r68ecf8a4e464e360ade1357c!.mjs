import { httpRelayUrl as λd69fcde4b6e5 } from "./@r694ba82e944178de68f9bf8d!.mjs";

export function normalizeRelay(λd69fcde4b6e5, λ4fee5aa243ec = globalThis.location?.protocol || "https:") {
  try {
    const λ7a838dffe548 = new URL(λd69fcde4b6e5);
    return ![ "ws:", "wss:" ].includes(λ7a838dffe548.protocol) || λ7a838dffe548.username || λ7a838dffe548.password || λ7a838dffe548.hash || "https:" === λ4fee5aa243ec && "wss:" !== λ7a838dffe548.protocol ? "" : λ7a838dffe548.href;
  } catch {
    return "";
  }
}

export function relayCandidates(λd69fcde4b6e5, λ4fee5aa243ec = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ7a838dffe548 = location) {
  const λ052e08840395 = `${"https:" === λ7a838dffe548.protocol ? "wss:" : "ws:"}//${λ7a838dffe548.host}/resources/live/`, λ499002f74fc1 = normalizeRelay(λd69fcde4b6e5.relay, λ7a838dffe548.protocol) || normalizeRelay(λ4fee5aa243ec.wispUrl, λ7a838dffe548.protocol) || λ052e08840395;
  return !1 === λd69fcde4b6e5.autoRelay ? [ λ499002f74fc1 ] : [ ...new Set([ λ499002f74fc1, λ052e08840395, ...Array.isArray(λ4fee5aa243ec.wispUrls) ? λ4fee5aa243ec.wispUrls : [], "wss://copium-wisp-9529463.onrender.com/wisp/" ].map(λd69fcde4b6e5 => normalizeRelay(λd69fcde4b6e5, λ7a838dffe548.protocol)).filter(Boolean)) ].slice(0, 6);
}

export function transportCandidates(λ4fee5aa243ec, λ7a838dffe548 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ052e08840395 = location) {
  const λ499002f74fc1 = λd69fcde4b6e5(λ052e08840395), λ726ca5a90eb2 = relayCandidates(λ4fee5aa243ec, λ7a838dffe548, λ052e08840395);
  return !1 === λ4fee5aa243ec.httpBridge ? relayCandidates(λ4fee5aa243ec.relay === λ499002f74fc1 ? {
    ...λ4fee5aa243ec,
    relay: ""
  } : λ4fee5aa243ec, λ7a838dffe548.wispUrl === λ499002f74fc1 ? {
    ...λ7a838dffe548,
    wispUrl: ""
  } : λ7a838dffe548, λ052e08840395).filter(λd69fcde4b6e5 => λd69fcde4b6e5 !== λ499002f74fc1) : λ4fee5aa243ec.relay && λ4fee5aa243ec.relay !== λ499002f74fc1 ? [ ...new Set([ ...λ726ca5a90eb2, ...!1 === λ4fee5aa243ec.autoRelay ? [] : [ λ499002f74fc1 ] ]) ] : [ ...new Set([ λ499002f74fc1, ...!1 === λ4fee5aa243ec.autoRelay ? [] : λ726ca5a90eb2 ]) ];
}

export function probeWisp(λd69fcde4b6e5, {timeout: λ4fee5aa243ec = 7e3, Socket: λ7a838dffe548 = WebSocket} = {}) {
  return new Promise(λ052e08840395 => {
    let λ499002f74fc1, λ726ca5a90eb2 = !1;
    const n = λd69fcde4b6e5 => {
      if (!λ726ca5a90eb2) {
        if (λ726ca5a90eb2 = !0, clearTimeout(λd8eee6549fbd), λ499002f74fc1) {
          λ499002f74fc1.onmessage = λ499002f74fc1.onerror = λ499002f74fc1.onclose = null;
          try {
            λ499002f74fc1.close();
          } catch {}
        }
        λ052e08840395(λd69fcde4b6e5);
      }
    }, λd8eee6549fbd = setTimeout(() => n(!1), λ4fee5aa243ec);
    try {
      λ499002f74fc1 = new λ7a838dffe548(λd69fcde4b6e5), λ499002f74fc1.binaryType = "arraybuffer", 
      λ499002f74fc1.onmessage = λd69fcde4b6e5 => {
        if (!(λd69fcde4b6e5.data instanceof ArrayBuffer)) return;
        const λ4fee5aa243ec = new Uint8Array(λd69fcde4b6e5.data);
        λ4fee5aa243ec.length >= 9 && 3 === λ4fee5aa243ec[0] && 0 === new DataView(λd69fcde4b6e5.data).getUint32(1, !0) && n(!0);
      }, λ499002f74fc1.onerror = λ499002f74fc1.onclose = () => n(!1);
    } catch {
      n(!1);
    }
  });
}

export class RelayTransport {
  constructor({urls: λd69fcde4b6e5, createClient: λ4fee5aa243ec, probe: λ7a838dffe548 = probeWisp, onStatus: λ052e08840395 = () => {}, storage: λ499002f74fc1 = globalThis.sessionStorage, monitorMs: λ726ca5a90eb2 = 3e4, requestTimeoutMs: λd8eee6549fbd = 2e4, rank: λ11380c0909ca = async λd69fcde4b6e5 => λd69fcde4b6e5, online: λ9be04f6b3000 = () => !1 !== globalThis.navigator?.onLine, visible: λ953f239fcab2 = () => !globalThis.document?.hidden}) {
    Object.assign(this, {
      urls: λd69fcde4b6e5,
      createClient: λ4fee5aa243ec,
      probe: λ7a838dffe548,
      onStatus: λ052e08840395,
      storage: λ499002f74fc1,
      monitorMs: λ726ca5a90eb2,
      requestTimeoutMs: λd8eee6549fbd,
      rank: λ11380c0909ca,
      online: λ9be04f6b3000,
      visible: λ953f239fcab2
    }), this.ready = !1, this.closed = !1, this.url = "", this.client = null, this.switching = null, 
    this.failures = 0, this.retired = [];
  }
  async init() {
    await this.select(), this.ready = !0, this.schedule();
  }
  async select(λd69fcde4b6e5 = "") {
    if (this.closed) throw new Error("Relay connection closed.");
    if (this.switching) return this.switching;
    if (!this.online()) throw new Error("You are offline. Reconnect to Wi-Fi and try again.");
    let λ4fee5aa243ec = "";
    try {
      λ4fee5aa243ec = this.storage?.getItem("tutsi.workingRelay:" + this.urls.join("|")) || "";
    } catch {}
    const λ7a838dffe548 = [ ...new Set([ this.url, λ4fee5aa243ec, ...this.urls ]) ].filter(λ4fee5aa243ec => this.urls.includes(λ4fee5aa243ec) && λ4fee5aa243ec !== λd69fcde4b6e5);
    this.switching = (async () => {
      let λ4fee5aa243ec;
      const λ052e08840395 = await Promise.race([ Promise.resolve().then(() => this.rank(λ7a838dffe548)).catch(() => λ7a838dffe548), new Promise(λd69fcde4b6e5 => {
        λ4fee5aa243ec = setTimeout(() => λd69fcde4b6e5(λ7a838dffe548), 300);
      }) ]).finally(() => clearTimeout(λ4fee5aa243ec));
      for (const λ4fee5aa243ec of λ052e08840395) {
        if (this.closed) throw new Error("Relay connection closed.");
        if (this.onStatus({
          state: "checking",
          url: λ4fee5aa243ec
        }), !await this.probe(λ4fee5aa243ec)) continue;
        let λ7a838dffe548;
        try {
          λ7a838dffe548 = await this.createClient(λ4fee5aa243ec);
        } catch {
          continue;
        }
        if (this.closed) throw λ7a838dffe548.close?.(), new Error("Relay connection closed.");
        for (this.client && this.retired.push(this.client); this.retired.length > 2; ) try {
          this.retired.shift()?.close?.();
        } catch {}
        this.client = λ7a838dffe548, this.url = λ4fee5aa243ec, this.failures = 0;
        try {
          this.storage?.setItem("tutsi.workingRelay:" + this.urls.join("|"), λ4fee5aa243ec);
        } catch {}
        return void this.onStatus({
          state: λd69fcde4b6e5 ? "switched" : "connected",
          url: λ4fee5aa243ec
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
  async recover(λd69fcde4b6e5, λ4fee5aa243ec = !1, λ7a838dffe548 = !1) {
    return !(this.closed || !this.online() || this.client === λd69fcde4b6e5 && (this.switching ? (await this.switching, 
    this.client === λd69fcde4b6e5) : !λ4fee5aa243ec && await this.probe(this.url) || this.client === λd69fcde4b6e5 && (await this.select(λ7a838dffe548 ? "" : this.url), 
    this.client === λd69fcde4b6e5)));
  }
  async attempt(λd69fcde4b6e5, λ4fee5aa243ec) {
    const λ7a838dffe548 = λ4fee5aa243ec[4], λ052e08840395 = new AbortController;
    if (λ7a838dffe548?.aborted) throw λ7a838dffe548.reason || new DOMException("Cancelled", "AbortError");
    let λ499002f74fc1, λ726ca5a90eb2 = !1, λd8eee6549fbd = !1;
    const λ11380c0909ca = λ7a838dffe548 ? AbortSignal.any([ λ7a838dffe548, λ052e08840395.signal ]) : λ052e08840395.signal, λ9be04f6b3000 = Promise.resolve().then(() => λd69fcde4b6e5.request(...λ4fee5aa243ec.slice(0, 4), λ11380c0909ca));
    λ9be04f6b3000.then(λd69fcde4b6e5 => {
      λd8eee6549fbd && λ11380c0909ca.aborted && λd69fcde4b6e5?.body?.cancel?.().catch(() => {});
    }, () => {});
    const λ953f239fcab2 = new Promise((λd69fcde4b6e5, λ4fee5aa243ec) => {
      const i = () => λ4fee5aa243ec(λ726ca5a90eb2 ? Object.assign(new Error("Relay request timed out"), {
        name: "TimeoutError"
      }) : λ11380c0909ca.reason);
      λ11380c0909ca.addEventListener("abort", i, {
        once: !0
      }), λ499002f74fc1 = setTimeout(() => {
        λ726ca5a90eb2 = !0, λ052e08840395.abort();
      }, this.requestTimeoutMs), λ9be04f6b3000.finally(() => λ11380c0909ca.removeEventListener("abort", i)).catch(() => {});
    });
    try {
      return await Promise.race([ λ9be04f6b3000, λ953f239fcab2 ]);
    } finally {
      λd8eee6549fbd = !0, clearTimeout(λ499002f74fc1);
    }
  }
  async request(...λd69fcde4b6e5) {
    if (this.closed) throw new Error("Relay connection closed.");
    this.ready || await this.init();
    const λ4fee5aa243ec = this.client;
    try {
      return await this.attempt(λ4fee5aa243ec, λd69fcde4b6e5);
    } catch (λ7a838dffe548) {
      if (λd69fcde4b6e5[4]?.aborted || "AbortError" === λ7a838dffe548?.name) throw λ7a838dffe548;
      const λ052e08840395 = "TimeoutError" === λ7a838dffe548?.name || /timed?\s*out|timeout|ETIMEDOUT|ECONNRESET|network|socket|wisp|hyper.*(?:error|client)|muxtaskended|connection.*(?:closed|reset|lost|failed)|unexpected.*(?:eof|cutoff)|transport.*(?:closed|failed)/i.test(String(λ7a838dffe548?.message || λ7a838dffe548 || ""));
      let λ499002f74fc1 = !1;
      try {
        λ499002f74fc1 = await this.recover(λ4fee5aa243ec, λ052e08840395, λ052e08840395);
      } catch {}
      if (λ499002f74fc1 && /^(GET|HEAD)$/i.test(String(λd69fcde4b6e5[1] || "GET")) && !λd69fcde4b6e5[4]?.aborted && !this.closed && this.online()) return this.attempt(this.client, λd69fcde4b6e5);
      throw λ7a838dffe548;
    }
  }
  connect(...λd69fcde4b6e5) {
    const λ4fee5aa243ec = this.client, λ7a838dffe548 = λd69fcde4b6e5[6];
    λd69fcde4b6e5[6] = (...λd69fcde4b6e5) => {
      this.recover(λ4fee5aa243ec).catch(() => {}), λ7a838dffe548?.(...λd69fcde4b6e5);
    };
    try {
      return λ4fee5aa243ec.connect(...λd69fcde4b6e5);
    } catch (λd69fcde4b6e5) {
      throw this.recover(λ4fee5aa243ec).catch(() => {}), λd69fcde4b6e5;
    }
  }
  async check() {
    if (this.closed || !this.client || !this.online() || !this.visible()) return;
    const λd69fcde4b6e5 = this.client, λ4fee5aa243ec = this.url, λ7a838dffe548 = await this.probe(λ4fee5aa243ec);
    this.closed || λd69fcde4b6e5 !== this.client || (this.failures = λ7a838dffe548 ? 0 : this.failures + 1, 
    this.failures >= 2 && await this.recover(λd69fcde4b6e5, !0).catch(() => {}));
  }
  schedule() {
    !this.closed && this.monitorMs && (this.timer = setTimeout(async () => {
      await this.check(), this.schedule();
    }, this.monitorMs));
  }
  close() {
    this.closed = !0, clearTimeout(this.timer);
    for (const λd69fcde4b6e5 of [ this.client, ...this.retired ]) try {
      λd69fcde4b6e5?.close?.();
    } catch {}
    this.retired = [];
  }
}

const λ4fee5aa243ec = new Map;

export async function rankForBlocker(λd69fcde4b6e5, λ7a838dffe548, {fetcher: λ052e08840395 = fetch, onHint: λ499002f74fc1 = () => {}} = {}) {
  if (!/^[a-z0-9_-]{1,64}$/.test(λ7a838dffe548 || "")) return λd69fcde4b6e5;
  const λ726ca5a90eb2 = await Promise.all(λd69fcde4b6e5.map(async λd69fcde4b6e5 => {
    const λ499002f74fc1 = new URL(λd69fcde4b6e5).hostname;
    if ("localhost" === λ499002f74fc1 || λ499002f74fc1.endsWith(".local") || /^[\d.]+$/.test(λ499002f74fc1) || λ499002f74fc1.includes(":")) return {
      url: λd69fcde4b6e5,
      blocked: null
    };
    const λ726ca5a90eb2 = λ7a838dffe548 + ":" + λ499002f74fc1, λd8eee6549fbd = λ4fee5aa243ec.get(λ726ca5a90eb2);
    if (λd8eee6549fbd && λd8eee6549fbd.until > Date.now()) return {
      url: λd69fcde4b6e5,
      blocked: λd8eee6549fbd.blocked
    };
    let λ11380c0909ca = null;
    const λ9be04f6b3000 = new AbortController, λ953f239fcab2 = setTimeout(() => λ9be04f6b3000.abort(), 4e3);
    try {
      const λd69fcde4b6e5 = await λ052e08840395("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-checker/check", {
        method: "POST",
        signal: λ9be04f6b3000.signal,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: "https://" + λ499002f74fc1 + "/",
          vendor: λ7a838dffe548
        })
      });
      if (λd69fcde4b6e5.ok) {
        const λ4fee5aa243ec = await λd69fcde4b6e5.json(), λ052e08840395 = λ4fee5aa243ec?.vendors?.[λ7a838dffe548];
        λ052e08840395?.error || "boolean" != typeof λ052e08840395?.blocked || (λ11380c0909ca = λ052e08840395.blocked);
      }
    } catch {} finally {
      clearTimeout(λ953f239fcab2);
    }
    return λ4fee5aa243ec.set(λ726ca5a90eb2, {
      blocked: λ11380c0909ca,
      until: Date.now() + (null === λ11380c0909ca ? 3e4 : 6e5)
    }), λ4fee5aa243ec.size > 100 && λ4fee5aa243ec.delete(λ4fee5aa243ec.keys().next().value), 
    {
      url: λd69fcde4b6e5,
      blocked: λ11380c0909ca
    };
  }));
  return λ499002f74fc1({
    vendor: λ7a838dffe548,
    results: λ726ca5a90eb2
  }), λ726ca5a90eb2.sort((λd69fcde4b6e5, λ4fee5aa243ec) => Number(!0 === λd69fcde4b6e5.blocked) - Number(!0 === λ4fee5aa243ec.blocked)).map(λd69fcde4b6e5 => λd69fcde4b6e5.url);
}
