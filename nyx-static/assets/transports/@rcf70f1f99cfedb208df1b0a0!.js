export function headerEntries(λ83d77bbab3f6) {
  return λ83d77bbab3f6 ? λ83d77bbab3f6 instanceof Headers ? [ ...λ83d77bbab3f6.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ83d77bbab3f6[Symbol.iterator] ? [ ...λ83d77bbab3f6 ].flatMap(([λ83d77bbab3f6, λ3f747ee8ca43]) => Array.isArray(λ3f747ee8ca43) ? λ3f747ee8ca43.map(λ3f747ee8ca43 => [ String(λ83d77bbab3f6), String(λ3f747ee8ca43) ]) : null == λ3f747ee8ca43 ? [] : [ [ String(λ83d77bbab3f6), String(λ3f747ee8ca43) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ83d77bbab3f6 ? Object.entries(λ83d77bbab3f6).flatMap(([λ83d77bbab3f6, λ3f747ee8ca43]) => Array.isArray(λ3f747ee8ca43) ? λ3f747ee8ca43.map(λ3f747ee8ca43 => [ λ83d77bbab3f6, String(λ3f747ee8ca43) ]) : null == λ3f747ee8ca43 ? [] : [ [ λ83d77bbab3f6, String(λ3f747ee8ca43) ] ]) : [] : [];
}

export function headerRecord(λ83d77bbab3f6) {
  const λ3f747ee8ca43 = {};
  for (const [λfd31bf6c8add, λe6e57404e983] of headerEntries(λ83d77bbab3f6)) {
    const λ83d77bbab3f6 = String(λfd31bf6c8add).toLowerCase();
    void 0 === λ3f747ee8ca43[λ83d77bbab3f6] ? λ3f747ee8ca43[λ83d77bbab3f6] = λe6e57404e983 : Array.isArray(λ3f747ee8ca43[λ83d77bbab3f6]) ? λ3f747ee8ca43[λ83d77bbab3f6].push(λe6e57404e983) : λ3f747ee8ca43[λ83d77bbab3f6] = [ λ3f747ee8ca43[λ83d77bbab3f6], λe6e57404e983 ];
  }
  return λ3f747ee8ca43;
}
