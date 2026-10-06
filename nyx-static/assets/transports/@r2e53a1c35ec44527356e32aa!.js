import λ67e0d3cba080 from "./@rfcc59f19f904b9d5394942e8!.js";

import { headerEntries as λ91cd19db5926, headerRecord as λf8ae7dd3958d } from "./@rcf70f1f99cfedb208df1b0a0!.js";

export default class Ku extends λ67e0d3cba080 {
  async request(λ67e0d3cba080, λ88067d0d53e3, λb1aebf3e9b93, λ99f02c342c1e, λb95487fdaa1a) {
    const λ31fa9e8d3e63 = await super.request(λ67e0d3cba080, λ88067d0d53e3, λb1aebf3e9b93, λ91cd19db5926(λ99f02c342c1e), λb95487fdaa1a), λ37c1d9c64835 = λf8ae7dd3958d(λ31fa9e8d3e63.headers);
    return {
      ...λ31fa9e8d3e63,
      headers: λ37c1d9c64835,
      rawHeaders: λ37c1d9c64835
    };
  }
  connect(λ67e0d3cba080, λf8ae7dd3958d, λ88067d0d53e3, λb1aebf3e9b93, λ99f02c342c1e, λb95487fdaa1a, λ31fa9e8d3e63) {
    return super.connect(λ67e0d3cba080, λf8ae7dd3958d, λ91cd19db5926(λ88067d0d53e3), λb1aebf3e9b93, λ99f02c342c1e, λb95487fdaa1a, λ31fa9e8d3e63);
  }
}
