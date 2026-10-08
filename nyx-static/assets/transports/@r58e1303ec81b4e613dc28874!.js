export function headerEntries(λ7e1183ded1c6) {
  return λ7e1183ded1c6 ? λ7e1183ded1c6 instanceof Headers ? [ ...λ7e1183ded1c6.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ7e1183ded1c6[Symbol.iterator] ? [ ...λ7e1183ded1c6 ].flatMap(([λ7e1183ded1c6, λ58836749cee1]) => Array.isArray(λ58836749cee1) ? λ58836749cee1.map(λ58836749cee1 => [ String(λ7e1183ded1c6), String(λ58836749cee1) ]) : null == λ58836749cee1 ? [] : [ [ String(λ7e1183ded1c6), String(λ58836749cee1) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ7e1183ded1c6 ? Object.entries(λ7e1183ded1c6).flatMap(([λ7e1183ded1c6, λ58836749cee1]) => Array.isArray(λ58836749cee1) ? λ58836749cee1.map(λ58836749cee1 => [ λ7e1183ded1c6, String(λ58836749cee1) ]) : null == λ58836749cee1 ? [] : [ [ λ7e1183ded1c6, String(λ58836749cee1) ] ]) : [] : [];
}

export function headerRecord(λ7e1183ded1c6) {
  const λ58836749cee1 = {};
  for (const [λ557305e9934c, λ5f6f88afe1f5] of headerEntries(λ7e1183ded1c6)) {
    const λ7e1183ded1c6 = String(λ557305e9934c).toLowerCase();
    void 0 === λ58836749cee1[λ7e1183ded1c6] ? λ58836749cee1[λ7e1183ded1c6] = λ5f6f88afe1f5 : Array.isArray(λ58836749cee1[λ7e1183ded1c6]) ? λ58836749cee1[λ7e1183ded1c6].push(λ5f6f88afe1f5) : λ58836749cee1[λ7e1183ded1c6] = [ λ58836749cee1[λ7e1183ded1c6], λ5f6f88afe1f5 ];
  }
  return λ58836749cee1;
}
