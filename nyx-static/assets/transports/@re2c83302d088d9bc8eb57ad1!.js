export function preserveTransferErrors(λfc98017035a1) {
  const λb06d15d0c25b = λfc98017035a1.stream_response;
  λfc98017035a1.stream_response = function(λfc98017035a1, λ12421817bb10, λe8549cf1d3c2, λc0bda481e7de) {
    let λ02cdf5273a12;
    const λ69854c1eb608 = new Promise(λfc98017035a1 => {
      λ02cdf5273a12 = λfc98017035a1;
    });
    return λb06d15d0c25b.call(this, λfc98017035a1, λfc98017035a1 => {
      const λb06d15d0c25b = λfc98017035a1.getReader();
      λ12421817bb10(new ReadableStream({
        async pull(λfc98017035a1) {
          try {
            const λ12421817bb10 = await λb06d15d0c25b.read();
            if (!λ12421817bb10.done) return void λfc98017035a1.enqueue(λ12421817bb10.value);
            const λe8549cf1d3c2 = await λ69854c1eb608;
            if (-1 === λe8549cf1d3c2 || λc0bda481e7de?.aborted) throw λc0bda481e7de?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λe8549cf1d3c2) throw new TypeError(`Request failed with error code ${λe8549cf1d3c2}: incomplete textlib transfer`);
            λfc98017035a1.close();
          } catch (λb06d15d0c25b) {
            λfc98017035a1.error(λb06d15d0c25b);
          }
        },
        cancel: λfc98017035a1 => λb06d15d0c25b.cancel(λfc98017035a1)
      }, {
        highWaterMark: 0
      }));
    }, λfc98017035a1 => {
      λ02cdf5273a12(λfc98017035a1), λe8549cf1d3c2(λfc98017035a1);
    }, λc0bda481e7de);
  };
}

export const bufferLimit = 33554432;

const sc = λfc98017035a1 => /\berror code (?:18|52|56|92)\b/i.test(String(λfc98017035a1?.message || λfc98017035a1)), _u = λfc98017035a1 => λfc98017035a1.some(([λfc98017035a1, λb06d15d0c25b]) => "content-type" === λfc98017035a1.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λb06d15d0c25b).split(";")[0].trim()));

async function Xu(λfc98017035a1, λb06d15d0c25b) {
  const λ12421817bb10 = λfc98017035a1.getReader(), λe8549cf1d3c2 = [];
  let λc0bda481e7de = 0;
  const o = () => {
    λb06d15d0c25b.bytes -= λc0bda481e7de, λc0bda481e7de = 0, λe8549cf1d3c2.length = 0;
  };
  try {
    for (;;) {
      const λfc98017035a1 = await λ12421817bb10.read();
      if (λfc98017035a1.done) {
        const λfc98017035a1 = new Blob(λe8549cf1d3c2).stream();
        return o(), λfc98017035a1;
      }
      if (λc0bda481e7de + λfc98017035a1.value.byteLength > 16777216 || λb06d15d0c25b.bytes + λfc98017035a1.value.byteLength > 33554432) {
        let λ02cdf5273a12 = λfc98017035a1.value;
        return new ReadableStream({
          async pull(λfc98017035a1) {
            try {
              if (λe8549cf1d3c2.length) {
                const λ12421817bb10 = λe8549cf1d3c2.shift();
                return λc0bda481e7de -= λ12421817bb10.byteLength, λb06d15d0c25b.bytes -= λ12421817bb10.byteLength, 
                void λfc98017035a1.enqueue(λ12421817bb10);
              }
              if (λ02cdf5273a12) return λfc98017035a1.enqueue(λ02cdf5273a12), void (λ02cdf5273a12 = null);
              const λ69854c1eb608 = await λ12421817bb10.read();
              λ69854c1eb608.done ? λfc98017035a1.close() : λfc98017035a1.enqueue(λ69854c1eb608.value);
            } catch (λb06d15d0c25b) {
              o(), λfc98017035a1.error(λb06d15d0c25b);
            }
          },
          cancel: λfc98017035a1 => (o(), λ02cdf5273a12 = null, λ12421817bb10.cancel(λfc98017035a1))
        }, {
          highWaterMark: 0
        });
      }
      λe8549cf1d3c2.push(λfc98017035a1.value), λc0bda481e7de += λfc98017035a1.value.byteLength, 
      λb06d15d0c25b.bytes += λfc98017035a1.value.byteLength;
    }
  } catch (λfc98017035a1) {
    throw o(), λ12421817bb10.cancel(λfc98017035a1).catch(() => {}), λfc98017035a1;
  }
}

export async function requestWithTransferRetry(λfc98017035a1, {method: λb06d15d0c25b, body: λ12421817bb10, signal: λe8549cf1d3c2, budget: λc0bda481e7de}) {
  const λ02cdf5273a12 = /^(?:GET|HEAD)$/i.test(λb06d15d0c25b || "GET") && null == λ12421817bb10;
  for (let λb06d15d0c25b = 0; ;λb06d15d0c25b++) {
    λe8549cf1d3c2?.throwIfAborted();
    try {
      const λb06d15d0c25b = await λfc98017035a1();
      return λ02cdf5273a12 && λb06d15d0c25b.body?.getReader && _u(λb06d15d0c25b.headers) ? {
        ...λb06d15d0c25b,
        body: await Xu(λb06d15d0c25b.body, λc0bda481e7de)
      } : λb06d15d0c25b;
    } catch (λfc98017035a1) {
      if (!λ02cdf5273a12 || λb06d15d0c25b >= 1 || λe8549cf1d3c2?.aborted || !sc(λfc98017035a1)) throw λfc98017035a1;
    }
  }
}
