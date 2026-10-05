import λ022ed312b2f4 from "./libcurl-client.mjs";

import { headerEntries as λ230a70a7f58b } from "./header-utils.mjs";

export default class Yu extends λ022ed312b2f4 {
  async request(λ022ed312b2f4, λac8cef4fa5cc, λ46577e8be3e1, λ2451db6b4b1e, λ18f1baa0e85d) {
    const λb590c9c6557f = await super.request(λ022ed312b2f4, λac8cef4fa5cc, λ46577e8be3e1, λ230a70a7f58b(λ2451db6b4b1e), λ18f1baa0e85d);
    return {
      ...λb590c9c6557f,
      headers: λ230a70a7f58b(λb590c9c6557f.headers)
    };
  }
  connect(λ022ed312b2f4, λac8cef4fa5cc, λ46577e8be3e1, λ2451db6b4b1e, λ18f1baa0e85d, λb590c9c6557f, λbe2080c18332) {
    return super.connect(λ022ed312b2f4, λac8cef4fa5cc, λ230a70a7f58b(λ46577e8be3e1), λ2451db6b4b1e, λ18f1baa0e85d, λb590c9c6557f, λbe2080c18332);
  }
}
