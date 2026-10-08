import λ121725953bb7 from "\x2e\x2f\x40\x72\x34\x65\x31\x32\x61\x36\x63\x63\x66\x34\x63\x61\x62\x37\x31\x62\x65\x64\x34\x62\x61\x39\x61\x32\x21\x2e\x6a\x73";

import { headerEntries as λ0a27831616ed } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x3c892e_2 extends λ121725953bb7 {
  async request(λ121725953bb7, λ8a01f9e9948f, λ34bf126b9caa, λ3d3fc738d676, λ6a3e49e6789c) {
    const λ269a5b6e6bb4 = await super.request(λ121725953bb7, λ8a01f9e9948f, λ34bf126b9caa, λ0a27831616ed(λ3d3fc738d676), λ6a3e49e6789c);
    return {
      ...λ269a5b6e6bb4,
      headers: λ0a27831616ed(λ269a5b6e6bb4.headers)
    };
  }
  connect(λ121725953bb7, λ8a01f9e9948f, λ34bf126b9caa, λ3d3fc738d676, λ6a3e49e6789c, λ269a5b6e6bb4, λ3da2a5975769) {
    return super.connect(λ121725953bb7, λ8a01f9e9948f, λ0a27831616ed(λ34bf126b9caa), λ3d3fc738d676, λ6a3e49e6789c, λ269a5b6e6bb4, λ3da2a5975769);
  }
}
