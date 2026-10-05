import λ97bdcd668220 from "./@r4e12a6ccf4cab71bed4ba9a2!.mjs";

import { headerEntries as λec66394b2cbd, headerRecord as λd9373a088503 } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Ku extends λ97bdcd668220 {
  async request(λ97bdcd668220, λ443d4e7ecc9f, λd411e49192a5, λb40e0b316f35, λb03b0a19ada8) {
    const λad6e79b1250a = await super.request(λ97bdcd668220, λ443d4e7ecc9f, λd411e49192a5, λec66394b2cbd(λb40e0b316f35), λb03b0a19ada8), λ3675b7513c5d = λd9373a088503(λad6e79b1250a.headers);
    return {
      ...λad6e79b1250a,
      headers: λ3675b7513c5d,
      rawHeaders: λ3675b7513c5d
    };
  }
  connect(λ97bdcd668220, λd9373a088503, λ443d4e7ecc9f, λd411e49192a5, λb40e0b316f35, λb03b0a19ada8, λad6e79b1250a) {
    return super.connect(λ97bdcd668220, λd9373a088503, λec66394b2cbd(λ443d4e7ecc9f), λd411e49192a5, λb40e0b316f35, λb03b0a19ada8, λad6e79b1250a);
  }
}
