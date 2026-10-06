import λ93733e544c83 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/atlas/@ra0c56fac425aa0db70d01a58!.js";

import { headerEntries as λ8aef0df1d207, headerRecord as λ2a6c715cbaff } from "./@rcf70f1f99cfedb208df1b0a0!.js";

export default class Gu extends λ93733e544c83 {
  async request(λ93733e544c83, λ428fd7df4381, λfa2b8c84833f, λ20b897683697, λef1177a03733) {
    const λ62d3caae76fb = await super.request(λ93733e544c83, λ428fd7df4381, λfa2b8c84833f, λ2a6c715cbaff(λ20b897683697), λef1177a03733);
    return {
      ...λ62d3caae76fb,
      headers: λ8aef0df1d207(λ62d3caae76fb.headers)
    };
  }
  connect(λ93733e544c83, λ8aef0df1d207, λ428fd7df4381, λfa2b8c84833f, λ20b897683697, λef1177a03733, λ62d3caae76fb) {
    return super.connect(λ93733e544c83, λ8aef0df1d207, λ2a6c715cbaff(λ428fd7df4381), λfa2b8c84833f, λ20b897683697, λef1177a03733, λ62d3caae76fb);
  }
}
