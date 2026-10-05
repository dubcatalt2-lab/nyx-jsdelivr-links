import λbbdffdf482f3 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/epoxy/index.mjs";

import { headerEntries as λc2928625a280, headerRecord as λ1ce29ebd5b17 } from "./header-utils.mjs";

export default class Gu extends λbbdffdf482f3 {
  async request(λbbdffdf482f3, λ1c4e13770d13, λ172d27e48166, λcd56be9f5bff, λ98f960b45713) {
    const λc1aadf4bd749 = await super.request(λbbdffdf482f3, λ1c4e13770d13, λ172d27e48166, λ1ce29ebd5b17(λcd56be9f5bff), λ98f960b45713);
    return {
      ...λc1aadf4bd749,
      headers: λc2928625a280(λc1aadf4bd749.headers)
    };
  }
  connect(λbbdffdf482f3, λc2928625a280, λ1c4e13770d13, λ172d27e48166, λcd56be9f5bff, λ98f960b45713, λc1aadf4bd749) {
    return super.connect(λbbdffdf482f3, λc2928625a280, λ1ce29ebd5b17(λ1c4e13770d13), λ172d27e48166, λcd56be9f5bff, λ98f960b45713, λc1aadf4bd749);
  }
}
