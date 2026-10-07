import λea819891df6a from "\x2e\x2f\x40\x72\x66\x63\x63\x35\x39\x66\x31\x39\x66\x39\x30\x34\x62\x39\x64\x35\x33\x39\x34\x39\x34\x32\x65\x38\x21\x2e\x6a\x73";

import { headerEntries as λcfd95a0a375c, headerRecord as λ477202e5ddf3 } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x127b89_3 extends λea819891df6a {
  async request(λea819891df6a, λe9aab6a21a19, λ5009769a8ac2, λ8479baad1696, λa4d8386fdb46) {
    const λcffd6abdf7da = await super.request(λea819891df6a, λe9aab6a21a19, λ5009769a8ac2, λcfd95a0a375c(λ8479baad1696), λa4d8386fdb46), λdd1ab976004f = λ477202e5ddf3(λcffd6abdf7da.headers);
    return {
      ...λcffd6abdf7da,
      headers: λdd1ab976004f,
      rawHeaders: λdd1ab976004f
    };
  }
  connect(λea819891df6a, λ477202e5ddf3, λe9aab6a21a19, λ5009769a8ac2, λ8479baad1696, λa4d8386fdb46, λcffd6abdf7da) {
    return super.connect(λea819891df6a, λ477202e5ddf3, λcfd95a0a375c(λe9aab6a21a19), λ5009769a8ac2, λ8479baad1696, λa4d8386fdb46, λcffd6abdf7da);
  }
}
