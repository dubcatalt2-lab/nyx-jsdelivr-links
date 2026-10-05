export function headerEntries(λ3362e44cc1e9) {
  return λ3362e44cc1e9 ? λ3362e44cc1e9 instanceof Headers ? [ ...λ3362e44cc1e9.entries() ] : "function" == typeof λ3362e44cc1e9[Symbol.iterator] ? [ ...λ3362e44cc1e9 ].flatMap(([λ3362e44cc1e9, λ35b9fd2b0a6f]) => Array.isArray(λ35b9fd2b0a6f) ? λ35b9fd2b0a6f.map(λ35b9fd2b0a6f => [ String(λ3362e44cc1e9), String(λ35b9fd2b0a6f) ]) : null == λ35b9fd2b0a6f ? [] : [ [ String(λ3362e44cc1e9), String(λ35b9fd2b0a6f) ] ]) : "object" == typeof λ3362e44cc1e9 ? Object.entries(λ3362e44cc1e9).flatMap(([λ3362e44cc1e9, λ35b9fd2b0a6f]) => Array.isArray(λ35b9fd2b0a6f) ? λ35b9fd2b0a6f.map(λ35b9fd2b0a6f => [ λ3362e44cc1e9, String(λ35b9fd2b0a6f) ]) : null == λ35b9fd2b0a6f ? [] : [ [ λ3362e44cc1e9, String(λ35b9fd2b0a6f) ] ]) : [] : [];
}

export function headerRecord(λ3362e44cc1e9) {
  const λ35b9fd2b0a6f = {};
  for (const [λ1eccd0e62da3, λbdd5d679604f] of headerEntries(λ3362e44cc1e9)) {
    const λ3362e44cc1e9 = String(λ1eccd0e62da3).toLowerCase();
    void 0 === λ35b9fd2b0a6f[λ3362e44cc1e9] ? λ35b9fd2b0a6f[λ3362e44cc1e9] = λbdd5d679604f : Array.isArray(λ35b9fd2b0a6f[λ3362e44cc1e9]) ? λ35b9fd2b0a6f[λ3362e44cc1e9].push(λbdd5d679604f) : λ35b9fd2b0a6f[λ3362e44cc1e9] = [ λ35b9fd2b0a6f[λ3362e44cc1e9], λbdd5d679604f ];
  }
  return λ35b9fd2b0a6f;
}
