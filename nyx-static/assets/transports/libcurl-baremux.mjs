import λ61f324ec5378 from "./libcurl-client.mjs";

import { headerEntries as λdac307a02443, headerRecord as λb2165f6c0d86 } from "./header-utils.mjs";

export default class Ku extends λ61f324ec5378 {
  async request(λ61f324ec5378, λ08115d7b3af2, λ6b4eb2af55b7, λ9b9d0476d94b, λ4d648305e95b) {
    const λfdc51e35d1a6 = await super.request(λ61f324ec5378, λ08115d7b3af2, λ6b4eb2af55b7, λdac307a02443(λ9b9d0476d94b), λ4d648305e95b), λ61edd0161e33 = λb2165f6c0d86(λfdc51e35d1a6.headers);
    return {
      ...λfdc51e35d1a6,
      headers: λ61edd0161e33,
      rawHeaders: λ61edd0161e33
    };
  }
  connect(λ61f324ec5378, λb2165f6c0d86, λ08115d7b3af2, λ6b4eb2af55b7, λ9b9d0476d94b, λ4d648305e95b, λfdc51e35d1a6) {
    return super.connect(λ61f324ec5378, λb2165f6c0d86, λdac307a02443(λ08115d7b3af2), λ6b4eb2af55b7, λ9b9d0476d94b, λ4d648305e95b, λfdc51e35d1a6);
  }
}
