export function headerEntries(λ7961c160ab43) {
  return λ7961c160ab43 ? λ7961c160ab43 instanceof Headers ? [ ...λ7961c160ab43.entries() ] : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ7961c160ab43[Symbol.iterator] ? [ ...λ7961c160ab43 ].flatMap(([λ7961c160ab43, λd0626ff13cfe]) => Array.isArray(λd0626ff13cfe) ? λd0626ff13cfe.map(λd0626ff13cfe => [ String(λ7961c160ab43), String(λd0626ff13cfe) ]) : null == λd0626ff13cfe ? [] : [ [ String(λ7961c160ab43), String(λd0626ff13cfe) ] ]) : "\x6f\x62\x6a\x65\x63\x74" == typeof λ7961c160ab43 ? Object.entries(λ7961c160ab43).flatMap(([λ7961c160ab43, λd0626ff13cfe]) => Array.isArray(λd0626ff13cfe) ? λd0626ff13cfe.map(λd0626ff13cfe => [ λ7961c160ab43, String(λd0626ff13cfe) ]) : null == λd0626ff13cfe ? [] : [ [ λ7961c160ab43, String(λd0626ff13cfe) ] ]) : [] : [];
}

export function headerRecord(λ7961c160ab43) {
  const λd0626ff13cfe = {};
  for (const [λf0b043d75f57, λ7dd3c3d0c15f] of headerEntries(λ7961c160ab43)) {
    const λ7961c160ab43 = String(λf0b043d75f57).toLowerCase();
    void 0 === λd0626ff13cfe[λ7961c160ab43] ? λd0626ff13cfe[λ7961c160ab43] = λ7dd3c3d0c15f : Array.isArray(λd0626ff13cfe[λ7961c160ab43]) ? λd0626ff13cfe[λ7961c160ab43].push(λ7dd3c3d0c15f) : λd0626ff13cfe[λ7961c160ab43] = [ λd0626ff13cfe[λ7961c160ab43], λ7dd3c3d0c15f ];
  }
  return λd0626ff13cfe;
}
