export function preserveTransferErrors(λe827f997a4b8) {
  const λ915f127f816f = λe827f997a4b8.stream_response;
  λe827f997a4b8.stream_response = function(λe827f997a4b8, λcb2f00061285, λea36dfcd9416, λ361a2ce0f4c4) {
    let λac4bb5da6768;
    const λ4181ddaf3633 = new Promise(λe827f997a4b8 => {
      λac4bb5da6768 = λe827f997a4b8;
    });
    return λ915f127f816f.call(this, λe827f997a4b8, λe827f997a4b8 => {
      const λ915f127f816f = λe827f997a4b8.getReader();
      λcb2f00061285(new ReadableStream({
        async pull(λe827f997a4b8) {
          try {
            const λcb2f00061285 = await λ915f127f816f.read();
            if (!λcb2f00061285.done) return void λe827f997a4b8.enqueue(λcb2f00061285.value);
            const λea36dfcd9416 = await λ4181ddaf3633;
            if (-1 === λea36dfcd9416 || λ361a2ce0f4c4?.aborted) throw λ361a2ce0f4c4?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λea36dfcd9416) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λea36dfcd9416}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x6c\x69\x62\x63\x75\x72\x6c\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λe827f997a4b8.close();
          } catch (λ915f127f816f) {
            λe827f997a4b8.error(λ915f127f816f);
          }
        },
        cancel: λe827f997a4b8 => λ915f127f816f.cancel(λe827f997a4b8)
      }, {
        highWaterMark: 0
      }));
    }, λe827f997a4b8 => {
      λac4bb5da6768(λe827f997a4b8), λea36dfcd9416(λe827f997a4b8);
    }, λ361a2ce0f4c4);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λe827f997a4b8 => /\berror code (?:18|52|56|92)\b/i.test(String(λe827f997a4b8?.message || λe827f997a4b8)), _0x7e8643_1 = λe827f997a4b8 => λe827f997a4b8.some(([λe827f997a4b8, λ915f127f816f]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λe827f997a4b8.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ915f127f816f).split("\x3b")[0].trim()));

async function _0x7e8643_2(λe827f997a4b8, λ915f127f816f) {
  const λcb2f00061285 = λe827f997a4b8.getReader(), λea36dfcd9416 = [];
  let λ361a2ce0f4c4 = 0;
  const _0x7e8643_5 = () => {
    λ915f127f816f.bytes -= λ361a2ce0f4c4, λ361a2ce0f4c4 = 0, λea36dfcd9416.length = 0;
  };
  try {
    for (;;) {
      const λe827f997a4b8 = await λcb2f00061285.read();
      if (λe827f997a4b8.done) {
        const λe827f997a4b8 = new Blob(λea36dfcd9416).stream();
        return _0x7e8643_5(), λe827f997a4b8;
      }
      if (λ361a2ce0f4c4 + λe827f997a4b8.value.byteLength > 16777216 || λ915f127f816f.bytes + λe827f997a4b8.value.byteLength > 33554432) {
        let λac4bb5da6768 = λe827f997a4b8.value;
        return new ReadableStream({
          async pull(λe827f997a4b8) {
            try {
              if (λea36dfcd9416.length) {
                const λcb2f00061285 = λea36dfcd9416.shift();
                return λ361a2ce0f4c4 -= λcb2f00061285.byteLength, λ915f127f816f.bytes -= λcb2f00061285.byteLength, 
                void λe827f997a4b8.enqueue(λcb2f00061285);
              }
              if (λac4bb5da6768) return λe827f997a4b8.enqueue(λac4bb5da6768), void (λac4bb5da6768 = null);
              const λ4181ddaf3633 = await λcb2f00061285.read();
              λ4181ddaf3633.done ? λe827f997a4b8.close() : λe827f997a4b8.enqueue(λ4181ddaf3633.value);
            } catch (λ915f127f816f) {
              _0x7e8643_5(), λe827f997a4b8.error(λ915f127f816f);
            }
          },
          cancel: λe827f997a4b8 => (_0x7e8643_5(), λac4bb5da6768 = null, λcb2f00061285.cancel(λe827f997a4b8))
        }, {
          highWaterMark: 0
        });
      }
      λea36dfcd9416.push(λe827f997a4b8.value), λ361a2ce0f4c4 += λe827f997a4b8.value.byteLength, 
      λ915f127f816f.bytes += λe827f997a4b8.value.byteLength;
    }
  } catch (λe827f997a4b8) {
    throw _0x7e8643_5(), λcb2f00061285.cancel(λe827f997a4b8).catch(() => {}), λe827f997a4b8;
  }
}

export async function requestWithTransferRetry(λe827f997a4b8, {method: λ915f127f816f, body: λcb2f00061285, signal: λea36dfcd9416, budget: λ361a2ce0f4c4}) {
  const λac4bb5da6768 = /^(?:GET|HEAD)$/i.test(λ915f127f816f || "\x47\x45\x54") && null == λcb2f00061285;
  for (let λ915f127f816f = 0; ;λ915f127f816f++) {
    λea36dfcd9416?.throwIfAborted();
    try {
      const λ915f127f816f = await λe827f997a4b8();
      return λac4bb5da6768 && λ915f127f816f.body?.getReader && _0x7e8643_1(λ915f127f816f.headers) ? {
        ...λ915f127f816f,
        body: await _0x7e8643_2(λ915f127f816f.body, λ361a2ce0f4c4)
      } : λ915f127f816f;
    } catch (λe827f997a4b8) {
      if (!λac4bb5da6768 || λ915f127f816f >= 1 || λea36dfcd9416?.aborted || !_0x7e8643_0(λe827f997a4b8)) throw λe827f997a4b8;
    }
  }
}
