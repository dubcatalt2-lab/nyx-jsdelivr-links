addEventListener("message", ({data: {sab: λd0bfeb39c0e7, args: [λ83968aa1c0c4, λ22000a52cf52, λ8d79ea6879d7, λcbb823c055b1, λdd411a3e8c91], body: λb90d1f3527ec, headers: λea6ce5ca6666}}) => {
  let λc24aeba572a1 = new DataView(λd0bfeb39c0e7), λce0ca3ac8784 = new Uint8Array(λd0bfeb39c0e7), λa362b9d6ec56 = new XMLHttpRequest;
  if (λa362b9d6ec56.responseType = "arraybuffer", λa362b9d6ec56.open(λ83968aa1c0c4, λ22000a52cf52, !0, λcbb823c055b1, λdd411a3e8c91), 
  λea6ce5ca6666) for (let [λd0bfeb39c0e7, λ83968aa1c0c4] of Object.entries(λea6ce5ca6666)) λa362b9d6ec56.setRequestHeader(λd0bfeb39c0e7, λ83968aa1c0c4);
  λa362b9d6ec56.send(λb90d1f3527ec), λa362b9d6ec56.onload = () => {
    let λ83968aa1c0c4 = 1;
    λc24aeba572a1.setUint16(λ83968aa1c0c4, λa362b9d6ec56.status), λ83968aa1c0c4 += 2;
    let λ22000a52cf52 = λa362b9d6ec56.getAllResponseHeaders();
    λc24aeba572a1.setUint32(λ83968aa1c0c4, λ22000a52cf52.length), λ83968aa1c0c4 += 4, 
    λd0bfeb39c0e7.byteLength < λ83968aa1c0c4 + λ22000a52cf52.length && λd0bfeb39c0e7.grow(λ83968aa1c0c4 + λ22000a52cf52.length), 
    λce0ca3ac8784.set((new TextEncoder).encode(λ22000a52cf52), λ83968aa1c0c4), λ83968aa1c0c4 += λ22000a52cf52.length, 
    λc24aeba572a1.setUint32(λ83968aa1c0c4, λa362b9d6ec56.response.byteLength), λ83968aa1c0c4 += 4, 
    λd0bfeb39c0e7.byteLength < λ83968aa1c0c4 + λa362b9d6ec56.response.byteLength && λd0bfeb39c0e7.grow(λ83968aa1c0c4 + λa362b9d6ec56.response.byteLength), 
    λce0ca3ac8784.set(new Uint8Array(λa362b9d6ec56.response), λ83968aa1c0c4), λc24aeba572a1.setUint8(0, 1);
  }, λa362b9d6ec56.ontimeout = λa362b9d6ec56.onerror = λa362b9d6ec56.onabort = () => {
    console.error("xhr failed"), λc24aeba572a1.setUint8(0, 1);
  };
});
