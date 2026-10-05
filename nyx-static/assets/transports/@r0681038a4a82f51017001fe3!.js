import λ02e7371c435b from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/atlas/@ra0c56fac425aa0db70d01a58!.js";

import { headerEntries as λ5b233da96d21, headerRecord as λa25f30e00f60 } from "./@rcf70f1f99cfedb208df1b0a0!.js";

export default class Gu extends λ02e7371c435b {
  async request(λ02e7371c435b, λ7e06e528532c, λ64babbb9ecfe, λcb64aebca729, λ813fbad2fe8d) {
    const λ292ef6edd431 = await super.request(λ02e7371c435b, λ7e06e528532c, λ64babbb9ecfe, λa25f30e00f60(λcb64aebca729), λ813fbad2fe8d);
    return {
      ...λ292ef6edd431,
      headers: λ5b233da96d21(λ292ef6edd431.headers)
    };
  }
  connect(λ02e7371c435b, λ5b233da96d21, λ7e06e528532c, λ64babbb9ecfe, λcb64aebca729, λ813fbad2fe8d, λ292ef6edd431) {
    return super.connect(λ02e7371c435b, λ5b233da96d21, λa25f30e00f60(λ7e06e528532c), λ64babbb9ecfe, λcb64aebca729, λ813fbad2fe8d, λ292ef6edd431);
  }
}
