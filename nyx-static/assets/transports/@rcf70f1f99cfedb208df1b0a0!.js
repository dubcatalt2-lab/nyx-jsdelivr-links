export function headerEntries(λc40661de3c32) {
  return λc40661de3c32 ? λc40661de3c32 instanceof Headers ? [ ...λc40661de3c32.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λc40661de3c32[Symbol.iterator] ? [ ...λc40661de3c32 ].flatMap(([λc40661de3c32, λ7954fb879e69]) => Array.isArray(λ7954fb879e69) ? λ7954fb879e69.map(λ7954fb879e69 => [ String(λc40661de3c32), String(λ7954fb879e69) ]) : null == λ7954fb879e69 ? [] : [ [ String(λc40661de3c32), String(λ7954fb879e69) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λc40661de3c32 ? Object.entries(λc40661de3c32).flatMap(([λc40661de3c32, λ7954fb879e69]) => Array.isArray(λ7954fb879e69) ? λ7954fb879e69.map(λ7954fb879e69 => [ λc40661de3c32, String(λ7954fb879e69) ]) : null == λ7954fb879e69 ? [] : [ [ λc40661de3c32, String(λ7954fb879e69) ] ]) : [] : [];
}

export function headerRecord(λc40661de3c32) {
  const λ7954fb879e69 = {};
  for (const [λ5ac58dc90f69, λe7939d39efaa] of headerEntries(λc40661de3c32)) {
    const λc40661de3c32 = String(λ5ac58dc90f69).toLowerCase();
    void 0 === λ7954fb879e69[λc40661de3c32] ? λ7954fb879e69[λc40661de3c32] = λe7939d39efaa : Array.isArray(λ7954fb879e69[λc40661de3c32]) ? λ7954fb879e69[λc40661de3c32].push(λe7939d39efaa) : λ7954fb879e69[λc40661de3c32] = [ λ7954fb879e69[λc40661de3c32], λe7939d39efaa ];
  }
  return λ7954fb879e69;
}
