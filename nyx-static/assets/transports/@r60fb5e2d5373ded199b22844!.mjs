import λ0f1b582ceddd from "./@r4e12a6ccf4cab71bed4ba9a2!.mjs";

import { headerEntries as λ85a0fe107f68, headerRecord as λ108aa1fd0283 } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Ku extends λ0f1b582ceddd {
  async request(λ0f1b582ceddd, λae986a524ff6, λab327ba04aff, λ8c9038e8cc04, λ3f50f9024e77) {
    const λ7faa79e90fd1 = await super.request(λ0f1b582ceddd, λae986a524ff6, λab327ba04aff, λ85a0fe107f68(λ8c9038e8cc04), λ3f50f9024e77), λdb320b08d06f = λ108aa1fd0283(λ7faa79e90fd1.headers);
    return {
      ...λ7faa79e90fd1,
      headers: λdb320b08d06f,
      rawHeaders: λdb320b08d06f
    };
  }
  connect(λ0f1b582ceddd, λ108aa1fd0283, λae986a524ff6, λab327ba04aff, λ8c9038e8cc04, λ3f50f9024e77, λ7faa79e90fd1) {
    return super.connect(λ0f1b582ceddd, λ108aa1fd0283, λ85a0fe107f68(λae986a524ff6), λab327ba04aff, λ8c9038e8cc04, λ3f50f9024e77, λ7faa79e90fd1);
  }
}
