import λ251cb0a0633e from "./libcurl-client.mjs";

import { headerEntries as λ6638acd578e8 } from "./header-utils.mjs";

export default class Yu extends λ251cb0a0633e {
  async request(λ251cb0a0633e, λ6ba185464a86, λ1acca4641efa, λe2106b075f1e, λ4670f3002167) {
    const λ2ab4128a0ffd = await super.request(λ251cb0a0633e, λ6ba185464a86, λ1acca4641efa, λ6638acd578e8(λe2106b075f1e), λ4670f3002167);
    return {
      ...λ2ab4128a0ffd,
      headers: λ6638acd578e8(λ2ab4128a0ffd.headers)
    };
  }
  connect(λ251cb0a0633e, λ6ba185464a86, λ1acca4641efa, λe2106b075f1e, λ4670f3002167, λ2ab4128a0ffd, λa52a7d20edf2) {
    return super.connect(λ251cb0a0633e, λ6ba185464a86, λ6638acd578e8(λ1acca4641efa), λe2106b075f1e, λ4670f3002167, λ2ab4128a0ffd, λa52a7d20edf2);
  }
}
