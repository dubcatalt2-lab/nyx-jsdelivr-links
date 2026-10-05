import λcbe8c9f7a66d from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/atlas/@ra0c56fac425aa0db70d01a58!.mjs";

import { headerEntries as λ4313124b6a5e, headerRecord as λ9cadd67032c6 } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Gu extends λcbe8c9f7a66d {
  async request(λcbe8c9f7a66d, λb12a8b5eb507, λ7af1c92aa6c3, λ68599c2a97e2, λ90991525f3de) {
    const λ146d03b240da = await super.request(λcbe8c9f7a66d, λb12a8b5eb507, λ7af1c92aa6c3, λ9cadd67032c6(λ68599c2a97e2), λ90991525f3de);
    return {
      ...λ146d03b240da,
      headers: λ4313124b6a5e(λ146d03b240da.headers)
    };
  }
  connect(λcbe8c9f7a66d, λ4313124b6a5e, λb12a8b5eb507, λ7af1c92aa6c3, λ68599c2a97e2, λ90991525f3de, λ146d03b240da) {
    return super.connect(λcbe8c9f7a66d, λ4313124b6a5e, λ9cadd67032c6(λb12a8b5eb507), λ7af1c92aa6c3, λ68599c2a97e2, λ90991525f3de, λ146d03b240da);
  }
}
