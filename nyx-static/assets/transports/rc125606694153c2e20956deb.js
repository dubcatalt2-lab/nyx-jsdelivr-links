import λ46034115d95c from "\x2e\x2f\x6c\x69\x62\x63\x75\x72\x6c\x2d\x63\x6c\x69\x65\x6e\x74\x2e\x6a\x73";

import { headerEntries as λdd37ba44beeb } from "\x2e\x2f\x68\x65\x61\x64\x65\x72\x2d\x75\x74\x69\x6c\x73\x2e\x6a\x73";

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
