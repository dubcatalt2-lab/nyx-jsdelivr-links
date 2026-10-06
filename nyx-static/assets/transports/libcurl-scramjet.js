import λ04248cf40a23 from "./@r892c9aef9e65afa53b3a5e77!.js";

import { headerEntries as λ4529b565d694 } from "./@r4a97a0ecdaad1f26f69f6ac6!.js";

export default class Yu extends λ04248cf40a23 {
  async request(λ04248cf40a23, λbb5413f065f4, λ5cb16eb0b28c, λ622e2481a58d, λe7ba5180e12c) {
    const λ9b9c7235b383 = await super.request(λ04248cf40a23, λbb5413f065f4, λ5cb16eb0b28c, λ4529b565d694(λ622e2481a58d), λe7ba5180e12c);
    return {
      ...λ9b9c7235b383,
      headers: λ4529b565d694(λ9b9c7235b383.headers)
    };
  }
  connect(λ04248cf40a23, λbb5413f065f4, λ5cb16eb0b28c, λ622e2481a58d, λe7ba5180e12c, λ9b9c7235b383, λ3bd59312d69a) {
    return super.connect(λ04248cf40a23, λbb5413f065f4, λ4529b565d694(λ5cb16eb0b28c), λ622e2481a58d, λe7ba5180e12c, λ9b9c7235b383, λ3bd59312d69a);
  }
}
