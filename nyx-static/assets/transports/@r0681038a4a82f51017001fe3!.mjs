import λ3dc2dcc3decb from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/atlas/@ra0c56fac425aa0db70d01a58!.mjs";

import { headerEntries as λ1f73420ef59f, headerRecord as λdbbf48abcb5f } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Gu extends λ3dc2dcc3decb {
  async request(λ3dc2dcc3decb, λ1b268d296abc, λ7804d2b1b623, λ9084adb11aad, λdc6b4e37758c) {
    const λ3f0e99da2a28 = await super.request(λ3dc2dcc3decb, λ1b268d296abc, λ7804d2b1b623, λdbbf48abcb5f(λ9084adb11aad), λdc6b4e37758c);
    return {
      ...λ3f0e99da2a28,
      headers: λ1f73420ef59f(λ3f0e99da2a28.headers)
    };
  }
  connect(λ3dc2dcc3decb, λ1f73420ef59f, λ1b268d296abc, λ7804d2b1b623, λ9084adb11aad, λdc6b4e37758c, λ3f0e99da2a28) {
    return super.connect(λ3dc2dcc3decb, λ1f73420ef59f, λdbbf48abcb5f(λ1b268d296abc), λ7804d2b1b623, λ9084adb11aad, λdc6b4e37758c, λ3f0e99da2a28);
  }
}
