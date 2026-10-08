export function preserveTransferErrors(λdc1902b86f70) {
  const λd85778b95a63 = λdc1902b86f70.stream_response;
  λdc1902b86f70.stream_response = function(λdc1902b86f70, λ5e817c2029c2, λ07ace2432448, λ201a071b2481) {
    let λ9bafc0230a4d;
    const λ38dce390e6ba = new Promise(λdc1902b86f70 => {
      λ9bafc0230a4d = λdc1902b86f70;
    });
    return λd85778b95a63.call(this, λdc1902b86f70, λdc1902b86f70 => {
      const λd85778b95a63 = λdc1902b86f70.getReader();
      λ5e817c2029c2(new ReadableStream({
        async pull(λdc1902b86f70) {
          try {
            const λ5e817c2029c2 = await λd85778b95a63.read();
            if (!λ5e817c2029c2.done) return void λdc1902b86f70.enqueue(λ5e817c2029c2.value);
            const λ07ace2432448 = await λ38dce390e6ba;
            if (-1 === λ07ace2432448 || λ201a071b2481?.aborted) throw λ201a071b2481?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λ07ace2432448) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λ07ace2432448}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x6c\x69\x62\x63\x75\x72\x6c\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λdc1902b86f70.close();
          } catch (λd85778b95a63) {
            λdc1902b86f70.error(λd85778b95a63);
          }
        },
        cancel: λdc1902b86f70 => λd85778b95a63.cancel(λdc1902b86f70)
      }, {
        highWaterMark: 0
      }));
    }, λdc1902b86f70 => {
      λ9bafc0230a4d(λdc1902b86f70), λ07ace2432448(λdc1902b86f70);
    }, λ201a071b2481);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λdc1902b86f70 => /\berror code (?:18|52|56|92)\b/i.test(String(λdc1902b86f70?.message || λdc1902b86f70)), _0x7e8643_1 = λdc1902b86f70 => λdc1902b86f70.some(([λdc1902b86f70, λd85778b95a63]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λdc1902b86f70.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λd85778b95a63).split("\x3b")[0].trim()));

async function _0x7e8643_2(λdc1902b86f70, λd85778b95a63) {
  const λ5e817c2029c2 = λdc1902b86f70.getReader(), λ07ace2432448 = [];
  let λ201a071b2481 = 0;
  const _0x7e8643_5 = () => {
    λd85778b95a63.bytes -= λ201a071b2481, λ201a071b2481 = 0, λ07ace2432448.length = 0;
  };
  try {
    for (;;) {
      const λdc1902b86f70 = await λ5e817c2029c2.read();
      if (λdc1902b86f70.done) {
        const λdc1902b86f70 = new Blob(λ07ace2432448).stream();
        return _0x7e8643_5(), λdc1902b86f70;
      }
      if (λ201a071b2481 + λdc1902b86f70.value.byteLength > 16777216 || λd85778b95a63.bytes + λdc1902b86f70.value.byteLength > 33554432) {
        let λ9bafc0230a4d = λdc1902b86f70.value;
        return new ReadableStream({
          async pull(λdc1902b86f70) {
            try {
              if (λ07ace2432448.length) {
                const λ5e817c2029c2 = λ07ace2432448.shift();
                return λ201a071b2481 -= λ5e817c2029c2.byteLength, λd85778b95a63.bytes -= λ5e817c2029c2.byteLength, 
                void λdc1902b86f70.enqueue(λ5e817c2029c2);
              }
              if (λ9bafc0230a4d) return λdc1902b86f70.enqueue(λ9bafc0230a4d), void (λ9bafc0230a4d = null);
              const λ38dce390e6ba = await λ5e817c2029c2.read();
              λ38dce390e6ba.done ? λdc1902b86f70.close() : λdc1902b86f70.enqueue(λ38dce390e6ba.value);
            } catch (λd85778b95a63) {
              _0x7e8643_5(), λdc1902b86f70.error(λd85778b95a63);
            }
          },
          cancel: λdc1902b86f70 => (_0x7e8643_5(), λ9bafc0230a4d = null, λ5e817c2029c2.cancel(λdc1902b86f70))
        }, {
          highWaterMark: 0
        });
      }
      λ07ace2432448.push(λdc1902b86f70.value), λ201a071b2481 += λdc1902b86f70.value.byteLength, 
      λd85778b95a63.bytes += λdc1902b86f70.value.byteLength;
    }
  } catch (λdc1902b86f70) {
    throw _0x7e8643_5(), λ5e817c2029c2.cancel(λdc1902b86f70).catch(() => {}), λdc1902b86f70;
  }
}

export async function requestWithTransferRetry(λdc1902b86f70, {method: λd85778b95a63, body: λ5e817c2029c2, signal: λ07ace2432448, budget: λ201a071b2481}) {
  const λ9bafc0230a4d = /^(?:GET|HEAD)$/i.test(λd85778b95a63 || "\x47\x45\x54") && null == λ5e817c2029c2;
  for (let λd85778b95a63 = 0; ;λd85778b95a63++) {
    λ07ace2432448?.throwIfAborted();
    try {
      const λd85778b95a63 = await λdc1902b86f70();
      return λ9bafc0230a4d && λd85778b95a63.body?.getReader && _0x7e8643_1(λd85778b95a63.headers) ? {
        ...λd85778b95a63,
        body: await _0x7e8643_2(λd85778b95a63.body, λ201a071b2481)
      } : λd85778b95a63;
    } catch (λdc1902b86f70) {
      if (!λ9bafc0230a4d || λd85778b95a63 >= 1 || λ07ace2432448?.aborted || !_0x7e8643_0(λdc1902b86f70)) throw λdc1902b86f70;
    }
  }
}
