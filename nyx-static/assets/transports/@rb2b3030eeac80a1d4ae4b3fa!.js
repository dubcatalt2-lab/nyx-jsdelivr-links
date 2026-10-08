export function preserveTransferErrors(λc46e4336c4c1) {
  const λef2b99e0e433 = λc46e4336c4c1.stream_response;
  λc46e4336c4c1.stream_response = function(λc46e4336c4c1, λ1d1a8cd26cce, λ13e11fd47b7b, λa6494d24621d) {
    let λ7dc620aba40a;
    const λefef75782147 = new Promise(λc46e4336c4c1 => {
      λ7dc620aba40a = λc46e4336c4c1;
    });
    return λef2b99e0e433.call(this, λc46e4336c4c1, λc46e4336c4c1 => {
      const λef2b99e0e433 = λc46e4336c4c1.getReader();
      λ1d1a8cd26cce(new ReadableStream({
        async pull(λc46e4336c4c1) {
          try {
            const λ1d1a8cd26cce = await λef2b99e0e433.read();
            if (!λ1d1a8cd26cce.done) return void λc46e4336c4c1.enqueue(λ1d1a8cd26cce.value);
            const λ13e11fd47b7b = await λefef75782147;
            if (-1 === λ13e11fd47b7b || λa6494d24621d?.aborted) throw λa6494d24621d?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λ13e11fd47b7b) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λ13e11fd47b7b}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x6c\x69\x62\x63\x75\x72\x6c\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λc46e4336c4c1.close();
          } catch (λef2b99e0e433) {
            λc46e4336c4c1.error(λef2b99e0e433);
          }
        },
        cancel: λc46e4336c4c1 => λef2b99e0e433.cancel(λc46e4336c4c1)
      }, {
        highWaterMark: 0
      }));
    }, λc46e4336c4c1 => {
      λ7dc620aba40a(λc46e4336c4c1), λ13e11fd47b7b(λc46e4336c4c1);
    }, λa6494d24621d);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λc46e4336c4c1 => /\berror code (?:18|52|56|92)\b/i.test(String(λc46e4336c4c1?.message || λc46e4336c4c1)), _0x7e8643_1 = λc46e4336c4c1 => λc46e4336c4c1.some(([λc46e4336c4c1, λef2b99e0e433]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λc46e4336c4c1.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λef2b99e0e433).split("\x3b")[0].trim()));

async function _0x7e8643_2(λc46e4336c4c1, λef2b99e0e433) {
  const λ1d1a8cd26cce = λc46e4336c4c1.getReader(), λ13e11fd47b7b = [];
  let λa6494d24621d = 0;
  const _0x7e8643_5 = () => {
    λef2b99e0e433.bytes -= λa6494d24621d, λa6494d24621d = 0, λ13e11fd47b7b.length = 0;
  };
  try {
    for (;;) {
      const λc46e4336c4c1 = await λ1d1a8cd26cce.read();
      if (λc46e4336c4c1.done) {
        const λc46e4336c4c1 = new Blob(λ13e11fd47b7b).stream();
        return _0x7e8643_5(), λc46e4336c4c1;
      }
      if (λa6494d24621d + λc46e4336c4c1.value.byteLength > 16777216 || λef2b99e0e433.bytes + λc46e4336c4c1.value.byteLength > 33554432) {
        let λ7dc620aba40a = λc46e4336c4c1.value;
        return new ReadableStream({
          async pull(λc46e4336c4c1) {
            try {
              if (λ13e11fd47b7b.length) {
                const λ1d1a8cd26cce = λ13e11fd47b7b.shift();
                return λa6494d24621d -= λ1d1a8cd26cce.byteLength, λef2b99e0e433.bytes -= λ1d1a8cd26cce.byteLength, 
                void λc46e4336c4c1.enqueue(λ1d1a8cd26cce);
              }
              if (λ7dc620aba40a) return λc46e4336c4c1.enqueue(λ7dc620aba40a), void (λ7dc620aba40a = null);
              const λefef75782147 = await λ1d1a8cd26cce.read();
              λefef75782147.done ? λc46e4336c4c1.close() : λc46e4336c4c1.enqueue(λefef75782147.value);
            } catch (λef2b99e0e433) {
              _0x7e8643_5(), λc46e4336c4c1.error(λef2b99e0e433);
            }
          },
          cancel: λc46e4336c4c1 => (_0x7e8643_5(), λ7dc620aba40a = null, λ1d1a8cd26cce.cancel(λc46e4336c4c1))
        }, {
          highWaterMark: 0
        });
      }
      λ13e11fd47b7b.push(λc46e4336c4c1.value), λa6494d24621d += λc46e4336c4c1.value.byteLength, 
      λef2b99e0e433.bytes += λc46e4336c4c1.value.byteLength;
    }
  } catch (λc46e4336c4c1) {
    throw _0x7e8643_5(), λ1d1a8cd26cce.cancel(λc46e4336c4c1).catch(() => {}), λc46e4336c4c1;
  }
}

export async function requestWithTransferRetry(λc46e4336c4c1, {method: λef2b99e0e433, body: λ1d1a8cd26cce, signal: λ13e11fd47b7b, budget: λa6494d24621d}) {
  const λ7dc620aba40a = /^(?:GET|HEAD)$/i.test(λef2b99e0e433 || "\x47\x45\x54") && null == λ1d1a8cd26cce;
  for (let λef2b99e0e433 = 0; ;λef2b99e0e433++) {
    λ13e11fd47b7b?.throwIfAborted();
    try {
      const λef2b99e0e433 = await λc46e4336c4c1();
      return λ7dc620aba40a && λef2b99e0e433.body?.getReader && _0x7e8643_1(λef2b99e0e433.headers) ? {
        ...λef2b99e0e433,
        body: await _0x7e8643_2(λef2b99e0e433.body, λa6494d24621d)
      } : λef2b99e0e433;
    } catch (λc46e4336c4c1) {
      if (!λ7dc620aba40a || λef2b99e0e433 >= 1 || λ13e11fd47b7b?.aborted || !_0x7e8643_0(λc46e4336c4c1)) throw λc46e4336c4c1;
    }
  }
}
