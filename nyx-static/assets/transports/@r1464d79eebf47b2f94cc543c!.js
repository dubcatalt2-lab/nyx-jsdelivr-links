import λ222f91acef53 from "./@rfcc59f19f904b9d5394942e8!.js";

import { headerEntries as λ60bfa2444215 } from "./@rcf70f1f99cfedb208df1b0a0!.js";

export default class Yu extends λ222f91acef53 {
  async request(λ222f91acef53, λ92fa2ae8bf15, λ9e41f6d9ab67, λ831854b3b9dc, λd7e2039e0d42) {
    const λ64a6dc951b38 = await super.request(λ222f91acef53, λ92fa2ae8bf15, λ9e41f6d9ab67, λ60bfa2444215(λ831854b3b9dc), λd7e2039e0d42);
    return {
      ...λ64a6dc951b38,
      headers: λ60bfa2444215(λ64a6dc951b38.headers)
    };
  }
  connect(λ222f91acef53, λ92fa2ae8bf15, λ9e41f6d9ab67, λ831854b3b9dc, λd7e2039e0d42, λ64a6dc951b38, λ10cf807128f9) {
    return super.connect(λ222f91acef53, λ92fa2ae8bf15, λ60bfa2444215(λ9e41f6d9ab67), λ831854b3b9dc, λd7e2039e0d42, λ64a6dc951b38, λ10cf807128f9);
  }
}
