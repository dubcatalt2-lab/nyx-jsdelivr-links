export function preserveTransferErrors(λf9458925281a) {
  const λe7022a8ab8dc = λf9458925281a.stream_response;
  λf9458925281a.stream_response = function(λf9458925281a, λ3097aaf97582, λeeef9bfe7db6, λf97fe179e2f9) {
    let λfb87a9329056;
    const λ6b52f21cbf62 = new Promise(λf9458925281a => {
      λfb87a9329056 = λf9458925281a;
    });
    return λe7022a8ab8dc.call(this, λf9458925281a, λf9458925281a => {
      const λe7022a8ab8dc = λf9458925281a.getReader();
      λ3097aaf97582(new ReadableStream({
        async pull(λf9458925281a) {
          try {
            const λ3097aaf97582 = await λe7022a8ab8dc.read();
            if (!λ3097aaf97582.done) return void λf9458925281a.enqueue(λ3097aaf97582.value);
            const λeeef9bfe7db6 = await λ6b52f21cbf62;
            if (-1 === λeeef9bfe7db6 || λf97fe179e2f9?.aborted) throw λf97fe179e2f9?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λeeef9bfe7db6) throw new TypeError(`Request failed with error code ${λeeef9bfe7db6}: incomplete textlib transfer`);
            λf9458925281a.close();
          } catch (λe7022a8ab8dc) {
            λf9458925281a.error(λe7022a8ab8dc);
          }
        },
        cancel: λf9458925281a => λe7022a8ab8dc.cancel(λf9458925281a)
      }, {
        highWaterMark: 0
      }));
    }, λf9458925281a => {
      λfb87a9329056(λf9458925281a), λeeef9bfe7db6(λf9458925281a);
    }, λf97fe179e2f9);
  };
}

export const bufferLimit = 33554432;

const sc = λf9458925281a => /\berror code (?:18|52|56|92)\b/i.test(String(λf9458925281a?.message || λf9458925281a)), _u = λf9458925281a => λf9458925281a.some(([λf9458925281a, λe7022a8ab8dc]) => "content-type" === λf9458925281a.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λe7022a8ab8dc).split(";")[0].trim()));

async function Xu(λf9458925281a, λe7022a8ab8dc) {
  const λ3097aaf97582 = λf9458925281a.getReader(), λeeef9bfe7db6 = [];
  let λf97fe179e2f9 = 0;
  const o = () => {
    λe7022a8ab8dc.bytes -= λf97fe179e2f9, λf97fe179e2f9 = 0, λeeef9bfe7db6.length = 0;
  };
  try {
    for (;;) {
      const λf9458925281a = await λ3097aaf97582.read();
      if (λf9458925281a.done) {
        const λf9458925281a = new Blob(λeeef9bfe7db6).stream();
        return o(), λf9458925281a;
      }
      if (λf97fe179e2f9 + λf9458925281a.value.byteLength > 16777216 || λe7022a8ab8dc.bytes + λf9458925281a.value.byteLength > 33554432) {
        let λfb87a9329056 = λf9458925281a.value;
        return new ReadableStream({
          async pull(λf9458925281a) {
            try {
              if (λeeef9bfe7db6.length) {
                const λ3097aaf97582 = λeeef9bfe7db6.shift();
                return λf97fe179e2f9 -= λ3097aaf97582.byteLength, λe7022a8ab8dc.bytes -= λ3097aaf97582.byteLength, 
                void λf9458925281a.enqueue(λ3097aaf97582);
              }
              if (λfb87a9329056) return λf9458925281a.enqueue(λfb87a9329056), void (λfb87a9329056 = null);
              const λ6b52f21cbf62 = await λ3097aaf97582.read();
              λ6b52f21cbf62.done ? λf9458925281a.close() : λf9458925281a.enqueue(λ6b52f21cbf62.value);
            } catch (λe7022a8ab8dc) {
              o(), λf9458925281a.error(λe7022a8ab8dc);
            }
          },
          cancel: λf9458925281a => (o(), λfb87a9329056 = null, λ3097aaf97582.cancel(λf9458925281a))
        }, {
          highWaterMark: 0
        });
      }
      λeeef9bfe7db6.push(λf9458925281a.value), λf97fe179e2f9 += λf9458925281a.value.byteLength, 
      λe7022a8ab8dc.bytes += λf9458925281a.value.byteLength;
    }
  } catch (λf9458925281a) {
    throw o(), λ3097aaf97582.cancel(λf9458925281a).catch(() => {}), λf9458925281a;
  }
}

export async function requestWithTransferRetry(λf9458925281a, {method: λe7022a8ab8dc, body: λ3097aaf97582, signal: λeeef9bfe7db6, budget: λf97fe179e2f9}) {
  const λfb87a9329056 = /^(?:GET|HEAD)$/i.test(λe7022a8ab8dc || "GET") && null == λ3097aaf97582;
  for (let λe7022a8ab8dc = 0; ;λe7022a8ab8dc++) {
    λeeef9bfe7db6?.throwIfAborted();
    try {
      const λe7022a8ab8dc = await λf9458925281a();
      return λfb87a9329056 && λe7022a8ab8dc.body?.getReader && _u(λe7022a8ab8dc.headers) ? {
        ...λe7022a8ab8dc,
        body: await Xu(λe7022a8ab8dc.body, λf97fe179e2f9)
      } : λe7022a8ab8dc;
    } catch (λf9458925281a) {
      if (!λfb87a9329056 || λe7022a8ab8dc >= 1 || λeeef9bfe7db6?.aborted || !sc(λf9458925281a)) throw λf9458925281a;
    }
  }
}
