import λc25f5b652893 from "\x2e\x2f\x40\x72\x34\x65\x31\x32\x61\x36\x63\x63\x66\x34\x63\x61\x62\x37\x31\x62\x65\x64\x34\x62\x61\x39\x61\x32\x21\x2e\x6a\x73";

import { headerEntries as λ4f6fc24bc350, headerRecord as λ0ddcdfdc3cf4 } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x127b89_3 extends λc25f5b652893 {
  async request(λc25f5b652893, λ3cb99313a98a, λ1a28708bfae7, λ9472690e7232, λ1504044d77ca) {
    const λ6c9e3091508c = await super.request(λc25f5b652893, λ3cb99313a98a, λ1a28708bfae7, λ4f6fc24bc350(λ9472690e7232), λ1504044d77ca), λa8e2fc93f741 = λ0ddcdfdc3cf4(λ6c9e3091508c.headers);
    return {
      ...λ6c9e3091508c,
      headers: λa8e2fc93f741,
      rawHeaders: λa8e2fc93f741
    };
  }
  connect(λc25f5b652893, λ0ddcdfdc3cf4, λ3cb99313a98a, λ1a28708bfae7, λ9472690e7232, λ1504044d77ca, λ6c9e3091508c) {
    return super.connect(λc25f5b652893, λ0ddcdfdc3cf4, λ4f6fc24bc350(λ3cb99313a98a), λ1a28708bfae7, λ9472690e7232, λ1504044d77ca, λ6c9e3091508c);
  }
}
