export function headerEntries(λ8b6f3914cbdc) {
  return λ8b6f3914cbdc ? λ8b6f3914cbdc instanceof Headers ? [ ...λ8b6f3914cbdc.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ8b6f3914cbdc[Symbol.iterator] ? [ ...λ8b6f3914cbdc ].flatMap(([λ8b6f3914cbdc, λ3a6b677345fa]) => Array.isArray(λ3a6b677345fa) ? λ3a6b677345fa.map(λ3a6b677345fa => [ String(λ8b6f3914cbdc), String(λ3a6b677345fa) ]) : null == λ3a6b677345fa ? [] : [ [ String(λ8b6f3914cbdc), String(λ3a6b677345fa) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ8b6f3914cbdc ? Object.entries(λ8b6f3914cbdc).flatMap(([λ8b6f3914cbdc, λ3a6b677345fa]) => Array.isArray(λ3a6b677345fa) ? λ3a6b677345fa.map(λ3a6b677345fa => [ λ8b6f3914cbdc, String(λ3a6b677345fa) ]) : null == λ3a6b677345fa ? [] : [ [ λ8b6f3914cbdc, String(λ3a6b677345fa) ] ]) : [] : [];
}

export function headerRecord(λ8b6f3914cbdc) {
  const λ3a6b677345fa = {};
  for (const [λ9793eb328f25, λ5fd569d61ac9] of headerEntries(λ8b6f3914cbdc)) {
    const λ8b6f3914cbdc = String(λ9793eb328f25).toLowerCase();
    void 0 === λ3a6b677345fa[λ8b6f3914cbdc] ? λ3a6b677345fa[λ8b6f3914cbdc] = λ5fd569d61ac9 : Array.isArray(λ3a6b677345fa[λ8b6f3914cbdc]) ? λ3a6b677345fa[λ8b6f3914cbdc].push(λ5fd569d61ac9) : λ3a6b677345fa[λ8b6f3914cbdc] = [ λ3a6b677345fa[λ8b6f3914cbdc], λ5fd569d61ac9 ];
  }
  return λ3a6b677345fa;
}
