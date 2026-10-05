export function headerEntries(λ30a763b7b98b) {
  return λ30a763b7b98b ? λ30a763b7b98b instanceof Headers ? [ ...λ30a763b7b98b.entries() ] : "function" == typeof λ30a763b7b98b[Symbol.iterator] ? [ ...λ30a763b7b98b ].flatMap(([λ30a763b7b98b, λ110dce4578d9]) => Array.isArray(λ110dce4578d9) ? λ110dce4578d9.map(λ110dce4578d9 => [ String(λ30a763b7b98b), String(λ110dce4578d9) ]) : null == λ110dce4578d9 ? [] : [ [ String(λ30a763b7b98b), String(λ110dce4578d9) ] ]) : "object" == typeof λ30a763b7b98b ? Object.entries(λ30a763b7b98b).flatMap(([λ30a763b7b98b, λ110dce4578d9]) => Array.isArray(λ110dce4578d9) ? λ110dce4578d9.map(λ110dce4578d9 => [ λ30a763b7b98b, String(λ110dce4578d9) ]) : null == λ110dce4578d9 ? [] : [ [ λ30a763b7b98b, String(λ110dce4578d9) ] ]) : [] : [];
}

export function headerRecord(λ30a763b7b98b) {
  const λ110dce4578d9 = {};
  for (const [λ8ad91161c3be, λ0054433c2b35] of headerEntries(λ30a763b7b98b)) {
    const λ30a763b7b98b = String(λ8ad91161c3be).toLowerCase();
    void 0 === λ110dce4578d9[λ30a763b7b98b] ? λ110dce4578d9[λ30a763b7b98b] = λ0054433c2b35 : Array.isArray(λ110dce4578d9[λ30a763b7b98b]) ? λ110dce4578d9[λ30a763b7b98b].push(λ0054433c2b35) : λ110dce4578d9[λ30a763b7b98b] = [ λ110dce4578d9[λ30a763b7b98b], λ0054433c2b35 ];
  }
  return λ110dce4578d9;
}
