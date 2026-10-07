export function preserveTransferErrors(λ65e1557ecf75) {
  const λ69c5558b73ae = λ65e1557ecf75.stream_response;
  λ65e1557ecf75.stream_response = function(λ65e1557ecf75, λ846db7ca515d, λce74f8bea0fb, λ3483b94b364f) {
    let λde31f103e6b0;
    const λ49b81cf547e4 = new Promise(λ65e1557ecf75 => {
      λde31f103e6b0 = λ65e1557ecf75;
    });
    return λ69c5558b73ae.call(this, λ65e1557ecf75, λ65e1557ecf75 => {
      const λ69c5558b73ae = λ65e1557ecf75.getReader();
      λ846db7ca515d(new ReadableStream({
        async pull(λ65e1557ecf75) {
          try {
            const λ846db7ca515d = await λ69c5558b73ae.read();
            if (!λ846db7ca515d.done) return void λ65e1557ecf75.enqueue(λ846db7ca515d.value);
            const λce74f8bea0fb = await λ49b81cf547e4;
            if (-1 === λce74f8bea0fb || λ3483b94b364f?.aborted) throw λ3483b94b364f?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λce74f8bea0fb) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λce74f8bea0fb}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x6c\x69\x62\x63\x75\x72\x6c\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ65e1557ecf75.close();
          } catch (λ69c5558b73ae) {
            λ65e1557ecf75.error(λ69c5558b73ae);
          }
        },
        cancel: λ65e1557ecf75 => λ69c5558b73ae.cancel(λ65e1557ecf75)
      }, {
        highWaterMark: 0
      }));
    }, λ65e1557ecf75 => {
      λde31f103e6b0(λ65e1557ecf75), λce74f8bea0fb(λ65e1557ecf75);
    }, λ3483b94b364f);
  };
}

export const bufferLimit = 33554432;

const _0xeb3350_7 = λ65e1557ecf75 => /\berror code (?:18|52|56|92)\b/i.test(String(λ65e1557ecf75?.message || λ65e1557ecf75)), _0x7e8643_0 = λ65e1557ecf75 => λ65e1557ecf75.some(([λ65e1557ecf75, λ69c5558b73ae]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ65e1557ecf75.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ69c5558b73ae).split("\x3b")[0].trim()));

async function _0x7e8643_1(λ65e1557ecf75, λ69c5558b73ae) {
  const λ846db7ca515d = λ65e1557ecf75.getReader(), λce74f8bea0fb = [];
  let λ3483b94b364f = 0;
  const _0x7e8643_5 = () => {
    λ69c5558b73ae.bytes -= λ3483b94b364f, λ3483b94b364f = 0, λce74f8bea0fb.length = 0;
  };
  try {
    for (;;) {
      const λ65e1557ecf75 = await λ846db7ca515d.read();
      if (λ65e1557ecf75.done) {
        const λ65e1557ecf75 = new Blob(λce74f8bea0fb).stream();
        return _0x7e8643_5(), λ65e1557ecf75;
      }
      if (λ3483b94b364f + λ65e1557ecf75.value.byteLength > 16777216 || λ69c5558b73ae.bytes + λ65e1557ecf75.value.byteLength > 33554432) {
        let λde31f103e6b0 = λ65e1557ecf75.value;
        return new ReadableStream({
          async pull(λ65e1557ecf75) {
            try {
              if (λce74f8bea0fb.length) {
                const λ846db7ca515d = λce74f8bea0fb.shift();
                return λ3483b94b364f -= λ846db7ca515d.byteLength, λ69c5558b73ae.bytes -= λ846db7ca515d.byteLength, 
                void λ65e1557ecf75.enqueue(λ846db7ca515d);
              }
              if (λde31f103e6b0) return λ65e1557ecf75.enqueue(λde31f103e6b0), void (λde31f103e6b0 = null);
              const λ49b81cf547e4 = await λ846db7ca515d.read();
              λ49b81cf547e4.done ? λ65e1557ecf75.close() : λ65e1557ecf75.enqueue(λ49b81cf547e4.value);
            } catch (λ69c5558b73ae) {
              _0x7e8643_5(), λ65e1557ecf75.error(λ69c5558b73ae);
            }
          },
          cancel: λ65e1557ecf75 => (_0x7e8643_5(), λde31f103e6b0 = null, λ846db7ca515d.cancel(λ65e1557ecf75))
        }, {
          highWaterMark: 0
        });
      }
      λce74f8bea0fb.push(λ65e1557ecf75.value), λ3483b94b364f += λ65e1557ecf75.value.byteLength, 
      λ69c5558b73ae.bytes += λ65e1557ecf75.value.byteLength;
    }
  } catch (λ65e1557ecf75) {
    throw _0x7e8643_5(), λ846db7ca515d.cancel(λ65e1557ecf75).catch(() => {}), λ65e1557ecf75;
  }
}

export async function requestWithTransferRetry(λ65e1557ecf75, {method: λ69c5558b73ae, body: λ846db7ca515d, signal: λce74f8bea0fb, budget: λ3483b94b364f}) {
  const λde31f103e6b0 = /^(?:GET|HEAD)$/i.test(λ69c5558b73ae || "\x47\x45\x54") && null == λ846db7ca515d;
  for (let λ69c5558b73ae = 0; ;λ69c5558b73ae++) {
    λce74f8bea0fb?.throwIfAborted();
    try {
      const λ69c5558b73ae = await λ65e1557ecf75();
      return λde31f103e6b0 && λ69c5558b73ae.body?.getReader && _0x7e8643_0(λ69c5558b73ae.headers) ? {
        ...λ69c5558b73ae,
        body: await _0x7e8643_1(λ69c5558b73ae.body, λ3483b94b364f)
      } : λ69c5558b73ae;
    } catch (λ65e1557ecf75) {
      if (!λde31f103e6b0 || λ69c5558b73ae >= 1 || λce74f8bea0fb?.aborted || !_0xeb3350_7(λ65e1557ecf75)) throw λ65e1557ecf75;
    }
  }
}
