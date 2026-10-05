export function headerEntries(λa19dc3e1b021) {
  return λa19dc3e1b021 ? λa19dc3e1b021 instanceof Headers ? [ ...λa19dc3e1b021.entries() ] : "function" == typeof λa19dc3e1b021[Symbol.iterator] ? [ ...λa19dc3e1b021 ].flatMap(([λa19dc3e1b021, λa167a7eef820]) => Array.isArray(λa167a7eef820) ? λa167a7eef820.map(λa167a7eef820 => [ String(λa19dc3e1b021), String(λa167a7eef820) ]) : null == λa167a7eef820 ? [] : [ [ String(λa19dc3e1b021), String(λa167a7eef820) ] ]) : "object" == typeof λa19dc3e1b021 ? Object.entries(λa19dc3e1b021).flatMap(([λa19dc3e1b021, λa167a7eef820]) => Array.isArray(λa167a7eef820) ? λa167a7eef820.map(λa167a7eef820 => [ λa19dc3e1b021, String(λa167a7eef820) ]) : null == λa167a7eef820 ? [] : [ [ λa19dc3e1b021, String(λa167a7eef820) ] ]) : [] : [];
}

export function headerRecord(λa19dc3e1b021) {
  const λa167a7eef820 = {};
  for (const [λ06435c7616d8, λ1ab0c40a9aad] of headerEntries(λa19dc3e1b021)) {
    const λa19dc3e1b021 = String(λ06435c7616d8).toLowerCase();
    void 0 === λa167a7eef820[λa19dc3e1b021] ? λa167a7eef820[λa19dc3e1b021] = λ1ab0c40a9aad : Array.isArray(λa167a7eef820[λa19dc3e1b021]) ? λa167a7eef820[λa19dc3e1b021].push(λ1ab0c40a9aad) : λa167a7eef820[λa19dc3e1b021] = [ λa167a7eef820[λa19dc3e1b021], λ1ab0c40a9aad ];
  }
  return λa167a7eef820;
}
