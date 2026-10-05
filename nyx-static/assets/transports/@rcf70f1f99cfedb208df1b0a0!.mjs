export function headerEntries(λa1fee324c5c8) {
  return λa1fee324c5c8 ? λa1fee324c5c8 instanceof Headers ? [ ...λa1fee324c5c8.entries() ] : "function" == typeof λa1fee324c5c8[Symbol.iterator] ? [ ...λa1fee324c5c8 ].flatMap(([λa1fee324c5c8, λ37c4a5bc1099]) => Array.isArray(λ37c4a5bc1099) ? λ37c4a5bc1099.map(λ37c4a5bc1099 => [ String(λa1fee324c5c8), String(λ37c4a5bc1099) ]) : null == λ37c4a5bc1099 ? [] : [ [ String(λa1fee324c5c8), String(λ37c4a5bc1099) ] ]) : "object" == typeof λa1fee324c5c8 ? Object.entries(λa1fee324c5c8).flatMap(([λa1fee324c5c8, λ37c4a5bc1099]) => Array.isArray(λ37c4a5bc1099) ? λ37c4a5bc1099.map(λ37c4a5bc1099 => [ λa1fee324c5c8, String(λ37c4a5bc1099) ]) : null == λ37c4a5bc1099 ? [] : [ [ λa1fee324c5c8, String(λ37c4a5bc1099) ] ]) : [] : [];
}

export function headerRecord(λa1fee324c5c8) {
  const λ37c4a5bc1099 = {};
  for (const [λed0683641a3e, λ394eee2cf89b] of headerEntries(λa1fee324c5c8)) {
    const λa1fee324c5c8 = String(λed0683641a3e).toLowerCase();
    void 0 === λ37c4a5bc1099[λa1fee324c5c8] ? λ37c4a5bc1099[λa1fee324c5c8] = λ394eee2cf89b : Array.isArray(λ37c4a5bc1099[λa1fee324c5c8]) ? λ37c4a5bc1099[λa1fee324c5c8].push(λ394eee2cf89b) : λ37c4a5bc1099[λa1fee324c5c8] = [ λ37c4a5bc1099[λa1fee324c5c8], λ394eee2cf89b ];
  }
  return λ37c4a5bc1099;
}
