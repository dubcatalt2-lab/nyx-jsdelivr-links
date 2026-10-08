import λf802d11d93b6 from "\x2e\x2f\x40\x72\x34\x65\x31\x32\x61\x36\x63\x63\x66\x34\x63\x61\x62\x37\x31\x62\x65\x64\x34\x62\x61\x39\x61\x32\x21\x2e\x6a\x73";

import { headerEntries as λ493d384e2f38 } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x3c892e_2 extends λf802d11d93b6 {
  async request(λf802d11d93b6, λd991634648b5, λ59c7dd919f76, λd8c40db14a82, λ6eff095ea232) {
    const λe6b3ed5d92dc = await super.request(λf802d11d93b6, λd991634648b5, λ59c7dd919f76, λ493d384e2f38(λd8c40db14a82), λ6eff095ea232);
    return {
      ...λe6b3ed5d92dc,
      headers: λ493d384e2f38(λe6b3ed5d92dc.headers)
    };
  }
  connect(λf802d11d93b6, λd991634648b5, λ59c7dd919f76, λd8c40db14a82, λ6eff095ea232, λe6b3ed5d92dc, λc0afc465b9e6) {
    return super.connect(λf802d11d93b6, λd991634648b5, λ493d384e2f38(λ59c7dd919f76), λd8c40db14a82, λ6eff095ea232, λe6b3ed5d92dc, λc0afc465b9e6);
  }
}
