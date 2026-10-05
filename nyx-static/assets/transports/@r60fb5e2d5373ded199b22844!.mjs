import λ9098f89c2e4a from "./@r4e12a6ccf4cab71bed4ba9a2!.mjs";

import { headerEntries as λefe129bbbef0, headerRecord as λ957e875b8d45 } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Ku extends λ9098f89c2e4a {
  async request(λ9098f89c2e4a, λbbdbef9f4ff9, λ00ff924dd175, λ00ae1ac49ebd, λea94ff3cd8cf) {
    const λ33aa80ada40a = await super.request(λ9098f89c2e4a, λbbdbef9f4ff9, λ00ff924dd175, λefe129bbbef0(λ00ae1ac49ebd), λea94ff3cd8cf), λ3d5c97900b13 = λ957e875b8d45(λ33aa80ada40a.headers);
    return {
      ...λ33aa80ada40a,
      headers: λ3d5c97900b13,
      rawHeaders: λ3d5c97900b13
    };
  }
  connect(λ9098f89c2e4a, λ957e875b8d45, λbbdbef9f4ff9, λ00ff924dd175, λ00ae1ac49ebd, λea94ff3cd8cf, λ33aa80ada40a) {
    return super.connect(λ9098f89c2e4a, λ957e875b8d45, λefe129bbbef0(λbbdbef9f4ff9), λ00ff924dd175, λ00ae1ac49ebd, λea94ff3cd8cf, λ33aa80ada40a);
  }
}
