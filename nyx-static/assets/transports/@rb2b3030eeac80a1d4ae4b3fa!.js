export function preserveTransferErrors(λ95bd100aad35) {
  const λc28d97ebe290 = λ95bd100aad35.stream_response;
  λ95bd100aad35.stream_response = function(λ95bd100aad35, λ8a444580a71e, λf790146e9571, λ49d63f0e3208) {
    let λbad0c19c533e;
    const λ957aab1c8e8c = new Promise(λ95bd100aad35 => {
      λbad0c19c533e = λ95bd100aad35;
    });
    return λc28d97ebe290.call(this, λ95bd100aad35, λ95bd100aad35 => {
      const λc28d97ebe290 = λ95bd100aad35.getReader();
      λ8a444580a71e(new ReadableStream({
        async pull(λ95bd100aad35) {
          try {
            const λ8a444580a71e = await λc28d97ebe290.read();
            if (!λ8a444580a71e.done) return void λ95bd100aad35.enqueue(λ8a444580a71e.value);
            const λf790146e9571 = await λ957aab1c8e8c;
            if (-1 === λf790146e9571 || λ49d63f0e3208?.aborted) throw λ49d63f0e3208?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λf790146e9571) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λf790146e9571}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x6c\x69\x62\x63\x75\x72\x6c\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ95bd100aad35.close();
          } catch (λc28d97ebe290) {
            λ95bd100aad35.error(λc28d97ebe290);
          }
        },
        cancel: λ95bd100aad35 => λc28d97ebe290.cancel(λ95bd100aad35)
      }, {
        highWaterMark: 0
      }));
    }, λ95bd100aad35 => {
      λbad0c19c533e(λ95bd100aad35), λf790146e9571(λ95bd100aad35);
    }, λ49d63f0e3208);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λ95bd100aad35 => /\berror code (?:18|52|56|92)\b/i.test(String(λ95bd100aad35?.message || λ95bd100aad35)), _0x7e8643_1 = λ95bd100aad35 => λ95bd100aad35.some(([λ95bd100aad35, λc28d97ebe290]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ95bd100aad35.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λc28d97ebe290).split("\x3b")[0].trim()));

async function _0x7e8643_2(λ95bd100aad35, λc28d97ebe290) {
  const λ8a444580a71e = λ95bd100aad35.getReader(), λf790146e9571 = [];
  let λ49d63f0e3208 = 0;
  const _0x7e8643_5 = () => {
    λc28d97ebe290.bytes -= λ49d63f0e3208, λ49d63f0e3208 = 0, λf790146e9571.length = 0;
  };
  try {
    for (;;) {
      const λ95bd100aad35 = await λ8a444580a71e.read();
      if (λ95bd100aad35.done) {
        const λ95bd100aad35 = new Blob(λf790146e9571).stream();
        return _0x7e8643_5(), λ95bd100aad35;
      }
      if (λ49d63f0e3208 + λ95bd100aad35.value.byteLength > 16777216 || λc28d97ebe290.bytes + λ95bd100aad35.value.byteLength > 33554432) {
        let λbad0c19c533e = λ95bd100aad35.value;
        return new ReadableStream({
          async pull(λ95bd100aad35) {
            try {
              if (λf790146e9571.length) {
                const λ8a444580a71e = λf790146e9571.shift();
                return λ49d63f0e3208 -= λ8a444580a71e.byteLength, λc28d97ebe290.bytes -= λ8a444580a71e.byteLength, 
                void λ95bd100aad35.enqueue(λ8a444580a71e);
              }
              if (λbad0c19c533e) return λ95bd100aad35.enqueue(λbad0c19c533e), void (λbad0c19c533e = null);
              const λ957aab1c8e8c = await λ8a444580a71e.read();
              λ957aab1c8e8c.done ? λ95bd100aad35.close() : λ95bd100aad35.enqueue(λ957aab1c8e8c.value);
            } catch (λc28d97ebe290) {
              _0x7e8643_5(), λ95bd100aad35.error(λc28d97ebe290);
            }
          },
          cancel: λ95bd100aad35 => (_0x7e8643_5(), λbad0c19c533e = null, λ8a444580a71e.cancel(λ95bd100aad35))
        }, {
          highWaterMark: 0
        });
      }
      λf790146e9571.push(λ95bd100aad35.value), λ49d63f0e3208 += λ95bd100aad35.value.byteLength, 
      λc28d97ebe290.bytes += λ95bd100aad35.value.byteLength;
    }
  } catch (λ95bd100aad35) {
    throw _0x7e8643_5(), λ8a444580a71e.cancel(λ95bd100aad35).catch(() => {}), λ95bd100aad35;
  }
}

export async function requestWithTransferRetry(λ95bd100aad35, {method: λc28d97ebe290, body: λ8a444580a71e, signal: λf790146e9571, budget: λ49d63f0e3208}) {
  const λbad0c19c533e = /^(?:GET|HEAD)$/i.test(λc28d97ebe290 || "\x47\x45\x54") && null == λ8a444580a71e;
  for (let λc28d97ebe290 = 0; ;λc28d97ebe290++) {
    λf790146e9571?.throwIfAborted();
    try {
      const λc28d97ebe290 = await λ95bd100aad35();
      return λbad0c19c533e && λc28d97ebe290.body?.getReader && _0x7e8643_1(λc28d97ebe290.headers) ? {
        ...λc28d97ebe290,
        body: await _0x7e8643_2(λc28d97ebe290.body, λ49d63f0e3208)
      } : λc28d97ebe290;
    } catch (λ95bd100aad35) {
      if (!λbad0c19c533e || λc28d97ebe290 >= 1 || λf790146e9571?.aborted || !_0x7e8643_0(λ95bd100aad35)) throw λ95bd100aad35;
    }
  }
}
