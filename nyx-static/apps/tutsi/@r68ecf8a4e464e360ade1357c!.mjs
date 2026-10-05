import { httpRelayUrl as λb7d5032da970 } from "./@r694ba82e944178de68f9bf8d!.mjs";

export function normalizeRelay(λb7d5032da970, λ47fa5a820189 = globalThis.location?.protocol || "https:") {
  try {
    const λ0b7756fd05ed = new URL(λb7d5032da970);
    return ![ "ws:", "wss:" ].includes(λ0b7756fd05ed.protocol) || λ0b7756fd05ed.username || λ0b7756fd05ed.password || λ0b7756fd05ed.hash || "https:" === λ47fa5a820189 && "wss:" !== λ0b7756fd05ed.protocol ? "" : λ0b7756fd05ed.href;
  } catch {
    return "";
  }
}

export function relayCandidates(λb7d5032da970, λ47fa5a820189 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ0b7756fd05ed = location) {
  const λ768c3b988259 = `${"https:" === λ0b7756fd05ed.protocol ? "wss:" : "ws:"}//${λ0b7756fd05ed.host}/resources/live/`, λc92bd291689f = normalizeRelay(λb7d5032da970.relay, λ0b7756fd05ed.protocol) || normalizeRelay(λ47fa5a820189.wispUrl, λ0b7756fd05ed.protocol) || λ768c3b988259;
  return !1 === λb7d5032da970.autoRelay ? [ λc92bd291689f ] : [ ...new Set([ λc92bd291689f, λ768c3b988259, ...Array.isArray(λ47fa5a820189.wispUrls) ? λ47fa5a820189.wispUrls : [], "wss://copium-wisp-9529463.onrender.com/wisp/" ].map(λb7d5032da970 => normalizeRelay(λb7d5032da970, λ0b7756fd05ed.protocol)).filter(Boolean)) ].slice(0, 6);
}

export function transportCandidates(λ47fa5a820189, λ0b7756fd05ed = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ768c3b988259 = location) {
  const λc92bd291689f = λb7d5032da970(λ768c3b988259), λ5a9d59ec9cd3 = relayCandidates(λ47fa5a820189, λ0b7756fd05ed, λ768c3b988259);
  return !1 === λ47fa5a820189.httpBridge ? relayCandidates(λ47fa5a820189.relay === λc92bd291689f ? {
    ...λ47fa5a820189,
    relay: ""
  } : λ47fa5a820189, λ0b7756fd05ed.wispUrl === λc92bd291689f ? {
    ...λ0b7756fd05ed,
    wispUrl: ""
  } : λ0b7756fd05ed, λ768c3b988259).filter(λb7d5032da970 => λb7d5032da970 !== λc92bd291689f) : λ47fa5a820189.relay && λ47fa5a820189.relay !== λc92bd291689f ? [ ...new Set([ ...λ5a9d59ec9cd3, ...!1 === λ47fa5a820189.autoRelay ? [] : [ λc92bd291689f ] ]) ] : [ ...new Set([ λc92bd291689f, ...!1 === λ47fa5a820189.autoRelay ? [] : λ5a9d59ec9cd3 ]) ];
}

export function probeWisp(λb7d5032da970, {timeout: λ47fa5a820189 = 7e3, Socket: λ0b7756fd05ed = WebSocket} = {}) {
  return new Promise(λ768c3b988259 => {
    let λc92bd291689f, λ5a9d59ec9cd3 = !1;
    const n = λb7d5032da970 => {
      if (!λ5a9d59ec9cd3) {
        if (λ5a9d59ec9cd3 = !0, clearTimeout(λ47d16561d56d), λc92bd291689f) {
          λc92bd291689f.onmessage = λc92bd291689f.onerror = λc92bd291689f.onclose = null;
          try {
            λc92bd291689f.close();
          } catch {}
        }
        λ768c3b988259(λb7d5032da970);
      }
    }, λ47d16561d56d = setTimeout(() => n(!1), λ47fa5a820189);
    try {
      λc92bd291689f = new λ0b7756fd05ed(λb7d5032da970), λc92bd291689f.binaryType = "arraybuffer", 
      λc92bd291689f.onmessage = λb7d5032da970 => {
        if (!(λb7d5032da970.data instanceof ArrayBuffer)) return;
        const λ47fa5a820189 = new Uint8Array(λb7d5032da970.data);
        λ47fa5a820189.length >= 9 && 3 === λ47fa5a820189[0] && 0 === new DataView(λb7d5032da970.data).getUint32(1, !0) && n(!0);
      }, λc92bd291689f.onerror = λc92bd291689f.onclose = () => n(!1);
    } catch {
      n(!1);
    }
  });
}

