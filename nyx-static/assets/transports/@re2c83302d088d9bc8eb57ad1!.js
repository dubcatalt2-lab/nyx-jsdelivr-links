export function preserveTransferErrors(λ3035d8fb3a20) {
  const λd8dc8e2c52fa = λ3035d8fb3a20.stream_response;
  λ3035d8fb3a20.stream_response = function(λ3035d8fb3a20, λ1075032340f7, λ4457da780858, λf4f02ef906a3) {
    let λ24688f19f123;
    const λb8bb92a1ab3a = new Promise(λ3035d8fb3a20 => {
      λ24688f19f123 = λ3035d8fb3a20;
    });
    return λd8dc8e2c52fa.call(this, λ3035d8fb3a20, λ3035d8fb3a20 => {
      const λd8dc8e2c52fa = λ3035d8fb3a20.getReader();
      λ1075032340f7(new ReadableStream({
        async pull(λ3035d8fb3a20) {
          try {
            const λ1075032340f7 = await λd8dc8e2c52fa.read();
            if (!λ1075032340f7.done) return void λ3035d8fb3a20.enqueue(λ1075032340f7.value);
            const λ4457da780858 = await λb8bb92a1ab3a;
            if (-1 === λ4457da780858 || λf4f02ef906a3?.aborted) throw λf4f02ef906a3?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λ4457da780858) throw new TypeError(`Request failed with error code ${λ4457da780858}: incomplete textlib transfer`);
            λ3035d8fb3a20.close();
          } catch (λd8dc8e2c52fa) {
            λ3035d8fb3a20.error(λd8dc8e2c52fa);
          }
        },
        cancel: λ3035d8fb3a20 => λd8dc8e2c52fa.cancel(λ3035d8fb3a20)
      }, {
        highWaterMark: 0
      }));
    }, λ3035d8fb3a20 => {
      λ24688f19f123(λ3035d8fb3a20), λ4457da780858(λ3035d8fb3a20);
    }, λf4f02ef906a3);
  };
}

export const bufferLimit = 33554432;

const sc = λ3035d8fb3a20 => /\berror code (?:18|52|56|92)\b/i.test(String(λ3035d8fb3a20?.message || λ3035d8fb3a20)), _u = λ3035d8fb3a20 => λ3035d8fb3a20.some(([λ3035d8fb3a20, λd8dc8e2c52fa]) => "content-type" === λ3035d8fb3a20.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λd8dc8e2c52fa).split(";")[0].trim()));

async function Xu(λ3035d8fb3a20, λd8dc8e2c52fa) {
  const λ1075032340f7 = λ3035d8fb3a20.getReader(), λ4457da780858 = [];
  let λf4f02ef906a3 = 0;
  const o = () => {
    λd8dc8e2c52fa.bytes -= λf4f02ef906a3, λf4f02ef906a3 = 0, λ4457da780858.length = 0;
  };
  try {
    for (;;) {
      const λ3035d8fb3a20 = await λ1075032340f7.read();
      if (λ3035d8fb3a20.done) {
        const λ3035d8fb3a20 = new Blob(λ4457da780858).stream();
        return o(), λ3035d8fb3a20;
      }
      if (λf4f02ef906a3 + λ3035d8fb3a20.value.byteLength > 16777216 || λd8dc8e2c52fa.bytes + λ3035d8fb3a20.value.byteLength > 33554432) {
        let λ24688f19f123 = λ3035d8fb3a20.value;
        return new ReadableStream({
          async pull(λ3035d8fb3a20) {
            try {
              if (λ4457da780858.length) {
                const λ1075032340f7 = λ4457da780858.shift();
                return λf4f02ef906a3 -= λ1075032340f7.byteLength, λd8dc8e2c52fa.bytes -= λ1075032340f7.byteLength, 
                void λ3035d8fb3a20.enqueue(λ1075032340f7);
              }
              if (λ24688f19f123) return λ3035d8fb3a20.enqueue(λ24688f19f123), void (λ24688f19f123 = null);
              const λb8bb92a1ab3a = await λ1075032340f7.read();
              λb8bb92a1ab3a.done ? λ3035d8fb3a20.close() : λ3035d8fb3a20.enqueue(λb8bb92a1ab3a.value);
            } catch (λd8dc8e2c52fa) {
              o(), λ3035d8fb3a20.error(λd8dc8e2c52fa);
            }
          },
          cancel: λ3035d8fb3a20 => (o(), λ24688f19f123 = null, λ1075032340f7.cancel(λ3035d8fb3a20))
        }, {
          highWaterMark: 0
        });
      }
      λ4457da780858.push(λ3035d8fb3a20.value), λf4f02ef906a3 += λ3035d8fb3a20.value.byteLength, 
      λd8dc8e2c52fa.bytes += λ3035d8fb3a20.value.byteLength;
    }
  } catch (λ3035d8fb3a20) {
    throw o(), λ1075032340f7.cancel(λ3035d8fb3a20).catch(() => {}), λ3035d8fb3a20;
  }
}

export async function requestWithTransferRetry(λ3035d8fb3a20, {method: λd8dc8e2c52fa, body: λ1075032340f7, signal: λ4457da780858, budget: λf4f02ef906a3}) {
  const λ24688f19f123 = /^(?:GET|HEAD)$/i.test(λd8dc8e2c52fa || "GET") && null == λ1075032340f7;
  for (let λd8dc8e2c52fa = 0; ;λd8dc8e2c52fa++) {
    λ4457da780858?.throwIfAborted();
    try {
      const λd8dc8e2c52fa = await λ3035d8fb3a20();
      return λ24688f19f123 && λd8dc8e2c52fa.body?.getReader && _u(λd8dc8e2c52fa.headers) ? {
        ...λd8dc8e2c52fa,
        body: await Xu(λd8dc8e2c52fa.body, λf4f02ef906a3)
      } : λd8dc8e2c52fa;
    } catch (λ3035d8fb3a20) {
      if (!λ24688f19f123 || λd8dc8e2c52fa >= 1 || λ4457da780858?.aborted || !sc(λ3035d8fb3a20)) throw λ3035d8fb3a20;
    }
  }
}
