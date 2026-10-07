import λa3e8047904ca from "\x2e\x2f\x6c\x69\x62\x63\x75\x72\x6c\x2d\x63\x6c\x69\x65\x6e\x74\x2e\x6a\x73";

import { headerEntries as λ99d46669ea22, headerRecord as λ1ac284bd955b } from "\x2e\x2f\x68\x65\x61\x64\x65\x72\x2d\x75\x74\x69\x6c\x73\x2e\x6a\x73";

export default class _0x127b89_1 extends λa3e8047904ca {
  async request(λa3e8047904ca, λ1ce933d367b6, λ4c8534f7ae80, λ99bf79230bfe, λ27d6cc949780) {
    const λ3904461d4cb4 = await super.request(λa3e8047904ca, λ1ce933d367b6, λ4c8534f7ae80, λ99d46669ea22(λ99bf79230bfe), λ27d6cc949780), λa21df378cfa6 = λ1ac284bd955b(λ3904461d4cb4.headers);
    return {
      ...λ3904461d4cb4,
      headers: λa21df378cfa6,
      rawHeaders: λa21df378cfa6
    };
  }
  connect(λa3e8047904ca, λ1ac284bd955b, λ1ce933d367b6, λ4c8534f7ae80, λ99bf79230bfe, λ27d6cc949780, λ3904461d4cb4) {
    return super.connect(λa3e8047904ca, λ1ac284bd955b, λ99d46669ea22(λ1ce933d367b6), λ4c8534f7ae80, λ99bf79230bfe, λ27d6cc949780, λ3904461d4cb4);
  }
}
