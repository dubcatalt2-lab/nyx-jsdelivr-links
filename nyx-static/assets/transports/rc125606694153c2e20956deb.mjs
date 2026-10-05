import λd260feb933a3 from "./libcurl-client.mjs";

import { headerEntries as λ5b952142ae3a } from "./header-utils.mjs";

export default class Yu extends λd260feb933a3 {
  async request(λd260feb933a3, λ3b5e171a4cf4, λ1160c6d2bd12, λ3d0ddea236c7, λ3fed8fa819a9) {
    const λ1d844101b0d4 = await super.request(λd260feb933a3, λ3b5e171a4cf4, λ1160c6d2bd12, λ5b952142ae3a(λ3d0ddea236c7), λ3fed8fa819a9);
    return {
      ...λ1d844101b0d4,
      headers: λ5b952142ae3a(λ1d844101b0d4.headers)
    };
  }
  connect(λd260feb933a3, λ3b5e171a4cf4, λ1160c6d2bd12, λ3d0ddea236c7, λ3fed8fa819a9, λ1d844101b0d4, λ3c744aed4050) {
    return super.connect(λd260feb933a3, λ3b5e171a4cf4, λ5b952142ae3a(λ1160c6d2bd12), λ3d0ddea236c7, λ3fed8fa819a9, λ1d844101b0d4, λ3c744aed4050);
  }
}
