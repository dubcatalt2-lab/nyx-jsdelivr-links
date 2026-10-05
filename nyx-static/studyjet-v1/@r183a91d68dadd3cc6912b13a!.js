addEventListener("message", ({data: {sab: λ0b424807e942, args: [λea001ec9cf99, λbde5023236b7, λ18bd815719c6, λ80cbf3f37539, λ490f17dbbba2], body: λ9b2163dbfa0e, headers: λbcbaac3ee11c}}) => {
  let λ6fddf4e7aaee = new DataView(λ0b424807e942), λda050cd79761 = new Uint8Array(λ0b424807e942), λ29524a0017f2 = new XMLHttpRequest;
  if (λ29524a0017f2.responseType = "arraybuffer", λ29524a0017f2.open(λea001ec9cf99, λbde5023236b7, !0, λ80cbf3f37539, λ490f17dbbba2), 
  λbcbaac3ee11c) for (let [λ0b424807e942, λea001ec9cf99] of Object.entries(λbcbaac3ee11c)) λ29524a0017f2.setRequestHeader(λ0b424807e942, λea001ec9cf99);
  λ29524a0017f2.send(λ9b2163dbfa0e), λ29524a0017f2.onload = () => {
    let λea001ec9cf99 = 1;
    λ6fddf4e7aaee.setUint16(λea001ec9cf99, λ29524a0017f2.status), λea001ec9cf99 += 2;
    let λbde5023236b7 = λ29524a0017f2.getAllResponseHeaders();
    λ6fddf4e7aaee.setUint32(λea001ec9cf99, λbde5023236b7.length), λea001ec9cf99 += 4, 
    λ0b424807e942.byteLength < λea001ec9cf99 + λbde5023236b7.length && λ0b424807e942.grow(λea001ec9cf99 + λbde5023236b7.length), 
    λda050cd79761.set((new TextEncoder).encode(λbde5023236b7), λea001ec9cf99), λea001ec9cf99 += λbde5023236b7.length, 
    λ6fddf4e7aaee.setUint32(λea001ec9cf99, λ29524a0017f2.response.byteLength), λea001ec9cf99 += 4, 
    λ0b424807e942.byteLength < λea001ec9cf99 + λ29524a0017f2.response.byteLength && λ0b424807e942.grow(λea001ec9cf99 + λ29524a0017f2.response.byteLength), 
    λda050cd79761.set(new Uint8Array(λ29524a0017f2.response), λea001ec9cf99), λ6fddf4e7aaee.setUint8(0, 1);
  }, λ29524a0017f2.ontimeout = λ29524a0017f2.onerror = λ29524a0017f2.onabort = () => {
    console.error("xhr failed"), λ6fddf4e7aaee.setUint8(0, 1);
  };
});
