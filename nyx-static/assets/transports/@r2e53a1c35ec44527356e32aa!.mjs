import λ44427dab840f from "./@rfcc59f19f904b9d5394942e8!.mjs";

import { headerEntries as λae566d70e471, headerRecord as λa3762b7fd912 } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Ku extends λ44427dab840f {
  async request(λ44427dab840f, λc7bc2622ec9f, λ978f2971965a, λ31cb2b5bbcef, λ0bd885137b18) {
    const λ052e57c50e4f = await super.request(λ44427dab840f, λc7bc2622ec9f, λ978f2971965a, λae566d70e471(λ31cb2b5bbcef), λ0bd885137b18), λ2d8f21bf39ec = λa3762b7fd912(λ052e57c50e4f.headers);
    return {
      ...λ052e57c50e4f,
      headers: λ2d8f21bf39ec,
      rawHeaders: λ2d8f21bf39ec
    };
  }
  connect(λ44427dab840f, λa3762b7fd912, λc7bc2622ec9f, λ978f2971965a, λ31cb2b5bbcef, λ0bd885137b18, λ052e57c50e4f) {
    return super.connect(λ44427dab840f, λa3762b7fd912, λae566d70e471(λc7bc2622ec9f), λ978f2971965a, λ31cb2b5bbcef, λ0bd885137b18, λ052e57c50e4f);
  }
}
