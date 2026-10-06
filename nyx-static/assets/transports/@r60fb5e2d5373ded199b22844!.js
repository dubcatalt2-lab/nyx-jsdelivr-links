import λb584cb783a15 from "./@r4e12a6ccf4cab71bed4ba9a2!.js";

import { headerEntries as λb8ec4d417031, headerRecord as λ007a8322da6d } from "./@r58e1303ec81b4e613dc28874!.js";

export default class Ku extends λb584cb783a15 {
  async request(λb584cb783a15, λ8bb42ccde983, λa14722cdd256, λdb744a96a721, λ03f00f259d3c) {
    const λ9cc2abd6ab63 = await super.request(λb584cb783a15, λ8bb42ccde983, λa14722cdd256, λb8ec4d417031(λdb744a96a721), λ03f00f259d3c), λ7685731c9cdb = λ007a8322da6d(λ9cc2abd6ab63.headers);
    return {
      ...λ9cc2abd6ab63,
      headers: λ7685731c9cdb,
      rawHeaders: λ7685731c9cdb
    };
  }
  connect(λb584cb783a15, λ007a8322da6d, λ8bb42ccde983, λa14722cdd256, λdb744a96a721, λ03f00f259d3c, λ9cc2abd6ab63) {
    return super.connect(λb584cb783a15, λ007a8322da6d, λb8ec4d417031(λ8bb42ccde983), λa14722cdd256, λdb744a96a721, λ03f00f259d3c, λ9cc2abd6ab63);
  }
}
