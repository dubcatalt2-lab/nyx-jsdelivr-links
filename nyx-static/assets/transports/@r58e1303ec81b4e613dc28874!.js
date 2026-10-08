export function headerEntries(λ11224c27b5b4) {
  return λ11224c27b5b4 ? λ11224c27b5b4 instanceof Headers ? [ ...λ11224c27b5b4.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ11224c27b5b4[Symbol.iterator] ? [ ...λ11224c27b5b4 ].flatMap(([λ11224c27b5b4, λ1dd818ee9178]) => Array.isArray(λ1dd818ee9178) ? λ1dd818ee9178.map(λ1dd818ee9178 => [ String(λ11224c27b5b4), String(λ1dd818ee9178) ]) : null == λ1dd818ee9178 ? [] : [ [ String(λ11224c27b5b4), String(λ1dd818ee9178) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ11224c27b5b4 ? Object.entries(λ11224c27b5b4).flatMap(([λ11224c27b5b4, λ1dd818ee9178]) => Array.isArray(λ1dd818ee9178) ? λ1dd818ee9178.map(λ1dd818ee9178 => [ λ11224c27b5b4, String(λ1dd818ee9178) ]) : null == λ1dd818ee9178 ? [] : [ [ λ11224c27b5b4, String(λ1dd818ee9178) ] ]) : [] : [];
}

export function headerRecord(λ11224c27b5b4) {
  const λ1dd818ee9178 = {};
  for (const [λ231882b2add4, λ191b08dbcace] of headerEntries(λ11224c27b5b4)) {
    const λ11224c27b5b4 = String(λ231882b2add4).toLowerCase();
    void 0 === λ1dd818ee9178[λ11224c27b5b4] ? λ1dd818ee9178[λ11224c27b5b4] = λ191b08dbcace : Array.isArray(λ1dd818ee9178[λ11224c27b5b4]) ? λ1dd818ee9178[λ11224c27b5b4].push(λ191b08dbcace) : λ1dd818ee9178[λ11224c27b5b4] = [ λ1dd818ee9178[λ11224c27b5b4], λ191b08dbcace ];
  }
  return λ1dd818ee9178;
}
