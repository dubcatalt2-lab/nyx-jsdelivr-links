export function preserveTransferErrors(λd9612ea839aa) {
  const λfd026359853c = λd9612ea839aa.stream_response;
  λd9612ea839aa.stream_response = function(λd9612ea839aa, λef2290d4237c, λ3939f3a3bdd7, λbfbd407ca309) {
    let λ2891bebb256b;
    const λ995192e3d9e6 = new Promise(λd9612ea839aa => {
      λ2891bebb256b = λd9612ea839aa;
    });
    return λfd026359853c.call(this, λd9612ea839aa, λd9612ea839aa => {
      const λfd026359853c = λd9612ea839aa.getReader();
      λef2290d4237c(new ReadableStream({
        async pull(λd9612ea839aa) {
          try {
            const λef2290d4237c = await λfd026359853c.read();
            if (!λef2290d4237c.done) return void λd9612ea839aa.enqueue(λef2290d4237c.value);
            const λ3939f3a3bdd7 = await λ995192e3d9e6;
            if (-1 === λ3939f3a3bdd7 || λbfbd407ca309?.aborted) throw λbfbd407ca309?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λ3939f3a3bdd7) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λ3939f3a3bdd7}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x74\x65\x78\x74\x6c\x69\x62\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λd9612ea839aa.close();
          } catch (λfd026359853c) {
            λd9612ea839aa.error(λfd026359853c);
          }
        },
        cancel: λd9612ea839aa => λfd026359853c.cancel(λd9612ea839aa)
      }, {
        highWaterMark: 0
      }));
    }, λd9612ea839aa => {
      λ2891bebb256b(λd9612ea839aa), λ3939f3a3bdd7(λd9612ea839aa);
    }, λbfbd407ca309);
  };
}

export const bufferLimit = 33554432;

const _0xeb3350_7 = λd9612ea839aa => /\berror code (?:18|52|56|92)\b/i.test(String(λd9612ea839aa?.message || λd9612ea839aa)), _0x7e8643_0 = λd9612ea839aa => λd9612ea839aa.some(([λd9612ea839aa, λfd026359853c]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λd9612ea839aa.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λfd026359853c).split("\x3b")[0].trim()));

async function _0x7e8643_1(λd9612ea839aa, λfd026359853c) {
  const λef2290d4237c = λd9612ea839aa.getReader(), λ3939f3a3bdd7 = [];
  let λbfbd407ca309 = 0;
  const _0x7e8643_5 = () => {
    λfd026359853c.bytes -= λbfbd407ca309, λbfbd407ca309 = 0, λ3939f3a3bdd7.length = 0;
  };
  try {
    for (;;) {
      const λd9612ea839aa = await λef2290d4237c.read();
      if (λd9612ea839aa.done) {
        const λd9612ea839aa = new Blob(λ3939f3a3bdd7).stream();
        return _0x7e8643_5(), λd9612ea839aa;
      }
      if (λbfbd407ca309 + λd9612ea839aa.value.byteLength > 16777216 || λfd026359853c.bytes + λd9612ea839aa.value.byteLength > 33554432) {
        let λ2891bebb256b = λd9612ea839aa.value;
        return new ReadableStream({
          async pull(λd9612ea839aa) {
            try {
              if (λ3939f3a3bdd7.length) {
                const λef2290d4237c = λ3939f3a3bdd7.shift();
                return λbfbd407ca309 -= λef2290d4237c.byteLength, λfd026359853c.bytes -= λef2290d4237c.byteLength, 
                void λd9612ea839aa.enqueue(λef2290d4237c);
              }
              if (λ2891bebb256b) return λd9612ea839aa.enqueue(λ2891bebb256b), void (λ2891bebb256b = null);
              const λ995192e3d9e6 = await λef2290d4237c.read();
              λ995192e3d9e6.done ? λd9612ea839aa.close() : λd9612ea839aa.enqueue(λ995192e3d9e6.value);
            } catch (λfd026359853c) {
              _0x7e8643_5(), λd9612ea839aa.error(λfd026359853c);
            }
          },
          cancel: λd9612ea839aa => (_0x7e8643_5(), λ2891bebb256b = null, λef2290d4237c.cancel(λd9612ea839aa))
        }, {
          highWaterMark: 0
        });
      }
      λ3939f3a3bdd7.push(λd9612ea839aa.value), λbfbd407ca309 += λd9612ea839aa.value.byteLength, 
      λfd026359853c.bytes += λd9612ea839aa.value.byteLength;
    }
  } catch (λd9612ea839aa) {
    throw _0x7e8643_5(), λef2290d4237c.cancel(λd9612ea839aa).catch(() => {}), λd9612ea839aa;
  }
}

export async function requestWithTransferRetry(λd9612ea839aa, {method: λfd026359853c, body: λef2290d4237c, signal: λ3939f3a3bdd7, budget: λbfbd407ca309}) {
  const λ2891bebb256b = /^(?:GET|HEAD)$/i.test(λfd026359853c || "\x47\x45\x54") && null == λef2290d4237c;
  for (let λfd026359853c = 0; ;λfd026359853c++) {
    λ3939f3a3bdd7?.throwIfAborted();
    try {
      const λfd026359853c = await λd9612ea839aa();
      return λ2891bebb256b && λfd026359853c.body?.getReader && _0x7e8643_0(λfd026359853c.headers) ? {
        ...λfd026359853c,
        body: await _0x7e8643_1(λfd026359853c.body, λbfbd407ca309)
      } : λfd026359853c;
    } catch (λd9612ea839aa) {
      if (!λ2891bebb256b || λfd026359853c >= 1 || λ3939f3a3bdd7?.aborted || !_0xeb3350_7(λd9612ea839aa)) throw λd9612ea839aa;
    }
  }
}
