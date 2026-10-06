import λ3085f42eca75 from "./@r4e12a6ccf4cab71bed4ba9a2!.js";

import { headerEntries as λdca8ae0fb14e, headerRecord as λf640bd1decd1 } from "./@r58e1303ec81b4e613dc28874!.js";

export default class Ku extends λ3085f42eca75 {
  async request(λ3085f42eca75, λ89c5b594b741, λ0c63ebfb9aac, λ233f1abe4b30, λ2c28ac8cb448) {
    const λe4def0d4160e = await super.request(λ3085f42eca75, λ89c5b594b741, λ0c63ebfb9aac, λdca8ae0fb14e(λ233f1abe4b30), λ2c28ac8cb448), λ25ab8807aeec = λf640bd1decd1(λe4def0d4160e.headers);
    return {
      ...λe4def0d4160e,
      headers: λ25ab8807aeec,
      rawHeaders: λ25ab8807aeec
    };
  }
  connect(λ3085f42eca75, λf640bd1decd1, λ89c5b594b741, λ0c63ebfb9aac, λ233f1abe4b30, λ2c28ac8cb448, λe4def0d4160e) {
    return super.connect(λ3085f42eca75, λf640bd1decd1, λdca8ae0fb14e(λ89c5b594b741), λ0c63ebfb9aac, λ233f1abe4b30, λ2c28ac8cb448, λe4def0d4160e);
  }
}
