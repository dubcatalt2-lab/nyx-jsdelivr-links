import λaaec04227915 from "./@rfcc59f19f904b9d5394942e8!.mjs";

import { headerEntries as λ619189f7cd7c } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Yu extends λaaec04227915 {
  async request(λaaec04227915, λddfb96bdc3f5, λ463b11950ba6, λ2e992ea80d48, λ238243452aca) {
    const λ9b89f3f925b6 = await super.request(λaaec04227915, λddfb96bdc3f5, λ463b11950ba6, λ619189f7cd7c(λ2e992ea80d48), λ238243452aca);
    return {
      ...λ9b89f3f925b6,
      headers: λ619189f7cd7c(λ9b89f3f925b6.headers)
    };
  }
  connect(λaaec04227915, λddfb96bdc3f5, λ463b11950ba6, λ2e992ea80d48, λ238243452aca, λ9b89f3f925b6, λ478df10a59b3) {
    return super.connect(λaaec04227915, λddfb96bdc3f5, λ619189f7cd7c(λ463b11950ba6), λ2e992ea80d48, λ238243452aca, λ9b89f3f925b6, λ478df10a59b3);
  }
}
