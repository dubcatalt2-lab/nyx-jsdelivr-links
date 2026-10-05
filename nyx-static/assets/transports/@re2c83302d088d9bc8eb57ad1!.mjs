export function preserveTransferErrors(λc57ba90da14b) {
  const λ85c80ac71b34 = λc57ba90da14b.stream_response;
  λc57ba90da14b.stream_response = function(λc57ba90da14b, λ23c6d29cbb06, λ66018404bb1c, λbc4da152214f) {
    let λf3cb5ce77e3f;
    const λc326fb684982 = new Promise(λc57ba90da14b => {
      λf3cb5ce77e3f = λc57ba90da14b;
    });
    return λ85c80ac71b34.call(this, λc57ba90da14b, λc57ba90da14b => {
      const λ85c80ac71b34 = λc57ba90da14b.getReader();
      λ23c6d29cbb06(new ReadableStream({
        async pull(λc57ba90da14b) {
          try {
            const λ23c6d29cbb06 = await λ85c80ac71b34.read();
            if (!λ23c6d29cbb06.done) return void λc57ba90da14b.enqueue(λ23c6d29cbb06.value);
            const λ66018404bb1c = await λc326fb684982;
            if (-1 === λ66018404bb1c || λbc4da152214f?.aborted) throw λbc4da152214f?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λ66018404bb1c) throw new TypeError(`Request failed with error code ${λ66018404bb1c}: incomplete textlib transfer`);
            λc57ba90da14b.close();
          } catch (λ85c80ac71b34) {
            λc57ba90da14b.error(λ85c80ac71b34);
          }
        },
        cancel: λc57ba90da14b => λ85c80ac71b34.cancel(λc57ba90da14b)
      }, {
        highWaterMark: 0
      }));
    }, λc57ba90da14b => {
      λf3cb5ce77e3f(λc57ba90da14b), λ66018404bb1c(λc57ba90da14b);
    }, λbc4da152214f);
  };
}

export const bufferLimit = 33554432;

const sc = λc57ba90da14b => /\berror code (?:18|52|56|92)\b/i.test(String(λc57ba90da14b?.message || λc57ba90da14b)), _u = λc57ba90da14b => λc57ba90da14b.some(([λc57ba90da14b, λ85c80ac71b34]) => "content-type" === λc57ba90da14b.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ85c80ac71b34).split(";")[0].trim()));

async function Xu(λc57ba90da14b, λ85c80ac71b34) {
  const λ23c6d29cbb06 = λc57ba90da14b.getReader(), λ66018404bb1c = [];
  let λbc4da152214f = 0;
  const o = () => {
    λ85c80ac71b34.bytes -= λbc4da152214f, λbc4da152214f = 0, λ66018404bb1c.length = 0;
  };
  try {
    for (;;) {
      const λc57ba90da14b = await λ23c6d29cbb06.read();
      if (λc57ba90da14b.done) {
        const λc57ba90da14b = new Blob(λ66018404bb1c).stream();
        return o(), λc57ba90da14b;
      }
      if (λbc4da152214f + λc57ba90da14b.value.byteLength > 16777216 || λ85c80ac71b34.bytes + λc57ba90da14b.value.byteLength > 33554432) {
        let λf3cb5ce77e3f = λc57ba90da14b.value;
        return new ReadableStream({
          async pull(λc57ba90da14b) {
            try {
              if (λ66018404bb1c.length) {
                const λ23c6d29cbb06 = λ66018404bb1c.shift();
                return λbc4da152214f -= λ23c6d29cbb06.byteLength, λ85c80ac71b34.bytes -= λ23c6d29cbb06.byteLength, 
                void λc57ba90da14b.enqueue(λ23c6d29cbb06);
              }
              if (λf3cb5ce77e3f) return λc57ba90da14b.enqueue(λf3cb5ce77e3f), void (λf3cb5ce77e3f = null);
              const λc326fb684982 = await λ23c6d29cbb06.read();
              λc326fb684982.done ? λc57ba90da14b.close() : λc57ba90da14b.enqueue(λc326fb684982.value);
            } catch (λ85c80ac71b34) {
              o(), λc57ba90da14b.error(λ85c80ac71b34);
            }
          },
          cancel: λc57ba90da14b => (o(), λf3cb5ce77e3f = null, λ23c6d29cbb06.cancel(λc57ba90da14b))
        }, {
          highWaterMark: 0
        });
      }
      λ66018404bb1c.push(λc57ba90da14b.value), λbc4da152214f += λc57ba90da14b.value.byteLength, 
      λ85c80ac71b34.bytes += λc57ba90da14b.value.byteLength;
    }
  } catch (λc57ba90da14b) {
    throw o(), λ23c6d29cbb06.cancel(λc57ba90da14b).catch(() => {}), λc57ba90da14b;
  }
}

export async function requestWithTransferRetry(λc57ba90da14b, {method: λ85c80ac71b34, body: λ23c6d29cbb06, signal: λ66018404bb1c, budget: λbc4da152214f}) {
  const λf3cb5ce77e3f = /^(?:GET|HEAD)$/i.test(λ85c80ac71b34 || "GET") && null == λ23c6d29cbb06;
  for (let λ85c80ac71b34 = 0; ;λ85c80ac71b34++) {
    λ66018404bb1c?.throwIfAborted();
    try {
      const λ85c80ac71b34 = await λc57ba90da14b();
      return λf3cb5ce77e3f && λ85c80ac71b34.body?.getReader && _u(λ85c80ac71b34.headers) ? {
        ...λ85c80ac71b34,
        body: await Xu(λ85c80ac71b34.body, λbc4da152214f)
      } : λ85c80ac71b34;
    } catch (λc57ba90da14b) {
      if (!λf3cb5ce77e3f || λ85c80ac71b34 >= 1 || λ66018404bb1c?.aborted || !sc(λc57ba90da14b)) throw λc57ba90da14b;
    }
  }
}
