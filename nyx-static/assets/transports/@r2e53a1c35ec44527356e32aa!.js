import λ909d455d6a12 from "\x2e\x2f\x40\x72\x66\x63\x63\x35\x39\x66\x31\x39\x66\x39\x30\x34\x62\x39\x64\x35\x33\x39\x34\x39\x34\x32\x65\x38\x21\x2e\x6a\x73";

import { headerEntries as λ7a5ef23173b7, headerRecord as λ357937177cf5 } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x127b89_3 extends λ909d455d6a12 {
  async request(λ909d455d6a12, λ384aef63cedf, λ163e78661b6f, λ573292962779, λ297a802167cd) {
    const λab2020f7aba7 = await super.request(λ909d455d6a12, λ384aef63cedf, λ163e78661b6f, λ7a5ef23173b7(λ573292962779), λ297a802167cd), λ259aab25f4fc = λ357937177cf5(λab2020f7aba7.headers);
    return {
      ...λab2020f7aba7,
      headers: λ259aab25f4fc,
      rawHeaders: λ259aab25f4fc
    };
  }
  connect(λ909d455d6a12, λ357937177cf5, λ384aef63cedf, λ163e78661b6f, λ573292962779, λ297a802167cd, λab2020f7aba7) {
    return super.connect(λ909d455d6a12, λ357937177cf5, λ7a5ef23173b7(λ384aef63cedf), λ163e78661b6f, λ573292962779, λ297a802167cd, λab2020f7aba7);
  }
}
