import λ01ebce3e74af from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/epoxy/@rebc1ad8dd3184da107fa150d!.js";

import { headerEntries as λ8eabed8b0ecb, headerRecord as λb2f4ceb94e12 } from "./@r58e1303ec81b4e613dc28874!.js";

export default class Gu extends λ01ebce3e74af {
  async request(λ01ebce3e74af, λ9b9d49024cf9, λ572594835b34, λdd04f8692185, λa0418db9f28f) {
    const λ683c5779e96d = await super.request(λ01ebce3e74af, λ9b9d49024cf9, λ572594835b34, λb2f4ceb94e12(λdd04f8692185), λa0418db9f28f);
    return {
      ...λ683c5779e96d,
      headers: λ8eabed8b0ecb(λ683c5779e96d.headers)
    };
  }
  connect(λ01ebce3e74af, λ8eabed8b0ecb, λ9b9d49024cf9, λ572594835b34, λdd04f8692185, λa0418db9f28f, λ683c5779e96d) {
    return super.connect(λ01ebce3e74af, λ8eabed8b0ecb, λb2f4ceb94e12(λ9b9d49024cf9), λ572594835b34, λdd04f8692185, λa0418db9f28f, λ683c5779e96d);
  }
}
