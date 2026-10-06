export function preserveTransferErrors(λ334e77ecac84) {
  const λcef35e3f80ad = λ334e77ecac84.stream_response;
  λ334e77ecac84.stream_response = function(λ334e77ecac84, λd5c9a5184e11, λf6c9cd964c4b, λac5320b36068) {
    let λe01ffe1c8ac2;
    const λ8528d2d6771f = new Promise(λ334e77ecac84 => {
      λe01ffe1c8ac2 = λ334e77ecac84;
    });
    return λcef35e3f80ad.call(this, λ334e77ecac84, λ334e77ecac84 => {
      const λcef35e3f80ad = λ334e77ecac84.getReader();
      λd5c9a5184e11(new ReadableStream({
        async pull(λ334e77ecac84) {
          try {
            const λd5c9a5184e11 = await λcef35e3f80ad.read();
            if (!λd5c9a5184e11.done) return void λ334e77ecac84.enqueue(λd5c9a5184e11.value);
            const λf6c9cd964c4b = await λ8528d2d6771f;
            if (-1 === λf6c9cd964c4b || λac5320b36068?.aborted) throw λac5320b36068?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λf6c9cd964c4b) throw new TypeError(`Request failed with error code ${λf6c9cd964c4b}: incomplete libcurl transfer`);
            λ334e77ecac84.close();
          } catch (λcef35e3f80ad) {
            λ334e77ecac84.error(λcef35e3f80ad);
          }
        },
        cancel: λ334e77ecac84 => λcef35e3f80ad.cancel(λ334e77ecac84)
      }, {
        highWaterMark: 0
      }));
    }, λ334e77ecac84 => {
      λe01ffe1c8ac2(λ334e77ecac84), λf6c9cd964c4b(λ334e77ecac84);
    }, λac5320b36068);
  };
}

export const bufferLimit = 33554432;

const sc = λ334e77ecac84 => /\berror code (?:18|52|56|92)\b/i.test(String(λ334e77ecac84?.message || λ334e77ecac84)), _u = λ334e77ecac84 => λ334e77ecac84.some(([λ334e77ecac84, λcef35e3f80ad]) => "content-type" === λ334e77ecac84.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λcef35e3f80ad).split(";")[0].trim()));

async function Xu(λ334e77ecac84, λcef35e3f80ad) {
  const λd5c9a5184e11 = λ334e77ecac84.getReader(), λf6c9cd964c4b = [];
  let λac5320b36068 = 0;
  const o = () => {
    λcef35e3f80ad.bytes -= λac5320b36068, λac5320b36068 = 0, λf6c9cd964c4b.length = 0;
  };
  try {
    for (;;) {
      const λ334e77ecac84 = await λd5c9a5184e11.read();
      if (λ334e77ecac84.done) {
        const λ334e77ecac84 = new Blob(λf6c9cd964c4b).stream();
        return o(), λ334e77ecac84;
      }
      if (λac5320b36068 + λ334e77ecac84.value.byteLength > 16777216 || λcef35e3f80ad.bytes + λ334e77ecac84.value.byteLength > 33554432) {
        let λe01ffe1c8ac2 = λ334e77ecac84.value;
        return new ReadableStream({
          async pull(λ334e77ecac84) {
            try {
              if (λf6c9cd964c4b.length) {
                const λd5c9a5184e11 = λf6c9cd964c4b.shift();
                return λac5320b36068 -= λd5c9a5184e11.byteLength, λcef35e3f80ad.bytes -= λd5c9a5184e11.byteLength, 
                void λ334e77ecac84.enqueue(λd5c9a5184e11);
              }
              if (λe01ffe1c8ac2) return λ334e77ecac84.enqueue(λe01ffe1c8ac2), void (λe01ffe1c8ac2 = null);
              const λ8528d2d6771f = await λd5c9a5184e11.read();
              λ8528d2d6771f.done ? λ334e77ecac84.close() : λ334e77ecac84.enqueue(λ8528d2d6771f.value);
            } catch (λcef35e3f80ad) {
              o(), λ334e77ecac84.error(λcef35e3f80ad);
            }
          },
          cancel: λ334e77ecac84 => (o(), λe01ffe1c8ac2 = null, λd5c9a5184e11.cancel(λ334e77ecac84))
        }, {
          highWaterMark: 0
        });
      }
      λf6c9cd964c4b.push(λ334e77ecac84.value), λac5320b36068 += λ334e77ecac84.value.byteLength, 
      λcef35e3f80ad.bytes += λ334e77ecac84.value.byteLength;
    }
  } catch (λ334e77ecac84) {
    throw o(), λd5c9a5184e11.cancel(λ334e77ecac84).catch(() => {}), λ334e77ecac84;
  }
}

export async function requestWithTransferRetry(λ334e77ecac84, {method: λcef35e3f80ad, body: λd5c9a5184e11, signal: λf6c9cd964c4b, budget: λac5320b36068}) {
  const λe01ffe1c8ac2 = /^(?:GET|HEAD)$/i.test(λcef35e3f80ad || "GET") && null == λd5c9a5184e11;
  for (let λcef35e3f80ad = 0; ;λcef35e3f80ad++) {
    λf6c9cd964c4b?.throwIfAborted();
    try {
      const λcef35e3f80ad = await λ334e77ecac84();
      return λe01ffe1c8ac2 && λcef35e3f80ad.body?.getReader && _u(λcef35e3f80ad.headers) ? {
        ...λcef35e3f80ad,
        body: await Xu(λcef35e3f80ad.body, λac5320b36068)
      } : λcef35e3f80ad;
    } catch (λ334e77ecac84) {
      if (!λe01ffe1c8ac2 || λcef35e3f80ad >= 1 || λf6c9cd964c4b?.aborted || !sc(λ334e77ecac84)) throw λ334e77ecac84;
    }
  }
}
