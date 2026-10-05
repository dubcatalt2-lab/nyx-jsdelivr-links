import λ1d3620f28a9e from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/epoxy/@rebc1ad8dd3184da107fa150d!.mjs";

import { headerEntries as λ78fdce23fff2, headerRecord as λ37854b8ae77c } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Gu extends λ1d3620f28a9e {
  async request(λ1d3620f28a9e, λ093b02f27070, λefed95bb3ff4, λ013f515668f8, λ9340c226c7eb) {
    const λef8021c206cc = await super.request(λ1d3620f28a9e, λ093b02f27070, λefed95bb3ff4, λ37854b8ae77c(λ013f515668f8), λ9340c226c7eb);
    return {
      ...λef8021c206cc,
      headers: λ78fdce23fff2(λef8021c206cc.headers)
    };
  }
  connect(λ1d3620f28a9e, λ78fdce23fff2, λ093b02f27070, λefed95bb3ff4, λ013f515668f8, λ9340c226c7eb, λef8021c206cc) {
    return super.connect(λ1d3620f28a9e, λ78fdce23fff2, λ37854b8ae77c(λ093b02f27070), λefed95bb3ff4, λ013f515668f8, λ9340c226c7eb, λef8021c206cc);
  }
}
