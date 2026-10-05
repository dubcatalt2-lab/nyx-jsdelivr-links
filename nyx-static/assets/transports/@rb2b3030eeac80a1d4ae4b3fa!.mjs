export function preserveTransferErrors(λa79bd0033bd7) {
  const λf6233f7f9b06 = λa79bd0033bd7.stream_response;
  λa79bd0033bd7.stream_response = function(λa79bd0033bd7, λd0df29ad1316, λ5a4ed8b109e2, λa3abaa33c50d) {
    let λ9436c5fe83e9;
    const λ320433be79e3 = new Promise(λa79bd0033bd7 => {
      λ9436c5fe83e9 = λa79bd0033bd7;
    });
    return λf6233f7f9b06.call(this, λa79bd0033bd7, λa79bd0033bd7 => {
      const λf6233f7f9b06 = λa79bd0033bd7.getReader();
      λd0df29ad1316(new ReadableStream({
        async pull(λa79bd0033bd7) {
          try {
            const λd0df29ad1316 = await λf6233f7f9b06.read();
            if (!λd0df29ad1316.done) return void λa79bd0033bd7.enqueue(λd0df29ad1316.value);
            const λ5a4ed8b109e2 = await λ320433be79e3;
            if (-1 === λ5a4ed8b109e2 || λa3abaa33c50d?.aborted) throw λa3abaa33c50d?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λ5a4ed8b109e2) throw new TypeError(`Request failed with error code ${λ5a4ed8b109e2}: incomplete libcurl transfer`);
            λa79bd0033bd7.close();
          } catch (λf6233f7f9b06) {
            λa79bd0033bd7.error(λf6233f7f9b06);
          }
        },
        cancel: λa79bd0033bd7 => λf6233f7f9b06.cancel(λa79bd0033bd7)
      }, {
        highWaterMark: 0
      }));
    }, λa79bd0033bd7 => {
      λ9436c5fe83e9(λa79bd0033bd7), λ5a4ed8b109e2(λa79bd0033bd7);
    }, λa3abaa33c50d);
  };
}

export const bufferLimit = 33554432;

const sc = λa79bd0033bd7 => /\berror code (?:18|52|56|92)\b/i.test(String(λa79bd0033bd7?.message || λa79bd0033bd7)), _u = λa79bd0033bd7 => λa79bd0033bd7.some(([λa79bd0033bd7, λf6233f7f9b06]) => "content-type" === λa79bd0033bd7.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λf6233f7f9b06).split(";")[0].trim()));

async function Xu(λa79bd0033bd7, λf6233f7f9b06) {
  const λd0df29ad1316 = λa79bd0033bd7.getReader(), λ5a4ed8b109e2 = [];
  let λa3abaa33c50d = 0;
  const o = () => {
    λf6233f7f9b06.bytes -= λa3abaa33c50d, λa3abaa33c50d = 0, λ5a4ed8b109e2.length = 0;
  };
  try {
    for (;;) {
      const λa79bd0033bd7 = await λd0df29ad1316.read();
      if (λa79bd0033bd7.done) {
        const λa79bd0033bd7 = new Blob(λ5a4ed8b109e2).stream();
        return o(), λa79bd0033bd7;
      }
      if (λa3abaa33c50d + λa79bd0033bd7.value.byteLength > 16777216 || λf6233f7f9b06.bytes + λa79bd0033bd7.value.byteLength > 33554432) {
        let λ9436c5fe83e9 = λa79bd0033bd7.value;
        return new ReadableStream({
          async pull(λa79bd0033bd7) {
            try {
              if (λ5a4ed8b109e2.length) {
                const λd0df29ad1316 = λ5a4ed8b109e2.shift();
                return λa3abaa33c50d -= λd0df29ad1316.byteLength, λf6233f7f9b06.bytes -= λd0df29ad1316.byteLength, 
                void λa79bd0033bd7.enqueue(λd0df29ad1316);
              }
              if (λ9436c5fe83e9) return λa79bd0033bd7.enqueue(λ9436c5fe83e9), void (λ9436c5fe83e9 = null);
              const λ320433be79e3 = await λd0df29ad1316.read();
              λ320433be79e3.done ? λa79bd0033bd7.close() : λa79bd0033bd7.enqueue(λ320433be79e3.value);
            } catch (λf6233f7f9b06) {
              o(), λa79bd0033bd7.error(λf6233f7f9b06);
            }
          },
          cancel: λa79bd0033bd7 => (o(), λ9436c5fe83e9 = null, λd0df29ad1316.cancel(λa79bd0033bd7))
        }, {
          highWaterMark: 0
        });
      }
      λ5a4ed8b109e2.push(λa79bd0033bd7.value), λa3abaa33c50d += λa79bd0033bd7.value.byteLength, 
      λf6233f7f9b06.bytes += λa79bd0033bd7.value.byteLength;
    }
  } catch (λa79bd0033bd7) {
    throw o(), λd0df29ad1316.cancel(λa79bd0033bd7).catch(() => {}), λa79bd0033bd7;
  }
}

export async function requestWithTransferRetry(λa79bd0033bd7, {method: λf6233f7f9b06, body: λd0df29ad1316, signal: λ5a4ed8b109e2, budget: λa3abaa33c50d}) {
  const λ9436c5fe83e9 = /^(?:GET|HEAD)$/i.test(λf6233f7f9b06 || "GET") && null == λd0df29ad1316;
  for (let λf6233f7f9b06 = 0; ;λf6233f7f9b06++) {
    λ5a4ed8b109e2?.throwIfAborted();
    try {
      const λf6233f7f9b06 = await λa79bd0033bd7();
      return λ9436c5fe83e9 && λf6233f7f9b06.body?.getReader && _u(λf6233f7f9b06.headers) ? {
        ...λf6233f7f9b06,
        body: await Xu(λf6233f7f9b06.body, λa3abaa33c50d)
      } : λf6233f7f9b06;
    } catch (λa79bd0033bd7) {
      if (!λ9436c5fe83e9 || λf6233f7f9b06 >= 1 || λ5a4ed8b109e2?.aborted || !sc(λa79bd0033bd7)) throw λa79bd0033bd7;
    }
  }
}
