import { httpRelayUrl as λ87ea7b07c933 } from "./@r694ba82e944178de68f9bf8d!.mjs";

export function normalizeRelay(λ87ea7b07c933, λf52aca1610f7 = globalThis.location?.protocol || "https:") {
  try {
    const λ4c71eae50117 = new URL(λ87ea7b07c933);
    return ![ "ws:", "wss:" ].includes(λ4c71eae50117.protocol) || λ4c71eae50117.username || λ4c71eae50117.password || λ4c71eae50117.hash || "https:" === λf52aca1610f7 && "wss:" !== λ4c71eae50117.protocol ? "" : λ4c71eae50117.href;
  } catch {
    return "";
  }
}

export function relayCandidates(λ87ea7b07c933, λf52aca1610f7 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ4c71eae50117 = location) {
  const λfc9a6c7ac358 = `${"https:" === λ4c71eae50117.protocol ? "wss:" : "ws:"}//${λ4c71eae50117.host}/resources/live/`, λ67b2ed9459ce = normalizeRelay(λ87ea7b07c933.relay, λ4c71eae50117.protocol) || normalizeRelay(λf52aca1610f7.wispUrl, λ4c71eae50117.protocol) || λfc9a6c7ac358;
  return !1 === λ87ea7b07c933.autoRelay ? [ λ67b2ed9459ce ] : [ ...new Set([ λ67b2ed9459ce, λfc9a6c7ac358, ...Array.isArray(λf52aca1610f7.wispUrls) ? λf52aca1610f7.wispUrls : [], "wss://copium-wisp-9529463.onrender.com/wisp/" ].map(λ87ea7b07c933 => normalizeRelay(λ87ea7b07c933, λ4c71eae50117.protocol)).filter(Boolean)) ].slice(0, 6);
}

export function transportCandidates(λf52aca1610f7, λ4c71eae50117 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λfc9a6c7ac358 = location) {
  const λ67b2ed9459ce = λ87ea7b07c933(λfc9a6c7ac358), λ8eb33bb8d5cb = relayCandidates(λf52aca1610f7, λ4c71eae50117, λfc9a6c7ac358);
  return !1 === λf52aca1610f7.httpBridge ? relayCandidates(λf52aca1610f7.relay === λ67b2ed9459ce ? {
    ...λf52aca1610f7,
    relay: ""
  } : λf52aca1610f7, λ4c71eae50117.wispUrl === λ67b2ed9459ce ? {
    ...λ4c71eae50117,
    wispUrl: ""
  } : λ4c71eae50117, λfc9a6c7ac358).filter(λ87ea7b07c933 => λ87ea7b07c933 !== λ67b2ed9459ce) : λf52aca1610f7.relay && λf52aca1610f7.relay !== λ67b2ed9459ce ? [ ...new Set([ ...λ8eb33bb8d5cb, ...!1 === λf52aca1610f7.autoRelay ? [] : [ λ67b2ed9459ce ] ]) ] : [ ...new Set([ λ67b2ed9459ce, ...!1 === λf52aca1610f7.autoRelay ? [] : λ8eb33bb8d5cb ]) ];
}

export function probeWisp(λ87ea7b07c933, {timeout: λf52aca1610f7 = 7e3, Socket: λ4c71eae50117 = WebSocket} = {}) {
  return new Promise(λfc9a6c7ac358 => {
    let λ67b2ed9459ce, λ8eb33bb8d5cb = !1;
    const n = λ87ea7b07c933 => {
      if (!λ8eb33bb8d5cb) {
        if (λ8eb33bb8d5cb = !0, clearTimeout(λ761093bb0b9b), λ67b2ed9459ce) {
          λ67b2ed9459ce.onmessage = λ67b2ed9459ce.onerror = λ67b2ed9459ce.onclose = null;
          try {
            λ67b2ed9459ce.close();
          } catch {}
        }
        λfc9a6c7ac358(λ87ea7b07c933);
      }
    }, λ761093bb0b9b = setTimeout(() => n(!1), λf52aca1610f7);
    try {
      λ67b2ed9459ce = new λ4c71eae50117(λ87ea7b07c933), λ67b2ed9459ce.binaryType = "arraybuffer", 
      λ67b2ed9459ce.onmessage = λ87ea7b07c933 => {
        if (!(λ87ea7b07c933.data instanceof ArrayBuffer)) return;
        const λf52aca1610f7 = new Uint8Array(λ87ea7b07c933.data);
        λf52aca1610f7.length >= 9 && 3 === λf52aca1610f7[0] && 0 === new DataView(λ87ea7b07c933.data).getUint32(1, !0) && n(!0);
      }, λ67b2ed9459ce.onerror = λ67b2ed9459ce.onclose = () => n(!1);
    } catch {
      n(!1);
    }
  });
}

