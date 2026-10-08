export function preserveTransferErrors(λ9ace646db5fa) {
  const λc02d2064ba7a = λ9ace646db5fa.stream_response;
  λ9ace646db5fa.stream_response = function(λ9ace646db5fa, λ49f4ab1cc92c, λ112d8b093d40, λ0d7a2cd0d2c9) {
    let λcd5fd46df836;
    const λ3b595d195697 = new Promise(λ9ace646db5fa => {
      λcd5fd46df836 = λ9ace646db5fa;
    });
    return λc02d2064ba7a.call(this, λ9ace646db5fa, λ9ace646db5fa => {
      const λc02d2064ba7a = λ9ace646db5fa.getReader();
      λ49f4ab1cc92c(new ReadableStream({
        async pull(λ9ace646db5fa) {
          try {
            const λ49f4ab1cc92c = await λc02d2064ba7a.read();
            if (!λ49f4ab1cc92c.done) return void λ9ace646db5fa.enqueue(λ49f4ab1cc92c.value);
            const λ112d8b093d40 = await λ3b595d195697;
            if (-1 === λ112d8b093d40 || λ0d7a2cd0d2c9?.aborted) throw λ0d7a2cd0d2c9?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λ112d8b093d40) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λ112d8b093d40}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x6c\x69\x62\x63\x75\x72\x6c\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ9ace646db5fa.close();
          } catch (λc02d2064ba7a) {
            λ9ace646db5fa.error(λc02d2064ba7a);
          }
        },
        cancel: λ9ace646db5fa => λc02d2064ba7a.cancel(λ9ace646db5fa)
      }, {
        highWaterMark: 0
      }));
    }, λ9ace646db5fa => {
      λcd5fd46df836(λ9ace646db5fa), λ112d8b093d40(λ9ace646db5fa);
    }, λ0d7a2cd0d2c9);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λ9ace646db5fa => /\berror code (?:18|52|56|92)\b/i.test(String(λ9ace646db5fa?.message || λ9ace646db5fa)), _0x7e8643_1 = λ9ace646db5fa => λ9ace646db5fa.some(([λ9ace646db5fa, λc02d2064ba7a]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ9ace646db5fa.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λc02d2064ba7a).split("\x3b")[0].trim()));

async function _0x7e8643_2(λ9ace646db5fa, λc02d2064ba7a) {
  const λ49f4ab1cc92c = λ9ace646db5fa.getReader(), λ112d8b093d40 = [];
  let λ0d7a2cd0d2c9 = 0;
  const _0x7e8643_5 = () => {
    λc02d2064ba7a.bytes -= λ0d7a2cd0d2c9, λ0d7a2cd0d2c9 = 0, λ112d8b093d40.length = 0;
  };
  try {
    for (;;) {
      const λ9ace646db5fa = await λ49f4ab1cc92c.read();
      if (λ9ace646db5fa.done) {
        const λ9ace646db5fa = new Blob(λ112d8b093d40).stream();
        return _0x7e8643_5(), λ9ace646db5fa;
      }
      if (λ0d7a2cd0d2c9 + λ9ace646db5fa.value.byteLength > 16777216 || λc02d2064ba7a.bytes + λ9ace646db5fa.value.byteLength > 33554432) {
        let λcd5fd46df836 = λ9ace646db5fa.value;
        return new ReadableStream({
          async pull(λ9ace646db5fa) {
            try {
              if (λ112d8b093d40.length) {
                const λ49f4ab1cc92c = λ112d8b093d40.shift();
                return λ0d7a2cd0d2c9 -= λ49f4ab1cc92c.byteLength, λc02d2064ba7a.bytes -= λ49f4ab1cc92c.byteLength, 
                void λ9ace646db5fa.enqueue(λ49f4ab1cc92c);
              }
              if (λcd5fd46df836) return λ9ace646db5fa.enqueue(λcd5fd46df836), void (λcd5fd46df836 = null);
              const λ3b595d195697 = await λ49f4ab1cc92c.read();
              λ3b595d195697.done ? λ9ace646db5fa.close() : λ9ace646db5fa.enqueue(λ3b595d195697.value);
            } catch (λc02d2064ba7a) {
              _0x7e8643_5(), λ9ace646db5fa.error(λc02d2064ba7a);
            }
          },
          cancel: λ9ace646db5fa => (_0x7e8643_5(), λcd5fd46df836 = null, λ49f4ab1cc92c.cancel(λ9ace646db5fa))
        }, {
          highWaterMark: 0
        });
      }
      λ112d8b093d40.push(λ9ace646db5fa.value), λ0d7a2cd0d2c9 += λ9ace646db5fa.value.byteLength, 
      λc02d2064ba7a.bytes += λ9ace646db5fa.value.byteLength;
    }
  } catch (λ9ace646db5fa) {
    throw _0x7e8643_5(), λ49f4ab1cc92c.cancel(λ9ace646db5fa).catch(() => {}), λ9ace646db5fa;
  }
}

export async function requestWithTransferRetry(λ9ace646db5fa, {method: λc02d2064ba7a, body: λ49f4ab1cc92c, signal: λ112d8b093d40, budget: λ0d7a2cd0d2c9}) {
  const λcd5fd46df836 = /^(?:GET|HEAD)$/i.test(λc02d2064ba7a || "\x47\x45\x54") && null == λ49f4ab1cc92c;
  for (let λc02d2064ba7a = 0; ;λc02d2064ba7a++) {
    λ112d8b093d40?.throwIfAborted();
    try {
      const λc02d2064ba7a = await λ9ace646db5fa();
      return λcd5fd46df836 && λc02d2064ba7a.body?.getReader && _0x7e8643_1(λc02d2064ba7a.headers) ? {
        ...λc02d2064ba7a,
        body: await _0x7e8643_2(λc02d2064ba7a.body, λ0d7a2cd0d2c9)
      } : λc02d2064ba7a;
    } catch (λ9ace646db5fa) {
      if (!λcd5fd46df836 || λc02d2064ba7a >= 1 || λ112d8b093d40?.aborted || !_0x7e8643_0(λ9ace646db5fa)) throw λ9ace646db5fa;
    }
  }
}
