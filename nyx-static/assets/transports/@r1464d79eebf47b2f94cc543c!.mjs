import λb2547dcb6c92 from "./@rfcc59f19f904b9d5394942e8!.mjs";

import { headerEntries as λ3e251a7599d8 } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Yu extends λb2547dcb6c92 {
  async request(λb2547dcb6c92, λ767397f3f6fd, λ225bf528c136, λ8eda7b336410, λ1ed48aa93ea2) {
    const λ1894bfa43f87 = await super.request(λb2547dcb6c92, λ767397f3f6fd, λ225bf528c136, λ3e251a7599d8(λ8eda7b336410), λ1ed48aa93ea2);
    return {
      ...λ1894bfa43f87,
      headers: λ3e251a7599d8(λ1894bfa43f87.headers)
    };
  }
  connect(λb2547dcb6c92, λ767397f3f6fd, λ225bf528c136, λ8eda7b336410, λ1ed48aa93ea2, λ1894bfa43f87, λaedd7f27e4c4) {
    return super.connect(λb2547dcb6c92, λ767397f3f6fd, λ3e251a7599d8(λ225bf528c136), λ8eda7b336410, λ1ed48aa93ea2, λ1894bfa43f87, λaedd7f27e4c4);
  }
}
