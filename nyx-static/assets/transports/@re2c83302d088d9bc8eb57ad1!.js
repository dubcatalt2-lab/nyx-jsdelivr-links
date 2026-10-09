export function preserveTransferErrors(λ98928b7637c9) {
  const λ757dfe105aa4 = λ98928b7637c9.stream_response;
  λ98928b7637c9.stream_response = function(λ98928b7637c9, λb278a07b55b7, λ225bf0a54f61, λf41661edc61e) {
    let λ363af960ba79;
    const λf3616d3d2ae9 = new Promise(λ98928b7637c9 => {
      λ363af960ba79 = λ98928b7637c9;
    });
    return λ757dfe105aa4.call(this, λ98928b7637c9, λ98928b7637c9 => {
      const λ757dfe105aa4 = λ98928b7637c9.getReader();
      λb278a07b55b7(new ReadableStream({
        async pull(λ98928b7637c9) {
          try {
            const λb278a07b55b7 = await λ757dfe105aa4.read();
            if (!λb278a07b55b7.done) return void λ98928b7637c9.enqueue(λb278a07b55b7.value);
            const λ225bf0a54f61 = await λf3616d3d2ae9;
            if (-1 === λ225bf0a54f61 || λf41661edc61e?.aborted) throw λf41661edc61e?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λ225bf0a54f61) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λ225bf0a54f61}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x74\x65\x78\x74\x6c\x69\x62\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ98928b7637c9.close();
          } catch (λ757dfe105aa4) {
            λ98928b7637c9.error(λ757dfe105aa4);
          }
        },
        cancel: λ98928b7637c9 => λ757dfe105aa4.cancel(λ98928b7637c9)
      }, {
        highWaterMark: 0
      }));
    }, λ98928b7637c9 => {
      λ363af960ba79(λ98928b7637c9), λ225bf0a54f61(λ98928b7637c9);
    }, λf41661edc61e);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λ98928b7637c9 => /\berror code (?:18|52|56|92)\b/i.test(String(λ98928b7637c9?.message || λ98928b7637c9)), _0x7e8643_1 = λ98928b7637c9 => λ98928b7637c9.some(([λ98928b7637c9, λ757dfe105aa4]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ98928b7637c9.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ757dfe105aa4).split("\x3b")[0].trim()));

async function _0x7e8643_2(λ98928b7637c9, λ757dfe105aa4) {
  const λb278a07b55b7 = λ98928b7637c9.getReader(), λ225bf0a54f61 = [];
  let λf41661edc61e = 0;
  const _0x7e8643_5 = () => {
    λ757dfe105aa4.bytes -= λf41661edc61e, λf41661edc61e = 0, λ225bf0a54f61.length = 0;
  };
  try {
    for (;;) {
      const λ98928b7637c9 = await λb278a07b55b7.read();
      if (λ98928b7637c9.done) {
        const λ98928b7637c9 = new Blob(λ225bf0a54f61).stream();
        return _0x7e8643_5(), λ98928b7637c9;
      }
      if (λf41661edc61e + λ98928b7637c9.value.byteLength > 16777216 || λ757dfe105aa4.bytes + λ98928b7637c9.value.byteLength > 33554432) {
        let λ363af960ba79 = λ98928b7637c9.value;
        return new ReadableStream({
          async pull(λ98928b7637c9) {
            try {
              if (λ225bf0a54f61.length) {
                const λb278a07b55b7 = λ225bf0a54f61.shift();
                return λf41661edc61e -= λb278a07b55b7.byteLength, λ757dfe105aa4.bytes -= λb278a07b55b7.byteLength, 
                void λ98928b7637c9.enqueue(λb278a07b55b7);
              }
              if (λ363af960ba79) return λ98928b7637c9.enqueue(λ363af960ba79), void (λ363af960ba79 = null);
              const λf3616d3d2ae9 = await λb278a07b55b7.read();
              λf3616d3d2ae9.done ? λ98928b7637c9.close() : λ98928b7637c9.enqueue(λf3616d3d2ae9.value);
            } catch (λ757dfe105aa4) {
              _0x7e8643_5(), λ98928b7637c9.error(λ757dfe105aa4);
            }
          },
          cancel: λ98928b7637c9 => (_0x7e8643_5(), λ363af960ba79 = null, λb278a07b55b7.cancel(λ98928b7637c9))
        }, {
          highWaterMark: 0
        });
      }
      λ225bf0a54f61.push(λ98928b7637c9.value), λf41661edc61e += λ98928b7637c9.value.byteLength, 
      λ757dfe105aa4.bytes += λ98928b7637c9.value.byteLength;
    }
  } catch (λ98928b7637c9) {
    throw _0x7e8643_5(), λb278a07b55b7.cancel(λ98928b7637c9).catch(() => {}), λ98928b7637c9;
  }
}

export async function requestWithTransferRetry(λ98928b7637c9, {method: λ757dfe105aa4, body: λb278a07b55b7, signal: λ225bf0a54f61, budget: λf41661edc61e}) {
  const λ363af960ba79 = /^(?:GET|HEAD)$/i.test(λ757dfe105aa4 || "\x47\x45\x54") && null == λb278a07b55b7;
  for (let λ757dfe105aa4 = 0; ;λ757dfe105aa4++) {
    λ225bf0a54f61?.throwIfAborted();
    try {
      const λ757dfe105aa4 = await λ98928b7637c9();
      return λ363af960ba79 && λ757dfe105aa4.body?.getReader && _0x7e8643_1(λ757dfe105aa4.headers) ? {
        ...λ757dfe105aa4,
        body: await _0x7e8643_2(λ757dfe105aa4.body, λf41661edc61e)
      } : λ757dfe105aa4;
    } catch (λ98928b7637c9) {
      if (!λ363af960ba79 || λ757dfe105aa4 >= 1 || λ225bf0a54f61?.aborted || !_0x7e8643_0(λ98928b7637c9)) throw λ98928b7637c9;
    }
  }
}
