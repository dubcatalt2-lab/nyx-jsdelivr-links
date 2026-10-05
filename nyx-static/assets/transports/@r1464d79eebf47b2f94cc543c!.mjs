import λ0643f56ae617 from "./@rfcc59f19f904b9d5394942e8!.mjs";

import { headerEntries as λ5104c15ef2de } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Yu extends λ0643f56ae617 {
  async request(λ0643f56ae617, λe7620c52f927, λ56b6fd467093, λc405edbff13a, λfeedaa2a9f07) {
    const λ3ab8ac40eba5 = await super.request(λ0643f56ae617, λe7620c52f927, λ56b6fd467093, λ5104c15ef2de(λc405edbff13a), λfeedaa2a9f07);
    return {
      ...λ3ab8ac40eba5,
      headers: λ5104c15ef2de(λ3ab8ac40eba5.headers)
    };
  }
  connect(λ0643f56ae617, λe7620c52f927, λ56b6fd467093, λc405edbff13a, λfeedaa2a9f07, λ3ab8ac40eba5, λ4eeab703c07e) {
    return super.connect(λ0643f56ae617, λe7620c52f927, λ5104c15ef2de(λ56b6fd467093), λc405edbff13a, λfeedaa2a9f07, λ3ab8ac40eba5, λ4eeab703c07e);
  }
}
