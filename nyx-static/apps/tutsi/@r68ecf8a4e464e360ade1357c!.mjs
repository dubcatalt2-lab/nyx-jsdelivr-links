import { httpRelayUrl as λ15bccae1f126 } from "./@r694ba82e944178de68f9bf8d!.mjs";

export function normalizeRelay(λ15bccae1f126, λ49f717cb64ea = globalThis.location?.protocol || "https:") {
  try {
    const λ4d534f035a82 = new URL(λ15bccae1f126);
    return ![ "ws:", "wss:" ].includes(λ4d534f035a82.protocol) || λ4d534f035a82.username || λ4d534f035a82.password || λ4d534f035a82.hash || "https:" === λ49f717cb64ea && "wss:" !== λ4d534f035a82.protocol ? "" : λ4d534f035a82.href;
  } catch {
    return "";
  }
}

export function relayCandidates(λ15bccae1f126, λ49f717cb64ea = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ4d534f035a82 = location) {
  const λ054537bb4354 = `${"https:" === λ4d534f035a82.protocol ? "wss:" : "ws:"}//${λ4d534f035a82.host}/resources/live/`, λ1d868f9f36a0 = normalizeRelay(λ15bccae1f126.relay, λ4d534f035a82.protocol) || normalizeRelay(λ49f717cb64ea.wispUrl, λ4d534f035a82.protocol) || λ054537bb4354;
  return !1 === λ15bccae1f126.autoRelay ? [ λ1d868f9f36a0 ] : [ ...new Set([ λ1d868f9f36a0, λ054537bb4354, ...Array.isArray(λ49f717cb64ea.wispUrls) ? λ49f717cb64ea.wispUrls : [], "wss://copium-wisp-9529463.onrender.com/wisp/" ].map(λ15bccae1f126 => normalizeRelay(λ15bccae1f126, λ4d534f035a82.protocol)).filter(Boolean)) ].slice(0, 6);
}

export function transportCandidates(λ49f717cb64ea, λ4d534f035a82 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ054537bb4354 = location) {
  const λ1d868f9f36a0 = λ15bccae1f126(λ054537bb4354), λ0f39152e76de = relayCandidates(λ49f717cb64ea, λ4d534f035a82, λ054537bb4354);
  return !1 === λ49f717cb64ea.httpBridge ? relayCandidates(λ49f717cb64ea.relay === λ1d868f9f36a0 ? {
    ...λ49f717cb64ea,
    relay: ""
  } : λ49f717cb64ea, λ4d534f035a82.wispUrl === λ1d868f9f36a0 ? {
    ...λ4d534f035a82,
    wispUrl: ""
  } : λ4d534f035a82, λ054537bb4354).filter(λ15bccae1f126 => λ15bccae1f126 !== λ1d868f9f36a0) : λ49f717cb64ea.relay && λ49f717cb64ea.relay !== λ1d868f9f36a0 ? [ ...new Set([ ...λ0f39152e76de, ...!1 === λ49f717cb64ea.autoRelay ? [] : [ λ1d868f9f36a0 ] ]) ] : [ ...new Set([ λ1d868f9f36a0, ...!1 === λ49f717cb64ea.autoRelay ? [] : λ0f39152e76de ]) ];
}

export function probeWisp(λ15bccae1f126, {timeout: λ49f717cb64ea = 7e3, Socket: λ4d534f035a82 = WebSocket} = {}) {
  return new Promise(λ054537bb4354 => {
    let λ1d868f9f36a0, λ0f39152e76de = !1;
    const n = λ15bccae1f126 => {
      if (!λ0f39152e76de) {
        if (λ0f39152e76de = !0, clearTimeout(λ54bfee6e6f30), λ1d868f9f36a0) {
          λ1d868f9f36a0.onmessage = λ1d868f9f36a0.onerror = λ1d868f9f36a0.onclose = null;
          try {
            λ1d868f9f36a0.close();
          } catch {}
        }
        λ054537bb4354(λ15bccae1f126);
      }
    }, λ54bfee6e6f30 = setTimeout(() => n(!1), λ49f717cb64ea);
    try {
      λ1d868f9f36a0 = new λ4d534f035a82(λ15bccae1f126), λ1d868f9f36a0.binaryType = "arraybuffer", 
      λ1d868f9f36a0.onmessage = λ15bccae1f126 => {
        if (!(λ15bccae1f126.data instanceof ArrayBuffer)) return;
        const λ49f717cb64ea = new Uint8Array(λ15bccae1f126.data);
        λ49f717cb64ea.length >= 9 && 3 === λ49f717cb64ea[0] && 0 === new DataView(λ15bccae1f126.data).getUint32(1, !0) && n(!0);
      }, λ1d868f9f36a0.onerror = λ1d868f9f36a0.onclose = () => n(!1);
    } catch {
      n(!1);
    }
  });
}

