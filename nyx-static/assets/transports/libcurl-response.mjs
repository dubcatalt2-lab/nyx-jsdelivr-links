export function preserveTransferErrors(λb9413e322828) {
  const λ98763fe875ce = λb9413e322828.stream_response;
  λb9413e322828.stream_response = function(λb9413e322828, λb7d0d507fed9, λda2930058396, λ2a0d9732d584) {
    let λf2f9cdfb436f;
    const λc90feb9b99a7 = new Promise(λb9413e322828 => {
      λf2f9cdfb436f = λb9413e322828;
    });
    return λ98763fe875ce.call(this, λb9413e322828, λb9413e322828 => {
      const λ98763fe875ce = λb9413e322828.getReader();
      λb7d0d507fed9(new ReadableStream({
        async pull(λb9413e322828) {
          try {
            const λb7d0d507fed9 = await λ98763fe875ce.read();
            if (!λb7d0d507fed9.done) return void λb9413e322828.enqueue(λb7d0d507fed9.value);
            const λda2930058396 = await λc90feb9b99a7;
            if (-1 === λda2930058396 || λ2a0d9732d584?.aborted) throw λ2a0d9732d584?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λda2930058396) throw new TypeError(`Request failed with error code ${λda2930058396}: incomplete libcurl transfer`);
            λb9413e322828.close();
          } catch (λ98763fe875ce) {
            λb9413e322828.error(λ98763fe875ce);
          }
        },
        cancel: λb9413e322828 => λ98763fe875ce.cancel(λb9413e322828)
      }, {
        highWaterMark: 0
      }));
    }, λb9413e322828 => {
      λf2f9cdfb436f(λb9413e322828), λda2930058396(λb9413e322828);
    }, λ2a0d9732d584);
  };
}

export const bufferLimit = 33554432;

const sc = λb9413e322828 => /\berror code (?:18|52|56|92)\b/i.test(String(λb9413e322828?.message || λb9413e322828)), _u = λb9413e322828 => λb9413e322828.some(([λb9413e322828, λ98763fe875ce]) => "content-type" === λb9413e322828.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ98763fe875ce).split(";")[0].trim()));

async function Xu(λb9413e322828, λ98763fe875ce) {
  const λb7d0d507fed9 = λb9413e322828.getReader(), λda2930058396 = [];
  let λ2a0d9732d584 = 0;
  const o = () => {
    λ98763fe875ce.bytes -= λ2a0d9732d584, λ2a0d9732d584 = 0, λda2930058396.length = 0;
  };
  try {
    for (;;) {
      const λb9413e322828 = await λb7d0d507fed9.read();
      if (λb9413e322828.done) {
        const λb9413e322828 = new Blob(λda2930058396).stream();
        return o(), λb9413e322828;
      }
      if (λ2a0d9732d584 + λb9413e322828.value.byteLength > 16777216 || λ98763fe875ce.bytes + λb9413e322828.value.byteLength > 33554432) {
        let λf2f9cdfb436f = λb9413e322828.value;
        return new ReadableStream({
          async pull(λb9413e322828) {
            try {
              if (λda2930058396.length) {
                const λb7d0d507fed9 = λda2930058396.shift();
                return λ2a0d9732d584 -= λb7d0d507fed9.byteLength, λ98763fe875ce.bytes -= λb7d0d507fed9.byteLength, 
                void λb9413e322828.enqueue(λb7d0d507fed9);
              }
              if (λf2f9cdfb436f) return λb9413e322828.enqueue(λf2f9cdfb436f), void (λf2f9cdfb436f = null);
              const λc90feb9b99a7 = await λb7d0d507fed9.read();
              λc90feb9b99a7.done ? λb9413e322828.close() : λb9413e322828.enqueue(λc90feb9b99a7.value);
            } catch (λ98763fe875ce) {
              o(), λb9413e322828.error(λ98763fe875ce);
            }
          },
          cancel: λb9413e322828 => (o(), λf2f9cdfb436f = null, λb7d0d507fed9.cancel(λb9413e322828))
        }, {
          highWaterMark: 0
        });
      }
      λda2930058396.push(λb9413e322828.value), λ2a0d9732d584 += λb9413e322828.value.byteLength, 
      λ98763fe875ce.bytes += λb9413e322828.value.byteLength;
    }
  } catch (λb9413e322828) {
    throw o(), λb7d0d507fed9.cancel(λb9413e322828).catch(() => {}), λb9413e322828;
  }
}

export async function requestWithTransferRetry(λb9413e322828, {method: λ98763fe875ce, body: λb7d0d507fed9, signal: λda2930058396, budget: λ2a0d9732d584}) {
  const λf2f9cdfb436f = /^(?:GET|HEAD)$/i.test(λ98763fe875ce || "GET") && null == λb7d0d507fed9;
  for (let λ98763fe875ce = 0; ;λ98763fe875ce++) {
    λda2930058396?.throwIfAborted();
    try {
      const λ98763fe875ce = await λb9413e322828();
      return λf2f9cdfb436f && λ98763fe875ce.body?.getReader && _u(λ98763fe875ce.headers) ? {
        ...λ98763fe875ce,
        body: await Xu(λ98763fe875ce.body, λ2a0d9732d584)
      } : λ98763fe875ce;
    } catch (λb9413e322828) {
      if (!λf2f9cdfb436f || λ98763fe875ce >= 1 || λda2930058396?.aborted || !sc(λb9413e322828)) throw λb9413e322828;
    }
  }
}
