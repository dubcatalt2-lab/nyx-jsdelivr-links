import λ1d85b8486be3 from "./@r892c9aef9e65afa53b3a5e77!.js";

import { headerEntries as λa9451dcba356, headerRecord as λ30881b53ea77 } from "./@r4a97a0ecdaad1f26f69f6ac6!.js";

export default class Ku extends λ1d85b8486be3 {
  async request(λ1d85b8486be3, λc25cde5dcb7c, λ0a155972836d, λe06cbf36fc35, λ83bf20d5a766) {
    const λ7464bdea27e9 = await super.request(λ1d85b8486be3, λc25cde5dcb7c, λ0a155972836d, λa9451dcba356(λe06cbf36fc35), λ83bf20d5a766), λ657df4df74f7 = λ30881b53ea77(λ7464bdea27e9.headers);
    return {
      ...λ7464bdea27e9,
      headers: λ657df4df74f7,
      rawHeaders: λ657df4df74f7
    };
  }
  connect(λ1d85b8486be3, λ30881b53ea77, λc25cde5dcb7c, λ0a155972836d, λe06cbf36fc35, λ83bf20d5a766, λ7464bdea27e9) {
    return super.connect(λ1d85b8486be3, λ30881b53ea77, λa9451dcba356(λc25cde5dcb7c), λ0a155972836d, λe06cbf36fc35, λ83bf20d5a766, λ7464bdea27e9);
  }
}
