import λ740317270b0c from "\x2e\x2f\x40\x72\x38\x39\x32\x63\x39\x61\x65\x66\x39\x65\x36\x35\x61\x66\x61\x35\x33\x62\x33\x61\x35\x65\x37\x37\x21\x2e\x6a\x73";

import { headerEntries as λ027fbacacda0, headerRecord as λ270fe400aaa3 } from "\x2e\x2f\x40\x72\x34\x61\x39\x37\x61\x30\x65\x63\x64\x61\x61\x64\x31\x66\x32\x36\x66\x36\x39\x66\x36\x61\x63\x36\x21\x2e\x6a\x73";

export default class _0x127b89_1 extends λ740317270b0c {
  async request(λ740317270b0c, λ76238eb31f02, λ3ec27ed5b7b5, λ086a87588f78, λ117389ae8e25) {
    const λd60da2c9eb09 = await super.request(λ740317270b0c, λ76238eb31f02, λ3ec27ed5b7b5, λ027fbacacda0(λ086a87588f78), λ117389ae8e25), λ0bd2f4ee4775 = λ270fe400aaa3(λd60da2c9eb09.headers);
    return {
      ...λd60da2c9eb09,
      headers: λ0bd2f4ee4775,
      rawHeaders: λ0bd2f4ee4775
    };
  }
  connect(λ740317270b0c, λ270fe400aaa3, λ76238eb31f02, λ3ec27ed5b7b5, λ086a87588f78, λ117389ae8e25, λd60da2c9eb09) {
    return super.connect(λ740317270b0c, λ270fe400aaa3, λ027fbacacda0(λ76238eb31f02), λ3ec27ed5b7b5, λ086a87588f78, λ117389ae8e25, λd60da2c9eb09);
  }
}
