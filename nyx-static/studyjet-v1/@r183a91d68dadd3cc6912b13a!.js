addEventListener("message", ({data: {sab: λ468cc1f67586, args: [λe2a471eb37fe, λafa4b6da918e, λf0e7cf4e12b0, λ4769e163020e, λ0c8e23184079], body: λ92708717657a, headers: λ7458ecb6e26b}}) => {
  let λ717b2774f18c = new DataView(λ468cc1f67586), λ23eb013866a3 = new Uint8Array(λ468cc1f67586), λ71375a18ed7c = new XMLHttpRequest;
  if (λ71375a18ed7c.responseType = "arraybuffer", λ71375a18ed7c.open(λe2a471eb37fe, λafa4b6da918e, !0, λ4769e163020e, λ0c8e23184079), 
  λ7458ecb6e26b) for (let [λ468cc1f67586, λe2a471eb37fe] of Object.entries(λ7458ecb6e26b)) λ71375a18ed7c.setRequestHeader(λ468cc1f67586, λe2a471eb37fe);
  λ71375a18ed7c.send(λ92708717657a), λ71375a18ed7c.onload = () => {
    let λe2a471eb37fe = 1;
    λ717b2774f18c.setUint16(λe2a471eb37fe, λ71375a18ed7c.status), λe2a471eb37fe += 2;
    let λafa4b6da918e = λ71375a18ed7c.getAllResponseHeaders();
    λ717b2774f18c.setUint32(λe2a471eb37fe, λafa4b6da918e.length), λe2a471eb37fe += 4, 
    λ468cc1f67586.byteLength < λe2a471eb37fe + λafa4b6da918e.length && λ468cc1f67586.grow(λe2a471eb37fe + λafa4b6da918e.length), 
    λ23eb013866a3.set((new TextEncoder).encode(λafa4b6da918e), λe2a471eb37fe), λe2a471eb37fe += λafa4b6da918e.length, 
    λ717b2774f18c.setUint32(λe2a471eb37fe, λ71375a18ed7c.response.byteLength), λe2a471eb37fe += 4, 
    λ468cc1f67586.byteLength < λe2a471eb37fe + λ71375a18ed7c.response.byteLength && λ468cc1f67586.grow(λe2a471eb37fe + λ71375a18ed7c.response.byteLength), 
    λ23eb013866a3.set(new Uint8Array(λ71375a18ed7c.response), λe2a471eb37fe), λ717b2774f18c.setUint8(0, 1);
  }, λ71375a18ed7c.ontimeout = λ71375a18ed7c.onerror = λ71375a18ed7c.onabort = () => {
    console.error("xhr failed"), λ717b2774f18c.setUint8(0, 1);
  };
});
