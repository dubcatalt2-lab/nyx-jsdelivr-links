import λ7d43226f865e from "\x2e\x2f\x6c\x69\x62\x63\x75\x72\x6c\x2d\x63\x6c\x69\x65\x6e\x74\x2e\x6a\x73";

import { headerEntries as λ9dcb1d37f68f } from "\x2e\x2f\x68\x65\x61\x64\x65\x72\x2d\x75\x74\x69\x6c\x73\x2e\x6a\x73";

export default class _0x3c892e_2 extends λ7d43226f865e {
  async request(λ7d43226f865e, λ2f56a0dce7dc, λe6d3b9f456db, λ49cb12997605, λf167148d3f38) {
    const λcec944036082 = await super.request(λ7d43226f865e, λ2f56a0dce7dc, λe6d3b9f456db, λ9dcb1d37f68f(λ49cb12997605), λf167148d3f38);
    return {
      ...λcec944036082,
      headers: λ9dcb1d37f68f(λcec944036082.headers)
    };
  }
  connect(λ7d43226f865e, λ2f56a0dce7dc, λe6d3b9f456db, λ49cb12997605, λf167148d3f38, λcec944036082, λ89ad11f500fe) {
    return super.connect(λ7d43226f865e, λ2f56a0dce7dc, λ9dcb1d37f68f(λe6d3b9f456db), λ49cb12997605, λf167148d3f38, λcec944036082, λ89ad11f500fe);
  }
}
