export function headerEntries(λfe49b89e7155) {
  return λfe49b89e7155 ? λfe49b89e7155 instanceof Headers ? [ ...λfe49b89e7155.entries() ] : "function" == typeof λfe49b89e7155[Symbol.iterator] ? [ ...λfe49b89e7155 ].flatMap(([λfe49b89e7155, λ29656a074332]) => Array.isArray(λ29656a074332) ? λ29656a074332.map(λ29656a074332 => [ String(λfe49b89e7155), String(λ29656a074332) ]) : null == λ29656a074332 ? [] : [ [ String(λfe49b89e7155), String(λ29656a074332) ] ]) : "object" == typeof λfe49b89e7155 ? Object.entries(λfe49b89e7155).flatMap(([λfe49b89e7155, λ29656a074332]) => Array.isArray(λ29656a074332) ? λ29656a074332.map(λ29656a074332 => [ λfe49b89e7155, String(λ29656a074332) ]) : null == λ29656a074332 ? [] : [ [ λfe49b89e7155, String(λ29656a074332) ] ]) : [] : [];
}

export function headerRecord(λfe49b89e7155) {
  const λ29656a074332 = {};
  for (const [λ911b5ff9080e, λ360349f94e66] of headerEntries(λfe49b89e7155)) {
    const λfe49b89e7155 = String(λ911b5ff9080e).toLowerCase();
    void 0 === λ29656a074332[λfe49b89e7155] ? λ29656a074332[λfe49b89e7155] = λ360349f94e66 : Array.isArray(λ29656a074332[λfe49b89e7155]) ? λ29656a074332[λfe49b89e7155].push(λ360349f94e66) : λ29656a074332[λfe49b89e7155] = [ λ29656a074332[λfe49b89e7155], λ360349f94e66 ];
  }
  return λ29656a074332;
}
