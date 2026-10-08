export function headerEntries(λ18ff9389e9f6) {
  return λ18ff9389e9f6 ? λ18ff9389e9f6 instanceof Headers ? [ ...λ18ff9389e9f6.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ18ff9389e9f6[Symbol.iterator] ? [ ...λ18ff9389e9f6 ].flatMap(([λ18ff9389e9f6, λ41c21e11bc01]) => Array.isArray(λ41c21e11bc01) ? λ41c21e11bc01.map(λ41c21e11bc01 => [ String(λ18ff9389e9f6), String(λ41c21e11bc01) ]) : null == λ41c21e11bc01 ? [] : [ [ String(λ18ff9389e9f6), String(λ41c21e11bc01) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ18ff9389e9f6 ? Object.entries(λ18ff9389e9f6).flatMap(([λ18ff9389e9f6, λ41c21e11bc01]) => Array.isArray(λ41c21e11bc01) ? λ41c21e11bc01.map(λ41c21e11bc01 => [ λ18ff9389e9f6, String(λ41c21e11bc01) ]) : null == λ41c21e11bc01 ? [] : [ [ λ18ff9389e9f6, String(λ41c21e11bc01) ] ]) : [] : [];
}

export function headerRecord(λ18ff9389e9f6) {
  const λ41c21e11bc01 = {};
  for (const [λ8c06d65a039a, λa36b57b815fb] of headerEntries(λ18ff9389e9f6)) {
    const λ18ff9389e9f6 = String(λ8c06d65a039a).toLowerCase();
    void 0 === λ41c21e11bc01[λ18ff9389e9f6] ? λ41c21e11bc01[λ18ff9389e9f6] = λa36b57b815fb : Array.isArray(λ41c21e11bc01[λ18ff9389e9f6]) ? λ41c21e11bc01[λ18ff9389e9f6].push(λa36b57b815fb) : λ41c21e11bc01[λ18ff9389e9f6] = [ λ41c21e11bc01[λ18ff9389e9f6], λa36b57b815fb ];
  }
  return λ41c21e11bc01;
}
