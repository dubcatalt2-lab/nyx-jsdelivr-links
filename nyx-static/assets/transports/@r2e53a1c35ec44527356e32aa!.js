import λ9047526f4e1a from "\x2e\x2f\x40\x72\x66\x63\x63\x35\x39\x66\x31\x39\x66\x39\x30\x34\x62\x39\x64\x35\x33\x39\x34\x39\x34\x32\x65\x38\x21\x2e\x6a\x73";

import { headerEntries as λafbf868f93d3, headerRecord as λf3da9dbf0c87 } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x127b89_1 extends λ9047526f4e1a {
  async request(λ9047526f4e1a, λ4e218dedf7ab, λ8c66a41baae3, λa5659d29c387, λc02f354c0a04) {
    const λ31a4e3421fb4 = await super.request(λ9047526f4e1a, λ4e218dedf7ab, λ8c66a41baae3, λafbf868f93d3(λa5659d29c387), λc02f354c0a04), λ6a24ceb11c9e = λf3da9dbf0c87(λ31a4e3421fb4.headers);
    return {
      ...λ31a4e3421fb4,
      headers: λ6a24ceb11c9e,
      rawHeaders: λ6a24ceb11c9e
    };
  }
  connect(λ9047526f4e1a, λf3da9dbf0c87, λ4e218dedf7ab, λ8c66a41baae3, λa5659d29c387, λc02f354c0a04, λ31a4e3421fb4) {
    return super.connect(λ9047526f4e1a, λf3da9dbf0c87, λafbf868f93d3(λ4e218dedf7ab), λ8c66a41baae3, λa5659d29c387, λc02f354c0a04, λ31a4e3421fb4);
  }
}
