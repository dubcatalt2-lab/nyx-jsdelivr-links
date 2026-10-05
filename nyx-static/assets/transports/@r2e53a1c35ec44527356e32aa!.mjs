import λ894d14b9e246 from "./@rfcc59f19f904b9d5394942e8!.mjs";

import { headerEntries as λ624df3db268b, headerRecord as λb8103df4ca69 } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Ku extends λ894d14b9e246 {
  async request(λ894d14b9e246, λ81f12a1e3503, λ863cf1a322e1, λ2d143981fcad, λd58dfd33e4bd) {
    const λ76bcc817200d = await super.request(λ894d14b9e246, λ81f12a1e3503, λ863cf1a322e1, λ624df3db268b(λ2d143981fcad), λd58dfd33e4bd), λ693138b9236d = λb8103df4ca69(λ76bcc817200d.headers);
    return {
      ...λ76bcc817200d,
      headers: λ693138b9236d,
      rawHeaders: λ693138b9236d
    };
  }
  connect(λ894d14b9e246, λb8103df4ca69, λ81f12a1e3503, λ863cf1a322e1, λ2d143981fcad, λd58dfd33e4bd, λ76bcc817200d) {
    return super.connect(λ894d14b9e246, λb8103df4ca69, λ624df3db268b(λ81f12a1e3503), λ863cf1a322e1, λ2d143981fcad, λd58dfd33e4bd, λ76bcc817200d);
  }
}
