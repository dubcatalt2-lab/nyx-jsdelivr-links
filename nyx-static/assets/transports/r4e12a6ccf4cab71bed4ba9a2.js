import λ72f87310d12d from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6c\x69\x62\x63\x75\x72\x6c\x2f\x69\x6e\x64\x65\x78\x2e\x6d\x6f\x64\x75\x6c\x65\x2d\x61\x36\x63\x38\x36\x36\x36\x38\x61\x30\x62\x39\x2e\x6a\x73";

import { preserveTransferErrors as λd59ee84d5713, requestWithTransferRetry as λ76b67a355ccc } from "\x2e\x2f\x6c\x69\x62\x63\x75\x72\x6c\x2d\x72\x65\x73\x70\x6f\x6e\x73\x65\x2e\x6a\x73";

import { headerEntries as λaed2ffd99832 } from "\x2e\x2f\x68\x65\x61\x64\x65\x72\x2d\x75\x74\x69\x6c\x73\x2e\x6a\x73";

export default class _0x7765b3_4 extends λ72f87310d12d {
  async init() {
    await super.init(), λd59ee84d5713(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ72f87310d12d, λd59ee84d5713, λ01676228c807, λc5b5faa0237e, λ3e0db869c754) {
    return λ76b67a355ccc(async () => {
      const λ76b67a355ccc = await super.request(λ72f87310d12d, λd59ee84d5713, λ01676228c807, λc5b5faa0237e, λ3e0db869c754);
      return {
        ...λ76b67a355ccc,
        headers: λaed2ffd99832(λ76b67a355ccc.headers)
      };
    }, {
      method: λd59ee84d5713,
      body: λ01676228c807,
      signal: λ3e0db869c754,
      budget: this.responseBudget
    });
  }
}
