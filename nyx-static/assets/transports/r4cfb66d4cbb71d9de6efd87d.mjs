import λa5d6e4d35d93 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/epoxy/index.mjs";

import { headerEntries as λ19304d239bd7, headerRecord as λc35a4fdaeb95 } from "./header-utils.mjs";

export default class Gu extends λa5d6e4d35d93 {
  async request(λa5d6e4d35d93, λa6e38d1ef794, λ81755dd378ea, λdb312612872b, λda384c339cef) {
    const λa34e801f0b5f = await super.request(λa5d6e4d35d93, λa6e38d1ef794, λ81755dd378ea, λc35a4fdaeb95(λdb312612872b), λda384c339cef);
    return {
      ...λa34e801f0b5f,
      headers: λ19304d239bd7(λa34e801f0b5f.headers)
    };
  }
  connect(λa5d6e4d35d93, λ19304d239bd7, λa6e38d1ef794, λ81755dd378ea, λdb312612872b, λda384c339cef, λa34e801f0b5f) {
    return super.connect(λa5d6e4d35d93, λ19304d239bd7, λc35a4fdaeb95(λa6e38d1ef794), λ81755dd378ea, λdb312612872b, λda384c339cef, λa34e801f0b5f);
  }
}
