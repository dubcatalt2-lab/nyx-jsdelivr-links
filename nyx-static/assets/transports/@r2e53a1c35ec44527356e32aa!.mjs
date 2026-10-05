import λa02022196e10 from "./@rfcc59f19f904b9d5394942e8!.mjs";

import { headerEntries as λ7f28ae607c49, headerRecord as λ4c6e1b41cc76 } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Ku extends λa02022196e10 {
  async request(λa02022196e10, λ4307f71e56ee, λb8044e24b931, λ2d122f236e82, λ013bfb6deeda) {
    const λ4bdf22494eeb = await super.request(λa02022196e10, λ4307f71e56ee, λb8044e24b931, λ7f28ae607c49(λ2d122f236e82), λ013bfb6deeda), λ671f3f14423d = λ4c6e1b41cc76(λ4bdf22494eeb.headers);
    return {
      ...λ4bdf22494eeb,
      headers: λ671f3f14423d,
      rawHeaders: λ671f3f14423d
    };
  }
  connect(λa02022196e10, λ4c6e1b41cc76, λ4307f71e56ee, λb8044e24b931, λ2d122f236e82, λ013bfb6deeda, λ4bdf22494eeb) {
    return super.connect(λa02022196e10, λ4c6e1b41cc76, λ7f28ae607c49(λ4307f71e56ee), λb8044e24b931, λ2d122f236e82, λ013bfb6deeda, λ4bdf22494eeb);
  }
}
