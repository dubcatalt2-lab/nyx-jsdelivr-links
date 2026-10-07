import λe68660de7f95 from "\x2e\x2f\x40\x72\x34\x65\x31\x32\x61\x36\x63\x63\x66\x34\x63\x61\x62\x37\x31\x62\x65\x64\x34\x62\x61\x39\x61\x32\x21\x2e\x6a\x73";

import { headerEntries as λ37ae4452260b } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x3c892e_0 extends λe68660de7f95 {
  async request(λe68660de7f95, λ4a71944ac5c9, λf87c7b3cfdd1, λ861aa2e5e430, λ1f53e0a660f4) {
    const λ27d37d4b6de2 = await super.request(λe68660de7f95, λ4a71944ac5c9, λf87c7b3cfdd1, λ37ae4452260b(λ861aa2e5e430), λ1f53e0a660f4);
    return {
      ...λ27d37d4b6de2,
      headers: λ37ae4452260b(λ27d37d4b6de2.headers)
    };
  }
  connect(λe68660de7f95, λ4a71944ac5c9, λf87c7b3cfdd1, λ861aa2e5e430, λ1f53e0a660f4, λ27d37d4b6de2, λ6dde41725c0e) {
    return super.connect(λe68660de7f95, λ4a71944ac5c9, λ37ae4452260b(λf87c7b3cfdd1), λ861aa2e5e430, λ1f53e0a660f4, λ27d37d4b6de2, λ6dde41725c0e);
  }
}
