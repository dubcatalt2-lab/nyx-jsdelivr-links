import λ8b0a63fed9c6 from "./libcurl-client.js";

import { headerEntries as λ959526b7e637 } from "./header-utils.js";

export default class Yu extends λ8b0a63fed9c6 {
  async request(λ8b0a63fed9c6, λ3a719fab03dd, λc6637c5f71fd, λ7bb36c173885, λec928bc7f358) {
    const λ31c857772e1e = await super.request(λ8b0a63fed9c6, λ3a719fab03dd, λc6637c5f71fd, λ959526b7e637(λ7bb36c173885), λec928bc7f358);
    return {
      ...λ31c857772e1e,
      headers: λ959526b7e637(λ31c857772e1e.headers)
    };
  }
  connect(λ8b0a63fed9c6, λ3a719fab03dd, λc6637c5f71fd, λ7bb36c173885, λec928bc7f358, λ31c857772e1e, λ9b9e15c55d01) {
    return super.connect(λ8b0a63fed9c6, λ3a719fab03dd, λ959526b7e637(λc6637c5f71fd), λ7bb36c173885, λec928bc7f358, λ31c857772e1e, λ9b9e15c55d01);
  }
}
