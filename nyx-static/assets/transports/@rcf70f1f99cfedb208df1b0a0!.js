export function headerEntries(λ5c580cc2926a) {
  return λ5c580cc2926a ? λ5c580cc2926a instanceof Headers ? [ ...λ5c580cc2926a.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ5c580cc2926a[Symbol.iterator] ? [ ...λ5c580cc2926a ].flatMap(([λ5c580cc2926a, λf4306ca1a31b]) => Array.isArray(λf4306ca1a31b) ? λf4306ca1a31b.map(λf4306ca1a31b => [ String(λ5c580cc2926a), String(λf4306ca1a31b) ]) : null == λf4306ca1a31b ? [] : [ [ String(λ5c580cc2926a), String(λf4306ca1a31b) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ5c580cc2926a ? Object.entries(λ5c580cc2926a).flatMap(([λ5c580cc2926a, λf4306ca1a31b]) => Array.isArray(λf4306ca1a31b) ? λf4306ca1a31b.map(λf4306ca1a31b => [ λ5c580cc2926a, String(λf4306ca1a31b) ]) : null == λf4306ca1a31b ? [] : [ [ λ5c580cc2926a, String(λf4306ca1a31b) ] ]) : [] : [];
}

export function headerRecord(λ5c580cc2926a) {
  const λf4306ca1a31b = {};
  for (const [λb4e70d992037, λfead53dd750e] of headerEntries(λ5c580cc2926a)) {
    const λ5c580cc2926a = String(λb4e70d992037).toLowerCase();
    void 0 === λf4306ca1a31b[λ5c580cc2926a] ? λf4306ca1a31b[λ5c580cc2926a] = λfead53dd750e : Array.isArray(λf4306ca1a31b[λ5c580cc2926a]) ? λf4306ca1a31b[λ5c580cc2926a].push(λfead53dd750e) : λf4306ca1a31b[λ5c580cc2926a] = [ λf4306ca1a31b[λ5c580cc2926a], λfead53dd750e ];
  }
  return λf4306ca1a31b;
}
