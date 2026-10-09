export function headerEntries(λ1e3cb0c40a20) {
  return λ1e3cb0c40a20 ? λ1e3cb0c40a20 instanceof Headers ? [ ...λ1e3cb0c40a20.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ1e3cb0c40a20[Symbol.iterator] ? [ ...λ1e3cb0c40a20 ].flatMap(([λ1e3cb0c40a20, λ414edc8327ed]) => Array.isArray(λ414edc8327ed) ? λ414edc8327ed.map(λ414edc8327ed => [ String(λ1e3cb0c40a20), String(λ414edc8327ed) ]) : null == λ414edc8327ed ? [] : [ [ String(λ1e3cb0c40a20), String(λ414edc8327ed) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ1e3cb0c40a20 ? Object.entries(λ1e3cb0c40a20).flatMap(([λ1e3cb0c40a20, λ414edc8327ed]) => Array.isArray(λ414edc8327ed) ? λ414edc8327ed.map(λ414edc8327ed => [ λ1e3cb0c40a20, String(λ414edc8327ed) ]) : null == λ414edc8327ed ? [] : [ [ λ1e3cb0c40a20, String(λ414edc8327ed) ] ]) : [] : [];
}

export function headerRecord(λ1e3cb0c40a20) {
  const λ414edc8327ed = {};
  for (const [λa7e4fd636b65, λb0a1e95ebb7c] of headerEntries(λ1e3cb0c40a20)) {
    const λ1e3cb0c40a20 = String(λa7e4fd636b65).toLowerCase();
    void 0 === λ414edc8327ed[λ1e3cb0c40a20] ? λ414edc8327ed[λ1e3cb0c40a20] = λb0a1e95ebb7c : Array.isArray(λ414edc8327ed[λ1e3cb0c40a20]) ? λ414edc8327ed[λ1e3cb0c40a20].push(λb0a1e95ebb7c) : λ414edc8327ed[λ1e3cb0c40a20] = [ λ414edc8327ed[λ1e3cb0c40a20], λb0a1e95ebb7c ];
  }
  return λ414edc8327ed;
}
