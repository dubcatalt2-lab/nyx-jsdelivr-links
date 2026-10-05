import λfdc544775f1f from "./@r4e12a6ccf4cab71bed4ba9a2!.js";

import { headerEntries as λ9974d5e49dad } from "./@r58e1303ec81b4e613dc28874!.js";

export default class Yu extends λfdc544775f1f {
  async request(λfdc544775f1f, λ3d35b7dbe24a, λa9d363f4020a, λf814a1be4354, λdadae018b34c) {
    const λ7274169c867b = await super.request(λfdc544775f1f, λ3d35b7dbe24a, λa9d363f4020a, λ9974d5e49dad(λf814a1be4354), λdadae018b34c);
    return {
      ...λ7274169c867b,
      headers: λ9974d5e49dad(λ7274169c867b.headers)
    };
  }
  connect(λfdc544775f1f, λ3d35b7dbe24a, λa9d363f4020a, λf814a1be4354, λdadae018b34c, λ7274169c867b, λf52cd7e355e7) {
    return super.connect(λfdc544775f1f, λ3d35b7dbe24a, λ9974d5e49dad(λa9d363f4020a), λf814a1be4354, λdadae018b34c, λ7274169c867b, λf52cd7e355e7);
  }
}
