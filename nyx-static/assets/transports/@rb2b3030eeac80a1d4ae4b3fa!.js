export function preserveTransferErrors(λc0c7cfbb318f) {
  const λ4263b0727973 = λc0c7cfbb318f.stream_response;
  λc0c7cfbb318f.stream_response = function(λc0c7cfbb318f, λ47d443ffc750, λdaa8e62468af, λd7f348a2294c) {
    let λa29984ea8b91;
    const λ6e73539ad363 = new Promise(λc0c7cfbb318f => {
      λa29984ea8b91 = λc0c7cfbb318f;
    });
    return λ4263b0727973.call(this, λc0c7cfbb318f, λc0c7cfbb318f => {
      const λ4263b0727973 = λc0c7cfbb318f.getReader();
      λ47d443ffc750(new ReadableStream({
        async pull(λc0c7cfbb318f) {
          try {
            const λ47d443ffc750 = await λ4263b0727973.read();
            if (!λ47d443ffc750.done) return void λc0c7cfbb318f.enqueue(λ47d443ffc750.value);
            const λdaa8e62468af = await λ6e73539ad363;
            if (-1 === λdaa8e62468af || λd7f348a2294c?.aborted) throw λd7f348a2294c?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λdaa8e62468af) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λdaa8e62468af}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x6c\x69\x62\x63\x75\x72\x6c\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λc0c7cfbb318f.close();
          } catch (λ4263b0727973) {
            λc0c7cfbb318f.error(λ4263b0727973);
          }
        },
        cancel: λc0c7cfbb318f => λ4263b0727973.cancel(λc0c7cfbb318f)
      }, {
        highWaterMark: 0
      }));
    }, λc0c7cfbb318f => {
      λa29984ea8b91(λc0c7cfbb318f), λdaa8e62468af(λc0c7cfbb318f);
    }, λd7f348a2294c);
  };
}

export const bufferLimit = 33554432;

const _0xeb3350_7 = λc0c7cfbb318f => /\berror code (?:18|52|56|92)\b/i.test(String(λc0c7cfbb318f?.message || λc0c7cfbb318f)), _0x7e8643_0 = λc0c7cfbb318f => λc0c7cfbb318f.some(([λc0c7cfbb318f, λ4263b0727973]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λc0c7cfbb318f.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ4263b0727973).split("\x3b")[0].trim()));

async function _0x7e8643_1(λc0c7cfbb318f, λ4263b0727973) {
  const λ47d443ffc750 = λc0c7cfbb318f.getReader(), λdaa8e62468af = [];
  let λd7f348a2294c = 0;
  const _0x7e8643_5 = () => {
    λ4263b0727973.bytes -= λd7f348a2294c, λd7f348a2294c = 0, λdaa8e62468af.length = 0;
  };
  try {
    for (;;) {
      const λc0c7cfbb318f = await λ47d443ffc750.read();
      if (λc0c7cfbb318f.done) {
        const λc0c7cfbb318f = new Blob(λdaa8e62468af).stream();
        return _0x7e8643_5(), λc0c7cfbb318f;
      }
      if (λd7f348a2294c + λc0c7cfbb318f.value.byteLength > 16777216 || λ4263b0727973.bytes + λc0c7cfbb318f.value.byteLength > 33554432) {
        let λa29984ea8b91 = λc0c7cfbb318f.value;
        return new ReadableStream({
          async pull(λc0c7cfbb318f) {
            try {
              if (λdaa8e62468af.length) {
                const λ47d443ffc750 = λdaa8e62468af.shift();
                return λd7f348a2294c -= λ47d443ffc750.byteLength, λ4263b0727973.bytes -= λ47d443ffc750.byteLength, 
                void λc0c7cfbb318f.enqueue(λ47d443ffc750);
              }
              if (λa29984ea8b91) return λc0c7cfbb318f.enqueue(λa29984ea8b91), void (λa29984ea8b91 = null);
              const λ6e73539ad363 = await λ47d443ffc750.read();
              λ6e73539ad363.done ? λc0c7cfbb318f.close() : λc0c7cfbb318f.enqueue(λ6e73539ad363.value);
            } catch (λ4263b0727973) {
              _0x7e8643_5(), λc0c7cfbb318f.error(λ4263b0727973);
            }
          },
          cancel: λc0c7cfbb318f => (_0x7e8643_5(), λa29984ea8b91 = null, λ47d443ffc750.cancel(λc0c7cfbb318f))
        }, {
          highWaterMark: 0
        });
      }
      λdaa8e62468af.push(λc0c7cfbb318f.value), λd7f348a2294c += λc0c7cfbb318f.value.byteLength, 
      λ4263b0727973.bytes += λc0c7cfbb318f.value.byteLength;
    }
  } catch (λc0c7cfbb318f) {
    throw _0x7e8643_5(), λ47d443ffc750.cancel(λc0c7cfbb318f).catch(() => {}), λc0c7cfbb318f;
  }
}

export async function requestWithTransferRetry(λc0c7cfbb318f, {method: λ4263b0727973, body: λ47d443ffc750, signal: λdaa8e62468af, budget: λd7f348a2294c}) {
  const λa29984ea8b91 = /^(?:GET|HEAD)$/i.test(λ4263b0727973 || "\x47\x45\x54") && null == λ47d443ffc750;
  for (let λ4263b0727973 = 0; ;λ4263b0727973++) {
    λdaa8e62468af?.throwIfAborted();
    try {
      const λ4263b0727973 = await λc0c7cfbb318f();
      return λa29984ea8b91 && λ4263b0727973.body?.getReader && _0x7e8643_0(λ4263b0727973.headers) ? {
        ...λ4263b0727973,
        body: await _0x7e8643_1(λ4263b0727973.body, λd7f348a2294c)
      } : λ4263b0727973;
    } catch (λc0c7cfbb318f) {
      if (!λa29984ea8b91 || λ4263b0727973 >= 1 || λdaa8e62468af?.aborted || !_0xeb3350_7(λc0c7cfbb318f)) throw λc0c7cfbb318f;
    }
  }
}
