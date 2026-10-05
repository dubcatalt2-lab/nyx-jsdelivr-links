export function preserveTransferErrors(λc8de34ce5839) {
  const λ1a4ba678c8e2 = λc8de34ce5839.stream_response;
  λc8de34ce5839.stream_response = function(λc8de34ce5839, λbc17453b5bf5, λfb242dcec252, λ4e10edfb20a2) {
    let λ78e97e688b36;
    const λce7beb0bc97b = new Promise(λc8de34ce5839 => {
      λ78e97e688b36 = λc8de34ce5839;
    });
    return λ1a4ba678c8e2.call(this, λc8de34ce5839, λc8de34ce5839 => {
      const λ1a4ba678c8e2 = λc8de34ce5839.getReader();
      λbc17453b5bf5(new ReadableStream({
        async pull(λc8de34ce5839) {
          try {
            const λbc17453b5bf5 = await λ1a4ba678c8e2.read();
            if (!λbc17453b5bf5.done) return void λc8de34ce5839.enqueue(λbc17453b5bf5.value);
            const λfb242dcec252 = await λce7beb0bc97b;
            if (-1 === λfb242dcec252 || λ4e10edfb20a2?.aborted) throw λ4e10edfb20a2?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λfb242dcec252) throw new TypeError(`Request failed with error code ${λfb242dcec252}: incomplete textlib transfer`);
            λc8de34ce5839.close();
          } catch (λ1a4ba678c8e2) {
            λc8de34ce5839.error(λ1a4ba678c8e2);
          }
        },
        cancel: λc8de34ce5839 => λ1a4ba678c8e2.cancel(λc8de34ce5839)
      }, {
        highWaterMark: 0
      }));
    }, λc8de34ce5839 => {
      λ78e97e688b36(λc8de34ce5839), λfb242dcec252(λc8de34ce5839);
    }, λ4e10edfb20a2);
  };
}

export const bufferLimit = 33554432;

const sc = λc8de34ce5839 => /\berror code (?:18|52|56|92)\b/i.test(String(λc8de34ce5839?.message || λc8de34ce5839)), _u = λc8de34ce5839 => λc8de34ce5839.some(([λc8de34ce5839, λ1a4ba678c8e2]) => "content-type" === λc8de34ce5839.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ1a4ba678c8e2).split(";")[0].trim()));

async function Xu(λc8de34ce5839, λ1a4ba678c8e2) {
  const λbc17453b5bf5 = λc8de34ce5839.getReader(), λfb242dcec252 = [];
  let λ4e10edfb20a2 = 0;
  const o = () => {
    λ1a4ba678c8e2.bytes -= λ4e10edfb20a2, λ4e10edfb20a2 = 0, λfb242dcec252.length = 0;
  };
  try {
    for (;;) {
      const λc8de34ce5839 = await λbc17453b5bf5.read();
      if (λc8de34ce5839.done) {
        const λc8de34ce5839 = new Blob(λfb242dcec252).stream();
        return o(), λc8de34ce5839;
      }
      if (λ4e10edfb20a2 + λc8de34ce5839.value.byteLength > 16777216 || λ1a4ba678c8e2.bytes + λc8de34ce5839.value.byteLength > 33554432) {
        let λ78e97e688b36 = λc8de34ce5839.value;
        return new ReadableStream({
          async pull(λc8de34ce5839) {
            try {
              if (λfb242dcec252.length) {
                const λbc17453b5bf5 = λfb242dcec252.shift();
                return λ4e10edfb20a2 -= λbc17453b5bf5.byteLength, λ1a4ba678c8e2.bytes -= λbc17453b5bf5.byteLength, 
                void λc8de34ce5839.enqueue(λbc17453b5bf5);
              }
              if (λ78e97e688b36) return λc8de34ce5839.enqueue(λ78e97e688b36), void (λ78e97e688b36 = null);
              const λce7beb0bc97b = await λbc17453b5bf5.read();
              λce7beb0bc97b.done ? λc8de34ce5839.close() : λc8de34ce5839.enqueue(λce7beb0bc97b.value);
            } catch (λ1a4ba678c8e2) {
              o(), λc8de34ce5839.error(λ1a4ba678c8e2);
            }
          },
          cancel: λc8de34ce5839 => (o(), λ78e97e688b36 = null, λbc17453b5bf5.cancel(λc8de34ce5839))
        }, {
          highWaterMark: 0
        });
      }
      λfb242dcec252.push(λc8de34ce5839.value), λ4e10edfb20a2 += λc8de34ce5839.value.byteLength, 
      λ1a4ba678c8e2.bytes += λc8de34ce5839.value.byteLength;
    }
  } catch (λc8de34ce5839) {
    throw o(), λbc17453b5bf5.cancel(λc8de34ce5839).catch(() => {}), λc8de34ce5839;
  }
}

export async function requestWithTransferRetry(λc8de34ce5839, {method: λ1a4ba678c8e2, body: λbc17453b5bf5, signal: λfb242dcec252, budget: λ4e10edfb20a2}) {
  const λ78e97e688b36 = /^(?:GET|HEAD)$/i.test(λ1a4ba678c8e2 || "GET") && null == λbc17453b5bf5;
  for (let λ1a4ba678c8e2 = 0; ;λ1a4ba678c8e2++) {
    λfb242dcec252?.throwIfAborted();
    try {
      const λ1a4ba678c8e2 = await λc8de34ce5839();
      return λ78e97e688b36 && λ1a4ba678c8e2.body?.getReader && _u(λ1a4ba678c8e2.headers) ? {
        ...λ1a4ba678c8e2,
        body: await Xu(λ1a4ba678c8e2.body, λ4e10edfb20a2)
      } : λ1a4ba678c8e2;
    } catch (λc8de34ce5839) {
      if (!λ78e97e688b36 || λ1a4ba678c8e2 >= 1 || λfb242dcec252?.aborted || !sc(λc8de34ce5839)) throw λc8de34ce5839;
    }
  }
}
