addEventListener("\x6d\x65\x73\x73\x61\x67\x65", ({data: {sab: λbe72df0c3970, args: [λf596adc176fe, λ73e748f02f79, λ36bd5d2473a0, λ96a864fd0b8d, λ9551e5cfb3af], body: λd105190e71e4, headers: λ327b516cdc89}}) => {
  let λ8bd1fc116d8f = new DataView(λbe72df0c3970), λ274a3d8b5ad3 = new Uint8Array(λbe72df0c3970), λa3d568227908 = new XMLHttpRequest;
  if (λa3d568227908.responseType = "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72", λa3d568227908.open(λf596adc176fe, λ73e748f02f79, !0, λ96a864fd0b8d, λ9551e5cfb3af), 
  λ327b516cdc89) for (let [λbe72df0c3970, λf596adc176fe] of Object.entries(λ327b516cdc89)) λa3d568227908.setRequestHeader(λbe72df0c3970, λf596adc176fe);
  λa3d568227908.send(λd105190e71e4), λa3d568227908.onload = () => {
    let λf596adc176fe = 1;
    λ8bd1fc116d8f.setUint16(λf596adc176fe, λa3d568227908.status), λf596adc176fe += 2;
    let λ73e748f02f79 = λa3d568227908.getAllResponseHeaders();
    λ8bd1fc116d8f.setUint32(λf596adc176fe, λ73e748f02f79.length), λf596adc176fe += 4, 
    λbe72df0c3970.byteLength < λf596adc176fe + λ73e748f02f79.length && λbe72df0c3970.grow(λf596adc176fe + λ73e748f02f79.length), 
    λ274a3d8b5ad3.set((new TextEncoder).encode(λ73e748f02f79), λf596adc176fe), λf596adc176fe += λ73e748f02f79.length, 
    λ8bd1fc116d8f.setUint32(λf596adc176fe, λa3d568227908.response.byteLength), λf596adc176fe += 4, 
    λbe72df0c3970.byteLength < λf596adc176fe + λa3d568227908.response.byteLength && λbe72df0c3970.grow(λf596adc176fe + λa3d568227908.response.byteLength), 
    λ274a3d8b5ad3.set(new Uint8Array(λa3d568227908.response), λf596adc176fe), λ8bd1fc116d8f.setUint8(0, 1);
  }, λa3d568227908.ontimeout = λa3d568227908.onerror = λa3d568227908.onabort = () => {
    console.error("\x78\x68\x72\x20\x66\x61\x69\x6c\x65\x64"), λ8bd1fc116d8f.setUint8(0, 1);
  };
});
