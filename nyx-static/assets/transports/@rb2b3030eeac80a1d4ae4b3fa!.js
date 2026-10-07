export function preserveTransferErrors(λ93494524aca6) {
  const λda58a42e6320 = λ93494524aca6.stream_response;
  λ93494524aca6.stream_response = function(λ93494524aca6, λc62069f95299, λba5dbedabc83, λ7ed9c2d09e71) {
    let λb690eb8b4788;
    const λ0fc85a45edf7 = new Promise(λ93494524aca6 => {
      λb690eb8b4788 = λ93494524aca6;
    });
    return λda58a42e6320.call(this, λ93494524aca6, λ93494524aca6 => {
      const λda58a42e6320 = λ93494524aca6.getReader();
      λc62069f95299(new ReadableStream({
        async pull(λ93494524aca6) {
          try {
            const λc62069f95299 = await λda58a42e6320.read();
            if (!λc62069f95299.done) return void λ93494524aca6.enqueue(λc62069f95299.value);
            const λba5dbedabc83 = await λ0fc85a45edf7;
            if (-1 === λba5dbedabc83 || λ7ed9c2d09e71?.aborted) throw λ7ed9c2d09e71?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λba5dbedabc83) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λba5dbedabc83}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x6c\x69\x62\x63\x75\x72\x6c\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ93494524aca6.close();
          } catch (λda58a42e6320) {
            λ93494524aca6.error(λda58a42e6320);
          }
        },
        cancel: λ93494524aca6 => λda58a42e6320.cancel(λ93494524aca6)
      }, {
        highWaterMark: 0
      }));
    }, λ93494524aca6 => {
      λb690eb8b4788(λ93494524aca6), λba5dbedabc83(λ93494524aca6);
    }, λ7ed9c2d09e71);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λ93494524aca6 => /\berror code (?:18|52|56|92)\b/i.test(String(λ93494524aca6?.message || λ93494524aca6)), _0x7e8643_1 = λ93494524aca6 => λ93494524aca6.some(([λ93494524aca6, λda58a42e6320]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ93494524aca6.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λda58a42e6320).split("\x3b")[0].trim()));

async function _0x7e8643_2(λ93494524aca6, λda58a42e6320) {
  const λc62069f95299 = λ93494524aca6.getReader(), λba5dbedabc83 = [];
  let λ7ed9c2d09e71 = 0;
  const _0x7e8643_5 = () => {
    λda58a42e6320.bytes -= λ7ed9c2d09e71, λ7ed9c2d09e71 = 0, λba5dbedabc83.length = 0;
  };
  try {
    for (;;) {
      const λ93494524aca6 = await λc62069f95299.read();
      if (λ93494524aca6.done) {
        const λ93494524aca6 = new Blob(λba5dbedabc83).stream();
        return _0x7e8643_5(), λ93494524aca6;
      }
      if (λ7ed9c2d09e71 + λ93494524aca6.value.byteLength > 16777216 || λda58a42e6320.bytes + λ93494524aca6.value.byteLength > 33554432) {
        let λb690eb8b4788 = λ93494524aca6.value;
        return new ReadableStream({
          async pull(λ93494524aca6) {
            try {
              if (λba5dbedabc83.length) {
                const λc62069f95299 = λba5dbedabc83.shift();
                return λ7ed9c2d09e71 -= λc62069f95299.byteLength, λda58a42e6320.bytes -= λc62069f95299.byteLength, 
                void λ93494524aca6.enqueue(λc62069f95299);
              }
              if (λb690eb8b4788) return λ93494524aca6.enqueue(λb690eb8b4788), void (λb690eb8b4788 = null);
              const λ0fc85a45edf7 = await λc62069f95299.read();
              λ0fc85a45edf7.done ? λ93494524aca6.close() : λ93494524aca6.enqueue(λ0fc85a45edf7.value);
            } catch (λda58a42e6320) {
              _0x7e8643_5(), λ93494524aca6.error(λda58a42e6320);
            }
          },
          cancel: λ93494524aca6 => (_0x7e8643_5(), λb690eb8b4788 = null, λc62069f95299.cancel(λ93494524aca6))
        }, {
          highWaterMark: 0
        });
      }
      λba5dbedabc83.push(λ93494524aca6.value), λ7ed9c2d09e71 += λ93494524aca6.value.byteLength, 
      λda58a42e6320.bytes += λ93494524aca6.value.byteLength;
    }
  } catch (λ93494524aca6) {
    throw _0x7e8643_5(), λc62069f95299.cancel(λ93494524aca6).catch(() => {}), λ93494524aca6;
  }
}

export async function requestWithTransferRetry(λ93494524aca6, {method: λda58a42e6320, body: λc62069f95299, signal: λba5dbedabc83, budget: λ7ed9c2d09e71}) {
  const λb690eb8b4788 = /^(?:GET|HEAD)$/i.test(λda58a42e6320 || "\x47\x45\x54") && null == λc62069f95299;
  for (let λda58a42e6320 = 0; ;λda58a42e6320++) {
    λba5dbedabc83?.throwIfAborted();
    try {
      const λda58a42e6320 = await λ93494524aca6();
      return λb690eb8b4788 && λda58a42e6320.body?.getReader && _0x7e8643_1(λda58a42e6320.headers) ? {
        ...λda58a42e6320,
        body: await _0x7e8643_2(λda58a42e6320.body, λ7ed9c2d09e71)
      } : λda58a42e6320;
    } catch (λ93494524aca6) {
      if (!λb690eb8b4788 || λda58a42e6320 >= 1 || λba5dbedabc83?.aborted || !_0x7e8643_0(λ93494524aca6)) throw λ93494524aca6;
    }
  }
}
