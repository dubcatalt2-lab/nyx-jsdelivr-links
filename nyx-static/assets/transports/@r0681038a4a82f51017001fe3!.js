import λfff55b6e3a41 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/atlas/@ra0c56fac425aa0db70d01a58!.js";

import { headerEntries as λ12e9ef61a5cb, headerRecord as λ38b751b6bbca } from "./@rcf70f1f99cfedb208df1b0a0!.js";

export default class Gu extends λfff55b6e3a41 {
  async request(λfff55b6e3a41, λfa554ba07a0f, λa68ea4466869, λ40c49da4d284, λ260b50d03c70) {
    const λdc2abc5c5502 = await super.request(λfff55b6e3a41, λfa554ba07a0f, λa68ea4466869, λ38b751b6bbca(λ40c49da4d284), λ260b50d03c70);
    return {
      ...λdc2abc5c5502,
      headers: λ12e9ef61a5cb(λdc2abc5c5502.headers)
    };
  }
  connect(λfff55b6e3a41, λ12e9ef61a5cb, λfa554ba07a0f, λa68ea4466869, λ40c49da4d284, λ260b50d03c70, λdc2abc5c5502) {
    return super.connect(λfff55b6e3a41, λ12e9ef61a5cb, λ38b751b6bbca(λfa554ba07a0f), λa68ea4466869, λ40c49da4d284, λ260b50d03c70, λdc2abc5c5502);
  }
}
