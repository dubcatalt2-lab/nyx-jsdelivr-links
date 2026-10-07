export function headerEntries(λa15eef50b5e2) {
  return λa15eef50b5e2 ? λa15eef50b5e2 instanceof Headers ? [ ...λa15eef50b5e2.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λa15eef50b5e2[Symbol.iterator] ? [ ...λa15eef50b5e2 ].flatMap(([λa15eef50b5e2, λ61e914211016]) => Array.isArray(λ61e914211016) ? λ61e914211016.map(λ61e914211016 => [ String(λa15eef50b5e2), String(λ61e914211016) ]) : null == λ61e914211016 ? [] : [ [ String(λa15eef50b5e2), String(λ61e914211016) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λa15eef50b5e2 ? Object.entries(λa15eef50b5e2).flatMap(([λa15eef50b5e2, λ61e914211016]) => Array.isArray(λ61e914211016) ? λ61e914211016.map(λ61e914211016 => [ λa15eef50b5e2, String(λ61e914211016) ]) : null == λ61e914211016 ? [] : [ [ λa15eef50b5e2, String(λ61e914211016) ] ]) : [] : [];
}

export function headerRecord(λa15eef50b5e2) {
  const λ61e914211016 = {};
  for (const [λf117d033d264, λ04d8b2431ec7] of headerEntries(λa15eef50b5e2)) {
    const λa15eef50b5e2 = String(λf117d033d264).toLowerCase();
    void 0 === λ61e914211016[λa15eef50b5e2] ? λ61e914211016[λa15eef50b5e2] = λ04d8b2431ec7 : Array.isArray(λ61e914211016[λa15eef50b5e2]) ? λ61e914211016[λa15eef50b5e2].push(λ04d8b2431ec7) : λ61e914211016[λa15eef50b5e2] = [ λ61e914211016[λa15eef50b5e2], λ04d8b2431ec7 ];
  }
  return λ61e914211016;
}
