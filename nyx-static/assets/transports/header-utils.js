export function headerEntries(λ06170f5bdf43) {
  return λ06170f5bdf43 ? λ06170f5bdf43 instanceof Headers ? [ ...λ06170f5bdf43.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ06170f5bdf43[Symbol.iterator] ? [ ...λ06170f5bdf43 ].flatMap(([λ06170f5bdf43, λf7b1329af1cb]) => Array.isArray(λf7b1329af1cb) ? λf7b1329af1cb.map(λf7b1329af1cb => [ String(λ06170f5bdf43), String(λf7b1329af1cb) ]) : null == λf7b1329af1cb ? [] : [ [ String(λ06170f5bdf43), String(λf7b1329af1cb) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ06170f5bdf43 ? Object.entries(λ06170f5bdf43).flatMap(([λ06170f5bdf43, λf7b1329af1cb]) => Array.isArray(λf7b1329af1cb) ? λf7b1329af1cb.map(λf7b1329af1cb => [ λ06170f5bdf43, String(λf7b1329af1cb) ]) : null == λf7b1329af1cb ? [] : [ [ λ06170f5bdf43, String(λf7b1329af1cb) ] ]) : [] : [];
}

export function headerRecord(λ06170f5bdf43) {
  const λf7b1329af1cb = {};
  for (const [λe6da522c9aeb, λ4e0cf5195bb7] of headerEntries(λ06170f5bdf43)) {
    const λ06170f5bdf43 = String(λe6da522c9aeb).toLowerCase();
    void 0 === λf7b1329af1cb[λ06170f5bdf43] ? λf7b1329af1cb[λ06170f5bdf43] = λ4e0cf5195bb7 : Array.isArray(λf7b1329af1cb[λ06170f5bdf43]) ? λf7b1329af1cb[λ06170f5bdf43].push(λ4e0cf5195bb7) : λf7b1329af1cb[λ06170f5bdf43] = [ λf7b1329af1cb[λ06170f5bdf43], λ4e0cf5195bb7 ];
  }
  return λf7b1329af1cb;
}
