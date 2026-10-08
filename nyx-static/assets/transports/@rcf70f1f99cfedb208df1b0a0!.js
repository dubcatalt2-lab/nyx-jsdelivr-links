export function headerEntries(λ0b35c2f8bcf7) {
  return λ0b35c2f8bcf7 ? λ0b35c2f8bcf7 instanceof Headers ? [ ...λ0b35c2f8bcf7.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ0b35c2f8bcf7[Symbol.iterator] ? [ ...λ0b35c2f8bcf7 ].flatMap(([λ0b35c2f8bcf7, λ1b061b45dad4]) => Array.isArray(λ1b061b45dad4) ? λ1b061b45dad4.map(λ1b061b45dad4 => [ String(λ0b35c2f8bcf7), String(λ1b061b45dad4) ]) : null == λ1b061b45dad4 ? [] : [ [ String(λ0b35c2f8bcf7), String(λ1b061b45dad4) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ0b35c2f8bcf7 ? Object.entries(λ0b35c2f8bcf7).flatMap(([λ0b35c2f8bcf7, λ1b061b45dad4]) => Array.isArray(λ1b061b45dad4) ? λ1b061b45dad4.map(λ1b061b45dad4 => [ λ0b35c2f8bcf7, String(λ1b061b45dad4) ]) : null == λ1b061b45dad4 ? [] : [ [ λ0b35c2f8bcf7, String(λ1b061b45dad4) ] ]) : [] : [];
}

export function headerRecord(λ0b35c2f8bcf7) {
  const λ1b061b45dad4 = {};
  for (const [λf50f0a9d82dc, λ8df1779512dc] of headerEntries(λ0b35c2f8bcf7)) {
    const λ0b35c2f8bcf7 = String(λf50f0a9d82dc).toLowerCase();
    void 0 === λ1b061b45dad4[λ0b35c2f8bcf7] ? λ1b061b45dad4[λ0b35c2f8bcf7] = λ8df1779512dc : Array.isArray(λ1b061b45dad4[λ0b35c2f8bcf7]) ? λ1b061b45dad4[λ0b35c2f8bcf7].push(λ8df1779512dc) : λ1b061b45dad4[λ0b35c2f8bcf7] = [ λ1b061b45dad4[λ0b35c2f8bcf7], λ8df1779512dc ];
  }
  return λ1b061b45dad4;
}
