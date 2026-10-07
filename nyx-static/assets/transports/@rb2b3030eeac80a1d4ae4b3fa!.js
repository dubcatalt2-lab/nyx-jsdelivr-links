export function preserveTransferErrors(λ6b7ff3e580d2) {
  const λ1c18117475ba = λ6b7ff3e580d2.stream_response;
  λ6b7ff3e580d2.stream_response = function(λ6b7ff3e580d2, λ27f6467ab04e, λe625ff467918, λ37552261bab5) {
    let λ066af634f3a3;
    const λ2605ab7d188d = new Promise(λ6b7ff3e580d2 => {
      λ066af634f3a3 = λ6b7ff3e580d2;
    });
    return λ1c18117475ba.call(this, λ6b7ff3e580d2, λ6b7ff3e580d2 => {
      const λ1c18117475ba = λ6b7ff3e580d2.getReader();
      λ27f6467ab04e(new ReadableStream({
        async pull(λ6b7ff3e580d2) {
          try {
            const λ27f6467ab04e = await λ1c18117475ba.read();
            if (!λ27f6467ab04e.done) return void λ6b7ff3e580d2.enqueue(λ27f6467ab04e.value);
            const λe625ff467918 = await λ2605ab7d188d;
            if (-1 === λe625ff467918 || λ37552261bab5?.aborted) throw λ37552261bab5?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λe625ff467918) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λe625ff467918}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x6c\x69\x62\x63\x75\x72\x6c\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ6b7ff3e580d2.close();
          } catch (λ1c18117475ba) {
            λ6b7ff3e580d2.error(λ1c18117475ba);
          }
        },
        cancel: λ6b7ff3e580d2 => λ1c18117475ba.cancel(λ6b7ff3e580d2)
      }, {
        highWaterMark: 0
      }));
    }, λ6b7ff3e580d2 => {
      λ066af634f3a3(λ6b7ff3e580d2), λe625ff467918(λ6b7ff3e580d2);
    }, λ37552261bab5);
  };
}

export const bufferLimit = 33554432;

const _0xeb3350_7 = λ6b7ff3e580d2 => /\berror code (?:18|52|56|92)\b/i.test(String(λ6b7ff3e580d2?.message || λ6b7ff3e580d2)), _0x7e8643_0 = λ6b7ff3e580d2 => λ6b7ff3e580d2.some(([λ6b7ff3e580d2, λ1c18117475ba]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ6b7ff3e580d2.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ1c18117475ba).split("\x3b")[0].trim()));

async function _0x7e8643_1(λ6b7ff3e580d2, λ1c18117475ba) {
  const λ27f6467ab04e = λ6b7ff3e580d2.getReader(), λe625ff467918 = [];
  let λ37552261bab5 = 0;
  const _0x7e8643_5 = () => {
    λ1c18117475ba.bytes -= λ37552261bab5, λ37552261bab5 = 0, λe625ff467918.length = 0;
  };
  try {
    for (;;) {
      const λ6b7ff3e580d2 = await λ27f6467ab04e.read();
      if (λ6b7ff3e580d2.done) {
        const λ6b7ff3e580d2 = new Blob(λe625ff467918).stream();
        return _0x7e8643_5(), λ6b7ff3e580d2;
      }
      if (λ37552261bab5 + λ6b7ff3e580d2.value.byteLength > 16777216 || λ1c18117475ba.bytes + λ6b7ff3e580d2.value.byteLength > 33554432) {
        let λ066af634f3a3 = λ6b7ff3e580d2.value;
        return new ReadableStream({
          async pull(λ6b7ff3e580d2) {
            try {
              if (λe625ff467918.length) {
                const λ27f6467ab04e = λe625ff467918.shift();
                return λ37552261bab5 -= λ27f6467ab04e.byteLength, λ1c18117475ba.bytes -= λ27f6467ab04e.byteLength, 
                void λ6b7ff3e580d2.enqueue(λ27f6467ab04e);
              }
              if (λ066af634f3a3) return λ6b7ff3e580d2.enqueue(λ066af634f3a3), void (λ066af634f3a3 = null);
              const λ2605ab7d188d = await λ27f6467ab04e.read();
              λ2605ab7d188d.done ? λ6b7ff3e580d2.close() : λ6b7ff3e580d2.enqueue(λ2605ab7d188d.value);
            } catch (λ1c18117475ba) {
              _0x7e8643_5(), λ6b7ff3e580d2.error(λ1c18117475ba);
            }
          },
          cancel: λ6b7ff3e580d2 => (_0x7e8643_5(), λ066af634f3a3 = null, λ27f6467ab04e.cancel(λ6b7ff3e580d2))
        }, {
          highWaterMark: 0
        });
      }
      λe625ff467918.push(λ6b7ff3e580d2.value), λ37552261bab5 += λ6b7ff3e580d2.value.byteLength, 
      λ1c18117475ba.bytes += λ6b7ff3e580d2.value.byteLength;
    }
  } catch (λ6b7ff3e580d2) {
    throw _0x7e8643_5(), λ27f6467ab04e.cancel(λ6b7ff3e580d2).catch(() => {}), λ6b7ff3e580d2;
  }
}

export async function requestWithTransferRetry(λ6b7ff3e580d2, {method: λ1c18117475ba, body: λ27f6467ab04e, signal: λe625ff467918, budget: λ37552261bab5}) {
  const λ066af634f3a3 = /^(?:GET|HEAD)$/i.test(λ1c18117475ba || "\x47\x45\x54") && null == λ27f6467ab04e;
  for (let λ1c18117475ba = 0; ;λ1c18117475ba++) {
    λe625ff467918?.throwIfAborted();
    try {
      const λ1c18117475ba = await λ6b7ff3e580d2();
      return λ066af634f3a3 && λ1c18117475ba.body?.getReader && _0x7e8643_0(λ1c18117475ba.headers) ? {
        ...λ1c18117475ba,
        body: await _0x7e8643_1(λ1c18117475ba.body, λ37552261bab5)
      } : λ1c18117475ba;
    } catch (λ6b7ff3e580d2) {
      if (!λ066af634f3a3 || λ1c18117475ba >= 1 || λe625ff467918?.aborted || !_0xeb3350_7(λ6b7ff3e580d2)) throw λ6b7ff3e580d2;
    }
  }
}
