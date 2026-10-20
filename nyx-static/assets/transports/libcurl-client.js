import __ee6ee820f44db8aedc9d216055d4bd7be8a8e9b2fc2c8c5b19e5765f394bab31 from "\u002f\u006c\u0069\u0062\u0063\u0075\u0072\u006c\u002f\u0069\u006e\u0064\u0065\u0078\u002e\u006d\u006f\u0064\u0075\u006c\u0065\u002d\u0061\u0036\u0063\u0038\u0036\u0036\u0036\u0038\u0061\u0030\u0062\u0039\u002e\u006a\u0073";
import {
  preserveTransferErrors as __f0c8d49d7b109ae76ae49f5da51a86571ae097d3c5941ec938762fa9b785c1ab,
  requestWithTransferRetry as __aec2541fed0f828e28d3b695884d7b060d794b0ef497ea6951e733ea4baf3fbc,
} from "\u002e\u002f\u0040\u0072\u0035\u0064\u0037\u0039\u0030\u0065\u0064\u0037\u0061\u0030\u0031\u0032\u0065\u0063\u0031\u0032\u0064\u0064\u0061\u0039\u0031\u0064\u0061\u0033\u0021\u002e\u006a\u0073";
import { headerEntries as __c246a0e5a60486ecdd892ea8d45ba1a5f184878f1a482f4546e70458d47d6d67 } from "\u002e\u002f\u0040\u0072\u0034\u0061\u0039\u0037\u0061\u0030\u0065\u0063\u0064\u0061\u0061\u0064\u0031\u0066\u0032\u0036\u0066\u0036\u0039\u0066\u0036\u0061\u0063\u0036\u0021\u002e\u006a\u0073";
export default class __79dd88aeab0fb5efd81f5537b1fbadd3c72a3fb5df8bb6fbeaf273bfeceb4715 extends __ee6ee820f44db8aedc9d216055d4bd7be8a8e9b2fc2c8c5b19e5765f394bab31 {
  async init() {
    (await super.init(),
      __f0c8d49d7b109ae76ae49f5da51a86571ae097d3c5941ec938762fa9b785c1ab(this.session),
      (this.responseBudget = { bytes: 0 }));
  }
  request(
    __ee6ee820f44db8aedc9d216055d4bd7be8a8e9b2fc2c8c5b19e5765f394bab31,
    __f0c8d49d7b109ae76ae49f5da51a86571ae097d3c5941ec938762fa9b785c1ab,
    __5a7c5425f6ed9c23144a51aae4247c13b201008fa9f0375638a28e32e9bc02ec,
    __a5ea5a99a40d8e8a7ce93ddd87b2755609f1f05c63629e7dbcf5e9aa3d887e7c,
    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
  ) {
    return __aec2541fed0f828e28d3b695884d7b060d794b0ef497ea6951e733ea4baf3fbc(
      async () => {
        const __aec2541fed0f828e28d3b695884d7b060d794b0ef497ea6951e733ea4baf3fbc =
          await super.request(
            __ee6ee820f44db8aedc9d216055d4bd7be8a8e9b2fc2c8c5b19e5765f394bab31,
            __f0c8d49d7b109ae76ae49f5da51a86571ae097d3c5941ec938762fa9b785c1ab,
            __5a7c5425f6ed9c23144a51aae4247c13b201008fa9f0375638a28e32e9bc02ec,
            __a5ea5a99a40d8e8a7ce93ddd87b2755609f1f05c63629e7dbcf5e9aa3d887e7c,
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
          );
        return {
          ...__aec2541fed0f828e28d3b695884d7b060d794b0ef497ea6951e733ea4baf3fbc,
          headers: __c246a0e5a60486ecdd892ea8d45ba1a5f184878f1a482f4546e70458d47d6d67(
            __aec2541fed0f828e28d3b695884d7b060d794b0ef497ea6951e733ea4baf3fbc.headers,
          ),
        };
      },
      {
        method: __f0c8d49d7b109ae76ae49f5da51a86571ae097d3c5941ec938762fa9b785c1ab,
        body: __5a7c5425f6ed9c23144a51aae4247c13b201008fa9f0375638a28e32e9bc02ec,
        signal: __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
        budget: this.responseBudget,
      },
    );
  }
}
