import λbfc7b1d90c9a from "./@r4e12a6ccf4cab71bed4ba9a2!.mjs";

import { headerEntries as λ68c7e51133dd } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Yu extends λbfc7b1d90c9a {
  async request(λbfc7b1d90c9a, λ4811fdc1a233, λd3e94ce2907c, λ89aba1ad7493, λa59996176df1) {
    const λ56c69a81c24e = await super.request(λbfc7b1d90c9a, λ4811fdc1a233, λd3e94ce2907c, λ68c7e51133dd(λ89aba1ad7493), λa59996176df1);
    return {
      ...λ56c69a81c24e,
      headers: λ68c7e51133dd(λ56c69a81c24e.headers)
    };
  }
  connect(λbfc7b1d90c9a, λ4811fdc1a233, λd3e94ce2907c, λ89aba1ad7493, λa59996176df1, λ56c69a81c24e, λba51518d5feb) {
    return super.connect(λbfc7b1d90c9a, λ4811fdc1a233, λ68c7e51133dd(λd3e94ce2907c), λ89aba1ad7493, λa59996176df1, λ56c69a81c24e, λba51518d5feb);
  }
}
