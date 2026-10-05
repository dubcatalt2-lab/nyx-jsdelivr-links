export function headerEntries(λde2d9cdae3ca) {
  return λde2d9cdae3ca ? λde2d9cdae3ca instanceof Headers ? [ ...λde2d9cdae3ca.entries() ] : "function" == typeof λde2d9cdae3ca[Symbol.iterator] ? [ ...λde2d9cdae3ca ].flatMap(([λde2d9cdae3ca, λ70a2f03fba9c]) => Array.isArray(λ70a2f03fba9c) ? λ70a2f03fba9c.map(λ70a2f03fba9c => [ String(λde2d9cdae3ca), String(λ70a2f03fba9c) ]) : null == λ70a2f03fba9c ? [] : [ [ String(λde2d9cdae3ca), String(λ70a2f03fba9c) ] ]) : "object" == typeof λde2d9cdae3ca ? Object.entries(λde2d9cdae3ca).flatMap(([λde2d9cdae3ca, λ70a2f03fba9c]) => Array.isArray(λ70a2f03fba9c) ? λ70a2f03fba9c.map(λ70a2f03fba9c => [ λde2d9cdae3ca, String(λ70a2f03fba9c) ]) : null == λ70a2f03fba9c ? [] : [ [ λde2d9cdae3ca, String(λ70a2f03fba9c) ] ]) : [] : [];
}

export function headerRecord(λde2d9cdae3ca) {
  const λ70a2f03fba9c = {};
  for (const [λa9f4b30c3ece, λ236b8a4627e4] of headerEntries(λde2d9cdae3ca)) {
    const λde2d9cdae3ca = String(λa9f4b30c3ece).toLowerCase();
    void 0 === λ70a2f03fba9c[λde2d9cdae3ca] ? λ70a2f03fba9c[λde2d9cdae3ca] = λ236b8a4627e4 : Array.isArray(λ70a2f03fba9c[λde2d9cdae3ca]) ? λ70a2f03fba9c[λde2d9cdae3ca].push(λ236b8a4627e4) : λ70a2f03fba9c[λde2d9cdae3ca] = [ λ70a2f03fba9c[λde2d9cdae3ca], λ236b8a4627e4 ];
  }
  return λ70a2f03fba9c;
}
