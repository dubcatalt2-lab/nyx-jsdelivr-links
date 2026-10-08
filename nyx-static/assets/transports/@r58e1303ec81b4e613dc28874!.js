export function headerEntries(λa9eac147014c) {
  return λa9eac147014c ? λa9eac147014c instanceof Headers ? [ ...λa9eac147014c.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λa9eac147014c[Symbol.iterator] ? [ ...λa9eac147014c ].flatMap(([λa9eac147014c, λf2889a2d113d]) => Array.isArray(λf2889a2d113d) ? λf2889a2d113d.map(λf2889a2d113d => [ String(λa9eac147014c), String(λf2889a2d113d) ]) : null == λf2889a2d113d ? [] : [ [ String(λa9eac147014c), String(λf2889a2d113d) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λa9eac147014c ? Object.entries(λa9eac147014c).flatMap(([λa9eac147014c, λf2889a2d113d]) => Array.isArray(λf2889a2d113d) ? λf2889a2d113d.map(λf2889a2d113d => [ λa9eac147014c, String(λf2889a2d113d) ]) : null == λf2889a2d113d ? [] : [ [ λa9eac147014c, String(λf2889a2d113d) ] ]) : [] : [];
}

export function headerRecord(λa9eac147014c) {
  const λf2889a2d113d = {};
  for (const [λbc58e5cfb05a, λ38463d6c2eb4] of headerEntries(λa9eac147014c)) {
    const λa9eac147014c = String(λbc58e5cfb05a).toLowerCase();
    void 0 === λf2889a2d113d[λa9eac147014c] ? λf2889a2d113d[λa9eac147014c] = λ38463d6c2eb4 : Array.isArray(λf2889a2d113d[λa9eac147014c]) ? λf2889a2d113d[λa9eac147014c].push(λ38463d6c2eb4) : λf2889a2d113d[λa9eac147014c] = [ λf2889a2d113d[λa9eac147014c], λ38463d6c2eb4 ];
  }
  return λf2889a2d113d;
}
