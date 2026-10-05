import λ73c9935f7785 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/epoxy/@rebc1ad8dd3184da107fa150d!.mjs";

import { headerEntries as λe2af2b843ae7, headerRecord as λ60cc4078aea2 } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Gu extends λ73c9935f7785 {
  async request(λ73c9935f7785, λ7c55147ed401, λe7503565cae8, λf25d54878976, λ55568772f8bb) {
    const λ4d87b02e0ff4 = await super.request(λ73c9935f7785, λ7c55147ed401, λe7503565cae8, λ60cc4078aea2(λf25d54878976), λ55568772f8bb);
    return {
      ...λ4d87b02e0ff4,
      headers: λe2af2b843ae7(λ4d87b02e0ff4.headers)
    };
  }
  connect(λ73c9935f7785, λe2af2b843ae7, λ7c55147ed401, λe7503565cae8, λf25d54878976, λ55568772f8bb, λ4d87b02e0ff4) {
    return super.connect(λ73c9935f7785, λe2af2b843ae7, λ60cc4078aea2(λ7c55147ed401), λe7503565cae8, λf25d54878976, λ55568772f8bb, λ4d87b02e0ff4);
  }
}
