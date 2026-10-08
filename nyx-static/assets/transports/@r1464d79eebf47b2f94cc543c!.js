import λ3ecb84ba66f8 from "\x2e\x2f\x40\x72\x66\x63\x63\x35\x39\x66\x31\x39\x66\x39\x30\x34\x62\x39\x64\x35\x33\x39\x34\x39\x34\x32\x65\x38\x21\x2e\x6a\x73";

import { headerEntries as λddf5eba08f57 } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x3c892e_2 extends λ3ecb84ba66f8 {
  async request(λ3ecb84ba66f8, λe8803b96d532, λa230bb293ed9, λ64db5f3c4ae1, λ5a6202b39b38) {
    const λ8069f13c3d45 = await super.request(λ3ecb84ba66f8, λe8803b96d532, λa230bb293ed9, λddf5eba08f57(λ64db5f3c4ae1), λ5a6202b39b38);
    return {
      ...λ8069f13c3d45,
      headers: λddf5eba08f57(λ8069f13c3d45.headers)
    };
  }
  connect(λ3ecb84ba66f8, λe8803b96d532, λa230bb293ed9, λ64db5f3c4ae1, λ5a6202b39b38, λ8069f13c3d45, λ52c7d054543e) {
    return super.connect(λ3ecb84ba66f8, λe8803b96d532, λddf5eba08f57(λa230bb293ed9), λ64db5f3c4ae1, λ5a6202b39b38, λ8069f13c3d45, λ52c7d054543e);
  }
}
