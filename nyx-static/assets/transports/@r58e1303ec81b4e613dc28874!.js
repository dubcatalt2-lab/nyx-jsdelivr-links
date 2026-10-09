export function headerEntries(λ6ba83893fdd8) {
  return λ6ba83893fdd8 ? λ6ba83893fdd8 instanceof Headers ? [ ...λ6ba83893fdd8.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ6ba83893fdd8[Symbol.iterator] ? [ ...λ6ba83893fdd8 ].flatMap(([λ6ba83893fdd8, λ8a819bc76987]) => Array.isArray(λ8a819bc76987) ? λ8a819bc76987.map(λ8a819bc76987 => [ String(λ6ba83893fdd8), String(λ8a819bc76987) ]) : null == λ8a819bc76987 ? [] : [ [ String(λ6ba83893fdd8), String(λ8a819bc76987) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ6ba83893fdd8 ? Object.entries(λ6ba83893fdd8).flatMap(([λ6ba83893fdd8, λ8a819bc76987]) => Array.isArray(λ8a819bc76987) ? λ8a819bc76987.map(λ8a819bc76987 => [ λ6ba83893fdd8, String(λ8a819bc76987) ]) : null == λ8a819bc76987 ? [] : [ [ λ6ba83893fdd8, String(λ8a819bc76987) ] ]) : [] : [];
}

export function headerRecord(λ6ba83893fdd8) {
  const λ8a819bc76987 = {};
  for (const [λa28fe9f6e789, λ2a1045711c10] of headerEntries(λ6ba83893fdd8)) {
    const λ6ba83893fdd8 = String(λa28fe9f6e789).toLowerCase();
    void 0 === λ8a819bc76987[λ6ba83893fdd8] ? λ8a819bc76987[λ6ba83893fdd8] = λ2a1045711c10 : Array.isArray(λ8a819bc76987[λ6ba83893fdd8]) ? λ8a819bc76987[λ6ba83893fdd8].push(λ2a1045711c10) : λ8a819bc76987[λ6ba83893fdd8] = [ λ8a819bc76987[λ6ba83893fdd8], λ2a1045711c10 ];
  }
  return λ8a819bc76987;
}
