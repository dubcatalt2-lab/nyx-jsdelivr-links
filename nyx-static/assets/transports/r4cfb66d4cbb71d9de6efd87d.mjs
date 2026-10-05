import λdb7b3258fe4e from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/epoxy/index.mjs";

import { headerEntries as λd8c3fbf76cd4, headerRecord as λ24c743e76839 } from "./header-utils.mjs";

export default class Gu extends λdb7b3258fe4e {
  async request(λdb7b3258fe4e, λ345a1bf14860, λdd2aacf083ee, λb22f7895e658, λ50d675ebce34) {
    const λc704123a27d4 = await super.request(λdb7b3258fe4e, λ345a1bf14860, λdd2aacf083ee, λ24c743e76839(λb22f7895e658), λ50d675ebce34);
    return {
      ...λc704123a27d4,
      headers: λd8c3fbf76cd4(λc704123a27d4.headers)
    };
  }
  connect(λdb7b3258fe4e, λd8c3fbf76cd4, λ345a1bf14860, λdd2aacf083ee, λb22f7895e658, λ50d675ebce34, λc704123a27d4) {
    return super.connect(λdb7b3258fe4e, λd8c3fbf76cd4, λ24c743e76839(λ345a1bf14860), λdd2aacf083ee, λb22f7895e658, λ50d675ebce34, λc704123a27d4);
  }
}
