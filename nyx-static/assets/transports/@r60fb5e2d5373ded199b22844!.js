import λbcdc729deb6a from "\x2e\x2f\x40\x72\x34\x65\x31\x32\x61\x36\x63\x63\x66\x34\x63\x61\x62\x37\x31\x62\x65\x64\x34\x62\x61\x39\x61\x32\x21\x2e\x6a\x73";

import { headerEntries as λc8915660c140, headerRecord as λ11dd4bf9ece5 } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x127b89_1 extends λbcdc729deb6a {
  async request(λbcdc729deb6a, λ59102fa5cd36, λ9991ec03e857, λ615ce499a8c7, λe26e380092e1) {
    const λb3aacc1d78bd = await super.request(λbcdc729deb6a, λ59102fa5cd36, λ9991ec03e857, λc8915660c140(λ615ce499a8c7), λe26e380092e1), λf60a89015310 = λ11dd4bf9ece5(λb3aacc1d78bd.headers);
    return {
      ...λb3aacc1d78bd,
      headers: λf60a89015310,
      rawHeaders: λf60a89015310
    };
  }
  connect(λbcdc729deb6a, λ11dd4bf9ece5, λ59102fa5cd36, λ9991ec03e857, λ615ce499a8c7, λe26e380092e1, λb3aacc1d78bd) {
    return super.connect(λbcdc729deb6a, λ11dd4bf9ece5, λc8915660c140(λ59102fa5cd36), λ9991ec03e857, λ615ce499a8c7, λe26e380092e1, λb3aacc1d78bd);
  }
}
