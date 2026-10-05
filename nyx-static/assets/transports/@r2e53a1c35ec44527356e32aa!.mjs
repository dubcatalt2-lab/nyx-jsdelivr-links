import λe87356b06133 from "./@rfcc59f19f904b9d5394942e8!.mjs";

import { headerEntries as λ648a662238f1, headerRecord as λe3bb56cf7ad0 } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Ku extends λe87356b06133 {
  async request(λe87356b06133, λa2c662ecf102, λ622cb27072c6, λb607a1ed7685, λb3848e970149) {
    const λ0c67d8d3695d = await super.request(λe87356b06133, λa2c662ecf102, λ622cb27072c6, λ648a662238f1(λb607a1ed7685), λb3848e970149), λd20dda0f2282 = λe3bb56cf7ad0(λ0c67d8d3695d.headers);
    return {
      ...λ0c67d8d3695d,
      headers: λd20dda0f2282,
      rawHeaders: λd20dda0f2282
    };
  }
  connect(λe87356b06133, λe3bb56cf7ad0, λa2c662ecf102, λ622cb27072c6, λb607a1ed7685, λb3848e970149, λ0c67d8d3695d) {
    return super.connect(λe87356b06133, λe3bb56cf7ad0, λ648a662238f1(λa2c662ecf102), λ622cb27072c6, λb607a1ed7685, λb3848e970149, λ0c67d8d3695d);
  }
}
