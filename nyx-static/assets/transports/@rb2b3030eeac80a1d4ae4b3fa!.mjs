export function preserveTransferErrors(λ5f8a518548e5) {
  const λ839dd0c6e5b0 = λ5f8a518548e5.stream_response;
  λ5f8a518548e5.stream_response = function(λ5f8a518548e5, λ163e40d5bd1e, λ6938d6da008e, λ4c2756e020e0) {
    let λ32ecfb3a4df9;
    const λ01d58f4ca1d0 = new Promise(λ5f8a518548e5 => {
      λ32ecfb3a4df9 = λ5f8a518548e5;
    });
    return λ839dd0c6e5b0.call(this, λ5f8a518548e5, λ5f8a518548e5 => {
      const λ839dd0c6e5b0 = λ5f8a518548e5.getReader();
      λ163e40d5bd1e(new ReadableStream({
        async pull(λ5f8a518548e5) {
          try {
            const λ163e40d5bd1e = await λ839dd0c6e5b0.read();
            if (!λ163e40d5bd1e.done) return void λ5f8a518548e5.enqueue(λ163e40d5bd1e.value);
            const λ6938d6da008e = await λ01d58f4ca1d0;
            if (-1 === λ6938d6da008e || λ4c2756e020e0?.aborted) throw λ4c2756e020e0?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λ6938d6da008e) throw new TypeError(`Request failed with error code ${λ6938d6da008e}: incomplete libcurl transfer`);
            λ5f8a518548e5.close();
          } catch (λ839dd0c6e5b0) {
            λ5f8a518548e5.error(λ839dd0c6e5b0);
          }
        },
        cancel: λ5f8a518548e5 => λ839dd0c6e5b0.cancel(λ5f8a518548e5)
      }, {
        highWaterMark: 0
      }));
    }, λ5f8a518548e5 => {
      λ32ecfb3a4df9(λ5f8a518548e5), λ6938d6da008e(λ5f8a518548e5);
    }, λ4c2756e020e0);
  };
}

export const bufferLimit = 33554432;

const sc = λ5f8a518548e5 => /\berror code (?:18|52|56|92)\b/i.test(String(λ5f8a518548e5?.message || λ5f8a518548e5)), _u = λ5f8a518548e5 => λ5f8a518548e5.some(([λ5f8a518548e5, λ839dd0c6e5b0]) => "content-type" === λ5f8a518548e5.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ839dd0c6e5b0).split(";")[0].trim()));

async function Xu(λ5f8a518548e5, λ839dd0c6e5b0) {
  const λ163e40d5bd1e = λ5f8a518548e5.getReader(), λ6938d6da008e = [];
  let λ4c2756e020e0 = 0;
  const o = () => {
    λ839dd0c6e5b0.bytes -= λ4c2756e020e0, λ4c2756e020e0 = 0, λ6938d6da008e.length = 0;
  };
  try {
    for (;;) {
      const λ5f8a518548e5 = await λ163e40d5bd1e.read();
      if (λ5f8a518548e5.done) {
        const λ5f8a518548e5 = new Blob(λ6938d6da008e).stream();
        return o(), λ5f8a518548e5;
      }
      if (λ4c2756e020e0 + λ5f8a518548e5.value.byteLength > 16777216 || λ839dd0c6e5b0.bytes + λ5f8a518548e5.value.byteLength > 33554432) {
        let λ32ecfb3a4df9 = λ5f8a518548e5.value;
        return new ReadableStream({
          async pull(λ5f8a518548e5) {
            try {
              if (λ6938d6da008e.length) {
                const λ163e40d5bd1e = λ6938d6da008e.shift();
                return λ4c2756e020e0 -= λ163e40d5bd1e.byteLength, λ839dd0c6e5b0.bytes -= λ163e40d5bd1e.byteLength, 
                void λ5f8a518548e5.enqueue(λ163e40d5bd1e);
              }
              if (λ32ecfb3a4df9) return λ5f8a518548e5.enqueue(λ32ecfb3a4df9), void (λ32ecfb3a4df9 = null);
              const λ01d58f4ca1d0 = await λ163e40d5bd1e.read();
              λ01d58f4ca1d0.done ? λ5f8a518548e5.close() : λ5f8a518548e5.enqueue(λ01d58f4ca1d0.value);
            } catch (λ839dd0c6e5b0) {
              o(), λ5f8a518548e5.error(λ839dd0c6e5b0);
            }
          },
          cancel: λ5f8a518548e5 => (o(), λ32ecfb3a4df9 = null, λ163e40d5bd1e.cancel(λ5f8a518548e5))
        }, {
          highWaterMark: 0
        });
      }
      λ6938d6da008e.push(λ5f8a518548e5.value), λ4c2756e020e0 += λ5f8a518548e5.value.byteLength, 
      λ839dd0c6e5b0.bytes += λ5f8a518548e5.value.byteLength;
    }
  } catch (λ5f8a518548e5) {
    throw o(), λ163e40d5bd1e.cancel(λ5f8a518548e5).catch(() => {}), λ5f8a518548e5;
  }
}

export async function requestWithTransferRetry(λ5f8a518548e5, {method: λ839dd0c6e5b0, body: λ163e40d5bd1e, signal: λ6938d6da008e, budget: λ4c2756e020e0}) {
  const λ32ecfb3a4df9 = /^(?:GET|HEAD)$/i.test(λ839dd0c6e5b0 || "GET") && null == λ163e40d5bd1e;
  for (let λ839dd0c6e5b0 = 0; ;λ839dd0c6e5b0++) {
    λ6938d6da008e?.throwIfAborted();
    try {
      const λ839dd0c6e5b0 = await λ5f8a518548e5();
      return λ32ecfb3a4df9 && λ839dd0c6e5b0.body?.getReader && _u(λ839dd0c6e5b0.headers) ? {
        ...λ839dd0c6e5b0,
        body: await Xu(λ839dd0c6e5b0.body, λ4c2756e020e0)
      } : λ839dd0c6e5b0;
    } catch (λ5f8a518548e5) {
      if (!λ32ecfb3a4df9 || λ839dd0c6e5b0 >= 1 || λ6938d6da008e?.aborted || !sc(λ5f8a518548e5)) throw λ5f8a518548e5;
    }
  }
}
