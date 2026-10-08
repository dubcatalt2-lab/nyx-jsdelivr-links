import λ9e79afeeee95 from "\x2e\x2f\x40\x72\x66\x63\x63\x35\x39\x66\x31\x39\x66\x39\x30\x34\x62\x39\x64\x35\x33\x39\x34\x39\x34\x32\x65\x38\x21\x2e\x6a\x73";

import { headerEntries as λbb0243d10d46 } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x3c892e_2 extends λ9e79afeeee95 {
  async request(λ9e79afeeee95, λ70f76237b21e, λ35a737db5553, λbf4ddc3ac7b8, λf7df1142f89d) {
    const λ0c963866d024 = await super.request(λ9e79afeeee95, λ70f76237b21e, λ35a737db5553, λbb0243d10d46(λbf4ddc3ac7b8), λf7df1142f89d);
    return {
      ...λ0c963866d024,
      headers: λbb0243d10d46(λ0c963866d024.headers)
    };
  }
  connect(λ9e79afeeee95, λ70f76237b21e, λ35a737db5553, λbf4ddc3ac7b8, λf7df1142f89d, λ0c963866d024, λ4c15e32e37ff) {
    return super.connect(λ9e79afeeee95, λ70f76237b21e, λbb0243d10d46(λ35a737db5553), λbf4ddc3ac7b8, λf7df1142f89d, λ0c963866d024, λ4c15e32e37ff);
  }
}
