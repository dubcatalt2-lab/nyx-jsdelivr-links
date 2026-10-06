import λa78b92301041 from "./@r4e12a6ccf4cab71bed4ba9a2!.js";

import { headerEntries as λ363a8e92eb61 } from "./@r58e1303ec81b4e613dc28874!.js";

export default class Yu extends λa78b92301041 {
  async request(λa78b92301041, λ85e03b2ed24f, λ69e43b0f1c6b, λ7c3f05499903, λ92be6d2d6607) {
    const λ0e0e3a2dc2c7 = await super.request(λa78b92301041, λ85e03b2ed24f, λ69e43b0f1c6b, λ363a8e92eb61(λ7c3f05499903), λ92be6d2d6607);
    return {
      ...λ0e0e3a2dc2c7,
      headers: λ363a8e92eb61(λ0e0e3a2dc2c7.headers)
    };
  }
  connect(λa78b92301041, λ85e03b2ed24f, λ69e43b0f1c6b, λ7c3f05499903, λ92be6d2d6607, λ0e0e3a2dc2c7, λb181850eb173) {
    return super.connect(λa78b92301041, λ85e03b2ed24f, λ363a8e92eb61(λ69e43b0f1c6b), λ7c3f05499903, λ92be6d2d6607, λ0e0e3a2dc2c7, λb181850eb173);
  }
}
