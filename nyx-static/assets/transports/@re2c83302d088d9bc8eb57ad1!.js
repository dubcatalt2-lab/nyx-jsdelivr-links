export function preserveTransferErrors(λ1abb403c27cd) {
  const λ2287df92e0c5 = λ1abb403c27cd.stream_response;
  λ1abb403c27cd.stream_response = function(λ1abb403c27cd, λ714b559b35ef, λ580f1c0f2450, λdd5f8c5fa09a) {
    let λ65e665bbf451;
    const λ0b8e143ffd4b = new Promise(λ1abb403c27cd => {
      λ65e665bbf451 = λ1abb403c27cd;
    });
    return λ2287df92e0c5.call(this, λ1abb403c27cd, λ1abb403c27cd => {
      const λ2287df92e0c5 = λ1abb403c27cd.getReader();
      λ714b559b35ef(new ReadableStream({
        async pull(λ1abb403c27cd) {
          try {
            const λ714b559b35ef = await λ2287df92e0c5.read();
            if (!λ714b559b35ef.done) return void λ1abb403c27cd.enqueue(λ714b559b35ef.value);
            const λ580f1c0f2450 = await λ0b8e143ffd4b;
            if (-1 === λ580f1c0f2450 || λdd5f8c5fa09a?.aborted) throw λdd5f8c5fa09a?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λ580f1c0f2450) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λ580f1c0f2450}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x74\x65\x78\x74\x6c\x69\x62\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ1abb403c27cd.close();
          } catch (λ2287df92e0c5) {
            λ1abb403c27cd.error(λ2287df92e0c5);
          }
        },
        cancel: λ1abb403c27cd => λ2287df92e0c5.cancel(λ1abb403c27cd)
      }, {
        highWaterMark: 0
      }));
    }, λ1abb403c27cd => {
      λ65e665bbf451(λ1abb403c27cd), λ580f1c0f2450(λ1abb403c27cd);
    }, λdd5f8c5fa09a);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λ1abb403c27cd => /\berror code (?:18|52|56|92)\b/i.test(String(λ1abb403c27cd?.message || λ1abb403c27cd)), _0x7e8643_1 = λ1abb403c27cd => λ1abb403c27cd.some(([λ1abb403c27cd, λ2287df92e0c5]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ1abb403c27cd.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ2287df92e0c5).split("\x3b")[0].trim()));

async function _0x7e8643_2(λ1abb403c27cd, λ2287df92e0c5) {
  const λ714b559b35ef = λ1abb403c27cd.getReader(), λ580f1c0f2450 = [];
  let λdd5f8c5fa09a = 0;
  const _0x7e8643_5 = () => {
    λ2287df92e0c5.bytes -= λdd5f8c5fa09a, λdd5f8c5fa09a = 0, λ580f1c0f2450.length = 0;
  };
  try {
    for (;;) {
      const λ1abb403c27cd = await λ714b559b35ef.read();
      if (λ1abb403c27cd.done) {
        const λ1abb403c27cd = new Blob(λ580f1c0f2450).stream();
        return _0x7e8643_5(), λ1abb403c27cd;
      }
      if (λdd5f8c5fa09a + λ1abb403c27cd.value.byteLength > 16777216 || λ2287df92e0c5.bytes + λ1abb403c27cd.value.byteLength > 33554432) {
        let λ65e665bbf451 = λ1abb403c27cd.value;
        return new ReadableStream({
          async pull(λ1abb403c27cd) {
            try {
              if (λ580f1c0f2450.length) {
                const λ714b559b35ef = λ580f1c0f2450.shift();
                return λdd5f8c5fa09a -= λ714b559b35ef.byteLength, λ2287df92e0c5.bytes -= λ714b559b35ef.byteLength, 
                void λ1abb403c27cd.enqueue(λ714b559b35ef);
              }
              if (λ65e665bbf451) return λ1abb403c27cd.enqueue(λ65e665bbf451), void (λ65e665bbf451 = null);
              const λ0b8e143ffd4b = await λ714b559b35ef.read();
              λ0b8e143ffd4b.done ? λ1abb403c27cd.close() : λ1abb403c27cd.enqueue(λ0b8e143ffd4b.value);
            } catch (λ2287df92e0c5) {
              _0x7e8643_5(), λ1abb403c27cd.error(λ2287df92e0c5);
            }
          },
          cancel: λ1abb403c27cd => (_0x7e8643_5(), λ65e665bbf451 = null, λ714b559b35ef.cancel(λ1abb403c27cd))
        }, {
          highWaterMark: 0
        });
      }
      λ580f1c0f2450.push(λ1abb403c27cd.value), λdd5f8c5fa09a += λ1abb403c27cd.value.byteLength, 
      λ2287df92e0c5.bytes += λ1abb403c27cd.value.byteLength;
    }
  } catch (λ1abb403c27cd) {
    throw _0x7e8643_5(), λ714b559b35ef.cancel(λ1abb403c27cd).catch(() => {}), λ1abb403c27cd;
  }
}

export async function requestWithTransferRetry(λ1abb403c27cd, {method: λ2287df92e0c5, body: λ714b559b35ef, signal: λ580f1c0f2450, budget: λdd5f8c5fa09a}) {
  const λ65e665bbf451 = /^(?:GET|HEAD)$/i.test(λ2287df92e0c5 || "\x47\x45\x54") && null == λ714b559b35ef;
  for (let λ2287df92e0c5 = 0; ;λ2287df92e0c5++) {
    λ580f1c0f2450?.throwIfAborted();
    try {
      const λ2287df92e0c5 = await λ1abb403c27cd();
      return λ65e665bbf451 && λ2287df92e0c5.body?.getReader && _0x7e8643_1(λ2287df92e0c5.headers) ? {
        ...λ2287df92e0c5,
        body: await _0x7e8643_2(λ2287df92e0c5.body, λdd5f8c5fa09a)
      } : λ2287df92e0c5;
    } catch (λ1abb403c27cd) {
      if (!λ65e665bbf451 || λ2287df92e0c5 >= 1 || λ580f1c0f2450?.aborted || !_0x7e8643_0(λ1abb403c27cd)) throw λ1abb403c27cd;
    }
  }
}
