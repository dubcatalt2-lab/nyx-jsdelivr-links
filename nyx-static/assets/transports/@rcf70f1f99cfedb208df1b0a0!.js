export function headerEntries(λ164be8d5cd9b) {
  return λ164be8d5cd9b ? λ164be8d5cd9b instanceof Headers ? [ ...λ164be8d5cd9b.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ164be8d5cd9b[Symbol.iterator] ? [ ...λ164be8d5cd9b ].flatMap(([λ164be8d5cd9b, λda206cae0247]) => Array.isArray(λda206cae0247) ? λda206cae0247.map(λda206cae0247 => [ String(λ164be8d5cd9b), String(λda206cae0247) ]) : null == λda206cae0247 ? [] : [ [ String(λ164be8d5cd9b), String(λda206cae0247) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ164be8d5cd9b ? Object.entries(λ164be8d5cd9b).flatMap(([λ164be8d5cd9b, λda206cae0247]) => Array.isArray(λda206cae0247) ? λda206cae0247.map(λda206cae0247 => [ λ164be8d5cd9b, String(λda206cae0247) ]) : null == λda206cae0247 ? [] : [ [ λ164be8d5cd9b, String(λda206cae0247) ] ]) : [] : [];
}

export function headerRecord(λ164be8d5cd9b) {
  const λda206cae0247 = {};
  for (const [λf8c4e531c60b, λ0bfa1ef8eeeb] of headerEntries(λ164be8d5cd9b)) {
    const λ164be8d5cd9b = String(λf8c4e531c60b).toLowerCase();
    void 0 === λda206cae0247[λ164be8d5cd9b] ? λda206cae0247[λ164be8d5cd9b] = λ0bfa1ef8eeeb : Array.isArray(λda206cae0247[λ164be8d5cd9b]) ? λda206cae0247[λ164be8d5cd9b].push(λ0bfa1ef8eeeb) : λda206cae0247[λ164be8d5cd9b] = [ λda206cae0247[λ164be8d5cd9b], λ0bfa1ef8eeeb ];
  }
  return λda206cae0247;
}
