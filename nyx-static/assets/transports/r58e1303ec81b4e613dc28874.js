export function headerEntries(λ7ac47ebc574f) {
  return λ7ac47ebc574f ? λ7ac47ebc574f instanceof Headers ? [ ...λ7ac47ebc574f.entries() ] : "function" == typeof λ7ac47ebc574f[Symbol.iterator] ? [ ...λ7ac47ebc574f ].flatMap(([λ7ac47ebc574f, λ4baeef77ba55]) => Array.isArray(λ4baeef77ba55) ? λ4baeef77ba55.map(λ4baeef77ba55 => [ String(λ7ac47ebc574f), String(λ4baeef77ba55) ]) : null == λ4baeef77ba55 ? [] : [ [ String(λ7ac47ebc574f), String(λ4baeef77ba55) ] ]) : "object" == typeof λ7ac47ebc574f ? Object.entries(λ7ac47ebc574f).flatMap(([λ7ac47ebc574f, λ4baeef77ba55]) => Array.isArray(λ4baeef77ba55) ? λ4baeef77ba55.map(λ4baeef77ba55 => [ λ7ac47ebc574f, String(λ4baeef77ba55) ]) : null == λ4baeef77ba55 ? [] : [ [ λ7ac47ebc574f, String(λ4baeef77ba55) ] ]) : [] : [];
}

export function headerRecord(λ7ac47ebc574f) {
  const λ4baeef77ba55 = {};
  for (const [λd10644f007b5, λ4681990895a1] of headerEntries(λ7ac47ebc574f)) {
    const λ7ac47ebc574f = String(λd10644f007b5).toLowerCase();
    void 0 === λ4baeef77ba55[λ7ac47ebc574f] ? λ4baeef77ba55[λ7ac47ebc574f] = λ4681990895a1 : Array.isArray(λ4baeef77ba55[λ7ac47ebc574f]) ? λ4baeef77ba55[λ7ac47ebc574f].push(λ4681990895a1) : λ4baeef77ba55[λ7ac47ebc574f] = [ λ4baeef77ba55[λ7ac47ebc574f], λ4681990895a1 ];
  }
  return λ4baeef77ba55;
}
