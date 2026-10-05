export function preserveTransferErrors(λ347095b7276f) {
  const λ1b94316dc0c1 = λ347095b7276f.stream_response;
  λ347095b7276f.stream_response = function(λ347095b7276f, λ2920b6788caf, λ401de36a153d, λf9cb1d36bbf8) {
    let λ8337452a07b7;
    const λ25658453d868 = new Promise(λ347095b7276f => {
      λ8337452a07b7 = λ347095b7276f;
    });
    return λ1b94316dc0c1.call(this, λ347095b7276f, λ347095b7276f => {
      const λ1b94316dc0c1 = λ347095b7276f.getReader();
      λ2920b6788caf(new ReadableStream({
        async pull(λ347095b7276f) {
          try {
            const λ2920b6788caf = await λ1b94316dc0c1.read();
            if (!λ2920b6788caf.done) return void λ347095b7276f.enqueue(λ2920b6788caf.value);
            const λ401de36a153d = await λ25658453d868;
            if (-1 === λ401de36a153d || λf9cb1d36bbf8?.aborted) throw λf9cb1d36bbf8?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λ401de36a153d) throw new TypeError(`Request failed with error code ${λ401de36a153d}: incomplete libcurl transfer`);
            λ347095b7276f.close();
          } catch (λ1b94316dc0c1) {
            λ347095b7276f.error(λ1b94316dc0c1);
          }
        },
        cancel: λ347095b7276f => λ1b94316dc0c1.cancel(λ347095b7276f)
      }, {
        highWaterMark: 0
      }));
    }, λ347095b7276f => {
      λ8337452a07b7(λ347095b7276f), λ401de36a153d(λ347095b7276f);
    }, λf9cb1d36bbf8);
  };
}

export const bufferLimit = 33554432;

const sc = λ347095b7276f => /\berror code (?:18|52|56|92)\b/i.test(String(λ347095b7276f?.message || λ347095b7276f)), _u = λ347095b7276f => λ347095b7276f.some(([λ347095b7276f, λ1b94316dc0c1]) => "content-type" === λ347095b7276f.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ1b94316dc0c1).split(";")[0].trim()));

async function Xu(λ347095b7276f, λ1b94316dc0c1) {
  const λ2920b6788caf = λ347095b7276f.getReader(), λ401de36a153d = [];
  let λf9cb1d36bbf8 = 0;
  const o = () => {
    λ1b94316dc0c1.bytes -= λf9cb1d36bbf8, λf9cb1d36bbf8 = 0, λ401de36a153d.length = 0;
  };
  try {
    for (;;) {
      const λ347095b7276f = await λ2920b6788caf.read();
      if (λ347095b7276f.done) {
        const λ347095b7276f = new Blob(λ401de36a153d).stream();
        return o(), λ347095b7276f;
      }
      if (λf9cb1d36bbf8 + λ347095b7276f.value.byteLength > 16777216 || λ1b94316dc0c1.bytes + λ347095b7276f.value.byteLength > 33554432) {
        let λ8337452a07b7 = λ347095b7276f.value;
        return new ReadableStream({
          async pull(λ347095b7276f) {
            try {
              if (λ401de36a153d.length) {
                const λ2920b6788caf = λ401de36a153d.shift();
                return λf9cb1d36bbf8 -= λ2920b6788caf.byteLength, λ1b94316dc0c1.bytes -= λ2920b6788caf.byteLength, 
                void λ347095b7276f.enqueue(λ2920b6788caf);
              }
              if (λ8337452a07b7) return λ347095b7276f.enqueue(λ8337452a07b7), void (λ8337452a07b7 = null);
              const λ25658453d868 = await λ2920b6788caf.read();
              λ25658453d868.done ? λ347095b7276f.close() : λ347095b7276f.enqueue(λ25658453d868.value);
            } catch (λ1b94316dc0c1) {
              o(), λ347095b7276f.error(λ1b94316dc0c1);
            }
          },
          cancel: λ347095b7276f => (o(), λ8337452a07b7 = null, λ2920b6788caf.cancel(λ347095b7276f))
        }, {
          highWaterMark: 0
        });
      }
      λ401de36a153d.push(λ347095b7276f.value), λf9cb1d36bbf8 += λ347095b7276f.value.byteLength, 
      λ1b94316dc0c1.bytes += λ347095b7276f.value.byteLength;
    }
  } catch (λ347095b7276f) {
    throw o(), λ2920b6788caf.cancel(λ347095b7276f).catch(() => {}), λ347095b7276f;
  }
}

export async function requestWithTransferRetry(λ347095b7276f, {method: λ1b94316dc0c1, body: λ2920b6788caf, signal: λ401de36a153d, budget: λf9cb1d36bbf8}) {
  const λ8337452a07b7 = /^(?:GET|HEAD)$/i.test(λ1b94316dc0c1 || "GET") && null == λ2920b6788caf;
  for (let λ1b94316dc0c1 = 0; ;λ1b94316dc0c1++) {
    λ401de36a153d?.throwIfAborted();
    try {
      const λ1b94316dc0c1 = await λ347095b7276f();
      return λ8337452a07b7 && λ1b94316dc0c1.body?.getReader && _u(λ1b94316dc0c1.headers) ? {
        ...λ1b94316dc0c1,
        body: await Xu(λ1b94316dc0c1.body, λf9cb1d36bbf8)
      } : λ1b94316dc0c1;
    } catch (λ347095b7276f) {
      if (!λ8337452a07b7 || λ1b94316dc0c1 >= 1 || λ401de36a153d?.aborted || !sc(λ347095b7276f)) throw λ347095b7276f;
    }
  }
}
