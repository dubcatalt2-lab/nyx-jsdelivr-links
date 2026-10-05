import λ4c5efc258fb2 from "./libcurl-client.mjs";

import { headerEntries as λ493933cfd28c, headerRecord as λ2e285bb3c7c0 } from "./header-utils.mjs";

export default class Ku extends λ4c5efc258fb2 {
  async request(λ4c5efc258fb2, λ207b0ecbdc37, λ3150a560d9f1, λ2623400b7cca, λ1c0f84a1632a) {
    const λ30c0a552fc1d = await super.request(λ4c5efc258fb2, λ207b0ecbdc37, λ3150a560d9f1, λ493933cfd28c(λ2623400b7cca), λ1c0f84a1632a), λ0c9676dd8f26 = λ2e285bb3c7c0(λ30c0a552fc1d.headers);
    return {
      ...λ30c0a552fc1d,
      headers: λ0c9676dd8f26,
      rawHeaders: λ0c9676dd8f26
    };
  }
  connect(λ4c5efc258fb2, λ2e285bb3c7c0, λ207b0ecbdc37, λ3150a560d9f1, λ2623400b7cca, λ1c0f84a1632a, λ30c0a552fc1d) {
    return super.connect(λ4c5efc258fb2, λ2e285bb3c7c0, λ493933cfd28c(λ207b0ecbdc37), λ3150a560d9f1, λ2623400b7cca, λ1c0f84a1632a, λ30c0a552fc1d);
  }
}
