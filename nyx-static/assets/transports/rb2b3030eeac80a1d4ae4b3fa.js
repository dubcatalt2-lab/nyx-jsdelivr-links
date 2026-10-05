export function preserveTransferErrors(λ9a4e575805a5) {
  const λf3306f8b0f77 = λ9a4e575805a5.stream_response;
  λ9a4e575805a5.stream_response = function(λ9a4e575805a5, λ3d6b390d3ee1, λa77adbc6c461, λ5d231be4bcda) {
    let λ0715a1c184b9;
    const λd0c29fe6eacd = new Promise(λ9a4e575805a5 => {
      λ0715a1c184b9 = λ9a4e575805a5;
    });
    return λf3306f8b0f77.call(this, λ9a4e575805a5, λ9a4e575805a5 => {
      const λf3306f8b0f77 = λ9a4e575805a5.getReader();
      λ3d6b390d3ee1(new ReadableStream({
        async pull(λ9a4e575805a5) {
          try {
            const λ3d6b390d3ee1 = await λf3306f8b0f77.read();
            if (!λ3d6b390d3ee1.done) return void λ9a4e575805a5.enqueue(λ3d6b390d3ee1.value);
            const λa77adbc6c461 = await λd0c29fe6eacd;
            if (-1 === λa77adbc6c461 || λ5d231be4bcda?.aborted) throw λ5d231be4bcda?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λa77adbc6c461) throw new TypeError(`Request failed with error code ${λa77adbc6c461}: incomplete libcurl transfer`);
            λ9a4e575805a5.close();
          } catch (λf3306f8b0f77) {
            λ9a4e575805a5.error(λf3306f8b0f77);
          }
        },
        cancel: λ9a4e575805a5 => λf3306f8b0f77.cancel(λ9a4e575805a5)
      }, {
        highWaterMark: 0
      }));
    }, λ9a4e575805a5 => {
      λ0715a1c184b9(λ9a4e575805a5), λa77adbc6c461(λ9a4e575805a5);
    }, λ5d231be4bcda);
  };
}

export const bufferLimit = 33554432;

const sc = λ9a4e575805a5 => /\berror code (?:18|52|56|92)\b/i.test(String(λ9a4e575805a5?.message || λ9a4e575805a5)), _u = λ9a4e575805a5 => λ9a4e575805a5.some(([λ9a4e575805a5, λf3306f8b0f77]) => "content-type" === λ9a4e575805a5.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λf3306f8b0f77).split(";")[0].trim()));

async function Xu(λ9a4e575805a5, λf3306f8b0f77) {
  const λ3d6b390d3ee1 = λ9a4e575805a5.getReader(), λa77adbc6c461 = [];
  let λ5d231be4bcda = 0;
  const o = () => {
    λf3306f8b0f77.bytes -= λ5d231be4bcda, λ5d231be4bcda = 0, λa77adbc6c461.length = 0;
  };
  try {
    for (;;) {
      const λ9a4e575805a5 = await λ3d6b390d3ee1.read();
      if (λ9a4e575805a5.done) {
        const λ9a4e575805a5 = new Blob(λa77adbc6c461).stream();
        return o(), λ9a4e575805a5;
      }
      if (λ5d231be4bcda + λ9a4e575805a5.value.byteLength > 16777216 || λf3306f8b0f77.bytes + λ9a4e575805a5.value.byteLength > 33554432) {
        let λ0715a1c184b9 = λ9a4e575805a5.value;
        return new ReadableStream({
          async pull(λ9a4e575805a5) {
            try {
              if (λa77adbc6c461.length) {
                const λ3d6b390d3ee1 = λa77adbc6c461.shift();
                return λ5d231be4bcda -= λ3d6b390d3ee1.byteLength, λf3306f8b0f77.bytes -= λ3d6b390d3ee1.byteLength, 
                void λ9a4e575805a5.enqueue(λ3d6b390d3ee1);
              }
              if (λ0715a1c184b9) return λ9a4e575805a5.enqueue(λ0715a1c184b9), void (λ0715a1c184b9 = null);
              const λd0c29fe6eacd = await λ3d6b390d3ee1.read();
              λd0c29fe6eacd.done ? λ9a4e575805a5.close() : λ9a4e575805a5.enqueue(λd0c29fe6eacd.value);
            } catch (λf3306f8b0f77) {
              o(), λ9a4e575805a5.error(λf3306f8b0f77);
            }
          },
          cancel: λ9a4e575805a5 => (o(), λ0715a1c184b9 = null, λ3d6b390d3ee1.cancel(λ9a4e575805a5))
        }, {
          highWaterMark: 0
        });
      }
      λa77adbc6c461.push(λ9a4e575805a5.value), λ5d231be4bcda += λ9a4e575805a5.value.byteLength, 
      λf3306f8b0f77.bytes += λ9a4e575805a5.value.byteLength;
    }
  } catch (λ9a4e575805a5) {
    throw o(), λ3d6b390d3ee1.cancel(λ9a4e575805a5).catch(() => {}), λ9a4e575805a5;
  }
}

export async function requestWithTransferRetry(λ9a4e575805a5, {method: λf3306f8b0f77, body: λ3d6b390d3ee1, signal: λa77adbc6c461, budget: λ5d231be4bcda}) {
  const λ0715a1c184b9 = /^(?:GET|HEAD)$/i.test(λf3306f8b0f77 || "GET") && null == λ3d6b390d3ee1;
  for (let λf3306f8b0f77 = 0; ;λf3306f8b0f77++) {
    λa77adbc6c461?.throwIfAborted();
    try {
      const λf3306f8b0f77 = await λ9a4e575805a5();
      return λ0715a1c184b9 && λf3306f8b0f77.body?.getReader && _u(λf3306f8b0f77.headers) ? {
        ...λf3306f8b0f77,
        body: await Xu(λf3306f8b0f77.body, λ5d231be4bcda)
      } : λf3306f8b0f77;
    } catch (λ9a4e575805a5) {
      if (!λ0715a1c184b9 || λf3306f8b0f77 >= 1 || λa77adbc6c461?.aborted || !sc(λ9a4e575805a5)) throw λ9a4e575805a5;
    }
  }
}
