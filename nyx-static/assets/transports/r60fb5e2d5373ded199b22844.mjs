import λf975ad00ace0 from "./libcurl-client.mjs";

import { headerEntries as λ42ed3f25423d, headerRecord as λ31be25ebd505 } from "./header-utils.mjs";

export default class Ku extends λf975ad00ace0 {
  async request(λf975ad00ace0, λb58145506dde, λ74472b97e1e7, λ8a6a10e2a6d5, λbc1de232c0a0) {
    const λ6fff0540e9b7 = await super.request(λf975ad00ace0, λb58145506dde, λ74472b97e1e7, λ42ed3f25423d(λ8a6a10e2a6d5), λbc1de232c0a0), λ195dca37db93 = λ31be25ebd505(λ6fff0540e9b7.headers);
    return {
      ...λ6fff0540e9b7,
      headers: λ195dca37db93,
      rawHeaders: λ195dca37db93
    };
  }
  connect(λf975ad00ace0, λ31be25ebd505, λb58145506dde, λ74472b97e1e7, λ8a6a10e2a6d5, λbc1de232c0a0, λ6fff0540e9b7) {
    return super.connect(λf975ad00ace0, λ31be25ebd505, λ42ed3f25423d(λb58145506dde), λ74472b97e1e7, λ8a6a10e2a6d5, λbc1de232c0a0, λ6fff0540e9b7);
  }
}
