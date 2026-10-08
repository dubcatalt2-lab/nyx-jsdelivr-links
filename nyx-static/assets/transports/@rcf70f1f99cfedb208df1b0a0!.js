export function headerEntries(λ606ad528a2c2) {
  return λ606ad528a2c2 ? λ606ad528a2c2 instanceof Headers ? [ ...λ606ad528a2c2.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ606ad528a2c2[Symbol.iterator] ? [ ...λ606ad528a2c2 ].flatMap(([λ606ad528a2c2, λ037063f024a5]) => Array.isArray(λ037063f024a5) ? λ037063f024a5.map(λ037063f024a5 => [ String(λ606ad528a2c2), String(λ037063f024a5) ]) : null == λ037063f024a5 ? [] : [ [ String(λ606ad528a2c2), String(λ037063f024a5) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ606ad528a2c2 ? Object.entries(λ606ad528a2c2).flatMap(([λ606ad528a2c2, λ037063f024a5]) => Array.isArray(λ037063f024a5) ? λ037063f024a5.map(λ037063f024a5 => [ λ606ad528a2c2, String(λ037063f024a5) ]) : null == λ037063f024a5 ? [] : [ [ λ606ad528a2c2, String(λ037063f024a5) ] ]) : [] : [];
}

export function headerRecord(λ606ad528a2c2) {
  const λ037063f024a5 = {};
  for (const [λ8002ab0d1545, λc56ff62fef7b] of headerEntries(λ606ad528a2c2)) {
    const λ606ad528a2c2 = String(λ8002ab0d1545).toLowerCase();
    void 0 === λ037063f024a5[λ606ad528a2c2] ? λ037063f024a5[λ606ad528a2c2] = λc56ff62fef7b : Array.isArray(λ037063f024a5[λ606ad528a2c2]) ? λ037063f024a5[λ606ad528a2c2].push(λc56ff62fef7b) : λ037063f024a5[λ606ad528a2c2] = [ λ037063f024a5[λ606ad528a2c2], λc56ff62fef7b ];
  }
  return λ037063f024a5;
}
