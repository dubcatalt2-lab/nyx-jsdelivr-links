import λ3e07c425f0b7 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/atlas/@ra0c56fac425aa0db70d01a58!.mjs";

import { headerEntries as λb0812470a740, headerRecord as λ42aea4adeb0f } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Gu extends λ3e07c425f0b7 {
  async request(λ3e07c425f0b7, λ30d06e1bc8ca, λ60291e88974a, λ97cc75ec9da1, λ9a2c58aec259) {
    const λc47b756f4593 = await super.request(λ3e07c425f0b7, λ30d06e1bc8ca, λ60291e88974a, λ42aea4adeb0f(λ97cc75ec9da1), λ9a2c58aec259);
    return {
      ...λc47b756f4593,
      headers: λb0812470a740(λc47b756f4593.headers)
    };
  }
  connect(λ3e07c425f0b7, λb0812470a740, λ30d06e1bc8ca, λ60291e88974a, λ97cc75ec9da1, λ9a2c58aec259, λc47b756f4593) {
    return super.connect(λ3e07c425f0b7, λb0812470a740, λ42aea4adeb0f(λ30d06e1bc8ca), λ60291e88974a, λ97cc75ec9da1, λ9a2c58aec259, λc47b756f4593);
  }
}
