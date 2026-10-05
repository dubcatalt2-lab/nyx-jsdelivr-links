export function headerEntries(λfdfb314e749e) {
  return λfdfb314e749e ? λfdfb314e749e instanceof Headers ? [ ...λfdfb314e749e.entries() ] : "function" == typeof λfdfb314e749e[Symbol.iterator] ? [ ...λfdfb314e749e ].flatMap(([λfdfb314e749e, λ5b4e9c3ca233]) => Array.isArray(λ5b4e9c3ca233) ? λ5b4e9c3ca233.map(λ5b4e9c3ca233 => [ String(λfdfb314e749e), String(λ5b4e9c3ca233) ]) : null == λ5b4e9c3ca233 ? [] : [ [ String(λfdfb314e749e), String(λ5b4e9c3ca233) ] ]) : "object" == typeof λfdfb314e749e ? Object.entries(λfdfb314e749e).flatMap(([λfdfb314e749e, λ5b4e9c3ca233]) => Array.isArray(λ5b4e9c3ca233) ? λ5b4e9c3ca233.map(λ5b4e9c3ca233 => [ λfdfb314e749e, String(λ5b4e9c3ca233) ]) : null == λ5b4e9c3ca233 ? [] : [ [ λfdfb314e749e, String(λ5b4e9c3ca233) ] ]) : [] : [];
}

export function headerRecord(λfdfb314e749e) {
  const λ5b4e9c3ca233 = {};
  for (const [λf8ee2fe077f6, λ38bbe231005f] of headerEntries(λfdfb314e749e)) {
    const λfdfb314e749e = String(λf8ee2fe077f6).toLowerCase();
    void 0 === λ5b4e9c3ca233[λfdfb314e749e] ? λ5b4e9c3ca233[λfdfb314e749e] = λ38bbe231005f : Array.isArray(λ5b4e9c3ca233[λfdfb314e749e]) ? λ5b4e9c3ca233[λfdfb314e749e].push(λ38bbe231005f) : λ5b4e9c3ca233[λfdfb314e749e] = [ λ5b4e9c3ca233[λfdfb314e749e], λ38bbe231005f ];
  }
  return λ5b4e9c3ca233;
}
