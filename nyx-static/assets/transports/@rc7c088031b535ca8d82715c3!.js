import λ9816d82b95e4 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/epoxy/index.module-3b26d55d6e45.js";

import { headerEntries as λ6cf0705091d8, headerRecord as λc3b51278d5a1 } from "./@r4a97a0ecdaad1f26f69f6ac6!.js";

export default class Gu extends λ9816d82b95e4 {
  async request(λ9816d82b95e4, λ73e3f26420b2, λbf6dc91a67f6, λ76d3a41a8100, λb282b3e89df4) {
    const λ360b4e745d08 = await super.request(λ9816d82b95e4, λ73e3f26420b2, λbf6dc91a67f6, λc3b51278d5a1(λ76d3a41a8100), λb282b3e89df4);
    return {
      ...λ360b4e745d08,
      headers: λ6cf0705091d8(λ360b4e745d08.headers)
    };
  }
  connect(λ9816d82b95e4, λ6cf0705091d8, λ73e3f26420b2, λbf6dc91a67f6, λ76d3a41a8100, λb282b3e89df4, λ360b4e745d08) {
    return super.connect(λ9816d82b95e4, λ6cf0705091d8, λc3b51278d5a1(λ73e3f26420b2), λbf6dc91a67f6, λ76d3a41a8100, λb282b3e89df4, λ360b4e745d08);
  }
}
