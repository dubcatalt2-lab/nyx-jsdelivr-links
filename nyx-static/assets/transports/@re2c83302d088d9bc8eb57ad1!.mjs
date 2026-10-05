export function preserveTransferErrors(λ8303d76c1e85) {
  const λc76eba3b2bc0 = λ8303d76c1e85.stream_response;
  λ8303d76c1e85.stream_response = function(λ8303d76c1e85, λ9eb5019c666f, λ3258ff075d75, λ8be657a4c029) {
    let λ18f94294fbbe;
    const λ5f26cc8ded9f = new Promise(λ8303d76c1e85 => {
      λ18f94294fbbe = λ8303d76c1e85;
    });
    return λc76eba3b2bc0.call(this, λ8303d76c1e85, λ8303d76c1e85 => {
      const λc76eba3b2bc0 = λ8303d76c1e85.getReader();
      λ9eb5019c666f(new ReadableStream({
        async pull(λ8303d76c1e85) {
          try {
            const λ9eb5019c666f = await λc76eba3b2bc0.read();
            if (!λ9eb5019c666f.done) return void λ8303d76c1e85.enqueue(λ9eb5019c666f.value);
            const λ3258ff075d75 = await λ5f26cc8ded9f;
            if (-1 === λ3258ff075d75 || λ8be657a4c029?.aborted) throw λ8be657a4c029?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λ3258ff075d75) throw new TypeError(`Request failed with error code ${λ3258ff075d75}: incomplete textlib transfer`);
            λ8303d76c1e85.close();
          } catch (λc76eba3b2bc0) {
            λ8303d76c1e85.error(λc76eba3b2bc0);
          }
        },
        cancel: λ8303d76c1e85 => λc76eba3b2bc0.cancel(λ8303d76c1e85)
      }, {
        highWaterMark: 0
      }));
    }, λ8303d76c1e85 => {
      λ18f94294fbbe(λ8303d76c1e85), λ3258ff075d75(λ8303d76c1e85);
    }, λ8be657a4c029);
  };
}

export const bufferLimit = 33554432;

const sc = λ8303d76c1e85 => /\berror code (?:18|52|56|92)\b/i.test(String(λ8303d76c1e85?.message || λ8303d76c1e85)), _u = λ8303d76c1e85 => λ8303d76c1e85.some(([λ8303d76c1e85, λc76eba3b2bc0]) => "content-type" === λ8303d76c1e85.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λc76eba3b2bc0).split(";")[0].trim()));

async function Xu(λ8303d76c1e85, λc76eba3b2bc0) {
  const λ9eb5019c666f = λ8303d76c1e85.getReader(), λ3258ff075d75 = [];
  let λ8be657a4c029 = 0;
  const o = () => {
    λc76eba3b2bc0.bytes -= λ8be657a4c029, λ8be657a4c029 = 0, λ3258ff075d75.length = 0;
  };
  try {
    for (;;) {
      const λ8303d76c1e85 = await λ9eb5019c666f.read();
      if (λ8303d76c1e85.done) {
        const λ8303d76c1e85 = new Blob(λ3258ff075d75).stream();
        return o(), λ8303d76c1e85;
      }
      if (λ8be657a4c029 + λ8303d76c1e85.value.byteLength > 16777216 || λc76eba3b2bc0.bytes + λ8303d76c1e85.value.byteLength > 33554432) {
        let λ18f94294fbbe = λ8303d76c1e85.value;
        return new ReadableStream({
          async pull(λ8303d76c1e85) {
            try {
              if (λ3258ff075d75.length) {
                const λ9eb5019c666f = λ3258ff075d75.shift();
                return λ8be657a4c029 -= λ9eb5019c666f.byteLength, λc76eba3b2bc0.bytes -= λ9eb5019c666f.byteLength, 
                void λ8303d76c1e85.enqueue(λ9eb5019c666f);
              }
              if (λ18f94294fbbe) return λ8303d76c1e85.enqueue(λ18f94294fbbe), void (λ18f94294fbbe = null);
              const λ5f26cc8ded9f = await λ9eb5019c666f.read();
              λ5f26cc8ded9f.done ? λ8303d76c1e85.close() : λ8303d76c1e85.enqueue(λ5f26cc8ded9f.value);
            } catch (λc76eba3b2bc0) {
              o(), λ8303d76c1e85.error(λc76eba3b2bc0);
            }
          },
          cancel: λ8303d76c1e85 => (o(), λ18f94294fbbe = null, λ9eb5019c666f.cancel(λ8303d76c1e85))
        }, {
          highWaterMark: 0
        });
      }
      λ3258ff075d75.push(λ8303d76c1e85.value), λ8be657a4c029 += λ8303d76c1e85.value.byteLength, 
      λc76eba3b2bc0.bytes += λ8303d76c1e85.value.byteLength;
    }
  } catch (λ8303d76c1e85) {
    throw o(), λ9eb5019c666f.cancel(λ8303d76c1e85).catch(() => {}), λ8303d76c1e85;
  }
}

export async function requestWithTransferRetry(λ8303d76c1e85, {method: λc76eba3b2bc0, body: λ9eb5019c666f, signal: λ3258ff075d75, budget: λ8be657a4c029}) {
  const λ18f94294fbbe = /^(?:GET|HEAD)$/i.test(λc76eba3b2bc0 || "GET") && null == λ9eb5019c666f;
  for (let λc76eba3b2bc0 = 0; ;λc76eba3b2bc0++) {
    λ3258ff075d75?.throwIfAborted();
    try {
      const λc76eba3b2bc0 = await λ8303d76c1e85();
      return λ18f94294fbbe && λc76eba3b2bc0.body?.getReader && _u(λc76eba3b2bc0.headers) ? {
        ...λc76eba3b2bc0,
        body: await Xu(λc76eba3b2bc0.body, λ8be657a4c029)
      } : λc76eba3b2bc0;
    } catch (λ8303d76c1e85) {
      if (!λ18f94294fbbe || λc76eba3b2bc0 >= 1 || λ3258ff075d75?.aborted || !sc(λ8303d76c1e85)) throw λ8303d76c1e85;
    }
  }
}
