import λ963c4560a1e8 from "./libcurl-client.mjs";

import { headerEntries as λ4e09be2f5964 } from "./header-utils.mjs";

export default class Yu extends λ963c4560a1e8 {
  async request(λ963c4560a1e8, λ3be196fb4ab9, λ51884a2211b2, λ28dddb6bd3cc, λb8493bfb9866) {
    const λe0f022dc61e9 = await super.request(λ963c4560a1e8, λ3be196fb4ab9, λ51884a2211b2, λ4e09be2f5964(λ28dddb6bd3cc), λb8493bfb9866);
    return {
      ...λe0f022dc61e9,
      headers: λ4e09be2f5964(λe0f022dc61e9.headers)
    };
  }
  connect(λ963c4560a1e8, λ3be196fb4ab9, λ51884a2211b2, λ28dddb6bd3cc, λb8493bfb9866, λe0f022dc61e9, λdb857b2308b6) {
    return super.connect(λ963c4560a1e8, λ3be196fb4ab9, λ4e09be2f5964(λ51884a2211b2), λ28dddb6bd3cc, λb8493bfb9866, λe0f022dc61e9, λdb857b2308b6);
  }
}
