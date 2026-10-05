import λc7337a978e6d from "./libcurl-client.mjs";

import { headerEntries as λ5b92b613da55, headerRecord as λ034c4481244d } from "./header-utils.mjs";

export default class Ku extends λc7337a978e6d {
  async request(λc7337a978e6d, λe5b99da003cf, λdaa12d00f8ac, λa71841b758b9, λ060b9eb220b9) {
    const λ67a40101eea0 = await super.request(λc7337a978e6d, λe5b99da003cf, λdaa12d00f8ac, λ5b92b613da55(λa71841b758b9), λ060b9eb220b9), λ4f22cdd3c55b = λ034c4481244d(λ67a40101eea0.headers);
    return {
      ...λ67a40101eea0,
      headers: λ4f22cdd3c55b,
      rawHeaders: λ4f22cdd3c55b
    };
  }
  connect(λc7337a978e6d, λ034c4481244d, λe5b99da003cf, λdaa12d00f8ac, λa71841b758b9, λ060b9eb220b9, λ67a40101eea0) {
    return super.connect(λc7337a978e6d, λ034c4481244d, λ5b92b613da55(λe5b99da003cf), λdaa12d00f8ac, λa71841b758b9, λ060b9eb220b9, λ67a40101eea0);
  }
}
