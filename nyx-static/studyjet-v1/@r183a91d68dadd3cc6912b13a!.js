addEventListener("message", ({data: {sab: λa8b29fd132ab, args: [λa6e9eea7b500, λf2cca67b6cd0, λ900354b13437, λ4996b52a27e4, λb2537266d223], body: λe83c9e92bc9c, headers: λd4e561919619}}) => {
  let λ82ad6443c1f5 = new DataView(λa8b29fd132ab), λec5c78aae0d9 = new Uint8Array(λa8b29fd132ab), λade39dcfdcf3 = new XMLHttpRequest;
  if (λade39dcfdcf3.responseType = "arraybuffer", λade39dcfdcf3.open(λa6e9eea7b500, λf2cca67b6cd0, !0, λ4996b52a27e4, λb2537266d223), 
  λd4e561919619) for (let [λa8b29fd132ab, λa6e9eea7b500] of Object.entries(λd4e561919619)) λade39dcfdcf3.setRequestHeader(λa8b29fd132ab, λa6e9eea7b500);
  λade39dcfdcf3.send(λe83c9e92bc9c), λade39dcfdcf3.onload = () => {
    let λa6e9eea7b500 = 1;
    λ82ad6443c1f5.setUint16(λa6e9eea7b500, λade39dcfdcf3.status), λa6e9eea7b500 += 2;
    let λf2cca67b6cd0 = λade39dcfdcf3.getAllResponseHeaders();
    λ82ad6443c1f5.setUint32(λa6e9eea7b500, λf2cca67b6cd0.length), λa6e9eea7b500 += 4, 
    λa8b29fd132ab.byteLength < λa6e9eea7b500 + λf2cca67b6cd0.length && λa8b29fd132ab.grow(λa6e9eea7b500 + λf2cca67b6cd0.length), 
    λec5c78aae0d9.set((new TextEncoder).encode(λf2cca67b6cd0), λa6e9eea7b500), λa6e9eea7b500 += λf2cca67b6cd0.length, 
    λ82ad6443c1f5.setUint32(λa6e9eea7b500, λade39dcfdcf3.response.byteLength), λa6e9eea7b500 += 4, 
    λa8b29fd132ab.byteLength < λa6e9eea7b500 + λade39dcfdcf3.response.byteLength && λa8b29fd132ab.grow(λa6e9eea7b500 + λade39dcfdcf3.response.byteLength), 
    λec5c78aae0d9.set(new Uint8Array(λade39dcfdcf3.response), λa6e9eea7b500), λ82ad6443c1f5.setUint8(0, 1);
  }, λade39dcfdcf3.ontimeout = λade39dcfdcf3.onerror = λade39dcfdcf3.onabort = () => {
    console.error("xhr failed"), λ82ad6443c1f5.setUint8(0, 1);
  };
});
