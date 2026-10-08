export function preserveTransferErrors(λ0fed5c2d496d) {
  const λb9849c003c97 = λ0fed5c2d496d.stream_response;
  λ0fed5c2d496d.stream_response = function(λ0fed5c2d496d, λ0b58e9fd5c98, λc606be1f0a84, λ5f61b82c288f) {
    let λf5cf290d31d5;
    const λ685484a62b27 = new Promise(λ0fed5c2d496d => {
      λf5cf290d31d5 = λ0fed5c2d496d;
    });
    return λb9849c003c97.call(this, λ0fed5c2d496d, λ0fed5c2d496d => {
      const λb9849c003c97 = λ0fed5c2d496d.getReader();
      λ0b58e9fd5c98(new ReadableStream({
        async pull(λ0fed5c2d496d) {
          try {
            const λ0b58e9fd5c98 = await λb9849c003c97.read();
            if (!λ0b58e9fd5c98.done) return void λ0fed5c2d496d.enqueue(λ0b58e9fd5c98.value);
            const λc606be1f0a84 = await λ685484a62b27;
            if (-1 === λc606be1f0a84 || λ5f61b82c288f?.aborted) throw λ5f61b82c288f?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λc606be1f0a84) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λc606be1f0a84}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x74\x65\x78\x74\x6c\x69\x62\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ0fed5c2d496d.close();
          } catch (λb9849c003c97) {
            λ0fed5c2d496d.error(λb9849c003c97);
          }
        },
        cancel: λ0fed5c2d496d => λb9849c003c97.cancel(λ0fed5c2d496d)
      }, {
        highWaterMark: 0
      }));
    }, λ0fed5c2d496d => {
      λf5cf290d31d5(λ0fed5c2d496d), λc606be1f0a84(λ0fed5c2d496d);
    }, λ5f61b82c288f);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λ0fed5c2d496d => /\berror code (?:18|52|56|92)\b/i.test(String(λ0fed5c2d496d?.message || λ0fed5c2d496d)), _0x7e8643_1 = λ0fed5c2d496d => λ0fed5c2d496d.some(([λ0fed5c2d496d, λb9849c003c97]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ0fed5c2d496d.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λb9849c003c97).split("\x3b")[0].trim()));

async function _0x7e8643_2(λ0fed5c2d496d, λb9849c003c97) {
  const λ0b58e9fd5c98 = λ0fed5c2d496d.getReader(), λc606be1f0a84 = [];
  let λ5f61b82c288f = 0;
  const _0x7e8643_5 = () => {
    λb9849c003c97.bytes -= λ5f61b82c288f, λ5f61b82c288f = 0, λc606be1f0a84.length = 0;
  };
  try {
    for (;;) {
      const λ0fed5c2d496d = await λ0b58e9fd5c98.read();
      if (λ0fed5c2d496d.done) {
        const λ0fed5c2d496d = new Blob(λc606be1f0a84).stream();
        return _0x7e8643_5(), λ0fed5c2d496d;
      }
      if (λ5f61b82c288f + λ0fed5c2d496d.value.byteLength > 16777216 || λb9849c003c97.bytes + λ0fed5c2d496d.value.byteLength > 33554432) {
        let λf5cf290d31d5 = λ0fed5c2d496d.value;
        return new ReadableStream({
          async pull(λ0fed5c2d496d) {
            try {
              if (λc606be1f0a84.length) {
                const λ0b58e9fd5c98 = λc606be1f0a84.shift();
                return λ5f61b82c288f -= λ0b58e9fd5c98.byteLength, λb9849c003c97.bytes -= λ0b58e9fd5c98.byteLength, 
                void λ0fed5c2d496d.enqueue(λ0b58e9fd5c98);
              }
              if (λf5cf290d31d5) return λ0fed5c2d496d.enqueue(λf5cf290d31d5), void (λf5cf290d31d5 = null);
              const λ685484a62b27 = await λ0b58e9fd5c98.read();
              λ685484a62b27.done ? λ0fed5c2d496d.close() : λ0fed5c2d496d.enqueue(λ685484a62b27.value);
            } catch (λb9849c003c97) {
              _0x7e8643_5(), λ0fed5c2d496d.error(λb9849c003c97);
            }
          },
          cancel: λ0fed5c2d496d => (_0x7e8643_5(), λf5cf290d31d5 = null, λ0b58e9fd5c98.cancel(λ0fed5c2d496d))
        }, {
          highWaterMark: 0
        });
      }
      λc606be1f0a84.push(λ0fed5c2d496d.value), λ5f61b82c288f += λ0fed5c2d496d.value.byteLength, 
      λb9849c003c97.bytes += λ0fed5c2d496d.value.byteLength;
    }
  } catch (λ0fed5c2d496d) {
    throw _0x7e8643_5(), λ0b58e9fd5c98.cancel(λ0fed5c2d496d).catch(() => {}), λ0fed5c2d496d;
  }
}

export async function requestWithTransferRetry(λ0fed5c2d496d, {method: λb9849c003c97, body: λ0b58e9fd5c98, signal: λc606be1f0a84, budget: λ5f61b82c288f}) {
  const λf5cf290d31d5 = /^(?:GET|HEAD)$/i.test(λb9849c003c97 || "\x47\x45\x54") && null == λ0b58e9fd5c98;
  for (let λb9849c003c97 = 0; ;λb9849c003c97++) {
    λc606be1f0a84?.throwIfAborted();
    try {
      const λb9849c003c97 = await λ0fed5c2d496d();
      return λf5cf290d31d5 && λb9849c003c97.body?.getReader && _0x7e8643_1(λb9849c003c97.headers) ? {
        ...λb9849c003c97,
        body: await _0x7e8643_2(λb9849c003c97.body, λ5f61b82c288f)
      } : λb9849c003c97;
    } catch (λ0fed5c2d496d) {
      if (!λf5cf290d31d5 || λb9849c003c97 >= 1 || λc606be1f0a84?.aborted || !_0x7e8643_0(λ0fed5c2d496d)) throw λ0fed5c2d496d;
    }
  }
}
