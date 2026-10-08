import λ432103f393e6 from "\x2e\x2f\x40\x72\x34\x65\x31\x32\x61\x36\x63\x63\x66\x34\x63\x61\x62\x37\x31\x62\x65\x64\x34\x62\x61\x39\x61\x32\x21\x2e\x6a\x73";

import { headerEntries as λfcb2aa643e72 } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x3c892e_2 extends λ432103f393e6 {
  async request(λ432103f393e6, λae1fb58b186c, λ094cdd53d742, λ409ecacf4614, λ3c229bd4ffa8) {
    const λ2c0614ebfab2 = await super.request(λ432103f393e6, λae1fb58b186c, λ094cdd53d742, λfcb2aa643e72(λ409ecacf4614), λ3c229bd4ffa8);
    return {
      ...λ2c0614ebfab2,
      headers: λfcb2aa643e72(λ2c0614ebfab2.headers)
    };
  }
  connect(λ432103f393e6, λae1fb58b186c, λ094cdd53d742, λ409ecacf4614, λ3c229bd4ffa8, λ2c0614ebfab2, λd30a78180f53) {
    return super.connect(λ432103f393e6, λae1fb58b186c, λfcb2aa643e72(λ094cdd53d742), λ409ecacf4614, λ3c229bd4ffa8, λ2c0614ebfab2, λd30a78180f53);
  }
}
