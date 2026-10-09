import λ59cd0c0fa022 from "\x2e\x2f\x6c\x69\x62\x63\x75\x72\x6c\x2d\x63\x6c\x69\x65\x6e\x74\x2e\x6a\x73";

import { headerEntries as λ416048f52cfb } from "\x2e\x2f\x68\x65\x61\x64\x65\x72\x2d\x75\x74\x69\x6c\x73\x2e\x6a\x73";

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
