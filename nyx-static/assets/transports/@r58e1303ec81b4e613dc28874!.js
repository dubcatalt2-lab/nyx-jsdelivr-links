export function headerEntries(λ440e02d3637d) {
  return λ440e02d3637d ? λ440e02d3637d instanceof Headers ? [ ...λ440e02d3637d.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ440e02d3637d[Symbol.iterator] ? [ ...λ440e02d3637d ].flatMap(([λ440e02d3637d, λa06c393c5fc9]) => Array.isArray(λa06c393c5fc9) ? λa06c393c5fc9.map(λa06c393c5fc9 => [ String(λ440e02d3637d), String(λa06c393c5fc9) ]) : null == λa06c393c5fc9 ? [] : [ [ String(λ440e02d3637d), String(λa06c393c5fc9) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ440e02d3637d ? Object.entries(λ440e02d3637d).flatMap(([λ440e02d3637d, λa06c393c5fc9]) => Array.isArray(λa06c393c5fc9) ? λa06c393c5fc9.map(λa06c393c5fc9 => [ λ440e02d3637d, String(λa06c393c5fc9) ]) : null == λa06c393c5fc9 ? [] : [ [ λ440e02d3637d, String(λa06c393c5fc9) ] ]) : [] : [];
}

export function headerRecord(λ440e02d3637d) {
  const λa06c393c5fc9 = {};
  for (const [λ169bb77c922f, λ5d606fcb3d1b] of headerEntries(λ440e02d3637d)) {
    const λ440e02d3637d = String(λ169bb77c922f).toLowerCase();
    void 0 === λa06c393c5fc9[λ440e02d3637d] ? λa06c393c5fc9[λ440e02d3637d] = λ5d606fcb3d1b : Array.isArray(λa06c393c5fc9[λ440e02d3637d]) ? λa06c393c5fc9[λ440e02d3637d].push(λ5d606fcb3d1b) : λa06c393c5fc9[λ440e02d3637d] = [ λa06c393c5fc9[λ440e02d3637d], λ5d606fcb3d1b ];
  }
  return λa06c393c5fc9;
}
