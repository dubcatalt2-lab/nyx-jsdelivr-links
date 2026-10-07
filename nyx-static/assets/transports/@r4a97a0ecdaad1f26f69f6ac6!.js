export function headerEntries(λ8f99b10b5f49) {
  return λ8f99b10b5f49 ? λ8f99b10b5f49 instanceof Headers ? [ ...λ8f99b10b5f49.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ8f99b10b5f49[Symbol.iterator] ? [ ...λ8f99b10b5f49 ].flatMap(([λ8f99b10b5f49, λ4b0ae9261a0b]) => Array.isArray(λ4b0ae9261a0b) ? λ4b0ae9261a0b.map(λ4b0ae9261a0b => [ String(λ8f99b10b5f49), String(λ4b0ae9261a0b) ]) : null == λ4b0ae9261a0b ? [] : [ [ String(λ8f99b10b5f49), String(λ4b0ae9261a0b) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ8f99b10b5f49 ? Object.entries(λ8f99b10b5f49).flatMap(([λ8f99b10b5f49, λ4b0ae9261a0b]) => Array.isArray(λ4b0ae9261a0b) ? λ4b0ae9261a0b.map(λ4b0ae9261a0b => [ λ8f99b10b5f49, String(λ4b0ae9261a0b) ]) : null == λ4b0ae9261a0b ? [] : [ [ λ8f99b10b5f49, String(λ4b0ae9261a0b) ] ]) : [] : [];
}

export function headerRecord(λ8f99b10b5f49) {
  const λ4b0ae9261a0b = {};
  for (const [λcc67e1e69824, λ54b201576379] of headerEntries(λ8f99b10b5f49)) {
    const λ8f99b10b5f49 = String(λcc67e1e69824).toLowerCase();
    void 0 === λ4b0ae9261a0b[λ8f99b10b5f49] ? λ4b0ae9261a0b[λ8f99b10b5f49] = λ54b201576379 : Array.isArray(λ4b0ae9261a0b[λ8f99b10b5f49]) ? λ4b0ae9261a0b[λ8f99b10b5f49].push(λ54b201576379) : λ4b0ae9261a0b[λ8f99b10b5f49] = [ λ4b0ae9261a0b[λ8f99b10b5f49], λ54b201576379 ];
  }
  return λ4b0ae9261a0b;
}
