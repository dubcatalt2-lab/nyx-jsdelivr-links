import λ880386108e64 from "./@r4e12a6ccf4cab71bed4ba9a2!.js";

import { headerEntries as λfa148cdbdd92 } from "./@r58e1303ec81b4e613dc28874!.js";

export default class Yu extends λ880386108e64 {
  async request(λ880386108e64, λ1ca52ac0749f, λf188380ebb40, λ78f164ce133c, λ09d8f7c992d5) {
    const λe63edf531f23 = await super.request(λ880386108e64, λ1ca52ac0749f, λf188380ebb40, λfa148cdbdd92(λ78f164ce133c), λ09d8f7c992d5);
    return {
      ...λe63edf531f23,
      headers: λfa148cdbdd92(λe63edf531f23.headers)
    };
  }
  connect(λ880386108e64, λ1ca52ac0749f, λf188380ebb40, λ78f164ce133c, λ09d8f7c992d5, λe63edf531f23, λb5871b0cff53) {
    return super.connect(λ880386108e64, λ1ca52ac0749f, λfa148cdbdd92(λf188380ebb40), λ78f164ce133c, λ09d8f7c992d5, λe63edf531f23, λb5871b0cff53);
  }
}
