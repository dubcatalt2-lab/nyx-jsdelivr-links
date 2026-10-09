import λ712d249f1234 from "\x2e\x2f\x40\x72\x34\x65\x31\x32\x61\x36\x63\x63\x66\x34\x63\x61\x62\x37\x31\x62\x65\x64\x34\x62\x61\x39\x61\x32\x21\x2e\x6a\x73";

import { headerEntries as λ3303883c09d0, headerRecord as λ0331a1e3198b } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x127b89_3 extends λ712d249f1234 {
  async request(λ712d249f1234, λ2e8b7c022d5d, λaf30cca7f470, λadc9b85d76f6, λ5c3e5d4b156f) {
    const λc1a6c47ce955 = await super.request(λ712d249f1234, λ2e8b7c022d5d, λaf30cca7f470, λ3303883c09d0(λadc9b85d76f6), λ5c3e5d4b156f), λ4df192f0e65b = λ0331a1e3198b(λc1a6c47ce955.headers);
    return {
      ...λc1a6c47ce955,
      headers: λ4df192f0e65b,
      rawHeaders: λ4df192f0e65b
    };
  }
  connect(λ712d249f1234, λ0331a1e3198b, λ2e8b7c022d5d, λaf30cca7f470, λadc9b85d76f6, λ5c3e5d4b156f, λc1a6c47ce955) {
    return super.connect(λ712d249f1234, λ0331a1e3198b, λ3303883c09d0(λ2e8b7c022d5d), λaf30cca7f470, λadc9b85d76f6, λ5c3e5d4b156f, λc1a6c47ce955);
  }
}
