export function headerEntries(λ2e7a26fda586) {
  return λ2e7a26fda586 ? λ2e7a26fda586 instanceof Headers ? [ ...λ2e7a26fda586.entries() ] : "function" == typeof λ2e7a26fda586[Symbol.iterator] ? [ ...λ2e7a26fda586 ].flatMap(([λ2e7a26fda586, λ27923871d12c]) => Array.isArray(λ27923871d12c) ? λ27923871d12c.map(λ27923871d12c => [ String(λ2e7a26fda586), String(λ27923871d12c) ]) : null == λ27923871d12c ? [] : [ [ String(λ2e7a26fda586), String(λ27923871d12c) ] ]) : "object" == typeof λ2e7a26fda586 ? Object.entries(λ2e7a26fda586).flatMap(([λ2e7a26fda586, λ27923871d12c]) => Array.isArray(λ27923871d12c) ? λ27923871d12c.map(λ27923871d12c => [ λ2e7a26fda586, String(λ27923871d12c) ]) : null == λ27923871d12c ? [] : [ [ λ2e7a26fda586, String(λ27923871d12c) ] ]) : [] : [];
}

export function headerRecord(λ2e7a26fda586) {
  const λ27923871d12c = {};
  for (const [λcc2dc58198e6, λf2b1ae2a326b] of headerEntries(λ2e7a26fda586)) {
    const λ2e7a26fda586 = String(λcc2dc58198e6).toLowerCase();
    void 0 === λ27923871d12c[λ2e7a26fda586] ? λ27923871d12c[λ2e7a26fda586] = λf2b1ae2a326b : Array.isArray(λ27923871d12c[λ2e7a26fda586]) ? λ27923871d12c[λ2e7a26fda586].push(λf2b1ae2a326b) : λ27923871d12c[λ2e7a26fda586] = [ λ27923871d12c[λ2e7a26fda586], λf2b1ae2a326b ];
  }
  return λ27923871d12c;
}
