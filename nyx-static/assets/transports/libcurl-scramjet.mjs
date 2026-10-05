import λ4c41cef2ef0a from "./libcurl-client.mjs";

import { headerEntries as λfd392ac3a815 } from "./header-utils.mjs";

export default class Yu extends λ4c41cef2ef0a {
  async request(λ4c41cef2ef0a, λ990970f14192, λ4c27b21f6f0b, λ59255179c03c, λef301a915910) {
    const λ0ef01b64ab0d = await super.request(λ4c41cef2ef0a, λ990970f14192, λ4c27b21f6f0b, λfd392ac3a815(λ59255179c03c), λef301a915910);
    return {
      ...λ0ef01b64ab0d,
      headers: λfd392ac3a815(λ0ef01b64ab0d.headers)
    };
  }
  connect(λ4c41cef2ef0a, λ990970f14192, λ4c27b21f6f0b, λ59255179c03c, λef301a915910, λ0ef01b64ab0d, λ8d331b9b092c) {
    return super.connect(λ4c41cef2ef0a, λ990970f14192, λfd392ac3a815(λ4c27b21f6f0b), λ59255179c03c, λef301a915910, λ0ef01b64ab0d, λ8d331b9b092c);
  }
}
