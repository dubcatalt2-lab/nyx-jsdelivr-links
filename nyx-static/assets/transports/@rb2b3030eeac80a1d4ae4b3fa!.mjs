export function preserveTransferErrors(λ874f07e01002) {
  const λ1199b9479971 = λ874f07e01002.stream_response;
  λ874f07e01002.stream_response = function(λ874f07e01002, λ2781f02a13fd, λ0a3f57e36ab4, λe87b5344a0c3) {
    let λ7b0f6b0d5a1a;
    const λe859a3fba684 = new Promise(λ874f07e01002 => {
      λ7b0f6b0d5a1a = λ874f07e01002;
    });
    return λ1199b9479971.call(this, λ874f07e01002, λ874f07e01002 => {
      const λ1199b9479971 = λ874f07e01002.getReader();
      λ2781f02a13fd(new ReadableStream({
        async pull(λ874f07e01002) {
          try {
            const λ2781f02a13fd = await λ1199b9479971.read();
            if (!λ2781f02a13fd.done) return void λ874f07e01002.enqueue(λ2781f02a13fd.value);
            const λ0a3f57e36ab4 = await λe859a3fba684;
            if (-1 === λ0a3f57e36ab4 || λe87b5344a0c3?.aborted) throw λe87b5344a0c3?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λ0a3f57e36ab4) throw new TypeError(`Request failed with error code ${λ0a3f57e36ab4}: incomplete libcurl transfer`);
            λ874f07e01002.close();
          } catch (λ1199b9479971) {
            λ874f07e01002.error(λ1199b9479971);
          }
        },
        cancel: λ874f07e01002 => λ1199b9479971.cancel(λ874f07e01002)
      }, {
        highWaterMark: 0
      }));
    }, λ874f07e01002 => {
      λ7b0f6b0d5a1a(λ874f07e01002), λ0a3f57e36ab4(λ874f07e01002);
    }, λe87b5344a0c3);
  };
}

export const bufferLimit = 33554432;

const sc = λ874f07e01002 => /\berror code (?:18|52|56|92)\b/i.test(String(λ874f07e01002?.message || λ874f07e01002)), _u = λ874f07e01002 => λ874f07e01002.some(([λ874f07e01002, λ1199b9479971]) => "content-type" === λ874f07e01002.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ1199b9479971).split(";")[0].trim()));

async function Xu(λ874f07e01002, λ1199b9479971) {
  const λ2781f02a13fd = λ874f07e01002.getReader(), λ0a3f57e36ab4 = [];
  let λe87b5344a0c3 = 0;
  const o = () => {
    λ1199b9479971.bytes -= λe87b5344a0c3, λe87b5344a0c3 = 0, λ0a3f57e36ab4.length = 0;
  };
  try {
    for (;;) {
      const λ874f07e01002 = await λ2781f02a13fd.read();
      if (λ874f07e01002.done) {
        const λ874f07e01002 = new Blob(λ0a3f57e36ab4).stream();
        return o(), λ874f07e01002;
      }
      if (λe87b5344a0c3 + λ874f07e01002.value.byteLength > 16777216 || λ1199b9479971.bytes + λ874f07e01002.value.byteLength > 33554432) {
        let λ7b0f6b0d5a1a = λ874f07e01002.value;
        return new ReadableStream({
          async pull(λ874f07e01002) {
            try {
              if (λ0a3f57e36ab4.length) {
                const λ2781f02a13fd = λ0a3f57e36ab4.shift();
                return λe87b5344a0c3 -= λ2781f02a13fd.byteLength, λ1199b9479971.bytes -= λ2781f02a13fd.byteLength, 
                void λ874f07e01002.enqueue(λ2781f02a13fd);
              }
              if (λ7b0f6b0d5a1a) return λ874f07e01002.enqueue(λ7b0f6b0d5a1a), void (λ7b0f6b0d5a1a = null);
              const λe859a3fba684 = await λ2781f02a13fd.read();
              λe859a3fba684.done ? λ874f07e01002.close() : λ874f07e01002.enqueue(λe859a3fba684.value);
            } catch (λ1199b9479971) {
              o(), λ874f07e01002.error(λ1199b9479971);
            }
          },
          cancel: λ874f07e01002 => (o(), λ7b0f6b0d5a1a = null, λ2781f02a13fd.cancel(λ874f07e01002))
        }, {
          highWaterMark: 0
        });
      }
      λ0a3f57e36ab4.push(λ874f07e01002.value), λe87b5344a0c3 += λ874f07e01002.value.byteLength, 
      λ1199b9479971.bytes += λ874f07e01002.value.byteLength;
    }
  } catch (λ874f07e01002) {
    throw o(), λ2781f02a13fd.cancel(λ874f07e01002).catch(() => {}), λ874f07e01002;
  }
}

export async function requestWithTransferRetry(λ874f07e01002, {method: λ1199b9479971, body: λ2781f02a13fd, signal: λ0a3f57e36ab4, budget: λe87b5344a0c3}) {
  const λ7b0f6b0d5a1a = /^(?:GET|HEAD)$/i.test(λ1199b9479971 || "GET") && null == λ2781f02a13fd;
  for (let λ1199b9479971 = 0; ;λ1199b9479971++) {
    λ0a3f57e36ab4?.throwIfAborted();
    try {
      const λ1199b9479971 = await λ874f07e01002();
      return λ7b0f6b0d5a1a && λ1199b9479971.body?.getReader && _u(λ1199b9479971.headers) ? {
        ...λ1199b9479971,
        body: await Xu(λ1199b9479971.body, λe87b5344a0c3)
      } : λ1199b9479971;
    } catch (λ874f07e01002) {
      if (!λ7b0f6b0d5a1a || λ1199b9479971 >= 1 || λ0a3f57e36ab4?.aborted || !sc(λ874f07e01002)) throw λ874f07e01002;
    }
  }
}
