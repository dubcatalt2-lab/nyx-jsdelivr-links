import λb9979fd27b1f from "\x2e\x2f\x40\x72\x66\x63\x63\x35\x39\x66\x31\x39\x66\x39\x30\x34\x62\x39\x64\x35\x33\x39\x34\x39\x34\x32\x65\x38\x21\x2e\x6a\x73";

import { headerEntries as λ3d41ad3d72d5 } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x3c892e_2 extends λb9979fd27b1f {
  async request(λb9979fd27b1f, λ707491856820, λc0560b0c8e3d, λ6a9787d23cda, λ74508c0c0d12) {
    const λfe857ee0d6e0 = await super.request(λb9979fd27b1f, λ707491856820, λc0560b0c8e3d, λ3d41ad3d72d5(λ6a9787d23cda), λ74508c0c0d12);
    return {
      ...λfe857ee0d6e0,
      headers: λ3d41ad3d72d5(λfe857ee0d6e0.headers)
    };
  }
  connect(λb9979fd27b1f, λ707491856820, λc0560b0c8e3d, λ6a9787d23cda, λ74508c0c0d12, λfe857ee0d6e0, λ5311fb4fd0fa) {
    return super.connect(λb9979fd27b1f, λ707491856820, λ3d41ad3d72d5(λc0560b0c8e3d), λ6a9787d23cda, λ74508c0c0d12, λfe857ee0d6e0, λ5311fb4fd0fa);
  }
}
