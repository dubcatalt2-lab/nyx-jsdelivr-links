export function preserveTransferErrors(λ2decf7618e19) {
  const λ27e6bb030f08 = λ2decf7618e19.stream_response;
  λ2decf7618e19.stream_response = function(λ2decf7618e19, λ45cc2cf40377, λ4b20d38986e7, λ88ad9e56e359) {
    let λf38918743303;
    const λe5e2ca933401 = new Promise(λ2decf7618e19 => {
      λf38918743303 = λ2decf7618e19;
    });
    return λ27e6bb030f08.call(this, λ2decf7618e19, λ2decf7618e19 => {
      const λ27e6bb030f08 = λ2decf7618e19.getReader();
      λ45cc2cf40377(new ReadableStream({
        async pull(λ2decf7618e19) {
          try {
            const λ45cc2cf40377 = await λ27e6bb030f08.read();
            if (!λ45cc2cf40377.done) return void λ2decf7618e19.enqueue(λ45cc2cf40377.value);
            const λ4b20d38986e7 = await λe5e2ca933401;
            if (-1 === λ4b20d38986e7 || λ88ad9e56e359?.aborted) throw λ88ad9e56e359?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λ4b20d38986e7) throw new TypeError(`Request failed with error code ${λ4b20d38986e7}: incomplete libcurl transfer`);
            λ2decf7618e19.close();
          } catch (λ27e6bb030f08) {
            λ2decf7618e19.error(λ27e6bb030f08);
          }
        },
        cancel: λ2decf7618e19 => λ27e6bb030f08.cancel(λ2decf7618e19)
      }, {
        highWaterMark: 0
      }));
    }, λ2decf7618e19 => {
      λf38918743303(λ2decf7618e19), λ4b20d38986e7(λ2decf7618e19);
    }, λ88ad9e56e359);
  };
}

export const bufferLimit = 33554432;

const sc = λ2decf7618e19 => /\berror code (?:18|52|56|92)\b/i.test(String(λ2decf7618e19?.message || λ2decf7618e19)), _u = λ2decf7618e19 => λ2decf7618e19.some(([λ2decf7618e19, λ27e6bb030f08]) => "content-type" === λ2decf7618e19.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ27e6bb030f08).split(";")[0].trim()));

async function Xu(λ2decf7618e19, λ27e6bb030f08) {
  const λ45cc2cf40377 = λ2decf7618e19.getReader(), λ4b20d38986e7 = [];
  let λ88ad9e56e359 = 0;
  const o = () => {
    λ27e6bb030f08.bytes -= λ88ad9e56e359, λ88ad9e56e359 = 0, λ4b20d38986e7.length = 0;
  };
  try {
    for (;;) {
      const λ2decf7618e19 = await λ45cc2cf40377.read();
      if (λ2decf7618e19.done) {
        const λ2decf7618e19 = new Blob(λ4b20d38986e7).stream();
        return o(), λ2decf7618e19;
      }
      if (λ88ad9e56e359 + λ2decf7618e19.value.byteLength > 16777216 || λ27e6bb030f08.bytes + λ2decf7618e19.value.byteLength > 33554432) {
        let λf38918743303 = λ2decf7618e19.value;
        return new ReadableStream({
          async pull(λ2decf7618e19) {
            try {
              if (λ4b20d38986e7.length) {
                const λ45cc2cf40377 = λ4b20d38986e7.shift();
                return λ88ad9e56e359 -= λ45cc2cf40377.byteLength, λ27e6bb030f08.bytes -= λ45cc2cf40377.byteLength, 
                void λ2decf7618e19.enqueue(λ45cc2cf40377);
              }
              if (λf38918743303) return λ2decf7618e19.enqueue(λf38918743303), void (λf38918743303 = null);
              const λe5e2ca933401 = await λ45cc2cf40377.read();
              λe5e2ca933401.done ? λ2decf7618e19.close() : λ2decf7618e19.enqueue(λe5e2ca933401.value);
            } catch (λ27e6bb030f08) {
              o(), λ2decf7618e19.error(λ27e6bb030f08);
            }
          },
          cancel: λ2decf7618e19 => (o(), λf38918743303 = null, λ45cc2cf40377.cancel(λ2decf7618e19))
        }, {
          highWaterMark: 0
        });
      }
      λ4b20d38986e7.push(λ2decf7618e19.value), λ88ad9e56e359 += λ2decf7618e19.value.byteLength, 
      λ27e6bb030f08.bytes += λ2decf7618e19.value.byteLength;
    }
  } catch (λ2decf7618e19) {
    throw o(), λ45cc2cf40377.cancel(λ2decf7618e19).catch(() => {}), λ2decf7618e19;
  }
}

export async function requestWithTransferRetry(λ2decf7618e19, {method: λ27e6bb030f08, body: λ45cc2cf40377, signal: λ4b20d38986e7, budget: λ88ad9e56e359}) {
  const λf38918743303 = /^(?:GET|HEAD)$/i.test(λ27e6bb030f08 || "GET") && null == λ45cc2cf40377;
  for (let λ27e6bb030f08 = 0; ;λ27e6bb030f08++) {
    λ4b20d38986e7?.throwIfAborted();
    try {
      const λ27e6bb030f08 = await λ2decf7618e19();
      return λf38918743303 && λ27e6bb030f08.body?.getReader && _u(λ27e6bb030f08.headers) ? {
        ...λ27e6bb030f08,
        body: await Xu(λ27e6bb030f08.body, λ88ad9e56e359)
      } : λ27e6bb030f08;
    } catch (λ2decf7618e19) {
      if (!λf38918743303 || λ27e6bb030f08 >= 1 || λ4b20d38986e7?.aborted || !sc(λ2decf7618e19)) throw λ2decf7618e19;
    }
  }
}
