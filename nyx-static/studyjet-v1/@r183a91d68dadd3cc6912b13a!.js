addEventListener("\x6d\x65\x73\x73\x61\x67\x65", ({data: {sab: λ73c1222443e3, args: [λb828835865c9, λ84e024d7fd20, λf29b0d871c41, λ0da65f171f5a, λ2bd58c1a434a], body: λ1f0f4acb482a, headers: λd4993e4e23a6}}) => {
  let λb65877b5d79d = new DataView(λ73c1222443e3), λea4b0eb22189 = new Uint8Array(λ73c1222443e3), λ59a3cd9b8117 = new XMLHttpRequest;
  if (λ59a3cd9b8117.responseType = "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72", λ59a3cd9b8117.open(λb828835865c9, λ84e024d7fd20, !0, λ0da65f171f5a, λ2bd58c1a434a), 
  λd4993e4e23a6) for (let [λ73c1222443e3, λb828835865c9] of Object.entries(λd4993e4e23a6)) λ59a3cd9b8117.setRequestHeader(λ73c1222443e3, λb828835865c9);
  λ59a3cd9b8117.send(λ1f0f4acb482a), λ59a3cd9b8117.onload = () => {
    let λb828835865c9 = 1;
    λb65877b5d79d.setUint16(λb828835865c9, λ59a3cd9b8117.status), λb828835865c9 += 2;
    let λ84e024d7fd20 = λ59a3cd9b8117.getAllResponseHeaders();
    λb65877b5d79d.setUint32(λb828835865c9, λ84e024d7fd20.length), λb828835865c9 += 4, 
    λ73c1222443e3.byteLength < λb828835865c9 + λ84e024d7fd20.length && λ73c1222443e3.grow(λb828835865c9 + λ84e024d7fd20.length), 
    λea4b0eb22189.set((new TextEncoder).encode(λ84e024d7fd20), λb828835865c9), λb828835865c9 += λ84e024d7fd20.length, 
    λb65877b5d79d.setUint32(λb828835865c9, λ59a3cd9b8117.response.byteLength), λb828835865c9 += 4, 
    λ73c1222443e3.byteLength < λb828835865c9 + λ59a3cd9b8117.response.byteLength && λ73c1222443e3.grow(λb828835865c9 + λ59a3cd9b8117.response.byteLength), 
    λea4b0eb22189.set(new Uint8Array(λ59a3cd9b8117.response), λb828835865c9), λb65877b5d79d.setUint8(0, 1);
  }, λ59a3cd9b8117.ontimeout = λ59a3cd9b8117.onerror = λ59a3cd9b8117.onabort = () => {
    console.error("\x78\x68\x72\x20\x66\x61\x69\x6c\x65\x64"), λb65877b5d79d.setUint8(0, 1);
  };
});
