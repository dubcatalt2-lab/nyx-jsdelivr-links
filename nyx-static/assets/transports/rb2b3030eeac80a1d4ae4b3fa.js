export function preserveTransferErrors(λ3a404b4f853f) {
  const λ0e9086fb820d = λ3a404b4f853f.stream_response;
  λ3a404b4f853f.stream_response = function(λ3a404b4f853f, λ5e31a29aff47, λ6bc7d91ad149, λ4b0c9163340d) {
    let λd948b708363d;
    const λ37c5067ebfd3 = new Promise(λ3a404b4f853f => {
      λd948b708363d = λ3a404b4f853f;
    });
    return λ0e9086fb820d.call(this, λ3a404b4f853f, λ3a404b4f853f => {
      const λ0e9086fb820d = λ3a404b4f853f.getReader();
      λ5e31a29aff47(new ReadableStream({
        async pull(λ3a404b4f853f) {
          try {
            const λ5e31a29aff47 = await λ0e9086fb820d.read();
            if (!λ5e31a29aff47.done) return void λ3a404b4f853f.enqueue(λ5e31a29aff47.value);
            const λ6bc7d91ad149 = await λ37c5067ebfd3;
            if (-1 === λ6bc7d91ad149 || λ4b0c9163340d?.aborted) throw λ4b0c9163340d?.reason || new DOMException("\x54\x68\x65\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x61\x62\x6f\x72\x74\x65\x64\x2e", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
            if (0 !== λ6bc7d91ad149) throw new TypeError(`\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x65\x72\x72\x6f\x72\x20\x63\x6f\x64\x65\x20${λ6bc7d91ad149}\x3a\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x6c\x69\x62\x63\x75\x72\x6c\x20\x74\x72\x61\x6e\x73\x66\x65\x72`);
            λ3a404b4f853f.close();
          } catch (λ0e9086fb820d) {
            λ3a404b4f853f.error(λ0e9086fb820d);
          }
        },
        cancel: λ3a404b4f853f => λ0e9086fb820d.cancel(λ3a404b4f853f)
      }, {
        highWaterMark: 0
      }));
    }, λ3a404b4f853f => {
      λd948b708363d(λ3a404b4f853f), λ6bc7d91ad149(λ3a404b4f853f);
    }, λ4b0c9163340d);
  };
}

export const bufferLimit = 33554432;

const _0x7e8643_0 = λ3a404b4f853f => /\berror code (?:18|52|56|92)\b/i.test(String(λ3a404b4f853f?.message || λ3a404b4f853f)), _0x7e8643_1 = λ3a404b4f853f => λ3a404b4f853f.some(([λ3a404b4f853f, λ0e9086fb820d]) => "\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65" === λ3a404b4f853f.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ0e9086fb820d).split("\x3b")[0].trim()));

async function _0x7e8643_2(λ3a404b4f853f, λ0e9086fb820d) {
  const λ5e31a29aff47 = λ3a404b4f853f.getReader(), λ6bc7d91ad149 = [];
  let λ4b0c9163340d = 0;
  const _0x7e8643_5 = () => {
    λ0e9086fb820d.bytes -= λ4b0c9163340d, λ4b0c9163340d = 0, λ6bc7d91ad149.length = 0;
  };
  try {
    for (;;) {
      const λ3a404b4f853f = await λ5e31a29aff47.read();
      if (λ3a404b4f853f.done) {
        const λ3a404b4f853f = new Blob(λ6bc7d91ad149).stream();
        return _0x7e8643_5(), λ3a404b4f853f;
      }
      if (λ4b0c9163340d + λ3a404b4f853f.value.byteLength > 16777216 || λ0e9086fb820d.bytes + λ3a404b4f853f.value.byteLength > 33554432) {
        let λd948b708363d = λ3a404b4f853f.value;
        return new ReadableStream({
          async pull(λ3a404b4f853f) {
            try {
              if (λ6bc7d91ad149.length) {
                const λ5e31a29aff47 = λ6bc7d91ad149.shift();
                return λ4b0c9163340d -= λ5e31a29aff47.byteLength, λ0e9086fb820d.bytes -= λ5e31a29aff47.byteLength, 
                void λ3a404b4f853f.enqueue(λ5e31a29aff47);
              }
              if (λd948b708363d) return λ3a404b4f853f.enqueue(λd948b708363d), void (λd948b708363d = null);
              const λ37c5067ebfd3 = await λ5e31a29aff47.read();
              λ37c5067ebfd3.done ? λ3a404b4f853f.close() : λ3a404b4f853f.enqueue(λ37c5067ebfd3.value);
            } catch (λ0e9086fb820d) {
              _0x7e8643_5(), λ3a404b4f853f.error(λ0e9086fb820d);
            }
          },
          cancel: λ3a404b4f853f => (_0x7e8643_5(), λd948b708363d = null, λ5e31a29aff47.cancel(λ3a404b4f853f))
        }, {
          highWaterMark: 0
        });
      }
      λ6bc7d91ad149.push(λ3a404b4f853f.value), λ4b0c9163340d += λ3a404b4f853f.value.byteLength, 
      λ0e9086fb820d.bytes += λ3a404b4f853f.value.byteLength;
    }
  } catch (λ3a404b4f853f) {
    throw _0x7e8643_5(), λ5e31a29aff47.cancel(λ3a404b4f853f).catch(() => {}), λ3a404b4f853f;
  }
}

export async function requestWithTransferRetry(λ3a404b4f853f, {method: λ0e9086fb820d, body: λ5e31a29aff47, signal: λ6bc7d91ad149, budget: λ4b0c9163340d}) {
  const λd948b708363d = /^(?:GET|HEAD)$/i.test(λ0e9086fb820d || "\x47\x45\x54") && null == λ5e31a29aff47;
  for (let λ0e9086fb820d = 0; ;λ0e9086fb820d++) {
    λ6bc7d91ad149?.throwIfAborted();
    try {
      const λ0e9086fb820d = await λ3a404b4f853f();
      return λd948b708363d && λ0e9086fb820d.body?.getReader && _0x7e8643_1(λ0e9086fb820d.headers) ? {
        ...λ0e9086fb820d,
        body: await _0x7e8643_2(λ0e9086fb820d.body, λ4b0c9163340d)
      } : λ0e9086fb820d;
    } catch (λ3a404b4f853f) {
      if (!λd948b708363d || λ0e9086fb820d >= 1 || λ6bc7d91ad149?.aborted || !_0x7e8643_0(λ3a404b4f853f)) throw λ3a404b4f853f;
    }
  }
}
