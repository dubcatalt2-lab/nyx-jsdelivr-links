export function preserveTransferErrors(λ7fe582ee3460) {
  const λe81dbd78bb06 = λ7fe582ee3460.stream_response;
  λ7fe582ee3460.stream_response = function(λ7fe582ee3460, λ1719183d1ede, λ3ca9c5c442be, λ35e705b852c3) {
    let λdee76a1e80e1;
    const λ961584590a07 = new Promise(λ7fe582ee3460 => {
      λdee76a1e80e1 = λ7fe582ee3460;
    });
    return λe81dbd78bb06.call(this, λ7fe582ee3460, λ7fe582ee3460 => {
      const λe81dbd78bb06 = λ7fe582ee3460.getReader();
      λ1719183d1ede(new ReadableStream({
        async pull(λ7fe582ee3460) {
          try {
            const λ1719183d1ede = await λe81dbd78bb06.read();
            if (!λ1719183d1ede.done) return void λ7fe582ee3460.enqueue(λ1719183d1ede.value);
            const λ3ca9c5c442be = await λ961584590a07;
            if (-1 === λ3ca9c5c442be || λ35e705b852c3?.aborted) throw λ35e705b852c3?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λ3ca9c5c442be) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λ3ca9c5c442be}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x74\x65\x78\x74\x6c\x69\x62\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ7fe582ee3460.close();
          } catch (λe81dbd78bb06) {
            λ7fe582ee3460.error(λe81dbd78bb06);
          }
        },
        cancel: λ7fe582ee3460 => λe81dbd78bb06.cancel(λ7fe582ee3460)
      }, {
        highWaterMark: 0
      }));
    }, λ7fe582ee3460 => {
      λdee76a1e80e1(λ7fe582ee3460), λ3ca9c5c442be(λ7fe582ee3460);
    }, λ35e705b852c3);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λ7fe582ee3460 => /\berror code (?:18|52|56|92)\b/i.test(String(λ7fe582ee3460?.message || λ7fe582ee3460)), _0x7e8643_1 = λ7fe582ee3460 => λ7fe582ee3460.some(([λ7fe582ee3460, λe81dbd78bb06]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ7fe582ee3460.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λe81dbd78bb06).split("\x3b")[0].trim()));

async function _0x7e8643_2(λ7fe582ee3460, λe81dbd78bb06) {
  const λ1719183d1ede = λ7fe582ee3460.getReader(), λ3ca9c5c442be = [];
  let λ35e705b852c3 = 0;
  const _0x7e8643_5 = () => {
    λe81dbd78bb06.bytes -= λ35e705b852c3, λ35e705b852c3 = 0, λ3ca9c5c442be.length = 0;
  };
  try {
    for (;;) {
      const λ7fe582ee3460 = await λ1719183d1ede.read();
      if (λ7fe582ee3460.done) {
        const λ7fe582ee3460 = new Blob(λ3ca9c5c442be).stream();
        return _0x7e8643_5(), λ7fe582ee3460;
      }
      if (λ35e705b852c3 + λ7fe582ee3460.value.byteLength > 16777216 || λe81dbd78bb06.bytes + λ7fe582ee3460.value.byteLength > 33554432) {
        let λdee76a1e80e1 = λ7fe582ee3460.value;
        return new ReadableStream({
          async pull(λ7fe582ee3460) {
            try {
              if (λ3ca9c5c442be.length) {
                const λ1719183d1ede = λ3ca9c5c442be.shift();
                return λ35e705b852c3 -= λ1719183d1ede.byteLength, λe81dbd78bb06.bytes -= λ1719183d1ede.byteLength, 
                void λ7fe582ee3460.enqueue(λ1719183d1ede);
              }
              if (λdee76a1e80e1) return λ7fe582ee3460.enqueue(λdee76a1e80e1), void (λdee76a1e80e1 = null);
              const λ961584590a07 = await λ1719183d1ede.read();
              λ961584590a07.done ? λ7fe582ee3460.close() : λ7fe582ee3460.enqueue(λ961584590a07.value);
            } catch (λe81dbd78bb06) {
              _0x7e8643_5(), λ7fe582ee3460.error(λe81dbd78bb06);
            }
          },
          cancel: λ7fe582ee3460 => (_0x7e8643_5(), λdee76a1e80e1 = null, λ1719183d1ede.cancel(λ7fe582ee3460))
        }, {
          highWaterMark: 0
        });
      }
      λ3ca9c5c442be.push(λ7fe582ee3460.value), λ35e705b852c3 += λ7fe582ee3460.value.byteLength, 
      λe81dbd78bb06.bytes += λ7fe582ee3460.value.byteLength;
    }
  } catch (λ7fe582ee3460) {
    throw _0x7e8643_5(), λ1719183d1ede.cancel(λ7fe582ee3460).catch(() => {}), λ7fe582ee3460;
  }
}

export async function requestWithTransferRetry(λ7fe582ee3460, {method: λe81dbd78bb06, body: λ1719183d1ede, signal: λ3ca9c5c442be, budget: λ35e705b852c3}) {
  const λdee76a1e80e1 = /^(?:GET|HEAD)$/i.test(λe81dbd78bb06 || "\x47\x45\x54") && null == λ1719183d1ede;
  for (let λe81dbd78bb06 = 0; ;λe81dbd78bb06++) {
    λ3ca9c5c442be?.throwIfAborted();
    try {
      const λe81dbd78bb06 = await λ7fe582ee3460();
      return λdee76a1e80e1 && λe81dbd78bb06.body?.getReader && _0x7e8643_1(λe81dbd78bb06.headers) ? {
        ...λe81dbd78bb06,
        body: await _0x7e8643_2(λe81dbd78bb06.body, λ35e705b852c3)
      } : λe81dbd78bb06;
    } catch (λ7fe582ee3460) {
      if (!λdee76a1e80e1 || λe81dbd78bb06 >= 1 || λ3ca9c5c442be?.aborted || !_0x7e8643_0(λ7fe582ee3460)) throw λ7fe582ee3460;
    }
  }
}
