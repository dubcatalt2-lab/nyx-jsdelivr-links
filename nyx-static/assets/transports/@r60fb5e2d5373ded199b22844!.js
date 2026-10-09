import λ89664143ec0c from "\x2e\x2f\x40\x72\x34\x65\x31\x32\x61\x36\x63\x63\x66\x34\x63\x61\x62\x37\x31\x62\x65\x64\x34\x62\x61\x39\x61\x32\x21\x2e\x6a\x73";

import { headerEntries as λ3bae3878d9cc, headerRecord as λ0dba673bb46f } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x127b89_3 extends λ89664143ec0c {
  async request(λ89664143ec0c, λ7794eacf470e, λcdbef9196461, λ2eb27d04aa07, λe675e2f68a47) {
    const λ44126ce7f49d = await super.request(λ89664143ec0c, λ7794eacf470e, λcdbef9196461, λ3bae3878d9cc(λ2eb27d04aa07), λe675e2f68a47), λ13e7d56329ed = λ0dba673bb46f(λ44126ce7f49d.headers);
    return {
      ...λ44126ce7f49d,
      headers: λ13e7d56329ed,
      rawHeaders: λ13e7d56329ed
    };
  }
  connect(λ89664143ec0c, λ0dba673bb46f, λ7794eacf470e, λcdbef9196461, λ2eb27d04aa07, λe675e2f68a47, λ44126ce7f49d) {
    return super.connect(λ89664143ec0c, λ0dba673bb46f, λ3bae3878d9cc(λ7794eacf470e), λcdbef9196461, λ2eb27d04aa07, λe675e2f68a47, λ44126ce7f49d);
  }
}
