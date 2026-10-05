export function preserveTransferErrors(λ7d7cbfb37969) {
  const λc67db1480946 = λ7d7cbfb37969.stream_response;
  λ7d7cbfb37969.stream_response = function(λ7d7cbfb37969, λ9d990f1338f2, λ9613e59829b0, λ095cbd89a5cf) {
    let λca45c47b01e2;
    const λe27f2e7af8c9 = new Promise(λ7d7cbfb37969 => {
      λca45c47b01e2 = λ7d7cbfb37969;
    });
    return λc67db1480946.call(this, λ7d7cbfb37969, λ7d7cbfb37969 => {
      const λc67db1480946 = λ7d7cbfb37969.getReader();
      λ9d990f1338f2(new ReadableStream({
        async pull(λ7d7cbfb37969) {
          try {
            const λ9d990f1338f2 = await λc67db1480946.read();
            if (!λ9d990f1338f2.done) return void λ7d7cbfb37969.enqueue(λ9d990f1338f2.value);
            const λ9613e59829b0 = await λe27f2e7af8c9;
            if (-1 === λ9613e59829b0 || λ095cbd89a5cf?.aborted) throw λ095cbd89a5cf?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λ9613e59829b0) throw new TypeError(`Request failed with error code ${λ9613e59829b0}: incomplete libcurl transfer`);
            λ7d7cbfb37969.close();
          } catch (λc67db1480946) {
            λ7d7cbfb37969.error(λc67db1480946);
          }
        },
        cancel: λ7d7cbfb37969 => λc67db1480946.cancel(λ7d7cbfb37969)
      }, {
        highWaterMark: 0
      }));
    }, λ7d7cbfb37969 => {
      λca45c47b01e2(λ7d7cbfb37969), λ9613e59829b0(λ7d7cbfb37969);
    }, λ095cbd89a5cf);
  };
}

export const bufferLimit = 33554432;

const sc = λ7d7cbfb37969 => /\berror code (?:18|52|56|92)\b/i.test(String(λ7d7cbfb37969?.message || λ7d7cbfb37969)), _u = λ7d7cbfb37969 => λ7d7cbfb37969.some(([λ7d7cbfb37969, λc67db1480946]) => "content-type" === λ7d7cbfb37969.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λc67db1480946).split(";")[0].trim()));

async function Xu(λ7d7cbfb37969, λc67db1480946) {
  const λ9d990f1338f2 = λ7d7cbfb37969.getReader(), λ9613e59829b0 = [];
  let λ095cbd89a5cf = 0;
  const o = () => {
    λc67db1480946.bytes -= λ095cbd89a5cf, λ095cbd89a5cf = 0, λ9613e59829b0.length = 0;
  };
  try {
    for (;;) {
      const λ7d7cbfb37969 = await λ9d990f1338f2.read();
      if (λ7d7cbfb37969.done) {
        const λ7d7cbfb37969 = new Blob(λ9613e59829b0).stream();
        return o(), λ7d7cbfb37969;
      }
      if (λ095cbd89a5cf + λ7d7cbfb37969.value.byteLength > 16777216 || λc67db1480946.bytes + λ7d7cbfb37969.value.byteLength > 33554432) {
        let λca45c47b01e2 = λ7d7cbfb37969.value;
        return new ReadableStream({
          async pull(λ7d7cbfb37969) {
            try {
              if (λ9613e59829b0.length) {
                const λ9d990f1338f2 = λ9613e59829b0.shift();
                return λ095cbd89a5cf -= λ9d990f1338f2.byteLength, λc67db1480946.bytes -= λ9d990f1338f2.byteLength, 
                void λ7d7cbfb37969.enqueue(λ9d990f1338f2);
              }
              if (λca45c47b01e2) return λ7d7cbfb37969.enqueue(λca45c47b01e2), void (λca45c47b01e2 = null);
              const λe27f2e7af8c9 = await λ9d990f1338f2.read();
              λe27f2e7af8c9.done ? λ7d7cbfb37969.close() : λ7d7cbfb37969.enqueue(λe27f2e7af8c9.value);
            } catch (λc67db1480946) {
              o(), λ7d7cbfb37969.error(λc67db1480946);
            }
          },
          cancel: λ7d7cbfb37969 => (o(), λca45c47b01e2 = null, λ9d990f1338f2.cancel(λ7d7cbfb37969))
        }, {
          highWaterMark: 0
        });
      }
      λ9613e59829b0.push(λ7d7cbfb37969.value), λ095cbd89a5cf += λ7d7cbfb37969.value.byteLength, 
      λc67db1480946.bytes += λ7d7cbfb37969.value.byteLength;
    }
  } catch (λ7d7cbfb37969) {
    throw o(), λ9d990f1338f2.cancel(λ7d7cbfb37969).catch(() => {}), λ7d7cbfb37969;
  }
}

export async function requestWithTransferRetry(λ7d7cbfb37969, {method: λc67db1480946, body: λ9d990f1338f2, signal: λ9613e59829b0, budget: λ095cbd89a5cf}) {
  const λca45c47b01e2 = /^(?:GET|HEAD)$/i.test(λc67db1480946 || "GET") && null == λ9d990f1338f2;
  for (let λc67db1480946 = 0; ;λc67db1480946++) {
    λ9613e59829b0?.throwIfAborted();
    try {
      const λc67db1480946 = await λ7d7cbfb37969();
      return λca45c47b01e2 && λc67db1480946.body?.getReader && _u(λc67db1480946.headers) ? {
        ...λc67db1480946,
        body: await Xu(λc67db1480946.body, λ095cbd89a5cf)
      } : λc67db1480946;
    } catch (λ7d7cbfb37969) {
      if (!λca45c47b01e2 || λc67db1480946 >= 1 || λ9613e59829b0?.aborted || !sc(λ7d7cbfb37969)) throw λ7d7cbfb37969;
    }
  }
}
