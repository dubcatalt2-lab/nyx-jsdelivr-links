export function preserveTransferErrors(λ104f67611228) {
  const λb072501e108c = λ104f67611228.stream_response;
  λ104f67611228.stream_response = function(λ104f67611228, λ5b422a468723, λ51ba09f87a1d, λf892f8686a32) {
    let λ79c54bccd55c;
    const λc805ac135bd0 = new Promise(λ104f67611228 => {
      λ79c54bccd55c = λ104f67611228;
    });
    return λb072501e108c.call(this, λ104f67611228, λ104f67611228 => {
      const λb072501e108c = λ104f67611228.getReader();
      λ5b422a468723(new ReadableStream({
        async pull(λ104f67611228) {
          try {
            const λ5b422a468723 = await λb072501e108c.read();
            if (!λ5b422a468723.done) return void λ104f67611228.enqueue(λ5b422a468723.value);
            const λ51ba09f87a1d = await λc805ac135bd0;
            if (-1 === λ51ba09f87a1d || λf892f8686a32?.aborted) throw λf892f8686a32?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λ51ba09f87a1d) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λ51ba09f87a1d}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x74\x65\x78\x74\x6c\x69\x62\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ104f67611228.close();
          } catch (λb072501e108c) {
            λ104f67611228.error(λb072501e108c);
          }
        },
        cancel: λ104f67611228 => λb072501e108c.cancel(λ104f67611228)
      }, {
        highWaterMark: 0
      }));
    }, λ104f67611228 => {
      λ79c54bccd55c(λ104f67611228), λ51ba09f87a1d(λ104f67611228);
    }, λf892f8686a32);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λ104f67611228 => /\berror code (?:18|52|56|92)\b/i.test(String(λ104f67611228?.message || λ104f67611228)), _0x7e8643_1 = λ104f67611228 => λ104f67611228.some(([λ104f67611228, λb072501e108c]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ104f67611228.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λb072501e108c).split("\x3b")[0].trim()));

async function _0x7e8643_2(λ104f67611228, λb072501e108c) {
  const λ5b422a468723 = λ104f67611228.getReader(), λ51ba09f87a1d = [];
  let λf892f8686a32 = 0;
  const _0x7e8643_5 = () => {
    λb072501e108c.bytes -= λf892f8686a32, λf892f8686a32 = 0, λ51ba09f87a1d.length = 0;
  };
  try {
    for (;;) {
      const λ104f67611228 = await λ5b422a468723.read();
      if (λ104f67611228.done) {
        const λ104f67611228 = new Blob(λ51ba09f87a1d).stream();
        return _0x7e8643_5(), λ104f67611228;
      }
      if (λf892f8686a32 + λ104f67611228.value.byteLength > 16777216 || λb072501e108c.bytes + λ104f67611228.value.byteLength > 33554432) {
        let λ79c54bccd55c = λ104f67611228.value;
        return new ReadableStream({
          async pull(λ104f67611228) {
            try {
              if (λ51ba09f87a1d.length) {
                const λ5b422a468723 = λ51ba09f87a1d.shift();
                return λf892f8686a32 -= λ5b422a468723.byteLength, λb072501e108c.bytes -= λ5b422a468723.byteLength, 
                void λ104f67611228.enqueue(λ5b422a468723);
              }
              if (λ79c54bccd55c) return λ104f67611228.enqueue(λ79c54bccd55c), void (λ79c54bccd55c = null);
              const λc805ac135bd0 = await λ5b422a468723.read();
              λc805ac135bd0.done ? λ104f67611228.close() : λ104f67611228.enqueue(λc805ac135bd0.value);
            } catch (λb072501e108c) {
              _0x7e8643_5(), λ104f67611228.error(λb072501e108c);
            }
          },
          cancel: λ104f67611228 => (_0x7e8643_5(), λ79c54bccd55c = null, λ5b422a468723.cancel(λ104f67611228))
        }, {
          highWaterMark: 0
        });
      }
      λ51ba09f87a1d.push(λ104f67611228.value), λf892f8686a32 += λ104f67611228.value.byteLength, 
      λb072501e108c.bytes += λ104f67611228.value.byteLength;
    }
  } catch (λ104f67611228) {
    throw _0x7e8643_5(), λ5b422a468723.cancel(λ104f67611228).catch(() => {}), λ104f67611228;
  }
}

export async function requestWithTransferRetry(λ104f67611228, {method: λb072501e108c, body: λ5b422a468723, signal: λ51ba09f87a1d, budget: λf892f8686a32}) {
  const λ79c54bccd55c = /^(?:GET|HEAD)$/i.test(λb072501e108c || "\x47\x45\x54") && null == λ5b422a468723;
  for (let λb072501e108c = 0; ;λb072501e108c++) {
    λ51ba09f87a1d?.throwIfAborted();
    try {
      const λb072501e108c = await λ104f67611228();
      return λ79c54bccd55c && λb072501e108c.body?.getReader && _0x7e8643_1(λb072501e108c.headers) ? {
        ...λb072501e108c,
        body: await _0x7e8643_2(λb072501e108c.body, λf892f8686a32)
      } : λb072501e108c;
    } catch (λ104f67611228) {
      if (!λ79c54bccd55c || λb072501e108c >= 1 || λ51ba09f87a1d?.aborted || !_0x7e8643_0(λ104f67611228)) throw λ104f67611228;
    }
  }
}
