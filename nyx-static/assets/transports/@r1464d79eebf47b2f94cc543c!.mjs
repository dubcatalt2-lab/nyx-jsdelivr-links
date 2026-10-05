import λ8722ebcbdadd from "./@rfcc59f19f904b9d5394942e8!.mjs";

import { headerEntries as λ669c7d76af8f } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Yu extends λ8722ebcbdadd {
  async request(λ8722ebcbdadd, λ0ac051414cf0, λb8234ae2dc6b, λ8be91fe438e4, λbba08c6c632c) {
    const λ76e69add77ad = await super.request(λ8722ebcbdadd, λ0ac051414cf0, λb8234ae2dc6b, λ669c7d76af8f(λ8be91fe438e4), λbba08c6c632c);
    return {
      ...λ76e69add77ad,
      headers: λ669c7d76af8f(λ76e69add77ad.headers)
    };
  }
  connect(λ8722ebcbdadd, λ0ac051414cf0, λb8234ae2dc6b, λ8be91fe438e4, λbba08c6c632c, λ76e69add77ad, λ449ea789f10e) {
    return super.connect(λ8722ebcbdadd, λ0ac051414cf0, λ669c7d76af8f(λb8234ae2dc6b), λ8be91fe438e4, λbba08c6c632c, λ76e69add77ad, λ449ea789f10e);
  }
}
