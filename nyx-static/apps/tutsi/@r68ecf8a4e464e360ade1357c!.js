import { httpRelayUrl as λ22e7dea3ab3d } from "./@r694ba82e944178de68f9bf8d!.js";

export function normalizeRelay(λ22e7dea3ab3d, λ385fab46a7c4 = globalThis.location?.protocol || "https:") {
  try {
    const λefe04ff62c25 = new URL(λ22e7dea3ab3d);
    return ![ "ws:", "wss:" ].includes(λefe04ff62c25.protocol) || λefe04ff62c25.username || λefe04ff62c25.password || λefe04ff62c25.hash || "https:" === λ385fab46a7c4 && "wss:" !== λefe04ff62c25.protocol ? "" : λefe04ff62c25.href;
  } catch {
    return "";
  }
}

export function relayCandidates(λ22e7dea3ab3d, λ385fab46a7c4 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λefe04ff62c25 = location) {
  const λbea84ca66440 = `${"https:" === λefe04ff62c25.protocol ? "wss:" : "ws:"}//${λefe04ff62c25.host}/resources/live/`, λdc3178b39488 = normalizeRelay(λ22e7dea3ab3d.relay, λefe04ff62c25.protocol) || normalizeRelay(λ385fab46a7c4.wispUrl, λefe04ff62c25.protocol) || λbea84ca66440;
  return !1 === λ22e7dea3ab3d.autoRelay ? [ λdc3178b39488 ] : [ ...new Set([ λdc3178b39488, λbea84ca66440, ...Array.isArray(λ385fab46a7c4.wispUrls) ? λ385fab46a7c4.wispUrls : [], "wss://copium-wisp-9529463.onrender.com/wisp/" ].map(λ22e7dea3ab3d => normalizeRelay(λ22e7dea3ab3d, λefe04ff62c25.protocol)).filter(Boolean)) ].slice(0, 6);
}

export function transportCandidates(λ385fab46a7c4, λefe04ff62c25 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λbea84ca66440 = location) {
  const λdc3178b39488 = λ22e7dea3ab3d(λbea84ca66440), λf3ecbd1c07ab = relayCandidates(λ385fab46a7c4, λefe04ff62c25, λbea84ca66440);
  return !1 === λ385fab46a7c4.httpBridge ? relayCandidates(λ385fab46a7c4.relay === λdc3178b39488 ? {
    ...λ385fab46a7c4,
    relay: ""
  } : λ385fab46a7c4, λefe04ff62c25.wispUrl === λdc3178b39488 ? {
    ...λefe04ff62c25,
    wispUrl: ""
  } : λefe04ff62c25, λbea84ca66440).filter(λ22e7dea3ab3d => λ22e7dea3ab3d !== λdc3178b39488) : λ385fab46a7c4.relay && λ385fab46a7c4.relay !== λdc3178b39488 ? [ ...new Set([ ...λf3ecbd1c07ab, ...!1 === λ385fab46a7c4.autoRelay ? [] : [ λdc3178b39488 ] ]) ] : [ ...new Set([ λdc3178b39488, ...!1 === λ385fab46a7c4.autoRelay ? [] : λf3ecbd1c07ab ]) ];
}

export function probeWisp(λ22e7dea3ab3d, {timeout: λ385fab46a7c4 = 7e3, Socket: λefe04ff62c25 = WebSocket} = {}) {
  return new Promise(λbea84ca66440 => {
    let λdc3178b39488, λf3ecbd1c07ab = !1;
    const n = λ22e7dea3ab3d => {
      if (!λf3ecbd1c07ab) {
        if (λf3ecbd1c07ab = !0, clearTimeout(λde25a62b6c4e), λdc3178b39488) {
          λdc3178b39488.onmessage = λdc3178b39488.onerror = λdc3178b39488.onclose = null;
          try {
            λdc3178b39488.close();
          } catch {}
        }
        λbea84ca66440(λ22e7dea3ab3d);
      }
    }, λde25a62b6c4e = setTimeout(() => n(!1), λ385fab46a7c4);
    try {
      λdc3178b39488 = new λefe04ff62c25(λ22e7dea3ab3d), λdc3178b39488.binaryType = "arraybuffer", 
      λdc3178b39488.onmessage = λ22e7dea3ab3d => {
        if (!(λ22e7dea3ab3d.data instanceof ArrayBuffer)) return;
        const λ385fab46a7c4 = new Uint8Array(λ22e7dea3ab3d.data);
        λ385fab46a7c4.length >= 9 && 3 === λ385fab46a7c4[0] && 0 === new DataView(λ22e7dea3ab3d.data).getUint32(1, !0) && n(!0);
      }, λdc3178b39488.onerror = λdc3178b39488.onclose = () => n(!1);
    } catch {
      n(!1);
    }
  });
}

