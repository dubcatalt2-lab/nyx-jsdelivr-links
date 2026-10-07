addEventListener("\x6d\x65\x73\x73\x61\x67\x65", ({data: {sab: λ4fa88da6eb95, args: [λ1687991bdddf, λbf7c9bd19a13, λ81b6d56190ef, λ5b955cc42d36, λ89dc8e7b118c], body: λ390e3889d54c, headers: λa56a17c1d01d}}) => {
  let λf1c939d878e3 = new DataView(λ4fa88da6eb95), λ6cdc70e6f82d = new Uint8Array(λ4fa88da6eb95), λdb05a6beeee5 = new XMLHttpRequest;
  if (λdb05a6beeee5.responseType = "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72", λdb05a6beeee5.open(λ1687991bdddf, λbf7c9bd19a13, !0, λ5b955cc42d36, λ89dc8e7b118c), 
  λa56a17c1d01d) for (let [λ4fa88da6eb95, λ1687991bdddf] of Object.entries(λa56a17c1d01d)) λdb05a6beeee5.setRequestHeader(λ4fa88da6eb95, λ1687991bdddf);
  λdb05a6beeee5.send(λ390e3889d54c), λdb05a6beeee5.onload = () => {
    let λ1687991bdddf = 1;
    λf1c939d878e3.setUint16(λ1687991bdddf, λdb05a6beeee5.status), λ1687991bdddf += 2;
    let λbf7c9bd19a13 = λdb05a6beeee5.getAllResponseHeaders();
    λf1c939d878e3.setUint32(λ1687991bdddf, λbf7c9bd19a13.length), λ1687991bdddf += 4, 
    λ4fa88da6eb95.byteLength < λ1687991bdddf + λbf7c9bd19a13.length && λ4fa88da6eb95.grow(λ1687991bdddf + λbf7c9bd19a13.length), 
    λ6cdc70e6f82d.set((new TextEncoder).encode(λbf7c9bd19a13), λ1687991bdddf), λ1687991bdddf += λbf7c9bd19a13.length, 
    λf1c939d878e3.setUint32(λ1687991bdddf, λdb05a6beeee5.response.byteLength), λ1687991bdddf += 4, 
    λ4fa88da6eb95.byteLength < λ1687991bdddf + λdb05a6beeee5.response.byteLength && λ4fa88da6eb95.grow(λ1687991bdddf + λdb05a6beeee5.response.byteLength), 
    λ6cdc70e6f82d.set(new Uint8Array(λdb05a6beeee5.response), λ1687991bdddf), λf1c939d878e3.setUint8(0, 1);
  }, λdb05a6beeee5.ontimeout = λdb05a6beeee5.onerror = λdb05a6beeee5.onabort = () => {
    console.error("\x78\x68\x72\x20\x66\x61\x69\x6c\x65\x64"), λf1c939d878e3.setUint8(0, 1);
  };
});
