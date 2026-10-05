import λ0356a6a046a6 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/atlas/@ra0c56fac425aa0db70d01a58!.mjs";

import { headerEntries as λ440a40ab2b6b, headerRecord as λ7ac146a724be } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Gu extends λ0356a6a046a6 {
  async request(λ0356a6a046a6, λ18e019d671ed, λ7e46fd6384af, λ3574f90de2ca, λ9431fe6dd942) {
    const λ0260c4522aae = await super.request(λ0356a6a046a6, λ18e019d671ed, λ7e46fd6384af, λ7ac146a724be(λ3574f90de2ca), λ9431fe6dd942);
    return {
      ...λ0260c4522aae,
      headers: λ440a40ab2b6b(λ0260c4522aae.headers)
    };
  }
  connect(λ0356a6a046a6, λ440a40ab2b6b, λ18e019d671ed, λ7e46fd6384af, λ3574f90de2ca, λ9431fe6dd942, λ0260c4522aae) {
    return super.connect(λ0356a6a046a6, λ440a40ab2b6b, λ7ac146a724be(λ18e019d671ed), λ7e46fd6384af, λ3574f90de2ca, λ9431fe6dd942, λ0260c4522aae);
  }
}
