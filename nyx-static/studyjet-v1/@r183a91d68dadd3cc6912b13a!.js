addEventListener("message", ({data: {sab: λc0976fb1bcd4, args: [λ05d1389a440b, λ8fd0c2ba4cf7, λ678ea79ed340, λ0fcb6ca26921, λ64a67ace38ae], body: λ25a4f6415fa3, headers: λ85b739964af4}}) => {
  let λbc481c44f2db = new DataView(λc0976fb1bcd4), λ41b7cad4fda6 = new Uint8Array(λc0976fb1bcd4), λda01caecd25e = new XMLHttpRequest;
  if (λda01caecd25e.responseType = "arraybuffer", λda01caecd25e.open(λ05d1389a440b, λ8fd0c2ba4cf7, !0, λ0fcb6ca26921, λ64a67ace38ae), 
  λ85b739964af4) for (let [λc0976fb1bcd4, λ05d1389a440b] of Object.entries(λ85b739964af4)) λda01caecd25e.setRequestHeader(λc0976fb1bcd4, λ05d1389a440b);
  λda01caecd25e.send(λ25a4f6415fa3), λda01caecd25e.onload = () => {
    let λ05d1389a440b = 1;
    λbc481c44f2db.setUint16(λ05d1389a440b, λda01caecd25e.status), λ05d1389a440b += 2;
    let λ8fd0c2ba4cf7 = λda01caecd25e.getAllResponseHeaders();
    λbc481c44f2db.setUint32(λ05d1389a440b, λ8fd0c2ba4cf7.length), λ05d1389a440b += 4, 
    λc0976fb1bcd4.byteLength < λ05d1389a440b + λ8fd0c2ba4cf7.length && λc0976fb1bcd4.grow(λ05d1389a440b + λ8fd0c2ba4cf7.length), 
    λ41b7cad4fda6.set((new TextEncoder).encode(λ8fd0c2ba4cf7), λ05d1389a440b), λ05d1389a440b += λ8fd0c2ba4cf7.length, 
    λbc481c44f2db.setUint32(λ05d1389a440b, λda01caecd25e.response.byteLength), λ05d1389a440b += 4, 
    λc0976fb1bcd4.byteLength < λ05d1389a440b + λda01caecd25e.response.byteLength && λc0976fb1bcd4.grow(λ05d1389a440b + λda01caecd25e.response.byteLength), 
    λ41b7cad4fda6.set(new Uint8Array(λda01caecd25e.response), λ05d1389a440b), λbc481c44f2db.setUint8(0, 1);
  }, λda01caecd25e.ontimeout = λda01caecd25e.onerror = λda01caecd25e.onabort = () => {
    console.error("xhr failed"), λbc481c44f2db.setUint8(0, 1);
  };
});
