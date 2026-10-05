export function preserveTransferErrors(λf72022617571) {
  const λ85f69c21626f = λf72022617571.stream_response;
  λf72022617571.stream_response = function(λf72022617571, λf8b103e71915, λ0660223730ab, λ0aff51514c0e) {
    let λ187652ffe1c3;
    const λda76a5494a4d = new Promise(λf72022617571 => {
      λ187652ffe1c3 = λf72022617571;
    });
    return λ85f69c21626f.call(this, λf72022617571, λf72022617571 => {
      const λ85f69c21626f = λf72022617571.getReader();
      λf8b103e71915(new ReadableStream({
        async pull(λf72022617571) {
          try {
            const λf8b103e71915 = await λ85f69c21626f.read();
            if (!λf8b103e71915.done) return void λf72022617571.enqueue(λf8b103e71915.value);
            const λ0660223730ab = await λda76a5494a4d;
            if (-1 === λ0660223730ab || λ0aff51514c0e?.aborted) throw λ0aff51514c0e?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λ0660223730ab) throw new TypeError(`Request failed with error code ${λ0660223730ab}: incomplete libcurl transfer`);
            λf72022617571.close();
          } catch (λ85f69c21626f) {
            λf72022617571.error(λ85f69c21626f);
          }
        },
        cancel: λf72022617571 => λ85f69c21626f.cancel(λf72022617571)
      }, {
        highWaterMark: 0
      }));
    }, λf72022617571 => {
      λ187652ffe1c3(λf72022617571), λ0660223730ab(λf72022617571);
    }, λ0aff51514c0e);
  };
}

export const bufferLimit = 33554432;

const sc = λf72022617571 => /\berror code (?:18|52|56|92)\b/i.test(String(λf72022617571?.message || λf72022617571)), _u = λf72022617571 => λf72022617571.some(([λf72022617571, λ85f69c21626f]) => "content-type" === λf72022617571.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ85f69c21626f).split(";")[0].trim()));

async function Xu(λf72022617571, λ85f69c21626f) {
  const λf8b103e71915 = λf72022617571.getReader(), λ0660223730ab = [];
  let λ0aff51514c0e = 0;
  const o = () => {
    λ85f69c21626f.bytes -= λ0aff51514c0e, λ0aff51514c0e = 0, λ0660223730ab.length = 0;
  };
  try {
    for (;;) {
      const λf72022617571 = await λf8b103e71915.read();
      if (λf72022617571.done) {
        const λf72022617571 = new Blob(λ0660223730ab).stream();
        return o(), λf72022617571;
      }
      if (λ0aff51514c0e + λf72022617571.value.byteLength > 16777216 || λ85f69c21626f.bytes + λf72022617571.value.byteLength > 33554432) {
        let λ187652ffe1c3 = λf72022617571.value;
        return new ReadableStream({
          async pull(λf72022617571) {
            try {
              if (λ0660223730ab.length) {
                const λf8b103e71915 = λ0660223730ab.shift();
                return λ0aff51514c0e -= λf8b103e71915.byteLength, λ85f69c21626f.bytes -= λf8b103e71915.byteLength, 
                void λf72022617571.enqueue(λf8b103e71915);
              }
              if (λ187652ffe1c3) return λf72022617571.enqueue(λ187652ffe1c3), void (λ187652ffe1c3 = null);
              const λda76a5494a4d = await λf8b103e71915.read();
              λda76a5494a4d.done ? λf72022617571.close() : λf72022617571.enqueue(λda76a5494a4d.value);
            } catch (λ85f69c21626f) {
              o(), λf72022617571.error(λ85f69c21626f);
            }
          },
          cancel: λf72022617571 => (o(), λ187652ffe1c3 = null, λf8b103e71915.cancel(λf72022617571))
        }, {
          highWaterMark: 0
        });
      }
      λ0660223730ab.push(λf72022617571.value), λ0aff51514c0e += λf72022617571.value.byteLength, 
      λ85f69c21626f.bytes += λf72022617571.value.byteLength;
    }
  } catch (λf72022617571) {
    throw o(), λf8b103e71915.cancel(λf72022617571).catch(() => {}), λf72022617571;
  }
}

export async function requestWithTransferRetry(λf72022617571, {method: λ85f69c21626f, body: λf8b103e71915, signal: λ0660223730ab, budget: λ0aff51514c0e}) {
  const λ187652ffe1c3 = /^(?:GET|HEAD)$/i.test(λ85f69c21626f || "GET") && null == λf8b103e71915;
  for (let λ85f69c21626f = 0; ;λ85f69c21626f++) {
    λ0660223730ab?.throwIfAborted();
    try {
      const λ85f69c21626f = await λf72022617571();
      return λ187652ffe1c3 && λ85f69c21626f.body?.getReader && _u(λ85f69c21626f.headers) ? {
        ...λ85f69c21626f,
        body: await Xu(λ85f69c21626f.body, λ0aff51514c0e)
      } : λ85f69c21626f;
    } catch (λf72022617571) {
      if (!λ187652ffe1c3 || λ85f69c21626f >= 1 || λ0660223730ab?.aborted || !sc(λf72022617571)) throw λf72022617571;
    }
  }
}
