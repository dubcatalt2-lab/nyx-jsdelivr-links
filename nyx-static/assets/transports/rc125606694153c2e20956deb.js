import λ04ed792bf237 from "./libcurl-client.js";

import { headerEntries as λ532be0dc28f4 } from "./header-utils.js";

export default class Yu extends λ04ed792bf237 {
  async request(λ04ed792bf237, λ95199b83cbb6, λc9eff0b6db26, λ30eeee6e229c, λ581ffa719da9) {
    const λ145b8bf7d7eb = await super.request(λ04ed792bf237, λ95199b83cbb6, λc9eff0b6db26, λ532be0dc28f4(λ30eeee6e229c), λ581ffa719da9);
    return {
      ...λ145b8bf7d7eb,
      headers: λ532be0dc28f4(λ145b8bf7d7eb.headers)
    };
  }
  connect(λ04ed792bf237, λ95199b83cbb6, λc9eff0b6db26, λ30eeee6e229c, λ581ffa719da9, λ145b8bf7d7eb, λ0d75f3c9ab67) {
    return super.connect(λ04ed792bf237, λ95199b83cbb6, λ532be0dc28f4(λc9eff0b6db26), λ30eeee6e229c, λ581ffa719da9, λ145b8bf7d7eb, λ0d75f3c9ab67);
  }
}