export class RelayTransport {
  constructor({urls: λb7d5032da970, createClient: λ47fa5a820189, probe: λ0b7756fd05ed = probeWisp, onStatus: λ768c3b988259 = () => {}, storage: λc92bd291689f = globalThis.sessionStorage, monitorMs: λ5a9d59ec9cd3 = 3e4, requestTimeoutMs: λ47d16561d56d = 2e4, rank: λ6caf14458847 = async λb7d5032da970 => λb7d5032da970, online: λ52940d3a335a = () => !1 !== globalThis.navigator?.onLine, visible: λ14e9caab2d5e = () => !globalThis.document?.hidden}) {
    Object.assign(this, {
      urls: λb7d5032da970,
      createClient: λ47fa5a820189,
      probe: λ0b7756fd05ed,
      onStatus: λ768c3b988259,
      storage: λc92bd291689f,
      monitorMs: λ5a9d59ec9cd3,
      requestTimeoutMs: λ47d16561d56d,
      rank: λ6caf14458847,
      online: λ52940d3a335a,
      visible: λ14e9caab2d5e
    }), this.ready = !1, this.closed = !1, this.url = "", this.client = null, this.switching = null, 
    this.failures = 0, this.retired = [];
  }
  async init() {
    await this.select(), this.ready = !0, this.schedule();
  }
  async select(λb7d5032da970 = "") {
    if (this.closed) throw new Error("Relay connection closed.");
    if (this.switching) return this.switching;
    if (!this.online()) throw new Error("You are offline. Reconnect to Wi-Fi and try again.");
    let λ47fa5a820189 = "";
    try {
      λ47fa5a820189 = this.storage?.getItem("tutsi.workingRelay:" + this.urls.join("|")) || "";
    } catch {}
    const λ0b7756fd05ed = [ ...new Set([ this.url, λ47fa5a820189, ...this.urls ]) ].filter(λ47fa5a820189 => this.urls.includes(λ47fa5a820189) && λ47fa5a820189 !== λb7d5032da970);
    this.switching = (async () => {
      let λ47fa5a820189;
      const λ768c3b988259 = await Promise.race([ Promise.resolve().then(() => this.rank(λ0b7756fd05ed)).catch(() => λ0b7756fd05ed), new Promise(λb7d5032da970 => {
        λ47fa5a820189 = setTimeout(() => λb7d5032da970(λ0b7756fd05ed), 300);
      }) ]).finally(() => clearTimeout(λ47fa5a820189));
      for (const λ47fa5a820189 of λ768c3b988259) {
        if (this.closed) throw new Error("Relay connection closed.");
        if (this.onStatus({
          state: "checking",
          url: λ47fa5a820189
        }), !await this.probe(λ47fa5a820189)) continue;
        let λ0b7756fd05ed;
        try {
          λ0b7756fd05ed = await this.createClient(λ47fa5a820189);
        } catch {
          continue;
        }
        if (this.closed) throw λ0b7756fd05ed.close?.(), new Error("Relay connection closed.");
        for (this.client && this.retired.push(this.client); this.retired.length > 2; ) try {
          this.retired.shift()?.close?.();
        } catch {}
        this.client = λ0b7756fd05ed, this.url = λ47fa5a820189, this.failures = 0;
        try {
          this.storage?.setItem("tutsi.workingRelay:" + this.urls.join("|"), λ47fa5a820189);
        } catch {}
        return void this.onStatus({
          state: λb7d5032da970 ? "switched" : "connected",
          url: λ47fa5a820189
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
  async recover(λb7d5032da970, λ47fa5a820189 = !1, λ0b7756fd05ed = !1) {
    return !(this.closed || !this.online() || this.client === λb7d5032da970 && (this.switching ? (await this.switching, 
    this.client === λb7d5032da970) : !λ47fa5a820189 && await this.probe(this.url) || this.client === λb7d5032da970 && (await this.select(λ0b7756fd05ed ? "" : this.url), 
    this.client === λb7d5032da970)));
  }
  async attempt(λb7d5032da970, λ47fa5a820189) {
    const λ0b7756fd05ed = λ47fa5a820189[4], λ768c3b988259 = new AbortController;
    if (λ0b7756fd05ed?.aborted) throw λ0b7756fd05ed.reason || new DOMException("Cancelled", "AbortError");
    let λc92bd291689f, λ5a9d59ec9cd3 = !1, λ47d16561d56d = !1;
    const λ6caf14458847 = λ0b7756fd05ed ? AbortSignal.any([ λ0b7756fd05ed, λ768c3b988259.signal ]) : λ768c3b988259.signal, λ52940d3a335a = Promise.resolve().then(() => λb7d5032da970.request(...λ47fa5a820189.slice(0, 4), λ6caf14458847));
    λ52940d3a335a.then(λb7d5032da970 => {
      λ47d16561d56d && λ6caf14458847.aborted && λb7d5032da970?.body?.cancel?.().catch(() => {});
    }, () => {});
    const λ14e9caab2d5e = new Promise((λb7d5032da970, λ47fa5a820189) => {
      const i = () => λ47fa5a820189(λ5a9d59ec9cd3 ? Object.assign(new Error("Relay request timed out"), {
        name: "TimeoutError"
      }) : λ6caf14458847.reason);
      λ6caf14458847.addEventListener("abort", i, {
        once: !0
      }), λc92bd291689f = setTimeout(() => {
        λ5a9d59ec9cd3 = !0, λ768c3b988259.abort();
      }, this.requestTimeoutMs), λ52940d3a335a.finally(() => λ6caf14458847.removeEventListener("abort", i)).catch(() => {});
    });
    try {
      return await Promise.race([ λ52940d3a335a, λ14e9caab2d5e ]);
    } finally {
      λ47d16561d56d = !0, clearTimeout(λc92bd291689f);
    }
  }
  async request(...λb7d5032da970) {
    if (this.closed) throw new Error("Relay connection closed.");
    this.ready || await this.init();
    const λ47fa5a820189 = this.client;
    try {
      return await this.attempt(λ47fa5a820189, λb7d5032da970);
    } catch (λ0b7756fd05ed) {
      if (λb7d5032da970[4]?.aborted || "AbortError" === λ0b7756fd05ed?.name) throw λ0b7756fd05ed;
      const λ768c3b988259 = "TimeoutError" === λ0b7756fd05ed?.name || /timed?\s*out|timeout|ETIMEDOUT|ECONNRESET|network|socket|wisp|hyper.*(?:error|client)|muxtaskended|connection.*(?:closed|reset|lost|failed)|unexpected.*(?:eof|cutoff)|transport.*(?:closed|failed)/i.test(String(λ0b7756fd05ed?.message || λ0b7756fd05ed || ""));
      let λc92bd291689f = !1;
      try {
        λc92bd291689f = await this.recover(λ47fa5a820189, λ768c3b988259, λ768c3b988259);
      } catch {}
      if (λc92bd291689f && /^(GET|HEAD)$/i.test(String(λb7d5032da970[1] || "GET")) && !λb7d5032da970[4]?.aborted && !this.closed && this.online()) return this.attempt(this.client, λb7d5032da970);
      throw λ0b7756fd05ed;
    }
  }
  connect(...λb7d5032da970) {
    const λ47fa5a820189 = this.client, λ0b7756fd05ed = λb7d5032da970[6];
    λb7d5032da970[6] = (...λb7d5032da970) => {
      this.recover(λ47fa5a820189).catch(() => {}), λ0b7756fd05ed?.(...λb7d5032da970);
    };
    try {
      return λ47fa5a820189.connect(...λb7d5032da970);
    } catch (λb7d5032da970) {
      throw this.recover(λ47fa5a820189).catch(() => {}), λb7d5032da970;
    }
  }
  async check() {
    if (this.closed || !this.client || !this.online() || !this.visible()) return;
    const λb7d5032da970 = this.client, λ47fa5a820189 = this.url, λ0b7756fd05ed = await this.probe(λ47fa5a820189);
    this.closed || λb7d5032da970 !== this.client || (this.failures = λ0b7756fd05ed ? 0 : this.failures + 1, 
    this.failures >= 2 && await this.recover(λb7d5032da970, !0).catch(() => {}));
  }
  schedule() {
    !this.closed && this.monitorMs && (this.timer = setTimeout(async () => {
      await this.check(), this.schedule();
    }, this.monitorMs));
  }
  close() {
    this.closed = !0, clearTimeout(this.timer);
    for (const λb7d5032da970 of [ this.client, ...this.retired ]) try {
      λb7d5032da970?.close?.();
    } catch {}
    this.retired = [];
  }
}

const λ47fa5a820189 = new Map;

export async function rankForBlocker(λb7d5032da970, λ0b7756fd05ed, {fetcher: λ768c3b988259 = fetch, onHint: λc92bd291689f = () => {}} = {}) {
  if (!/^[a-z0-9_-]{1,64}$/.test(λ0b7756fd05ed || "")) return λb7d5032da970;
  const λ5a9d59ec9cd3 = await Promise.all(λb7d5032da970.map(async λb7d5032da970 => {
    const λc92bd291689f = new URL(λb7d5032da970).hostname;
    if ("localhost" === λc92bd291689f || λc92bd291689f.endsWith(".local") || /^[\d.]+$/.test(λc92bd291689f) || λc92bd291689f.includes(":")) return {
      url: λb7d5032da970,
      blocked: null
    };
    const λ5a9d59ec9cd3 = λ0b7756fd05ed + ":" + λc92bd291689f, λ47d16561d56d = λ47fa5a820189.get(λ5a9d59ec9cd3);
    if (λ47d16561d56d && λ47d16561d56d.until > Date.now()) return {
      url: λb7d5032da970,
      blocked: λ47d16561d56d.blocked
    };
    let λ6caf14458847 = null;
    const λ52940d3a335a = new AbortController, λ14e9caab2d5e = setTimeout(() => λ52940d3a335a.abort(), 4e3);
    try {
      const λb7d5032da970 = await λ768c3b988259("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-checker/check", {
        method: "POST",
        signal: λ52940d3a335a.signal,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: "https://" + λc92bd291689f + "/",
          vendor: λ0b7756fd05ed
        })
      });
      if (λb7d5032da970.ok) {
        const λ47fa5a820189 = await λb7d5032da970.json(), λ768c3b988259 = λ47fa5a820189?.vendors?.[λ0b7756fd05ed];
        λ768c3b988259?.error || "boolean" != typeof λ768c3b988259?.blocked || (λ6caf14458847 = λ768c3b988259.blocked);
      }
    } catch {} finally {
      clearTimeout(λ14e9caab2d5e);
    }
    return λ47fa5a820189.set(λ5a9d59ec9cd3, {
      blocked: λ6caf14458847,
      until: Date.now() + (null === λ6caf14458847 ? 3e4 : 6e5)
    }), λ47fa5a820189.size > 100 && λ47fa5a820189.delete(λ47fa5a820189.keys().next().value), 
    {
      url: λb7d5032da970,
      blocked: λ6caf14458847
    };
  }));
  return λc92bd291689f({
    vendor: λ0b7756fd05ed,
    results: λ5a9d59ec9cd3
  }), λ5a9d59ec9cd3.sort((λb7d5032da970, λ47fa5a820189) => Number(!0 === λb7d5032da970.blocked) - Number(!0 === λ47fa5a820189.blocked)).map(λb7d5032da970 => λb7d5032da970.url);
}
