import λdcef6a6d5d62 from "./@rfcc59f19f904b9d5394942e8!.js";

import { headerEntries as λ87c488ff80ec, headerRecord as λf0053bada5c3 } from "./@rcf70f1f99cfedb208df1b0a0!.js";

export default class Ku extends λdcef6a6d5d62 {
  async request(λdcef6a6d5d62, λ5df44788e3d6, λb790d6db3526, λeea21ec83c68, λ13c5808e9545) {
    const λec8e2b7fb5af = await super.request(λdcef6a6d5d62, λ5df44788e3d6, λb790d6db3526, λ87c488ff80ec(λeea21ec83c68), λ13c5808e9545), λ1efdceca1b76 = λf0053bada5c3(λec8e2b7fb5af.headers);
    return {
      ...λec8e2b7fb5af,
      headers: λ1efdceca1b76,
      rawHeaders: λ1efdceca1b76
    };
  }
  connect(λdcef6a6d5d62, λf0053bada5c3, λ5df44788e3d6, λb790d6db3526, λeea21ec83c68, λ13c5808e9545, λec8e2b7fb5af) {
    return super.connect(λdcef6a6d5d62, λf0053bada5c3, λ87c488ff80ec(λ5df44788e3d6), λb790d6db3526, λeea21ec83c68, λ13c5808e9545, λec8e2b7fb5af);
  }
}
