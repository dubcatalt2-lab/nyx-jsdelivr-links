import { httpRelayUrl as λfe4d46586a26 } from "./@r694ba82e944178de68f9bf8d!.mjs";

export function normalizeRelay(λfe4d46586a26, λ0beb7fd59b89 = globalThis.location?.protocol || "https:") {
  try {
    const λ8a90468d54f1 = new URL(λfe4d46586a26);
    return ![ "ws:", "wss:" ].includes(λ8a90468d54f1.protocol) || λ8a90468d54f1.username || λ8a90468d54f1.password || λ8a90468d54f1.hash || "https:" === λ0beb7fd59b89 && "wss:" !== λ8a90468d54f1.protocol ? "" : λ8a90468d54f1.href;
  } catch {
    return "";
  }
}

export function relayCandidates(λfe4d46586a26, λ0beb7fd59b89 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ8a90468d54f1 = location) {
  const λ593e6ef45661 = `${"https:" === λ8a90468d54f1.protocol ? "wss:" : "ws:"}//${λ8a90468d54f1.host}/resources/live/`, λ29e460d39f2f = normalizeRelay(λfe4d46586a26.relay, λ8a90468d54f1.protocol) || normalizeRelay(λ0beb7fd59b89.wispUrl, λ8a90468d54f1.protocol) || λ593e6ef45661;
  return !1 === λfe4d46586a26.autoRelay ? [ λ29e460d39f2f ] : [ ...new Set([ λ29e460d39f2f, λ593e6ef45661, ...Array.isArray(λ0beb7fd59b89.wispUrls) ? λ0beb7fd59b89.wispUrls : [], "wss://copium-wisp-9529463.onrender.com/wisp/" ].map(λfe4d46586a26 => normalizeRelay(λfe4d46586a26, λ8a90468d54f1.protocol)).filter(Boolean)) ].slice(0, 6);
}

export function transportCandidates(λ0beb7fd59b89, λ8a90468d54f1 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ593e6ef45661 = location) {
  const λ29e460d39f2f = λfe4d46586a26(λ593e6ef45661), λc069e6ab5047 = relayCandidates(λ0beb7fd59b89, λ8a90468d54f1, λ593e6ef45661);
  return !1 === λ0beb7fd59b89.httpBridge ? relayCandidates(λ0beb7fd59b89.relay === λ29e460d39f2f ? {
    ...λ0beb7fd59b89,
    relay: ""
  } : λ0beb7fd59b89, λ8a90468d54f1.wispUrl === λ29e460d39f2f ? {
    ...λ8a90468d54f1,
    wispUrl: ""
  } : λ8a90468d54f1, λ593e6ef45661).filter(λfe4d46586a26 => λfe4d46586a26 !== λ29e460d39f2f) : λ0beb7fd59b89.relay && λ0beb7fd59b89.relay !== λ29e460d39f2f ? [ ...new Set([ ...λc069e6ab5047, ...!1 === λ0beb7fd59b89.autoRelay ? [] : [ λ29e460d39f2f ] ]) ] : [ ...new Set([ λ29e460d39f2f, ...!1 === λ0beb7fd59b89.autoRelay ? [] : λc069e6ab5047 ]) ];
}

export function probeWisp(λfe4d46586a26, {timeout: λ0beb7fd59b89 = 7e3, Socket: λ8a90468d54f1 = WebSocket} = {}) {
  return new Promise(λ593e6ef45661 => {
    let λ29e460d39f2f, λc069e6ab5047 = !1;
    const n = λfe4d46586a26 => {
      if (!λc069e6ab5047) {
        if (λc069e6ab5047 = !0, clearTimeout(λ794fe99aea5f), λ29e460d39f2f) {
          λ29e460d39f2f.onmessage = λ29e460d39f2f.onerror = λ29e460d39f2f.onclose = null;
          try {
            λ29e460d39f2f.close();
          } catch {}
        }
        λ593e6ef45661(λfe4d46586a26);
      }
    }, λ794fe99aea5f = setTimeout(() => n(!1), λ0beb7fd59b89);
    try {
      λ29e460d39f2f = new λ8a90468d54f1(λfe4d46586a26), λ29e460d39f2f.binaryType = "arraybuffer", 
      λ29e460d39f2f.onmessage = λfe4d46586a26 => {
        if (!(λfe4d46586a26.data instanceof ArrayBuffer)) return;
        const λ0beb7fd59b89 = new Uint8Array(λfe4d46586a26.data);
        λ0beb7fd59b89.length >= 9 && 3 === λ0beb7fd59b89[0] && 0 === new DataView(λfe4d46586a26.data).getUint32(1, !0) && n(!0);
      }, λ29e460d39f2f.onerror = λ29e460d39f2f.onclose = () => n(!1);
    } catch {
      n(!1);
    }
  });
}

