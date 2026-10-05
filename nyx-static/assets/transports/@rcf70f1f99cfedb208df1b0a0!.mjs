export function headerEntries(λa4201db35607) {
  return λa4201db35607 ? λa4201db35607 instanceof Headers ? [ ...λa4201db35607.entries() ] : "function" == typeof λa4201db35607[Symbol.iterator] ? [ ...λa4201db35607 ].flatMap(([λa4201db35607, λbf0afd378f56]) => Array.isArray(λbf0afd378f56) ? λbf0afd378f56.map(λbf0afd378f56 => [ String(λa4201db35607), String(λbf0afd378f56) ]) : null == λbf0afd378f56 ? [] : [ [ String(λa4201db35607), String(λbf0afd378f56) ] ]) : "object" == typeof λa4201db35607 ? Object.entries(λa4201db35607).flatMap(([λa4201db35607, λbf0afd378f56]) => Array.isArray(λbf0afd378f56) ? λbf0afd378f56.map(λbf0afd378f56 => [ λa4201db35607, String(λbf0afd378f56) ]) : null == λbf0afd378f56 ? [] : [ [ λa4201db35607, String(λbf0afd378f56) ] ]) : [] : [];
}

export function headerRecord(λa4201db35607) {
  const λbf0afd378f56 = {};
  for (const [λ83d683e48bcf, λf152e39c1cd0] of headerEntries(λa4201db35607)) {
    const λa4201db35607 = String(λ83d683e48bcf).toLowerCase();
    void 0 === λbf0afd378f56[λa4201db35607] ? λbf0afd378f56[λa4201db35607] = λf152e39c1cd0 : Array.isArray(λbf0afd378f56[λa4201db35607]) ? λbf0afd378f56[λa4201db35607].push(λf152e39c1cd0) : λbf0afd378f56[λa4201db35607] = [ λbf0afd378f56[λa4201db35607], λf152e39c1cd0 ];
  }
  return λbf0afd378f56;
}
