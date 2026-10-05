addEventListener("message", ({data: {sab: λc0913c8b5559, args: [λ4a6b4f5255cb, λc33eb4821454, λ5ab84f98c01b, λ3b4f7efbf366, λe31fbf28957c], body: λ27ceae0fb6bd, headers: λd89abf60a07c}}) => {
  let λ8ce04bb52026 = new DataView(λc0913c8b5559), λed5918e31ecb = new Uint8Array(λc0913c8b5559), λ814333bc4921 = new XMLHttpRequest;
  if (λ814333bc4921.responseType = "arraybuffer", λ814333bc4921.open(λ4a6b4f5255cb, λc33eb4821454, !0, λ3b4f7efbf366, λe31fbf28957c), 
  λd89abf60a07c) for (let [λc0913c8b5559, λ4a6b4f5255cb] of Object.entries(λd89abf60a07c)) λ814333bc4921.setRequestHeader(λc0913c8b5559, λ4a6b4f5255cb);
  λ814333bc4921.send(λ27ceae0fb6bd), λ814333bc4921.onload = () => {
    let λ4a6b4f5255cb = 1;
    λ8ce04bb52026.setUint16(λ4a6b4f5255cb, λ814333bc4921.status), λ4a6b4f5255cb += 2;
    let λc33eb4821454 = λ814333bc4921.getAllResponseHeaders();
    λ8ce04bb52026.setUint32(λ4a6b4f5255cb, λc33eb4821454.length), λ4a6b4f5255cb += 4, 
    λc0913c8b5559.byteLength < λ4a6b4f5255cb + λc33eb4821454.length && λc0913c8b5559.grow(λ4a6b4f5255cb + λc33eb4821454.length), 
    λed5918e31ecb.set((new TextEncoder).encode(λc33eb4821454), λ4a6b4f5255cb), λ4a6b4f5255cb += λc33eb4821454.length, 
    λ8ce04bb52026.setUint32(λ4a6b4f5255cb, λ814333bc4921.response.byteLength), λ4a6b4f5255cb += 4, 
    λc0913c8b5559.byteLength < λ4a6b4f5255cb + λ814333bc4921.response.byteLength && λc0913c8b5559.grow(λ4a6b4f5255cb + λ814333bc4921.response.byteLength), 
    λed5918e31ecb.set(new Uint8Array(λ814333bc4921.response), λ4a6b4f5255cb), λ8ce04bb52026.setUint8(0, 1);
  }, λ814333bc4921.ontimeout = λ814333bc4921.onerror = λ814333bc4921.onabort = () => {
    console.error("xhr failed"), λ8ce04bb52026.setUint8(0, 1);
  };
});
