export function preserveTransferErrors(λf137c1400d55) {
  const λ28df63a3103c = λf137c1400d55.stream_response;
  λf137c1400d55.stream_response = function(λf137c1400d55, λ268ce47affe3, λ88f06aaacc29, λ91be293247ee) {
    let λf76d3d56ddb9;
    const λ10c6257c899b = new Promise(λf137c1400d55 => {
      λf76d3d56ddb9 = λf137c1400d55;
    });
    return λ28df63a3103c.call(this, λf137c1400d55, λf137c1400d55 => {
      const λ28df63a3103c = λf137c1400d55.getReader();
      λ268ce47affe3(new ReadableStream({
        async pull(λf137c1400d55) {
          try {
            const λ268ce47affe3 = await λ28df63a3103c.read();
            if (!λ268ce47affe3.done) return void λf137c1400d55.enqueue(λ268ce47affe3.value);
            const λ88f06aaacc29 = await λ10c6257c899b;
            if (-1 === λ88f06aaacc29 || λ91be293247ee?.aborted) throw λ91be293247ee?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λ88f06aaacc29) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λ88f06aaacc29}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x74\x65\x78\x74\x6c\x69\x62\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λf137c1400d55.close();
          } catch (λ28df63a3103c) {
            λf137c1400d55.error(λ28df63a3103c);
          }
        },
        cancel: λf137c1400d55 => λ28df63a3103c.cancel(λf137c1400d55)
      }, {
        highWaterMark: 0
      }));
    }, λf137c1400d55 => {
      λf76d3d56ddb9(λf137c1400d55), λ88f06aaacc29(λf137c1400d55);
    }, λ91be293247ee);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λf137c1400d55 => /\berror code (?:18|52|56|92)\b/i.test(String(λf137c1400d55?.message || λf137c1400d55)), _0x7e8643_1 = λf137c1400d55 => λf137c1400d55.some(([λf137c1400d55, λ28df63a3103c]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λf137c1400d55.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ28df63a3103c).split("\x3b")[0].trim()));

async function _0x7e8643_2(λf137c1400d55, λ28df63a3103c) {
  const λ268ce47affe3 = λf137c1400d55.getReader(), λ88f06aaacc29 = [];
  let λ91be293247ee = 0;
  const _0x7e8643_5 = () => {
    λ28df63a3103c.bytes -= λ91be293247ee, λ91be293247ee = 0, λ88f06aaacc29.length = 0;
  };
  try {
    for (;;) {
      const λf137c1400d55 = await λ268ce47affe3.read();
      if (λf137c1400d55.done) {
        const λf137c1400d55 = new Blob(λ88f06aaacc29).stream();
        return _0x7e8643_5(), λf137c1400d55;
      }
      if (λ91be293247ee + λf137c1400d55.value.byteLength > 16777216 || λ28df63a3103c.bytes + λf137c1400d55.value.byteLength > 33554432) {
        let λf76d3d56ddb9 = λf137c1400d55.value;
        return new ReadableStream({
          async pull(λf137c1400d55) {
            try {
              if (λ88f06aaacc29.length) {
                const λ268ce47affe3 = λ88f06aaacc29.shift();
                return λ91be293247ee -= λ268ce47affe3.byteLength, λ28df63a3103c.bytes -= λ268ce47affe3.byteLength, 
                void λf137c1400d55.enqueue(λ268ce47affe3);
              }
              if (λf76d3d56ddb9) return λf137c1400d55.enqueue(λf76d3d56ddb9), void (λf76d3d56ddb9 = null);
              const λ10c6257c899b = await λ268ce47affe3.read();
              λ10c6257c899b.done ? λf137c1400d55.close() : λf137c1400d55.enqueue(λ10c6257c899b.value);
            } catch (λ28df63a3103c) {
              _0x7e8643_5(), λf137c1400d55.error(λ28df63a3103c);
            }
          },
          cancel: λf137c1400d55 => (_0x7e8643_5(), λf76d3d56ddb9 = null, λ268ce47affe3.cancel(λf137c1400d55))
        }, {
          highWaterMark: 0
        });
      }
      λ88f06aaacc29.push(λf137c1400d55.value), λ91be293247ee += λf137c1400d55.value.byteLength, 
      λ28df63a3103c.bytes += λf137c1400d55.value.byteLength;
    }
  } catch (λf137c1400d55) {
    throw _0x7e8643_5(), λ268ce47affe3.cancel(λf137c1400d55).catch(() => {}), λf137c1400d55;
  }
}

export async function requestWithTransferRetry(λf137c1400d55, {method: λ28df63a3103c, body: λ268ce47affe3, signal: λ88f06aaacc29, budget: λ91be293247ee}) {
  const λf76d3d56ddb9 = /^(?:GET|HEAD)$/i.test(λ28df63a3103c || "\x47\x45\x54") && null == λ268ce47affe3;
  for (let λ28df63a3103c = 0; ;λ28df63a3103c++) {
    λ88f06aaacc29?.throwIfAborted();
    try {
      const λ28df63a3103c = await λf137c1400d55();
      return λf76d3d56ddb9 && λ28df63a3103c.body?.getReader && _0x7e8643_1(λ28df63a3103c.headers) ? {
        ...λ28df63a3103c,
        body: await _0x7e8643_2(λ28df63a3103c.body, λ91be293247ee)
      } : λ28df63a3103c;
    } catch (λf137c1400d55) {
      if (!λf76d3d56ddb9 || λ28df63a3103c >= 1 || λ88f06aaacc29?.aborted || !_0x7e8643_0(λf137c1400d55)) throw λf137c1400d55;
    }
  }
}
