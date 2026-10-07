export function preserveTransferErrors(λ802fbfd6f1f7) {
  const λ15b1c1ce57c8 = λ802fbfd6f1f7.stream_response;
  λ802fbfd6f1f7.stream_response = function(λ802fbfd6f1f7, λd1f8e203ea96, λ84b06e03389d, λ4e515dc79105) {
    let λ527e69667e3f;
    const λf34f894d8bd2 = new Promise(λ802fbfd6f1f7 => {
      λ527e69667e3f = λ802fbfd6f1f7;
    });
    return λ15b1c1ce57c8.call(this, λ802fbfd6f1f7, λ802fbfd6f1f7 => {
      const λ15b1c1ce57c8 = λ802fbfd6f1f7.getReader();
      λd1f8e203ea96(new ReadableStream({
        async pull(λ802fbfd6f1f7) {
          try {
            const λd1f8e203ea96 = await λ15b1c1ce57c8.read();
            if (!λd1f8e203ea96.done) return void λ802fbfd6f1f7.enqueue(λd1f8e203ea96.value);
            const λ84b06e03389d = await λf34f894d8bd2;
            if (-1 === λ84b06e03389d || λ4e515dc79105?.aborted) throw λ4e515dc79105?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λ84b06e03389d) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λ84b06e03389d}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x6c\x69\x62\x63\x75\x72\x6c\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ802fbfd6f1f7.close();
          } catch (λ15b1c1ce57c8) {
            λ802fbfd6f1f7.error(λ15b1c1ce57c8);
          }
        },
        cancel: λ802fbfd6f1f7 => λ15b1c1ce57c8.cancel(λ802fbfd6f1f7)
      }, {
        highWaterMark: 0
      }));
    }, λ802fbfd6f1f7 => {
      λ527e69667e3f(λ802fbfd6f1f7), λ84b06e03389d(λ802fbfd6f1f7);
    }, λ4e515dc79105);
  };
}

export const bufferLimit = 33554432;

const _0xeb3350_7 = λ802fbfd6f1f7 => /\berror code (?:18|52|56|92)\b/i.test(String(λ802fbfd6f1f7?.message || λ802fbfd6f1f7)), _0x7e8643_0 = λ802fbfd6f1f7 => λ802fbfd6f1f7.some(([λ802fbfd6f1f7, λ15b1c1ce57c8]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ802fbfd6f1f7.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ15b1c1ce57c8).split("\x3b")[0].trim()));

async function _0x7e8643_1(λ802fbfd6f1f7, λ15b1c1ce57c8) {
  const λd1f8e203ea96 = λ802fbfd6f1f7.getReader(), λ84b06e03389d = [];
  let λ4e515dc79105 = 0;
  const _0x7e8643_5 = () => {
    λ15b1c1ce57c8.bytes -= λ4e515dc79105, λ4e515dc79105 = 0, λ84b06e03389d.length = 0;
  };
  try {
    for (;;) {
      const λ802fbfd6f1f7 = await λd1f8e203ea96.read();
      if (λ802fbfd6f1f7.done) {
        const λ802fbfd6f1f7 = new Blob(λ84b06e03389d).stream();
        return _0x7e8643_5(), λ802fbfd6f1f7;
      }
      if (λ4e515dc79105 + λ802fbfd6f1f7.value.byteLength > 16777216 || λ15b1c1ce57c8.bytes + λ802fbfd6f1f7.value.byteLength > 33554432) {
        let λ527e69667e3f = λ802fbfd6f1f7.value;
        return new ReadableStream({
          async pull(λ802fbfd6f1f7) {
            try {
              if (λ84b06e03389d.length) {
                const λd1f8e203ea96 = λ84b06e03389d.shift();
                return λ4e515dc79105 -= λd1f8e203ea96.byteLength, λ15b1c1ce57c8.bytes -= λd1f8e203ea96.byteLength, 
                void λ802fbfd6f1f7.enqueue(λd1f8e203ea96);
              }
              if (λ527e69667e3f) return λ802fbfd6f1f7.enqueue(λ527e69667e3f), void (λ527e69667e3f = null);
              const λf34f894d8bd2 = await λd1f8e203ea96.read();
              λf34f894d8bd2.done ? λ802fbfd6f1f7.close() : λ802fbfd6f1f7.enqueue(λf34f894d8bd2.value);
            } catch (λ15b1c1ce57c8) {
              _0x7e8643_5(), λ802fbfd6f1f7.error(λ15b1c1ce57c8);
            }
          },
          cancel: λ802fbfd6f1f7 => (_0x7e8643_5(), λ527e69667e3f = null, λd1f8e203ea96.cancel(λ802fbfd6f1f7))
        }, {
          highWaterMark: 0
        });
      }
      λ84b06e03389d.push(λ802fbfd6f1f7.value), λ4e515dc79105 += λ802fbfd6f1f7.value.byteLength, 
      λ15b1c1ce57c8.bytes += λ802fbfd6f1f7.value.byteLength;
    }
  } catch (λ802fbfd6f1f7) {
    throw _0x7e8643_5(), λd1f8e203ea96.cancel(λ802fbfd6f1f7).catch(() => {}), λ802fbfd6f1f7;
  }
}

export async function requestWithTransferRetry(λ802fbfd6f1f7, {method: λ15b1c1ce57c8, body: λd1f8e203ea96, signal: λ84b06e03389d, budget: λ4e515dc79105}) {
  const λ527e69667e3f = /^(?:GET|HEAD)$/i.test(λ15b1c1ce57c8 || "\x47\x45\x54") && null == λd1f8e203ea96;
  for (let λ15b1c1ce57c8 = 0; ;λ15b1c1ce57c8++) {
    λ84b06e03389d?.throwIfAborted();
    try {
      const λ15b1c1ce57c8 = await λ802fbfd6f1f7();
      return λ527e69667e3f && λ15b1c1ce57c8.body?.getReader && _0x7e8643_0(λ15b1c1ce57c8.headers) ? {
        ...λ15b1c1ce57c8,
        body: await _0x7e8643_1(λ15b1c1ce57c8.body, λ4e515dc79105)
      } : λ15b1c1ce57c8;
    } catch (λ802fbfd6f1f7) {
      if (!λ527e69667e3f || λ15b1c1ce57c8 >= 1 || λ84b06e03389d?.aborted || !_0xeb3350_7(λ802fbfd6f1f7)) throw λ802fbfd6f1f7;
    }
  }
}
