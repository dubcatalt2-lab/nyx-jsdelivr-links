import λcdbae8a0a2a3 from "./libcurl-client.mjs";

import { headerEntries as λc39b31c2b9c4, headerRecord as λa7327ac75847 } from "./header-utils.mjs";

export default class Ku extends λcdbae8a0a2a3 {
  async request(λcdbae8a0a2a3, λ37a9da5f5911, λ3653be4ce70a, λb30e1571d560, λc3bc3dfe1123) {
    const λ4fdcd79308cc = await super.request(λcdbae8a0a2a3, λ37a9da5f5911, λ3653be4ce70a, λc39b31c2b9c4(λb30e1571d560), λc3bc3dfe1123), λ87b1e43ddac3 = λa7327ac75847(λ4fdcd79308cc.headers);
    return {
      ...λ4fdcd79308cc,
      headers: λ87b1e43ddac3,
      rawHeaders: λ87b1e43ddac3
    };
  }
  connect(λcdbae8a0a2a3, λa7327ac75847, λ37a9da5f5911, λ3653be4ce70a, λb30e1571d560, λc3bc3dfe1123, λ4fdcd79308cc) {
    return super.connect(λcdbae8a0a2a3, λa7327ac75847, λc39b31c2b9c4(λ37a9da5f5911), λ3653be4ce70a, λb30e1571d560, λc3bc3dfe1123, λ4fdcd79308cc);
  }
}
