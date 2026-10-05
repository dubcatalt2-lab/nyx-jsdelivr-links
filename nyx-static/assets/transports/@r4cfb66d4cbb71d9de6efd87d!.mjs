import λ5dc371130861 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/epoxy/@rebc1ad8dd3184da107fa150d!.mjs";

import { headerEntries as λb909a99771e3, headerRecord as λed5bd85e004d } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Gu extends λ5dc371130861 {
  async request(λ5dc371130861, λ490d47d5908b, λ4f6694b8c39f, λ39080a544aaa, λa97f4cfb5d87) {
    const λ1915da86b2cc = await super.request(λ5dc371130861, λ490d47d5908b, λ4f6694b8c39f, λed5bd85e004d(λ39080a544aaa), λa97f4cfb5d87);
    return {
      ...λ1915da86b2cc,
      headers: λb909a99771e3(λ1915da86b2cc.headers)
    };
  }
  connect(λ5dc371130861, λb909a99771e3, λ490d47d5908b, λ4f6694b8c39f, λ39080a544aaa, λa97f4cfb5d87, λ1915da86b2cc) {
    return super.connect(λ5dc371130861, λb909a99771e3, λed5bd85e004d(λ490d47d5908b), λ4f6694b8c39f, λ39080a544aaa, λa97f4cfb5d87, λ1915da86b2cc);
  }
}
