import λ930629bf52b0 from "\x2e\x2f\x40\x72\x66\x63\x63\x35\x39\x66\x31\x39\x66\x39\x30\x34\x62\x39\x64\x35\x33\x39\x34\x39\x34\x32\x65\x38\x21\x2e\x6a\x73";

import { headerEntries as λd8e3ace8823e, headerRecord as λ32824efaf81a } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x127b89_3 extends λ930629bf52b0 {
  async request(λ930629bf52b0, λ07ddcca4eb0b, λ9d3e9578ecff, λ477776783e8c, λ7866a57e1bde) {
    const λb26b13e90c4f = await super.request(λ930629bf52b0, λ07ddcca4eb0b, λ9d3e9578ecff, λd8e3ace8823e(λ477776783e8c), λ7866a57e1bde), λ1bf8d60df75d = λ32824efaf81a(λb26b13e90c4f.headers);
    return {
      ...λb26b13e90c4f,
      headers: λ1bf8d60df75d,
      rawHeaders: λ1bf8d60df75d
    };
  }
  connect(λ930629bf52b0, λ32824efaf81a, λ07ddcca4eb0b, λ9d3e9578ecff, λ477776783e8c, λ7866a57e1bde, λb26b13e90c4f) {
    return super.connect(λ930629bf52b0, λ32824efaf81a, λd8e3ace8823e(λ07ddcca4eb0b), λ9d3e9578ecff, λ477776783e8c, λ7866a57e1bde, λb26b13e90c4f);
  }
}
