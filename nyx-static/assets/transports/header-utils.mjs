export function headerEntries(λf0de57750701) {
  return λf0de57750701 ? λf0de57750701 instanceof Headers ? [ ...λf0de57750701.entries() ] : "function" == typeof λf0de57750701[Symbol.iterator] ? [ ...λf0de57750701 ].flatMap(([λf0de57750701, λ4553423175b9]) => Array.isArray(λ4553423175b9) ? λ4553423175b9.map(λ4553423175b9 => [ String(λf0de57750701), String(λ4553423175b9) ]) : null == λ4553423175b9 ? [] : [ [ String(λf0de57750701), String(λ4553423175b9) ] ]) : "object" == typeof λf0de57750701 ? Object.entries(λf0de57750701).flatMap(([λf0de57750701, λ4553423175b9]) => Array.isArray(λ4553423175b9) ? λ4553423175b9.map(λ4553423175b9 => [ λf0de57750701, String(λ4553423175b9) ]) : null == λ4553423175b9 ? [] : [ [ λf0de57750701, String(λ4553423175b9) ] ]) : [] : [];
}

export function headerRecord(λf0de57750701) {
  const λ4553423175b9 = {};
  for (const [λ9ed9bc629f79, λcdcbb9014b6b] of headerEntries(λf0de57750701)) {
    const λf0de57750701 = String(λ9ed9bc629f79).toLowerCase();
    void 0 === λ4553423175b9[λf0de57750701] ? λ4553423175b9[λf0de57750701] = λcdcbb9014b6b : Array.isArray(λ4553423175b9[λf0de57750701]) ? λ4553423175b9[λf0de57750701].push(λcdcbb9014b6b) : λ4553423175b9[λf0de57750701] = [ λ4553423175b9[λf0de57750701], λcdcbb9014b6b ];
  }
  return λ4553423175b9;
}
