export function headerEntries(λ2799822e30ae) {
  return λ2799822e30ae ? λ2799822e30ae instanceof Headers ? [ ...λ2799822e30ae.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ2799822e30ae[Symbol.iterator] ? [ ...λ2799822e30ae ].flatMap(([λ2799822e30ae, λ9341d499f7aa]) => Array.isArray(λ9341d499f7aa) ? λ9341d499f7aa.map(λ9341d499f7aa => [ String(λ2799822e30ae), String(λ9341d499f7aa) ]) : null == λ9341d499f7aa ? [] : [ [ String(λ2799822e30ae), String(λ9341d499f7aa) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ2799822e30ae ? Object.entries(λ2799822e30ae).flatMap(([λ2799822e30ae, λ9341d499f7aa]) => Array.isArray(λ9341d499f7aa) ? λ9341d499f7aa.map(λ9341d499f7aa => [ λ2799822e30ae, String(λ9341d499f7aa) ]) : null == λ9341d499f7aa ? [] : [ [ λ2799822e30ae, String(λ9341d499f7aa) ] ]) : [] : [];
}

export function headerRecord(λ2799822e30ae) {
  const λ9341d499f7aa = {};
  for (const [λce4395090da4, λ37ef20156af4] of headerEntries(λ2799822e30ae)) {
    const λ2799822e30ae = String(λce4395090da4).toLowerCase();
    void 0 === λ9341d499f7aa[λ2799822e30ae] ? λ9341d499f7aa[λ2799822e30ae] = λ37ef20156af4 : Array.isArray(λ9341d499f7aa[λ2799822e30ae]) ? λ9341d499f7aa[λ2799822e30ae].push(λ37ef20156af4) : λ9341d499f7aa[λ2799822e30ae] = [ λ9341d499f7aa[λ2799822e30ae], λ37ef20156af4 ];
  }
  return λ9341d499f7aa;
}
