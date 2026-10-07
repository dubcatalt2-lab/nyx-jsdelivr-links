import λa026e9cb46ba from "\x2e\x2f\x40\x72\x34\x65\x31\x32\x61\x36\x63\x63\x66\x34\x63\x61\x62\x37\x31\x62\x65\x64\x34\x62\x61\x39\x61\x32\x21\x2e\x6a\x73";

import { headerEntries as λb34acade9205 } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x3c892e_0 extends λa026e9cb46ba {
  async request(λa026e9cb46ba, λ1a76cf110905, λe80f66340bcf, λ39d695f35f5a, λ5cc2b430eaa7) {
    const λ58641a2fd77b = await super.request(λa026e9cb46ba, λ1a76cf110905, λe80f66340bcf, λb34acade9205(λ39d695f35f5a), λ5cc2b430eaa7);
    return {
      ...λ58641a2fd77b,
      headers: λb34acade9205(λ58641a2fd77b.headers)
    };
  }
  connect(λa026e9cb46ba, λ1a76cf110905, λe80f66340bcf, λ39d695f35f5a, λ5cc2b430eaa7, λ58641a2fd77b, λf08affeda382) {
    return super.connect(λa026e9cb46ba, λ1a76cf110905, λb34acade9205(λe80f66340bcf), λ39d695f35f5a, λ5cc2b430eaa7, λ58641a2fd77b, λf08affeda382);
  }
}
