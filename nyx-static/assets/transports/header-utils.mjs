export function headerEntries(λ555a56ff54a4) {
  return λ555a56ff54a4 ? λ555a56ff54a4 instanceof Headers ? [ ...λ555a56ff54a4.entries() ] : "function" == typeof λ555a56ff54a4[Symbol.iterator] ? [ ...λ555a56ff54a4 ].flatMap(([λ555a56ff54a4, λ74954ad5b625]) => Array.isArray(λ74954ad5b625) ? λ74954ad5b625.map(λ74954ad5b625 => [ String(λ555a56ff54a4), String(λ74954ad5b625) ]) : null == λ74954ad5b625 ? [] : [ [ String(λ555a56ff54a4), String(λ74954ad5b625) ] ]) : "object" == typeof λ555a56ff54a4 ? Object.entries(λ555a56ff54a4).flatMap(([λ555a56ff54a4, λ74954ad5b625]) => Array.isArray(λ74954ad5b625) ? λ74954ad5b625.map(λ74954ad5b625 => [ λ555a56ff54a4, String(λ74954ad5b625) ]) : null == λ74954ad5b625 ? [] : [ [ λ555a56ff54a4, String(λ74954ad5b625) ] ]) : [] : [];
}

export function headerRecord(λ555a56ff54a4) {
  const λ74954ad5b625 = {};
  for (const [λee6d350c77ee, λb0c293de341b] of headerEntries(λ555a56ff54a4)) {
    const λ555a56ff54a4 = String(λee6d350c77ee).toLowerCase();
    void 0 === λ74954ad5b625[λ555a56ff54a4] ? λ74954ad5b625[λ555a56ff54a4] = λb0c293de341b : Array.isArray(λ74954ad5b625[λ555a56ff54a4]) ? λ74954ad5b625[λ555a56ff54a4].push(λb0c293de341b) : λ74954ad5b625[λ555a56ff54a4] = [ λ74954ad5b625[λ555a56ff54a4], λb0c293de341b ];
  }
  return λ74954ad5b625;
}
