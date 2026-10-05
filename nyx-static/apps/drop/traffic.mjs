export function measureTransport(e, t) {
  const n = (e, n = 0) => {
    try {
      t(e, n);
    } catch {}
  }, r = (e, t) => {
    const r = (e => "string" == typeof e ? (new TextEncoder).encode(e).byteLength : e?.byteLength ?? e?.size ?? 0)(t);
    r && n(e, r);
  }, s = e.request.bind(e);
  e.request = async (e, t, a, ...o) => {
    n("start");
    let c = !1;
    const u = () => {
      c || (c = !0, n("end"));
    };
    try {
      let n = a;
      a instanceof ReadableStream ? n = a.pipeThrough(new TransformStream({
        transform(e, t) {
          r("up", e), t.enqueue(e);
        }
      })) : r("up", a);
      const c = await s(e, t, n, ...o);
      if (c.body instanceof ReadableStream) {
        const e = c.body.getReader();
        return {
          ...c,
          body: new ReadableStream({
            async pull(t) {
              try {
                const {value: n, done: s} = await e.read();
                s ? (u(), e.releaseLock(), t.close()) : (r("down", n), t.enqueue(n));
              } catch (n) {
                u(), t.error(n);
              }
            },
            async cancel(t) {
              try {
                await e.cancel(t);
              } finally {
                u(), e.releaseLock();
              }
            }
          })
        };
      }
      return r("down", c.body), u(), c;
    } catch (i) {
      throw u(), i;
    }
  };
  const a = e.connect?.bind(e);
  return a && (e.connect = (e, t, n, s, o, ...c) => {
    const u = a(e, t, n, s, (...e) => {
      r("down", e[0]), o?.(...e);
    }, ...c);
    if (Array.isArray(u) && "function" == typeof u[0]) {
      const e = u[0];
      u[0] = (...t) => (r("up", t[0]), e(...t));
    }
    return u;
  }), e;
}

export function measureFetch(e, t) {
  const n = measureTransport({
    async request(t, n, r, s) {
      const a = await e(t, s);
      return {
        response: a,
        body: a.body
      };
    }
  }, t);
  return async (e, t) => {
    const {response: r, body: s} = await n.request(e, t?.method, t?.body, t);
    return r.body ? new Response(s, {
      status: r.status,
      statusText: r.statusText,
      headers: r.headers
    }) : r;
  };
}

export function trafficMeter({now: e = () => performance.now()} = {}) {
  let t = 0, n = 0, r = 0, s = 0, a = 0, o = 0, c = 0, u = e(), i = u;
  const d = Object.fromEntries([ "traffic", "requests", "data", "processing" ].map(e => [ e, Array(45).fill(0) ])), p = e => {
    o && (c += Math.max(0, e - i)), i = e;
  };
  return {
    add(c, u = 0) {
      if (p(e()), "start" === c) return o++, a++, void s++;
      "end" !== c ? ![ "up", "down" ].includes(c) || !Number.isFinite(u) || u < 0 || ("up" === c ? n += u : t += u, 
      r += u) : o = Math.max(0, o - 1);
    },
    sample() {
      const i = e();
      p(i);
      const f = Math.max(1, i - u), y = f / 1e3, l = 8 * t / y / 1e6, m = 8 * n / y / 1e6, b = l + m, h = Math.min(100, c / f * 100), w = a / y;
      for (const [e, t] of Object.entries({
        traffic: b,
        requests: w,
        data: r,
        processing: h
      })) d[e].push(t), d[e].shift();
      return u = i, t = n = a = c = 0, {
        mbps: b,
        download: l,
        upload: m,
        processing: h,
        rps: w,
        active: o,
        totalBytes: r,
        totalRequests: s,
        samples: [ ...d.traffic ],
        history: Object.fromEntries(Object.entries(d).map(([e, t]) => [ e, [ ...t ] ]))
      };
    }
  };
}
