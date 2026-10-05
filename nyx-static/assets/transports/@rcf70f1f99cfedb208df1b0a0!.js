export function headerEntries(λ8fe5b57a082f) {
  return λ8fe5b57a082f ? λ8fe5b57a082f instanceof Headers ? [ ...λ8fe5b57a082f.entries() ] : "function" == typeof λ8fe5b57a082f[Symbol.iterator] ? [ ...λ8fe5b57a082f ].flatMap(([λ8fe5b57a082f, λ8dc54d3b0d68]) => Array.isArray(λ8dc54d3b0d68) ? λ8dc54d3b0d68.map(λ8dc54d3b0d68 => [ String(λ8fe5b57a082f), String(λ8dc54d3b0d68) ]) : null == λ8dc54d3b0d68 ? [] : [ [ String(λ8fe5b57a082f), String(λ8dc54d3b0d68) ] ]) : "object" == typeof λ8fe5b57a082f ? Object.entries(λ8fe5b57a082f).flatMap(([λ8fe5b57a082f, λ8dc54d3b0d68]) => Array.isArray(λ8dc54d3b0d68) ? λ8dc54d3b0d68.map(λ8dc54d3b0d68 => [ λ8fe5b57a082f, String(λ8dc54d3b0d68) ]) : null == λ8dc54d3b0d68 ? [] : [ [ λ8fe5b57a082f, String(λ8dc54d3b0d68) ] ]) : [] : [];
}

export function headerRecord(λ8fe5b57a082f) {
  const λ8dc54d3b0d68 = {};
  for (const [λ8999e1a2f1fb, λ205c16c6eb7e] of headerEntries(λ8fe5b57a082f)) {
    const λ8fe5b57a082f = String(λ8999e1a2f1fb).toLowerCase();
    void 0 === λ8dc54d3b0d68[λ8fe5b57a082f] ? λ8dc54d3b0d68[λ8fe5b57a082f] = λ205c16c6eb7e : Array.isArray(λ8dc54d3b0d68[λ8fe5b57a082f]) ? λ8dc54d3b0d68[λ8fe5b57a082f].push(λ205c16c6eb7e) : λ8dc54d3b0d68[λ8fe5b57a082f] = [ λ8dc54d3b0d68[λ8fe5b57a082f], λ205c16c6eb7e ];
  }
  return λ8dc54d3b0d68;
}
