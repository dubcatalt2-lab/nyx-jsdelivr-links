export function preserveTransferErrors(λ8c35ae67022d) {
  const λ974152b3fad0 = λ8c35ae67022d.stream_response;
  λ8c35ae67022d.stream_response = function(λ8c35ae67022d, λ2d5a9bad580a, λ72be7d7f9360, λbb884247abbe) {
    let λ36e9b52036e6;
    const λe619226e6990 = new Promise(λ8c35ae67022d => {
      λ36e9b52036e6 = λ8c35ae67022d;
    });
    return λ974152b3fad0.call(this, λ8c35ae67022d, λ8c35ae67022d => {
      const λ974152b3fad0 = λ8c35ae67022d.getReader();
      λ2d5a9bad580a(new ReadableStream({
        async pull(λ8c35ae67022d) {
          try {
            const λ2d5a9bad580a = await λ974152b3fad0.read();
            if (!λ2d5a9bad580a.done) return void λ8c35ae67022d.enqueue(λ2d5a9bad580a.value);
            const λ72be7d7f9360 = await λe619226e6990;
            if (-1 === λ72be7d7f9360 || λbb884247abbe?.aborted) throw λbb884247abbe?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λ72be7d7f9360) throw new TypeError(`Request failed with error code ${λ72be7d7f9360}: incomplete libcurl transfer`);
            λ8c35ae67022d.close();
          } catch (λ974152b3fad0) {
            λ8c35ae67022d.error(λ974152b3fad0);
          }
        },
        cancel: λ8c35ae67022d => λ974152b3fad0.cancel(λ8c35ae67022d)
      }, {
        highWaterMark: 0
      }));
    }, λ8c35ae67022d => {
      λ36e9b52036e6(λ8c35ae67022d), λ72be7d7f9360(λ8c35ae67022d);
    }, λbb884247abbe);
  };
}

export const bufferLimit = 33554432;

const sc = λ8c35ae67022d => /\berror code (?:18|52|56|92)\b/i.test(String(λ8c35ae67022d?.message || λ8c35ae67022d)), _u = λ8c35ae67022d => λ8c35ae67022d.some(([λ8c35ae67022d, λ974152b3fad0]) => "content-type" === λ8c35ae67022d.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ974152b3fad0).split(";")[0].trim()));

async function Xu(λ8c35ae67022d, λ974152b3fad0) {
  const λ2d5a9bad580a = λ8c35ae67022d.getReader(), λ72be7d7f9360 = [];
  let λbb884247abbe = 0;
  const o = () => {
    λ974152b3fad0.bytes -= λbb884247abbe, λbb884247abbe = 0, λ72be7d7f9360.length = 0;
  };
  try {
    for (;;) {
      const λ8c35ae67022d = await λ2d5a9bad580a.read();
      if (λ8c35ae67022d.done) {
        const λ8c35ae67022d = new Blob(λ72be7d7f9360).stream();
        return o(), λ8c35ae67022d;
      }
      if (λbb884247abbe + λ8c35ae67022d.value.byteLength > 16777216 || λ974152b3fad0.bytes + λ8c35ae67022d.value.byteLength > 33554432) {
        let λ36e9b52036e6 = λ8c35ae67022d.value;
        return new ReadableStream({
          async pull(λ8c35ae67022d) {
            try {
              if (λ72be7d7f9360.length) {
                const λ2d5a9bad580a = λ72be7d7f9360.shift();
                return λbb884247abbe -= λ2d5a9bad580a.byteLength, λ974152b3fad0.bytes -= λ2d5a9bad580a.byteLength, 
                void λ8c35ae67022d.enqueue(λ2d5a9bad580a);
              }
              if (λ36e9b52036e6) return λ8c35ae67022d.enqueue(λ36e9b52036e6), void (λ36e9b52036e6 = null);
              const λe619226e6990 = await λ2d5a9bad580a.read();
              λe619226e6990.done ? λ8c35ae67022d.close() : λ8c35ae67022d.enqueue(λe619226e6990.value);
            } catch (λ974152b3fad0) {
              o(), λ8c35ae67022d.error(λ974152b3fad0);
            }
          },
          cancel: λ8c35ae67022d => (o(), λ36e9b52036e6 = null, λ2d5a9bad580a.cancel(λ8c35ae67022d))
        }, {
          highWaterMark: 0
        });
      }
      λ72be7d7f9360.push(λ8c35ae67022d.value), λbb884247abbe += λ8c35ae67022d.value.byteLength, 
      λ974152b3fad0.bytes += λ8c35ae67022d.value.byteLength;
    }
  } catch (λ8c35ae67022d) {
    throw o(), λ2d5a9bad580a.cancel(λ8c35ae67022d).catch(() => {}), λ8c35ae67022d;
  }
}

export async function requestWithTransferRetry(λ8c35ae67022d, {method: λ974152b3fad0, body: λ2d5a9bad580a, signal: λ72be7d7f9360, budget: λbb884247abbe}) {
  const λ36e9b52036e6 = /^(?:GET|HEAD)$/i.test(λ974152b3fad0 || "GET") && null == λ2d5a9bad580a;
  for (let λ974152b3fad0 = 0; ;λ974152b3fad0++) {
    λ72be7d7f9360?.throwIfAborted();
    try {
      const λ974152b3fad0 = await λ8c35ae67022d();
      return λ36e9b52036e6 && λ974152b3fad0.body?.getReader && _u(λ974152b3fad0.headers) ? {
        ...λ974152b3fad0,
        body: await Xu(λ974152b3fad0.body, λbb884247abbe)
      } : λ974152b3fad0;
    } catch (λ8c35ae67022d) {
      if (!λ36e9b52036e6 || λ974152b3fad0 >= 1 || λ72be7d7f9360?.aborted || !sc(λ8c35ae67022d)) throw λ8c35ae67022d;
    }
  }
}
