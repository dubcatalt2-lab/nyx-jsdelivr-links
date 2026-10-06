export function headerEntries(λ77c28daf22ec) {
  return λ77c28daf22ec ? λ77c28daf22ec instanceof Headers ? [ ...λ77c28daf22ec.entries() ] : "function" == typeof λ77c28daf22ec[Symbol.iterator] ? [ ...λ77c28daf22ec ].flatMap(([λ77c28daf22ec, λ939b5eb92d18]) => Array.isArray(λ939b5eb92d18) ? λ939b5eb92d18.map(λ939b5eb92d18 => [ String(λ77c28daf22ec), String(λ939b5eb92d18) ]) : null == λ939b5eb92d18 ? [] : [ [ String(λ77c28daf22ec), String(λ939b5eb92d18) ] ]) : "object" == typeof λ77c28daf22ec ? Object.entries(λ77c28daf22ec).flatMap(([λ77c28daf22ec, λ939b5eb92d18]) => Array.isArray(λ939b5eb92d18) ? λ939b5eb92d18.map(λ939b5eb92d18 => [ λ77c28daf22ec, String(λ939b5eb92d18) ]) : null == λ939b5eb92d18 ? [] : [ [ λ77c28daf22ec, String(λ939b5eb92d18) ] ]) : [] : [];
}

export function headerRecord(λ77c28daf22ec) {
  const λ939b5eb92d18 = {};
  for (const [λ81b16766d43e, λa2df7e24e288] of headerEntries(λ77c28daf22ec)) {
    const λ77c28daf22ec = String(λ81b16766d43e).toLowerCase();
    void 0 === λ939b5eb92d18[λ77c28daf22ec] ? λ939b5eb92d18[λ77c28daf22ec] = λa2df7e24e288 : Array.isArray(λ939b5eb92d18[λ77c28daf22ec]) ? λ939b5eb92d18[λ77c28daf22ec].push(λa2df7e24e288) : λ939b5eb92d18[λ77c28daf22ec] = [ λ939b5eb92d18[λ77c28daf22ec], λa2df7e24e288 ];
  }
  return λ939b5eb92d18;
}
