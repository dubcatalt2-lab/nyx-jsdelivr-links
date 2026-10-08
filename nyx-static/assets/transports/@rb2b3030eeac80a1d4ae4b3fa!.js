export function preserveTransferErrors(λ54d67ef658eb) {
  const λf9956b61a980 = λ54d67ef658eb.stream_response;
  λ54d67ef658eb.stream_response = function(λ54d67ef658eb, λ18b0761fa9f3, λ3ef4e387185b, λe0e09a2f485d) {
    let λce9472c8c8bc;
    const λa4667148ac51 = new Promise(λ54d67ef658eb => {
      λce9472c8c8bc = λ54d67ef658eb;
    });
    return λf9956b61a980.call(this, λ54d67ef658eb, λ54d67ef658eb => {
      const λf9956b61a980 = λ54d67ef658eb.getReader();
      λ18b0761fa9f3(new ReadableStream({
        async pull(λ54d67ef658eb) {
          try {
            const λ18b0761fa9f3 = await λf9956b61a980.read();
            if (!λ18b0761fa9f3.done) return void λ54d67ef658eb.enqueue(λ18b0761fa9f3.value);
            const λ3ef4e387185b = await λa4667148ac51;
            if (-1 === λ3ef4e387185b || λe0e09a2f485d?.aborted) throw λe0e09a2f485d?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λ3ef4e387185b) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λ3ef4e387185b}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x6c\x69\x62\x63\x75\x72\x6c\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ54d67ef658eb.close();
          } catch (λf9956b61a980) {
            λ54d67ef658eb.error(λf9956b61a980);
          }
        },
        cancel: λ54d67ef658eb => λf9956b61a980.cancel(λ54d67ef658eb)
      }, {
        highWaterMark: 0
      }));
    }, λ54d67ef658eb => {
      λce9472c8c8bc(λ54d67ef658eb), λ3ef4e387185b(λ54d67ef658eb);
    }, λe0e09a2f485d);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λ54d67ef658eb => /\berror code (?:18|52|56|92)\b/i.test(String(λ54d67ef658eb?.message || λ54d67ef658eb)), _0x7e8643_1 = λ54d67ef658eb => λ54d67ef658eb.some(([λ54d67ef658eb, λf9956b61a980]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ54d67ef658eb.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λf9956b61a980).split("\x3b")[0].trim()));

async function _0x7e8643_2(λ54d67ef658eb, λf9956b61a980) {
  const λ18b0761fa9f3 = λ54d67ef658eb.getReader(), λ3ef4e387185b = [];
  let λe0e09a2f485d = 0;
  const _0x7e8643_5 = () => {
    λf9956b61a980.bytes -= λe0e09a2f485d, λe0e09a2f485d = 0, λ3ef4e387185b.length = 0;
  };
  try {
    for (;;) {
      const λ54d67ef658eb = await λ18b0761fa9f3.read();
      if (λ54d67ef658eb.done) {
        const λ54d67ef658eb = new Blob(λ3ef4e387185b).stream();
        return _0x7e8643_5(), λ54d67ef658eb;
      }
      if (λe0e09a2f485d + λ54d67ef658eb.value.byteLength > 16777216 || λf9956b61a980.bytes + λ54d67ef658eb.value.byteLength > 33554432) {
        let λce9472c8c8bc = λ54d67ef658eb.value;
        return new ReadableStream({
          async pull(λ54d67ef658eb) {
            try {
              if (λ3ef4e387185b.length) {
                const λ18b0761fa9f3 = λ3ef4e387185b.shift();
                return λe0e09a2f485d -= λ18b0761fa9f3.byteLength, λf9956b61a980.bytes -= λ18b0761fa9f3.byteLength, 
                void λ54d67ef658eb.enqueue(λ18b0761fa9f3);
              }
              if (λce9472c8c8bc) return λ54d67ef658eb.enqueue(λce9472c8c8bc), void (λce9472c8c8bc = null);
              const λa4667148ac51 = await λ18b0761fa9f3.read();
              λa4667148ac51.done ? λ54d67ef658eb.close() : λ54d67ef658eb.enqueue(λa4667148ac51.value);
            } catch (λf9956b61a980) {
              _0x7e8643_5(), λ54d67ef658eb.error(λf9956b61a980);
            }
          },
          cancel: λ54d67ef658eb => (_0x7e8643_5(), λce9472c8c8bc = null, λ18b0761fa9f3.cancel(λ54d67ef658eb))
        }, {
          highWaterMark: 0
        });
      }
      λ3ef4e387185b.push(λ54d67ef658eb.value), λe0e09a2f485d += λ54d67ef658eb.value.byteLength, 
      λf9956b61a980.bytes += λ54d67ef658eb.value.byteLength;
    }
  } catch (λ54d67ef658eb) {
    throw _0x7e8643_5(), λ18b0761fa9f3.cancel(λ54d67ef658eb).catch(() => {}), λ54d67ef658eb;
  }
}

export async function requestWithTransferRetry(λ54d67ef658eb, {method: λf9956b61a980, body: λ18b0761fa9f3, signal: λ3ef4e387185b, budget: λe0e09a2f485d}) {
  const λce9472c8c8bc = /^(?:GET|HEAD)$/i.test(λf9956b61a980 || "\x47\x45\x54") && null == λ18b0761fa9f3;
  for (let λf9956b61a980 = 0; ;λf9956b61a980++) {
    λ3ef4e387185b?.throwIfAborted();
    try {
      const λf9956b61a980 = await λ54d67ef658eb();
      return λce9472c8c8bc && λf9956b61a980.body?.getReader && _0x7e8643_1(λf9956b61a980.headers) ? {
        ...λf9956b61a980,
        body: await _0x7e8643_2(λf9956b61a980.body, λe0e09a2f485d)
      } : λf9956b61a980;
    } catch (λ54d67ef658eb) {
      if (!λce9472c8c8bc || λf9956b61a980 >= 1 || λ3ef4e387185b?.aborted || !_0x7e8643_0(λ54d67ef658eb)) throw λ54d67ef658eb;
    }
  }
}
