import λe36026faaf61 from "./@rfcc59f19f904b9d5394942e8!.js";

import { headerEntries as λe4cbeced4166, headerRecord as λ5e835e558f22 } from "./@rcf70f1f99cfedb208df1b0a0!.js";

export default class Ku extends λe36026faaf61 {
  async request(λe36026faaf61, λb958c15f935c, λ3c04f1491c97, λd4915a9ad542, λ34d4275f3a84) {
    const λ995cef6617a3 = await super.request(λe36026faaf61, λb958c15f935c, λ3c04f1491c97, λe4cbeced4166(λd4915a9ad542), λ34d4275f3a84), λ570457c0fd91 = λ5e835e558f22(λ995cef6617a3.headers);
    return {
      ...λ995cef6617a3,
      headers: λ570457c0fd91,
      rawHeaders: λ570457c0fd91
    };
  }
  connect(λe36026faaf61, λ5e835e558f22, λb958c15f935c, λ3c04f1491c97, λd4915a9ad542, λ34d4275f3a84, λ995cef6617a3) {
    return super.connect(λe36026faaf61, λ5e835e558f22, λe4cbeced4166(λb958c15f935c), λ3c04f1491c97, λd4915a9ad542, λ34d4275f3a84, λ995cef6617a3);
  }
}
