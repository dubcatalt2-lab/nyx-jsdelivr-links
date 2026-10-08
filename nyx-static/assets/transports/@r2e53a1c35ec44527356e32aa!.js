import λ87ae282a63e5 from "\x2e\x2f\x40\x72\x66\x63\x63\x35\x39\x66\x31\x39\x66\x39\x30\x34\x62\x39\x64\x35\x33\x39\x34\x39\x34\x32\x65\x38\x21\x2e\x6a\x73";

import { headerEntries as λb764de788c1a, headerRecord as λ279de119fd8b } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x127b89_3 extends λ87ae282a63e5 {
  async request(λ87ae282a63e5, λ59ed64c8547f, λ0b88bda6782b, λfd61b369a76c, λ2b628a19e5c9) {
    const λf84c9f965b02 = await super.request(λ87ae282a63e5, λ59ed64c8547f, λ0b88bda6782b, λb764de788c1a(λfd61b369a76c), λ2b628a19e5c9), λd1e5244fc6d2 = λ279de119fd8b(λf84c9f965b02.headers);
    return {
      ...λf84c9f965b02,
      headers: λd1e5244fc6d2,
      rawHeaders: λd1e5244fc6d2
    };
  }
  connect(λ87ae282a63e5, λ279de119fd8b, λ59ed64c8547f, λ0b88bda6782b, λfd61b369a76c, λ2b628a19e5c9, λf84c9f965b02) {
    return super.connect(λ87ae282a63e5, λ279de119fd8b, λb764de788c1a(λ59ed64c8547f), λ0b88bda6782b, λfd61b369a76c, λ2b628a19e5c9, λf84c9f965b02);
  }
}
