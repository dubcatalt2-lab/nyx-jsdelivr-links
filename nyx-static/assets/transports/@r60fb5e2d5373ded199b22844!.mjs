import λbc2f74047b95 from "./@r4e12a6ccf4cab71bed4ba9a2!.mjs";

import { headerEntries as λ8ef05ab358b4, headerRecord as λe918ab158db1 } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Ku extends λbc2f74047b95 {
  async request(λbc2f74047b95, λ5c3b48d97c98, λ543efae8c434, λa61082853900, λ315b352a73b5) {
    const λ702af98c4076 = await super.request(λbc2f74047b95, λ5c3b48d97c98, λ543efae8c434, λ8ef05ab358b4(λa61082853900), λ315b352a73b5), λ5941019e3a08 = λe918ab158db1(λ702af98c4076.headers);
    return {
      ...λ702af98c4076,
      headers: λ5941019e3a08,
      rawHeaders: λ5941019e3a08
    };
  }
  connect(λbc2f74047b95, λe918ab158db1, λ5c3b48d97c98, λ543efae8c434, λa61082853900, λ315b352a73b5, λ702af98c4076) {
    return super.connect(λbc2f74047b95, λe918ab158db1, λ8ef05ab358b4(λ5c3b48d97c98), λ543efae8c434, λa61082853900, λ315b352a73b5, λ702af98c4076);
  }
}
