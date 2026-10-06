export function headerEntries(λab75b0403978) {
  return λab75b0403978 ? λab75b0403978 instanceof Headers ? [ ...λab75b0403978.entries() ] : "function" == typeof λab75b0403978[Symbol.iterator] ? [ ...λab75b0403978 ].flatMap(([λab75b0403978, λ783b68774b4e]) => Array.isArray(λ783b68774b4e) ? λ783b68774b4e.map(λ783b68774b4e => [ String(λab75b0403978), String(λ783b68774b4e) ]) : null == λ783b68774b4e ? [] : [ [ String(λab75b0403978), String(λ783b68774b4e) ] ]) : "object" == typeof λab75b0403978 ? Object.entries(λab75b0403978).flatMap(([λab75b0403978, λ783b68774b4e]) => Array.isArray(λ783b68774b4e) ? λ783b68774b4e.map(λ783b68774b4e => [ λab75b0403978, String(λ783b68774b4e) ]) : null == λ783b68774b4e ? [] : [ [ λab75b0403978, String(λ783b68774b4e) ] ]) : [] : [];
}

export function headerRecord(λab75b0403978) {
  const λ783b68774b4e = {};
  for (const [λd663f76ffbda, λb7dcdf49cc51] of headerEntries(λab75b0403978)) {
    const λab75b0403978 = String(λd663f76ffbda).toLowerCase();
    void 0 === λ783b68774b4e[λab75b0403978] ? λ783b68774b4e[λab75b0403978] = λb7dcdf49cc51 : Array.isArray(λ783b68774b4e[λab75b0403978]) ? λ783b68774b4e[λab75b0403978].push(λb7dcdf49cc51) : λ783b68774b4e[λab75b0403978] = [ λ783b68774b4e[λab75b0403978], λb7dcdf49cc51 ];
  }
  return λ783b68774b4e;
}
