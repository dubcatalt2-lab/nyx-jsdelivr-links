export function headerEntries(λ90a2d343fb37) {
  return λ90a2d343fb37 ? λ90a2d343fb37 instanceof Headers ? [ ...λ90a2d343fb37.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ90a2d343fb37[Symbol.iterator] ? [ ...λ90a2d343fb37 ].flatMap(([λ90a2d343fb37, λfa19bd4f7c4b]) => Array.isArray(λfa19bd4f7c4b) ? λfa19bd4f7c4b.map(λfa19bd4f7c4b => [ String(λ90a2d343fb37), String(λfa19bd4f7c4b) ]) : null == λfa19bd4f7c4b ? [] : [ [ String(λ90a2d343fb37), String(λfa19bd4f7c4b) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ90a2d343fb37 ? Object.entries(λ90a2d343fb37).flatMap(([λ90a2d343fb37, λfa19bd4f7c4b]) => Array.isArray(λfa19bd4f7c4b) ? λfa19bd4f7c4b.map(λfa19bd4f7c4b => [ λ90a2d343fb37, String(λfa19bd4f7c4b) ]) : null == λfa19bd4f7c4b ? [] : [ [ λ90a2d343fb37, String(λfa19bd4f7c4b) ] ]) : [] : [];
}

export function headerRecord(λ90a2d343fb37) {
  const λfa19bd4f7c4b = {};
  for (const [λ19ab52b71880, λ7efd827ab0b8] of headerEntries(λ90a2d343fb37)) {
    const λ90a2d343fb37 = String(λ19ab52b71880).toLowerCase();
    void 0 === λfa19bd4f7c4b[λ90a2d343fb37] ? λfa19bd4f7c4b[λ90a2d343fb37] = λ7efd827ab0b8 : Array.isArray(λfa19bd4f7c4b[λ90a2d343fb37]) ? λfa19bd4f7c4b[λ90a2d343fb37].push(λ7efd827ab0b8) : λfa19bd4f7c4b[λ90a2d343fb37] = [ λfa19bd4f7c4b[λ90a2d343fb37], λ7efd827ab0b8 ];
  }
  return λfa19bd4f7c4b;
}
