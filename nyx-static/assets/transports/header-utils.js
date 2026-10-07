export function headerEntries(λbe1a2dd8b9e9) {
  return λbe1a2dd8b9e9 ? λbe1a2dd8b9e9 instanceof Headers ? [ ...λbe1a2dd8b9e9.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λbe1a2dd8b9e9[Symbol.iterator] ? [ ...λbe1a2dd8b9e9 ].flatMap(([λbe1a2dd8b9e9, λad6c7e53387f]) => Array.isArray(λad6c7e53387f) ? λad6c7e53387f.map(λad6c7e53387f => [ String(λbe1a2dd8b9e9), String(λad6c7e53387f) ]) : null == λad6c7e53387f ? [] : [ [ String(λbe1a2dd8b9e9), String(λad6c7e53387f) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λbe1a2dd8b9e9 ? Object.entries(λbe1a2dd8b9e9).flatMap(([λbe1a2dd8b9e9, λad6c7e53387f]) => Array.isArray(λad6c7e53387f) ? λad6c7e53387f.map(λad6c7e53387f => [ λbe1a2dd8b9e9, String(λad6c7e53387f) ]) : null == λad6c7e53387f ? [] : [ [ λbe1a2dd8b9e9, String(λad6c7e53387f) ] ]) : [] : [];
}

export function headerRecord(λbe1a2dd8b9e9) {
  const λad6c7e53387f = {};
  for (const [λbac4c148950c, λ3248414a18cb] of headerEntries(λbe1a2dd8b9e9)) {
    const λbe1a2dd8b9e9 = String(λbac4c148950c).toLowerCase();
    void 0 === λad6c7e53387f[λbe1a2dd8b9e9] ? λad6c7e53387f[λbe1a2dd8b9e9] = λ3248414a18cb : Array.isArray(λad6c7e53387f[λbe1a2dd8b9e9]) ? λad6c7e53387f[λbe1a2dd8b9e9].push(λ3248414a18cb) : λad6c7e53387f[λbe1a2dd8b9e9] = [ λad6c7e53387f[λbe1a2dd8b9e9], λ3248414a18cb ];
  }
  return λad6c7e53387f;
}
