import λ1590a659776a from "./@r4e12a6ccf4cab71bed4ba9a2!.mjs";

import { headerEntries as λ75291da289f2 } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Yu extends λ1590a659776a {
  async request(λ1590a659776a, λ3a33a6fe410f, λb207a03aa46d, λ83c96a451bcc, λ2cbc0d69db39) {
    const λa0fc781ce881 = await super.request(λ1590a659776a, λ3a33a6fe410f, λb207a03aa46d, λ75291da289f2(λ83c96a451bcc), λ2cbc0d69db39);
    return {
      ...λa0fc781ce881,
      headers: λ75291da289f2(λa0fc781ce881.headers)
    };
  }
  connect(λ1590a659776a, λ3a33a6fe410f, λb207a03aa46d, λ83c96a451bcc, λ2cbc0d69db39, λa0fc781ce881, λe2c303e29978) {
    return super.connect(λ1590a659776a, λ3a33a6fe410f, λ75291da289f2(λb207a03aa46d), λ83c96a451bcc, λ2cbc0d69db39, λa0fc781ce881, λe2c303e29978);
  }
}
