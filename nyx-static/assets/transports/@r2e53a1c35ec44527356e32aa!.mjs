import λad0ed182000c from "./@rfcc59f19f904b9d5394942e8!.mjs";

import { headerEntries as λ29bc2dc9e497, headerRecord as λaf4f8e6aa1ff } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Ku extends λad0ed182000c {
  async request(λad0ed182000c, λ0b7e6a35f1bc, λcff11c6bb165, λ39d8be242bad, λ442443ad4768) {
    const λ588658b68b2d = await super.request(λad0ed182000c, λ0b7e6a35f1bc, λcff11c6bb165, λ29bc2dc9e497(λ39d8be242bad), λ442443ad4768), λ840eed251ffb = λaf4f8e6aa1ff(λ588658b68b2d.headers);
    return {
      ...λ588658b68b2d,
      headers: λ840eed251ffb,
      rawHeaders: λ840eed251ffb
    };
  }
  connect(λad0ed182000c, λaf4f8e6aa1ff, λ0b7e6a35f1bc, λcff11c6bb165, λ39d8be242bad, λ442443ad4768, λ588658b68b2d) {
    return super.connect(λad0ed182000c, λaf4f8e6aa1ff, λ29bc2dc9e497(λ0b7e6a35f1bc), λcff11c6bb165, λ39d8be242bad, λ442443ad4768, λ588658b68b2d);
  }
}
