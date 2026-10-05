addEventListener("message", ({data: {sab: λb7a157c344c4, args: [λ291c489a3235, λ86a56ebb68df, λ26d35b63f292, λ5f06734c7b06, λ28d27bd82458], body: λ720f091b397b, headers: λ1826635c1a0b}}) => {
  let λ7d606ed9b904 = new DataView(λb7a157c344c4), λ563a355f895d = new Uint8Array(λb7a157c344c4), λ6353c07570c0 = new XMLHttpRequest;
  if (λ6353c07570c0.responseType = "arraybuffer", λ6353c07570c0.open(λ291c489a3235, λ86a56ebb68df, !0, λ5f06734c7b06, λ28d27bd82458), 
  λ1826635c1a0b) for (let [λb7a157c344c4, λ291c489a3235] of Object.entries(λ1826635c1a0b)) λ6353c07570c0.setRequestHeader(λb7a157c344c4, λ291c489a3235);
  λ6353c07570c0.send(λ720f091b397b), λ6353c07570c0.onload = () => {
    let λ291c489a3235 = 1;
    λ7d606ed9b904.setUint16(λ291c489a3235, λ6353c07570c0.status), λ291c489a3235 += 2;
    let λ86a56ebb68df = λ6353c07570c0.getAllResponseHeaders();
    λ7d606ed9b904.setUint32(λ291c489a3235, λ86a56ebb68df.length), λ291c489a3235 += 4, 
    λb7a157c344c4.byteLength < λ291c489a3235 + λ86a56ebb68df.length && λb7a157c344c4.grow(λ291c489a3235 + λ86a56ebb68df.length), 
    λ563a355f895d.set((new TextEncoder).encode(λ86a56ebb68df), λ291c489a3235), λ291c489a3235 += λ86a56ebb68df.length, 
    λ7d606ed9b904.setUint32(λ291c489a3235, λ6353c07570c0.response.byteLength), λ291c489a3235 += 4, 
    λb7a157c344c4.byteLength < λ291c489a3235 + λ6353c07570c0.response.byteLength && λb7a157c344c4.grow(λ291c489a3235 + λ6353c07570c0.response.byteLength), 
    λ563a355f895d.set(new Uint8Array(λ6353c07570c0.response), λ291c489a3235), λ7d606ed9b904.setUint8(0, 1);
  }, λ6353c07570c0.ontimeout = λ6353c07570c0.onerror = λ6353c07570c0.onabort = () => {
    console.error("xhr failed"), λ7d606ed9b904.setUint8(0, 1);
  };
});
