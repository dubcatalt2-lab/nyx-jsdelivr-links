export function headerEntries(λd853f9aad41f) {
  return λd853f9aad41f ? λd853f9aad41f instanceof Headers ? [ ...λd853f9aad41f.entries() ] : "function" == typeof λd853f9aad41f[Symbol.iterator] ? [ ...λd853f9aad41f ].flatMap(([λd853f9aad41f, λ4f8c22fb81aa]) => Array.isArray(λ4f8c22fb81aa) ? λ4f8c22fb81aa.map(λ4f8c22fb81aa => [ String(λd853f9aad41f), String(λ4f8c22fb81aa) ]) : null == λ4f8c22fb81aa ? [] : [ [ String(λd853f9aad41f), String(λ4f8c22fb81aa) ] ]) : "object" == typeof λd853f9aad41f ? Object.entries(λd853f9aad41f).flatMap(([λd853f9aad41f, λ4f8c22fb81aa]) => Array.isArray(λ4f8c22fb81aa) ? λ4f8c22fb81aa.map(λ4f8c22fb81aa => [ λd853f9aad41f, String(λ4f8c22fb81aa) ]) : null == λ4f8c22fb81aa ? [] : [ [ λd853f9aad41f, String(λ4f8c22fb81aa) ] ]) : [] : [];
}

export function headerRecord(λd853f9aad41f) {
  const λ4f8c22fb81aa = {};
  for (const [λ9958c8095c24, λd506a8fb6a29] of headerEntries(λd853f9aad41f)) {
    const λd853f9aad41f = String(λ9958c8095c24).toLowerCase();
    void 0 === λ4f8c22fb81aa[λd853f9aad41f] ? λ4f8c22fb81aa[λd853f9aad41f] = λd506a8fb6a29 : Array.isArray(λ4f8c22fb81aa[λd853f9aad41f]) ? λ4f8c22fb81aa[λd853f9aad41f].push(λd506a8fb6a29) : λ4f8c22fb81aa[λd853f9aad41f] = [ λ4f8c22fb81aa[λd853f9aad41f], λd506a8fb6a29 ];
  }
  return λ4f8c22fb81aa;
}
