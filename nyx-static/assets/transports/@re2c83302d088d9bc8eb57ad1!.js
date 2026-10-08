export function preserveTransferErrors(λ70794dbe04d5) {
  const λ6ff92328e04b = λ70794dbe04d5.stream_response;
  λ70794dbe04d5.stream_response = function(λ70794dbe04d5, λ7f952a664914, λ3403d2ef346f, λc04583e02bed) {
    let λe624d1fbe04a;
    const λb3438273e587 = new Promise(λ70794dbe04d5 => {
      λe624d1fbe04a = λ70794dbe04d5;
    });
    return λ6ff92328e04b.call(this, λ70794dbe04d5, λ70794dbe04d5 => {
      const λ6ff92328e04b = λ70794dbe04d5.getReader();
      λ7f952a664914(new ReadableStream({
        async pull(λ70794dbe04d5) {
          try {
            const λ7f952a664914 = await λ6ff92328e04b.read();
            if (!λ7f952a664914.done) return void λ70794dbe04d5.enqueue(λ7f952a664914.value);
            const λ3403d2ef346f = await λb3438273e587;
            if (-1 === λ3403d2ef346f || λc04583e02bed?.aborted) throw λc04583e02bed?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λ3403d2ef346f) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λ3403d2ef346f}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x74\x65\x78\x74\x6c\x69\x62\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ70794dbe04d5.close();
          } catch (λ6ff92328e04b) {
            λ70794dbe04d5.error(λ6ff92328e04b);
          }
        },
        cancel: λ70794dbe04d5 => λ6ff92328e04b.cancel(λ70794dbe04d5)
      }, {
        highWaterMark: 0
      }));
    }, λ70794dbe04d5 => {
      λe624d1fbe04a(λ70794dbe04d5), λ3403d2ef346f(λ70794dbe04d5);
    }, λc04583e02bed);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λ70794dbe04d5 => /\berror code (?:18|52|56|92)\b/i.test(String(λ70794dbe04d5?.message || λ70794dbe04d5)), _0x7e8643_1 = λ70794dbe04d5 => λ70794dbe04d5.some(([λ70794dbe04d5, λ6ff92328e04b]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ70794dbe04d5.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ6ff92328e04b).split("\x3b")[0].trim()));

async function _0x7e8643_2(λ70794dbe04d5, λ6ff92328e04b) {
  const λ7f952a664914 = λ70794dbe04d5.getReader(), λ3403d2ef346f = [];
  let λc04583e02bed = 0;
  const _0x7e8643_5 = () => {
    λ6ff92328e04b.bytes -= λc04583e02bed, λc04583e02bed = 0, λ3403d2ef346f.length = 0;
  };
  try {
    for (;;) {
      const λ70794dbe04d5 = await λ7f952a664914.read();
      if (λ70794dbe04d5.done) {
        const λ70794dbe04d5 = new Blob(λ3403d2ef346f).stream();
        return _0x7e8643_5(), λ70794dbe04d5;
      }
      if (λc04583e02bed + λ70794dbe04d5.value.byteLength > 16777216 || λ6ff92328e04b.bytes + λ70794dbe04d5.value.byteLength > 33554432) {
        let λe624d1fbe04a = λ70794dbe04d5.value;
        return new ReadableStream({
          async pull(λ70794dbe04d5) {
            try {
              if (λ3403d2ef346f.length) {
                const λ7f952a664914 = λ3403d2ef346f.shift();
                return λc04583e02bed -= λ7f952a664914.byteLength, λ6ff92328e04b.bytes -= λ7f952a664914.byteLength, 
                void λ70794dbe04d5.enqueue(λ7f952a664914);
              }
              if (λe624d1fbe04a) return λ70794dbe04d5.enqueue(λe624d1fbe04a), void (λe624d1fbe04a = null);
              const λb3438273e587 = await λ7f952a664914.read();
              λb3438273e587.done ? λ70794dbe04d5.close() : λ70794dbe04d5.enqueue(λb3438273e587.value);
            } catch (λ6ff92328e04b) {
              _0x7e8643_5(), λ70794dbe04d5.error(λ6ff92328e04b);
            }
          },
          cancel: λ70794dbe04d5 => (_0x7e8643_5(), λe624d1fbe04a = null, λ7f952a664914.cancel(λ70794dbe04d5))
        }, {
          highWaterMark: 0
        });
      }
      λ3403d2ef346f.push(λ70794dbe04d5.value), λc04583e02bed += λ70794dbe04d5.value.byteLength, 
      λ6ff92328e04b.bytes += λ70794dbe04d5.value.byteLength;
    }
  } catch (λ70794dbe04d5) {
    throw _0x7e8643_5(), λ7f952a664914.cancel(λ70794dbe04d5).catch(() => {}), λ70794dbe04d5;
  }
}

export async function requestWithTransferRetry(λ70794dbe04d5, {method: λ6ff92328e04b, body: λ7f952a664914, signal: λ3403d2ef346f, budget: λc04583e02bed}) {
  const λe624d1fbe04a = /^(?:GET|HEAD)$/i.test(λ6ff92328e04b || "\x47\x45\x54") && null == λ7f952a664914;
  for (let λ6ff92328e04b = 0; ;λ6ff92328e04b++) {
    λ3403d2ef346f?.throwIfAborted();
    try {
      const λ6ff92328e04b = await λ70794dbe04d5();
      return λe624d1fbe04a && λ6ff92328e04b.body?.getReader && _0x7e8643_1(λ6ff92328e04b.headers) ? {
        ...λ6ff92328e04b,
        body: await _0x7e8643_2(λ6ff92328e04b.body, λc04583e02bed)
      } : λ6ff92328e04b;
    } catch (λ70794dbe04d5) {
      if (!λe624d1fbe04a || λ6ff92328e04b >= 1 || λ3403d2ef346f?.aborted || !_0x7e8643_0(λ70794dbe04d5)) throw λ70794dbe04d5;
    }
  }
}
