import λ814054d8a61f from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/epoxy/index.module-3b26d55d6e45.js";

import { headerEntries as λ21208226bd35, headerRecord as λb41a53f2a3db } from "./@r4a97a0ecdaad1f26f69f6ac6!.js";

export default class Gu extends λ814054d8a61f {
  async request(λ814054d8a61f, λ5990ad8186b6, λ2642396e0aaf, λf10e37095dd5, λ9a07433960f7) {
    const λa85f6e4c84f1 = await super.request(λ814054d8a61f, λ5990ad8186b6, λ2642396e0aaf, λb41a53f2a3db(λf10e37095dd5), λ9a07433960f7);
    return {
      ...λa85f6e4c84f1,
      headers: λ21208226bd35(λa85f6e4c84f1.headers)
    };
  }
  connect(λ814054d8a61f, λ21208226bd35, λ5990ad8186b6, λ2642396e0aaf, λf10e37095dd5, λ9a07433960f7, λa85f6e4c84f1) {
    return super.connect(λ814054d8a61f, λ21208226bd35, λb41a53f2a3db(λ5990ad8186b6), λ2642396e0aaf, λf10e37095dd5, λ9a07433960f7, λa85f6e4c84f1);
  }
}
