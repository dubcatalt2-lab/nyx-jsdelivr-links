import λe47d934b1efa from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/epoxy/@rebc1ad8dd3184da107fa150d!.mjs";

import { headerEntries as λ0ed9ca9a677b, headerRecord as λf1cd62181715 } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Gu extends λe47d934b1efa {
  async request(λe47d934b1efa, λe6e09b07945a, λce7f612c67e6, λa6c7b4626073, λ580700c0c3df) {
    const λfa2b4b39edcf = await super.request(λe47d934b1efa, λe6e09b07945a, λce7f612c67e6, λf1cd62181715(λa6c7b4626073), λ580700c0c3df);
    return {
      ...λfa2b4b39edcf,
      headers: λ0ed9ca9a677b(λfa2b4b39edcf.headers)
    };
  }
  connect(λe47d934b1efa, λ0ed9ca9a677b, λe6e09b07945a, λce7f612c67e6, λa6c7b4626073, λ580700c0c3df, λfa2b4b39edcf) {
    return super.connect(λe47d934b1efa, λ0ed9ca9a677b, λf1cd62181715(λe6e09b07945a), λce7f612c67e6, λa6c7b4626073, λ580700c0c3df, λfa2b4b39edcf);
  }
}
