export function headerEntries(λ384a93abced5) {
  return λ384a93abced5 ? λ384a93abced5 instanceof Headers ? [ ...λ384a93abced5.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ384a93abced5[Symbol.iterator] ? [ ...λ384a93abced5 ].flatMap(([λ384a93abced5, λfb76938263c2]) => Array.isArray(λfb76938263c2) ? λfb76938263c2.map(λfb76938263c2 => [ String(λ384a93abced5), String(λfb76938263c2) ]) : null == λfb76938263c2 ? [] : [ [ String(λ384a93abced5), String(λfb76938263c2) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ384a93abced5 ? Object.entries(λ384a93abced5).flatMap(([λ384a93abced5, λfb76938263c2]) => Array.isArray(λfb76938263c2) ? λfb76938263c2.map(λfb76938263c2 => [ λ384a93abced5, String(λfb76938263c2) ]) : null == λfb76938263c2 ? [] : [ [ λ384a93abced5, String(λfb76938263c2) ] ]) : [] : [];
}

export function headerRecord(λ384a93abced5) {
  const λfb76938263c2 = {};
  for (const [λed9e88fb93f3, λ066df3d6389d] of headerEntries(λ384a93abced5)) {
    const λ384a93abced5 = String(λed9e88fb93f3).toLowerCase();
    void 0 === λfb76938263c2[λ384a93abced5] ? λfb76938263c2[λ384a93abced5] = λ066df3d6389d : Array.isArray(λfb76938263c2[λ384a93abced5]) ? λfb76938263c2[λ384a93abced5].push(λ066df3d6389d) : λfb76938263c2[λ384a93abced5] = [ λfb76938263c2[λ384a93abced5], λ066df3d6389d ];
  }
  return λfb76938263c2;
}
