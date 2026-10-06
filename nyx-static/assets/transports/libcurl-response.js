export function preserveTransferErrors(λ1a1fd4b2cbae) {
  const λ5c67a6487691 = λ1a1fd4b2cbae.stream_response;
  λ1a1fd4b2cbae.stream_response = function(λ1a1fd4b2cbae, λac25da9e3642, λcd818e483c66, λae6a67a6e08e) {
    let λce501720951b;
    const λbcc06fbe2fb2 = new Promise(λ1a1fd4b2cbae => {
      λce501720951b = λ1a1fd4b2cbae;
    });
    return λ5c67a6487691.call(this, λ1a1fd4b2cbae, λ1a1fd4b2cbae => {
      const λ5c67a6487691 = λ1a1fd4b2cbae.getReader();
      λac25da9e3642(new ReadableStream({
        async pull(λ1a1fd4b2cbae) {
          try {
            const λac25da9e3642 = await λ5c67a6487691.read();
            if (!λac25da9e3642.done) return void λ1a1fd4b2cbae.enqueue(λac25da9e3642.value);
            const λcd818e483c66 = await λbcc06fbe2fb2;
            if (-1 === λcd818e483c66 || λae6a67a6e08e?.aborted) throw λae6a67a6e08e?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λcd818e483c66) throw new TypeError(`Request failed with error code ${λcd818e483c66}: incomplete libcurl transfer`);
            λ1a1fd4b2cbae.close();
          } catch (λ5c67a6487691) {
            λ1a1fd4b2cbae.error(λ5c67a6487691);
          }
        },
        cancel: λ1a1fd4b2cbae => λ5c67a6487691.cancel(λ1a1fd4b2cbae)
      }, {
        highWaterMark: 0
      }));
    }, λ1a1fd4b2cbae => {
      λce501720951b(λ1a1fd4b2cbae), λcd818e483c66(λ1a1fd4b2cbae);
    }, λae6a67a6e08e);
  };
}

export const bufferLimit = 33554432;

const sc = λ1a1fd4b2cbae => /\berror code (?:18|52|56|92)\b/i.test(String(λ1a1fd4b2cbae?.message || λ1a1fd4b2cbae)), _u = λ1a1fd4b2cbae => λ1a1fd4b2cbae.some(([λ1a1fd4b2cbae, λ5c67a6487691]) => "content-type" === λ1a1fd4b2cbae.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ5c67a6487691).split(";")[0].trim()));

async function Xu(λ1a1fd4b2cbae, λ5c67a6487691) {
  const λac25da9e3642 = λ1a1fd4b2cbae.getReader(), λcd818e483c66 = [];
  let λae6a67a6e08e = 0;
  const o = () => {
    λ5c67a6487691.bytes -= λae6a67a6e08e, λae6a67a6e08e = 0, λcd818e483c66.length = 0;
  };
  try {
    for (;;) {
      const λ1a1fd4b2cbae = await λac25da9e3642.read();
      if (λ1a1fd4b2cbae.done) {
        const λ1a1fd4b2cbae = new Blob(λcd818e483c66).stream();
        return o(), λ1a1fd4b2cbae;
      }
      if (λae6a67a6e08e + λ1a1fd4b2cbae.value.byteLength > 16777216 || λ5c67a6487691.bytes + λ1a1fd4b2cbae.value.byteLength > 33554432) {
        let λce501720951b = λ1a1fd4b2cbae.value;
        return new ReadableStream({
          async pull(λ1a1fd4b2cbae) {
            try {
              if (λcd818e483c66.length) {
                const λac25da9e3642 = λcd818e483c66.shift();
                return λae6a67a6e08e -= λac25da9e3642.byteLength, λ5c67a6487691.bytes -= λac25da9e3642.byteLength, 
                void λ1a1fd4b2cbae.enqueue(λac25da9e3642);
              }
              if (λce501720951b) return λ1a1fd4b2cbae.enqueue(λce501720951b), void (λce501720951b = null);
              const λbcc06fbe2fb2 = await λac25da9e3642.read();
              λbcc06fbe2fb2.done ? λ1a1fd4b2cbae.close() : λ1a1fd4b2cbae.enqueue(λbcc06fbe2fb2.value);
            } catch (λ5c67a6487691) {
              o(), λ1a1fd4b2cbae.error(λ5c67a6487691);
            }
          },
          cancel: λ1a1fd4b2cbae => (o(), λce501720951b = null, λac25da9e3642.cancel(λ1a1fd4b2cbae))
        }, {
          highWaterMark: 0
        });
      }
      λcd818e483c66.push(λ1a1fd4b2cbae.value), λae6a67a6e08e += λ1a1fd4b2cbae.value.byteLength, 
      λ5c67a6487691.bytes += λ1a1fd4b2cbae.value.byteLength;
    }
  } catch (λ1a1fd4b2cbae) {
    throw o(), λac25da9e3642.cancel(λ1a1fd4b2cbae).catch(() => {}), λ1a1fd4b2cbae;
  }
}

export async function requestWithTransferRetry(λ1a1fd4b2cbae, {method: λ5c67a6487691, body: λac25da9e3642, signal: λcd818e483c66, budget: λae6a67a6e08e}) {
  const λce501720951b = /^(?:GET|HEAD)$/i.test(λ5c67a6487691 || "GET") && null == λac25da9e3642;
  for (let λ5c67a6487691 = 0; ;λ5c67a6487691++) {
    λcd818e483c66?.throwIfAborted();
    try {
      const λ5c67a6487691 = await λ1a1fd4b2cbae();
      return λce501720951b && λ5c67a6487691.body?.getReader && _u(λ5c67a6487691.headers) ? {
        ...λ5c67a6487691,
        body: await Xu(λ5c67a6487691.body, λae6a67a6e08e)
      } : λ5c67a6487691;
    } catch (λ1a1fd4b2cbae) {
      if (!λce501720951b || λ5c67a6487691 >= 1 || λcd818e483c66?.aborted || !sc(λ1a1fd4b2cbae)) throw λ1a1fd4b2cbae;
    }
  }
}
