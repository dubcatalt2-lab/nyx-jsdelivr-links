export function preserveTransferErrors(λ39148b0c3c03) {
  const λcc27a8dee47f = λ39148b0c3c03.stream_response;
  λ39148b0c3c03.stream_response = function(λ39148b0c3c03, λ61d74eef2378, λ29dbc0b2fc1b, λ0f14026fb3f9) {
    let λbf76990c47b1;
    const λ0fe7fed74cc2 = new Promise(λ39148b0c3c03 => {
      λbf76990c47b1 = λ39148b0c3c03;
    });
    return λcc27a8dee47f.call(this, λ39148b0c3c03, λ39148b0c3c03 => {
      const λcc27a8dee47f = λ39148b0c3c03.getReader();
      λ61d74eef2378(new ReadableStream({
        async pull(λ39148b0c3c03) {
          try {
            const λ61d74eef2378 = await λcc27a8dee47f.read();
            if (!λ61d74eef2378.done) return void λ39148b0c3c03.enqueue(λ61d74eef2378.value);
            const λ29dbc0b2fc1b = await λ0fe7fed74cc2;
            if (-1 === λ29dbc0b2fc1b || λ0f14026fb3f9?.aborted) throw λ0f14026fb3f9?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λ29dbc0b2fc1b) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λ29dbc0b2fc1b}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x6c\x69\x62\x63\x75\x72\x6c\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ39148b0c3c03.close();
          } catch (λcc27a8dee47f) {
            λ39148b0c3c03.error(λcc27a8dee47f);
          }
        },
        cancel: λ39148b0c3c03 => λcc27a8dee47f.cancel(λ39148b0c3c03)
      }, {
        highWaterMark: 0
      }));
    }, λ39148b0c3c03 => {
      λbf76990c47b1(λ39148b0c3c03), λ29dbc0b2fc1b(λ39148b0c3c03);
    }, λ0f14026fb3f9);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λ39148b0c3c03 => /\berror code (?:18|52|56|92)\b/i.test(String(λ39148b0c3c03?.message || λ39148b0c3c03)), _0x7e8643_1 = λ39148b0c3c03 => λ39148b0c3c03.some(([λ39148b0c3c03, λcc27a8dee47f]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ39148b0c3c03.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λcc27a8dee47f).split("\x3b")[0].trim()));

async function _0x7e8643_2(λ39148b0c3c03, λcc27a8dee47f) {
  const λ61d74eef2378 = λ39148b0c3c03.getReader(), λ29dbc0b2fc1b = [];
  let λ0f14026fb3f9 = 0;
  const _0x7e8643_5 = () => {
    λcc27a8dee47f.bytes -= λ0f14026fb3f9, λ0f14026fb3f9 = 0, λ29dbc0b2fc1b.length = 0;
  };
  try {
    for (;;) {
      const λ39148b0c3c03 = await λ61d74eef2378.read();
      if (λ39148b0c3c03.done) {
        const λ39148b0c3c03 = new Blob(λ29dbc0b2fc1b).stream();
        return _0x7e8643_5(), λ39148b0c3c03;
      }
      if (λ0f14026fb3f9 + λ39148b0c3c03.value.byteLength > 16777216 || λcc27a8dee47f.bytes + λ39148b0c3c03.value.byteLength > 33554432) {
        let λbf76990c47b1 = λ39148b0c3c03.value;
        return new ReadableStream({
          async pull(λ39148b0c3c03) {
            try {
              if (λ29dbc0b2fc1b.length) {
                const λ61d74eef2378 = λ29dbc0b2fc1b.shift();
                return λ0f14026fb3f9 -= λ61d74eef2378.byteLength, λcc27a8dee47f.bytes -= λ61d74eef2378.byteLength, 
                void λ39148b0c3c03.enqueue(λ61d74eef2378);
              }
              if (λbf76990c47b1) return λ39148b0c3c03.enqueue(λbf76990c47b1), void (λbf76990c47b1 = null);
              const λ0fe7fed74cc2 = await λ61d74eef2378.read();
              λ0fe7fed74cc2.done ? λ39148b0c3c03.close() : λ39148b0c3c03.enqueue(λ0fe7fed74cc2.value);
            } catch (λcc27a8dee47f) {
              _0x7e8643_5(), λ39148b0c3c03.error(λcc27a8dee47f);
            }
          },
          cancel: λ39148b0c3c03 => (_0x7e8643_5(), λbf76990c47b1 = null, λ61d74eef2378.cancel(λ39148b0c3c03))
        }, {
          highWaterMark: 0
        });
      }
      λ29dbc0b2fc1b.push(λ39148b0c3c03.value), λ0f14026fb3f9 += λ39148b0c3c03.value.byteLength, 
      λcc27a8dee47f.bytes += λ39148b0c3c03.value.byteLength;
    }
  } catch (λ39148b0c3c03) {
    throw _0x7e8643_5(), λ61d74eef2378.cancel(λ39148b0c3c03).catch(() => {}), λ39148b0c3c03;
  }
}

export async function requestWithTransferRetry(λ39148b0c3c03, {method: λcc27a8dee47f, body: λ61d74eef2378, signal: λ29dbc0b2fc1b, budget: λ0f14026fb3f9}) {
  const λbf76990c47b1 = /^(?:GET|HEAD)$/i.test(λcc27a8dee47f || "\x47\x45\x54") && null == λ61d74eef2378;
  for (let λcc27a8dee47f = 0; ;λcc27a8dee47f++) {
    λ29dbc0b2fc1b?.throwIfAborted();
    try {
      const λcc27a8dee47f = await λ39148b0c3c03();
      return λbf76990c47b1 && λcc27a8dee47f.body?.getReader && _0x7e8643_1(λcc27a8dee47f.headers) ? {
        ...λcc27a8dee47f,
        body: await _0x7e8643_2(λcc27a8dee47f.body, λ0f14026fb3f9)
      } : λcc27a8dee47f;
    } catch (λ39148b0c3c03) {
      if (!λbf76990c47b1 || λcc27a8dee47f >= 1 || λ29dbc0b2fc1b?.aborted || !_0x7e8643_0(λ39148b0c3c03)) throw λ39148b0c3c03;
    }
  }
}
