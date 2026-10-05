export function preserveTransferErrors(λ1a27f811e232) {
  const λ709cf96e2a8d = λ1a27f811e232.stream_response;
  λ1a27f811e232.stream_response = function(λ1a27f811e232, λc728f01f0336, λ11e8b8b716a2, λd1bb81abb03d) {
    let λ188d9ea6a344;
    const λd641bf08ac58 = new Promise(λ1a27f811e232 => {
      λ188d9ea6a344 = λ1a27f811e232;
    });
    return λ709cf96e2a8d.call(this, λ1a27f811e232, λ1a27f811e232 => {
      const λ709cf96e2a8d = λ1a27f811e232.getReader();
      λc728f01f0336(new ReadableStream({
        async pull(λ1a27f811e232) {
          try {
            const λc728f01f0336 = await λ709cf96e2a8d.read();
            if (!λc728f01f0336.done) return void λ1a27f811e232.enqueue(λc728f01f0336.value);
            const λ11e8b8b716a2 = await λd641bf08ac58;
            if (-1 === λ11e8b8b716a2 || λd1bb81abb03d?.aborted) throw λd1bb81abb03d?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λ11e8b8b716a2) throw new TypeError(`Request failed with error code ${λ11e8b8b716a2}: incomplete libcurl transfer`);
            λ1a27f811e232.close();
          } catch (λ709cf96e2a8d) {
            λ1a27f811e232.error(λ709cf96e2a8d);
          }
        },
        cancel: λ1a27f811e232 => λ709cf96e2a8d.cancel(λ1a27f811e232)
      }, {
        highWaterMark: 0
      }));
    }, λ1a27f811e232 => {
      λ188d9ea6a344(λ1a27f811e232), λ11e8b8b716a2(λ1a27f811e232);
    }, λd1bb81abb03d);
  };
}

export const bufferLimit = 33554432;

const sc = λ1a27f811e232 => /\berror code (?:18|52|56|92)\b/i.test(String(λ1a27f811e232?.message || λ1a27f811e232)), _u = λ1a27f811e232 => λ1a27f811e232.some(([λ1a27f811e232, λ709cf96e2a8d]) => "content-type" === λ1a27f811e232.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ709cf96e2a8d).split(";")[0].trim()));

async function Xu(λ1a27f811e232, λ709cf96e2a8d) {
  const λc728f01f0336 = λ1a27f811e232.getReader(), λ11e8b8b716a2 = [];
  let λd1bb81abb03d = 0;
  const o = () => {
    λ709cf96e2a8d.bytes -= λd1bb81abb03d, λd1bb81abb03d = 0, λ11e8b8b716a2.length = 0;
  };
  try {
    for (;;) {
      const λ1a27f811e232 = await λc728f01f0336.read();
      if (λ1a27f811e232.done) {
        const λ1a27f811e232 = new Blob(λ11e8b8b716a2).stream();
        return o(), λ1a27f811e232;
      }
      if (λd1bb81abb03d + λ1a27f811e232.value.byteLength > 16777216 || λ709cf96e2a8d.bytes + λ1a27f811e232.value.byteLength > 33554432) {
        let λ188d9ea6a344 = λ1a27f811e232.value;
        return new ReadableStream({
          async pull(λ1a27f811e232) {
            try {
              if (λ11e8b8b716a2.length) {
                const λc728f01f0336 = λ11e8b8b716a2.shift();
                return λd1bb81abb03d -= λc728f01f0336.byteLength, λ709cf96e2a8d.bytes -= λc728f01f0336.byteLength, 
                void λ1a27f811e232.enqueue(λc728f01f0336);
              }
              if (λ188d9ea6a344) return λ1a27f811e232.enqueue(λ188d9ea6a344), void (λ188d9ea6a344 = null);
              const λd641bf08ac58 = await λc728f01f0336.read();
              λd641bf08ac58.done ? λ1a27f811e232.close() : λ1a27f811e232.enqueue(λd641bf08ac58.value);
            } catch (λ709cf96e2a8d) {
              o(), λ1a27f811e232.error(λ709cf96e2a8d);
            }
          },
          cancel: λ1a27f811e232 => (o(), λ188d9ea6a344 = null, λc728f01f0336.cancel(λ1a27f811e232))
        }, {
          highWaterMark: 0
        });
      }
      λ11e8b8b716a2.push(λ1a27f811e232.value), λd1bb81abb03d += λ1a27f811e232.value.byteLength, 
      λ709cf96e2a8d.bytes += λ1a27f811e232.value.byteLength;
    }
  } catch (λ1a27f811e232) {
    throw o(), λc728f01f0336.cancel(λ1a27f811e232).catch(() => {}), λ1a27f811e232;
  }
}

export async function requestWithTransferRetry(λ1a27f811e232, {method: λ709cf96e2a8d, body: λc728f01f0336, signal: λ11e8b8b716a2, budget: λd1bb81abb03d}) {
  const λ188d9ea6a344 = /^(?:GET|HEAD)$/i.test(λ709cf96e2a8d || "GET") && null == λc728f01f0336;
  for (let λ709cf96e2a8d = 0; ;λ709cf96e2a8d++) {
    λ11e8b8b716a2?.throwIfAborted();
    try {
      const λ709cf96e2a8d = await λ1a27f811e232();
      return λ188d9ea6a344 && λ709cf96e2a8d.body?.getReader && _u(λ709cf96e2a8d.headers) ? {
        ...λ709cf96e2a8d,
        body: await Xu(λ709cf96e2a8d.body, λd1bb81abb03d)
      } : λ709cf96e2a8d;
    } catch (λ1a27f811e232) {
      if (!λ188d9ea6a344 || λ709cf96e2a8d >= 1 || λ11e8b8b716a2?.aborted || !sc(λ1a27f811e232)) throw λ1a27f811e232;
    }
  }
}
