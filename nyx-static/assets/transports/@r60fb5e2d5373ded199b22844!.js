import λ4d4356d5e160 from "\x2e\x2f\x40\x72\x34\x65\x31\x32\x61\x36\x63\x63\x66\x34\x63\x61\x62\x37\x31\x62\x65\x64\x34\x62\x61\x39\x61\x32\x21\x2e\x6a\x73";

import { headerEntries as λb2bf9e0e9f21, headerRecord as λae9508e4bc41 } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x127b89_1 extends λ4d4356d5e160 {
  async request(λ4d4356d5e160, λa7a96eb0e578, λ401bff502996, λca9c76bd2f64, λ7e7b726615b1) {
    const λfc3bf1996fb1 = await super.request(λ4d4356d5e160, λa7a96eb0e578, λ401bff502996, λb2bf9e0e9f21(λca9c76bd2f64), λ7e7b726615b1), λ943f857e30f2 = λae9508e4bc41(λfc3bf1996fb1.headers);
    return {
      ...λfc3bf1996fb1,
      headers: λ943f857e30f2,
      rawHeaders: λ943f857e30f2
    };
  }
  connect(λ4d4356d5e160, λae9508e4bc41, λa7a96eb0e578, λ401bff502996, λca9c76bd2f64, λ7e7b726615b1, λfc3bf1996fb1) {
    return super.connect(λ4d4356d5e160, λae9508e4bc41, λb2bf9e0e9f21(λa7a96eb0e578), λ401bff502996, λca9c76bd2f64, λ7e7b726615b1, λfc3bf1996fb1);
  }
}
