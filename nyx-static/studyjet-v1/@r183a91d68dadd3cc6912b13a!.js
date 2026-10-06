addEventListener("message", ({data: {sab: λaf95bf22f36f, args: [λ710dd1171bc0, λ4f118905c10b, λbdaf85204372, λ87b788b20033, λbdb413bcf3d8], body: λ0c9b2a8c0522, headers: λ617b7b59cead}}) => {
  let λc05dcbe7d6b0 = new DataView(λaf95bf22f36f), λ978650d52878 = new Uint8Array(λaf95bf22f36f), λ3284dc3bca28 = new XMLHttpRequest;
  if (λ3284dc3bca28.responseType = "arraybuffer", λ3284dc3bca28.open(λ710dd1171bc0, λ4f118905c10b, !0, λ87b788b20033, λbdb413bcf3d8), 
  λ617b7b59cead) for (let [λaf95bf22f36f, λ710dd1171bc0] of Object.entries(λ617b7b59cead)) λ3284dc3bca28.setRequestHeader(λaf95bf22f36f, λ710dd1171bc0);
  λ3284dc3bca28.send(λ0c9b2a8c0522), λ3284dc3bca28.onload = () => {
    let λ710dd1171bc0 = 1;
    λc05dcbe7d6b0.setUint16(λ710dd1171bc0, λ3284dc3bca28.status), λ710dd1171bc0 += 2;
    let λ4f118905c10b = λ3284dc3bca28.getAllResponseHeaders();
    λc05dcbe7d6b0.setUint32(λ710dd1171bc0, λ4f118905c10b.length), λ710dd1171bc0 += 4, 
    λaf95bf22f36f.byteLength < λ710dd1171bc0 + λ4f118905c10b.length && λaf95bf22f36f.grow(λ710dd1171bc0 + λ4f118905c10b.length), 
    λ978650d52878.set((new TextEncoder).encode(λ4f118905c10b), λ710dd1171bc0), λ710dd1171bc0 += λ4f118905c10b.length, 
    λc05dcbe7d6b0.setUint32(λ710dd1171bc0, λ3284dc3bca28.response.byteLength), λ710dd1171bc0 += 4, 
    λaf95bf22f36f.byteLength < λ710dd1171bc0 + λ3284dc3bca28.response.byteLength && λaf95bf22f36f.grow(λ710dd1171bc0 + λ3284dc3bca28.response.byteLength), 
    λ978650d52878.set(new Uint8Array(λ3284dc3bca28.response), λ710dd1171bc0), λc05dcbe7d6b0.setUint8(0, 1);
  }, λ3284dc3bca28.ontimeout = λ3284dc3bca28.onerror = λ3284dc3bca28.onabort = () => {
    console.error("xhr failed"), λc05dcbe7d6b0.setUint8(0, 1);
  };
});
