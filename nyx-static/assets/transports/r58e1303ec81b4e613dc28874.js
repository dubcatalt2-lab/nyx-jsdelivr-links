export function headerEntries(λ668da540e421) {
  return λ668da540e421 ? λ668da540e421 instanceof Headers ? [ ...λ668da540e421.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ668da540e421[Symbol.iterator] ? [ ...λ668da540e421 ].flatMap(([λ668da540e421, λd59b19e96d1e]) => Array.isArray(λd59b19e96d1e) ? λd59b19e96d1e.map(λd59b19e96d1e => [ String(λ668da540e421), String(λd59b19e96d1e) ]) : null == λd59b19e96d1e ? [] : [ [ String(λ668da540e421), String(λd59b19e96d1e) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ668da540e421 ? Object.entries(λ668da540e421).flatMap(([λ668da540e421, λd59b19e96d1e]) => Array.isArray(λd59b19e96d1e) ? λd59b19e96d1e.map(λd59b19e96d1e => [ λ668da540e421, String(λd59b19e96d1e) ]) : null == λd59b19e96d1e ? [] : [ [ λ668da540e421, String(λd59b19e96d1e) ] ]) : [] : [];
}

export function headerRecord(λ668da540e421) {
  const λd59b19e96d1e = {};
  for (const [λcc8cde65637a, λ841dd1b601bd] of headerEntries(λ668da540e421)) {
    const λ668da540e421 = String(λcc8cde65637a).toLowerCase();
    void 0 === λd59b19e96d1e[λ668da540e421] ? λd59b19e96d1e[λ668da540e421] = λ841dd1b601bd : Array.isArray(λd59b19e96d1e[λ668da540e421]) ? λd59b19e96d1e[λ668da540e421].push(λ841dd1b601bd) : λd59b19e96d1e[λ668da540e421] = [ λd59b19e96d1e[λ668da540e421], λ841dd1b601bd ];
  }
  return λd59b19e96d1e;
}
