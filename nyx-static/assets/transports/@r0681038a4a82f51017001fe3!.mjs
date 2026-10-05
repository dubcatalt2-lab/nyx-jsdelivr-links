import λ08020f59a6b6 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/atlas/@ra0c56fac425aa0db70d01a58!.mjs";

import { headerEntries as λ592f7916b13c, headerRecord as λ6bb6b9b097d4 } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Gu extends λ08020f59a6b6 {
  async request(λ08020f59a6b6, λ38726e39cd0f, λ7538aa7593e4, λ3c4c3d9a7a13, λ150d13d16e69) {
    const λ67a514ac2c26 = await super.request(λ08020f59a6b6, λ38726e39cd0f, λ7538aa7593e4, λ6bb6b9b097d4(λ3c4c3d9a7a13), λ150d13d16e69);
    return {
      ...λ67a514ac2c26,
      headers: λ592f7916b13c(λ67a514ac2c26.headers)
    };
  }
  connect(λ08020f59a6b6, λ592f7916b13c, λ38726e39cd0f, λ7538aa7593e4, λ3c4c3d9a7a13, λ150d13d16e69, λ67a514ac2c26) {
    return super.connect(λ08020f59a6b6, λ592f7916b13c, λ6bb6b9b097d4(λ38726e39cd0f), λ7538aa7593e4, λ3c4c3d9a7a13, λ150d13d16e69, λ67a514ac2c26);
  }
}
