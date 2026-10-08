export function headerEntries(λf571c9501a3d) {
  return λf571c9501a3d ? λf571c9501a3d instanceof Headers ? [ ...λf571c9501a3d.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λf571c9501a3d[Symbol.iterator] ? [ ...λf571c9501a3d ].flatMap(([λf571c9501a3d, λe4f5bfcf30e8]) => Array.isArray(λe4f5bfcf30e8) ? λe4f5bfcf30e8.map(λe4f5bfcf30e8 => [ String(λf571c9501a3d), String(λe4f5bfcf30e8) ]) : null == λe4f5bfcf30e8 ? [] : [ [ String(λf571c9501a3d), String(λe4f5bfcf30e8) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λf571c9501a3d ? Object.entries(λf571c9501a3d).flatMap(([λf571c9501a3d, λe4f5bfcf30e8]) => Array.isArray(λe4f5bfcf30e8) ? λe4f5bfcf30e8.map(λe4f5bfcf30e8 => [ λf571c9501a3d, String(λe4f5bfcf30e8) ]) : null == λe4f5bfcf30e8 ? [] : [ [ λf571c9501a3d, String(λe4f5bfcf30e8) ] ]) : [] : [];
}

export function headerRecord(λf571c9501a3d) {
  const λe4f5bfcf30e8 = {};
  for (const [λa6e70a6fb292, λcffad6329b37] of headerEntries(λf571c9501a3d)) {
    const λf571c9501a3d = String(λa6e70a6fb292).toLowerCase();
    void 0 === λe4f5bfcf30e8[λf571c9501a3d] ? λe4f5bfcf30e8[λf571c9501a3d] = λcffad6329b37 : Array.isArray(λe4f5bfcf30e8[λf571c9501a3d]) ? λe4f5bfcf30e8[λf571c9501a3d].push(λcffad6329b37) : λe4f5bfcf30e8[λf571c9501a3d] = [ λe4f5bfcf30e8[λf571c9501a3d], λcffad6329b37 ];
  }
  return λe4f5bfcf30e8;
}
