import λe354a7a0281f from "./@r4e12a6ccf4cab71bed4ba9a2!.mjs";

import { headerEntries as λ325f99078002 } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Yu extends λe354a7a0281f {
  async request(λe354a7a0281f, λ0644e2a6f783, λe124899885c4, λ1e4578a4956f, λb22d1398194c) {
    const λddbafce7ae43 = await super.request(λe354a7a0281f, λ0644e2a6f783, λe124899885c4, λ325f99078002(λ1e4578a4956f), λb22d1398194c);
    return {
      ...λddbafce7ae43,
      headers: λ325f99078002(λddbafce7ae43.headers)
    };
  }
  connect(λe354a7a0281f, λ0644e2a6f783, λe124899885c4, λ1e4578a4956f, λb22d1398194c, λddbafce7ae43, λ660edd3598fe) {
    return super.connect(λe354a7a0281f, λ0644e2a6f783, λ325f99078002(λe124899885c4), λ1e4578a4956f, λb22d1398194c, λddbafce7ae43, λ660edd3598fe);
  }
}
