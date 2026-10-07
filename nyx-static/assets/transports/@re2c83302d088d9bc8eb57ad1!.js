export function preserveTransferErrors(λ23775c96bfea) {
  const λ2f119c36a786 = λ23775c96bfea.stream_response;
  λ23775c96bfea.stream_response = function(λ23775c96bfea, λ1f47f57dea91, λ14eb690bfd6a, λ541b93538f38) {
    let λ6a13e833072c;
    const λ75671df8d322 = new Promise(λ23775c96bfea => {
      λ6a13e833072c = λ23775c96bfea;
    });
    return λ2f119c36a786.call(this, λ23775c96bfea, λ23775c96bfea => {
      const λ2f119c36a786 = λ23775c96bfea.getReader();
      λ1f47f57dea91(new ReadableStream({
        async pull(λ23775c96bfea) {
          try {
            const λ1f47f57dea91 = await λ2f119c36a786.read();
            if (!λ1f47f57dea91.done) return void λ23775c96bfea.enqueue(λ1f47f57dea91.value);
            const λ14eb690bfd6a = await λ75671df8d322;
            if (-1 === λ14eb690bfd6a || λ541b93538f38?.aborted) throw λ541b93538f38?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λ14eb690bfd6a) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λ14eb690bfd6a}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x74\x65\x78\x74\x6c\x69\x62\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ23775c96bfea.close();
          } catch (λ2f119c36a786) {
            λ23775c96bfea.error(λ2f119c36a786);
          }
        },
        cancel: λ23775c96bfea => λ2f119c36a786.cancel(λ23775c96bfea)
      }, {
        highWaterMark: 0
      }));
    }, λ23775c96bfea => {
      λ6a13e833072c(λ23775c96bfea), λ14eb690bfd6a(λ23775c96bfea);
    }, λ541b93538f38);
  };
}

export const bufferLimit = 33554432;

const _0xeb3350_7 = λ23775c96bfea => /\berror code (?:18|52|56|92)\b/i.test(String(λ23775c96bfea?.message || λ23775c96bfea)), _0x7e8643_0 = λ23775c96bfea => λ23775c96bfea.some(([λ23775c96bfea, λ2f119c36a786]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ23775c96bfea.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ2f119c36a786).split("\x3b")[0].trim()));

async function _0x7e8643_1(λ23775c96bfea, λ2f119c36a786) {
  const λ1f47f57dea91 = λ23775c96bfea.getReader(), λ14eb690bfd6a = [];
  let λ541b93538f38 = 0;
  const _0x7e8643_5 = () => {
    λ2f119c36a786.bytes -= λ541b93538f38, λ541b93538f38 = 0, λ14eb690bfd6a.length = 0;
  };
  try {
    for (;;) {
      const λ23775c96bfea = await λ1f47f57dea91.read();
      if (λ23775c96bfea.done) {
        const λ23775c96bfea = new Blob(λ14eb690bfd6a).stream();
        return _0x7e8643_5(), λ23775c96bfea;
      }
      if (λ541b93538f38 + λ23775c96bfea.value.byteLength > 16777216 || λ2f119c36a786.bytes + λ23775c96bfea.value.byteLength > 33554432) {
        let λ6a13e833072c = λ23775c96bfea.value;
        return new ReadableStream({
          async pull(λ23775c96bfea) {
            try {
              if (λ14eb690bfd6a.length) {
                const λ1f47f57dea91 = λ14eb690bfd6a.shift();
                return λ541b93538f38 -= λ1f47f57dea91.byteLength, λ2f119c36a786.bytes -= λ1f47f57dea91.byteLength, 
                void λ23775c96bfea.enqueue(λ1f47f57dea91);
              }
              if (λ6a13e833072c) return λ23775c96bfea.enqueue(λ6a13e833072c), void (λ6a13e833072c = null);
              const λ75671df8d322 = await λ1f47f57dea91.read();
              λ75671df8d322.done ? λ23775c96bfea.close() : λ23775c96bfea.enqueue(λ75671df8d322.value);
            } catch (λ2f119c36a786) {
              _0x7e8643_5(), λ23775c96bfea.error(λ2f119c36a786);
            }
          },
          cancel: λ23775c96bfea => (_0x7e8643_5(), λ6a13e833072c = null, λ1f47f57dea91.cancel(λ23775c96bfea))
        }, {
          highWaterMark: 0
        });
      }
      λ14eb690bfd6a.push(λ23775c96bfea.value), λ541b93538f38 += λ23775c96bfea.value.byteLength, 
      λ2f119c36a786.bytes += λ23775c96bfea.value.byteLength;
    }
  } catch (λ23775c96bfea) {
    throw _0x7e8643_5(), λ1f47f57dea91.cancel(λ23775c96bfea).catch(() => {}), λ23775c96bfea;
  }
}

export async function requestWithTransferRetry(λ23775c96bfea, {method: λ2f119c36a786, body: λ1f47f57dea91, signal: λ14eb690bfd6a, budget: λ541b93538f38}) {
  const λ6a13e833072c = /^(?:GET|HEAD)$/i.test(λ2f119c36a786 || "\x47\x45\x54") && null == λ1f47f57dea91;
  for (let λ2f119c36a786 = 0; ;λ2f119c36a786++) {
    λ14eb690bfd6a?.throwIfAborted();
    try {
      const λ2f119c36a786 = await λ23775c96bfea();
      return λ6a13e833072c && λ2f119c36a786.body?.getReader && _0x7e8643_0(λ2f119c36a786.headers) ? {
        ...λ2f119c36a786,
        body: await _0x7e8643_1(λ2f119c36a786.body, λ541b93538f38)
      } : λ2f119c36a786;
    } catch (λ23775c96bfea) {
      if (!λ6a13e833072c || λ2f119c36a786 >= 1 || λ14eb690bfd6a?.aborted || !_0xeb3350_7(λ23775c96bfea)) throw λ23775c96bfea;
    }
  }
}
