export function preserveTransferErrors(λ0e9fd9c7a36a) {
  const λ49c0b8372456 = λ0e9fd9c7a36a.stream_response;
  λ0e9fd9c7a36a.stream_response = function(λ0e9fd9c7a36a, λ300956c3a036, λ22fa0ce26577, λ94430bd53fe3) {
    let λc48ca2937879;
    const λ4fa310a9df55 = new Promise(λ0e9fd9c7a36a => {
      λc48ca2937879 = λ0e9fd9c7a36a;
    });
    return λ49c0b8372456.call(this, λ0e9fd9c7a36a, λ0e9fd9c7a36a => {
      const λ49c0b8372456 = λ0e9fd9c7a36a.getReader();
      λ300956c3a036(new ReadableStream({
        async pull(λ0e9fd9c7a36a) {
          try {
            const λ300956c3a036 = await λ49c0b8372456.read();
            if (!λ300956c3a036.done) return void λ0e9fd9c7a36a.enqueue(λ300956c3a036.value);
            const λ22fa0ce26577 = await λ4fa310a9df55;
            if (-1 === λ22fa0ce26577 || λ94430bd53fe3?.aborted) throw λ94430bd53fe3?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λ22fa0ce26577) throw new TypeError(`Request failed with error code ${λ22fa0ce26577}: incomplete textlib transfer`);
            λ0e9fd9c7a36a.close();
          } catch (λ49c0b8372456) {
            λ0e9fd9c7a36a.error(λ49c0b8372456);
          }
        },
        cancel: λ0e9fd9c7a36a => λ49c0b8372456.cancel(λ0e9fd9c7a36a)
      }, {
        highWaterMark: 0
      }));
    }, λ0e9fd9c7a36a => {
      λc48ca2937879(λ0e9fd9c7a36a), λ22fa0ce26577(λ0e9fd9c7a36a);
    }, λ94430bd53fe3);
  };
}

export const bufferLimit = 33554432;

const sc = λ0e9fd9c7a36a => /\berror code (?:18|52|56|92)\b/i.test(String(λ0e9fd9c7a36a?.message || λ0e9fd9c7a36a)), _u = λ0e9fd9c7a36a => λ0e9fd9c7a36a.some(([λ0e9fd9c7a36a, λ49c0b8372456]) => "content-type" === λ0e9fd9c7a36a.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ49c0b8372456).split(";")[0].trim()));

async function Xu(λ0e9fd9c7a36a, λ49c0b8372456) {
  const λ300956c3a036 = λ0e9fd9c7a36a.getReader(), λ22fa0ce26577 = [];
  let λ94430bd53fe3 = 0;
  const o = () => {
    λ49c0b8372456.bytes -= λ94430bd53fe3, λ94430bd53fe3 = 0, λ22fa0ce26577.length = 0;
  };
  try {
    for (;;) {
      const λ0e9fd9c7a36a = await λ300956c3a036.read();
      if (λ0e9fd9c7a36a.done) {
        const λ0e9fd9c7a36a = new Blob(λ22fa0ce26577).stream();
        return o(), λ0e9fd9c7a36a;
      }
      if (λ94430bd53fe3 + λ0e9fd9c7a36a.value.byteLength > 16777216 || λ49c0b8372456.bytes + λ0e9fd9c7a36a.value.byteLength > 33554432) {
        let λc48ca2937879 = λ0e9fd9c7a36a.value;
        return new ReadableStream({
          async pull(λ0e9fd9c7a36a) {
            try {
              if (λ22fa0ce26577.length) {
                const λ300956c3a036 = λ22fa0ce26577.shift();
                return λ94430bd53fe3 -= λ300956c3a036.byteLength, λ49c0b8372456.bytes -= λ300956c3a036.byteLength, 
                void λ0e9fd9c7a36a.enqueue(λ300956c3a036);
              }
              if (λc48ca2937879) return λ0e9fd9c7a36a.enqueue(λc48ca2937879), void (λc48ca2937879 = null);
              const λ4fa310a9df55 = await λ300956c3a036.read();
              λ4fa310a9df55.done ? λ0e9fd9c7a36a.close() : λ0e9fd9c7a36a.enqueue(λ4fa310a9df55.value);
            } catch (λ49c0b8372456) {
              o(), λ0e9fd9c7a36a.error(λ49c0b8372456);
            }
          },
          cancel: λ0e9fd9c7a36a => (o(), λc48ca2937879 = null, λ300956c3a036.cancel(λ0e9fd9c7a36a))
        }, {
          highWaterMark: 0
        });
      }
      λ22fa0ce26577.push(λ0e9fd9c7a36a.value), λ94430bd53fe3 += λ0e9fd9c7a36a.value.byteLength, 
      λ49c0b8372456.bytes += λ0e9fd9c7a36a.value.byteLength;
    }
  } catch (λ0e9fd9c7a36a) {
    throw o(), λ300956c3a036.cancel(λ0e9fd9c7a36a).catch(() => {}), λ0e9fd9c7a36a;
  }
}

export async function requestWithTransferRetry(λ0e9fd9c7a36a, {method: λ49c0b8372456, body: λ300956c3a036, signal: λ22fa0ce26577, budget: λ94430bd53fe3}) {
  const λc48ca2937879 = /^(?:GET|HEAD)$/i.test(λ49c0b8372456 || "GET") && null == λ300956c3a036;
  for (let λ49c0b8372456 = 0; ;λ49c0b8372456++) {
    λ22fa0ce26577?.throwIfAborted();
    try {
      const λ49c0b8372456 = await λ0e9fd9c7a36a();
      return λc48ca2937879 && λ49c0b8372456.body?.getReader && _u(λ49c0b8372456.headers) ? {
        ...λ49c0b8372456,
        body: await Xu(λ49c0b8372456.body, λ94430bd53fe3)
      } : λ49c0b8372456;
    } catch (λ0e9fd9c7a36a) {
      if (!λc48ca2937879 || λ49c0b8372456 >= 1 || λ22fa0ce26577?.aborted || !sc(λ0e9fd9c7a36a)) throw λ0e9fd9c7a36a;
    }
  }
}
