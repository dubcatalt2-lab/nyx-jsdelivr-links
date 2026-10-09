import λ8c02b5f860c2 from "\x2e\x2f\x40\x72\x34\x65\x31\x32\x61\x36\x63\x63\x66\x34\x63\x61\x62\x37\x31\x62\x65\x64\x34\x62\x61\x39\x61\x32\x21\x2e\x6a\x73";

import { headerEntries as λ685d6dbaa3ed } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x3c892e_2 extends λ8c02b5f860c2 {
  async request(λ8c02b5f860c2, λ16b613aeb9f0, λ0e57719af5b7, λ538150f8e9dd, λ04fd6877e58f) {
    const λ2848c2431a25 = await super.request(λ8c02b5f860c2, λ16b613aeb9f0, λ0e57719af5b7, λ685d6dbaa3ed(λ538150f8e9dd), λ04fd6877e58f);
    return {
      ...λ2848c2431a25,
      headers: λ685d6dbaa3ed(λ2848c2431a25.headers)
    };
  }
  connect(λ8c02b5f860c2, λ16b613aeb9f0, λ0e57719af5b7, λ538150f8e9dd, λ04fd6877e58f, λ2848c2431a25, λe2994c5b0058) {
    return super.connect(λ8c02b5f860c2, λ16b613aeb9f0, λ685d6dbaa3ed(λ0e57719af5b7), λ538150f8e9dd, λ04fd6877e58f, λ2848c2431a25, λe2994c5b0058);
  }
}
