import λ6d513a2ee17d from "./@r4e12a6ccf4cab71bed4ba9a2!.mjs";

import { headerEntries as λ040ab9c364c4 } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Yu extends λ6d513a2ee17d {
  async request(λ6d513a2ee17d, λ3d3232da7361, λd2d61616352c, λ41dbf497b45b, λb0eac379b3de) {
    const λbc83db1848de = await super.request(λ6d513a2ee17d, λ3d3232da7361, λd2d61616352c, λ040ab9c364c4(λ41dbf497b45b), λb0eac379b3de);
    return {
      ...λbc83db1848de,
      headers: λ040ab9c364c4(λbc83db1848de.headers)
    };
  }
  connect(λ6d513a2ee17d, λ3d3232da7361, λd2d61616352c, λ41dbf497b45b, λb0eac379b3de, λbc83db1848de, λ68bf0079b9d8) {
    return super.connect(λ6d513a2ee17d, λ3d3232da7361, λ040ab9c364c4(λd2d61616352c), λ41dbf497b45b, λb0eac379b3de, λbc83db1848de, λ68bf0079b9d8);
  }
}
