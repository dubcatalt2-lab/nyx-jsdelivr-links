import λ82d5f45bd72e from "./libcurl-client.mjs";

import { headerEntries as λ68f6822d290d } from "./header-utils.mjs";

export default class Yu extends λ82d5f45bd72e {
  async request(λ82d5f45bd72e, λ84da95be9d3b, λddcc34bf4f13, λ3d5d74444f3f, λ1eeaac997ee7) {
    const λef6beffe3352 = await super.request(λ82d5f45bd72e, λ84da95be9d3b, λddcc34bf4f13, λ68f6822d290d(λ3d5d74444f3f), λ1eeaac997ee7);
    return {
      ...λef6beffe3352,
      headers: λ68f6822d290d(λef6beffe3352.headers)
    };
  }
  connect(λ82d5f45bd72e, λ84da95be9d3b, λddcc34bf4f13, λ3d5d74444f3f, λ1eeaac997ee7, λef6beffe3352, λc4f4ab6facba) {
    return super.connect(λ82d5f45bd72e, λ84da95be9d3b, λ68f6822d290d(λddcc34bf4f13), λ3d5d74444f3f, λ1eeaac997ee7, λef6beffe3352, λc4f4ab6facba);
  }
}
