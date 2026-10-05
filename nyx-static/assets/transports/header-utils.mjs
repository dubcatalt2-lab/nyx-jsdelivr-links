export function headerEntries(λ922741d37711) {
  return λ922741d37711 ? λ922741d37711 instanceof Headers ? [ ...λ922741d37711.entries() ] : "function" == typeof λ922741d37711[Symbol.iterator] ? [ ...λ922741d37711 ].flatMap(([λ922741d37711, λ113b2f1a07be]) => Array.isArray(λ113b2f1a07be) ? λ113b2f1a07be.map(λ113b2f1a07be => [ String(λ922741d37711), String(λ113b2f1a07be) ]) : null == λ113b2f1a07be ? [] : [ [ String(λ922741d37711), String(λ113b2f1a07be) ] ]) : "object" == typeof λ922741d37711 ? Object.entries(λ922741d37711).flatMap(([λ922741d37711, λ113b2f1a07be]) => Array.isArray(λ113b2f1a07be) ? λ113b2f1a07be.map(λ113b2f1a07be => [ λ922741d37711, String(λ113b2f1a07be) ]) : null == λ113b2f1a07be ? [] : [ [ λ922741d37711, String(λ113b2f1a07be) ] ]) : [] : [];
}

export function headerRecord(λ922741d37711) {
  const λ113b2f1a07be = {};
  for (const [λ916f897a10d0, λe59931910878] of headerEntries(λ922741d37711)) {
    const λ922741d37711 = String(λ916f897a10d0).toLowerCase();
    void 0 === λ113b2f1a07be[λ922741d37711] ? λ113b2f1a07be[λ922741d37711] = λe59931910878 : Array.isArray(λ113b2f1a07be[λ922741d37711]) ? λ113b2f1a07be[λ922741d37711].push(λe59931910878) : λ113b2f1a07be[λ922741d37711] = [ λ113b2f1a07be[λ922741d37711], λe59931910878 ];
  }
  return λ113b2f1a07be;
}
