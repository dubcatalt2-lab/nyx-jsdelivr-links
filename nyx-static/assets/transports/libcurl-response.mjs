export function preserveTransferErrors(λ89004f88e34e) {
  const λbc6f95ebb698 = λ89004f88e34e.stream_response;
  λ89004f88e34e.stream_response = function(λ89004f88e34e, λ20ff8ff35871, λf7b3d0f20105, λ9ec7737a5d80) {
    let λa6b7194312f8;
    const λ7f66156742b9 = new Promise(λ89004f88e34e => {
      λa6b7194312f8 = λ89004f88e34e;
    });
    return λbc6f95ebb698.call(this, λ89004f88e34e, λ89004f88e34e => {
      const λbc6f95ebb698 = λ89004f88e34e.getReader();
      λ20ff8ff35871(new ReadableStream({
        async pull(λ89004f88e34e) {
          try {
            const λ20ff8ff35871 = await λbc6f95ebb698.read();
            if (!λ20ff8ff35871.done) return void λ89004f88e34e.enqueue(λ20ff8ff35871.value);
            const λf7b3d0f20105 = await λ7f66156742b9;
            if (-1 === λf7b3d0f20105 || λ9ec7737a5d80?.aborted) throw λ9ec7737a5d80?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λf7b3d0f20105) throw new TypeError(`Request failed with error code ${λf7b3d0f20105}: incomplete libcurl transfer`);
            λ89004f88e34e.close();
          } catch (λbc6f95ebb698) {
            λ89004f88e34e.error(λbc6f95ebb698);
          }
        },
        cancel: λ89004f88e34e => λbc6f95ebb698.cancel(λ89004f88e34e)
      }, {
        highWaterMark: 0
      }));
    }, λ89004f88e34e => {
      λa6b7194312f8(λ89004f88e34e), λf7b3d0f20105(λ89004f88e34e);
    }, λ9ec7737a5d80);
  };
}

export const bufferLimit = 33554432;

const sc = λ89004f88e34e => /\berror code (?:18|52|56|92)\b/i.test(String(λ89004f88e34e?.message || λ89004f88e34e)), _u = λ89004f88e34e => λ89004f88e34e.some(([λ89004f88e34e, λbc6f95ebb698]) => "content-type" === λ89004f88e34e.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λbc6f95ebb698).split(";")[0].trim()));

async function Xu(λ89004f88e34e, λbc6f95ebb698) {
  const λ20ff8ff35871 = λ89004f88e34e.getReader(), λf7b3d0f20105 = [];
  let λ9ec7737a5d80 = 0;
  const o = () => {
    λbc6f95ebb698.bytes -= λ9ec7737a5d80, λ9ec7737a5d80 = 0, λf7b3d0f20105.length = 0;
  };
  try {
    for (;;) {
      const λ89004f88e34e = await λ20ff8ff35871.read();
      if (λ89004f88e34e.done) {
        const λ89004f88e34e = new Blob(λf7b3d0f20105).stream();
        return o(), λ89004f88e34e;
      }
      if (λ9ec7737a5d80 + λ89004f88e34e.value.byteLength > 16777216 || λbc6f95ebb698.bytes + λ89004f88e34e.value.byteLength > 33554432) {
        let λa6b7194312f8 = λ89004f88e34e.value;
        return new ReadableStream({
          async pull(λ89004f88e34e) {
            try {
              if (λf7b3d0f20105.length) {
                const λ20ff8ff35871 = λf7b3d0f20105.shift();
                return λ9ec7737a5d80 -= λ20ff8ff35871.byteLength, λbc6f95ebb698.bytes -= λ20ff8ff35871.byteLength, 
                void λ89004f88e34e.enqueue(λ20ff8ff35871);
              }
              if (λa6b7194312f8) return λ89004f88e34e.enqueue(λa6b7194312f8), void (λa6b7194312f8 = null);
              const λ7f66156742b9 = await λ20ff8ff35871.read();
              λ7f66156742b9.done ? λ89004f88e34e.close() : λ89004f88e34e.enqueue(λ7f66156742b9.value);
            } catch (λbc6f95ebb698) {
              o(), λ89004f88e34e.error(λbc6f95ebb698);
            }
          },
          cancel: λ89004f88e34e => (o(), λa6b7194312f8 = null, λ20ff8ff35871.cancel(λ89004f88e34e))
        }, {
          highWaterMark: 0
        });
      }
      λf7b3d0f20105.push(λ89004f88e34e.value), λ9ec7737a5d80 += λ89004f88e34e.value.byteLength, 
      λbc6f95ebb698.bytes += λ89004f88e34e.value.byteLength;
    }
  } catch (λ89004f88e34e) {
    throw o(), λ20ff8ff35871.cancel(λ89004f88e34e).catch(() => {}), λ89004f88e34e;
  }
}

export async function requestWithTransferRetry(λ89004f88e34e, {method: λbc6f95ebb698, body: λ20ff8ff35871, signal: λf7b3d0f20105, budget: λ9ec7737a5d80}) {
  const λa6b7194312f8 = /^(?:GET|HEAD)$/i.test(λbc6f95ebb698 || "GET") && null == λ20ff8ff35871;
  for (let λbc6f95ebb698 = 0; ;λbc6f95ebb698++) {
    λf7b3d0f20105?.throwIfAborted();
    try {
      const λbc6f95ebb698 = await λ89004f88e34e();
      return λa6b7194312f8 && λbc6f95ebb698.body?.getReader && _u(λbc6f95ebb698.headers) ? {
        ...λbc6f95ebb698,
        body: await Xu(λbc6f95ebb698.body, λ9ec7737a5d80)
      } : λbc6f95ebb698;
    } catch (λ89004f88e34e) {
      if (!λa6b7194312f8 || λbc6f95ebb698 >= 1 || λf7b3d0f20105?.aborted || !sc(λ89004f88e34e)) throw λ89004f88e34e;
    }
  }
}
