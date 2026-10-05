export function headerEntries(λ5f72f379101c) {
  return λ5f72f379101c ? λ5f72f379101c instanceof Headers ? [ ...λ5f72f379101c.entries() ] : "function" == typeof λ5f72f379101c[Symbol.iterator] ? [ ...λ5f72f379101c ].flatMap(([λ5f72f379101c, λff831ea47429]) => Array.isArray(λff831ea47429) ? λff831ea47429.map(λff831ea47429 => [ String(λ5f72f379101c), String(λff831ea47429) ]) : null == λff831ea47429 ? [] : [ [ String(λ5f72f379101c), String(λff831ea47429) ] ]) : "object" == typeof λ5f72f379101c ? Object.entries(λ5f72f379101c).flatMap(([λ5f72f379101c, λff831ea47429]) => Array.isArray(λff831ea47429) ? λff831ea47429.map(λff831ea47429 => [ λ5f72f379101c, String(λff831ea47429) ]) : null == λff831ea47429 ? [] : [ [ λ5f72f379101c, String(λff831ea47429) ] ]) : [] : [];
}

export function headerRecord(λ5f72f379101c) {
  const λff831ea47429 = {};
  for (const [λ1acc843d6743, λ6e0cf7f3388f] of headerEntries(λ5f72f379101c)) {
    const λ5f72f379101c = String(λ1acc843d6743).toLowerCase();
    void 0 === λff831ea47429[λ5f72f379101c] ? λff831ea47429[λ5f72f379101c] = λ6e0cf7f3388f : Array.isArray(λff831ea47429[λ5f72f379101c]) ? λff831ea47429[λ5f72f379101c].push(λ6e0cf7f3388f) : λff831ea47429[λ5f72f379101c] = [ λff831ea47429[λ5f72f379101c], λ6e0cf7f3388f ];
  }
  return λff831ea47429;
}
