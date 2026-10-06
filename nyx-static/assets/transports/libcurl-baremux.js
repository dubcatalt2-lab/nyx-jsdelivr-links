import λacc2f29fd283 from "./@r892c9aef9e65afa53b3a5e77!.js";

import { headerEntries as λbc7d8e750859, headerRecord as λd67ded69002d } from "./@r4a97a0ecdaad1f26f69f6ac6!.js";

export default class Ku extends λacc2f29fd283 {
  async request(λacc2f29fd283, λ0206e7196b36, λbf3c710973e0, λc638fc35e5fe, λ41421274fb75) {
    const λ289e7f741ab1 = await super.request(λacc2f29fd283, λ0206e7196b36, λbf3c710973e0, λbc7d8e750859(λc638fc35e5fe), λ41421274fb75), λ7a2c8a91ac3d = λd67ded69002d(λ289e7f741ab1.headers);
    return {
      ...λ289e7f741ab1,
      headers: λ7a2c8a91ac3d,
      rawHeaders: λ7a2c8a91ac3d
    };
  }
  connect(λacc2f29fd283, λd67ded69002d, λ0206e7196b36, λbf3c710973e0, λc638fc35e5fe, λ41421274fb75, λ289e7f741ab1) {
    return super.connect(λacc2f29fd283, λd67ded69002d, λbc7d8e750859(λ0206e7196b36), λbf3c710973e0, λc638fc35e5fe, λ41421274fb75, λ289e7f741ab1);
  }
}
