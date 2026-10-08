import λ46034115d95c from "\x2e\x2f\x40\x72\x38\x39\x32\x63\x39\x61\x65\x66\x39\x65\x36\x35\x61\x66\x61\x35\x33\x62\x33\x61\x35\x65\x37\x37\x21\x2e\x6a\x73";

import { headerEntries as λdd37ba44beeb } from "\x2e\x2f\x40\x72\x34\x61\x39\x37\x61\x30\x65\x63\x64\x61\x61\x64\x31\x66\x32\x36\x66\x36\x39\x66\x36\x61\x63\x36\x21\x2e\x6a\x73";

export default class _0x3c892e_2 extends λ46034115d95c {
  async request(λ46034115d95c, λf1f5435ae4a4, λ0c619ef98dec, λ73d89d4b15a7, λfdf4712d547e) {
    const λ2367b91000b7 = await super.request(λ46034115d95c, λf1f5435ae4a4, λ0c619ef98dec, λdd37ba44beeb(λ73d89d4b15a7), λfdf4712d547e);
    return {
      ...λ2367b91000b7,
      headers: λdd37ba44beeb(λ2367b91000b7.headers)
    };
  }
  connect(λ46034115d95c, λf1f5435ae4a4, λ0c619ef98dec, λ73d89d4b15a7, λfdf4712d547e, λ2367b91000b7, λ0e4b17893358) {
    return super.connect(λ46034115d95c, λf1f5435ae4a4, λdd37ba44beeb(λ0c619ef98dec), λ73d89d4b15a7, λfdf4712d547e, λ2367b91000b7, λ0e4b17893358);
  }
}
