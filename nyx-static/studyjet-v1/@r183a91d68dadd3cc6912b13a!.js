addEventListener("\x6d\x65\x73\x73\x61\x67\x65", ({data: {sab: λ08958f40fd8a, args: [λb13256e0bb0b, λ3f16e3576b1b, λ3fd7814860da, λ217279f50b1d, λ3d2e9fa1e0b5], body: λ51840b224d81, headers: λee0230f95f83}}) => {
  let λe8da0f601c9d = new DataView(λ08958f40fd8a), λfa5a74cb90e6 = new Uint8Array(λ08958f40fd8a), λff7b2e8b8e6a = new XMLHttpRequest;
  if (λff7b2e8b8e6a.responseType = "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72", λff7b2e8b8e6a.open(λb13256e0bb0b, λ3f16e3576b1b, !0, λ217279f50b1d, λ3d2e9fa1e0b5), 
  λee0230f95f83) for (let [λ08958f40fd8a, λb13256e0bb0b] of Object.entries(λee0230f95f83)) λff7b2e8b8e6a.setRequestHeader(λ08958f40fd8a, λb13256e0bb0b);
  λff7b2e8b8e6a.send(λ51840b224d81), λff7b2e8b8e6a.onload = () => {
    let λb13256e0bb0b = 1;
    λe8da0f601c9d.setUint16(λb13256e0bb0b, λff7b2e8b8e6a.status), λb13256e0bb0b += 2;
    let λ3f16e3576b1b = λff7b2e8b8e6a.getAllResponseHeaders();
    λe8da0f601c9d.setUint32(λb13256e0bb0b, λ3f16e3576b1b.length), λb13256e0bb0b += 4, 
    λ08958f40fd8a.byteLength < λb13256e0bb0b + λ3f16e3576b1b.length && λ08958f40fd8a.grow(λb13256e0bb0b + λ3f16e3576b1b.length), 
    λfa5a74cb90e6.set((new TextEncoder).encode(λ3f16e3576b1b), λb13256e0bb0b), λb13256e0bb0b += λ3f16e3576b1b.length, 
    λe8da0f601c9d.setUint32(λb13256e0bb0b, λff7b2e8b8e6a.response.byteLength), λb13256e0bb0b += 4, 
    λ08958f40fd8a.byteLength < λb13256e0bb0b + λff7b2e8b8e6a.response.byteLength && λ08958f40fd8a.grow(λb13256e0bb0b + λff7b2e8b8e6a.response.byteLength), 
    λfa5a74cb90e6.set(new Uint8Array(λff7b2e8b8e6a.response), λb13256e0bb0b), λe8da0f601c9d.setUint8(0, 1);
  }, λff7b2e8b8e6a.ontimeout = λff7b2e8b8e6a.onerror = λff7b2e8b8e6a.onabort = () => {
    console.error("\x78\x68\x72\x20\x66\x61\x69\x6c\x65\x64"), λe8da0f601c9d.setUint8(0, 1);
  };
});
