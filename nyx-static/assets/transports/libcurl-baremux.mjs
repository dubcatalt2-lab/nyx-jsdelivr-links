import λdc67389da556 from "./libcurl-client.mjs";

import { headerEntries as λf3243fcb3fa1, headerRecord as λ35d8a7737860 } from "./header-utils.mjs";

export default class Ku extends λdc67389da556 {
  async request(λdc67389da556, λ46ec9fe09d28, λ510d21a812ec, λ602e722769d5, λ56886d67cc81) {
    const λfe3a11e38ce4 = await super.request(λdc67389da556, λ46ec9fe09d28, λ510d21a812ec, λf3243fcb3fa1(λ602e722769d5), λ56886d67cc81), λ2887dcb52bae = λ35d8a7737860(λfe3a11e38ce4.headers);
    return {
      ...λfe3a11e38ce4,
      headers: λ2887dcb52bae,
      rawHeaders: λ2887dcb52bae
    };
  }
  connect(λdc67389da556, λ35d8a7737860, λ46ec9fe09d28, λ510d21a812ec, λ602e722769d5, λ56886d67cc81, λfe3a11e38ce4) {
    return super.connect(λdc67389da556, λ35d8a7737860, λf3243fcb3fa1(λ46ec9fe09d28), λ510d21a812ec, λ602e722769d5, λ56886d67cc81, λfe3a11e38ce4);
  }
}
