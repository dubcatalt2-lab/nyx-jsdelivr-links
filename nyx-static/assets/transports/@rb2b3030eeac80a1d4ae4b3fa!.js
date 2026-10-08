export function preserveTransferErrors(λ321214f40e5f) {
  const λ12c21ef69f34 = λ321214f40e5f.stream_response;
  λ321214f40e5f.stream_response = function(λ321214f40e5f, λ7a21c330c21f, λe6cc2c601582, λ4ef696030126) {
    let λ442caca815fe;
    const λ1aad001a156d = new Promise(λ321214f40e5f => {
      λ442caca815fe = λ321214f40e5f;
    });
    return λ12c21ef69f34.call(this, λ321214f40e5f, λ321214f40e5f => {
      const λ12c21ef69f34 = λ321214f40e5f.getReader();
      λ7a21c330c21f(new ReadableStream({
        async pull(λ321214f40e5f) {
          try {
            const λ7a21c330c21f = await λ12c21ef69f34.read();
            if (!λ7a21c330c21f.done) return void λ321214f40e5f.enqueue(λ7a21c330c21f.value);
            const λe6cc2c601582 = await λ1aad001a156d;
            if (-1 === λe6cc2c601582 || λ4ef696030126?.aborted) throw λ4ef696030126?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λe6cc2c601582) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λe6cc2c601582}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x6c\x69\x62\x63\x75\x72\x6c\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ321214f40e5f.close();
          } catch (λ12c21ef69f34) {
            λ321214f40e5f.error(λ12c21ef69f34);
          }
        },
        cancel: λ321214f40e5f => λ12c21ef69f34.cancel(λ321214f40e5f)
      }, {
        highWaterMark: 0
      }));
    }, λ321214f40e5f => {
      λ442caca815fe(λ321214f40e5f), λe6cc2c601582(λ321214f40e5f);
    }, λ4ef696030126);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λ321214f40e5f => /\berror code (?:18|52|56|92)\b/i.test(String(λ321214f40e5f?.message || λ321214f40e5f)), _0x7e8643_1 = λ321214f40e5f => λ321214f40e5f.some(([λ321214f40e5f, λ12c21ef69f34]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ321214f40e5f.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ12c21ef69f34).split("\x3b")[0].trim()));

async function _0x7e8643_2(λ321214f40e5f, λ12c21ef69f34) {
  const λ7a21c330c21f = λ321214f40e5f.getReader(), λe6cc2c601582 = [];
  let λ4ef696030126 = 0;
  const _0x7e8643_5 = () => {
    λ12c21ef69f34.bytes -= λ4ef696030126, λ4ef696030126 = 0, λe6cc2c601582.length = 0;
  };
  try {
    for (;;) {
      const λ321214f40e5f = await λ7a21c330c21f.read();
      if (λ321214f40e5f.done) {
        const λ321214f40e5f = new Blob(λe6cc2c601582).stream();
        return _0x7e8643_5(), λ321214f40e5f;
      }
      if (λ4ef696030126 + λ321214f40e5f.value.byteLength > 16777216 || λ12c21ef69f34.bytes + λ321214f40e5f.value.byteLength > 33554432) {
        let λ442caca815fe = λ321214f40e5f.value;
        return new ReadableStream({
          async pull(λ321214f40e5f) {
            try {
              if (λe6cc2c601582.length) {
                const λ7a21c330c21f = λe6cc2c601582.shift();
                return λ4ef696030126 -= λ7a21c330c21f.byteLength, λ12c21ef69f34.bytes -= λ7a21c330c21f.byteLength, 
                void λ321214f40e5f.enqueue(λ7a21c330c21f);
              }
              if (λ442caca815fe) return λ321214f40e5f.enqueue(λ442caca815fe), void (λ442caca815fe = null);
              const λ1aad001a156d = await λ7a21c330c21f.read();
              λ1aad001a156d.done ? λ321214f40e5f.close() : λ321214f40e5f.enqueue(λ1aad001a156d.value);
            } catch (λ12c21ef69f34) {
              _0x7e8643_5(), λ321214f40e5f.error(λ12c21ef69f34);
            }
          },
          cancel: λ321214f40e5f => (_0x7e8643_5(), λ442caca815fe = null, λ7a21c330c21f.cancel(λ321214f40e5f))
        }, {
          highWaterMark: 0
        });
      }
      λe6cc2c601582.push(λ321214f40e5f.value), λ4ef696030126 += λ321214f40e5f.value.byteLength, 
      λ12c21ef69f34.bytes += λ321214f40e5f.value.byteLength;
    }
  } catch (λ321214f40e5f) {
    throw _0x7e8643_5(), λ7a21c330c21f.cancel(λ321214f40e5f).catch(() => {}), λ321214f40e5f;
  }
}

export async function requestWithTransferRetry(λ321214f40e5f, {method: λ12c21ef69f34, body: λ7a21c330c21f, signal: λe6cc2c601582, budget: λ4ef696030126}) {
  const λ442caca815fe = /^(?:GET|HEAD)$/i.test(λ12c21ef69f34 || "\x47\x45\x54") && null == λ7a21c330c21f;
  for (let λ12c21ef69f34 = 0; ;λ12c21ef69f34++) {
    λe6cc2c601582?.throwIfAborted();
    try {
      const λ12c21ef69f34 = await λ321214f40e5f();
      return λ442caca815fe && λ12c21ef69f34.body?.getReader && _0x7e8643_1(λ12c21ef69f34.headers) ? {
        ...λ12c21ef69f34,
        body: await _0x7e8643_2(λ12c21ef69f34.body, λ4ef696030126)
      } : λ12c21ef69f34;
    } catch (λ321214f40e5f) {
      if (!λ442caca815fe || λ12c21ef69f34 >= 1 || λe6cc2c601582?.aborted || !_0x7e8643_0(λ321214f40e5f)) throw λ321214f40e5f;
    }
  }
}
