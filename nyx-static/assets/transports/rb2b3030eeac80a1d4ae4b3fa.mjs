export function preserveTransferErrors(λ5bd3b7eacd52) {
  const λ63304147927a = λ5bd3b7eacd52.stream_response;
  λ5bd3b7eacd52.stream_response = function(λ5bd3b7eacd52, λc70ea7290c71, λc950a9204d43, λ377ffe67435c) {
    let λa6b1c05d606d;
    const λ3818e6bb59a2 = new Promise(λ5bd3b7eacd52 => {
      λa6b1c05d606d = λ5bd3b7eacd52;
    });
    return λ63304147927a.call(this, λ5bd3b7eacd52, λ5bd3b7eacd52 => {
      const λ63304147927a = λ5bd3b7eacd52.getReader();
      λc70ea7290c71(new ReadableStream({
        async pull(λ5bd3b7eacd52) {
          try {
            const λc70ea7290c71 = await λ63304147927a.read();
            if (!λc70ea7290c71.done) return void λ5bd3b7eacd52.enqueue(λc70ea7290c71.value);
            const λc950a9204d43 = await λ3818e6bb59a2;
            if (-1 === λc950a9204d43 || λ377ffe67435c?.aborted) throw λ377ffe67435c?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λc950a9204d43) throw new TypeError(`Request failed with error code ${λc950a9204d43}: incomplete libcurl transfer`);
            λ5bd3b7eacd52.close();
          } catch (λ63304147927a) {
            λ5bd3b7eacd52.error(λ63304147927a);
          }
        },
        cancel: λ5bd3b7eacd52 => λ63304147927a.cancel(λ5bd3b7eacd52)
      }, {
        highWaterMark: 0
      }));
    }, λ5bd3b7eacd52 => {
      λa6b1c05d606d(λ5bd3b7eacd52), λc950a9204d43(λ5bd3b7eacd52);
    }, λ377ffe67435c);
  };
}

export const bufferLimit = 33554432;

const sc = λ5bd3b7eacd52 => /\berror code (?:18|52|56|92)\b/i.test(String(λ5bd3b7eacd52?.message || λ5bd3b7eacd52)), _u = λ5bd3b7eacd52 => λ5bd3b7eacd52.some(([λ5bd3b7eacd52, λ63304147927a]) => "content-type" === λ5bd3b7eacd52.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ63304147927a).split(";")[0].trim()));

async function Xu(λ5bd3b7eacd52, λ63304147927a) {
  const λc70ea7290c71 = λ5bd3b7eacd52.getReader(), λc950a9204d43 = [];
  let λ377ffe67435c = 0;
  const o = () => {
    λ63304147927a.bytes -= λ377ffe67435c, λ377ffe67435c = 0, λc950a9204d43.length = 0;
  };
  try {
    for (;;) {
      const λ5bd3b7eacd52 = await λc70ea7290c71.read();
      if (λ5bd3b7eacd52.done) {
        const λ5bd3b7eacd52 = new Blob(λc950a9204d43).stream();
        return o(), λ5bd3b7eacd52;
      }
      if (λ377ffe67435c + λ5bd3b7eacd52.value.byteLength > 16777216 || λ63304147927a.bytes + λ5bd3b7eacd52.value.byteLength > 33554432) {
        let λa6b1c05d606d = λ5bd3b7eacd52.value;
        return new ReadableStream({
          async pull(λ5bd3b7eacd52) {
            try {
              if (λc950a9204d43.length) {
                const λc70ea7290c71 = λc950a9204d43.shift();
                return λ377ffe67435c -= λc70ea7290c71.byteLength, λ63304147927a.bytes -= λc70ea7290c71.byteLength, 
                void λ5bd3b7eacd52.enqueue(λc70ea7290c71);
              }
              if (λa6b1c05d606d) return λ5bd3b7eacd52.enqueue(λa6b1c05d606d), void (λa6b1c05d606d = null);
              const λ3818e6bb59a2 = await λc70ea7290c71.read();
              λ3818e6bb59a2.done ? λ5bd3b7eacd52.close() : λ5bd3b7eacd52.enqueue(λ3818e6bb59a2.value);
            } catch (λ63304147927a) {
              o(), λ5bd3b7eacd52.error(λ63304147927a);
            }
          },
          cancel: λ5bd3b7eacd52 => (o(), λa6b1c05d606d = null, λc70ea7290c71.cancel(λ5bd3b7eacd52))
        }, {
          highWaterMark: 0
        });
      }
      λc950a9204d43.push(λ5bd3b7eacd52.value), λ377ffe67435c += λ5bd3b7eacd52.value.byteLength, 
      λ63304147927a.bytes += λ5bd3b7eacd52.value.byteLength;
    }
  } catch (λ5bd3b7eacd52) {
    throw o(), λc70ea7290c71.cancel(λ5bd3b7eacd52).catch(() => {}), λ5bd3b7eacd52;
  }
}

export async function requestWithTransferRetry(λ5bd3b7eacd52, {method: λ63304147927a, body: λc70ea7290c71, signal: λc950a9204d43, budget: λ377ffe67435c}) {
  const λa6b1c05d606d = /^(?:GET|HEAD)$/i.test(λ63304147927a || "GET") && null == λc70ea7290c71;
  for (let λ63304147927a = 0; ;λ63304147927a++) {
    λc950a9204d43?.throwIfAborted();
    try {
      const λ63304147927a = await λ5bd3b7eacd52();
      return λa6b1c05d606d && λ63304147927a.body?.getReader && _u(λ63304147927a.headers) ? {
        ...λ63304147927a,
        body: await Xu(λ63304147927a.body, λ377ffe67435c)
      } : λ63304147927a;
    } catch (λ5bd3b7eacd52) {
      if (!λa6b1c05d606d || λ63304147927a >= 1 || λc950a9204d43?.aborted || !sc(λ5bd3b7eacd52)) throw λ5bd3b7eacd52;
    }
  }
}
