export function preserveTransferErrors(λ470a2fb21442) {
  const λe98b91fa5512 = λ470a2fb21442.stream_response;
  λ470a2fb21442.stream_response = function(λ470a2fb21442, λ200cff2bae7e, λ0d0806ce6e16, λ6b0946a86101) {
    let λd266f7c05a27;
    const λ5e96b6d27224 = new Promise(λ470a2fb21442 => {
      λd266f7c05a27 = λ470a2fb21442;
    });
    return λe98b91fa5512.call(this, λ470a2fb21442, λ470a2fb21442 => {
      const λe98b91fa5512 = λ470a2fb21442.getReader();
      λ200cff2bae7e(new ReadableStream({
        async pull(λ470a2fb21442) {
          try {
            const λ200cff2bae7e = await λe98b91fa5512.read();
            if (!λ200cff2bae7e.done) return void λ470a2fb21442.enqueue(λ200cff2bae7e.value);
            const λ0d0806ce6e16 = await λ5e96b6d27224;
            if (-1 === λ0d0806ce6e16 || λ6b0946a86101?.aborted) throw λ6b0946a86101?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λ0d0806ce6e16) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λ0d0806ce6e16}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x6c\x69\x62\x63\x75\x72\x6c\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ470a2fb21442.close();
          } catch (λe98b91fa5512) {
            λ470a2fb21442.error(λe98b91fa5512);
          }
        },
        cancel: λ470a2fb21442 => λe98b91fa5512.cancel(λ470a2fb21442)
      }, {
        highWaterMark: 0
      }));
    }, λ470a2fb21442 => {
      λd266f7c05a27(λ470a2fb21442), λ0d0806ce6e16(λ470a2fb21442);
    }, λ6b0946a86101);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λ470a2fb21442 => /\berror code (?:18|52|56|92)\b/i.test(String(λ470a2fb21442?.message || λ470a2fb21442)), _0x7e8643_1 = λ470a2fb21442 => λ470a2fb21442.some(([λ470a2fb21442, λe98b91fa5512]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ470a2fb21442.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λe98b91fa5512).split("\x3b")[0].trim()));

async function _0x7e8643_2(λ470a2fb21442, λe98b91fa5512) {
  const λ200cff2bae7e = λ470a2fb21442.getReader(), λ0d0806ce6e16 = [];
  let λ6b0946a86101 = 0;
  const _0x7e8643_5 = () => {
    λe98b91fa5512.bytes -= λ6b0946a86101, λ6b0946a86101 = 0, λ0d0806ce6e16.length = 0;
  };
  try {
    for (;;) {
      const λ470a2fb21442 = await λ200cff2bae7e.read();
      if (λ470a2fb21442.done) {
        const λ470a2fb21442 = new Blob(λ0d0806ce6e16).stream();
        return _0x7e8643_5(), λ470a2fb21442;
      }
      if (λ6b0946a86101 + λ470a2fb21442.value.byteLength > 16777216 || λe98b91fa5512.bytes + λ470a2fb21442.value.byteLength > 33554432) {
        let λd266f7c05a27 = λ470a2fb21442.value;
        return new ReadableStream({
          async pull(λ470a2fb21442) {
            try {
              if (λ0d0806ce6e16.length) {
                const λ200cff2bae7e = λ0d0806ce6e16.shift();
                return λ6b0946a86101 -= λ200cff2bae7e.byteLength, λe98b91fa5512.bytes -= λ200cff2bae7e.byteLength, 
                void λ470a2fb21442.enqueue(λ200cff2bae7e);
              }
              if (λd266f7c05a27) return λ470a2fb21442.enqueue(λd266f7c05a27), void (λd266f7c05a27 = null);
              const λ5e96b6d27224 = await λ200cff2bae7e.read();
              λ5e96b6d27224.done ? λ470a2fb21442.close() : λ470a2fb21442.enqueue(λ5e96b6d27224.value);
            } catch (λe98b91fa5512) {
              _0x7e8643_5(), λ470a2fb21442.error(λe98b91fa5512);
            }
          },
          cancel: λ470a2fb21442 => (_0x7e8643_5(), λd266f7c05a27 = null, λ200cff2bae7e.cancel(λ470a2fb21442))
        }, {
          highWaterMark: 0
        });
      }
      λ0d0806ce6e16.push(λ470a2fb21442.value), λ6b0946a86101 += λ470a2fb21442.value.byteLength, 
      λe98b91fa5512.bytes += λ470a2fb21442.value.byteLength;
    }
  } catch (λ470a2fb21442) {
    throw _0x7e8643_5(), λ200cff2bae7e.cancel(λ470a2fb21442).catch(() => {}), λ470a2fb21442;
  }
}

export async function requestWithTransferRetry(λ470a2fb21442, {method: λe98b91fa5512, body: λ200cff2bae7e, signal: λ0d0806ce6e16, budget: λ6b0946a86101}) {
  const λd266f7c05a27 = /^(?:GET|HEAD)$/i.test(λe98b91fa5512 || "\x47\x45\x54") && null == λ200cff2bae7e;
  for (let λe98b91fa5512 = 0; ;λe98b91fa5512++) {
    λ0d0806ce6e16?.throwIfAborted();
    try {
      const λe98b91fa5512 = await λ470a2fb21442();
      return λd266f7c05a27 && λe98b91fa5512.body?.getReader && _0x7e8643_1(λe98b91fa5512.headers) ? {
        ...λe98b91fa5512,
        body: await _0x7e8643_2(λe98b91fa5512.body, λ6b0946a86101)
      } : λe98b91fa5512;
    } catch (λ470a2fb21442) {
      if (!λd266f7c05a27 || λe98b91fa5512 >= 1 || λ0d0806ce6e16?.aborted || !_0x7e8643_0(λ470a2fb21442)) throw λ470a2fb21442;
    }
  }
}
