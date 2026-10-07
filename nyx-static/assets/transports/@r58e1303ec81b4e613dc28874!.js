export function headerEntries(λ5a93f26c3298) {
  return λ5a93f26c3298 ? λ5a93f26c3298 instanceof Headers ? [ ...λ5a93f26c3298.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ5a93f26c3298[Symbol.iterator] ? [ ...λ5a93f26c3298 ].flatMap(([λ5a93f26c3298, λ1d331015c188]) => Array.isArray(λ1d331015c188) ? λ1d331015c188.map(λ1d331015c188 => [ String(λ5a93f26c3298), String(λ1d331015c188) ]) : null == λ1d331015c188 ? [] : [ [ String(λ5a93f26c3298), String(λ1d331015c188) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ5a93f26c3298 ? Object.entries(λ5a93f26c3298).flatMap(([λ5a93f26c3298, λ1d331015c188]) => Array.isArray(λ1d331015c188) ? λ1d331015c188.map(λ1d331015c188 => [ λ5a93f26c3298, String(λ1d331015c188) ]) : null == λ1d331015c188 ? [] : [ [ λ5a93f26c3298, String(λ1d331015c188) ] ]) : [] : [];
}

export function headerRecord(λ5a93f26c3298) {
  const λ1d331015c188 = {};
  for (const [λ37f93e1f97f8, λ4405463dc89e] of headerEntries(λ5a93f26c3298)) {
    const λ5a93f26c3298 = String(λ37f93e1f97f8).toLowerCase();
    void 0 === λ1d331015c188[λ5a93f26c3298] ? λ1d331015c188[λ5a93f26c3298] = λ4405463dc89e : Array.isArray(λ1d331015c188[λ5a93f26c3298]) ? λ1d331015c188[λ5a93f26c3298].push(λ4405463dc89e) : λ1d331015c188[λ5a93f26c3298] = [ λ1d331015c188[λ5a93f26c3298], λ4405463dc89e ];
  }
  return λ1d331015c188;
}
