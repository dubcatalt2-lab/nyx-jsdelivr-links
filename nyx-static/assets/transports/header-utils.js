export function headerEntries(λ5332acbecff7) {
  return λ5332acbecff7 ? λ5332acbecff7 instanceof Headers ? [ ...λ5332acbecff7.entries() ] : "function" == typeof λ5332acbecff7[Symbol.iterator] ? [ ...λ5332acbecff7 ].flatMap(([λ5332acbecff7, λeedffbdaa877]) => Array.isArray(λeedffbdaa877) ? λeedffbdaa877.map(λeedffbdaa877 => [ String(λ5332acbecff7), String(λeedffbdaa877) ]) : null == λeedffbdaa877 ? [] : [ [ String(λ5332acbecff7), String(λeedffbdaa877) ] ]) : "object" == typeof λ5332acbecff7 ? Object.entries(λ5332acbecff7).flatMap(([λ5332acbecff7, λeedffbdaa877]) => Array.isArray(λeedffbdaa877) ? λeedffbdaa877.map(λeedffbdaa877 => [ λ5332acbecff7, String(λeedffbdaa877) ]) : null == λeedffbdaa877 ? [] : [ [ λ5332acbecff7, String(λeedffbdaa877) ] ]) : [] : [];
}

export function headerRecord(λ5332acbecff7) {
  const λeedffbdaa877 = {};
  for (const [λdba3b2a33fbb, λ9fb327e6764c] of headerEntries(λ5332acbecff7)) {
    const λ5332acbecff7 = String(λdba3b2a33fbb).toLowerCase();
    void 0 === λeedffbdaa877[λ5332acbecff7] ? λeedffbdaa877[λ5332acbecff7] = λ9fb327e6764c : Array.isArray(λeedffbdaa877[λ5332acbecff7]) ? λeedffbdaa877[λ5332acbecff7].push(λ9fb327e6764c) : λeedffbdaa877[λ5332acbecff7] = [ λeedffbdaa877[λ5332acbecff7], λ9fb327e6764c ];
  }
  return λeedffbdaa877;
}
