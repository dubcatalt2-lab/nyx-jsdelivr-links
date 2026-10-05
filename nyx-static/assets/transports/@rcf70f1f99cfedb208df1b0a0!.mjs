export function headerEntries(λc485dd4a548b) {
  return λc485dd4a548b ? λc485dd4a548b instanceof Headers ? [ ...λc485dd4a548b.entries() ] : "function" == typeof λc485dd4a548b[Symbol.iterator] ? [ ...λc485dd4a548b ].flatMap(([λc485dd4a548b, λc8c5a2df1282]) => Array.isArray(λc8c5a2df1282) ? λc8c5a2df1282.map(λc8c5a2df1282 => [ String(λc485dd4a548b), String(λc8c5a2df1282) ]) : null == λc8c5a2df1282 ? [] : [ [ String(λc485dd4a548b), String(λc8c5a2df1282) ] ]) : "object" == typeof λc485dd4a548b ? Object.entries(λc485dd4a548b).flatMap(([λc485dd4a548b, λc8c5a2df1282]) => Array.isArray(λc8c5a2df1282) ? λc8c5a2df1282.map(λc8c5a2df1282 => [ λc485dd4a548b, String(λc8c5a2df1282) ]) : null == λc8c5a2df1282 ? [] : [ [ λc485dd4a548b, String(λc8c5a2df1282) ] ]) : [] : [];
}

export function headerRecord(λc485dd4a548b) {
  const λc8c5a2df1282 = {};
  for (const [λ0bf0b5653ef7, λ5bed43586de6] of headerEntries(λc485dd4a548b)) {
    const λc485dd4a548b = String(λ0bf0b5653ef7).toLowerCase();
    void 0 === λc8c5a2df1282[λc485dd4a548b] ? λc8c5a2df1282[λc485dd4a548b] = λ5bed43586de6 : Array.isArray(λc8c5a2df1282[λc485dd4a548b]) ? λc8c5a2df1282[λc485dd4a548b].push(λ5bed43586de6) : λc8c5a2df1282[λc485dd4a548b] = [ λc8c5a2df1282[λc485dd4a548b], λ5bed43586de6 ];
  }
  return λc8c5a2df1282;
}
