export function preserveTransferErrors(λb06f6380f167) {
  const λ2d5dd74b9d21 = λb06f6380f167.stream_response;
  λb06f6380f167.stream_response = function(λb06f6380f167, λb016252d8bd5, λ79ce137cc5a0, λ9b113a094a83) {
    let λ6d505cce3c76;
    const λ7ccdaa86e881 = new Promise(λb06f6380f167 => {
      λ6d505cce3c76 = λb06f6380f167;
    });
    return λ2d5dd74b9d21.call(this, λb06f6380f167, λb06f6380f167 => {
      const λ2d5dd74b9d21 = λb06f6380f167.getReader();
      λb016252d8bd5(new ReadableStream({
        async pull(λb06f6380f167) {
          try {
            const λb016252d8bd5 = await λ2d5dd74b9d21.read();
            if (!λb016252d8bd5.done) return void λb06f6380f167.enqueue(λb016252d8bd5.value);
            const λ79ce137cc5a0 = await λ7ccdaa86e881;
            if (-1 === λ79ce137cc5a0 || λ9b113a094a83?.aborted) throw λ9b113a094a83?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λ79ce137cc5a0) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λ79ce137cc5a0}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x6c\x69\x62\x63\x75\x72\x6c\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λb06f6380f167.close();
          } catch (λ2d5dd74b9d21) {
            λb06f6380f167.error(λ2d5dd74b9d21);
          }
        },
        cancel: λb06f6380f167 => λ2d5dd74b9d21.cancel(λb06f6380f167)
      }, {
        highWaterMark: 0
      }));
    }, λb06f6380f167 => {
      λ6d505cce3c76(λb06f6380f167), λ79ce137cc5a0(λb06f6380f167);
    }, λ9b113a094a83);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λb06f6380f167 => /\berror code (?:18|52|56|92)\b/i.test(String(λb06f6380f167?.message || λb06f6380f167)), _0x7e8643_1 = λb06f6380f167 => λb06f6380f167.some(([λb06f6380f167, λ2d5dd74b9d21]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λb06f6380f167.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ2d5dd74b9d21).split("\x3b")[0].trim()));

async function _0x7e8643_2(λb06f6380f167, λ2d5dd74b9d21) {
  const λb016252d8bd5 = λb06f6380f167.getReader(), λ79ce137cc5a0 = [];
  let λ9b113a094a83 = 0;
  const _0x7e8643_5 = () => {
    λ2d5dd74b9d21.bytes -= λ9b113a094a83, λ9b113a094a83 = 0, λ79ce137cc5a0.length = 0;
  };
  try {
    for (;;) {
      const λb06f6380f167 = await λb016252d8bd5.read();
      if (λb06f6380f167.done) {
        const λb06f6380f167 = new Blob(λ79ce137cc5a0).stream();
        return _0x7e8643_5(), λb06f6380f167;
      }
      if (λ9b113a094a83 + λb06f6380f167.value.byteLength > 16777216 || λ2d5dd74b9d21.bytes + λb06f6380f167.value.byteLength > 33554432) {
        let λ6d505cce3c76 = λb06f6380f167.value;
        return new ReadableStream({
          async pull(λb06f6380f167) {
            try {
              if (λ79ce137cc5a0.length) {
                const λb016252d8bd5 = λ79ce137cc5a0.shift();
                return λ9b113a094a83 -= λb016252d8bd5.byteLength, λ2d5dd74b9d21.bytes -= λb016252d8bd5.byteLength, 
                void λb06f6380f167.enqueue(λb016252d8bd5);
              }
              if (λ6d505cce3c76) return λb06f6380f167.enqueue(λ6d505cce3c76), void (λ6d505cce3c76 = null);
              const λ7ccdaa86e881 = await λb016252d8bd5.read();
              λ7ccdaa86e881.done ? λb06f6380f167.close() : λb06f6380f167.enqueue(λ7ccdaa86e881.value);
            } catch (λ2d5dd74b9d21) {
              _0x7e8643_5(), λb06f6380f167.error(λ2d5dd74b9d21);
            }
          },
          cancel: λb06f6380f167 => (_0x7e8643_5(), λ6d505cce3c76 = null, λb016252d8bd5.cancel(λb06f6380f167))
        }, {
          highWaterMark: 0
        });
      }
      λ79ce137cc5a0.push(λb06f6380f167.value), λ9b113a094a83 += λb06f6380f167.value.byteLength, 
      λ2d5dd74b9d21.bytes += λb06f6380f167.value.byteLength;
    }
  } catch (λb06f6380f167) {
    throw _0x7e8643_5(), λb016252d8bd5.cancel(λb06f6380f167).catch(() => {}), λb06f6380f167;
  }
}

export async function requestWithTransferRetry(λb06f6380f167, {method: λ2d5dd74b9d21, body: λb016252d8bd5, signal: λ79ce137cc5a0, budget: λ9b113a094a83}) {
  const λ6d505cce3c76 = /^(?:GET|HEAD)$/i.test(λ2d5dd74b9d21 || "\x47\x45\x54") && null == λb016252d8bd5;
  for (let λ2d5dd74b9d21 = 0; ;λ2d5dd74b9d21++) {
    λ79ce137cc5a0?.throwIfAborted();
    try {
      const λ2d5dd74b9d21 = await λb06f6380f167();
      return λ6d505cce3c76 && λ2d5dd74b9d21.body?.getReader && _0x7e8643_1(λ2d5dd74b9d21.headers) ? {
        ...λ2d5dd74b9d21,
        body: await _0x7e8643_2(λ2d5dd74b9d21.body, λ9b113a094a83)
      } : λ2d5dd74b9d21;
    } catch (λb06f6380f167) {
      if (!λ6d505cce3c76 || λ2d5dd74b9d21 >= 1 || λ79ce137cc5a0?.aborted || !_0x7e8643_0(λb06f6380f167)) throw λb06f6380f167;
    }
  }
}
