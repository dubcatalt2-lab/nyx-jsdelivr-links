export function preserveTransferErrors(λ76861b5452dc) {
  const λdbe2562b3e71 = λ76861b5452dc.stream_response;
  λ76861b5452dc.stream_response = function(λ76861b5452dc, λae340044de49, λ717813266b28, λ49e7c1db3300) {
    let λ2e1ac4a51564;
    const λ2b82264252ae = new Promise(λ76861b5452dc => {
      λ2e1ac4a51564 = λ76861b5452dc;
    });
    return λdbe2562b3e71.call(this, λ76861b5452dc, λ76861b5452dc => {
      const λdbe2562b3e71 = λ76861b5452dc.getReader();
      λae340044de49(new ReadableStream({
        async pull(λ76861b5452dc) {
          try {
            const λae340044de49 = await λdbe2562b3e71.read();
            if (!λae340044de49.done) return void λ76861b5452dc.enqueue(λae340044de49.value);
            const λ717813266b28 = await λ2b82264252ae;
            if (-1 === λ717813266b28 || λ49e7c1db3300?.aborted) throw λ49e7c1db3300?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λ717813266b28) throw new TypeError(`Request failed with error code ${λ717813266b28}: incomplete textlib transfer`);
            λ76861b5452dc.close();
          } catch (λdbe2562b3e71) {
            λ76861b5452dc.error(λdbe2562b3e71);
          }
        },
        cancel: λ76861b5452dc => λdbe2562b3e71.cancel(λ76861b5452dc)
      }, {
        highWaterMark: 0
      }));
    }, λ76861b5452dc => {
      λ2e1ac4a51564(λ76861b5452dc), λ717813266b28(λ76861b5452dc);
    }, λ49e7c1db3300);
  };
}

export const bufferLimit = 33554432;

const sc = λ76861b5452dc => /\berror code (?:18|52|56|92)\b/i.test(String(λ76861b5452dc?.message || λ76861b5452dc)), _u = λ76861b5452dc => λ76861b5452dc.some(([λ76861b5452dc, λdbe2562b3e71]) => "content-type" === λ76861b5452dc.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λdbe2562b3e71).split(";")[0].trim()));

async function Xu(λ76861b5452dc, λdbe2562b3e71) {
  const λae340044de49 = λ76861b5452dc.getReader(), λ717813266b28 = [];
  let λ49e7c1db3300 = 0;
  const o = () => {
    λdbe2562b3e71.bytes -= λ49e7c1db3300, λ49e7c1db3300 = 0, λ717813266b28.length = 0;
  };
  try {
    for (;;) {
      const λ76861b5452dc = await λae340044de49.read();
      if (λ76861b5452dc.done) {
        const λ76861b5452dc = new Blob(λ717813266b28).stream();
        return o(), λ76861b5452dc;
      }
      if (λ49e7c1db3300 + λ76861b5452dc.value.byteLength > 16777216 || λdbe2562b3e71.bytes + λ76861b5452dc.value.byteLength > 33554432) {
        let λ2e1ac4a51564 = λ76861b5452dc.value;
        return new ReadableStream({
          async pull(λ76861b5452dc) {
            try {
              if (λ717813266b28.length) {
                const λae340044de49 = λ717813266b28.shift();
                return λ49e7c1db3300 -= λae340044de49.byteLength, λdbe2562b3e71.bytes -= λae340044de49.byteLength, 
                void λ76861b5452dc.enqueue(λae340044de49);
              }
              if (λ2e1ac4a51564) return λ76861b5452dc.enqueue(λ2e1ac4a51564), void (λ2e1ac4a51564 = null);
              const λ2b82264252ae = await λae340044de49.read();
              λ2b82264252ae.done ? λ76861b5452dc.close() : λ76861b5452dc.enqueue(λ2b82264252ae.value);
            } catch (λdbe2562b3e71) {
              o(), λ76861b5452dc.error(λdbe2562b3e71);
            }
          },
          cancel: λ76861b5452dc => (o(), λ2e1ac4a51564 = null, λae340044de49.cancel(λ76861b5452dc))
        }, {
          highWaterMark: 0
        });
      }
      λ717813266b28.push(λ76861b5452dc.value), λ49e7c1db3300 += λ76861b5452dc.value.byteLength, 
      λdbe2562b3e71.bytes += λ76861b5452dc.value.byteLength;
    }
  } catch (λ76861b5452dc) {
    throw o(), λae340044de49.cancel(λ76861b5452dc).catch(() => {}), λ76861b5452dc;
  }
}

export async function requestWithTransferRetry(λ76861b5452dc, {method: λdbe2562b3e71, body: λae340044de49, signal: λ717813266b28, budget: λ49e7c1db3300}) {
  const λ2e1ac4a51564 = /^(?:GET|HEAD)$/i.test(λdbe2562b3e71 || "GET") && null == λae340044de49;
  for (let λdbe2562b3e71 = 0; ;λdbe2562b3e71++) {
    λ717813266b28?.throwIfAborted();
    try {
      const λdbe2562b3e71 = await λ76861b5452dc();
      return λ2e1ac4a51564 && λdbe2562b3e71.body?.getReader && _u(λdbe2562b3e71.headers) ? {
        ...λdbe2562b3e71,
        body: await Xu(λdbe2562b3e71.body, λ49e7c1db3300)
      } : λdbe2562b3e71;
    } catch (λ76861b5452dc) {
      if (!λ2e1ac4a51564 || λdbe2562b3e71 >= 1 || λ717813266b28?.aborted || !sc(λ76861b5452dc)) throw λ76861b5452dc;
    }
  }
}
