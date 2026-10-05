export function headerEntries(λe3937c47065f) {
  return λe3937c47065f ? λe3937c47065f instanceof Headers ? [ ...λe3937c47065f.entries() ] : "function" == typeof λe3937c47065f[Symbol.iterator] ? [ ...λe3937c47065f ].flatMap(([λe3937c47065f, λfa27528f4131]) => Array.isArray(λfa27528f4131) ? λfa27528f4131.map(λfa27528f4131 => [ String(λe3937c47065f), String(λfa27528f4131) ]) : null == λfa27528f4131 ? [] : [ [ String(λe3937c47065f), String(λfa27528f4131) ] ]) : "object" == typeof λe3937c47065f ? Object.entries(λe3937c47065f).flatMap(([λe3937c47065f, λfa27528f4131]) => Array.isArray(λfa27528f4131) ? λfa27528f4131.map(λfa27528f4131 => [ λe3937c47065f, String(λfa27528f4131) ]) : null == λfa27528f4131 ? [] : [ [ λe3937c47065f, String(λfa27528f4131) ] ]) : [] : [];
}

export function headerRecord(λe3937c47065f) {
  const λfa27528f4131 = {};
  for (const [λ90797e040b06, λ4f4ad7d4bb8a] of headerEntries(λe3937c47065f)) {
    const λe3937c47065f = String(λ90797e040b06).toLowerCase();
    void 0 === λfa27528f4131[λe3937c47065f] ? λfa27528f4131[λe3937c47065f] = λ4f4ad7d4bb8a : Array.isArray(λfa27528f4131[λe3937c47065f]) ? λfa27528f4131[λe3937c47065f].push(λ4f4ad7d4bb8a) : λfa27528f4131[λe3937c47065f] = [ λfa27528f4131[λe3937c47065f], λ4f4ad7d4bb8a ];
  }
  return λfa27528f4131;
}
