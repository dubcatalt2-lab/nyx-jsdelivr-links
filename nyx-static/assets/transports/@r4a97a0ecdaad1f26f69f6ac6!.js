export function headerEntries(λ31ac7f649922) {
  return λ31ac7f649922 ? λ31ac7f649922 instanceof Headers ? [ ...λ31ac7f649922.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ31ac7f649922[Symbol.iterator] ? [ ...λ31ac7f649922 ].flatMap(([λ31ac7f649922, λ3e1cd9fd30a2]) => Array.isArray(λ3e1cd9fd30a2) ? λ3e1cd9fd30a2.map(λ3e1cd9fd30a2 => [ String(λ31ac7f649922), String(λ3e1cd9fd30a2) ]) : null == λ3e1cd9fd30a2 ? [] : [ [ String(λ31ac7f649922), String(λ3e1cd9fd30a2) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ31ac7f649922 ? Object.entries(λ31ac7f649922).flatMap(([λ31ac7f649922, λ3e1cd9fd30a2]) => Array.isArray(λ3e1cd9fd30a2) ? λ3e1cd9fd30a2.map(λ3e1cd9fd30a2 => [ λ31ac7f649922, String(λ3e1cd9fd30a2) ]) : null == λ3e1cd9fd30a2 ? [] : [ [ λ31ac7f649922, String(λ3e1cd9fd30a2) ] ]) : [] : [];
}

export function headerRecord(λ31ac7f649922) {
  const λ3e1cd9fd30a2 = {};
  for (const [λ512af1b86993, λe9c31f2404a4] of headerEntries(λ31ac7f649922)) {
    const λ31ac7f649922 = String(λ512af1b86993).toLowerCase();
    void 0 === λ3e1cd9fd30a2[λ31ac7f649922] ? λ3e1cd9fd30a2[λ31ac7f649922] = λe9c31f2404a4 : Array.isArray(λ3e1cd9fd30a2[λ31ac7f649922]) ? λ3e1cd9fd30a2[λ31ac7f649922].push(λe9c31f2404a4) : λ3e1cd9fd30a2[λ31ac7f649922] = [ λ3e1cd9fd30a2[λ31ac7f649922], λe9c31f2404a4 ];
  }
  return λ3e1cd9fd30a2;
}
