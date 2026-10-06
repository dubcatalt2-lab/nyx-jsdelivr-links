export function preserveTransferErrors(λ4ba1c94bc278) {
  const λ2dcd049f25c6 = λ4ba1c94bc278.stream_response;
  λ4ba1c94bc278.stream_response = function(λ4ba1c94bc278, λa5e12c673e7c, λ63d22faf69fc, λ8084c4347d74) {
    let λ864cfb291ea8;
    const λ1fa2b355a149 = new Promise(λ4ba1c94bc278 => {
      λ864cfb291ea8 = λ4ba1c94bc278;
    });
    return λ2dcd049f25c6.call(this, λ4ba1c94bc278, λ4ba1c94bc278 => {
      const λ2dcd049f25c6 = λ4ba1c94bc278.getReader();
      λa5e12c673e7c(new ReadableStream({
        async pull(λ4ba1c94bc278) {
          try {
            const λa5e12c673e7c = await λ2dcd049f25c6.read();
            if (!λa5e12c673e7c.done) return void λ4ba1c94bc278.enqueue(λa5e12c673e7c.value);
            const λ63d22faf69fc = await λ1fa2b355a149;
            if (-1 === λ63d22faf69fc || λ8084c4347d74?.aborted) throw λ8084c4347d74?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λ63d22faf69fc) throw new TypeError(`Request failed with error code ${λ63d22faf69fc}: incomplete libcurl transfer`);
            λ4ba1c94bc278.close();
          } catch (λ2dcd049f25c6) {
            λ4ba1c94bc278.error(λ2dcd049f25c6);
          }
        },
        cancel: λ4ba1c94bc278 => λ2dcd049f25c6.cancel(λ4ba1c94bc278)
      }, {
        highWaterMark: 0
      }));
    }, λ4ba1c94bc278 => {
      λ864cfb291ea8(λ4ba1c94bc278), λ63d22faf69fc(λ4ba1c94bc278);
    }, λ8084c4347d74);
  };
}

export const bufferLimit = 33554432;

const sc = λ4ba1c94bc278 => /\berror code (?:18|52|56|92)\b/i.test(String(λ4ba1c94bc278?.message || λ4ba1c94bc278)), _u = λ4ba1c94bc278 => λ4ba1c94bc278.some(([λ4ba1c94bc278, λ2dcd049f25c6]) => "content-type" === λ4ba1c94bc278.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ2dcd049f25c6).split(";")[0].trim()));

async function Xu(λ4ba1c94bc278, λ2dcd049f25c6) {
  const λa5e12c673e7c = λ4ba1c94bc278.getReader(), λ63d22faf69fc = [];
  let λ8084c4347d74 = 0;
  const o = () => {
    λ2dcd049f25c6.bytes -= λ8084c4347d74, λ8084c4347d74 = 0, λ63d22faf69fc.length = 0;
  };
  try {
    for (;;) {
      const λ4ba1c94bc278 = await λa5e12c673e7c.read();
      if (λ4ba1c94bc278.done) {
        const λ4ba1c94bc278 = new Blob(λ63d22faf69fc).stream();
        return o(), λ4ba1c94bc278;
      }
      if (λ8084c4347d74 + λ4ba1c94bc278.value.byteLength > 16777216 || λ2dcd049f25c6.bytes + λ4ba1c94bc278.value.byteLength > 33554432) {
        let λ864cfb291ea8 = λ4ba1c94bc278.value;
        return new ReadableStream({
          async pull(λ4ba1c94bc278) {
            try {
              if (λ63d22faf69fc.length) {
                const λa5e12c673e7c = λ63d22faf69fc.shift();
                return λ8084c4347d74 -= λa5e12c673e7c.byteLength, λ2dcd049f25c6.bytes -= λa5e12c673e7c.byteLength, 
                void λ4ba1c94bc278.enqueue(λa5e12c673e7c);
              }
              if (λ864cfb291ea8) return λ4ba1c94bc278.enqueue(λ864cfb291ea8), void (λ864cfb291ea8 = null);
              const λ1fa2b355a149 = await λa5e12c673e7c.read();
              λ1fa2b355a149.done ? λ4ba1c94bc278.close() : λ4ba1c94bc278.enqueue(λ1fa2b355a149.value);
            } catch (λ2dcd049f25c6) {
              o(), λ4ba1c94bc278.error(λ2dcd049f25c6);
            }
          },
          cancel: λ4ba1c94bc278 => (o(), λ864cfb291ea8 = null, λa5e12c673e7c.cancel(λ4ba1c94bc278))
        }, {
          highWaterMark: 0
        });
      }
      λ63d22faf69fc.push(λ4ba1c94bc278.value), λ8084c4347d74 += λ4ba1c94bc278.value.byteLength, 
      λ2dcd049f25c6.bytes += λ4ba1c94bc278.value.byteLength;
    }
  } catch (λ4ba1c94bc278) {
    throw o(), λa5e12c673e7c.cancel(λ4ba1c94bc278).catch(() => {}), λ4ba1c94bc278;
  }
}

export async function requestWithTransferRetry(λ4ba1c94bc278, {method: λ2dcd049f25c6, body: λa5e12c673e7c, signal: λ63d22faf69fc, budget: λ8084c4347d74}) {
  const λ864cfb291ea8 = /^(?:GET|HEAD)$/i.test(λ2dcd049f25c6 || "GET") && null == λa5e12c673e7c;
  for (let λ2dcd049f25c6 = 0; ;λ2dcd049f25c6++) {
    λ63d22faf69fc?.throwIfAborted();
    try {
      const λ2dcd049f25c6 = await λ4ba1c94bc278();
      return λ864cfb291ea8 && λ2dcd049f25c6.body?.getReader && _u(λ2dcd049f25c6.headers) ? {
        ...λ2dcd049f25c6,
        body: await Xu(λ2dcd049f25c6.body, λ8084c4347d74)
      } : λ2dcd049f25c6;
    } catch (λ4ba1c94bc278) {
      if (!λ864cfb291ea8 || λ2dcd049f25c6 >= 1 || λ63d22faf69fc?.aborted || !sc(λ4ba1c94bc278)) throw λ4ba1c94bc278;
    }
  }
}
