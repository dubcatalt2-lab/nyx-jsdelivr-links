import λe1f377477765 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/epoxy/index.module-3b26d55d6e45.js";

import { headerEntries as λ32434e6d8d2c, headerRecord as λ3c2a464e066b } from "./@r4a97a0ecdaad1f26f69f6ac6!.js";

export default class Gu extends λe1f377477765 {
  async request(λe1f377477765, λ657df68f8888, λ0cd1895e1003, λ878e20e2c0b8, λ4277fe16e78d) {
    const λ3f429fe614b5 = await super.request(λe1f377477765, λ657df68f8888, λ0cd1895e1003, λ3c2a464e066b(λ878e20e2c0b8), λ4277fe16e78d);
    return {
      ...λ3f429fe614b5,
      headers: λ32434e6d8d2c(λ3f429fe614b5.headers)
    };
  }
  connect(λe1f377477765, λ32434e6d8d2c, λ657df68f8888, λ0cd1895e1003, λ878e20e2c0b8, λ4277fe16e78d, λ3f429fe614b5) {
    return super.connect(λe1f377477765, λ32434e6d8d2c, λ3c2a464e066b(λ657df68f8888), λ0cd1895e1003, λ878e20e2c0b8, λ4277fe16e78d, λ3f429fe614b5);
  }
}
