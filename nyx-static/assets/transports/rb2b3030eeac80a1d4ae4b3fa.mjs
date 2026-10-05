export function preserveTransferErrors(λb27902fb33d3) {
  const λecb4a136ce0f = λb27902fb33d3.stream_response;
  λb27902fb33d3.stream_response = function(λb27902fb33d3, λ8c401a838cc6, λf4a8eee6fc7f, λdb9ed55e3e39) {
    let λ226778eda316;
    const λ13b13baa302d = new Promise(λb27902fb33d3 => {
      λ226778eda316 = λb27902fb33d3;
    });
    return λecb4a136ce0f.call(this, λb27902fb33d3, λb27902fb33d3 => {
      const λecb4a136ce0f = λb27902fb33d3.getReader();
      λ8c401a838cc6(new ReadableStream({
        async pull(λb27902fb33d3) {
          try {
            const λ8c401a838cc6 = await λecb4a136ce0f.read();
            if (!λ8c401a838cc6.done) return void λb27902fb33d3.enqueue(λ8c401a838cc6.value);
            const λf4a8eee6fc7f = await λ13b13baa302d;
            if (-1 === λf4a8eee6fc7f || λdb9ed55e3e39?.aborted) throw λdb9ed55e3e39?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λf4a8eee6fc7f) throw new TypeError(`Request failed with error code ${λf4a8eee6fc7f}: incomplete libcurl transfer`);
            λb27902fb33d3.close();
          } catch (λecb4a136ce0f) {
            λb27902fb33d3.error(λecb4a136ce0f);
          }
        },
        cancel: λb27902fb33d3 => λecb4a136ce0f.cancel(λb27902fb33d3)
      }, {
        highWaterMark: 0
      }));
    }, λb27902fb33d3 => {
      λ226778eda316(λb27902fb33d3), λf4a8eee6fc7f(λb27902fb33d3);
    }, λdb9ed55e3e39);
  };
}

export const bufferLimit = 33554432;

const sc = λb27902fb33d3 => /\berror code (?:18|52|56|92)\b/i.test(String(λb27902fb33d3?.message || λb27902fb33d3)), _u = λb27902fb33d3 => λb27902fb33d3.some(([λb27902fb33d3, λecb4a136ce0f]) => "content-type" === λb27902fb33d3.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λecb4a136ce0f).split(";")[0].trim()));

async function Xu(λb27902fb33d3, λecb4a136ce0f) {
  const λ8c401a838cc6 = λb27902fb33d3.getReader(), λf4a8eee6fc7f = [];
  let λdb9ed55e3e39 = 0;
  const o = () => {
    λecb4a136ce0f.bytes -= λdb9ed55e3e39, λdb9ed55e3e39 = 0, λf4a8eee6fc7f.length = 0;
  };
  try {
    for (;;) {
      const λb27902fb33d3 = await λ8c401a838cc6.read();
      if (λb27902fb33d3.done) {
        const λb27902fb33d3 = new Blob(λf4a8eee6fc7f).stream();
        return o(), λb27902fb33d3;
      }
      if (λdb9ed55e3e39 + λb27902fb33d3.value.byteLength > 16777216 || λecb4a136ce0f.bytes + λb27902fb33d3.value.byteLength > 33554432) {
        let λ226778eda316 = λb27902fb33d3.value;
        return new ReadableStream({
          async pull(λb27902fb33d3) {
            try {
              if (λf4a8eee6fc7f.length) {
                const λ8c401a838cc6 = λf4a8eee6fc7f.shift();
                return λdb9ed55e3e39 -= λ8c401a838cc6.byteLength, λecb4a136ce0f.bytes -= λ8c401a838cc6.byteLength, 
                void λb27902fb33d3.enqueue(λ8c401a838cc6);
              }
              if (λ226778eda316) return λb27902fb33d3.enqueue(λ226778eda316), void (λ226778eda316 = null);
              const λ13b13baa302d = await λ8c401a838cc6.read();
              λ13b13baa302d.done ? λb27902fb33d3.close() : λb27902fb33d3.enqueue(λ13b13baa302d.value);
            } catch (λecb4a136ce0f) {
              o(), λb27902fb33d3.error(λecb4a136ce0f);
            }
          },
          cancel: λb27902fb33d3 => (o(), λ226778eda316 = null, λ8c401a838cc6.cancel(λb27902fb33d3))
        }, {
          highWaterMark: 0
        });
      }
      λf4a8eee6fc7f.push(λb27902fb33d3.value), λdb9ed55e3e39 += λb27902fb33d3.value.byteLength, 
      λecb4a136ce0f.bytes += λb27902fb33d3.value.byteLength;
    }
  } catch (λb27902fb33d3) {
    throw o(), λ8c401a838cc6.cancel(λb27902fb33d3).catch(() => {}), λb27902fb33d3;
  }
}

export async function requestWithTransferRetry(λb27902fb33d3, {method: λecb4a136ce0f, body: λ8c401a838cc6, signal: λf4a8eee6fc7f, budget: λdb9ed55e3e39}) {
  const λ226778eda316 = /^(?:GET|HEAD)$/i.test(λecb4a136ce0f || "GET") && null == λ8c401a838cc6;
  for (let λecb4a136ce0f = 0; ;λecb4a136ce0f++) {
    λf4a8eee6fc7f?.throwIfAborted();
    try {
      const λecb4a136ce0f = await λb27902fb33d3();
      return λ226778eda316 && λecb4a136ce0f.body?.getReader && _u(λecb4a136ce0f.headers) ? {
        ...λecb4a136ce0f,
        body: await Xu(λecb4a136ce0f.body, λdb9ed55e3e39)
      } : λecb4a136ce0f;
    } catch (λb27902fb33d3) {
      if (!λ226778eda316 || λecb4a136ce0f >= 1 || λf4a8eee6fc7f?.aborted || !sc(λb27902fb33d3)) throw λb27902fb33d3;
    }
  }
}
