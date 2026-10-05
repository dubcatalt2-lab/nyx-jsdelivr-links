import λfc53bcd0dbdd from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/epoxy/@rebc1ad8dd3184da107fa150d!.js";

import { headerEntries as λ6c83c53669f9, headerRecord as λ6e5f0afbb4ff } from "./@r58e1303ec81b4e613dc28874!.js";

export default class Gu extends λfc53bcd0dbdd {
  async request(λfc53bcd0dbdd, λ66075fbd95e9, λ41bc937851ad, λf200cf9fa40a, λ429934eafe44) {
    const λ41377cc737e5 = await super.request(λfc53bcd0dbdd, λ66075fbd95e9, λ41bc937851ad, λ6e5f0afbb4ff(λf200cf9fa40a), λ429934eafe44);
    return {
      ...λ41377cc737e5,
      headers: λ6c83c53669f9(λ41377cc737e5.headers)
    };
  }
  connect(λfc53bcd0dbdd, λ6c83c53669f9, λ66075fbd95e9, λ41bc937851ad, λf200cf9fa40a, λ429934eafe44, λ41377cc737e5) {
    return super.connect(λfc53bcd0dbdd, λ6c83c53669f9, λ6e5f0afbb4ff(λ66075fbd95e9), λ41bc937851ad, λf200cf9fa40a, λ429934eafe44, λ41377cc737e5);
  }
}
