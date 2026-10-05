export function headerEntries(λ424e7c839543) {
  return λ424e7c839543 ? λ424e7c839543 instanceof Headers ? [ ...λ424e7c839543.entries() ] : "function" == typeof λ424e7c839543[Symbol.iterator] ? [ ...λ424e7c839543 ].flatMap(([λ424e7c839543, λ172e0a83259d]) => Array.isArray(λ172e0a83259d) ? λ172e0a83259d.map(λ172e0a83259d => [ String(λ424e7c839543), String(λ172e0a83259d) ]) : null == λ172e0a83259d ? [] : [ [ String(λ424e7c839543), String(λ172e0a83259d) ] ]) : "object" == typeof λ424e7c839543 ? Object.entries(λ424e7c839543).flatMap(([λ424e7c839543, λ172e0a83259d]) => Array.isArray(λ172e0a83259d) ? λ172e0a83259d.map(λ172e0a83259d => [ λ424e7c839543, String(λ172e0a83259d) ]) : null == λ172e0a83259d ? [] : [ [ λ424e7c839543, String(λ172e0a83259d) ] ]) : [] : [];
}

export function headerRecord(λ424e7c839543) {
  const λ172e0a83259d = {};
  for (const [λf15fe6ec79d9, λ751a37d67605] of headerEntries(λ424e7c839543)) {
    const λ424e7c839543 = String(λf15fe6ec79d9).toLowerCase();
    void 0 === λ172e0a83259d[λ424e7c839543] ? λ172e0a83259d[λ424e7c839543] = λ751a37d67605 : Array.isArray(λ172e0a83259d[λ424e7c839543]) ? λ172e0a83259d[λ424e7c839543].push(λ751a37d67605) : λ172e0a83259d[λ424e7c839543] = [ λ172e0a83259d[λ424e7c839543], λ751a37d67605 ];
  }
  return λ172e0a83259d;
}
