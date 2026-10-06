import λ6d10e0e37795 from "./@r892c9aef9e65afa53b3a5e77!.js";

import { headerEntries as λe789eb4b0e7c, headerRecord as λ363903094747 } from "./@r4a97a0ecdaad1f26f69f6ac6!.js";

export default class Ku extends λ6d10e0e37795 {
  async request(λ6d10e0e37795, λ0baba6b20757, λ6c92091a472e, λ44981845c8dd, λ0d672bd475c0) {
    const λbd486b993e26 = await super.request(λ6d10e0e37795, λ0baba6b20757, λ6c92091a472e, λe789eb4b0e7c(λ44981845c8dd), λ0d672bd475c0), λ4f37908a8473 = λ363903094747(λbd486b993e26.headers);
    return {
      ...λbd486b993e26,
      headers: λ4f37908a8473,
      rawHeaders: λ4f37908a8473
    };
  }
  connect(λ6d10e0e37795, λ363903094747, λ0baba6b20757, λ6c92091a472e, λ44981845c8dd, λ0d672bd475c0, λbd486b993e26) {
    return super.connect(λ6d10e0e37795, λ363903094747, λe789eb4b0e7c(λ0baba6b20757), λ6c92091a472e, λ44981845c8dd, λ0d672bd475c0, λbd486b993e26);
  }
}
