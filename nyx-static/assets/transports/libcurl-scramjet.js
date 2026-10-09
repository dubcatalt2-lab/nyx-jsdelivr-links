import λ59cd0c0fa022 from "\x2e\x2f\x40\x72\x38\x39\x32\x63\x39\x61\x65\x66\x39\x65\x36\x35\x61\x66\x61\x35\x33\x62\x33\x61\x35\x65\x37\x37\x21\x2e\x6a\x73";

import { headerEntries as λ416048f52cfb } from "\x2e\x2f\x40\x72\x34\x61\x39\x37\x61\x30\x65\x63\x64\x61\x61\x64\x31\x66\x32\x36\x66\x36\x39\x66\x36\x61\x63\x36\x21\x2e\x6a\x73";

export default class _0x3c892e_2 extends λ59cd0c0fa022 {
  async request(λ59cd0c0fa022, λf1bc17cd0669, λ9f905d43f100, λ68e6fabe5da9, λa0a4dba0995d) {
    const λ12613e4dd87b = await super.request(λ59cd0c0fa022, λf1bc17cd0669, λ9f905d43f100, λ416048f52cfb(λ68e6fabe5da9), λa0a4dba0995d);
    return {
      ...λ12613e4dd87b,
      headers: λ416048f52cfb(λ12613e4dd87b.headers)
    };
  }
  connect(λ59cd0c0fa022, λf1bc17cd0669, λ9f905d43f100, λ68e6fabe5da9, λa0a4dba0995d, λ12613e4dd87b, λ80411df4dfd5) {
    return super.connect(λ59cd0c0fa022, λf1bc17cd0669, λ416048f52cfb(λ9f905d43f100), λ68e6fabe5da9, λa0a4dba0995d, λ12613e4dd87b, λ80411df4dfd5);
  }
}
