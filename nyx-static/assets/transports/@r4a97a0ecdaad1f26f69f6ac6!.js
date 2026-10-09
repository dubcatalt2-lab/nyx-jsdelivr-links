export function headerEntries(λ5f52bd9fe6ac) {
  return λ5f52bd9fe6ac ? λ5f52bd9fe6ac instanceof Headers ? [ ...λ5f52bd9fe6ac.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ5f52bd9fe6ac[Symbol.iterator] ? [ ...λ5f52bd9fe6ac ].flatMap(([λ5f52bd9fe6ac, λa5848469b073]) => Array.isArray(λa5848469b073) ? λa5848469b073.map(λa5848469b073 => [ String(λ5f52bd9fe6ac), String(λa5848469b073) ]) : null == λa5848469b073 ? [] : [ [ String(λ5f52bd9fe6ac), String(λa5848469b073) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ5f52bd9fe6ac ? Object.entries(λ5f52bd9fe6ac).flatMap(([λ5f52bd9fe6ac, λa5848469b073]) => Array.isArray(λa5848469b073) ? λa5848469b073.map(λa5848469b073 => [ λ5f52bd9fe6ac, String(λa5848469b073) ]) : null == λa5848469b073 ? [] : [ [ λ5f52bd9fe6ac, String(λa5848469b073) ] ]) : [] : [];
}

export function headerRecord(λ5f52bd9fe6ac) {
  const λa5848469b073 = {};
  for (const [λ5e95337e9473, λebd5a350b155] of headerEntries(λ5f52bd9fe6ac)) {
    const λ5f52bd9fe6ac = String(λ5e95337e9473).toLowerCase();
    void 0 === λa5848469b073[λ5f52bd9fe6ac] ? λa5848469b073[λ5f52bd9fe6ac] = λebd5a350b155 : Array.isArray(λa5848469b073[λ5f52bd9fe6ac]) ? λa5848469b073[λ5f52bd9fe6ac].push(λebd5a350b155) : λa5848469b073[λ5f52bd9fe6ac] = [ λa5848469b073[λ5f52bd9fe6ac], λebd5a350b155 ];
  }
  return λa5848469b073;
}
