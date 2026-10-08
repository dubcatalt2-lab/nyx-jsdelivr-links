import λf7728e9e4aea from "\x2e\x2f\x40\x72\x34\x65\x31\x32\x61\x36\x63\x63\x66\x34\x63\x61\x62\x37\x31\x62\x65\x64\x34\x62\x61\x39\x61\x32\x21\x2e\x6a\x73";

import { headerEntries as λ794c4266c81c, headerRecord as λ4049278d7321 } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x127b89_3 extends λf7728e9e4aea {
  async request(λf7728e9e4aea, λa7edae0b3d7e, λefd707f50fff, λ99ff03efaed8, λc75a1cf5a498) {
    const λfd5e45b942aa = await super.request(λf7728e9e4aea, λa7edae0b3d7e, λefd707f50fff, λ794c4266c81c(λ99ff03efaed8), λc75a1cf5a498), λ1792baf8943c = λ4049278d7321(λfd5e45b942aa.headers);
    return {
      ...λfd5e45b942aa,
      headers: λ1792baf8943c,
      rawHeaders: λ1792baf8943c
    };
  }
  connect(λf7728e9e4aea, λ4049278d7321, λa7edae0b3d7e, λefd707f50fff, λ99ff03efaed8, λc75a1cf5a498, λfd5e45b942aa) {
    return super.connect(λf7728e9e4aea, λ4049278d7321, λ794c4266c81c(λa7edae0b3d7e), λefd707f50fff, λ99ff03efaed8, λc75a1cf5a498, λfd5e45b942aa);
  }
}
