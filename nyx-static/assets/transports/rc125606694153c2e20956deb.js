import λ80cbe44327bb from "\x2e\x2f\x6c\x69\x62\x63\x75\x72\x6c\x2d\x63\x6c\x69\x65\x6e\x74\x2e\x6a\x73";

import { headerEntries as λ240b6c9ba210 } from "\x2e\x2f\x68\x65\x61\x64\x65\x72\x2d\x75\x74\x69\x6c\x73\x2e\x6a\x73";

export default class _0x3c892e_2 extends λ80cbe44327bb {
  async request(λ80cbe44327bb, λa880eb03ecff, λ26d974be4593, λa6b1b11ecd68, λaa053f565cb9) {
    const λf503d122a200 = await super.request(λ80cbe44327bb, λa880eb03ecff, λ26d974be4593, λ240b6c9ba210(λa6b1b11ecd68), λaa053f565cb9);
    return {
      ...λf503d122a200,
      headers: λ240b6c9ba210(λf503d122a200.headers)
    };
  }
  connect(λ80cbe44327bb, λa880eb03ecff, λ26d974be4593, λa6b1b11ecd68, λaa053f565cb9, λf503d122a200, λ8e5b9d6bda28) {
    return super.connect(λ80cbe44327bb, λa880eb03ecff, λ240b6c9ba210(λ26d974be4593), λa6b1b11ecd68, λaa053f565cb9, λf503d122a200, λ8e5b9d6bda28);
  }
}
