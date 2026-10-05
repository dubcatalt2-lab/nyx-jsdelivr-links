export function headerEntries(λ3c686fc80738) {
  return λ3c686fc80738 ? λ3c686fc80738 instanceof Headers ? [ ...λ3c686fc80738.entries() ] : "function" == typeof λ3c686fc80738[Symbol.iterator] ? [ ...λ3c686fc80738 ].flatMap(([λ3c686fc80738, λa5fb8fece9b9]) => Array.isArray(λa5fb8fece9b9) ? λa5fb8fece9b9.map(λa5fb8fece9b9 => [ String(λ3c686fc80738), String(λa5fb8fece9b9) ]) : null == λa5fb8fece9b9 ? [] : [ [ String(λ3c686fc80738), String(λa5fb8fece9b9) ] ]) : "object" == typeof λ3c686fc80738 ? Object.entries(λ3c686fc80738).flatMap(([λ3c686fc80738, λa5fb8fece9b9]) => Array.isArray(λa5fb8fece9b9) ? λa5fb8fece9b9.map(λa5fb8fece9b9 => [ λ3c686fc80738, String(λa5fb8fece9b9) ]) : null == λa5fb8fece9b9 ? [] : [ [ λ3c686fc80738, String(λa5fb8fece9b9) ] ]) : [] : [];
}

export function headerRecord(λ3c686fc80738) {
  const λa5fb8fece9b9 = {};
  for (const [λ5488c14f99e9, λ6ac3cc017399] of headerEntries(λ3c686fc80738)) {
    const λ3c686fc80738 = String(λ5488c14f99e9).toLowerCase();
    void 0 === λa5fb8fece9b9[λ3c686fc80738] ? λa5fb8fece9b9[λ3c686fc80738] = λ6ac3cc017399 : Array.isArray(λa5fb8fece9b9[λ3c686fc80738]) ? λa5fb8fece9b9[λ3c686fc80738].push(λ6ac3cc017399) : λa5fb8fece9b9[λ3c686fc80738] = [ λa5fb8fece9b9[λ3c686fc80738], λ6ac3cc017399 ];
  }
  return λa5fb8fece9b9;
}
