export function preserveTransferErrors(λ112de7fa21f5) {
  const λ5e0a64e67071 = λ112de7fa21f5.stream_response;
  λ112de7fa21f5.stream_response = function(λ112de7fa21f5, λb3da00ac2ae3, λ5599d6bcf36a, λb686648ec5b2) {
    let λ7f68f5278d32;
    const λ7b1d5610a2a2 = new Promise(λ112de7fa21f5 => {
      λ7f68f5278d32 = λ112de7fa21f5;
    });
    return λ5e0a64e67071.call(this, λ112de7fa21f5, λ112de7fa21f5 => {
      const λ5e0a64e67071 = λ112de7fa21f5.getReader();
      λb3da00ac2ae3(new ReadableStream({
        async pull(λ112de7fa21f5) {
          try {
            const λb3da00ac2ae3 = await λ5e0a64e67071.read();
            if (!λb3da00ac2ae3.done) return void λ112de7fa21f5.enqueue(λb3da00ac2ae3.value);
            const λ5599d6bcf36a = await λ7b1d5610a2a2;
            if (-1 === λ5599d6bcf36a || λb686648ec5b2?.aborted) throw λb686648ec5b2?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λ5599d6bcf36a) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λ5599d6bcf36a}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x6c\x69\x62\x63\x75\x72\x6c\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ112de7fa21f5.close();
          } catch (λ5e0a64e67071) {
            λ112de7fa21f5.error(λ5e0a64e67071);
          }
        },
        cancel: λ112de7fa21f5 => λ5e0a64e67071.cancel(λ112de7fa21f5)
      }, {
        highWaterMark: 0
      }));
    }, λ112de7fa21f5 => {
      λ7f68f5278d32(λ112de7fa21f5), λ5599d6bcf36a(λ112de7fa21f5);
    }, λb686648ec5b2);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λ112de7fa21f5 => /\berror code (?:18|52|56|92)\b/i.test(String(λ112de7fa21f5?.message || λ112de7fa21f5)), _0x7e8643_1 = λ112de7fa21f5 => λ112de7fa21f5.some(([λ112de7fa21f5, λ5e0a64e67071]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ112de7fa21f5.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ5e0a64e67071).split("\x3b")[0].trim()));

async function _0x7e8643_2(λ112de7fa21f5, λ5e0a64e67071) {
  const λb3da00ac2ae3 = λ112de7fa21f5.getReader(), λ5599d6bcf36a = [];
  let λb686648ec5b2 = 0;
  const _0x7e8643_5 = () => {
    λ5e0a64e67071.bytes -= λb686648ec5b2, λb686648ec5b2 = 0, λ5599d6bcf36a.length = 0;
  };
  try {
    for (;;) {
      const λ112de7fa21f5 = await λb3da00ac2ae3.read();
      if (λ112de7fa21f5.done) {
        const λ112de7fa21f5 = new Blob(λ5599d6bcf36a).stream();
        return _0x7e8643_5(), λ112de7fa21f5;
      }
      if (λb686648ec5b2 + λ112de7fa21f5.value.byteLength > 16777216 || λ5e0a64e67071.bytes + λ112de7fa21f5.value.byteLength > 33554432) {
        let λ7f68f5278d32 = λ112de7fa21f5.value;
        return new ReadableStream({
          async pull(λ112de7fa21f5) {
            try {
              if (λ5599d6bcf36a.length) {
                const λb3da00ac2ae3 = λ5599d6bcf36a.shift();
                return λb686648ec5b2 -= λb3da00ac2ae3.byteLength, λ5e0a64e67071.bytes -= λb3da00ac2ae3.byteLength, 
                void λ112de7fa21f5.enqueue(λb3da00ac2ae3);
              }
              if (λ7f68f5278d32) return λ112de7fa21f5.enqueue(λ7f68f5278d32), void (λ7f68f5278d32 = null);
              const λ7b1d5610a2a2 = await λb3da00ac2ae3.read();
              λ7b1d5610a2a2.done ? λ112de7fa21f5.close() : λ112de7fa21f5.enqueue(λ7b1d5610a2a2.value);
            } catch (λ5e0a64e67071) {
              _0x7e8643_5(), λ112de7fa21f5.error(λ5e0a64e67071);
            }
          },
          cancel: λ112de7fa21f5 => (_0x7e8643_5(), λ7f68f5278d32 = null, λb3da00ac2ae3.cancel(λ112de7fa21f5))
        }, {
          highWaterMark: 0
        });
      }
      λ5599d6bcf36a.push(λ112de7fa21f5.value), λb686648ec5b2 += λ112de7fa21f5.value.byteLength, 
      λ5e0a64e67071.bytes += λ112de7fa21f5.value.byteLength;
    }
  } catch (λ112de7fa21f5) {
    throw _0x7e8643_5(), λb3da00ac2ae3.cancel(λ112de7fa21f5).catch(() => {}), λ112de7fa21f5;
  }
}

export async function requestWithTransferRetry(λ112de7fa21f5, {method: λ5e0a64e67071, body: λb3da00ac2ae3, signal: λ5599d6bcf36a, budget: λb686648ec5b2}) {
  const λ7f68f5278d32 = /^(?:GET|HEAD)$/i.test(λ5e0a64e67071 || "\x47\x45\x54") && null == λb3da00ac2ae3;
  for (let λ5e0a64e67071 = 0; ;λ5e0a64e67071++) {
    λ5599d6bcf36a?.throwIfAborted();
    try {
      const λ5e0a64e67071 = await λ112de7fa21f5();
      return λ7f68f5278d32 && λ5e0a64e67071.body?.getReader && _0x7e8643_1(λ5e0a64e67071.headers) ? {
        ...λ5e0a64e67071,
        body: await _0x7e8643_2(λ5e0a64e67071.body, λb686648ec5b2)
      } : λ5e0a64e67071;
    } catch (λ112de7fa21f5) {
      if (!λ7f68f5278d32 || λ5e0a64e67071 >= 1 || λ5599d6bcf36a?.aborted || !_0x7e8643_0(λ112de7fa21f5)) throw λ112de7fa21f5;
    }
  }
}
