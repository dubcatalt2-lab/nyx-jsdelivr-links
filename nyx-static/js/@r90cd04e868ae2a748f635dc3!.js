globalThis.nyxDisplayName = r => String(r ?? "").replace(/[A-Za-z0-9]/g, r => {
  const a = r.charCodeAt(0);
  return String.fromCodePoint(a >= 97 ? 120250 + a - 97 : a >= 65 ? 120224 + a - 65 : 120802 + a - 48);
});
