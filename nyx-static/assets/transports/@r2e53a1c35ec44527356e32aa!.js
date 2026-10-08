import λf137e5233668 from "\x2e\x2f\x40\x72\x66\x63\x63\x35\x39\x66\x31\x39\x66\x39\x30\x34\x62\x39\x64\x35\x33\x39\x34\x39\x34\x32\x65\x38\x21\x2e\x6a\x73";

import { headerEntries as λbb64f3d5348f, headerRecord as λf2d502efccb4 } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x127b89_3 extends λf137e5233668 {
  async request(λf137e5233668, λ06ba775f3f33, λe15dfe256aa5, λdf39a43f1862, λb9b731eaf4cb) {
    const λb09a861a522b = await super.request(λf137e5233668, λ06ba775f3f33, λe15dfe256aa5, λbb64f3d5348f(λdf39a43f1862), λb9b731eaf4cb), λ89de06a22156 = λf2d502efccb4(λb09a861a522b.headers);
    return {
      ...λb09a861a522b,
      headers: λ89de06a22156,
      rawHeaders: λ89de06a22156
    };
  }
  connect(λf137e5233668, λf2d502efccb4, λ06ba775f3f33, λe15dfe256aa5, λdf39a43f1862, λb9b731eaf4cb, λb09a861a522b) {
    return super.connect(λf137e5233668, λf2d502efccb4, λbb64f3d5348f(λ06ba775f3f33), λe15dfe256aa5, λdf39a43f1862, λb9b731eaf4cb, λb09a861a522b);
  }
}
