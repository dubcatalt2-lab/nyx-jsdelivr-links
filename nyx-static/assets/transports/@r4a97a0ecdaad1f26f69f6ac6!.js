export function headerEntries(λ71af048aad0f) {
  return λ71af048aad0f ? λ71af048aad0f instanceof Headers ? [ ...λ71af048aad0f.entries() ] : "function" == typeof λ71af048aad0f[Symbol.iterator] ? [ ...λ71af048aad0f ].flatMap(([λ71af048aad0f, λ42a72adc8b56]) => Array.isArray(λ42a72adc8b56) ? λ42a72adc8b56.map(λ42a72adc8b56 => [ String(λ71af048aad0f), String(λ42a72adc8b56) ]) : null == λ42a72adc8b56 ? [] : [ [ String(λ71af048aad0f), String(λ42a72adc8b56) ] ]) : "object" == typeof λ71af048aad0f ? Object.entries(λ71af048aad0f).flatMap(([λ71af048aad0f, λ42a72adc8b56]) => Array.isArray(λ42a72adc8b56) ? λ42a72adc8b56.map(λ42a72adc8b56 => [ λ71af048aad0f, String(λ42a72adc8b56) ]) : null == λ42a72adc8b56 ? [] : [ [ λ71af048aad0f, String(λ42a72adc8b56) ] ]) : [] : [];
}

export function headerRecord(λ71af048aad0f) {
  const λ42a72adc8b56 = {};
  for (const [λ899dd5a3e4b6, λ428e79841d52] of headerEntries(λ71af048aad0f)) {
    const λ71af048aad0f = String(λ899dd5a3e4b6).toLowerCase();
    void 0 === λ42a72adc8b56[λ71af048aad0f] ? λ42a72adc8b56[λ71af048aad0f] = λ428e79841d52 : Array.isArray(λ42a72adc8b56[λ71af048aad0f]) ? λ42a72adc8b56[λ71af048aad0f].push(λ428e79841d52) : λ42a72adc8b56[λ71af048aad0f] = [ λ42a72adc8b56[λ71af048aad0f], λ428e79841d52 ];
  }
  return λ42a72adc8b56;
}
