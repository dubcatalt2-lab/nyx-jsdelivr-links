export function headerEntries(λce27dbe15560) {
  return λce27dbe15560 ? λce27dbe15560 instanceof Headers ? [ ...λce27dbe15560.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λce27dbe15560[Symbol.iterator] ? [ ...λce27dbe15560 ].flatMap(([λce27dbe15560, λcc995256a717]) => Array.isArray(λcc995256a717) ? λcc995256a717.map(λcc995256a717 => [ String(λce27dbe15560), String(λcc995256a717) ]) : null == λcc995256a717 ? [] : [ [ String(λce27dbe15560), String(λcc995256a717) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λce27dbe15560 ? Object.entries(λce27dbe15560).flatMap(([λce27dbe15560, λcc995256a717]) => Array.isArray(λcc995256a717) ? λcc995256a717.map(λcc995256a717 => [ λce27dbe15560, String(λcc995256a717) ]) : null == λcc995256a717 ? [] : [ [ λce27dbe15560, String(λcc995256a717) ] ]) : [] : [];
}

export function headerRecord(λce27dbe15560) {
  const λcc995256a717 = {};
  for (const [λac276486f767, λ460b4e71e850] of headerEntries(λce27dbe15560)) {
    const λce27dbe15560 = String(λac276486f767).toLowerCase();
    void 0 === λcc995256a717[λce27dbe15560] ? λcc995256a717[λce27dbe15560] = λ460b4e71e850 : Array.isArray(λcc995256a717[λce27dbe15560]) ? λcc995256a717[λce27dbe15560].push(λ460b4e71e850) : λcc995256a717[λce27dbe15560] = [ λcc995256a717[λce27dbe15560], λ460b4e71e850 ];
  }
  return λcc995256a717;
}
