import λ30e3efc460b4 from "\x2e\x2f\x40\x72\x66\x63\x63\x35\x39\x66\x31\x39\x66\x39\x30\x34\x62\x39\x64\x35\x33\x39\x34\x39\x34\x32\x65\x38\x21\x2e\x6a\x73";

import { headerEntries as λeb9602a32ef8, headerRecord as λb60768e81c05 } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x127b89_3 extends λ30e3efc460b4 {
  async request(λ30e3efc460b4, λ6f4b173d7b02, λ481ea7b7c492, λbe71dec572b6, λ23872e0948b5) {
    const λ6b08319a1b16 = await super.request(λ30e3efc460b4, λ6f4b173d7b02, λ481ea7b7c492, λeb9602a32ef8(λbe71dec572b6), λ23872e0948b5), λ27e60d8e71ee = λb60768e81c05(λ6b08319a1b16.headers);
    return {
      ...λ6b08319a1b16,
      headers: λ27e60d8e71ee,
      rawHeaders: λ27e60d8e71ee
    };
  }
  connect(λ30e3efc460b4, λb60768e81c05, λ6f4b173d7b02, λ481ea7b7c492, λbe71dec572b6, λ23872e0948b5, λ6b08319a1b16) {
    return super.connect(λ30e3efc460b4, λb60768e81c05, λeb9602a32ef8(λ6f4b173d7b02), λ481ea7b7c492, λbe71dec572b6, λ23872e0948b5, λ6b08319a1b16);
  }
}