export class RelayTransport {
  constructor({urls: λ22e7dea3ab3d, createClient: λ385fab46a7c4, probe: λefe04ff62c25 = probeWisp, onStatus: λbea84ca66440 = () => {}, storage: λdc3178b39488 = globalThis.sessionStorage, monitorMs: λf3ecbd1c07ab = 3e4, requestTimeoutMs: λde25a62b6c4e = 2e4, rank: λb943da793640 = async λ22e7dea3ab3d => λ22e7dea3ab3d, online: λ9c53d87a2498 = () => !1 !== globalThis.navigator?.onLine, visible: λac0666f2b538 = () => !globalThis.document?.hidden}) {
    Object.assign(this, {
      urls: λ22e7dea3ab3d,
      createClient: λ385fab46a7c4,
      probe: λefe04ff62c25,
      onStatus: λbea84ca66440,
      storage: λdc3178b39488,
      monitorMs: λf3ecbd1c07ab,
      requestTimeoutMs: λde25a62b6c4e,
      rank: λb943da793640,
      online: λ9c53d87a2498,
      visible: λac0666f2b538
    }), this.ready = !1, this.closed = !1, this.url = "", this.client = null, this.switching = null, 
    this.failures = 0, this.retired = [];
  }
  async init() {
    await this.select(), this.ready = !0, this.schedule();
  }
  async select(λ22e7dea3ab3d = "") {
    if (this.closed) throw new Error("Relay connection closed.");
    if (this.switching) return this.switching;
    if (!this.online()) throw new Error("You are offline. Reconnect to Wi-Fi and try again.");
    let λ385fab46a7c4 = "";
    try {
      λ385fab46a7c4 = this.storage?.getItem("tutsi.workingRelay:" + this.urls.join("|")) || "";
    } catch {}
    const λefe04ff62c25 = [ ...new Set([ this.url, λ385fab46a7c4, ...this.urls ]) ].filter(λ385fab46a7c4 => this.urls.includes(λ385fab46a7c4) && λ385fab46a7c4 !== λ22e7dea3ab3d);
    this.switching = (async () => {
      let λ385fab46a7c4;
      const λbea84ca66440 = await Promise.race([ Promise.resolve().then(() => this.rank(λefe04ff62c25)).catch(() => λefe04ff62c25), new Promise(λ22e7dea3ab3d => {
        λ385fab46a7c4 = setTimeout(() => λ22e7dea3ab3d(λefe04ff62c25), 300);
      }) ]).finally(() => clearTimeout(λ385fab46a7c4));
      for (const λ385fab46a7c4 of λbea84ca66440) {
        if (this.closed) throw new Error("Relay connection closed.");
        if (this.onStatus({
          state: "checking",
          url: λ385fab46a7c4
        }), !await this.probe(λ385fab46a7c4)) continue;
        let λefe04ff62c25;
        try {
          λefe04ff62c25 = await this.createClient(λ385fab46a7c4);
        } catch {
          continue;
        }
        if (this.closed) throw λefe04ff62c25.close?.(), new Error("Relay connection closed.");
        for (this.client && this.retired.push(this.client); this.retired.length > 2; ) try {
          this.retired.shift()?.close?.();
        } catch {}
        this.client = λefe04ff62c25, this.url = λ385fab46a7c4, this.failures = 0;
        try {
          this.storage?.setItem("tutsi.workingRelay:" + this.urls.join("|"), λ385fab46a7c4);
        } catch {}
        return void this.onStatus({
          state: λ22e7dea3ab3d ? "switched" : "connected",
          url: λ385fab46a7c4
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
  async recover(λ22e7dea3ab3d, λ385fab46a7c4 = !1, λefe04ff62c25 = !1) {
    return !(this.closed || !this.online() || this.client === λ22e7dea3ab3d && (this.switching ? (await this.switching, 
    this.client === λ22e7dea3ab3d) : !λ385fab46a7c4 && await this.probe(this.url) || this.client === λ22e7dea3ab3d && (await this.select(λefe04ff62c25 ? "" : this.url), 
    this.client === λ22e7dea3ab3d)));
  }
  async attempt(λ22e7dea3ab3d, λ385fab46a7c4) {
    const λefe04ff62c25 = λ385fab46a7c4[4], λbea84ca66440 = new AbortController;
    if (λefe04ff62c25?.aborted) throw λefe04ff62c25.reason || new DOMException("Cancelled", "AbortError");
    let λdc3178b39488, λf3ecbd1c07ab = !1, λde25a62b6c4e = !1;
    const λb943da793640 = λefe04ff62c25 ? AbortSignal.any([ λefe04ff62c25, λbea84ca66440.signal ]) : λbea84ca66440.signal, λ9c53d87a2498 = Promise.resolve().then(() => λ22e7dea3ab3d.request(...λ385fab46a7c4.slice(0, 4), λb943da793640));
    λ9c53d87a2498.then(λ22e7dea3ab3d => {
      λde25a62b6c4e && λb943da793640.aborted && λ22e7dea3ab3d?.body?.cancel?.().catch(() => {});
    }, () => {});
    const λac0666f2b538 = new Promise((λ22e7dea3ab3d, λ385fab46a7c4) => {
      const i = () => λ385fab46a7c4(λf3ecbd1c07ab ? Object.assign(new Error("Relay request timed out"), {
        name: "TimeoutError"
      }) : λb943da793640.reason);
      λb943da793640.addEventListener("abort", i, {
        once: !0
      }), λdc3178b39488 = setTimeout(() => {
        λf3ecbd1c07ab = !0, λbea84ca66440.abort();
      }, this.requestTimeoutMs), λ9c53d87a2498.finally(() => λb943da793640.removeEventListener("abort", i)).catch(() => {});
    });
    try {
      return await Promise.race([ λ9c53d87a2498, λac0666f2b538 ]);
    } finally {
      λde25a62b6c4e = !0, clearTimeout(λdc3178b39488);
    }
  }
  async request(...λ22e7dea3ab3d) {
    if (this.closed) throw new Error("Relay connection closed.");
    this.ready || await this.init();
    const λ385fab46a7c4 = this.client;
    try {
      return await this.attempt(λ385fab46a7c4, λ22e7dea3ab3d);
    } catch (λefe04ff62c25) {
      if (λ22e7dea3ab3d[4]?.aborted || "AbortError" === λefe04ff62c25?.name) throw λefe04ff62c25;
      const λbea84ca66440 = "TimeoutError" === λefe04ff62c25?.name || /timed?\s*out|timeout|ETIMEDOUT|ECONNRESET|network|socket|wisp|hyper.*(?:error|client)|muxtaskended|connection.*(?:closed|reset|lost|failed)|unexpected.*(?:eof|cutoff)|transport.*(?:closed|failed)/i.test(String(λefe04ff62c25?.message || λefe04ff62c25 || ""));
      let λdc3178b39488 = !1;
      try {
        λdc3178b39488 = await this.recover(λ385fab46a7c4, λbea84ca66440, λbea84ca66440);
      } catch {}
      if (λdc3178b39488 && /^(GET|HEAD)$/i.test(String(λ22e7dea3ab3d[1] || "GET")) && !λ22e7dea3ab3d[4]?.aborted && !this.closed && this.online()) return this.attempt(this.client, λ22e7dea3ab3d);
      throw λefe04ff62c25;
    }
  }
  connect(...λ22e7dea3ab3d) {
    const λ385fab46a7c4 = this.client, λefe04ff62c25 = λ22e7dea3ab3d[6];
    λ22e7dea3ab3d[6] = (...λ22e7dea3ab3d) => {
      this.recover(λ385fab46a7c4).catch(() => {}), λefe04ff62c25?.(...λ22e7dea3ab3d);
    };
    try {
      return λ385fab46a7c4.connect(...λ22e7dea3ab3d);
    } catch (λ22e7dea3ab3d) {
      throw this.recover(λ385fab46a7c4).catch(() => {}), λ22e7dea3ab3d;
    }
  }
  async check() {
    if (this.closed || !this.client || !this.online() || !this.visible()) return;
    const λ22e7dea3ab3d = this.client, λ385fab46a7c4 = this.url, λefe04ff62c25 = await this.probe(λ385fab46a7c4);
    this.closed || λ22e7dea3ab3d !== this.client || (this.failures = λefe04ff62c25 ? 0 : this.failures + 1, 
    this.failures >= 2 && await this.recover(λ22e7dea3ab3d, !0).catch(() => {}));
  }
  schedule() {
    !this.closed && this.monitorMs && (this.timer = setTimeout(async () => {
      await this.check(), this.schedule();
    }, this.monitorMs));
  }
  close() {
    this.closed = !0, clearTimeout(this.timer);
    for (const λ22e7dea3ab3d of [ this.client, ...this.retired ]) try {
      λ22e7dea3ab3d?.close?.();
    } catch {}
    this.retired = [];
  }
}

const λ385fab46a7c4 = new Map;

export async function rankForBlocker(λ22e7dea3ab3d, λefe04ff62c25, {fetcher: λbea84ca66440 = fetch, onHint: λdc3178b39488 = () => {}} = {}) {
  if (!/^[a-z0-9_-]{1,64}$/.test(λefe04ff62c25 || "")) return λ22e7dea3ab3d;
  const λf3ecbd1c07ab = await Promise.all(λ22e7dea3ab3d.map(async λ22e7dea3ab3d => {
    const λdc3178b39488 = new URL(λ22e7dea3ab3d).hostname;
    if ("localhost" === λdc3178b39488 || λdc3178b39488.endsWith(".local") || /^[\d.]+$/.test(λdc3178b39488) || λdc3178b39488.includes(":")) return {
      url: λ22e7dea3ab3d,
      blocked: null
    };
    const λf3ecbd1c07ab = λefe04ff62c25 + ":" + λdc3178b39488, λde25a62b6c4e = λ385fab46a7c4.get(λf3ecbd1c07ab);
    if (λde25a62b6c4e && λde25a62b6c4e.until > Date.now()) return {
      url: λ22e7dea3ab3d,
      blocked: λde25a62b6c4e.blocked
    };
    let λb943da793640 = null;
    const λ9c53d87a2498 = new AbortController, λac0666f2b538 = setTimeout(() => λ9c53d87a2498.abort(), 4e3);
    try {
      const λ22e7dea3ab3d = await λbea84ca66440("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-checker/check", {
        method: "POST",
        signal: λ9c53d87a2498.signal,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: "https://" + λdc3178b39488 + "/",
          vendor: λefe04ff62c25
        })
      });
      if (λ22e7dea3ab3d.ok) {
        const λ385fab46a7c4 = await λ22e7dea3ab3d.json(), λbea84ca66440 = λ385fab46a7c4?.vendors?.[λefe04ff62c25];
        λbea84ca66440?.error || "boolean" != typeof λbea84ca66440?.blocked || (λb943da793640 = λbea84ca66440.blocked);
      }
    } catch {} finally {
      clearTimeout(λac0666f2b538);
    }
    return λ385fab46a7c4.set(λf3ecbd1c07ab, {
      blocked: λb943da793640,
      until: Date.now() + (null === λb943da793640 ? 3e4 : 6e5)
    }), λ385fab46a7c4.size > 100 && λ385fab46a7c4.delete(λ385fab46a7c4.keys().next().value), 
    {
      url: λ22e7dea3ab3d,
      blocked: λb943da793640
    };
  }));
  return λdc3178b39488({
    vendor: λefe04ff62c25,
    results: λf3ecbd1c07ab
  }), λf3ecbd1c07ab.sort((λ22e7dea3ab3d, λ385fab46a7c4) => Number(!0 === λ22e7dea3ab3d.blocked) - Number(!0 === λ385fab46a7c4.blocked)).map(λ22e7dea3ab3d => λ22e7dea3ab3d.url);
}
