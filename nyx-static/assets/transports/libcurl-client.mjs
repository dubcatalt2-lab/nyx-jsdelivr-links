import λ4e7d7b8499e7 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/libcurl/index.mjs";

import { preserveTransferErrors as λ9f255a4971d1, requestWithTransferRetry as λ346b34a97173 } from "./libcurl-response.mjs";

import { headerEntries as λ2c0f98f3b394 } from "./header-utils.mjs";

export default class Vu extends λ4e7d7b8499e7 {
  async init() {
    await super.init(), λ9f255a4971d1(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ4e7d7b8499e7, λ9f255a4971d1, λ33fbc65e65a8, λ83be865bda1d, λa0b7e490621a) {
    return λ346b34a97173(async () => {
      const λ346b34a97173 = await super.request(λ4e7d7b8499e7, λ9f255a4971d1, λ33fbc65e65a8, λ83be865bda1d, λa0b7e490621a);
      return {
        ...λ346b34a97173,
        headers: λ2c0f98f3b394(λ346b34a97173.headers)
      };
    }, {
      method: λ9f255a4971d1,
      body: λ33fbc65e65a8,
      signal: λa0b7e490621a,
      budget: this.responseBudget
    });
  }
}
