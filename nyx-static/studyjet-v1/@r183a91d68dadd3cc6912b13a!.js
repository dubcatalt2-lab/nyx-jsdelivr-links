addEventListener("\x6d\x65\x73\x73\x61\x67\x65", ({data: {sab: λ24207b24b048, args: [λfc0a945da625, λed4f4a0f692f, λ3e940fdb6879, λ0becb811250f, λ1931cc4a5539], body: λcbfad189bf52, headers: λb50318a42f9d}}) => {
  let λcddcf1249689 = new DataView(λ24207b24b048), λ791eb66a2fff = new Uint8Array(λ24207b24b048), λ53fe8db91d4f = new XMLHttpRequest;
  if (λ53fe8db91d4f.responseType = "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72", λ53fe8db91d4f.open(λfc0a945da625, λed4f4a0f692f, !0, λ0becb811250f, λ1931cc4a5539), 
  λb50318a42f9d) for (let [λ24207b24b048, λfc0a945da625] of Object.entries(λb50318a42f9d)) λ53fe8db91d4f.setRequestHeader(λ24207b24b048, λfc0a945da625);
  λ53fe8db91d4f.send(λcbfad189bf52), λ53fe8db91d4f.onload = () => {
    let λfc0a945da625 = 1;
    λcddcf1249689.setUint16(λfc0a945da625, λ53fe8db91d4f.status), λfc0a945da625 += 2;
    let λed4f4a0f692f = λ53fe8db91d4f.getAllResponseHeaders();
    λcddcf1249689.setUint32(λfc0a945da625, λed4f4a0f692f.length), λfc0a945da625 += 4, 
    λ24207b24b048.byteLength < λfc0a945da625 + λed4f4a0f692f.length && λ24207b24b048.grow(λfc0a945da625 + λed4f4a0f692f.length), 
    λ791eb66a2fff.set((new TextEncoder).encode(λed4f4a0f692f), λfc0a945da625), λfc0a945da625 += λed4f4a0f692f.length, 
    λcddcf1249689.setUint32(λfc0a945da625, λ53fe8db91d4f.response.byteLength), λfc0a945da625 += 4, 
    λ24207b24b048.byteLength < λfc0a945da625 + λ53fe8db91d4f.response.byteLength && λ24207b24b048.grow(λfc0a945da625 + λ53fe8db91d4f.response.byteLength), 
    λ791eb66a2fff.set(new Uint8Array(λ53fe8db91d4f.response), λfc0a945da625), λcddcf1249689.setUint8(0, 1);
  }, λ53fe8db91d4f.ontimeout = λ53fe8db91d4f.onerror = λ53fe8db91d4f.onabort = () => {
    console.error("\x78\x68\x72\x20\x66\x61\x69\x6c\x65\x64"), λcddcf1249689.setUint8(0, 1);
  };
});
