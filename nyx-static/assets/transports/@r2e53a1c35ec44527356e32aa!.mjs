import λ95c1ea38334f from "./@rfcc59f19f904b9d5394942e8!.mjs";

import { headerEntries as λe57dc434ca84, headerRecord as λ50645786af93 } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Ku extends λ95c1ea38334f {
  async request(λ95c1ea38334f, λb04bf752faf2, λea90d9dd1396, λb3f8d7c09a68, λde8b64afe157) {
    const λ92f2ca794672 = await super.request(λ95c1ea38334f, λb04bf752faf2, λea90d9dd1396, λe57dc434ca84(λb3f8d7c09a68), λde8b64afe157), λ525394c6bca0 = λ50645786af93(λ92f2ca794672.headers);
    return {
      ...λ92f2ca794672,
      headers: λ525394c6bca0,
      rawHeaders: λ525394c6bca0
    };
  }
  connect(λ95c1ea38334f, λ50645786af93, λb04bf752faf2, λea90d9dd1396, λb3f8d7c09a68, λde8b64afe157, λ92f2ca794672) {
    return super.connect(λ95c1ea38334f, λ50645786af93, λe57dc434ca84(λb04bf752faf2), λea90d9dd1396, λb3f8d7c09a68, λde8b64afe157, λ92f2ca794672);
  }
}
