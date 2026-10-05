import λd9a15eaee34b from "./@r4e12a6ccf4cab71bed4ba9a2!.mjs";

import { headerEntries as λcdb22861f579 } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Yu extends λd9a15eaee34b {
  async request(λd9a15eaee34b, λ089d6ada3a74, λ82ce5ed0009b, λ9edf8932c1ee, λc92a64834057) {
    const λ662fda576b09 = await super.request(λd9a15eaee34b, λ089d6ada3a74, λ82ce5ed0009b, λcdb22861f579(λ9edf8932c1ee), λc92a64834057);
    return {
      ...λ662fda576b09,
      headers: λcdb22861f579(λ662fda576b09.headers)
    };
  }
  connect(λd9a15eaee34b, λ089d6ada3a74, λ82ce5ed0009b, λ9edf8932c1ee, λc92a64834057, λ662fda576b09, λ6e9dae38c07d) {
    return super.connect(λd9a15eaee34b, λ089d6ada3a74, λcdb22861f579(λ82ce5ed0009b), λ9edf8932c1ee, λc92a64834057, λ662fda576b09, λ6e9dae38c07d);
  }
}
