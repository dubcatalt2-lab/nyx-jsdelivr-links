addEventListener("message", ({data: {sab: λ4259b7b9eec3, args: [λ2af363aff2ee, λddee2129d851, λf104223823d1, λc49821fd448f, λc1f6c52867e6], body: λad12bb706a52, headers: λc2a1fddee7f0}}) => {
  let λ7a4c30152780 = new DataView(λ4259b7b9eec3), λ3d4d6cf833f7 = new Uint8Array(λ4259b7b9eec3), λ650f4bb2bb80 = new XMLHttpRequest;
  if (λ650f4bb2bb80.responseType = "arraybuffer", λ650f4bb2bb80.open(λ2af363aff2ee, λddee2129d851, !0, λc49821fd448f, λc1f6c52867e6), 
  λc2a1fddee7f0) for (let [λ4259b7b9eec3, λ2af363aff2ee] of Object.entries(λc2a1fddee7f0)) λ650f4bb2bb80.setRequestHeader(λ4259b7b9eec3, λ2af363aff2ee);
  λ650f4bb2bb80.send(λad12bb706a52), λ650f4bb2bb80.onload = () => {
    let λ2af363aff2ee = 1;
    λ7a4c30152780.setUint16(λ2af363aff2ee, λ650f4bb2bb80.status), λ2af363aff2ee += 2;
    let λddee2129d851 = λ650f4bb2bb80.getAllResponseHeaders();
    λ7a4c30152780.setUint32(λ2af363aff2ee, λddee2129d851.length), λ2af363aff2ee += 4, 
    λ4259b7b9eec3.byteLength < λ2af363aff2ee + λddee2129d851.length && λ4259b7b9eec3.grow(λ2af363aff2ee + λddee2129d851.length), 
    λ3d4d6cf833f7.set((new TextEncoder).encode(λddee2129d851), λ2af363aff2ee), λ2af363aff2ee += λddee2129d851.length, 
    λ7a4c30152780.setUint32(λ2af363aff2ee, λ650f4bb2bb80.response.byteLength), λ2af363aff2ee += 4, 
    λ4259b7b9eec3.byteLength < λ2af363aff2ee + λ650f4bb2bb80.response.byteLength && λ4259b7b9eec3.grow(λ2af363aff2ee + λ650f4bb2bb80.response.byteLength), 
    λ3d4d6cf833f7.set(new Uint8Array(λ650f4bb2bb80.response), λ2af363aff2ee), λ7a4c30152780.setUint8(0, 1);
  }, λ650f4bb2bb80.ontimeout = λ650f4bb2bb80.onerror = λ650f4bb2bb80.onabort = () => {
    console.error("xhr failed"), λ7a4c30152780.setUint8(0, 1);
  };
});
