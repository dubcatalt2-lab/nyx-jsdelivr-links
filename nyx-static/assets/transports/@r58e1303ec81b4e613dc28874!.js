export function headerEntries(λ8750a1b418c2) {
  return λ8750a1b418c2 ? λ8750a1b418c2 instanceof Headers ? [ ...λ8750a1b418c2.entries() ] : "function" == typeof λ8750a1b418c2[Symbol.iterator] ? [ ...λ8750a1b418c2 ].flatMap(([λ8750a1b418c2, λ45029d5d0337]) => Array.isArray(λ45029d5d0337) ? λ45029d5d0337.map(λ45029d5d0337 => [ String(λ8750a1b418c2), String(λ45029d5d0337) ]) : null == λ45029d5d0337 ? [] : [ [ String(λ8750a1b418c2), String(λ45029d5d0337) ] ]) : "object" == typeof λ8750a1b418c2 ? Object.entries(λ8750a1b418c2).flatMap(([λ8750a1b418c2, λ45029d5d0337]) => Array.isArray(λ45029d5d0337) ? λ45029d5d0337.map(λ45029d5d0337 => [ λ8750a1b418c2, String(λ45029d5d0337) ]) : null == λ45029d5d0337 ? [] : [ [ λ8750a1b418c2, String(λ45029d5d0337) ] ]) : [] : [];
}

export function headerRecord(λ8750a1b418c2) {
  const λ45029d5d0337 = {};
  for (const [λa91aae48b19d, λ4eff074e93a8] of headerEntries(λ8750a1b418c2)) {
    const λ8750a1b418c2 = String(λa91aae48b19d).toLowerCase();
    void 0 === λ45029d5d0337[λ8750a1b418c2] ? λ45029d5d0337[λ8750a1b418c2] = λ4eff074e93a8 : Array.isArray(λ45029d5d0337[λ8750a1b418c2]) ? λ45029d5d0337[λ8750a1b418c2].push(λ4eff074e93a8) : λ45029d5d0337[λ8750a1b418c2] = [ λ45029d5d0337[λ8750a1b418c2], λ4eff074e93a8 ];
  }
  return λ45029d5d0337;
}
