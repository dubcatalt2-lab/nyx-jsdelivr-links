export function preserveTransferErrors(λ54cf838107ef) {
  const λ3bd6ebfabae6 = λ54cf838107ef.stream_response;
  λ54cf838107ef.stream_response = function(λ54cf838107ef, λefc4d5c16f51, λ2664050c15f7, λc7c7d77dadd9) {
    let λ3050f722a268;
    const λ55c7d9e00396 = new Promise(λ54cf838107ef => {
      λ3050f722a268 = λ54cf838107ef;
    });
    return λ3bd6ebfabae6.call(this, λ54cf838107ef, λ54cf838107ef => {
      const λ3bd6ebfabae6 = λ54cf838107ef.getReader();
      λefc4d5c16f51(new ReadableStream({
        async pull(λ54cf838107ef) {
          try {
            const λefc4d5c16f51 = await λ3bd6ebfabae6.read();
            if (!λefc4d5c16f51.done) return void λ54cf838107ef.enqueue(λefc4d5c16f51.value);
            const λ2664050c15f7 = await λ55c7d9e00396;
            if (-1 === λ2664050c15f7 || λc7c7d77dadd9?.aborted) throw λc7c7d77dadd9?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λ2664050c15f7) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λ2664050c15f7}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x6c\x69\x62\x63\x75\x72\x6c\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ54cf838107ef.close();
          } catch (λ3bd6ebfabae6) {
            λ54cf838107ef.error(λ3bd6ebfabae6);
          }
        },
        cancel: λ54cf838107ef => λ3bd6ebfabae6.cancel(λ54cf838107ef)
      }, {
        highWaterMark: 0
      }));
    }, λ54cf838107ef => {
      λ3050f722a268(λ54cf838107ef), λ2664050c15f7(λ54cf838107ef);
    }, λc7c7d77dadd9);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λ54cf838107ef => /\berror code (?:18|52|56|92)\b/i.test(String(λ54cf838107ef?.message || λ54cf838107ef)), _0x7e8643_1 = λ54cf838107ef => λ54cf838107ef.some(([λ54cf838107ef, λ3bd6ebfabae6]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ54cf838107ef.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ3bd6ebfabae6).split("\x3b")[0].trim()));

async function _0x7e8643_2(λ54cf838107ef, λ3bd6ebfabae6) {
  const λefc4d5c16f51 = λ54cf838107ef.getReader(), λ2664050c15f7 = [];
  let λc7c7d77dadd9 = 0;
  const _0x7e8643_5 = () => {
    λ3bd6ebfabae6.bytes -= λc7c7d77dadd9, λc7c7d77dadd9 = 0, λ2664050c15f7.length = 0;
  };
  try {
    for (;;) {
      const λ54cf838107ef = await λefc4d5c16f51.read();
      if (λ54cf838107ef.done) {
        const λ54cf838107ef = new Blob(λ2664050c15f7).stream();
        return _0x7e8643_5(), λ54cf838107ef;
      }
      if (λc7c7d77dadd9 + λ54cf838107ef.value.byteLength > 16777216 || λ3bd6ebfabae6.bytes + λ54cf838107ef.value.byteLength > 33554432) {
        let λ3050f722a268 = λ54cf838107ef.value;
        return new ReadableStream({
          async pull(λ54cf838107ef) {
            try {
              if (λ2664050c15f7.length) {
                const λefc4d5c16f51 = λ2664050c15f7.shift();
                return λc7c7d77dadd9 -= λefc4d5c16f51.byteLength, λ3bd6ebfabae6.bytes -= λefc4d5c16f51.byteLength, 
                void λ54cf838107ef.enqueue(λefc4d5c16f51);
              }
              if (λ3050f722a268) return λ54cf838107ef.enqueue(λ3050f722a268), void (λ3050f722a268 = null);
              const λ55c7d9e00396 = await λefc4d5c16f51.read();
              λ55c7d9e00396.done ? λ54cf838107ef.close() : λ54cf838107ef.enqueue(λ55c7d9e00396.value);
            } catch (λ3bd6ebfabae6) {
              _0x7e8643_5(), λ54cf838107ef.error(λ3bd6ebfabae6);
            }
          },
          cancel: λ54cf838107ef => (_0x7e8643_5(), λ3050f722a268 = null, λefc4d5c16f51.cancel(λ54cf838107ef))
        }, {
          highWaterMark: 0
        });
      }
      λ2664050c15f7.push(λ54cf838107ef.value), λc7c7d77dadd9 += λ54cf838107ef.value.byteLength, 
      λ3bd6ebfabae6.bytes += λ54cf838107ef.value.byteLength;
    }
  } catch (λ54cf838107ef) {
    throw _0x7e8643_5(), λefc4d5c16f51.cancel(λ54cf838107ef).catch(() => {}), λ54cf838107ef;
  }
}

export async function requestWithTransferRetry(λ54cf838107ef, {method: λ3bd6ebfabae6, body: λefc4d5c16f51, signal: λ2664050c15f7, budget: λc7c7d77dadd9}) {
  const λ3050f722a268 = /^(?:GET|HEAD)$/i.test(λ3bd6ebfabae6 || "\x47\x45\x54") && null == λefc4d5c16f51;
  for (let λ3bd6ebfabae6 = 0; ;λ3bd6ebfabae6++) {
    λ2664050c15f7?.throwIfAborted();
    try {
      const λ3bd6ebfabae6 = await λ54cf838107ef();
      return λ3050f722a268 && λ3bd6ebfabae6.body?.getReader && _0x7e8643_1(λ3bd6ebfabae6.headers) ? {
        ...λ3bd6ebfabae6,
        body: await _0x7e8643_2(λ3bd6ebfabae6.body, λc7c7d77dadd9)
      } : λ3bd6ebfabae6;
    } catch (λ54cf838107ef) {
      if (!λ3050f722a268 || λ3bd6ebfabae6 >= 1 || λ2664050c15f7?.aborted || !_0x7e8643_0(λ54cf838107ef)) throw λ54cf838107ef;
    }
  }
}
