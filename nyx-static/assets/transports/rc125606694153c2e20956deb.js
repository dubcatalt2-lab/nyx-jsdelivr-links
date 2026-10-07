import λ75f5caf453b6 from "\x2e\x2f\x6c\x69\x62\x63\x75\x72\x6c\x2d\x63\x6c\x69\x65\x6e\x74\x2e\x6a\x73";

import { headerEntries as λb6066dc7a4d2 } from "\x2e\x2f\x68\x65\x61\x64\x65\x72\x2d\x75\x74\x69\x6c\x73\x2e\x6a\x73";

export default class _0x3c892e_0 extends λ75f5caf453b6 {
  async request(λ75f5caf453b6, λdf1530b851d9, λ534174739a42, λ259ef6284ff3, λd0625113141f) {
    const λb5e6dddfb105 = await super.request(λ75f5caf453b6, λdf1530b851d9, λ534174739a42, λb6066dc7a4d2(λ259ef6284ff3), λd0625113141f);
    return {
      ...λb5e6dddfb105,
      headers: λb6066dc7a4d2(λb5e6dddfb105.headers)
    };
  }
  connect(λ75f5caf453b6, λdf1530b851d9, λ534174739a42, λ259ef6284ff3, λd0625113141f, λb5e6dddfb105, λ4772b238abd3) {
    return super.connect(λ75f5caf453b6, λdf1530b851d9, λb6066dc7a4d2(λ534174739a42), λ259ef6284ff3, λd0625113141f, λb5e6dddfb105, λ4772b238abd3);
  }
}