export class RelayTransport {
  constructor({urls: λfe4d46586a26, createClient: λ0beb7fd59b89, probe: λ8a90468d54f1 = probeWisp, onStatus: λ593e6ef45661 = () => {}, storage: λ29e460d39f2f = globalThis.sessionStorage, monitorMs: λc069e6ab5047 = 3e4, requestTimeoutMs: λ794fe99aea5f = 2e4, rank: λ9d45b5b59448 = async λfe4d46586a26 => λfe4d46586a26, online: λ67f7c5798cc9 = () => !1 !== globalThis.navigator?.onLine, visible: λd5ca02e5996f = () => !globalThis.document?.hidden}) {
    Object.assign(this, {
      urls: λfe4d46586a26,
      createClient: λ0beb7fd59b89,
      probe: λ8a90468d54f1,
      onStatus: λ593e6ef45661,
      storage: λ29e460d39f2f,
      monitorMs: λc069e6ab5047,
      requestTimeoutMs: λ794fe99aea5f,
      rank: λ9d45b5b59448,
      online: λ67f7c5798cc9,
      visible: λd5ca02e5996f
    }), this.ready = !1, this.closed = !1, this.url = "", this.client = null, this.switching = null, 
    this.failures = 0, this.retired = [];
  }
  async init() {
    await this.select(), this.ready = !0, this.schedule();
  }
  async select(λfe4d46586a26 = "") {
    if (this.closed) throw new Error("Relay connection closed.");
    if (this.switching) return this.switching;
    if (!this.online()) throw new Error("You are offline. Reconnect to Wi-Fi and try again.");
    let λ0beb7fd59b89 = "";
    try {
      λ0beb7fd59b89 = this.storage?.getItem("tutsi.workingRelay:" + this.urls.join("|")) || "";
    } catch {}
    const λ8a90468d54f1 = [ ...new Set([ this.url, λ0beb7fd59b89, ...this.urls ]) ].filter(λ0beb7fd59b89 => this.urls.includes(λ0beb7fd59b89) && λ0beb7fd59b89 !== λfe4d46586a26);
    this.switching = (async () => {
      let λ0beb7fd59b89;
      const λ593e6ef45661 = await Promise.race([ Promise.resolve().then(() => this.rank(λ8a90468d54f1)).catch(() => λ8a90468d54f1), new Promise(λfe4d46586a26 => {
        λ0beb7fd59b89 = setTimeout(() => λfe4d46586a26(λ8a90468d54f1), 300);
      }) ]).finally(() => clearTimeout(λ0beb7fd59b89));
      for (const λ0beb7fd59b89 of λ593e6ef45661) {
        if (this.closed) throw new Error("Relay connection closed.");
        if (this.onStatus({
          state: "checking",
          url: λ0beb7fd59b89
        }), !await this.probe(λ0beb7fd59b89)) continue;
        let λ8a90468d54f1;
        try {
          λ8a90468d54f1 = await this.createClient(λ0beb7fd59b89);
        } catch {
          continue;
        }
        if (this.closed) throw λ8a90468d54f1.close?.(), new Error("Relay connection closed.");
        for (this.client && this.retired.push(this.client); this.retired.length > 2; ) try {
          this.retired.shift()?.close?.();
        } catch {}
        this.client = λ8a90468d54f1, this.url = λ0beb7fd59b89, this.failures = 0;
        try {
          this.storage?.setItem("tutsi.workingRelay:" + this.urls.join("|"), λ0beb7fd59b89);
        } catch {}
        return void this.onStatus({
          state: λfe4d46586a26 ? "switched" : "connected",
          url: λ0beb7fd59b89
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
  async recover(λfe4d46586a26, λ0beb7fd59b89 = !1, λ8a90468d54f1 = !1) {
    return !(this.closed || !this.online() || this.client === λfe4d46586a26 && (this.switching ? (await this.switching, 
    this.client === λfe4d46586a26) : !λ0beb7fd59b89 && await this.probe(this.url) || this.client === λfe4d46586a26 && (await this.select(λ8a90468d54f1 ? "" : this.url), 
    this.client === λfe4d46586a26)));
  }
  async attempt(λfe4d46586a26, λ0beb7fd59b89) {
    const λ8a90468d54f1 = λ0beb7fd59b89[4], λ593e6ef45661 = new AbortController;
    if (λ8a90468d54f1?.aborted) throw λ8a90468d54f1.reason || new DOMException("Cancelled", "AbortError");
    let λ29e460d39f2f, λc069e6ab5047 = !1, λ794fe99aea5f = !1;
    const λ9d45b5b59448 = λ8a90468d54f1 ? AbortSignal.any([ λ8a90468d54f1, λ593e6ef45661.signal ]) : λ593e6ef45661.signal, λ67f7c5798cc9 = Promise.resolve().then(() => λfe4d46586a26.request(...λ0beb7fd59b89.slice(0, 4), λ9d45b5b59448));
    λ67f7c5798cc9.then(λfe4d46586a26 => {
      λ794fe99aea5f && λ9d45b5b59448.aborted && λfe4d46586a26?.body?.cancel?.().catch(() => {});
    }, () => {});
    const λd5ca02e5996f = new Promise((λfe4d46586a26, λ0beb7fd59b89) => {
      const i = () => λ0beb7fd59b89(λc069e6ab5047 ? Object.assign(new Error("Relay request timed out"), {
        name: "TimeoutError"
      }) : λ9d45b5b59448.reason);
      λ9d45b5b59448.addEventListener("abort", i, {
        once: !0
      }), λ29e460d39f2f = setTimeout(() => {
        λc069e6ab5047 = !0, λ593e6ef45661.abort();
      }, this.requestTimeoutMs), λ67f7c5798cc9.finally(() => λ9d45b5b59448.removeEventListener("abort", i)).catch(() => {});
    });
    try {
      return await Promise.race([ λ67f7c5798cc9, λd5ca02e5996f ]);
    } finally {
      λ794fe99aea5f = !0, clearTimeout(λ29e460d39f2f);
    }
  }
  async request(...λfe4d46586a26) {
    if (this.closed) throw new Error("Relay connection closed.");
    this.ready || await this.init();
    const λ0beb7fd59b89 = this.client;
    try {
      return await this.attempt(λ0beb7fd59b89, λfe4d46586a26);
    } catch (λ8a90468d54f1) {
      if (λfe4d46586a26[4]?.aborted || "AbortError" === λ8a90468d54f1?.name) throw λ8a90468d54f1;
      const λ593e6ef45661 = "TimeoutError" === λ8a90468d54f1?.name || /timed?\s*out|timeout|ETIMEDOUT|ECONNRESET|network|socket|wisp|hyper.*(?:error|client)|muxtaskended|connection.*(?:closed|reset|lost|failed)|unexpected.*(?:eof|cutoff)|transport.*(?:closed|failed)/i.test(String(λ8a90468d54f1?.message || λ8a90468d54f1 || ""));
      let λ29e460d39f2f = !1;
      try {
        λ29e460d39f2f = await this.recover(λ0beb7fd59b89, λ593e6ef45661, λ593e6ef45661);
      } catch {}
      if (λ29e460d39f2f && /^(GET|HEAD)$/i.test(String(λfe4d46586a26[1] || "GET")) && !λfe4d46586a26[4]?.aborted && !this.closed && this.online()) return this.attempt(this.client, λfe4d46586a26);
      throw λ8a90468d54f1;
    }
  }
  connect(...λfe4d46586a26) {
    const λ0beb7fd59b89 = this.client, λ8a90468d54f1 = λfe4d46586a26[6];
    λfe4d46586a26[6] = (...λfe4d46586a26) => {
      this.recover(λ0beb7fd59b89).catch(() => {}), λ8a90468d54f1?.(...λfe4d46586a26);
    };
    try {
      return λ0beb7fd59b89.connect(...λfe4d46586a26);
    } catch (λfe4d46586a26) {
      throw this.recover(λ0beb7fd59b89).catch(() => {}), λfe4d46586a26;
    }
  }
  async check() {
    if (this.closed || !this.client || !this.online() || !this.visible()) return;
    const λfe4d46586a26 = this.client, λ0beb7fd59b89 = this.url, λ8a90468d54f1 = await this.probe(λ0beb7fd59b89);
    this.closed || λfe4d46586a26 !== this.client || (this.failures = λ8a90468d54f1 ? 0 : this.failures + 1, 
    this.failures >= 2 && await this.recover(λfe4d46586a26, !0).catch(() => {}));
  }
  schedule() {
    !this.closed && this.monitorMs && (this.timer = setTimeout(async () => {
      await this.check(), this.schedule();
    }, this.monitorMs));
  }
  close() {
    this.closed = !0, clearTimeout(this.timer);
    for (const λfe4d46586a26 of [ this.client, ...this.retired ]) try {
      λfe4d46586a26?.close?.();
    } catch {}
    this.retired = [];
  }
}

const λ0beb7fd59b89 = new Map;

export async function rankForBlocker(λfe4d46586a26, λ8a90468d54f1, {fetcher: λ593e6ef45661 = fetch, onHint: λ29e460d39f2f = () => {}} = {}) {
  if (!/^[a-z0-9_-]{1,64}$/.test(λ8a90468d54f1 || "")) return λfe4d46586a26;
  const λc069e6ab5047 = await Promise.all(λfe4d46586a26.map(async λfe4d46586a26 => {
    const λ29e460d39f2f = new URL(λfe4d46586a26).hostname;
    if ("localhost" === λ29e460d39f2f || λ29e460d39f2f.endsWith(".local") || /^[\d.]+$/.test(λ29e460d39f2f) || λ29e460d39f2f.includes(":")) return {
      url: λfe4d46586a26,
      blocked: null
    };
    const λc069e6ab5047 = λ8a90468d54f1 + ":" + λ29e460d39f2f, λ794fe99aea5f = λ0beb7fd59b89.get(λc069e6ab5047);
    if (λ794fe99aea5f && λ794fe99aea5f.until > Date.now()) return {
      url: λfe4d46586a26,
      blocked: λ794fe99aea5f.blocked
    };
    let λ9d45b5b59448 = null;
    const λ67f7c5798cc9 = new AbortController, λd5ca02e5996f = setTimeout(() => λ67f7c5798cc9.abort(), 4e3);
    try {
      const λfe4d46586a26 = await λ593e6ef45661("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-checker/check", {
        method: "POST",
        signal: λ67f7c5798cc9.signal,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: "https://" + λ29e460d39f2f + "/",
          vendor: λ8a90468d54f1
        })
      });
      if (λfe4d46586a26.ok) {
        const λ0beb7fd59b89 = await λfe4d46586a26.json(), λ593e6ef45661 = λ0beb7fd59b89?.vendors?.[λ8a90468d54f1];
        λ593e6ef45661?.error || "boolean" != typeof λ593e6ef45661?.blocked || (λ9d45b5b59448 = λ593e6ef45661.blocked);
      }
    } catch {} finally {
      clearTimeout(λd5ca02e5996f);
    }
    return λ0beb7fd59b89.set(λc069e6ab5047, {
      blocked: λ9d45b5b59448,
      until: Date.now() + (null === λ9d45b5b59448 ? 3e4 : 6e5)
    }), λ0beb7fd59b89.size > 100 && λ0beb7fd59b89.delete(λ0beb7fd59b89.keys().next().value), 
    {
      url: λfe4d46586a26,
      blocked: λ9d45b5b59448
    };
  }));
  return λ29e460d39f2f({
    vendor: λ8a90468d54f1,
    results: λc069e6ab5047
  }), λc069e6ab5047.sort((λfe4d46586a26, λ0beb7fd59b89) => Number(!0 === λfe4d46586a26.blocked) - Number(!0 === λ0beb7fd59b89.blocked)).map(λfe4d46586a26 => λfe4d46586a26.url);
}
