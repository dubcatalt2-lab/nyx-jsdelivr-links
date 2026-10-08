export function preserveTransferErrors(λ6998404415c3) {
  const λb755ccbff614 = λ6998404415c3.stream_response;
  λ6998404415c3.stream_response = function(λ6998404415c3, λ8a59ed30a130, λ410c3550143c, λ570e19255203) {
    let λ5ee6d14ab204;
    const λ9cb3b7f4d9e5 = new Promise(λ6998404415c3 => {
      λ5ee6d14ab204 = λ6998404415c3;
    });
    return λb755ccbff614.call(this, λ6998404415c3, λ6998404415c3 => {
      const λb755ccbff614 = λ6998404415c3.getReader();
      λ8a59ed30a130(new ReadableStream({
        async pull(λ6998404415c3) {
          try {
            const λ8a59ed30a130 = await λb755ccbff614.read();
            if (!λ8a59ed30a130.done) return void λ6998404415c3.enqueue(λ8a59ed30a130.value);
            const λ410c3550143c = await λ9cb3b7f4d9e5;
            if (-1 === λ410c3550143c || λ570e19255203?.aborted) throw λ570e19255203?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λ410c3550143c) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λ410c3550143c}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x74\x65\x78\x74\x6c\x69\x62\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ6998404415c3.close();
          } catch (λb755ccbff614) {
            λ6998404415c3.error(λb755ccbff614);
          }
        },
        cancel: λ6998404415c3 => λb755ccbff614.cancel(λ6998404415c3)
      }, {
        highWaterMark: 0
      }));
    }, λ6998404415c3 => {
      λ5ee6d14ab204(λ6998404415c3), λ410c3550143c(λ6998404415c3);
    }, λ570e19255203);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λ6998404415c3 => /\berror code (?:18|52|56|92)\b/i.test(String(λ6998404415c3?.message || λ6998404415c3)), _0x7e8643_1 = λ6998404415c3 => λ6998404415c3.some(([λ6998404415c3, λb755ccbff614]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ6998404415c3.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λb755ccbff614).split("\x3b")[0].trim()));

async function _0x7e8643_2(λ6998404415c3, λb755ccbff614) {
  const λ8a59ed30a130 = λ6998404415c3.getReader(), λ410c3550143c = [];
  let λ570e19255203 = 0;
  const _0x7e8643_5 = () => {
    λb755ccbff614.bytes -= λ570e19255203, λ570e19255203 = 0, λ410c3550143c.length = 0;
  };
  try {
    for (;;) {
      const λ6998404415c3 = await λ8a59ed30a130.read();
      if (λ6998404415c3.done) {
        const λ6998404415c3 = new Blob(λ410c3550143c).stream();
        return _0x7e8643_5(), λ6998404415c3;
      }
      if (λ570e19255203 + λ6998404415c3.value.byteLength > 16777216 || λb755ccbff614.bytes + λ6998404415c3.value.byteLength > 33554432) {
        let λ5ee6d14ab204 = λ6998404415c3.value;
        return new ReadableStream({
          async pull(λ6998404415c3) {
            try {
              if (λ410c3550143c.length) {
                const λ8a59ed30a130 = λ410c3550143c.shift();
                return λ570e19255203 -= λ8a59ed30a130.byteLength, λb755ccbff614.bytes -= λ8a59ed30a130.byteLength, 
                void λ6998404415c3.enqueue(λ8a59ed30a130);
              }
              if (λ5ee6d14ab204) return λ6998404415c3.enqueue(λ5ee6d14ab204), void (λ5ee6d14ab204 = null);
              const λ9cb3b7f4d9e5 = await λ8a59ed30a130.read();
              λ9cb3b7f4d9e5.done ? λ6998404415c3.close() : λ6998404415c3.enqueue(λ9cb3b7f4d9e5.value);
            } catch (λb755ccbff614) {
              _0x7e8643_5(), λ6998404415c3.error(λb755ccbff614);
            }
          },
          cancel: λ6998404415c3 => (_0x7e8643_5(), λ5ee6d14ab204 = null, λ8a59ed30a130.cancel(λ6998404415c3))
        }, {
          highWaterMark: 0
        });
      }
      λ410c3550143c.push(λ6998404415c3.value), λ570e19255203 += λ6998404415c3.value.byteLength, 
      λb755ccbff614.bytes += λ6998404415c3.value.byteLength;
    }
  } catch (λ6998404415c3) {
    throw _0x7e8643_5(), λ8a59ed30a130.cancel(λ6998404415c3).catch(() => {}), λ6998404415c3;
  }
}

export async function requestWithTransferRetry(λ6998404415c3, {method: λb755ccbff614, body: λ8a59ed30a130, signal: λ410c3550143c, budget: λ570e19255203}) {
  const λ5ee6d14ab204 = /^(?:GET|HEAD)$/i.test(λb755ccbff614 || "\x47\x45\x54") && null == λ8a59ed30a130;
  for (let λb755ccbff614 = 0; ;λb755ccbff614++) {
    λ410c3550143c?.throwIfAborted();
    try {
      const λb755ccbff614 = await λ6998404415c3();
      return λ5ee6d14ab204 && λb755ccbff614.body?.getReader && _0x7e8643_1(λb755ccbff614.headers) ? {
        ...λb755ccbff614,
        body: await _0x7e8643_2(λb755ccbff614.body, λ570e19255203)
      } : λb755ccbff614;
    } catch (λ6998404415c3) {
      if (!λ5ee6d14ab204 || λb755ccbff614 >= 1 || λ410c3550143c?.aborted || !_0x7e8643_0(λ6998404415c3)) throw λ6998404415c3;
    }
  }
}