export class RelayTransport {
  constructor({urls: λ87ea7b07c933, createClient: λf52aca1610f7, probe: λ4c71eae50117 = probeWisp, onStatus: λfc9a6c7ac358 = () => {}, storage: λ67b2ed9459ce = globalThis.sessionStorage, monitorMs: λ8eb33bb8d5cb = 3e4, requestTimeoutMs: λ761093bb0b9b = 2e4, rank: λa6ce0e7589cb = async λ87ea7b07c933 => λ87ea7b07c933, online: λ8d1b41b50099 = () => !1 !== globalThis.navigator?.onLine, visible: λ6d2c5c520755 = () => !globalThis.document?.hidden}) {
    Object.assign(this, {
      urls: λ87ea7b07c933,
      createClient: λf52aca1610f7,
      probe: λ4c71eae50117,
      onStatus: λfc9a6c7ac358,
      storage: λ67b2ed9459ce,
      monitorMs: λ8eb33bb8d5cb,
      requestTimeoutMs: λ761093bb0b9b,
      rank: λa6ce0e7589cb,
      online: λ8d1b41b50099,
      visible: λ6d2c5c520755
    }), this.ready = !1, this.closed = !1, this.url = "", this.client = null, this.switching = null, 
    this.failures = 0, this.retired = [];
  }
  async init() {
    await this.select(), this.ready = !0, this.schedule();
  }
  async select(λ87ea7b07c933 = "") {
    if (this.closed) throw new Error("Relay connection closed.");
    if (this.switching) return this.switching;
    if (!this.online()) throw new Error("You are offline. Reconnect to Wi-Fi and try again.");
    let λf52aca1610f7 = "";
    try {
      λf52aca1610f7 = this.storage?.getItem("tutsi.workingRelay:" + this.urls.join("|")) || "";
    } catch {}
    const λ4c71eae50117 = [ ...new Set([ this.url, λf52aca1610f7, ...this.urls ]) ].filter(λf52aca1610f7 => this.urls.includes(λf52aca1610f7) && λf52aca1610f7 !== λ87ea7b07c933);
    this.switching = (async () => {
      let λf52aca1610f7;
      const λfc9a6c7ac358 = await Promise.race([ Promise.resolve().then(() => this.rank(λ4c71eae50117)).catch(() => λ4c71eae50117), new Promise(λ87ea7b07c933 => {
        λf52aca1610f7 = setTimeout(() => λ87ea7b07c933(λ4c71eae50117), 300);
      }) ]).finally(() => clearTimeout(λf52aca1610f7));
      for (const λf52aca1610f7 of λfc9a6c7ac358) {
        if (this.closed) throw new Error("Relay connection closed.");
        if (this.onStatus({
          state: "checking",
          url: λf52aca1610f7
        }), !await this.probe(λf52aca1610f7)) continue;
        let λ4c71eae50117;
        try {
          λ4c71eae50117 = await this.createClient(λf52aca1610f7);
        } catch {
          continue;
        }
        if (this.closed) throw λ4c71eae50117.close?.(), new Error("Relay connection closed.");
        for (this.client && this.retired.push(this.client); this.retired.length > 2; ) try {
          this.retired.shift()?.close?.();
        } catch {}
        this.client = λ4c71eae50117, this.url = λf52aca1610f7, this.failures = 0;
        try {
          this.storage?.setItem("tutsi.workingRelay:" + this.urls.join("|"), λf52aca1610f7);
        } catch {}
        return void this.onStatus({
          state: λ87ea7b07c933 ? "switched" : "connected",
          url: λf52aca1610f7
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
  async recover(λ87ea7b07c933, λf52aca1610f7 = !1, λ4c71eae50117 = !1) {
    return !(this.closed || !this.online() || this.client === λ87ea7b07c933 && (this.switching ? (await this.switching, 
    this.client === λ87ea7b07c933) : !λf52aca1610f7 && await this.probe(this.url) || this.client === λ87ea7b07c933 && (await this.select(λ4c71eae50117 ? "" : this.url), 
    this.client === λ87ea7b07c933)));
  }
  async attempt(λ87ea7b07c933, λf52aca1610f7) {
    const λ4c71eae50117 = λf52aca1610f7[4], λfc9a6c7ac358 = new AbortController;
    if (λ4c71eae50117?.aborted) throw λ4c71eae50117.reason || new DOMException("Cancelled", "AbortError");
    let λ67b2ed9459ce, λ8eb33bb8d5cb = !1, λ761093bb0b9b = !1;
    const λa6ce0e7589cb = λ4c71eae50117 ? AbortSignal.any([ λ4c71eae50117, λfc9a6c7ac358.signal ]) : λfc9a6c7ac358.signal, λ8d1b41b50099 = Promise.resolve().then(() => λ87ea7b07c933.request(...λf52aca1610f7.slice(0, 4), λa6ce0e7589cb));
    λ8d1b41b50099.then(λ87ea7b07c933 => {
      λ761093bb0b9b && λa6ce0e7589cb.aborted && λ87ea7b07c933?.body?.cancel?.().catch(() => {});
    }, () => {});
    const λ6d2c5c520755 = new Promise((λ87ea7b07c933, λf52aca1610f7) => {
      const i = () => λf52aca1610f7(λ8eb33bb8d5cb ? Object.assign(new Error("Relay request timed out"), {
        name: "TimeoutError"
      }) : λa6ce0e7589cb.reason);
      λa6ce0e7589cb.addEventListener("abort", i, {
        once: !0
      }), λ67b2ed9459ce = setTimeout(() => {
        λ8eb33bb8d5cb = !0, λfc9a6c7ac358.abort();
      }, this.requestTimeoutMs), λ8d1b41b50099.finally(() => λa6ce0e7589cb.removeEventListener("abort", i)).catch(() => {});
    });
    try {
      return await Promise.race([ λ8d1b41b50099, λ6d2c5c520755 ]);
    } finally {
      λ761093bb0b9b = !0, clearTimeout(λ67b2ed9459ce);
    }
  }
  async request(...λ87ea7b07c933) {
    if (this.closed) throw new Error("Relay connection closed.");
    this.ready || await this.init();
    const λf52aca1610f7 = this.client;
    try {
      return await this.attempt(λf52aca1610f7, λ87ea7b07c933);
    } catch (λ4c71eae50117) {
      if (λ87ea7b07c933[4]?.aborted || "AbortError" === λ4c71eae50117?.name) throw λ4c71eae50117;
      const λfc9a6c7ac358 = "TimeoutError" === λ4c71eae50117?.name || /timed?\s*out|timeout|ETIMEDOUT|ECONNRESET|network|socket|wisp|hyper.*(?:error|client)|muxtaskended|connection.*(?:closed|reset|lost|failed)|unexpected.*(?:eof|cutoff)|transport.*(?:closed|failed)/i.test(String(λ4c71eae50117?.message || λ4c71eae50117 || ""));
      let λ67b2ed9459ce = !1;
      try {
        λ67b2ed9459ce = await this.recover(λf52aca1610f7, λfc9a6c7ac358, λfc9a6c7ac358);
      } catch {}
      if (λ67b2ed9459ce && /^(GET|HEAD)$/i.test(String(λ87ea7b07c933[1] || "GET")) && !λ87ea7b07c933[4]?.aborted && !this.closed && this.online()) return this.attempt(this.client, λ87ea7b07c933);
      throw λ4c71eae50117;
    }
  }
  connect(...λ87ea7b07c933) {
    const λf52aca1610f7 = this.client, λ4c71eae50117 = λ87ea7b07c933[6];
    λ87ea7b07c933[6] = (...λ87ea7b07c933) => {
      this.recover(λf52aca1610f7).catch(() => {}), λ4c71eae50117?.(...λ87ea7b07c933);
    };
    try {
      return λf52aca1610f7.connect(...λ87ea7b07c933);
    } catch (λ87ea7b07c933) {
      throw this.recover(λf52aca1610f7).catch(() => {}), λ87ea7b07c933;
    }
  }
  async check() {
    if (this.closed || !this.client || !this.online() || !this.visible()) return;
    const λ87ea7b07c933 = this.client, λf52aca1610f7 = this.url, λ4c71eae50117 = await this.probe(λf52aca1610f7);
    this.closed || λ87ea7b07c933 !== this.client || (this.failures = λ4c71eae50117 ? 0 : this.failures + 1, 
    this.failures >= 2 && await this.recover(λ87ea7b07c933, !0).catch(() => {}));
  }
  schedule() {
    !this.closed && this.monitorMs && (this.timer = setTimeout(async () => {
      await this.check(), this.schedule();
    }, this.monitorMs));
  }
  close() {
    this.closed = !0, clearTimeout(this.timer);
    for (const λ87ea7b07c933 of [ this.client, ...this.retired ]) try {
      λ87ea7b07c933?.close?.();
    } catch {}
    this.retired = [];
  }
}

const λf52aca1610f7 = new Map;

export async function rankForBlocker(λ87ea7b07c933, λ4c71eae50117, {fetcher: λfc9a6c7ac358 = fetch, onHint: λ67b2ed9459ce = () => {}} = {}) {
  if (!/^[a-z0-9_-]{1,64}$/.test(λ4c71eae50117 || "")) return λ87ea7b07c933;
  const λ8eb33bb8d5cb = await Promise.all(λ87ea7b07c933.map(async λ87ea7b07c933 => {
    const λ67b2ed9459ce = new URL(λ87ea7b07c933).hostname;
    if ("localhost" === λ67b2ed9459ce || λ67b2ed9459ce.endsWith(".local") || /^[\d.]+$/.test(λ67b2ed9459ce) || λ67b2ed9459ce.includes(":")) return {
      url: λ87ea7b07c933,
      blocked: null
    };
    const λ8eb33bb8d5cb = λ4c71eae50117 + ":" + λ67b2ed9459ce, λ761093bb0b9b = λf52aca1610f7.get(λ8eb33bb8d5cb);
    if (λ761093bb0b9b && λ761093bb0b9b.until > Date.now()) return {
      url: λ87ea7b07c933,
      blocked: λ761093bb0b9b.blocked
    };
    let λa6ce0e7589cb = null;
    const λ8d1b41b50099 = new AbortController, λ6d2c5c520755 = setTimeout(() => λ8d1b41b50099.abort(), 4e3);
    try {
      const λ87ea7b07c933 = await λfc9a6c7ac358("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-checker/check", {
        method: "POST",
        signal: λ8d1b41b50099.signal,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: "https://" + λ67b2ed9459ce + "/",
          vendor: λ4c71eae50117
        })
      });
      if (λ87ea7b07c933.ok) {
        const λf52aca1610f7 = await λ87ea7b07c933.json(), λfc9a6c7ac358 = λf52aca1610f7?.vendors?.[λ4c71eae50117];
        λfc9a6c7ac358?.error || "boolean" != typeof λfc9a6c7ac358?.blocked || (λa6ce0e7589cb = λfc9a6c7ac358.blocked);
      }
    } catch {} finally {
      clearTimeout(λ6d2c5c520755);
    }
    return λf52aca1610f7.set(λ8eb33bb8d5cb, {
      blocked: λa6ce0e7589cb,
      until: Date.now() + (null === λa6ce0e7589cb ? 3e4 : 6e5)
    }), λf52aca1610f7.size > 100 && λf52aca1610f7.delete(λf52aca1610f7.keys().next().value), 
    {
      url: λ87ea7b07c933,
      blocked: λa6ce0e7589cb
    };
  }));
  return λ67b2ed9459ce({
    vendor: λ4c71eae50117,
    results: λ8eb33bb8d5cb
  }), λ8eb33bb8d5cb.sort((λ87ea7b07c933, λf52aca1610f7) => Number(!0 === λ87ea7b07c933.blocked) - Number(!0 === λf52aca1610f7.blocked)).map(λ87ea7b07c933 => λ87ea7b07c933.url);
}
