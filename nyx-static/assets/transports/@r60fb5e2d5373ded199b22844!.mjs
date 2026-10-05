import λf0f77ad2ef30 from "./@r4e12a6ccf4cab71bed4ba9a2!.mjs";

import { headerEntries as λ437ddcae031d, headerRecord as λafdb0dacd7fe } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Ku extends λf0f77ad2ef30 {
  async request(λf0f77ad2ef30, λ65eefdbfe853, λ351da1ec1a05, λ25a892b69af0, λ9dccbd9b6607) {
    const λ0629ab931fb1 = await super.request(λf0f77ad2ef30, λ65eefdbfe853, λ351da1ec1a05, λ437ddcae031d(λ25a892b69af0), λ9dccbd9b6607), λa4b301281d04 = λafdb0dacd7fe(λ0629ab931fb1.headers);
    return {
      ...λ0629ab931fb1,
      headers: λa4b301281d04,
      rawHeaders: λa4b301281d04
    };
  }
  connect(λf0f77ad2ef30, λafdb0dacd7fe, λ65eefdbfe853, λ351da1ec1a05, λ25a892b69af0, λ9dccbd9b6607, λ0629ab931fb1) {
    return super.connect(λf0f77ad2ef30, λafdb0dacd7fe, λ437ddcae031d(λ65eefdbfe853), λ351da1ec1a05, λ25a892b69af0, λ9dccbd9b6607, λ0629ab931fb1);
  }
}