export class RelayTransport {
  constructor({urls: λ15bccae1f126, createClient: λ49f717cb64ea, probe: λ4d534f035a82 = probeWisp, onStatus: λ054537bb4354 = () => {}, storage: λ1d868f9f36a0 = globalThis.sessionStorage, monitorMs: λ0f39152e76de = 3e4, requestTimeoutMs: λ54bfee6e6f30 = 2e4, rank: λcb437d26490a = async λ15bccae1f126 => λ15bccae1f126, online: λ4ed7b265f2b3 = () => !1 !== globalThis.navigator?.onLine, visible: λaa7dff95df77 = () => !globalThis.document?.hidden}) {
    Object.assign(this, {
      urls: λ15bccae1f126,
      createClient: λ49f717cb64ea,
      probe: λ4d534f035a82,
      onStatus: λ054537bb4354,
      storage: λ1d868f9f36a0,
      monitorMs: λ0f39152e76de,
      requestTimeoutMs: λ54bfee6e6f30,
      rank: λcb437d26490a,
      online: λ4ed7b265f2b3,
      visible: λaa7dff95df77
    }), this.ready = !1, this.closed = !1, this.url = "", this.client = null, this.switching = null, 
    this.failures = 0, this.retired = [];
  }
  async init() {
    await this.select(), this.ready = !0, this.schedule();
  }
  async select(λ15bccae1f126 = "") {
    if (this.closed) throw new Error("Relay connection closed.");
    if (this.switching) return this.switching;
    if (!this.online()) throw new Error("You are offline. Reconnect to Wi-Fi and try again.");
    let λ49f717cb64ea = "";
    try {
      λ49f717cb64ea = this.storage?.getItem("tutsi.workingRelay:" + this.urls.join("|")) || "";
    } catch {}
    const λ4d534f035a82 = [ ...new Set([ this.url, λ49f717cb64ea, ...this.urls ]) ].filter(λ49f717cb64ea => this.urls.includes(λ49f717cb64ea) && λ49f717cb64ea !== λ15bccae1f126);
    this.switching = (async () => {
      let λ49f717cb64ea;
      const λ054537bb4354 = await Promise.race([ Promise.resolve().then(() => this.rank(λ4d534f035a82)).catch(() => λ4d534f035a82), new Promise(λ15bccae1f126 => {
        λ49f717cb64ea = setTimeout(() => λ15bccae1f126(λ4d534f035a82), 300);
      }) ]).finally(() => clearTimeout(λ49f717cb64ea));
      for (const λ49f717cb64ea of λ054537bb4354) {
        if (this.closed) throw new Error("Relay connection closed.");
        if (this.onStatus({
          state: "checking",
          url: λ49f717cb64ea
        }), !await this.probe(λ49f717cb64ea)) continue;
        let λ4d534f035a82;
        try {
          λ4d534f035a82 = await this.createClient(λ49f717cb64ea);
        } catch {
          continue;
        }
        if (this.closed) throw λ4d534f035a82.close?.(), new Error("Relay connection closed.");
        for (this.client && this.retired.push(this.client); this.retired.length > 2; ) try {
          this.retired.shift()?.close?.();
        } catch {}
        this.client = λ4d534f035a82, this.url = λ49f717cb64ea, this.failures = 0;
        try {
          this.storage?.setItem("tutsi.workingRelay:" + this.urls.join("|"), λ49f717cb64ea);
        } catch {}
        return void this.onStatus({
          state: λ15bccae1f126 ? "switched" : "connected",
          url: λ49f717cb64ea
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
  async recover(λ15bccae1f126, λ49f717cb64ea = !1, λ4d534f035a82 = !1) {
    return !(this.closed || !this.online() || this.client === λ15bccae1f126 && (this.switching ? (await this.switching, 
    this.client === λ15bccae1f126) : !λ49f717cb64ea && await this.probe(this.url) || this.client === λ15bccae1f126 && (await this.select(λ4d534f035a82 ? "" : this.url), 
    this.client === λ15bccae1f126)));
  }
  async attempt(λ15bccae1f126, λ49f717cb64ea) {
    const λ4d534f035a82 = λ49f717cb64ea[4], λ054537bb4354 = new AbortController;
    if (λ4d534f035a82?.aborted) throw λ4d534f035a82.reason || new DOMException("Cancelled", "AbortError");
    let λ1d868f9f36a0, λ0f39152e76de = !1, λ54bfee6e6f30 = !1;
    const λcb437d26490a = λ4d534f035a82 ? AbortSignal.any([ λ4d534f035a82, λ054537bb4354.signal ]) : λ054537bb4354.signal, λ4ed7b265f2b3 = Promise.resolve().then(() => λ15bccae1f126.request(...λ49f717cb64ea.slice(0, 4), λcb437d26490a));
    λ4ed7b265f2b3.then(λ15bccae1f126 => {
      λ54bfee6e6f30 && λcb437d26490a.aborted && λ15bccae1f126?.body?.cancel?.().catch(() => {});
    }, () => {});
    const λaa7dff95df77 = new Promise((λ15bccae1f126, λ49f717cb64ea) => {
      const i = () => λ49f717cb64ea(λ0f39152e76de ? Object.assign(new Error("Relay request timed out"), {
        name: "TimeoutError"
      }) : λcb437d26490a.reason);
      λcb437d26490a.addEventListener("abort", i, {
        once: !0
      }), λ1d868f9f36a0 = setTimeout(() => {
        λ0f39152e76de = !0, λ054537bb4354.abort();
      }, this.requestTimeoutMs), λ4ed7b265f2b3.finally(() => λcb437d26490a.removeEventListener("abort", i)).catch(() => {});
    });
    try {
      return await Promise.race([ λ4ed7b265f2b3, λaa7dff95df77 ]);
    } finally {
      λ54bfee6e6f30 = !0, clearTimeout(λ1d868f9f36a0);
    }
  }
  async request(...λ15bccae1f126) {
    if (this.closed) throw new Error("Relay connection closed.");
    this.ready || await this.init();
    const λ49f717cb64ea = this.client;
    try {
      return await this.attempt(λ49f717cb64ea, λ15bccae1f126);
    } catch (λ4d534f035a82) {
      if (λ15bccae1f126[4]?.aborted || "AbortError" === λ4d534f035a82?.name) throw λ4d534f035a82;
      const λ054537bb4354 = "TimeoutError" === λ4d534f035a82?.name || /timed?\s*out|timeout|ETIMEDOUT|ECONNRESET|network|socket|wisp|hyper.*(?:error|client)|muxtaskended|connection.*(?:closed|reset|lost|failed)|unexpected.*(?:eof|cutoff)|transport.*(?:closed|failed)/i.test(String(λ4d534f035a82?.message || λ4d534f035a82 || ""));
      let λ1d868f9f36a0 = !1;
      try {
        λ1d868f9f36a0 = await this.recover(λ49f717cb64ea, λ054537bb4354, λ054537bb4354);
      } catch {}
      if (λ1d868f9f36a0 && /^(GET|HEAD)$/i.test(String(λ15bccae1f126[1] || "GET")) && !λ15bccae1f126[4]?.aborted && !this.closed && this.online()) return this.attempt(this.client, λ15bccae1f126);
      throw λ4d534f035a82;
    }
  }
  connect(...λ15bccae1f126) {
    const λ49f717cb64ea = this.client, λ4d534f035a82 = λ15bccae1f126[6];
    λ15bccae1f126[6] = (...λ15bccae1f126) => {
      this.recover(λ49f717cb64ea).catch(() => {}), λ4d534f035a82?.(...λ15bccae1f126);
    };
    try {
      return λ49f717cb64ea.connect(...λ15bccae1f126);
    } catch (λ15bccae1f126) {
      throw this.recover(λ49f717cb64ea).catch(() => {}), λ15bccae1f126;
    }
  }
  async check() {
    if (this.closed || !this.client || !this.online() || !this.visible()) return;
    const λ15bccae1f126 = this.client, λ49f717cb64ea = this.url, λ4d534f035a82 = await this.probe(λ49f717cb64ea);
    this.closed || λ15bccae1f126 !== this.client || (this.failures = λ4d534f035a82 ? 0 : this.failures + 1, 
    this.failures >= 2 && await this.recover(λ15bccae1f126, !0).catch(() => {}));
  }
  schedule() {
    !this.closed && this.monitorMs && (this.timer = setTimeout(async () => {
      await this.check(), this.schedule();
    }, this.monitorMs));
  }
  close() {
    this.closed = !0, clearTimeout(this.timer);
    for (const λ15bccae1f126 of [ this.client, ...this.retired ]) try {
      λ15bccae1f126?.close?.();
    } catch {}
    this.retired = [];
  }
}

const λ49f717cb64ea = new Map;

export async function rankForBlocker(λ15bccae1f126, λ4d534f035a82, {fetcher: λ054537bb4354 = fetch, onHint: λ1d868f9f36a0 = () => {}} = {}) {
  if (!/^[a-z0-9_-]{1,64}$/.test(λ4d534f035a82 || "")) return λ15bccae1f126;
  const λ0f39152e76de = await Promise.all(λ15bccae1f126.map(async λ15bccae1f126 => {
    const λ1d868f9f36a0 = new URL(λ15bccae1f126).hostname;
    if ("localhost" === λ1d868f9f36a0 || λ1d868f9f36a0.endsWith(".local") || /^[\d.]+$/.test(λ1d868f9f36a0) || λ1d868f9f36a0.includes(":")) return {
      url: λ15bccae1f126,
      blocked: null
    };
    const λ0f39152e76de = λ4d534f035a82 + ":" + λ1d868f9f36a0, λ54bfee6e6f30 = λ49f717cb64ea.get(λ0f39152e76de);
    if (λ54bfee6e6f30 && λ54bfee6e6f30.until > Date.now()) return {
      url: λ15bccae1f126,
      blocked: λ54bfee6e6f30.blocked
    };
    let λcb437d26490a = null;
    const λ4ed7b265f2b3 = new AbortController, λaa7dff95df77 = setTimeout(() => λ4ed7b265f2b3.abort(), 4e3);
    try {
      const λ15bccae1f126 = await λ054537bb4354("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-checker/check", {
        method: "POST",
        signal: λ4ed7b265f2b3.signal,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: "https://" + λ1d868f9f36a0 + "/",
          vendor: λ4d534f035a82
        })
      });
      if (λ15bccae1f126.ok) {
        const λ49f717cb64ea = await λ15bccae1f126.json(), λ054537bb4354 = λ49f717cb64ea?.vendors?.[λ4d534f035a82];
        λ054537bb4354?.error || "boolean" != typeof λ054537bb4354?.blocked || (λcb437d26490a = λ054537bb4354.blocked);
      }
    } catch {} finally {
      clearTimeout(λaa7dff95df77);
    }
    return λ49f717cb64ea.set(λ0f39152e76de, {
      blocked: λcb437d26490a,
      until: Date.now() + (null === λcb437d26490a ? 3e4 : 6e5)
    }), λ49f717cb64ea.size > 100 && λ49f717cb64ea.delete(λ49f717cb64ea.keys().next().value), 
    {
      url: λ15bccae1f126,
      blocked: λcb437d26490a
    };
  }));
  return λ1d868f9f36a0({
    vendor: λ4d534f035a82,
    results: λ0f39152e76de
  }), λ0f39152e76de.sort((λ15bccae1f126, λ49f717cb64ea) => Number(!0 === λ15bccae1f126.blocked) - Number(!0 === λ49f717cb64ea.blocked)).map(λ15bccae1f126 => λ15bccae1f126.url);
}
