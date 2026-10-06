import λbe51d807638f from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/epoxy/@rebc1ad8dd3184da107fa150d!.js";

import { headerEntries as λd37dd1280f7c, headerRecord as λbe4114f56ac2 } from "./@r58e1303ec81b4e613dc28874!.js";

export default class Gu extends λbe51d807638f {
  async request(λbe51d807638f, λ6d2a46a102cb, λd53b42d18102, λ2221e1d73e17, λ77e038bd46c2) {
    const λ8c4293b2cf79 = await super.request(λbe51d807638f, λ6d2a46a102cb, λd53b42d18102, λbe4114f56ac2(λ2221e1d73e17), λ77e038bd46c2);
    return {
      ...λ8c4293b2cf79,
      headers: λd37dd1280f7c(λ8c4293b2cf79.headers)
    };
  }
  connect(λbe51d807638f, λd37dd1280f7c, λ6d2a46a102cb, λd53b42d18102, λ2221e1d73e17, λ77e038bd46c2, λ8c4293b2cf79) {
    return super.connect(λbe51d807638f, λd37dd1280f7c, λbe4114f56ac2(λ6d2a46a102cb), λd53b42d18102, λ2221e1d73e17, λ77e038bd46c2, λ8c4293b2cf79);
  }
}
