import λ8d8762ecb9d5 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/epoxy/@rebc1ad8dd3184da107fa150d!.mjs";

import { headerEntries as λd6b3278bf883, headerRecord as λ0432dca6a261 } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Gu extends λ8d8762ecb9d5 {
  async request(λ8d8762ecb9d5, λ45fc83247705, λ731c0deae46c, λ309c6526c49c, λd6aac26f3ac4) {
    const λc90ce57e8b84 = await super.request(λ8d8762ecb9d5, λ45fc83247705, λ731c0deae46c, λ0432dca6a261(λ309c6526c49c), λd6aac26f3ac4);
    return {
      ...λc90ce57e8b84,
      headers: λd6b3278bf883(λc90ce57e8b84.headers)
    };
  }
  connect(λ8d8762ecb9d5, λd6b3278bf883, λ45fc83247705, λ731c0deae46c, λ309c6526c49c, λd6aac26f3ac4, λc90ce57e8b84) {
    return super.connect(λ8d8762ecb9d5, λd6b3278bf883, λ0432dca6a261(λ45fc83247705), λ731c0deae46c, λ309c6526c49c, λd6aac26f3ac4, λc90ce57e8b84);
  }
}
