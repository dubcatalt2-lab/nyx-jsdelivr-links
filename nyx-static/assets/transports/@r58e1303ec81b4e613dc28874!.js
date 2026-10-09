export function headerEntries(λac3f271bb004) {
  return λac3f271bb004 ? λac3f271bb004 instanceof Headers ? [ ...λac3f271bb004.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λac3f271bb004[Symbol.iterator] ? [ ...λac3f271bb004 ].flatMap(([λac3f271bb004, λ05e7be9808f4]) => Array.isArray(λ05e7be9808f4) ? λ05e7be9808f4.map(λ05e7be9808f4 => [ String(λac3f271bb004), String(λ05e7be9808f4) ]) : null == λ05e7be9808f4 ? [] : [ [ String(λac3f271bb004), String(λ05e7be9808f4) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λac3f271bb004 ? Object.entries(λac3f271bb004).flatMap(([λac3f271bb004, λ05e7be9808f4]) => Array.isArray(λ05e7be9808f4) ? λ05e7be9808f4.map(λ05e7be9808f4 => [ λac3f271bb004, String(λ05e7be9808f4) ]) : null == λ05e7be9808f4 ? [] : [ [ λac3f271bb004, String(λ05e7be9808f4) ] ]) : [] : [];
}

export function headerRecord(λac3f271bb004) {
  const λ05e7be9808f4 = {};
  for (const [λcaec167f8e74, λ807055578cc9] of headerEntries(λac3f271bb004)) {
    const λac3f271bb004 = String(λcaec167f8e74).toLowerCase();
    void 0 === λ05e7be9808f4[λac3f271bb004] ? λ05e7be9808f4[λac3f271bb004] = λ807055578cc9 : Array.isArray(λ05e7be9808f4[λac3f271bb004]) ? λ05e7be9808f4[λac3f271bb004].push(λ807055578cc9) : λ05e7be9808f4[λac3f271bb004] = [ λ05e7be9808f4[λac3f271bb004], λ807055578cc9 ];
  }
  return λ05e7be9808f4;
}
