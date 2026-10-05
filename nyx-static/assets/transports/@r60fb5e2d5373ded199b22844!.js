import λ6ca4a2f2de8b from "./@r4e12a6ccf4cab71bed4ba9a2!.js";

import { headerEntries as λde9956f4a319, headerRecord as λ788e82a52c27 } from "./@r58e1303ec81b4e613dc28874!.js";

export default class Ku extends λ6ca4a2f2de8b {
  async request(λ6ca4a2f2de8b, λ74146d675af1, λ8575e9412961, λ29e2d5f08ae3, λ8d169c9bfdb3) {
    const λ2959de70bd11 = await super.request(λ6ca4a2f2de8b, λ74146d675af1, λ8575e9412961, λde9956f4a319(λ29e2d5f08ae3), λ8d169c9bfdb3), λ115a1ec30ff8 = λ788e82a52c27(λ2959de70bd11.headers);
    return {
      ...λ2959de70bd11,
      headers: λ115a1ec30ff8,
      rawHeaders: λ115a1ec30ff8
    };
  }
  connect(λ6ca4a2f2de8b, λ788e82a52c27, λ74146d675af1, λ8575e9412961, λ29e2d5f08ae3, λ8d169c9bfdb3, λ2959de70bd11) {
    return super.connect(λ6ca4a2f2de8b, λ788e82a52c27, λde9956f4a319(λ74146d675af1), λ8575e9412961, λ29e2d5f08ae3, λ8d169c9bfdb3, λ2959de70bd11);
  }
}
