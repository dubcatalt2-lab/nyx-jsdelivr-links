import λdd5e990268ba from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6c\x69\x62\x63\x75\x72\x6c\x2f\x40\x72\x38\x36\x32\x64\x32\x39\x33\x36\x31\x35\x36\x31\x36\x33\x33\x62\x63\x36\x64\x37\x62\x31\x65\x33\x21\x2e\x6a\x73";

import { preserveTransferErrors as λ0b7242e20909, requestWithTransferRetry as λb7d1709bf34e } from "\x2e\x2f\x40\x72\x62\x32\x62\x33\x30\x33\x30\x65\x65\x61\x63\x38\x30\x61\x31\x64\x34\x61\x65\x34\x62\x33\x66\x61\x21\x2e\x6a\x73";

import { headerEntries as λb258a361f047 } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x7765b3_4 extends λdd5e990268ba {
  async init() {
    await super.init(), λ0b7242e20909(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λdd5e990268ba, λ0b7242e20909, λ62739159168b, λec1a5e457f55, λa0a051213f8f) {
    return λb7d1709bf34e(async () => {
      const λb7d1709bf34e = await super.request(λdd5e990268ba, λ0b7242e20909, λ62739159168b, λec1a5e457f55, λa0a051213f8f);
      return {
        ...λb7d1709bf34e,
        headers: λb258a361f047(λb7d1709bf34e.headers)
      };
    }, {
      method: λ0b7242e20909,
      body: λ62739159168b,
      signal: λa0a051213f8f,
      budget: this.responseBudget
    });
  }
}
