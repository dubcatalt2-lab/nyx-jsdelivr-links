export function preserveTransferErrors(λ1b788d6d61b4) {
  const λa3525c01a25b = λ1b788d6d61b4.stream_response;
  λ1b788d6d61b4.stream_response = function(λ1b788d6d61b4, λb608765c6dc4, λed99f2d307e2, λff87083d3c3c) {
    let λ8b2bbe65b995;
    const λ4627cf9790ac = new Promise(λ1b788d6d61b4 => {
      λ8b2bbe65b995 = λ1b788d6d61b4;
    });
    return λa3525c01a25b.call(this, λ1b788d6d61b4, λ1b788d6d61b4 => {
      const λa3525c01a25b = λ1b788d6d61b4.getReader();
      λb608765c6dc4(new ReadableStream({
        async pull(λ1b788d6d61b4) {
          try {
            const λb608765c6dc4 = await λa3525c01a25b.read();
            if (!λb608765c6dc4.done) return void λ1b788d6d61b4.enqueue(λb608765c6dc4.value);
            const λed99f2d307e2 = await λ4627cf9790ac;
            if (-1 === λed99f2d307e2 || λff87083d3c3c?.aborted) throw λff87083d3c3c?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λed99f2d307e2) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λed99f2d307e2}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x6c\x69\x62\x63\x75\x72\x6c\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ1b788d6d61b4.close();
          } catch (λa3525c01a25b) {
            λ1b788d6d61b4.error(λa3525c01a25b);
          }
        },
        cancel: λ1b788d6d61b4 => λa3525c01a25b.cancel(λ1b788d6d61b4)
      }, {
        highWaterMark: 0
      }));
    }, λ1b788d6d61b4 => {
      λ8b2bbe65b995(λ1b788d6d61b4), λed99f2d307e2(λ1b788d6d61b4);
    }, λff87083d3c3c);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λ1b788d6d61b4 => /\berror code (?:18|52|56|92)\b/i.test(String(λ1b788d6d61b4?.message || λ1b788d6d61b4)), _0x7e8643_1 = λ1b788d6d61b4 => λ1b788d6d61b4.some(([λ1b788d6d61b4, λa3525c01a25b]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ1b788d6d61b4.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λa3525c01a25b).split("\x3b")[0].trim()));

async function _0x7e8643_2(λ1b788d6d61b4, λa3525c01a25b) {
  const λb608765c6dc4 = λ1b788d6d61b4.getReader(), λed99f2d307e2 = [];
  let λff87083d3c3c = 0;
  const _0x7e8643_5 = () => {
    λa3525c01a25b.bytes -= λff87083d3c3c, λff87083d3c3c = 0, λed99f2d307e2.length = 0;
  };
  try {
    for (;;) {
      const λ1b788d6d61b4 = await λb608765c6dc4.read();
      if (λ1b788d6d61b4.done) {
        const λ1b788d6d61b4 = new Blob(λed99f2d307e2).stream();
        return _0x7e8643_5(), λ1b788d6d61b4;
      }
      if (λff87083d3c3c + λ1b788d6d61b4.value.byteLength > 16777216 || λa3525c01a25b.bytes + λ1b788d6d61b4.value.byteLength > 33554432) {
        let λ8b2bbe65b995 = λ1b788d6d61b4.value;
        return new ReadableStream({
          async pull(λ1b788d6d61b4) {
            try {
              if (λed99f2d307e2.length) {
                const λb608765c6dc4 = λed99f2d307e2.shift();
                return λff87083d3c3c -= λb608765c6dc4.byteLength, λa3525c01a25b.bytes -= λb608765c6dc4.byteLength, 
                void λ1b788d6d61b4.enqueue(λb608765c6dc4);
              }
              if (λ8b2bbe65b995) return λ1b788d6d61b4.enqueue(λ8b2bbe65b995), void (λ8b2bbe65b995 = null);
              const λ4627cf9790ac = await λb608765c6dc4.read();
              λ4627cf9790ac.done ? λ1b788d6d61b4.close() : λ1b788d6d61b4.enqueue(λ4627cf9790ac.value);
            } catch (λa3525c01a25b) {
              _0x7e8643_5(), λ1b788d6d61b4.error(λa3525c01a25b);
            }
          },
          cancel: λ1b788d6d61b4 => (_0x7e8643_5(), λ8b2bbe65b995 = null, λb608765c6dc4.cancel(λ1b788d6d61b4))
        }, {
          highWaterMark: 0
        });
      }
      λed99f2d307e2.push(λ1b788d6d61b4.value), λff87083d3c3c += λ1b788d6d61b4.value.byteLength, 
      λa3525c01a25b.bytes += λ1b788d6d61b4.value.byteLength;
    }
  } catch (λ1b788d6d61b4) {
    throw _0x7e8643_5(), λb608765c6dc4.cancel(λ1b788d6d61b4).catch(() => {}), λ1b788d6d61b4;
  }
}

export async function requestWithTransferRetry(λ1b788d6d61b4, {method: λa3525c01a25b, body: λb608765c6dc4, signal: λed99f2d307e2, budget: λff87083d3c3c}) {
  const λ8b2bbe65b995 = /^(?:GET|HEAD)$/i.test(λa3525c01a25b || "\x47\x45\x54") && null == λb608765c6dc4;
  for (let λa3525c01a25b = 0; ;λa3525c01a25b++) {
    λed99f2d307e2?.throwIfAborted();
    try {
      const λa3525c01a25b = await λ1b788d6d61b4();
      return λ8b2bbe65b995 && λa3525c01a25b.body?.getReader && _0x7e8643_1(λa3525c01a25b.headers) ? {
        ...λa3525c01a25b,
        body: await _0x7e8643_2(λa3525c01a25b.body, λff87083d3c3c)
      } : λa3525c01a25b;
    } catch (λ1b788d6d61b4) {
      if (!λ8b2bbe65b995 || λa3525c01a25b >= 1 || λed99f2d307e2?.aborted || !_0x7e8643_0(λ1b788d6d61b4)) throw λ1b788d6d61b4;
    }
  }
}
