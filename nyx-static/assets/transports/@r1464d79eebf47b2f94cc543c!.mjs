import λ4211a8283971 from "./@rfcc59f19f904b9d5394942e8!.mjs";

import { headerEntries as λ5b8b76bb0099 } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Yu extends λ4211a8283971 {
  async request(λ4211a8283971, λ3815377171e0, λe99b3d2b0276, λf550cbadaa21, λfff07072e093) {
    const λ7a7e24693dcf = await super.request(λ4211a8283971, λ3815377171e0, λe99b3d2b0276, λ5b8b76bb0099(λf550cbadaa21), λfff07072e093);
    return {
      ...λ7a7e24693dcf,
      headers: λ5b8b76bb0099(λ7a7e24693dcf.headers)
    };
  }
  connect(λ4211a8283971, λ3815377171e0, λe99b3d2b0276, λf550cbadaa21, λfff07072e093, λ7a7e24693dcf, λ52b18f86380a) {
    return super.connect(λ4211a8283971, λ3815377171e0, λ5b8b76bb0099(λe99b3d2b0276), λf550cbadaa21, λfff07072e093, λ7a7e24693dcf, λ52b18f86380a);
  }
}
