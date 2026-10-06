export function headerEntries(λ41803b58748f) {
  return λ41803b58748f ? λ41803b58748f instanceof Headers ? [ ...λ41803b58748f.entries() ] : "function" == typeof λ41803b58748f[Symbol.iterator] ? [ ...λ41803b58748f ].flatMap(([λ41803b58748f, λ3d1f639712a1]) => Array.isArray(λ3d1f639712a1) ? λ3d1f639712a1.map(λ3d1f639712a1 => [ String(λ41803b58748f), String(λ3d1f639712a1) ]) : null == λ3d1f639712a1 ? [] : [ [ String(λ41803b58748f), String(λ3d1f639712a1) ] ]) : "object" == typeof λ41803b58748f ? Object.entries(λ41803b58748f).flatMap(([λ41803b58748f, λ3d1f639712a1]) => Array.isArray(λ3d1f639712a1) ? λ3d1f639712a1.map(λ3d1f639712a1 => [ λ41803b58748f, String(λ3d1f639712a1) ]) : null == λ3d1f639712a1 ? [] : [ [ λ41803b58748f, String(λ3d1f639712a1) ] ]) : [] : [];
}

export function headerRecord(λ41803b58748f) {
  const λ3d1f639712a1 = {};
  for (const [λcdea82ea671c, λ3c4ac43f3d33] of headerEntries(λ41803b58748f)) {
    const λ41803b58748f = String(λcdea82ea671c).toLowerCase();
    void 0 === λ3d1f639712a1[λ41803b58748f] ? λ3d1f639712a1[λ41803b58748f] = λ3c4ac43f3d33 : Array.isArray(λ3d1f639712a1[λ41803b58748f]) ? λ3d1f639712a1[λ41803b58748f].push(λ3c4ac43f3d33) : λ3d1f639712a1[λ41803b58748f] = [ λ3d1f639712a1[λ41803b58748f], λ3c4ac43f3d33 ];
  }
  return λ3d1f639712a1;
}
