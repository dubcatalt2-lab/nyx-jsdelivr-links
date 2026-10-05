export function headerEntries(λb9a5a67252b0) {
  return λb9a5a67252b0 ? λb9a5a67252b0 instanceof Headers ? [ ...λb9a5a67252b0.entries() ] : "function" == typeof λb9a5a67252b0[Symbol.iterator] ? [ ...λb9a5a67252b0 ].flatMap(([λb9a5a67252b0, λ886c06c0febd]) => Array.isArray(λ886c06c0febd) ? λ886c06c0febd.map(λ886c06c0febd => [ String(λb9a5a67252b0), String(λ886c06c0febd) ]) : null == λ886c06c0febd ? [] : [ [ String(λb9a5a67252b0), String(λ886c06c0febd) ] ]) : "object" == typeof λb9a5a67252b0 ? Object.entries(λb9a5a67252b0).flatMap(([λb9a5a67252b0, λ886c06c0febd]) => Array.isArray(λ886c06c0febd) ? λ886c06c0febd.map(λ886c06c0febd => [ λb9a5a67252b0, String(λ886c06c0febd) ]) : null == λ886c06c0febd ? [] : [ [ λb9a5a67252b0, String(λ886c06c0febd) ] ]) : [] : [];
}

export function headerRecord(λb9a5a67252b0) {
  const λ886c06c0febd = {};
  for (const [λ4496a661b9ba, λ781c4eb2a9e4] of headerEntries(λb9a5a67252b0)) {
    const λb9a5a67252b0 = String(λ4496a661b9ba).toLowerCase();
    void 0 === λ886c06c0febd[λb9a5a67252b0] ? λ886c06c0febd[λb9a5a67252b0] = λ781c4eb2a9e4 : Array.isArray(λ886c06c0febd[λb9a5a67252b0]) ? λ886c06c0febd[λb9a5a67252b0].push(λ781c4eb2a9e4) : λ886c06c0febd[λb9a5a67252b0] = [ λ886c06c0febd[λb9a5a67252b0], λ781c4eb2a9e4 ];
  }
  return λ886c06c0febd;
}
