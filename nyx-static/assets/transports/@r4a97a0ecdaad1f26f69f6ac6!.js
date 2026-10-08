export function headerEntries(λ2db94c0a99b1) {
  return λ2db94c0a99b1 ? λ2db94c0a99b1 instanceof Headers ? [ ...λ2db94c0a99b1.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ2db94c0a99b1[Symbol.iterator] ? [ ...λ2db94c0a99b1 ].flatMap(([λ2db94c0a99b1, λ9a90ce0134ec]) => Array.isArray(λ9a90ce0134ec) ? λ9a90ce0134ec.map(λ9a90ce0134ec => [ String(λ2db94c0a99b1), String(λ9a90ce0134ec) ]) : null == λ9a90ce0134ec ? [] : [ [ String(λ2db94c0a99b1), String(λ9a90ce0134ec) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ2db94c0a99b1 ? Object.entries(λ2db94c0a99b1).flatMap(([λ2db94c0a99b1, λ9a90ce0134ec]) => Array.isArray(λ9a90ce0134ec) ? λ9a90ce0134ec.map(λ9a90ce0134ec => [ λ2db94c0a99b1, String(λ9a90ce0134ec) ]) : null == λ9a90ce0134ec ? [] : [ [ λ2db94c0a99b1, String(λ9a90ce0134ec) ] ]) : [] : [];
}

export function headerRecord(λ2db94c0a99b1) {
  const λ9a90ce0134ec = {};
  for (const [λ17705d34d813, λ86e0a7792443] of headerEntries(λ2db94c0a99b1)) {
    const λ2db94c0a99b1 = String(λ17705d34d813).toLowerCase();
    void 0 === λ9a90ce0134ec[λ2db94c0a99b1] ? λ9a90ce0134ec[λ2db94c0a99b1] = λ86e0a7792443 : Array.isArray(λ9a90ce0134ec[λ2db94c0a99b1]) ? λ9a90ce0134ec[λ2db94c0a99b1].push(λ86e0a7792443) : λ9a90ce0134ec[λ2db94c0a99b1] = [ λ9a90ce0134ec[λ2db94c0a99b1], λ86e0a7792443 ];
  }
  return λ9a90ce0134ec;
}
