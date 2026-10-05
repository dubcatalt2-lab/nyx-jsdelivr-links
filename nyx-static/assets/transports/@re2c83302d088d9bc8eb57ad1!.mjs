export function preserveTransferErrors(λ3621705b39f5) {
  const λ9602a34dc5d2 = λ3621705b39f5.stream_response;
  λ3621705b39f5.stream_response = function(λ3621705b39f5, λee1705218463, λf072108a6590, λf81549e9dc74) {
    let λd676bb8fb8bd;
    const λa6d2ade8a04f = new Promise(λ3621705b39f5 => {
      λd676bb8fb8bd = λ3621705b39f5;
    });
    return λ9602a34dc5d2.call(this, λ3621705b39f5, λ3621705b39f5 => {
      const λ9602a34dc5d2 = λ3621705b39f5.getReader();
      λee1705218463(new ReadableStream({
        async pull(λ3621705b39f5) {
          try {
            const λee1705218463 = await λ9602a34dc5d2.read();
            if (!λee1705218463.done) return void λ3621705b39f5.enqueue(λee1705218463.value);
            const λf072108a6590 = await λa6d2ade8a04f;
            if (-1 === λf072108a6590 || λf81549e9dc74?.aborted) throw λf81549e9dc74?.reason || new DOMException("The operation was aborted.", "AbortError");
            if (0 !== λf072108a6590) throw new TypeError(`Request failed with error code ${λf072108a6590}: incomplete textlib transfer`);
            λ3621705b39f5.close();
          } catch (λ9602a34dc5d2) {
            λ3621705b39f5.error(λ9602a34dc5d2);
          }
        },
        cancel: λ3621705b39f5 => λ9602a34dc5d2.cancel(λ3621705b39f5)
      }, {
        highWaterMark: 0
      }));
    }, λ3621705b39f5 => {
      λd676bb8fb8bd(λ3621705b39f5), λf072108a6590(λ3621705b39f5);
    }, λf81549e9dc74);
  };
}

export const bufferLimit = 33554432;

const sc = λ3621705b39f5 => /\berror code (?:18|52|56|92)\b/i.test(String(λ3621705b39f5?.message || λ3621705b39f5)), _u = λ3621705b39f5 => λ3621705b39f5.some(([λ3621705b39f5, λ9602a34dc5d2]) => "content-type" === λ3621705b39f5.toLowerCase() && /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(String(λ9602a34dc5d2).split(";")[0].trim()));

async function Xu(λ3621705b39f5, λ9602a34dc5d2) {
  const λee1705218463 = λ3621705b39f5.getReader(), λf072108a6590 = [];
  let λf81549e9dc74 = 0;
  const o = () => {
    λ9602a34dc5d2.bytes -= λf81549e9dc74, λf81549e9dc74 = 0, λf072108a6590.length = 0;
  };
  try {
    for (;;) {
      const λ3621705b39f5 = await λee1705218463.read();
      if (λ3621705b39f5.done) {
        const λ3621705b39f5 = new Blob(λf072108a6590).stream();
        return o(), λ3621705b39f5;
      }
      if (λf81549e9dc74 + λ3621705b39f5.value.byteLength > 16777216 || λ9602a34dc5d2.bytes + λ3621705b39f5.value.byteLength > 33554432) {
        let λd676bb8fb8bd = λ3621705b39f5.value;
        return new ReadableStream({
          async pull(λ3621705b39f5) {
            try {
              if (λf072108a6590.length) {
                const λee1705218463 = λf072108a6590.shift();
                return λf81549e9dc74 -= λee1705218463.byteLength, λ9602a34dc5d2.bytes -= λee1705218463.byteLength, 
                void λ3621705b39f5.enqueue(λee1705218463);
              }
              if (λd676bb8fb8bd) return λ3621705b39f5.enqueue(λd676bb8fb8bd), void (λd676bb8fb8bd = null);
              const λa6d2ade8a04f = await λee1705218463.read();
              λa6d2ade8a04f.done ? λ3621705b39f5.close() : λ3621705b39f5.enqueue(λa6d2ade8a04f.value);
            } catch (λ9602a34dc5d2) {
              o(), λ3621705b39f5.error(λ9602a34dc5d2);
            }
          },
          cancel: λ3621705b39f5 => (o(), λd676bb8fb8bd = null, λee1705218463.cancel(λ3621705b39f5))
        }, {
          highWaterMark: 0
        });
      }
      λf072108a6590.push(λ3621705b39f5.value), λf81549e9dc74 += λ3621705b39f5.value.byteLength, 
      λ9602a34dc5d2.bytes += λ3621705b39f5.value.byteLength;
    }
  } catch (λ3621705b39f5) {
    throw o(), λee1705218463.cancel(λ3621705b39f5).catch(() => {}), λ3621705b39f5;
  }
}

export async function requestWithTransferRetry(λ3621705b39f5, {method: λ9602a34dc5d2, body: λee1705218463, signal: λf072108a6590, budget: λf81549e9dc74}) {
  const λd676bb8fb8bd = /^(?:GET|HEAD)$/i.test(λ9602a34dc5d2 || "GET") && null == λee1705218463;
  for (let λ9602a34dc5d2 = 0; ;λ9602a34dc5d2++) {
    λf072108a6590?.throwIfAborted();
    try {
      const λ9602a34dc5d2 = await λ3621705b39f5();
      return λd676bb8fb8bd && λ9602a34dc5d2.body?.getReader && _u(λ9602a34dc5d2.headers) ? {
        ...λ9602a34dc5d2,
        body: await Xu(λ9602a34dc5d2.body, λf81549e9dc74)
      } : λ9602a34dc5d2;
    } catch (λ3621705b39f5) {
      if (!λd676bb8fb8bd || λ9602a34dc5d2 >= 1 || λf072108a6590?.aborted || !sc(λ3621705b39f5)) throw λ3621705b39f5;
    }
  }
}
