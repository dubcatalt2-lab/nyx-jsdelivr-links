import λ757e659f8cfb from "./@r4e12a6ccf4cab71bed4ba9a2!.mjs";

import { headerEntries as λ2eb91af19e3e, headerRecord as λ5cd7028f66c9 } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Ku extends λ757e659f8cfb {
  async request(λ757e659f8cfb, λ6dcacdbccd98, λb79d19105e8b, λ5aefcd8f3ae2, λ70ed0eabdbb8) {
    const λb37139a168da = await super.request(λ757e659f8cfb, λ6dcacdbccd98, λb79d19105e8b, λ2eb91af19e3e(λ5aefcd8f3ae2), λ70ed0eabdbb8), λ67a85e3c3ec6 = λ5cd7028f66c9(λb37139a168da.headers);
    return {
      ...λb37139a168da,
      headers: λ67a85e3c3ec6,
      rawHeaders: λ67a85e3c3ec6
    };
  }
  connect(λ757e659f8cfb, λ5cd7028f66c9, λ6dcacdbccd98, λb79d19105e8b, λ5aefcd8f3ae2, λ70ed0eabdbb8, λb37139a168da) {
    return super.connect(λ757e659f8cfb, λ5cd7028f66c9, λ2eb91af19e3e(λ6dcacdbccd98), λb79d19105e8b, λ5aefcd8f3ae2, λ70ed0eabdbb8, λb37139a168da);
  }
}
