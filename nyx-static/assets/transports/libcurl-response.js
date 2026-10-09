export function preserveTransferErrors(λ0383ec5880d5) {
  const λ2a83ef2f6a6b = λ0383ec5880d5.stream_response;
  λ0383ec5880d5.stream_response = function(λ0383ec5880d5, λ7788b0b926b4, λbd7e963b6de1, λ59bab3647eec) {
    let λ63dbe7c9d8f6;
    const λe720269e1edb = new Promise(λ0383ec5880d5 => {
      λ63dbe7c9d8f6 = λ0383ec5880d5;
    });
    return λ2a83ef2f6a6b.call(this, λ0383ec5880d5, λ0383ec5880d5 => {
      const λ2a83ef2f6a6b = λ0383ec5880d5.getReader();
      λ7788b0b926b4(new ReadableStream({
        async pull(λ0383ec5880d5) {
          try {
            const λ7788b0b926b4 = await λ2a83ef2f6a6b.read();
            if (!λ7788b0b926b4.done) return void λ0383ec5880d5.enqueue(λ7788b0b926b4.value);
            const λbd7e963b6de1 = await λe720269e1edb;
            if (-1 === λbd7e963b6de1 || λ59bab3647eec?.aborted) throw λ59bab3647eec?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λbd7e963b6de1) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λbd7e963b6de1}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x6c\x69\x62\x63\x75\x72\x6c\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ0383ec5880d5.close();
          } catch (λ2a83ef2f6a6b) {
            λ0383ec5880d5.error(λ2a83ef2f6a6b);
          }
        },
        cancel: λ0383ec5880d5 => λ2a83ef2f6a6b.cancel(λ0383ec5880d5)
      }, {
        highWaterMark: 0
      }));
    }, λ0383ec5880d5 => {
      λ63dbe7c9d8f6(λ0383ec5880d5), λbd7e963b6de1(λ0383ec5880d5);
    }, λ59bab3647eec);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λ0383ec5880d5 => /\berror code (?:18|52|56|92)\b/i.test(String(λ0383ec5880d5?.message || λ0383ec5880d5)), _0x7e8643_1 = λ0383ec5880d5 => λ0383ec5880d5.some(([λ0383ec5880d5, λ2a83ef2f6a6b]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ0383ec5880d5.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ2a83ef2f6a6b).split("\x3b")[0].trim()));

async function _0x7e8643_2(λ0383ec5880d5, λ2a83ef2f6a6b) {
  const λ7788b0b926b4 = λ0383ec5880d5.getReader(), λbd7e963b6de1 = [];
  let λ59bab3647eec = 0;
  const _0x7e8643_5 = () => {
    λ2a83ef2f6a6b.bytes -= λ59bab3647eec, λ59bab3647eec = 0, λbd7e963b6de1.length = 0;
  };
  try {
    for (;;) {
      const λ0383ec5880d5 = await λ7788b0b926b4.read();
      if (λ0383ec5880d5.done) {
        const λ0383ec5880d5 = new Blob(λbd7e963b6de1).stream();
        return _0x7e8643_5(), λ0383ec5880d5;
      }
      if (λ59bab3647eec + λ0383ec5880d5.value.byteLength > 16777216 || λ2a83ef2f6a6b.bytes + λ0383ec5880d5.value.byteLength > 33554432) {
        let λ63dbe7c9d8f6 = λ0383ec5880d5.value;
        return new ReadableStream({
          async pull(λ0383ec5880d5) {
            try {
              if (λbd7e963b6de1.length) {
                const λ7788b0b926b4 = λbd7e963b6de1.shift();
                return λ59bab3647eec -= λ7788b0b926b4.byteLength, λ2a83ef2f6a6b.bytes -= λ7788b0b926b4.byteLength, 
                void λ0383ec5880d5.enqueue(λ7788b0b926b4);
              }
              if (λ63dbe7c9d8f6) return λ0383ec5880d5.enqueue(λ63dbe7c9d8f6), void (λ63dbe7c9d8f6 = null);
              const λe720269e1edb = await λ7788b0b926b4.read();
              λe720269e1edb.done ? λ0383ec5880d5.close() : λ0383ec5880d5.enqueue(λe720269e1edb.value);
            } catch (λ2a83ef2f6a6b) {
              _0x7e8643_5(), λ0383ec5880d5.error(λ2a83ef2f6a6b);
            }
          },
          cancel: λ0383ec5880d5 => (_0x7e8643_5(), λ63dbe7c9d8f6 = null, λ7788b0b926b4.cancel(λ0383ec5880d5))
        }, {
          highWaterMark: 0
        });
      }
      λbd7e963b6de1.push(λ0383ec5880d5.value), λ59bab3647eec += λ0383ec5880d5.value.byteLength, 
      λ2a83ef2f6a6b.bytes += λ0383ec5880d5.value.byteLength;
    }
  } catch (λ0383ec5880d5) {
    throw _0x7e8643_5(), λ7788b0b926b4.cancel(λ0383ec5880d5).catch(() => {}), λ0383ec5880d5;
  }
}

export async function requestWithTransferRetry(λ0383ec5880d5, {method: λ2a83ef2f6a6b, body: λ7788b0b926b4, signal: λbd7e963b6de1, budget: λ59bab3647eec}) {
  const λ63dbe7c9d8f6 = /^(?:GET|HEAD)$/i.test(λ2a83ef2f6a6b || "\x47\x45\x54") && null == λ7788b0b926b4;
  for (let λ2a83ef2f6a6b = 0; ;λ2a83ef2f6a6b++) {
    λbd7e963b6de1?.throwIfAborted();
    try {
      const λ2a83ef2f6a6b = await λ0383ec5880d5();
      return λ63dbe7c9d8f6 && λ2a83ef2f6a6b.body?.getReader && _0x7e8643_1(λ2a83ef2f6a6b.headers) ? {
        ...λ2a83ef2f6a6b,
        body: await _0x7e8643_2(λ2a83ef2f6a6b.body, λ59bab3647eec)
      } : λ2a83ef2f6a6b;
    } catch (λ0383ec5880d5) {
      if (!λ63dbe7c9d8f6 || λ2a83ef2f6a6b >= 1 || λbd7e963b6de1?.aborted || !_0x7e8643_0(λ0383ec5880d5)) throw λ0383ec5880d5;
    }
  }
}
