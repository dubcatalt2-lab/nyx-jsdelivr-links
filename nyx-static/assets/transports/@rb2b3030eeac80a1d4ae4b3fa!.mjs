export function preserveTransferErrors(λb2bdbdede4e2) {
  const λ07d0138364a6 = λb2bdbdede4e2.stream_response;
  λb2bdbdede4e2.stream_response = function(λb2bdbdede4e2, λ3ff3c24e1470, λ09d83b748456, λ5cf42fd739ce) {
    let λ869bbc9a7fe2;
    const λ52d54a8933f0 = new Promise(λb2bdbdede4e2 => {
      λ869bbc9a7fe2 = λb2bdbdede4e2;
    });
    return λ07d0138364a6.call(this, λb2bdbdede4e2, λb2bdbdede4e2 => {
      const λ07d0138364a6 = λb2bdbdede4e2.getReader();
      λ3ff3c24e1470(new ReadableStream({
        async pull(λb2bdbdede4e2) {
          try {
            const λ3ff3c24e1470 = await λ07d0138364a6.read();
            if (!λ3ff3c24e1470.done) return void λb2bdbdede4e2.enqueue(λ3ff3c24e1470.value);
            const λ09d83b748456 = await λ52d54a8933f0;
            if (-1 === λ09d83b748456 || λ5cf42fd739ce?.aborted) throw λ5cf42fd739ce?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λ09d83b748456) throw new TypeError(`Request failed with error code ${λ09d83b748456}: incomplete libcurl transfer`);
            λb2bdbdede4e2.close();
          } catch (λ07d0138364a6) {
            λb2bdbdede4e2.error(λ07d0138364a6);
          }
        },
        cancel: λb2bdbdede4e2 => λ07d0138364a6.cancel(λb2bdbdede4e2)
      }, {
        highWaterMark: 0
      }));
    }, λb2bdbdede4e2 => {
      λ869bbc9a7fe2(λb2bdbdede4e2), λ09d83b748456(λb2bdbdede4e2);
    }, λ5cf42fd739ce);
  };
}

export const bufferLimit = 33554432;

const sc = λb2bdbdede4e2 => /\berror code (?:18|52|56|92)\b/i.test(String(λb2bdbdede4e2?.message || λb2bdbdede4e2)), _u = λb2bdbdede4e2 => λb2bdbdede4e2.some(([λb2bdbdede4e2, λ07d0138364a6]) => "content-type" === λb2bdbdede4e2.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ07d0138364a6).split(";")[0].trim()));

async function Xu(λb2bdbdede4e2, λ07d0138364a6) {
  const λ3ff3c24e1470 = λb2bdbdede4e2.getReader(), λ09d83b748456 = [];
  let λ5cf42fd739ce = 0;
  const o = () => {
    λ07d0138364a6.bytes -= λ5cf42fd739ce, λ5cf42fd739ce = 0, λ09d83b748456.length = 0;
  };
  try {
    for (;;) {
      const λb2bdbdede4e2 = await λ3ff3c24e1470.read();
      if (λb2bdbdede4e2.done) {
        const λb2bdbdede4e2 = new Blob(λ09d83b748456).stream();
        return o(), λb2bdbdede4e2;
      }
      if (λ5cf42fd739ce + λb2bdbdede4e2.value.byteLength > 16777216 || λ07d0138364a6.bytes + λb2bdbdede4e2.value.byteLength > 33554432) {
        let λ869bbc9a7fe2 = λb2bdbdede4e2.value;
        return new ReadableStream({
          async pull(λb2bdbdede4e2) {
            try {
              if (λ09d83b748456.length) {
                const λ3ff3c24e1470 = λ09d83b748456.shift();
                return λ5cf42fd739ce -= λ3ff3c24e1470.byteLength, λ07d0138364a6.bytes -= λ3ff3c24e1470.byteLength, 
                void λb2bdbdede4e2.enqueue(λ3ff3c24e1470);
              }
              if (λ869bbc9a7fe2) return λb2bdbdede4e2.enqueue(λ869bbc9a7fe2), void (λ869bbc9a7fe2 = null);
              const λ52d54a8933f0 = await λ3ff3c24e1470.read();
              λ52d54a8933f0.done ? λb2bdbdede4e2.close() : λb2bdbdede4e2.enqueue(λ52d54a8933f0.value);
            } catch (λ07d0138364a6) {
              o(), λb2bdbdede4e2.error(λ07d0138364a6);
            }
          },
          cancel: λb2bdbdede4e2 => (o(), λ869bbc9a7fe2 = null, λ3ff3c24e1470.cancel(λb2bdbdede4e2))
        }, {
          highWaterMark: 0
        });
      }
      λ09d83b748456.push(λb2bdbdede4e2.value), λ5cf42fd739ce += λb2bdbdede4e2.value.byteLength, 
      λ07d0138364a6.bytes += λb2bdbdede4e2.value.byteLength;
    }
  } catch (λb2bdbdede4e2) {
    throw o(), λ3ff3c24e1470.cancel(λb2bdbdede4e2).catch(() => {}), λb2bdbdede4e2;
  }
}

export async function requestWithTransferRetry(λb2bdbdede4e2, {method: λ07d0138364a6, body: λ3ff3c24e1470, signal: λ09d83b748456, budget: λ5cf42fd739ce}) {
  const λ869bbc9a7fe2 = /^(?:GET|HEAD)$/i.test(λ07d0138364a6 || "GET") && null == λ3ff3c24e1470;
  for (let λ07d0138364a6 = 0; ;λ07d0138364a6++) {
    λ09d83b748456?.throwIfAborted();
    try {
      const λ07d0138364a6 = await λb2bdbdede4e2();
      return λ869bbc9a7fe2 && λ07d0138364a6.body?.getReader && _u(λ07d0138364a6.headers) ? {
        ...λ07d0138364a6,
        body: await Xu(λ07d0138364a6.body, λ5cf42fd739ce)
      } : λ07d0138364a6;
    } catch (λb2bdbdede4e2) {
      if (!λ869bbc9a7fe2 || λ07d0138364a6 >= 1 || λ09d83b748456?.aborted || !sc(λb2bdbdede4e2)) throw λb2bdbdede4e2;
    }
  }
}
