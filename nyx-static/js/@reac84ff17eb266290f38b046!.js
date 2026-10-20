!(function () {
  "use strict";
  const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = "\u006e\u0079\u0078\u002e\u0061\u0069\u004d\u0065\u0073\u0073\u0061\u0067\u0065\u0073",
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = "\u006e\u0079\u0078\u002e\u0061\u0069\u0054\u0068\u0072\u0065\u0061\u0064\u0073\u002e\u0076\u0031",
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = "\u006e\u0079\u0078\u002e\u0061\u0069\u0041\u0063\u0074\u0069\u0076\u0065\u0054\u0068\u0072\u0065\u0061\u0064",
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = "\u006e\u0079\u0078\u002e\u0061\u0069\u004d\u006f\u0064\u0065\u006c",
    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = "\u006e\u0079\u0078\u002e\u0061\u0069\u0052\u0065\u0073\u0070\u006f\u006e\u0073\u0065\u0044\u0065\u0070\u0074\u0068",
    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = "\u006e\u0079\u0078\u002e\u0061\u0069\u0055\u0073\u0061\u0067\u0065\u002e\u0076\u0031",
    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = "";
  let __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = !1;
  const __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = 12e5,
    __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = 1600,
    __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = 18e3,
    __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 = new Set([
      "\u0069\u006d\u0061\u0067\u0065\u002f\u0070\u006e\u0067",
      "\u0069\u006d\u0061\u0067\u0065\u002f\u006a\u0070\u0065\u0067",
      "\u0069\u006d\u0061\u0067\u0065\u002f\u0077\u0065\u0062\u0070",
      "\u0069\u006d\u0061\u0067\u0065\u002f\u0067\u0069\u0066",
    ]),
    __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 = new Set(),
    __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe =
      document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0061\u0069\u002d\u0061\u0070\u0070\u005d"),
    __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a =
      document.getElementById("\u0066\u0065\u0065\u0064"),
    __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d =
      document.getElementById("\u0063\u006f\u006e\u0076\u0065\u0072\u0073\u0061\u0074\u0069\u006f\u006e"),
    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161 =
      document.getElementById("\u0066\u006f\u0072\u006d"),
    __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34 =
      document.getElementById("\u0069\u006e\u0070\u0075\u0074"),
    __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21 =
      document.getElementById("\u0073\u0065\u006e\u0064"),
    __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c =
      document.getElementById("\u006d\u006f\u0064\u0065\u006c"),
    __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 =
      document.getElementById("\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0053\u0065\u006c\u0065\u0063\u0074"),
    __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba =
      document.getElementById("\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0053\u0074\u0061\u0074\u0065"),
    __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed =
      document.getElementById("\u006d\u006f\u0064\u0065\u006c\u0050\u0069\u0063\u006b\u0065\u0072"),
    __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b =
      document.getElementById("\u006d\u006f\u0064\u0065\u006c\u0054\u0072\u0069\u0067\u0067\u0065\u0072"),
    __e3c7b38e84c27c3e546e6e603229d78351eaa60fabff2a12958e3b3f35427d4e =
      document.getElementById("\u006d\u006f\u0064\u0065\u006c\u0053\u0065\u006c\u0065\u0063\u0074\u0065\u0064"),
    __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb =
      document.getElementById("\u006d\u006f\u0064\u0065\u006c\u004d\u0065\u006e\u0075"),
    __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87 =
      document.getElementById("\u006d\u006f\u0064\u0065\u006c\u004f\u0070\u0074\u0069\u006f\u006e\u0073"),
    __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c =
      document.getElementById("\u0063\u006c\u0065\u0061\u0072"),
    __26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82 =
      document.getElementById("\u0074\u0068\u0072\u0065\u0061\u0064\u0054\u0069\u0074\u006c\u0065"),
    __8d22331976a8113666a0908c81e73aa73428cab2801e9b29ace9b37721493fda =
      document.getElementById("\u0063\u0068\u0061\u0072\u0061\u0063\u0074\u0065\u0072\u0043\u006f\u0075\u006e\u0074"),
    __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43 =
      document.getElementById("\u0061\u0069\u0053\u0069\u0064\u0065\u0062\u0061\u0072"),
    __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b =
      document.getElementById("\u0073\u0069\u0064\u0065\u0062\u0061\u0072\u0054\u006f\u0067\u0067\u006c\u0065"),
    __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6 =
      document.getElementById("\u0073\u0069\u0064\u0065\u0062\u0061\u0072\u0043\u006c\u006f\u0073\u0065"),
    __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7 =
      document.getElementById("\u0073\u0069\u0064\u0065\u0062\u0061\u0072\u0053\u0063\u0072\u0069\u006d"),
    __fee7105fc4d51af0577a7b27c6ef4e0cf85c90de87e72e9d1a6579f318300a72 =
      document.getElementById("\u006e\u0065\u0077\u0043\u0068\u0061\u0074"),
    __e89c06b9c8c138ab668108b5f84a303333ad66d3886346a0eb785642be515763 =
      document.getElementById("\u0074\u0065\u006d\u0070\u006f\u0072\u0061\u0072\u0079\u0043\u0068\u0061\u0074"),
    __b1beae86029a4f3a21d0d992ca0d2036eaaaae8e45994cac42b42d390c73e329 =
      document.getElementById("\u0074\u0068\u0072\u0065\u0061\u0064\u004c\u0069\u0073\u0074"),
    __3024b81c189fd2c8b2a9d40c5083c0a67b5bc98a00d6e0dc336123d41b1a0c7f =
      document.getElementById("\u0074\u0068\u0072\u0065\u0061\u0064\u0043\u006f\u0075\u006e\u0074"),
    __ed46735a7066924b61d2076cc7666ca73533276eec44191d16b834970c65bf6d =
      document.getElementById("\u0068\u0069\u0073\u0074\u006f\u0072\u0079\u0045\u006d\u0070\u0074\u0079"),
    __b769cfef6d38d8b555019ba9dbf653f1b85fbdc3ec8f99db5a9368ed7a200661 =
      document.getElementById("\u0074\u0068\u0072\u0065\u0061\u0064\u0053\u0065\u0061\u0072\u0063\u0068"),
    __d2aab0836d3c8a8d85c1c08050ef020cbdd6d0e9d50ae0173328a5d5cd612701 = [
      ...document.querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065\u002d\u0064\u0065\u0070\u0074\u0068\u005d"),
    ],
    __72a91b917bacdbcddd40e0b0aed73d716d3df7426f358b72f02cb51e3ea8899d =
      document.getElementById("\u0073\u0069\u0064\u0065\u0062\u0061\u0072\u004d\u006f\u0064\u0065\u006c\u004e\u0061\u006d\u0065"),
    __18ea2355b700bc3da376566033246086363e448236dec54f8a83a790ea161960 =
      document.getElementById("\u0075\u0073\u0061\u0067\u0065\u0057\u0065\u0065\u006b"),
    __99a0af1660cfe58affc3ff899430bd5f7454d63db4b4a7a04e0a92268413e998 =
      document.getElementById("\u0075\u0073\u0061\u0067\u0065\u0041\u006c\u006c"),
    __9d433778c84bb56320ac2926429ccbbc9e33af617b171cf71422a4a874f28af1 =
      document.getElementById("\u0075\u0073\u0061\u0067\u0065\u0052\u0065\u0071\u0075\u0065\u0073\u0074\u0073"),
    __153775183a87af39b37d038f0f2d9a41fb6f191283bb242f26b279c138ab61ea =
      document.getElementById("\u0061\u0069\u0050\u0072\u006f\u0066\u0069\u006c\u0065"),
    __3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2 =
      document.getElementById("\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u0041\u0076\u0061\u0074\u0061\u0072"),
    __cbe3e169b82a066efb87cecf43ee78a46c91fe23c1c18420de9d26beb1a60ea4 =
      document.getElementById("\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u0049\u006e\u0069\u0074\u0069\u0061\u006c"),
    __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3 =
      document.getElementById("\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u004e\u0061\u006d\u0065"),
    __eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454 =
      document.getElementById("\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u0048\u0061\u006e\u0064\u006c\u0065"),
    __ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90 =
      document.getElementById("\u0069\u006d\u0061\u0067\u0065\u0049\u006e\u0070\u0075\u0074"),
    __ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417 =
      document.getElementById("\u0061\u0074\u0074\u0061\u0063\u0068\u0049\u006d\u0061\u0067\u0065"),
    __75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5 =
      document.getElementById("\u0061\u0074\u0074\u0061\u0063\u0068\u006d\u0065\u006e\u0074\u0050\u0072\u0065\u0076\u0069\u0065\u0077"),
    __037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec =
      document.getElementById("\u0061\u0074\u0074\u0061\u0063\u0068\u006d\u0065\u006e\u0074\u0054\u0068\u0075\u006d\u0062\u006e\u0061\u0069\u006c"),
    __5285a5bbd045fe6fc6ebb94cc24c149a1dcccd7cfeb2f5de9c7a211dad268afa =
      document.getElementById("\u0061\u0074\u0074\u0061\u0063\u0068\u006d\u0065\u006e\u0074\u004e\u0061\u006d\u0065"),
    __7db994cf70023f7fa1ee37d64774e922da1a209d4cfac7b44a0d185f968b0a3b =
      document.getElementById("\u0061\u0074\u0074\u0061\u0063\u0068\u006d\u0065\u006e\u0074\u0053\u0074\u0061\u0074\u0075\u0073"),
    __d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c =
      document.getElementById("\u0072\u0065\u006d\u006f\u0076\u0065\u0041\u0074\u0074\u0061\u0063\u0068\u006d\u0065\u006e\u0074"),
    __96269fbafcaf1e59a066bbe22f9ec441fbf0ff3e38084b904ada564b445561a8 =
      document.getElementById("\u0073\u0063\u0072\u0065\u0065\u006e\u0050\u0072\u0065\u0076\u0069\u0065\u0077"),
    __a27fb158ddcbc635df4f915211d5c8e5d6a8c04827fe1281526c34bc41e8fb8b =
      document.getElementById("\u0073\u0063\u0072\u0065\u0065\u006e\u0056\u0069\u0064\u0065\u006f"),
    __98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13 =
      document.getElementById("\u0073\u0063\u0072\u0065\u0065\u006e\u0053\u0074\u0061\u0074\u0075\u0073"),
    __ee07b2c1f5ae5a68cf1a38fc099e028ffbe3e7bdd9c0223fa1ec952465f7acbf =
      document.getElementById("\u0073\u0068\u0061\u0072\u0065\u0053\u0063\u0072\u0065\u0065\u006e"),
    __34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837 =
      document.getElementById("\u0073\u0074\u006f\u0070\u0053\u0063\u0072\u0065\u0065\u006e\u0053\u0068\u0061\u0072\u0065");
  if (
    !(
      __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe &&
      __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a &&
      __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d &&
      __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161 &&
      __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34 &&
      __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21 &&
      __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c &&
      __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 &&
      __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed &&
      __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b &&
      __e3c7b38e84c27c3e546e6e603229d78351eaa60fabff2a12958e3b3f35427d4e &&
      __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb &&
      __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87 &&
      __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c &&
      __26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82 &&
      __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43 &&
      __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b &&
      __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6 &&
      __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7 &&
      __fee7105fc4d51af0577a7b27c6ef4e0cf85c90de87e72e9d1a6579f318300a72 &&
      __e89c06b9c8c138ab668108b5f84a303333ad66d3886346a0eb785642be515763 &&
      __b1beae86029a4f3a21d0d992ca0d2036eaaaae8e45994cac42b42d390c73e329 &&
      __3024b81c189fd2c8b2a9d40c5083c0a67b5bc98a00d6e0dc336123d41b1a0c7f &&
      __ed46735a7066924b61d2076cc7666ca73533276eec44191d16b834970c65bf6d &&
      __b769cfef6d38d8b555019ba9dbf653f1b85fbdc3ec8f99db5a9368ed7a200661 &&
      3 === __d2aab0836d3c8a8d85c1c08050ef020cbdd6d0e9d50ae0173328a5d5cd612701.length &&
      __72a91b917bacdbcddd40e0b0aed73d716d3df7426f358b72f02cb51e3ea8899d &&
      __18ea2355b700bc3da376566033246086363e448236dec54f8a83a790ea161960 &&
      __99a0af1660cfe58affc3ff899430bd5f7454d63db4b4a7a04e0a92268413e998 &&
      __9d433778c84bb56320ac2926429ccbbc9e33af617b171cf71422a4a874f28af1 &&
      __153775183a87af39b37d038f0f2d9a41fb6f191283bb242f26b279c138ab61ea &&
      __3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2 &&
      __cbe3e169b82a066efb87cecf43ee78a46c91fe23c1c18420de9d26beb1a60ea4 &&
      __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3 &&
      __eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454 &&
      __ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90 &&
      __ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417 &&
      __75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5 &&
      __037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec &&
      __5285a5bbd045fe6fc6ebb94cc24c149a1dcccd7cfeb2f5de9c7a211dad268afa &&
      __7db994cf70023f7fa1ee37d64774e922da1a209d4cfac7b44a0d185f968b0a3b &&
      __d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c &&
      __96269fbafcaf1e59a066bbe22f9ec441fbf0ff3e38084b904ada564b445561a8 &&
      __a27fb158ddcbc635df4f915211d5c8e5d6a8c04827fe1281526c34bc41e8fb8b &&
      __98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13 &&
      __ee07b2c1f5ae5a68cf1a38fc099e028ffbe3e7bdd9c0223fa1ec952465f7acbf &&
      __34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837
    )
  )
    return;
  let __a03f49e95f91224af5b136a0e23dcb87a6dadeb3f9d7f2a0a1bc0a0ffa3f7f6a,
    __66e401afb5509cbf5c4bb5624e18bcf319933c46cb9b07bc6c7f86affaa05b78 = null,
    __3abefec312ee58c7fe62ed56861d8dd221822df7f4adf805e11d7b6e7cea0012 = 0;
  const __8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5 =
    document.createElement("\u0064\u0069\u0076");
  ((__8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5.className =
    "\u0061\u0069\u002d\u0073\u0065\u006e\u0064\u002d\u0063\u006f\u006f\u006c\u0064\u006f\u0077\u006e"),
    (__8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5.hidden = !0),
    __8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5.setAttribute(
      "\u0072\u006f\u006c\u0065",
      "\u0073\u0074\u0061\u0074\u0075\u0073",
    ),
    (__8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5.style.cssText =
      "\u0066\u006f\u006e\u0074\u002d\u0073\u0069\u007a\u0065\u003a\u0031\u0032\u0070\u0078\u003b\u0074\u0065\u0078\u0074\u002d\u0061\u006c\u0069\u0067\u006e\u003a\u0063\u0065\u006e\u0074\u0065\u0072\u003b\u0070\u0061\u0064\u0064\u0069\u006e\u0067\u003a\u0034\u0070\u0078\u003b"),
    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.before(
      __8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5,
    ));
  let __386438b87474d2f2a7f9bcafb4095c3f466d499afdc8b7dc19046a9c96d5b10e = !0,
    __3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211 = [],
    __8a634624ecf034ed097cd5e7c1a9e014c7efed1bf92024f2b4af50aa6eb48c94 = !1,
    __8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433 = [],
    __93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb = "",
    __0159afb719a78ed8c8a3938ee144c930b121f1fd74d588b30e9186af4a2f89d7 = !1,
    __17637b72fc4733887b3a19c85d5d3c70864a8f76b0495e06a14055b0d0c65db6 = [],
    __ba14105c51bb0f53ea6c93b0e81a448b1f1c675a13c2b275c94ab1333860fa3c = null,
    __00608ea01db0bfd231b71dae9747f95df1bb6ae442fb96e53df2e709c0f4f7b4 = null,
    __7afa888e62ebfbac2e6002ec2d80426c0fd84774cdd464eebc432bfd97f1d538 = null,
    __972032759913c8d0b85613dfa8b33ba1f950c0a22bd240024f6a566a8885a74f = null,
    __800b423fb67fba61b04a9759cd74b02c49005295eb1e7ac6ecbc5489a9b58a85 = [];
  async function __fd19848ac69360eadd3ad8ebfb82354628baec31764b5277d32eb7b6f79b622c(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = {},
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      await (async function () {
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
          await (async function () {
            if (parent === window) return "";
            const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = `ai-${Date.now()}-${Math.random().toString(36).slice(2)}`;
            return new Promise(
              (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
                let __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = !1;
                const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = (
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  ) => {
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ||
                      ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = !0),
                      clearTimeout(
                        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                      ),
                      removeEventListener(
                        "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
                        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                      ),
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
                        String(
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || "",
                        ),
                      ));
                  },
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = (
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                  ) => {
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.source ===
                      parent &&
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.origin ===
                        location.origin &&
                      "\u006e\u0079\u0078\u003a\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065" ===
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.data
                          ?.type &&
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.data
                        .requestId ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
                      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.data
                          .token,
                      );
                  },
                  __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = setTimeout(
                    () => __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(""),
                    2500,
                  );
                (addEventListener(
                  "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                ),
                  parent.postMessage(
                    {
                      type: "\u006e\u0079\u0078\u003a\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0071\u0075\u0065\u0073\u0074",
                      requestId: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                    },
                    location.origin,
                  ));
              },
            );
          })();
        if (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)
          return __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96;
        __972032759913c8d0b85613dfa8b33ba1f950c0a22bd240024f6a566a8885a74f ||
          (__972032759913c8d0b85613dfa8b33ba1f950c0a22bd240024f6a566a8885a74f = (async () => {
            try {
              const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                  await fetch("\u002f\u0061\u0070\u0069\u002f\u0066\u006f\u0075\u006e\u0064\u0065\u0072\u002d\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u002f\u0061\u0075\u0074\u0068\u002d\u0063\u006f\u006e\u0066\u0069\u0067", {
                    cache: "\u006e\u006f\u002d\u0073\u0074\u006f\u0072\u0065",
                  }),
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                  await __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.json();
              if (
                !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.enabled ||
                !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.apiKey ||
                !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.projectId
              )
                return null;
              const [
                  {
                    initializeApp:
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                    getApps: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                  },
                  {
                    getAuth: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                    setPersistence:
                      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                    browserLocalPersistence:
                      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
                    onAuthStateChanged:
                      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
                  },
                ] = await Promise.all([
                  import("\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0067\u0073\u0074\u0061\u0074\u0069\u0063\u002e\u0063\u006f\u006d\u002f\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u006a\u0073\u002f\u0031\u0031\u002e\u0031\u0030\u002e\u0030\u002f\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u002d\u0061\u0070\u0070\u002e\u006a\u0073"),
                  import("\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0067\u0073\u0074\u0061\u0074\u0069\u0063\u002e\u0063\u006f\u006d\u002f\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u006a\u0073\u002f\u0031\u0031\u002e\u0031\u0030\u002e\u0030\u002f\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u002d\u0061\u0075\u0074\u0068\u002e\u006a\u0073"),
                ]),
                __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03().find(
                      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                        "\u006e\u0079\u0078\u002d\u0066\u006f\u0075\u006e\u0064\u0065\u0072\u002d\u006f\u0077\u006e\u0065\u0072" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.name,
                    ) ||
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(
                        {
                          apiKey:
                            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.apiKey,
                          authDomain: `${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.projectId}.firebaseapp.com`,
                          projectId:
                            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.projectId,
                        },
                        "\u006e\u0079\u0078\u002d\u0066\u006f\u0075\u006e\u0064\u0065\u0072\u002d\u006f\u0077\u006e\u0065\u0072",
                      ),
                  );
              try {
                await __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(
                  __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
                );
              } catch {}
              return (
                "\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" ==
                  typeof __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.authStateReady &&
                  (await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.authStateReady()),
                "\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" ==
                  typeof __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 &&
                  __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
                    __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
                    () => {
                      __342b0ab9499804405c03233753667f1eb72349e426fecd4a9fb2da0673b0d0c4();
                    },
                  ),
                __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238
              );
            } catch {
              return null;
            }
          })());
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
          await __972032759913c8d0b85613dfa8b33ba1f950c0a22bd240024f6a566a8885a74f;
        try {
          return __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.currentUser
            ? await __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.currentUser.getIdToken()
            : "";
        } catch {
          return "";
        }
      })();
    return {
      ...__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      "\u0078\u002d\u006e\u0079\u0078\u002d\u0061\u0069\u002d\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072": "\u0073\u0068\u0061\u0072\u0065\u0064",
      ...(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
        ? {
            Authorization: `Bearer ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5}`,
          }
        : {}),
    };
  }
  let __ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d = "";
  const __46d18b7d900224138364f734f03bee4c2597d91b3a6d5526a280ee4f28f7143f = () =>
      __ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d.startsWith("\u006e\u005f\u0061\u0070\u0069\u005f")
        ? "\u006e\u0079\u0078"
        : "\u006f\u0070\u0065\u006e\u0072\u006f\u0075\u0074\u0065\u0072",
    __e79b5c4ac2a428dff3df1ef1b27389af0b0e96faff06f40c634cb40a206196c9 =
      document.getElementById("\u0063\u0075\u0073\u0074\u006f\u006d\u004b\u0065\u0079\u0044\u0069\u0061\u006c\u006f\u0067");
  function __9424b58569d5ac344830f11e289b7923b433273ecad0b18a974a395a48c05a66() {
    ((__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797.innerHTML =
      __800b423fb67fba61b04a9759cd74b02c49005295eb1e7ac6ecbc5489a9b58a85
        .map(
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
            `<option value="${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id)}">${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.label)}</option>`,
        )
        .join("") || "\u003c\u006f\u0070\u0074\u0069\u006f\u006e\u0020\u0076\u0061\u006c\u0075\u0065\u003d\u0022\u0073\u0068\u0061\u0072\u0065\u0064\u0022\u003e\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072\u003c\u002f\u006f\u0070\u0074\u0069\u006f\u006e\u003e"),
      (__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797.value = "\u0073\u0068\u0061\u0072\u0065\u0064"),
      (__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797.disabled = !0),
      (__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797.title =
        __ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d
          ? "\u006e\u0079\u0078" === __46d18b7d900224138364f734f03bee4c2597d91b3a6d5526a280ee4f28f7143f()
            ? "\u004e\u0037\u0058\u0020\u0063\u0075\u0073\u0074\u006f\u006d\u0020\u006b\u0065\u0079"
            : "\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072\u0020\u0063\u0075\u0073\u0074\u006f\u006d\u0020\u006b\u0065\u0079"
          : "\u004e\u0037\u0058\u0020\u0073\u0068\u0061\u0072\u0065\u0064"),
      __ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d &&
        (__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797.options[0].textContent =
          __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797.title),
      __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba &&
        (__51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba.hidden = !0));
  }
  function __62516b3d67659acde2ed095c5e65043f9a756eddaa7c07346c546771330b5378() {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
      localStorage.getItem(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713) ||
      "\u006e\u006f\u0072\u006d\u0061\u006c";
    return ["\u006f\u0066\u0066", "\u006e\u006f\u0072\u006d\u0061\u006c", "\u0065\u0078\u0074\u0065\u006e\u0064\u0065\u0064"].includes(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    )
      ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
      : "\u006e\u006f\u0072\u006d\u0061\u006c";
  }
  function __b66636d73568f95ee2630b81b72a615bf9765be1be3bf82a5a8cf7580ab56691() {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
      __62516b3d67659acde2ed095c5e65043f9a756eddaa7c07346c546771330b5378();
    __d2aab0836d3c8a8d85c1c08050ef020cbdd6d0e9d50ae0173328a5d5cd612701.forEach(
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dataset
            .responseDepth === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96;
        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.classList.toggle(
          "\u0069\u0073\u002d\u0061\u0063\u0074\u0069\u0076\u0065",
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        ),
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.setAttribute(
            "\u0061\u0072\u0069\u0061\u002d\u0070\u0072\u0065\u0073\u0073\u0065\u0064",
            String(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
          ));
      },
    );
  }
  (__e79b5c4ac2a428dff3df1ef1b27389af0b0e96faff06f40c634cb40a206196c9?.addEventListener(
    "\u0063\u006c\u006f\u0073\u0065",
    () => {
      document.getElementById("\u0063\u0075\u0073\u0074\u006f\u006d\u004b\u0065\u0079\u0049\u006e\u0070\u0075\u0074").value = "";
    },
  ),
    document
      .getElementById("\u0063\u0075\u0073\u0074\u006f\u006d\u004b\u0065\u0079\u0042\u0075\u0074\u0074\u006f\u006e")
      ?.addEventListener("\u0063\u006c\u0069\u0063\u006b", () =>
        __e79b5c4ac2a428dff3df1ef1b27389af0b0e96faff06f40c634cb40a206196c9.showModal(),
      ),
    document
      .getElementById("\u0063\u0075\u0073\u0074\u006f\u006d\u004b\u0065\u0079\u0043\u006c\u006f\u0073\u0065")
      ?.addEventListener("\u0063\u006c\u0069\u0063\u006b", () =>
        __e79b5c4ac2a428dff3df1ef1b27389af0b0e96faff06f40c634cb40a206196c9.close(),
      ),
    document.getElementById("\u0063\u0075\u0073\u0074\u006f\u006d\u004b\u0065\u0079\u0052\u0065\u006d\u006f\u0076\u0065")?.addEventListener("\u0063\u006c\u0069\u0063\u006b", () => {
      ((__ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d = ""),
        (document.getElementById("\u0063\u0075\u0073\u0074\u006f\u006d\u004b\u0065\u0079\u0049\u006e\u0070\u0075\u0074").value = ""),
        __e79b5c4ac2a428dff3df1ef1b27389af0b0e96faff06f40c634cb40a206196c9.close(),
        __9424b58569d5ac344830f11e289b7923b433273ecad0b18a974a395a48c05a66(),
        __142365502a8b87ca1ebd149d88da5a5fda8ed864077446cb4ab7418934dc7e2d(),
        __342b0ab9499804405c03233753667f1eb72349e426fecd4a9fb2da0673b0d0c4());
    }),
    document
      .getElementById("\u0063\u0075\u0073\u0074\u006f\u006d\u004b\u0065\u0079\u0046\u006f\u0072\u006d")
      ?.addEventListener(
        "\u0073\u0075\u0062\u006d\u0069\u0074",
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault();
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              document.getElementById("\u0063\u0075\u0073\u0074\u006f\u006d\u004b\u0065\u0079\u0049\u006e\u0070\u0075\u0074"),
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.value.trim();
          /^n_api_[A-Za-z0-9_-]{43}$/.test(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          ) ||
          /^sk-or-[A-Za-z0-9_-]{20,}$/.test(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          )
            ? ((__ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d =
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
              (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.value = ""),
              (document.getElementById("\u0063\u0075\u0073\u0074\u006f\u006d\u004b\u0065\u0079\u0045\u0072\u0072\u006f\u0072").textContent = ""),
              __e79b5c4ac2a428dff3df1ef1b27389af0b0e96faff06f40c634cb40a206196c9.close(),
              __9424b58569d5ac344830f11e289b7923b433273ecad0b18a974a395a48c05a66(),
              __142365502a8b87ca1ebd149d88da5a5fda8ed864077446cb4ab7418934dc7e2d(),
              __342b0ab9499804405c03233753667f1eb72349e426fecd4a9fb2da0673b0d0c4())
            : (document.getElementById("\u0063\u0075\u0073\u0074\u006f\u006d\u004b\u0065\u0079\u0045\u0072\u0072\u006f\u0072").textContent =
                "\u0045\u006e\u0074\u0065\u0072\u0020\u0061\u0020\u0076\u0061\u006c\u0069\u0064\u0020\u004e\u0037\u0058\u0020\u006f\u0072\u0020\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072\u0020\u0041\u0050\u0049\u0020\u006b\u0065\u0079\u002e");
        },
      ));
  let __a7c6cc0301f7847a9751a2f91004be6fbb9ecafe2819015e092a436c3f7692af,
    __3ee99e203c628e02698648ca1623c313036d654af0b70898a868f82e8cb6e5e5 = 0;
  const __d68adf22249c19c5f205dee53d2c460d41f306f66aa7aea30c6d65e18a3590c5 =
    document.createElement("\u0070");
  async function __342b0ab9499804405c03233753667f1eb72349e426fecd4a9fb2da0673b0d0c4() {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
      ++__3ee99e203c628e02698648ca1623c313036d654af0b70898a868f82e8cb6e5e5;
    (__a7c6cc0301f7847a9751a2f91004be6fbb9ecafe2819015e092a436c3f7692af?.abort(),
      (__a7c6cc0301f7847a9751a2f91004be6fbb9ecafe2819015e092a436c3f7692af = new AbortController()));
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
        __a7c6cc0301f7847a9751a2f91004be6fbb9ecafe2819015e092a436c3f7692af.signal,
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = [
        __18ea2355b700bc3da376566033246086363e448236dec54f8a83a790ea161960,
        __99a0af1660cfe58affc3ff899430bd5f7454d63db4b4a7a04e0a92268413e998,
        __9d433778c84bb56320ac2926429ccbbc9e33af617b171cf71422a4a874f28af1,
      ];
    if (
      (["\u0052\u0065\u006d\u0061\u0069\u006e\u0069\u006e\u0067", "\u0055\u0073\u0065\u0064", "\u0050\u0065\u006e\u0064\u0069\u006e\u0067"].forEach(
        (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ) =>
          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c[
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ].parentElement.querySelector("\u0073\u006d\u0061\u006c\u006c").textContent =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
      ),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.forEach(
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.textContent =
            "\u2014"),
      ),
      __ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d)
    )
      __d68adf22249c19c5f205dee53d2c460d41f306f66aa7aea30c6d65e18a3590c5.textContent =
        "\u006e\u0079\u0078" === __46d18b7d900224138364f734f03bee4c2597d91b3a6d5526a280ee4f28f7143f()
          ? "\u0043\u0075\u0073\u0074\u006f\u006d\u0020\u006b\u0065\u0079\u0020\u0062\u0061\u006c\u0061\u006e\u0063\u0065\u0020\u0069\u0073\u0020\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0069\u006e\u0020\u0079\u006f\u0075\u0072\u0020\u0041\u0050\u0049\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002e"
          : "\u0055\u0073\u0061\u0067\u0065\u0020\u0069\u0073\u0020\u0062\u0069\u006c\u006c\u0065\u0064\u0020\u0074\u006f\u0020\u0079\u006f\u0075\u0072\u0020\u006f\u0077\u006e\u0020\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072\u0020\u006b\u0065\u0079\u002e";
    else {
      __d68adf22249c19c5f205dee53d2c460d41f306f66aa7aea30c6d65e18a3590c5.textContent =
        "\u0043\u0068\u0065\u0063\u006b\u0069\u006e\u0067\u0020\u0061\u006c\u006c\u006f\u0077\u0061\u006e\u0063\u0065\u002e\u002e\u002e";
      try {
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
          await __fd19848ac69360eadd3ad8ebfb82354628baec31764b5277d32eb7b6f79b622c({
            accept: "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
          });
        if (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 !==
          __3ee99e203c628e02698648ca1623c313036d654af0b70898a868f82e8cb6e5e5
        )
          return;
        const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = await fetch(
            __6db3dc44fa6b2c1dbc899fa9fc29e97a45eaf531159ca375ae2de64abaccf780()
              ? "\u002f\u0061\u0070\u0069\u002f\u0074\u0075\u0074\u0073\u0069\u002d\u0061\u0069\u002f\u0075\u0073\u0061\u0067\u0065"
              : "\u002f\u0061\u0070\u0069\u002f\u006e\u0079\u0078\u002d\u0061\u0069\u002f\u0075\u0073\u0061\u0067\u0065",
            {
              headers: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
              signal: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              cache: "\u006e\u006f\u002d\u0073\u0074\u006f\u0072\u0065",
            },
          ),
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
            await __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.json();
        if (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 !==
          __3ee99e203c628e02698648ca1623c313036d654af0b70898a868f82e8cb6e5e5
        )
          return;
        if (!__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.ok)
          throw new Error(
            401 === __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.status
              ? "\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0074\u006f\u0020\u0073\u0065\u0065\u0020\u0079\u006f\u0075\u0072\u0020\u0061\u006c\u006c\u006f\u0077\u0061\u006e\u0063\u0065\u002e"
              : __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.error ||
                "\u0041\u006c\u006c\u006f\u0077\u0061\u006e\u0063\u0065\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e",
          );
        const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.tokens;
        if (
          !__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a ||
          !Number.isFinite(
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.used,
          ) ||
          !Number.isFinite(
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.pending,
          )
        )
          throw new Error("\u0041\u006c\u006c\u006f\u0077\u0061\u006e\u0063\u0065\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e");
        const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ) =>
          new Intl.NumberFormat().format(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          );
        ((__18ea2355b700bc3da376566033246086363e448236dec54f8a83a790ea161960.textContent =
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.unlimited
            ? "\u0055\u006e\u006c\u0069\u006d\u0069\u0074\u0065\u0064"
            : __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(
                __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.remaining,
              )),
          (__99a0af1660cfe58affc3ff899430bd5f7454d63db4b4a7a04e0a92268413e998.textContent =
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.used,
            )),
          (__9d433778c84bb56320ac2926429ccbbc9e33af617b171cf71422a4a874f28af1.textContent =
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.pending,
            )));
        const __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
            "\u0062\u0072\u006f\u0077\u0073\u0065\u0072" === __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.scope
              ? "\u0053\u0068\u0061\u0072\u0065\u0064\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072"
              : "\u0065\u0078\u0070\u0065\u006e\u0073\u0069\u0076\u0065\u002d\u006d\u006f\u0064\u0065\u006c\u0073" ===
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.scope
                ? "\u0045\u0078\u0070\u0065\u006e\u0073\u0069\u0076\u0065\u0020\u006d\u006f\u0064\u0065\u006c\u0073"
                : "\u0041\u0063\u0063\u006f\u0075\u006e\u0074",
          __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.resetAt
              ? ` Resets ${new Date(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.resetAt).toLocaleString()}.`
              : "\u0020\u0053\u0074\u0061\u0072\u0074\u0073\u0020\u0077\u0069\u0074\u0068\u0020\u0079\u006f\u0075\u0072\u0020\u0066\u0069\u0072\u0073\u0074\u0020\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u002e";
        ((__d68adf22249c19c5f205dee53d2c460d41f306f66aa7aea30c6d65e18a3590c5.textContent =
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.unlimited
            ? "\u004f\u0077\u006e\u0065\u0072\u0020\u002d\u0020\u006e\u006f\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0074\u006f\u006b\u0065\u006e\u0020\u006c\u0069\u006d\u0069\u0074\u002e"
            : `${__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2} - ${__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.limit)} tokens / 4 days.${__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238}`),
          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.pending &&
            (__d68adf22249c19c5f205dee53d2c460d41f306f66aa7aea30c6d65e18a3590c5.textContent +=
              "\u0020\u0050\u0065\u006e\u0064\u0069\u006e\u0067\u0020\u0074\u006f\u006b\u0065\u006e\u0073\u0020\u0061\u0072\u0065\u0020\u0072\u0065\u0073\u0065\u0072\u0076\u0065\u0064\u0020\u0066\u006f\u0072\u0020\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u0073\u0020\u0061\u0077\u0061\u0069\u0074\u0069\u006e\u0067\u0020\u0066\u0069\u006e\u0061\u006c\u0020\u0075\u0073\u0061\u0067\u0065\u002e"),
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.pendingCostsUsd > 0 &&
            (__d68adf22249c19c5f205dee53d2c460d41f306f66aa7aea30c6d65e18a3590c5.textContent += ` Provider costs awaiting confirmation: $${__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.pendingCostsUsd.toFixed(4)}.`));
        const __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f =
          "\u0061\u006e\u0074\u0068\u0072\u006f\u0070\u0069\u0063\u002f\u0063\u006c\u0061\u0075\u0064\u0065\u002d\u0068\u0061\u0069\u006b\u0075\u002d\u0034\u002e\u0035" ===
          __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.value
            ? __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.modelCaps?.haiku
            : /^~?anthropic\/claude-(opus|fable)/.test(
                  __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.value,
                )
              ? __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.modelCaps?.claude
              : null;
        (!__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f ||
          null === __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.limit ||
          ("\u0061\u006e\u0074\u0068\u0072\u006f\u0070\u0069\u0063\u002f\u0063\u006c\u0061\u0075\u0064\u0065\u002d\u0066\u0061\u0062\u006c\u0065\u002d\u0035\u002e\u0031" ===
            __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.value &&
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.fableTrial) ||
          (__d68adf22249c19c5f205dee53d2c460d41f306f66aa7aea30c6d65e18a3590c5.textContent += ` Claude: $${__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.remaining.toFixed(4)} of $${__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.limit.toFixed(2)} remaining.`),
          !__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.unlimited &&
            "\u0061\u006e\u0074\u0068\u0072\u006f\u0070\u0069\u0063\u002f\u0063\u006c\u0061\u0075\u0064\u0065\u002d\u006f\u0070\u0075\u0073\u002d\u0035\u002e\u0035" ===
              __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.value &&
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.modelCaps?.opus55 &&
            (__d68adf22249c19c5f205dee53d2c460d41f306f66aa7aea30c6d65e18a3590c5.textContent += ` Opus: ${__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.modelCaps.opus55.remaining)} tokens remaining.`),
          !__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.unlimited &&
            "\u0067\u006f\u006f\u0067\u006c\u0065\u002f\u0067\u0065\u006d\u0069\u006e\u0069\u002d\u0032\u002e\u0035\u002d\u0066\u006c\u0061\u0073\u0068\u002d\u0069\u006d\u0061\u0067\u0065" ===
              __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.value &&
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.modelCaps?.images &&
            (__d68adf22249c19c5f205dee53d2c460d41f306f66aa7aea30c6d65e18a3590c5.textContent += ` Images: ${__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.modelCaps.images.remaining} remaining.`),
          "\u0061\u006e\u0074\u0068\u0072\u006f\u0070\u0069\u0063\u002f\u0063\u006c\u0061\u0075\u0064\u0065\u002d\u0066\u0061\u0062\u006c\u0065\u002d\u0035\u002e\u0031" ===
            __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.value &&
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.fableTrial &&
            (__d68adf22249c19c5f205dee53d2c460d41f306f66aa7aea30c6d65e18a3590c5.textContent += ` Fable trial: ${__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.fableTrial.messagesRemaining} of ${__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.fableTrial.messageLimit} messages left. Up to $0.05 of output per reply; input billed separately. $1.50 shared trial budget. Ends ${new Date(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.fableTrial.endsAt).toLocaleString()}. Reserved attempts count; no reset.`),
          (__d68adf22249c19c5f205dee53d2c460d41f306f66aa7aea30c6d65e18a3590c5.textContent +=
            "\u0020\u0043\u006f\u0075\u006e\u0074\u0073\u0020\u0069\u006e\u0070\u0075\u0074\u002c\u0020\u0063\u006f\u006e\u0076\u0065\u0072\u0073\u0061\u0074\u0069\u006f\u006e\u0020\u0068\u0069\u0073\u0074\u006f\u0072\u0079\u0020\u0061\u006e\u0064\u0020\u006f\u0075\u0074\u0070\u0075\u0074\u0020\u0074\u006f\u006b\u0065\u006e\u0073\u002e"));
      } catch (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03) {
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ===
          __3ee99e203c628e02698648ca1623c313036d654af0b70898a868f82e8cb6e5e5 &&
          "\u0041\u0062\u006f\u0072\u0074\u0045\u0072\u0072\u006f\u0072" !==
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.name &&
          (__d68adf22249c19c5f205dee53d2c460d41f306f66aa7aea30c6d65e18a3590c5.textContent =
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.message ||
            "\u0041\u006c\u006c\u006f\u0077\u0061\u006e\u0063\u0065\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e\u0020\u0054\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006e\u0020\u0073\u0068\u006f\u0072\u0074\u006c\u0079\u002e");
      }
    }
  }
  function __873b86a00f690ff2f7422c1a8cd3a4eb9b66caaebb072c9bdd29b047f36257ec(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = localStorage.getItem(
      "\u006e\u0079\u0078\u002e\u0074\u0068\u0065\u006d\u0065",
    ) || "\u0064\u0065\u0066\u0061\u0075\u006c\u0074",
  ) {
    if ("\u0074\u0075\u0074\u0073\u0069" === document.documentElement.dataset.appShell) return;
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
        String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || "\u0064\u0065\u0066\u0061\u0075\u006c\u0074")
          .trim()
          .toLowerCase() || "\u0064\u0065\u0066\u0061\u0075\u006c\u0074",
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = document.documentElement;
    (Object.entries({
      "\u002d\u002d\u0061\u0069\u002d\u0062\u0067": "\u0023\u0030\u0030\u0030\u0030\u0030\u0030",
      "\u002d\u002d\u0061\u0069\u002d\u0062\u0067\u002d\u0064\u0065\u0065\u0070": "\u0023\u0030\u0030\u0030\u0030\u0030\u0030",
      "\u002d\u002d\u0061\u0069\u002d\u0073\u0075\u0072\u0066\u0061\u0063\u0065": "\u0023\u0030\u0038\u0030\u0038\u0030\u0038",
      "\u002d\u002d\u0061\u0069\u002d\u0073\u0075\u0072\u0066\u0061\u0063\u0065\u002d\u0072\u0061\u0069\u0073\u0065\u0064": "\u0023\u0030\u0065\u0030\u0065\u0030\u0065",
      "\u002d\u002d\u0061\u0069\u002d\u0073\u0075\u0072\u0066\u0061\u0063\u0065\u002d\u0068\u006f\u0076\u0065\u0072": "\u0023\u0031\u0034\u0031\u0034\u0031\u0034",
      "\u002d\u002d\u0061\u0069\u002d\u0062\u006f\u0072\u0064\u0065\u0072": "\u0072\u0067\u0062\u0061\u0028\u0032\u0035\u0035\u002c\u0032\u0035\u0035\u002c\u0032\u0035\u0035\u002c\u002e\u0031\u0030\u0029",
      "\u002d\u002d\u0061\u0069\u002d\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0073\u0074\u0072\u006f\u006e\u0067": "\u0072\u0067\u0062\u0061\u0028\u0032\u0035\u0035\u002c\u0032\u0035\u0035\u002c\u0032\u0035\u0035\u002c\u002e\u0031\u0038\u0029",
      "\u002d\u002d\u0061\u0069\u002d\u0074\u0065\u0078\u0074": "\u0023\u0066\u0037\u0066\u0037\u0066\u0038",
      "\u002d\u002d\u0061\u0069\u002d\u0074\u0065\u0078\u0074\u002d\u0073\u006f\u0066\u0074": "\u0023\u0064\u0037\u0064\u0037\u0064\u0062",
      "\u002d\u002d\u0061\u0069\u002d\u006d\u0075\u0074\u0065\u0064": "\u0023\u0039\u0032\u0039\u0032\u0039\u0039",
      "\u002d\u002d\u0061\u0069\u002d\u006d\u0075\u0074\u0065\u0064\u002d\u0064\u0061\u0072\u006b": "\u0023\u0036\u0038\u0036\u0038\u0036\u0066",
      "\u002d\u002d\u0061\u0069\u002d\u0061\u0063\u0063\u0065\u006e\u0074": "\u0023\u0064\u0037\u0064\u0037\u0064\u0063",
      "\u002d\u002d\u0061\u0069\u002d\u0061\u0063\u0063\u0065\u006e\u0074\u002d\u0062\u0072\u0069\u0067\u0068\u0074": "\u0023\u0066\u0037\u0066\u0037\u0066\u0038",
      "\u002d\u002d\u0061\u0069\u002d\u0061\u0063\u0063\u0065\u006e\u0074\u002d\u0073\u006f\u0066\u0074": "\u0072\u0067\u0062\u0061\u0028\u0032\u0035\u0035\u002c\u0032\u0035\u0035\u002c\u0032\u0035\u0035\u002c\u002e\u0030\u0037\u0029",
      "\u002d\u002d\u0061\u0069\u002d\u0061\u0063\u0063\u0065\u006e\u0074\u002d\u0062\u006f\u0072\u0064\u0065\u0072": "\u0072\u0067\u0062\u0061\u0028\u0032\u0035\u0035\u002c\u0032\u0035\u0035\u002c\u0032\u0035\u0035\u002c\u002e\u0031\u0038\u0029",
      "\u002d\u002d\u0061\u0069\u002d\u0061\u0063\u0063\u0065\u006e\u0074\u002d\u0066\u006f\u0072\u0065\u0067\u0072\u006f\u0075\u006e\u0064": "\u0023\u0030\u0035\u0030\u0035\u0030\u0035",
      "\u002d\u002d\u0061\u0069\u002d\u0061\u0063\u0063\u0065\u006e\u0074\u002d\u0067\u006c\u006f\u0077": "\u0072\u0067\u0062\u0061\u0028\u0032\u0035\u0035\u002c\u0032\u0035\u0035\u002c\u0032\u0035\u0035\u002c\u002e\u0030\u0038\u0029",
      "\u002d\u002d\u0061\u0069\u002d\u0074\u0068\u0065\u006d\u0065\u002d\u0068\u006f\u0076\u0065\u0072\u002d\u0062\u006f\u0072\u0064\u0065\u0072": "\u0023\u0038\u0061\u0061\u0065\u0065\u0032",
    }).forEach(
      ([
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      ]) =>
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.style.setProperty(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ),
    ),
      (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.dataset.n7xTheme =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
      (document.body.dataset.n7xTheme =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
      (document.body.className = document.body.className.replace(/\btheme-[\w-]+\b/g, "").trim()),
      document.body.classList.add(
        `theme-${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5}`,
      ),
      __0e8a6d1bc97ab98cf703324d0e0e366a651559fae879579fcdd8b18acab33b09(
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      ));
  }
  function __5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    return String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ?? "").replace(
      /[&<>"']/g,
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
        ({
          "\u0026": "\u0026\u0061\u006d\u0070\u003b",
          "\u003c": "\u0026\u006c\u0074\u003b",
          "\u003e": "\u0026\u0067\u0074\u003b",
          "\u0022": "\u0026\u0071\u0075\u006f\u0074\u003b",
          "\u0027": "\u0026\u0023\u0033\u0039\u003b",
        })[__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96],
    );
  }
  function __5ea342d1cfd9f6ec81afd2a89f838fcf564e58109239eebedf1a0061880697ca(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = String(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.content || "",
    );
    if (
      !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ||
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length >
        __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239
    )
      return null;
    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
      String(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.name ||
          "\u0070\u0061\u0073\u0074\u0065\u0064\u002d\u0074\u0065\u0078\u0074\u002e\u0074\u0078\u0074",
      )
        .replace(/[\\/:*?"<>|\x00-\x1f]/g, "\u002d")
        .slice(0, 100) || "\u0070\u0061\u0073\u0074\u0065\u0064\u002d\u0074\u0065\u0078\u0074\u002e\u0074\u0078\u0074";
    return {
      name: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
        .toLowerCase()
        .endsWith("\u002e\u0074\u0078\u0074")
        ? __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
        : `${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c}.txt`,
      content: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      size:
        Number(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.size) ||
        new Blob([__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5], {
          type: "\u0074\u0065\u0078\u0074\u002f\u0070\u006c\u0061\u0069\u006e",
        }).size,
    };
  }
  ((__d68adf22249c19c5f205dee53d2c460d41f306f66aa7aea30c6d65e18a3590c5.id = "\u0075\u0073\u0061\u0067\u0065\u0053\u0074\u0061\u0074\u0075\u0073"),
    __d68adf22249c19c5f205dee53d2c460d41f306f66aa7aea30c6d65e18a3590c5.setAttribute(
      "\u0072\u006f\u006c\u0065",
      "\u0073\u0074\u0061\u0074\u0075\u0073",
    ),
    (__d68adf22249c19c5f205dee53d2c460d41f306f66aa7aea30c6d65e18a3590c5.style.cssText =
      "\u0066\u006f\u006e\u0074\u002d\u0073\u0069\u007a\u0065\u003a\u0031\u0032\u0070\u0078\u003b\u006c\u0069\u006e\u0065\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u0031\u002e\u0035\u003b\u0063\u006f\u006c\u006f\u0072\u003a\u0076\u0061\u0072\u0028\u002d\u002d\u0061\u0069\u002d\u006d\u0075\u0074\u0065\u0064\u0029\u003b\u006d\u0061\u0072\u0067\u0069\u006e\u003a\u0031\u0030\u0070\u0078\u0020\u0030\u0020\u0030\u003b\u006f\u0076\u0065\u0072\u0066\u006c\u006f\u0077\u002d\u0077\u0072\u0061\u0070\u003a\u0061\u006e\u0079\u0077\u0068\u0065\u0072\u0065"),
    __18ea2355b700bc3da376566033246086363e448236dec54f8a83a790ea161960
      .closest("\u0073\u0065\u0063\u0074\u0069\u006f\u006e")
      .append(__d68adf22249c19c5f205dee53d2c460d41f306f66aa7aea30c6d65e18a3590c5));
  const __259662ca3c6d31818950d16cdb4d6a741cf5409a367d0e1b56988004b7d0d6ec = new Map();
  function __37e8ce9abe97de314046d2ca5959938599ed734a941539567c7fca16b4943890() {
    return new Promise(
      (
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      ) => {
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = indexedDB.open(
          "\u006e\u0079\u0078\u002d\u0061\u0069\u002d\u0069\u006d\u0061\u0067\u0065\u0073",
          1,
        );
        ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onupgradeneeded = () =>
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.result.createObjectStore(
            "\u0069\u006d\u0061\u0067\u0065\u0073",
            {
              keyPath: "\u0069\u0064",
            },
          )),
          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onsuccess = () =>
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.result,
            )),
          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onerror = () =>
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.error,
            )));
      },
    );
  }
  async function __fac5552d8ca9e8594b4ade43fe88eed003bb5afad2fda9d44bc9fca79f780be0(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    if (
      "\u0073\u0074\u0072\u0069\u006e\u0067" != typeof __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.length > 6291456 ||
      !/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      )
    )
      throw new Error("\u0054\u0068\u0065\u0020\u006d\u006f\u0064\u0065\u006c\u0020\u0072\u0065\u0074\u0075\u0072\u006e\u0065\u0064\u0020\u0061\u006e\u0020\u0075\u006e\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u0065\u0064\u0020\u006f\u0072\u0020\u006f\u0076\u0065\u0072\u0073\u0069\u007a\u0065\u0064\u0020\u0069\u006d\u0061\u0067\u0065\u002e");
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = new Image();
    if (
      ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.src =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
      await __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
        .decode()
        .catch(() => {
          throw new Error("\u0054\u0068\u0065\u0020\u006d\u006f\u0064\u0065\u006c\u0020\u0072\u0065\u0074\u0075\u0072\u006e\u0065\u0064\u0020\u0069\u006e\u0076\u0061\u006c\u0069\u0064\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0064\u0061\u0074\u0061\u002e");
        }),
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.naturalWidth *
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.naturalHeight >
        2e7)
    )
      throw new Error("\u0054\u0068\u0065\u0020\u0067\u0065\u006e\u0065\u0072\u0061\u0074\u0065\u0064\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0064\u0069\u006d\u0065\u006e\u0073\u0069\u006f\u006e\u0073\u0020\u0061\u0072\u0065\u0020\u0074\u006f\u006f\u0020\u006c\u0061\u0072\u0067\u0065\u002e");
    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = {
      id: crypto.randomUUID(),
      dataUrl: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      createdAt: Date.now(),
      saved: !1,
    };
    for (
      __259662ca3c6d31818950d16cdb4d6a741cf5409a367d0e1b56988004b7d0d6ec.set(
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id,
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
      );
      __259662ca3c6d31818950d16cdb4d6a741cf5409a367d0e1b56988004b7d0d6ec.size > 20;

    )
      __259662ca3c6d31818950d16cdb4d6a741cf5409a367d0e1b56988004b7d0d6ec.delete(
        __259662ca3c6d31818950d16cdb4d6a741cf5409a367d0e1b56988004b7d0d6ec.keys().next().value,
      );
    if (!__0159afb719a78ed8c8a3938ee144c930b121f1fd74d588b30e9186af4a2f89d7) {
      let __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96;
      try {
        ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
          await __37e8ce9abe97de314046d2ca5959938599ed734a941539567c7fca16b4943890()),
          await new Promise(
            (
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
            ) => {
              const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.transaction(
                    "\u0069\u006d\u0061\u0067\u0065\u0073",
                    "\u0072\u0065\u0061\u0064\u0077\u0072\u0069\u0074\u0065",
                  ),
                __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.objectStore(
                    "\u0069\u006d\u0061\u0067\u0065\u0073",
                  ),
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                  __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.getAll();
              ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.onsuccess =
                () => {
                  const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.result.sort(
                      (
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                      ) =>
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.createdAt -
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.createdAt,
                    );
                  for (
                    ;
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.length >= 20;

                  )
                    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.delete(
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.shift().id,
                    );
                  __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.put({
                    ...__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                    saved: !0,
                  });
                }),
                (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.oncomplete =
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
                (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.onerror = () =>
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.error,
                  )),
                (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.onabort = () =>
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.error,
                  )));
            },
          ),
          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.saved = !0));
      } catch {
      } finally {
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.close();
      }
    }
    return __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id;
  }
  async function __39053f711d861234a1caa9142d12d9d933153846f62df2e5ffb2f8e72a90586e(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
  ) {
    let __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
        __259662ca3c6d31818950d16cdb4d6a741cf5409a367d0e1b56988004b7d0d6ec.get(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        );
    if (!__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03)
      try {
        ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
          await __37e8ce9abe97de314046d2ca5959938599ed734a941539567c7fca16b4943890()),
          (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = await new Promise(
            (
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
            ) => {
              const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
                  .transaction("\u0069\u006d\u0061\u0067\u0065\u0073")
                  .objectStore("\u0069\u006d\u0061\u0067\u0065\u0073")
                  .get(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5);
              ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.onsuccess = () =>
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.result,
                )),
                (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.onerror = () =>
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.error,
                  )));
            },
          )));
      } catch {
      } finally {
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.close();
      }
    const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
      document.createElement("\u0066\u0069\u0067\u0075\u0072\u0065");
    if (
      ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.className =
        "\u0061\u0069\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u002d\u0061\u0074\u0074\u0061\u0063\u0068\u006d\u0065\u006e\u0074\u0020\u0061\u0069\u002d\u0067\u0065\u006e\u0065\u0072\u0061\u0074\u0065\u0064\u002d\u0069\u006d\u0061\u0067\u0065"),
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 &&
        /^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.dataUrl,
        ) &&
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.dataUrl.length <=
          6291456)
    ) {
      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
        document.createElement("\u0069\u006d\u0067");
      ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.src =
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.dataUrl),
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.alt =
          "\u0041\u0049\u002d\u0067\u0065\u006e\u0065\u0072\u0061\u0074\u0065\u0064\u0020\u0069\u006d\u0061\u0067\u0065"),
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.loading = "\u006c\u0061\u007a\u0079"));
      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
          document.createElement("\u0066\u0069\u0067\u0063\u0061\u0070\u0074\u0069\u006f\u006e"),
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
          document.createElement("\u0061");
      ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.href =
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.dataUrl),
        (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.download =
          "\u006e\u0079\u0078\u002d\u0069\u006d\u0061\u0067\u0065\u002e" +
          (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.dataUrl.startsWith(
            "\u0064\u0061\u0074\u0061\u003a\u0069\u006d\u0061\u0067\u0065\u002f\u006a\u0070\u0065\u0067",
          )
            ? "\u006a\u0070\u0067"
            : __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.dataUrl.startsWith(
                  "\u0064\u0061\u0074\u0061\u003a\u0069\u006d\u0061\u0067\u0065\u002f\u0077\u0065\u0062\u0070",
                )
              ? "\u0077\u0065\u0062\u0070"
              : "\u0070\u006e\u0067")),
        (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.textContent =
          "\u0044\u006f\u0077\u006e\u006c\u006f\u0061\u0064\u0020\u0069\u006d\u0061\u0067\u0065"),
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.append(
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          document.createTextNode(
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.saved
              ? "\u0020\u003f\u0020\u004c\u0061\u0073\u0074\u0020\u0032\u0030\u0020\u0069\u006d\u0061\u0067\u0065\u0073\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u006f\u006e\u0020\u0074\u0068\u0069\u0073\u0020\u0064\u0065\u0076\u0069\u0063\u0065\u002e"
              : "\u0020\u003f\u0020\u0044\u006f\u0077\u006e\u006c\u006f\u0061\u0064\u0020\u0074\u006f\u0020\u006b\u0065\u0065\u0070\u0020\u0074\u0068\u0069\u0073\u0020\u0069\u006d\u0061\u0067\u0065\u003b\u0020\u0069\u0074\u0020\u0069\u0073\u0020\u006f\u006e\u006c\u0079\u0020\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0069\u006e\u0020\u0074\u0068\u0069\u0073\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u002e",
          ),
        ),
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.append(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ));
    } else
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.textContent =
        "\u0054\u0068\u0069\u0073\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0069\u0073\u0020\u006e\u006f\u0020\u006c\u006f\u006e\u0067\u0065\u0072\u0020\u0073\u0074\u006f\u0072\u0065\u0064\u0020\u006f\u006e\u0020\u0074\u0068\u0069\u0073\u0020\u0064\u0065\u0076\u0069\u0063\u0065\u002e";
    (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
      .querySelector("\u002e\u0061\u0069\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u002d\u0063\u006f\u006e\u0074\u0065\u006e\u0074")
      ?.after(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713),
      __4e619f930cea09160a9023fa534442b7af20e49e7fddadb6d6b4dadacce066b3());
  }
  const __075a7a22426f3b139059015149c24b9a3c4fa332fb5dadd86d9fc08a540ce684 = new Map();
  async function __cf6fdcea7f349c77dc5d548287454d806a7f9a58ad99fdf8faa4f7b1caaab4fa(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
  ) {
    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
      document.createElement("\u0066\u0069\u0067\u0075\u0072\u0065");
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.className =
      "\u0061\u0069\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u002d\u0061\u0074\u0074\u0061\u0063\u0068\u006d\u0065\u006e\u0074\u0020\u0061\u0069\u002d\u0067\u0065\u006e\u0065\u0072\u0061\u0074\u0065\u0064\u002d\u0076\u0069\u0064\u0065\u006f";
    const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
        document.createElement("\u0070"),
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
        document.createElement("\u0062\u0075\u0074\u0074\u006f\u006e");
    ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.type = "\u0062\u0075\u0074\u0074\u006f\u006e"),
      (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.textContent =
        "\u0043\u0068\u0065\u0063\u006b\u0020\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073"),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.append(
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
      ),
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
        .querySelector("\u002e\u0061\u0069\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u002d\u0063\u006f\u006e\u0074\u0065\u006e\u0074")
        ?.after(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c));
    let __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = null,
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = !1,
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = 0;
    const __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = async () => {
      if (
        (clearTimeout(__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a),
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.isConnected &&
          !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc)
      ) {
        ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = !0),
          (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.disabled = !0));
        try {
          const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = await fetch(
              "\u002f\u0061\u0070\u0069\u002f\u006e\u0079\u0078\u002d\u0061\u0069\u002f\u006d\u0065\u0064\u0069\u0061\u002f" +
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              {
                headers: await __fd19848ac69360eadd3ad8ebfb82354628baec31764b5277d32eb7b6f79b622c({
                  accept: "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
                }),
              },
            ),
            __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f =
              await __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.json();
          if (!__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.ok)
            throw new Error(
              __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.error ||
                "\u0043\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0063\u0068\u0065\u0063\u006b\u0020\u0074\u0068\u0069\u0073\u0020\u0067\u0065\u006e\u0065\u0072\u0061\u0074\u0069\u006f\u006e\u002e",
            );
          const __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 =
            "\u0069\u006d\u0061\u0067\u0065" === __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.kind
              ? "\u0069\u006d\u0061\u0067\u0065"
              : "\u0076\u0069\u0064\u0065\u006f";
          "\u0063\u006f\u006d\u0070\u006c\u0065\u0074\u0065\u0064" === __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.status
            ? ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.textContent =
                "\u0069\u006d\u0061\u0067\u0065" === __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239
                  ? "\u0049\u006d\u0061\u0067\u0065\u0020\u0072\u0065\u0061\u0064\u0079"
                  : "\u0056\u0069\u0064\u0065\u006f\u0020\u0072\u0065\u0061\u0064\u0079"),
              (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.textContent =
                "\u0069\u006d\u0061\u0067\u0065" === __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239
                  ? "\u004c\u006f\u0061\u0064\u0020\u0069\u006d\u0061\u0067\u0065"
                  : "\u004c\u006f\u0061\u0064\u0020\u0076\u0069\u0064\u0065\u006f"),
              (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.onclick =
                async () => {
                  ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.disabled =
                    !0),
                    (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.textContent =
                      "\u004c\u006f\u0061\u0064\u0069\u006e\u0067\u0020" +
                      __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 +
                      "\u002e\u002e\u002e"));
                  try {
                    const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                      await fetch(
                        "\u002f\u0061\u0070\u0069\u002f\u006e\u0079\u0078\u002d\u0061\u0069\u002f\u006d\u0065\u0064\u0069\u0061\u002f" +
                          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 +
                          "\u002f\u0063\u006f\u006e\u0074\u0065\u006e\u0074",
                        {
                          headers:
                            await __fd19848ac69360eadd3ad8ebfb82354628baec31764b5277d32eb7b6f79b622c(
                              {},
                            ),
                        },
                      );
                    if (!__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.ok)
                      throw new Error(
                        "\u0054\u0068\u0069\u0073\u0020" +
                          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 +
                          "\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u006f\u0072\u0020\u0068\u0061\u0073\u0020\u0065\u0078\u0070\u0069\u0072\u0065\u0064\u002e",
                      );
                    if (
                      "\u0069\u006d\u0061\u0067\u0065" === __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239
                    ) {
                      const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                          await __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.json(),
                        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                          await __fac5552d8ca9e8594b4ade43fe88eed003bb5afad2fda9d44bc9fca79f780be0(
                            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713
                              .images?.[0]?.dataUrl,
                          );
                      if (
                        !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.isConnected
                      )
                        return;
                      return (
                        await __39053f711d861234a1caa9142d12d9d933153846f62df2e5ffb2f8e72a90586e(
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                        ),
                        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.remove(),
                        __f5a98170663d5cceb3a16cb9c8d715eb4066220f710277ffeebe6d9e51edff77(
                          __f3e544449444922495ce531668ccc68ed8651ebd7dd66e90ad5b3651bfdca0d8().map(
                            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.mediaJobId ===
                              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                                ? {
                                    ...__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                                    mediaJobId: void 0,
                                    imageId:
                                      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                                    content: "\u0047\u0065\u006e\u0065\u0072\u0061\u0074\u0065\u0064\u0020\u0069\u006d\u0061\u0067\u0065\u002e",
                                  }
                                : __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                          ),
                        ),
                        void __1f32b7fb5dc1c965c36b1e4cd28ce2ac5ea9404b97612e636e1ae9c97d06f54e(
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                          "\u0047\u0065\u006e\u0065\u0072\u0061\u0074\u0065\u0064\u0020\u0069\u006d\u0061\u0067\u0065\u002e",
                        )
                      );
                    }
                    const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                      await __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.blob();
                    if (
                      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.size >
                      104857600
                    )
                      throw new Error("\u0054\u0068\u0069\u0073\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0069\u0073\u0020\u0074\u006f\u006f\u0020\u006c\u0061\u0072\u0067\u0065\u002e");
                    const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                      URL.createObjectURL(
                        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                      );
                    if (
                      !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.isConnected
                    )
                      return void URL.revokeObjectURL(
                        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                      );
                    __075a7a22426f3b139059015149c24b9a3c4fa332fb5dadd86d9fc08a540ce684.set(
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                    );
                    const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                      document.createElement("\u0076\u0069\u0064\u0065\u006f");
                    ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.controls =
                      !0),
                      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.playsInline =
                        !0),
                      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.src =
                        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a),
                      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.style.cssText =
                        "\u006d\u0061\u0078\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u0031\u0030\u0030\u0025\u003b\u006d\u0061\u0078\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u0034\u0038\u0030\u0070\u0078\u003b\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0072\u0061\u0064\u0069\u0075\u0073\u003a\u0031\u0032\u0070\u0078"));
                    const __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
                      document.createElement("\u0061");
                    ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.href =
                      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a),
                      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.download =
                        "\u006e\u0079\u0078\u002d\u0076\u0069\u0064\u0065\u006f\u002e\u006d\u0070\u0034"),
                      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.textContent =
                        "\u0044\u006f\u0077\u006e\u006c\u006f\u0061\u0064\u0020\u0076\u0069\u0064\u0065\u006f"),
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.replaceChildren(
                        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
                        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
                      ));
                  } catch (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a) {
                    ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.textContent =
                      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.message),
                      (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.disabled =
                        !1));
                  }
                }),
              "\u0069\u006d\u0061\u0067\u0065" === __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 &&
                (await __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.onclick()))
            : ["\u0066\u0061\u0069\u006c\u0065\u0064", "\u0063\u0061\u006e\u0063\u0065\u006c\u006c\u0065\u0064", "\u0065\u0078\u0070\u0069\u0072\u0065\u0064"].includes(
                  __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.status,
                )
              ? ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.textContent =
                  "\u0047\u0065\u006e\u0065\u0072\u0061\u0074\u0069\u006f\u006e\u0020" +
                  __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.status +
                  "\u002e\u0020\u0054\u0072\u0079\u0020\u0061\u0020\u0064\u0069\u0066\u0066\u0065\u0072\u0065\u006e\u0074\u0020\u0070\u0072\u006f\u006d\u0070\u0074\u0020\u006f\u0072\u0020\u006d\u006f\u0064\u0065\u006c\u002e"),
                (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.hidden = !0))
              : ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.textContent =
                  "\u0052\u0065\u006e\u0064\u0065\u0072\u0069\u006e\u0067\u0020" +
                  __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 +
                  "\u002e\u002e\u002e\u0020\u0059\u006f\u0075\u0020\u0063\u0061\u006e\u0020\u006b\u0065\u0065\u0070\u0020\u0063\u0068\u0061\u0074\u0074\u0069\u006e\u0067\u002e"),
                ++__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 < 60
                  ? (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                      setTimeout(
                        __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
                        "\u0069\u006d\u0061\u0067\u0065" ===
                          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239
                          ? 5e3
                          : 3e4,
                      ))
                  : (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.textContent =
                      "\u0054\u0068\u0069\u0073\u0020\u0069\u0073\u0020\u0074\u0061\u006b\u0069\u006e\u0067\u0020\u006c\u006f\u006e\u0067\u0065\u0072\u0020\u0074\u0068\u0061\u006e\u0020\u0075\u0073\u0075\u0061\u006c\u002e\u0020\u0043\u0068\u0065\u0063\u006b\u0020\u0061\u0067\u0061\u0069\u006e\u0020\u0077\u0068\u0065\u006e\u0020\u0072\u0065\u0061\u0064\u0079\u002e"));
        } catch (__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f) {
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.textContent =
            __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.message;
        } finally {
          ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = !1),
            (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.disabled = !1));
        }
      }
    };
    ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.onclick =
      __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238),
      await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238());
  }
  function __d4328b3c079cae4765d909537fb4faf59c803748f8b68cadb684080155074109(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    return Array.isArray(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)
      ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
          .map((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
            if (
              !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
              !["\u0075\u0073\u0065\u0072", "\u0061\u0073\u0073\u0069\u0073\u0074\u0061\u006e\u0074"].includes(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.role,
              )
            )
              return null;
            const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              "\u0061\u0073\u0073\u0069\u0073\u0074\u0061\u006e\u0074" ===
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.role
                ? __9f64789489e405e4c60c11d80fd3e2816edb4d9bb0f9b104df0f74207b08a725(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.content,
                  ).answer.trim()
                : String(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.content ||
                      "",
                  ).trim();
            if (!__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) return null;
            const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = {
              role: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.role,
              content: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              ...("\u006c\u0065\u006e\u0067\u0074\u0068" ===
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.finishReason
                ? {
                    finishReason: "\u006c\u0065\u006e\u0067\u0074\u0068",
                  }
                : {}),
            };
            ("\u0061\u0073\u0073\u0069\u0073\u0074\u0061\u006e\u0074" ===
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.role &&
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.metadata &&
              (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.metadata =
                __cb8b8efc63a2032db603714e09f48ef8a26c9f49dd507ca099a34d527c65199b(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.metadata,
                )),
              "\u0061\u0073\u0073\u0069\u0073\u0074\u0061\u006e\u0074" ===
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.role &&
                "\u0073\u0074\u0072\u0069\u006e\u0067" ==
                  typeof __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.modelId &&
                ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.modelId =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.modelId.slice(
                    0,
                    200,
                  )),
                (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.modelName =
                  String(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.modelName ||
                      "",
                  ).slice(0, 200))),
              "\u0061\u0073\u0073\u0069\u0073\u0074\u0061\u006e\u0074" ===
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.role &&
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.timing &&
                (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.timing =
                  __b2e3af2ce1d3fe16c9978815d285ebc64b12d1465cf241f33ec7d04ba659b45d(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.timing,
                  )),
              "\u0061\u0073\u0073\u0069\u0073\u0074\u0061\u006e\u0074" ===
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.role &&
                /^[a-f0-9-]{36}$/.test(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.imageId || "",
                ) &&
                (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.imageId =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.imageId),
              "\u0061\u0073\u0073\u0069\u0073\u0074\u0061\u006e\u0074" ===
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.role &&
                /^[a-f0-9-]{36}$/.test(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.mediaJobId ||
                    "",
                ) &&
                (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.mediaJobId =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.mediaJobId));
            const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
              "\u0075\u0073\u0065\u0072" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.role
                ? __5ea342d1cfd9f6ec81afd2a89f838fcf564e58109239eebedf1a0061880697ca(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.textAttachment,
                  )
                : null;
            return (
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 &&
                (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.textAttachment =
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03),
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
            );
          })
          .filter(Boolean)
      : [];
  }
  function __32c0adec94c3015860750ea941aa1b3e171dc246edcd75680e487051000d20eb(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      __d4328b3c079cae4765d909537fb4faf59c803748f8b68cadb684080155074109(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      )
        .find(
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
            "\u0075\u0073\u0065\u0072" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.role,
        )
        ?.content.trim() || "\u004e\u0065\u0077\u0020\u0063\u006f\u006e\u0076\u0065\u0072\u0073\u0061\u0074\u0069\u006f\u006e";
    return __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length > 46
      ? `${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.slice(0, 46)}\u2026`
      : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5;
  }
  function __ba28619db82731972dc33cb411fe98aee7e736ac5cbb9ed2073b2def2836bdac(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
        __d4328b3c079cae4765d909537fb4faf59c803748f8b68cadb684080155074109(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.messages,
        ),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
        Number(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.createdAt) ||
        Date.now();
    return {
      id: String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.id || ""),
      title:
        String(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.title ||
            __32c0adec94c3015860750ea941aa1b3e171dc246edcd75680e487051000d20eb(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            ),
        )
          .trim()
          .slice(0, 64) || "\u004e\u0065\u0077\u0020\u0063\u006f\u006e\u0076\u0065\u0072\u0073\u0061\u0074\u0069\u006f\u006e",
      messages: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      model: String(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.model ||
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
      ),
      createdAt: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
      updatedAt:
        Number(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.updatedAt) ||
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
    };
  }
  function __1aa3654021979ecd779da91bacb5a805cd2e1bd3bb684bceaac1a7abfea72ee5() {
    try {
      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = JSON.parse(
        localStorage.getItem(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) ||
          "\u005b\u005d",
      );
      return Array.isArray(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)
        ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
            .map(__ba28619db82731972dc33cb411fe98aee7e736ac5cbb9ed2073b2def2836bdac)
            .filter(
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id &&
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.messages.length,
            )
            .sort(
              (
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              ) =>
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.updatedAt -
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.updatedAt,
            )
        : [];
    } catch {
      return [];
    }
  }
  function __241882ebf750560aebf30117b44960a1287b15d2532ea995096e7cf0f2608575() {
    __8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433 =
      __8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433
        .filter(
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id &&
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.messages.length,
        )
        .sort(
          (
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          ) =>
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.updatedAt -
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.updatedAt,
        );
    try {
      (localStorage.setItem(
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        JSON.stringify(__8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433),
      ),
        document.getElementById("\u0061\u0069\u002d\u0073\u0061\u0076\u0065\u002d\u0077\u0061\u0072\u006e\u0069\u006e\u0067")?.remove());
    } catch {
      if (document.getElementById("\u0061\u0069\u002d\u0073\u0061\u0076\u0065\u002d\u0077\u0061\u0072\u006e\u0069\u006e\u0067")) return;
      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
        document.createElement("\u0064\u0069\u0076");
      ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id = "\u0061\u0069\u002d\u0073\u0061\u0076\u0065\u002d\u0077\u0061\u0072\u006e\u0069\u006e\u0067"),
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.className =
          "\u0061\u0069\u002d\u0073\u0061\u0076\u0065\u002d\u0077\u0061\u0072\u006e\u0069\u006e\u0067"),
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.setAttribute(
          "\u0072\u006f\u006c\u0065",
          "\u0061\u006c\u0065\u0072\u0074",
        ),
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.append(
          "\u004e\u0037\u0058\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0073\u0061\u0076\u0065\u0020\u0079\u006f\u0075\u0072\u0020\u0063\u0068\u0061\u0074\u0020\u006f\u006e\u0020\u0074\u0068\u0069\u0073\u0020\u0064\u0065\u0076\u0069\u0063\u0065\u002e\u0020\u0044\u006f\u0077\u006e\u006c\u006f\u0061\u0064\u0020\u0079\u006f\u0075\u0072\u0020\u0063\u0068\u0061\u0074\u0073\u0020\u0062\u0065\u0066\u006f\u0072\u0065\u0020\u0072\u0065\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u002e\u0020",
        ));
      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
        document.createElement("\u0062\u0075\u0074\u0074\u006f\u006e");
      ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.type = "\u0062\u0075\u0074\u0074\u006f\u006e"),
        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.textContent =
          "\u0044\u006f\u0077\u006e\u006c\u006f\u0061\u0064\u0020\u0063\u0068\u0061\u0074\u0073"),
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          () => {
            const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                URL.createObjectURL(
                  new Blob(
                    [
                      JSON.stringify(
                        {
                          version: 1,
                          threads:
                            __8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433,
                        },
                        null,
                        2,
                      ),
                    ],
                    {
                      type: "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
                    },
                  ),
                ),
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                document.createElement("\u0061");
            ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.href =
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
              (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.download =
                "\u006e\u0079\u0078\u002d\u0061\u0069\u002d\u0063\u0068\u0061\u0074\u0073\u002e\u006a\u0073\u006f\u006e"),
              document.body.append(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              ),
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.click(),
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.remove(),
              setTimeout(
                () =>
                  URL.revokeObjectURL(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  ),
                1e3,
              ));
          },
        ),
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.append(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ),
        __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.before(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ));
    }
  }
  function __6a415fc87620178d27b437cc0f4824caf47662a63117ba3cbdfcbcdc0240786f(
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
  ) {
    try {
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length
        ? localStorage.setItem(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            JSON.stringify(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.slice(-40),
            ),
          )
        : localStorage.removeItem(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          );
    } catch {}
  }
  function __9aa51242f18b84964521804845518a53dcb10905e08f5bb15c44c748782f7ae4() {
    return (
      __8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433.find(
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id ===
          __93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb,
      ) || null
    );
  }
  function __f3e544449444922495ce531668ccc68ed8651ebd7dd66e90ad5b3651bfdca0d8() {
    return __d4328b3c079cae4765d909537fb4faf59c803748f8b68cadb684080155074109(
      __0159afb719a78ed8c8a3938ee144c930b121f1fd74d588b30e9186af4a2f89d7
        ? __17637b72fc4733887b3a19c85d5d3c70864a8f76b0495e06a14055b0d0c65db6
        : __9aa51242f18b84964521804845518a53dcb10905e08f5bb15c44c748782f7ae4()?.messages || [],
    );
  }
  function __f5a98170663d5cceb3a16cb9c8d715eb4066220f710277ffeebe6d9e51edff77(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      __d4328b3c079cae4765d909537fb4faf59c803748f8b68cadb684080155074109(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      );
    if (__0159afb719a78ed8c8a3938ee144c930b121f1fd74d588b30e9186af4a2f89d7)
      return void (__17637b72fc4733887b3a19c85d5d3c70864a8f76b0495e06a14055b0d0c65db6 =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5);
    const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = Date.now();
    let __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
      __9aa51242f18b84964521804845518a53dcb10905e08f5bb15c44c748782f7ae4();
    if (
      !__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 &&
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length
    ) {
      ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
        __ba28619db82731972dc33cb411fe98aee7e736ac5cbb9ed2073b2def2836bdac({
          id: `chat-${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
          messages: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          model:
            __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.value ||
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
          createdAt: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
          updatedAt: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
        })),
        __8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433.unshift(
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
        ),
        (__93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb =
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.id));
      try {
        localStorage.setItem(
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          __93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb,
        );
      } catch {}
    } else
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 &&
        ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.messages =
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
        (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.title =
          __32c0adec94c3015860750ea941aa1b3e171dc246edcd75680e487051000d20eb(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          )),
        (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.model =
          __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.value ||
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.model ||
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc),
        (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.updatedAt =
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03));
    (__241882ebf750560aebf30117b44960a1287b15d2532ea995096e7cf0f2608575(),
      __6a415fc87620178d27b437cc0f4824caf47662a63117ba3cbdfcbcdc0240786f(
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      ),
      __9df5fc35fdff065d38d3f5e096268bdcee1c00ca0aba340ab7672fb8557be277());
  }
  function __0e8a6d1bc97ab98cf703324d0e0e366a651559fae879579fcdd8b18acab33b09(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    return window.NyxLogo?.apply(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
        localStorage.getItem("\u006e\u0079\u0078\u002e\u0074\u0068\u0065\u006d\u0065") ||
        "\u0064\u0065\u0066\u0061\u0075\u006c\u0074",
      document,
    ).catch?.(() => {});
  }
  function __0598744c429edd6f76af3b617d95218c60f4694421bdcf4fad932c66853d16ba(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    return window.NyxMarkdown.render(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    );
  }
  function __c7d123844d6f7dae6fe9f3567270687f63cb66ecf524f57495619264bfe3a494(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    __7db994cf70023f7fa1ee37d64774e922da1a209d4cfac7b44a0d185f968b0a3b.textContent = String(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || "",
    );
  }
  function __fb84bf8140a5427bba17b38530ab10ca45ff2841d371e10707768f90f05c22f8(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = Math.max(
      0,
      Number(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) || 0,
    );
    return __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 < 1024
      ? `${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5} B`
      : `${(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 / 1024).toFixed(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 < 10240 ? 1 : 0)} KB`;
  }
  function __b8bd8b401b63f97c694f0a15349b9dd559cbad8c78080a8f4efc6ca4a6307763() {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = new Date(),
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = (
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      ) =>
        String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96).padStart(2, "\u0030");
    return `pasted-text-${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getFullYear()}${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getMonth() + 1)}${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getDate())}-${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getHours())}${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getMinutes())}${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getSeconds())}.txt`;
  }
  function __33fc4fa3fc7e5e999d7d45936b017e261c484a8603d0551b846aeb5b1b7cb9c0() {
    ((__ba14105c51bb0f53ea6c93b0e81a448b1f1c675a13c2b275c94ab1333860fa3c = null),
      (__00608ea01db0bfd231b71dae9747f95df1bb6ae442fb96e53df2e709c0f4f7b4 = null),
      (__ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90.value = ""),
      (__75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5.hidden = !0),
      __75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5.classList.remove(
        "\u0069\u0073\u002d\u0065\u0072\u0072\u006f\u0072",
        "\u0069\u0073\u002d\u0066\u0069\u006c\u0065\u002d\u0065\u0072\u0072\u006f\u0072",
        "\u0069\u0073\u002d\u0074\u0065\u0078\u0074\u002d\u0066\u0069\u006c\u0065",
      ),
      (__037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec.hidden = !1),
      __037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec.removeAttribute("\u0073\u0072\u0063"),
      (__5285a5bbd045fe6fc6ebb94cc24c149a1dcccd7cfeb2f5de9c7a211dad268afa.textContent = ""),
      __c7d123844d6f7dae6fe9f3567270687f63cb66ecf524f57495619264bfe3a494("\u0052\u0065\u0061\u0064\u0079\u0020\u0074\u006f\u0020\u0073\u0065\u006e\u0064"),
      __ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417.classList.remove(
        "\u0068\u0061\u0073\u002d\u0061\u0074\u0074\u0061\u0063\u0068\u006d\u0065\u006e\u0074",
      ),
      __ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417.setAttribute(
        "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
        "\u0041\u0074\u0074\u0061\u0063\u0068\u0020\u0061\u006e\u0020\u0069\u006d\u0061\u0067\u0065",
      ),
      (__d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c.title =
        "\u0052\u0065\u006d\u006f\u0076\u0065\u0020\u0061\u0074\u0074\u0061\u0063\u0068\u006d\u0065\u006e\u0074"),
      __d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c.setAttribute(
        "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
        "\u0052\u0065\u006d\u006f\u0076\u0065\u0020\u0061\u0074\u0074\u0061\u0063\u0068\u006d\u0065\u006e\u0074",
      ));
  }
  function __528574a814f4c0082dd87aed0646ab3dca3c963ad65971edfb94b06f72fee8fe(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = "\u0049\u006d\u0061\u0067\u0065\u0020\u006e\u006f\u0074\u0020\u0061\u0074\u0074\u0061\u0063\u0068\u0065\u0064",
  ) {
    (__33fc4fa3fc7e5e999d7d45936b017e261c484a8603d0551b846aeb5b1b7cb9c0(),
      (__75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5.hidden = !1),
      __75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5.classList.add(
        "\u0069\u0073\u002d\u0065\u0072\u0072\u006f\u0072",
        "\u0069\u0073\u002d\u0066\u0069\u006c\u0065\u002d\u0065\u0072\u0072\u006f\u0072",
      ),
      (__037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec.hidden = !0),
      (__5285a5bbd045fe6fc6ebb94cc24c149a1dcccd7cfeb2f5de9c7a211dad268afa.textContent =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
      __c7d123844d6f7dae6fe9f3567270687f63cb66ecf524f57495619264bfe3a494(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      ));
  }
  function __8a74b6aa2723fd3cb24f9ae3a4b71198fac8beba0ce313f31ab37ec9b0df1397(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    return __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
      __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1.has(
        String(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.type || "",
        ).toLowerCase(),
      )
      ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.size > 8388608
        ? (__528574a814f4c0082dd87aed0646ab3dca3c963ad65971edfb94b06f72fee8fe(
            "\u0043\u0068\u006f\u006f\u0073\u0065\u0020\u0061\u006e\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0073\u006d\u0061\u006c\u006c\u0065\u0072\u0020\u0074\u0068\u0061\u006e\u0020\u0038\u0020\u004d\u0042\u002e",
          ),
          Promise.resolve(null))
        : new Promise((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
            const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
              new FileReader();
            ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onload = () => {
              const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = {
                name:
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.name ||
                  "\u0041\u0074\u0074\u0061\u0063\u0068\u0065\u0064\u0020\u0069\u006d\u0061\u0067\u0065",
                size: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.size,
                type: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.type,
                dataUrl: String(
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.result || "",
                ),
              };
              (!(function (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
                (__658e800664ce4b8e4f05529203158b8b93cb3e61267733d16b020977659f1a6a(),
                  (__00608ea01db0bfd231b71dae9747f95df1bb6ae442fb96e53df2e709c0f4f7b4 = null),
                  (__ba14105c51bb0f53ea6c93b0e81a448b1f1c675a13c2b275c94ab1333860fa3c =
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
                  (__75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5.hidden = !1),
                  __75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5.classList.remove(
                    "\u0069\u0073\u002d\u0065\u0072\u0072\u006f\u0072",
                    "\u0069\u0073\u002d\u0066\u0069\u006c\u0065\u002d\u0065\u0072\u0072\u006f\u0072",
                    "\u0069\u0073\u002d\u0074\u0065\u0078\u0074\u002d\u0066\u0069\u006c\u0065",
                  ),
                  (__037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec.hidden = !1),
                  (__037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec.src =
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataUrl),
                  (__5285a5bbd045fe6fc6ebb94cc24c149a1dcccd7cfeb2f5de9c7a211dad268afa.textContent =
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.name),
                  __c7d123844d6f7dae6fe9f3567270687f63cb66ecf524f57495619264bfe3a494(
                    "\u0052\u0065\u0061\u0064\u0079\u0020\u0074\u006f\u0020\u0073\u0065\u006e\u0064",
                  ),
                  __ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417.classList.add(
                    "\u0068\u0061\u0073\u002d\u0061\u0074\u0074\u0061\u0063\u0068\u006d\u0065\u006e\u0074",
                  ),
                  __ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417.setAttribute(
                    "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
                    `Replace attached image: ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.name}`,
                  ),
                  (__d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c.title =
                    "\u0052\u0065\u006d\u006f\u0076\u0065\u0020\u0069\u006d\u0061\u0067\u0065"),
                  __d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c.setAttribute(
                    "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
                    "\u0052\u0065\u006d\u006f\u0076\u0065\u0020\u0061\u0074\u0074\u0061\u0063\u0068\u0065\u0064\u0020\u0069\u006d\u0061\u0067\u0065",
                  ));
              })(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03),
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                ));
            }),
              (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onerror = () => {
                (__528574a814f4c0082dd87aed0646ab3dca3c963ad65971edfb94b06f72fee8fe(
                  "\u004e\u0037\u0058\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0072\u0065\u0061\u0064\u0020\u0074\u0068\u0061\u0074\u0020\u0069\u006d\u0061\u0067\u0065\u002e",
                ),
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(null));
              }),
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.readAsDataURL(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              ));
          })
      : (__528574a814f4c0082dd87aed0646ab3dca3c963ad65971edfb94b06f72fee8fe(
          "\u0043\u0068\u006f\u006f\u0073\u0065\u0020\u0061\u0020\u0050\u004e\u0047\u002c\u0020\u004a\u0050\u0047\u002c\u0020\u0057\u0065\u0062\u0050\u002c\u0020\u006f\u0072\u0020\u0047\u0049\u0046\u0020\u0069\u006d\u0061\u0067\u0065\u002e",
        ),
        Promise.resolve(null));
  }
  new MutationObserver(() => {
    for (const [
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    ] of __075a7a22426f3b139059015149c24b9a3c4fa332fb5dadd86d9fc08a540ce684)
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.isConnected ||
        (URL.revokeObjectURL(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
        __075a7a22426f3b139059015149c24b9a3c4fa332fb5dadd86d9fc08a540ce684.delete(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ));
  }).observe(document.body, {
    childList: !0,
    subtree: !0,
  });
  const __f18d6fef436eab40ad4f09805d365642f87fb386cbbc1cbe7c04719beb4b8ebf =
    window.createNyxScreenChat({
      conversation: __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d,
      input: __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34,
      form: __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161,
      stop: __658e800664ce4b8e4f05529203158b8b93cb3e61267733d16b020977659f1a6a,
      status: __98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13,
      brand: () => __244d1cdcaa8ad70eaeb3d64221d1bac83d532b18f34d6b838e65a430a6a2af78(),
    });
  function __658e800664ce4b8e4f05529203158b8b93cb3e61267733d16b020977659f1a6a() {
    __f18d6fef436eab40ad4f09805d365642f87fb386cbbc1cbe7c04719beb4b8ebf.destroy();
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
      __7afa888e62ebfbac2e6002ec2d80426c0fd84774cdd464eebc432bfd97f1d538;
    ((__7afa888e62ebfbac2e6002ec2d80426c0fd84774cdd464eebc432bfd97f1d538 = null),
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
          .getTracks()
          .forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.stop(),
          ),
      (__a27fb158ddcbc635df4f915211d5c8e5d6a8c04827fe1281526c34bc41e8fb8b.srcObject = null),
      (__96269fbafcaf1e59a066bbe22f9ec441fbf0ff3e38084b904ada564b445561a8.hidden = !0),
      __ee07b2c1f5ae5a68cf1a38fc099e028ffbe3e7bdd9c0223fa1ec952465f7acbf.classList.remove(
        "\u0068\u0061\u0073\u002d\u0061\u0074\u0074\u0061\u0063\u0068\u006d\u0065\u006e\u0074",
      ),
      __ee07b2c1f5ae5a68cf1a38fc099e028ffbe3e7bdd9c0223fa1ec952465f7acbf.setAttribute(
        "\u0061\u0072\u0069\u0061\u002d\u0070\u0072\u0065\u0073\u0073\u0065\u0064",
        "\u0066\u0061\u006c\u0073\u0065",
      ),
      (__98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13.textContent =
        "\u0041\u0020\u0066\u0072\u0065\u0073\u0068\u0020\u0066\u0072\u0061\u006d\u0065\u0020\u0069\u0073\u0020\u0061\u0074\u0074\u0061\u0063\u0068\u0065\u0064\u0020\u006f\u006e\u006c\u0079\u0020\u0077\u0068\u0065\u006e\u0020\u0079\u006f\u0075\u0020\u0073\u0065\u006e\u0064\u002e"));
  }
  function __9f64789489e405e4c60c11d80fd3e2816edb4d9bb0f9b104df0f74207b08a725(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = String(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || "",
      ),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = /<\/?think\b[^>]*>/gi;
    let __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = "",
      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = "",
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = 0,
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = !1;
    for (
      ;
      (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.exec(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ));

    ) {
      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.slice(
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.index,
        );
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2
        ? (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a +=
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)
        : (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 +=
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = !/^<\//.test(
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03[0],
        )),
        (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.index +
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03[0].length));
    }
    const __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.slice(
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
      );
    if (
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2
        ? (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a +=
            __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238)
        : (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 +=
            __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238),
      !__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2)
    ) {
      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.match(
          /<\/?t(?:h(?:i(?:n(?:k)?)?)?)?$/i,
        );
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
        (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.slice(
            0,
            -__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96[0].length,
          ));
    }
    return {
      answer: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
      reasoning: __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
    };
  }
  function __cb8b8efc63a2032db603714e09f48ef8a26c9f49dd507ca099a34d527c65199b(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = [];
    for (const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c of (Array.isArray(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.sources,
    )
      ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.sources
      : []
    ).slice(0, 12))
      try {
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = new URL(
          String(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.url || ""),
        );
        if (
          !["\u0068\u0074\u0074\u0070\u0073\u003a", "\u0068\u0074\u0074\u0070\u003a"].includes(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.protocol,
          ) ||
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.username ||
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.password ||
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.href.length > 2048
        )
          continue;
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.some(
          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.url ===
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.href,
        ) ||
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.push({
            url: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.href,
            title: String(
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.title ||
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.hostname,
            ).slice(0, 160),
          });
      } catch {}
    return {
      sources: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      summary: String(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.summary || "",
      ).slice(0, 2400),
    };
  }
  const __244d1cdcaa8ad70eaeb3d64221d1bac83d532b18f34d6b838e65a430a6a2af78 = () =>
      "\u0061\u0069" === document.documentElement.dataset.tutsiApp ? "\u0054\u0075\u0074\u0073\u0069\u0020\u0041\u0049" : "\u004e\u0037\u0058\u0020\u0041\u0049",
    __a62003277398c6c3d035420703ed8f9d1fb97e83c57761e53b135fddedecb2c6 = (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) =>
      String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || "").replace(
        /\bNyx AI\b/g,
        __244d1cdcaa8ad70eaeb3d64221d1bac83d532b18f34d6b838e65a430a6a2af78(),
      );
  function __1f32b7fb5dc1c965c36b1e4cd28ce2ac5ea9404b97612e636e1ae9c97d06f54e(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    {
      error: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = !1,
      thinking: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = !1,
    } = {},
  ) {
    const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
        "\u002e\u0061\u0069\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u002d\u0063\u006f\u006e\u0074\u0065\u006e\u0074",
      );
    if (!__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713) return;
    if (
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.classList.toggle(
        "\u0061\u0069\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u002d\u0065\u0072\u0072\u006f\u0072",
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
      ),
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.classList.toggle(
        "\u0069\u0073\u002d\u0074\u0068\u0069\u006e\u006b\u0069\u006e\u0067",
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
      ),
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03)
    )
      return (
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96._nyxMessageText = ""),
        void (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.innerHTML = `<span class="ai-thinking" aria-label="${__244d1cdcaa8ad70eaeb3d64221d1bac83d532b18f34d6b838e65a430a6a2af78()} is thinking"><i></i><i></i><i></i></span>`)
      );
    if (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.classList.contains(
        "\u0061\u0069\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u002d\u0075\u0073\u0065\u0072",
      ) ||
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
    ) {
      const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
          ? __a62003277398c6c3d035420703ed8f9d1fb97e83c57761e53b135fddedecb2c6(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            )
          : String(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 || "");
      return (
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96._nyxMessageText =
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03),
        void (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.textContent =
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03)
      );
    }
    const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
        __9f64789489e405e4c60c11d80fd3e2816edb4d9bb0f9b104df0f74207b08a725(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ),
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
        __cb8b8efc63a2032db603714e09f48ef8a26c9f49dd507ca099a34d527c65199b(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96._nyxMetadata,
        ),
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.querySelector(
          "\u002e\u0061\u0069\u002d\u0072\u0065\u0061\u0073\u006f\u006e\u0069\u006e\u0067",
        )?.open;
    if (
      ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96._nyxMessageText =
        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.answer.trim()),
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.replaceChildren(),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.summary ||
        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.reasoning.trim()) &&
        ((function (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ) {
          const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
            document.createElement("\u0064\u0065\u0074\u0061\u0069\u006c\u0073");
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.className =
            "\u0061\u0069\u002d\u0072\u0065\u0061\u0073\u006f\u006e\u0069\u006e\u0067";
          const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
            document.createElement("\u0073\u0075\u006d\u006d\u0061\u0072\u0079");
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.textContent =
            "\u0052\u0065\u0061\u0073\u006f\u006e\u0069\u006e\u0067\u0020\u0073\u0075\u006d\u006d\u0061\u0072\u0079";
          const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
            document.createElement("\u0064\u0069\u0076");
          ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.className =
            "\u0061\u0069\u002d\u0072\u0065\u0061\u0073\u006f\u006e\u0069\u006e\u0067\u002d\u0062\u006f\u0064\u0079"),
            (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.innerHTML =
              __0598744c429edd6f76af3b617d95218c60f4694421bdcf4fad932c66853d16ba(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              )),
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.append(
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
            ),
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.appendChild(
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
            ));
        })(
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.summary ||
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.reasoning.trim(),
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 &&
          (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.querySelector(
            "\u002e\u0061\u0069\u002d\u0072\u0065\u0061\u0073\u006f\u006e\u0069\u006e\u0067",
          ).open = !0)),
      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.answer.trim())
    ) {
      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
        document.createElement("\u0064\u0069\u0076");
      ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.className = "\u0061\u0069\u002d\u0061\u006e\u0073\u0077\u0065\u0072"),
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.innerHTML =
          __0598744c429edd6f76af3b617d95218c60f4694421bdcf4fad932c66853d16ba(
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.answer.trim(),
          )),
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.appendChild(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ));
    }
    !(function (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    ) {
      if (!__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length) return;
      const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
        document.createElement("\u0073\u0065\u0063\u0074\u0069\u006f\u006e");
      ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.className =
        "\u0061\u0069\u002d\u0073\u006f\u0075\u0072\u0063\u0065\u0073"),
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.setAttribute(
          "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
          "\u0057\u0065\u0062\u0020\u0073\u006f\u0075\u0072\u0063\u0065\u0073",
        ));
      const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
        document.createElement("\u0068\u0033");
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.textContent = "\u0053\u006f\u0075\u0072\u0063\u0065\u0073";
      const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
        document.createElement("\u0064\u0069\u0076");
      ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.className =
        "\u0061\u0069\u002d\u0073\u006f\u0075\u0072\u0063\u0065\u002d\u006c\u0069\u006e\u006b\u0073"),
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.forEach(
          (
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          ) => {
            const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
              document.createElement("\u0061");
            ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.className =
              "\u0061\u0069\u002d\u0073\u006f\u0075\u0072\u0063\u0065"),
              (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.href =
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.url),
              (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.target =
                "\u005f\u0062\u006c\u0061\u006e\u006b"),
              (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.rel =
                "\u006e\u006f\u006f\u0070\u0065\u006e\u0065\u0072\u0020\u006e\u006f\u0072\u0065\u0066\u0065\u0072\u0072\u0065\u0072"));
            const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
              document.createElement("\u0073\u0070\u0061\u006e");
            ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.className =
              "\u0061\u0069\u002d\u0073\u006f\u0075\u0072\u0063\u0065\u002d\u006e\u0075\u006d\u0062\u0065\u0072"),
              (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.textContent =
                String(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 + 1)));
            const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                document.createElement("\u0073\u0070\u0061\u006e"),
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                document.createElement("\u0073\u0074\u0072\u006f\u006e\u0067");
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.textContent =
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.title;
            const __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
              document.createElement("\u0073\u006d\u0061\u006c\u006c");
            ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.textContent =
              new URL(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.url,
              ).hostname.replace(/^www\./, "")),
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.append(
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
              ),
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.append(
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
              ),
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.appendChild(
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
              ));
          },
        ),
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.append(
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
        ),
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.appendChild(
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        ));
    })(
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.sources,
    );
  }
  function __b2e3af2ce1d3fe16c9978815d285ebc64b12d1465cf241f33ec7d04ba659b45d(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    return !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
      !Number.isFinite(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.elapsedMs,
      ) ||
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.elapsedMs < 0
      ? null
      : {
          elapsedMs: Math.min(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.elapsedMs,
            36e5,
          ),
          firstTextMs: Number.isFinite(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.firstTextMs,
          )
            ? Math.max(
                0,
                Math.min(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.firstTextMs,
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.elapsedMs,
                ),
              )
            : null,
          tokens: Number.isFinite(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.tokens,
          )
            ? Math.max(
                0,
                Math.min(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.tokens,
                  1e6,
                ),
              )
            : 0,
          estimated:
            !1 !== __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.estimated,
        };
  }
  function __a424c97aa3f9ffe3ab859a6c369fdfe37e17c68d6a58ea4d01134a34a8daab2c(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = !1,
  ) {
    const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
      __b2e3af2ce1d3fe16c9978815d285ebc64b12d1465cf241f33ec7d04ba659b45d(
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      );
    if (!__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03) return;
    let __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
        "\u002e\u0061\u0069\u002d\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065\u002d\u0073\u0074\u0061\u0074\u0073",
      );
    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 ||
      ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
        document.createElement("\u0064\u0069\u0076")),
      (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.className =
        "\u0061\u0069\u002d\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065\u002d\u0073\u0074\u0061\u0074\u0073"),
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
        .querySelector("\u002e\u0061\u0069\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u002d\u0062\u006f\u0064\u0079")
        .append(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713));
    const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = (
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.elapsedMs / 1e3
      ).toFixed(1),
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
        null === __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.firstTextMs
          ? __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
            ? "\u0057\u0061\u0069\u0074\u0069\u006e\u0067\u0020" + __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a + "\u0073"
            : "\u004e\u006f\u0020\u0061\u006e\u0073\u0077\u0065\u0072\u0020\u0074\u0065\u0078\u0074"
          : "\u0046\u0069\u0072\u0073\u0074\u0020\u0074\u0065\u0078\u0074\u0020" +
            (
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.firstTextMs / 1e3
            ).toFixed(1) +
            "\u0073",
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.tokens > 0 &&
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.elapsedMs > 0
          ? "\u0020\u007c\u0020" +
            (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.estimated
              ? "\u007e"
              : "") +
            (
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.tokens /
              (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.elapsedMs / 1e3)
            ).toFixed(1) +
            "\u0020\u0074\u006f\u006b\u002f\u0073" +
            (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.estimated
              ? "\u0020\u0028\u0065\u0073\u0074\u0069\u006d\u0061\u0074\u0065\u0064\u0029"
              : "")
          : "";
    ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.textContent =
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc +
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 +
      (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
        ? ""
        : "\u0020\u007c\u0020" + __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a + "\u0073\u0020\u0074\u006f\u0074\u0061\u006c")),
      (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.title =
        "\u004d\u0065\u0061\u0073\u0075\u0072\u0065\u0064\u0020\u006f\u006e\u0020\u0074\u0068\u0069\u0073\u0020\u0064\u0065\u0076\u0069\u0063\u0065\u002e\u0020\u0054\u006f\u006b\u0065\u006e\u0073\u0020\u0070\u0065\u0072\u0020\u0073\u0065\u0063\u006f\u006e\u0064\u0020\u0061\u0076\u0065\u0072\u0061\u0067\u0065\u0073\u0020\u0074\u0068\u0065\u0020\u0065\u006e\u0074\u0069\u0072\u0065\u0020\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u002c\u0020\u0069\u006e\u0063\u006c\u0075\u0064\u0069\u006e\u0067\u0020\u0077\u0061\u0069\u0074\u0069\u006e\u0067\u002e\u0020\u0045\u0073\u0074\u0069\u006d\u0061\u0074\u0065\u0073\u0020\u0075\u0073\u0065\u0020\u0072\u006f\u0075\u0067\u0068\u006c\u0079\u0020\u0066\u006f\u0075\u0072\u0020\u0063\u0068\u0061\u0072\u0061\u0063\u0074\u0065\u0072\u0073\u0020\u0070\u0065\u0072\u0020\u0074\u006f\u006b\u0065\u006e\u003b\u0020\u0072\u0065\u0070\u006f\u0072\u0074\u0065\u0064\u0020\u0075\u0073\u0061\u0067\u0065\u0020\u006d\u0061\u0079\u0020\u0069\u006e\u0063\u006c\u0075\u0064\u0065\u0020\u0072\u0065\u0061\u0073\u006f\u006e\u0069\u006e\u0067\u0020\u0074\u006f\u006b\u0065\u006e\u0073\u002e"));
  }
  function __aba0927ff5f8a81d97a1a7ed24c9fe11716ada7113e9e0505ccd8cfa497c5057(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    if (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
        "\u002e\u0063\u006f\u006e\u0074\u0069\u006e\u0075\u0065\u002d\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065",
      )
    )
      return;
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      document.createElement("\u0062\u0075\u0074\u0074\u006f\u006e");
    ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.type = "\u0062\u0075\u0074\u0074\u006f\u006e"),
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.className =
        "\u0063\u006f\u006e\u0074\u0069\u006e\u0075\u0065\u002d\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065"),
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.textContent =
        "\u0043\u006f\u006e\u0074\u0069\u006e\u0075\u0065\u0020\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065"),
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.title =
        "\u0054\u0068\u0069\u0073\u0020\u0072\u0065\u0070\u006c\u0079\u0020\u0072\u0065\u0061\u0063\u0068\u0065\u0064\u0020\u0069\u0074\u0073\u0020\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065\u0020\u006c\u0069\u006d\u0069\u0074\u002e\u0020\u0043\u006f\u006e\u0074\u0069\u006e\u0075\u0065\u0020\u0075\u0073\u0069\u006e\u0067\u0020\u0079\u006f\u0075\u0072\u0020\u0072\u0065\u006d\u0061\u0069\u006e\u0069\u006e\u0067\u0020\u0061\u006c\u006c\u006f\u0077\u0061\u006e\u0063\u0065\u002e"),
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.onclick = () => {
        __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21.disabled ||
          (__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d.querySelector(
            "\u002e\u0061\u0069\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u003a\u006c\u0061\u0073\u0074\u002d\u0063\u0068\u0069\u006c\u0064",
          ) === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
            (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.value.trim()
              ? __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.focus()
              : ((__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.value =
                  "\u0043\u006f\u006e\u0074\u0069\u006e\u0075\u0065\u0020\u0079\u006f\u0075\u0072\u0020\u0070\u0072\u0065\u0076\u0069\u006f\u0075\u0073\u0020\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065\u0020\u0066\u0072\u006f\u006d\u0020\u0077\u0068\u0065\u0072\u0065\u0020\u0069\u0074\u0020\u0073\u0074\u006f\u0070\u0070\u0065\u0064\u002c\u0020\u0077\u0069\u0074\u0068\u006f\u0075\u0074\u0020\u0072\u0065\u0070\u0065\u0061\u0074\u0069\u006e\u0067\u0020\u0069\u0074\u002e"),
                __a88f75c7fa7b50d8cbfce5e4e5c1d41dd7fbe28bd80bbd6c52a217a65fd6345a())));
      }),
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
        .querySelector("\u002e\u0061\u0069\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u002d\u0062\u006f\u0064\u0079")
        .append(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5));
  }
  function __4965b8628823c7647e57b6b2f8106781a2dc9590b4c179a4bb5aed150a727d0a(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    {
      error: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = !1,
      thinking: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = !1,
      attachment: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = null,
      imageId: __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = null,
      mediaJobId: __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = null,
      metadata: __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = null,
      timing: __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = null,
      modelId: __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = "",
      modelName: __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = "",
      finishReason: __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 = null,
    } = {},
  ) {
    (__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d
      .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0061\u0069\u002d\u0077\u0065\u006c\u0063\u006f\u006d\u0065\u005d")
      ?.remove(),
      __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d.classList.remove(
        "\u0069\u0073\u002d\u0065\u006d\u0070\u0074\u0079",
      ));
    const __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 =
        "\u0075\u0073\u0065\u0072" !== __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe =
        document.createElement("\u0061\u0072\u0074\u0069\u0063\u006c\u0065");
    if (
      ((__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe._nyxMetadata =
        __cb8b8efc63a2032db603714e09f48ef8a26c9f49dd507ca099a34d527c65199b(
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
        )),
      (__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.className =
        "\u0061\u0069\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u0020\u0061\u0069\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u002d" +
        (__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6
          ? "\u0061\u0073\u0073\u0069\u0073\u0074\u0061\u006e\u0074"
          : "\u0075\u0073\u0065\u0072")),
      (__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.innerHTML = `\n      <div class="ai-message-avatar" aria-hidden="true">${__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 ? "" : "\u0059\u006f\u0075"}</div>\n      <div class="ai-message-body">\n        <div class="ai-message-meta"><strong>${__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 ? "\u0041\u0073\u0073\u0069\u0073\u0074\u0061\u006e\u0074" : "\u0059\u006f\u0075"}</strong><div class="ai-message-actions"><button class="ai-message-copy" type="button" data-copy-message title="Copy message" aria-label="Copy message"><svg aria-hidden="true" viewBox="0 0 24 24"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3"/></svg></button></div></div>\n        <div class="ai-message-content"></div>\n      </div>`),
      __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 &&
        __18f8fb636678dab7c1507d1eceede43f8941d0b13b53291425ec16d10b9d1da9(
          __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
          __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f,
          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239,
        ),
      __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 &&
        __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 &&
        __a424c97aa3f9ffe3ab859a6c369fdfe37e17c68d6a58ea4d01134a34a8daab2c(
          __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
          __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
        ),
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713?.dataUrl &&
        !__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6)
    ) {
      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
        document.createElement("\u0066\u0069\u0067\u0075\u0072\u0065");
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.className =
        "\u0061\u0069\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u002d\u0061\u0074\u0074\u0061\u0063\u0068\u006d\u0065\u006e\u0074";
      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
        document.createElement("\u0069\u006d\u0067");
      ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.src =
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.dataUrl),
        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.alt =
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.name ||
          "\u0041\u0074\u0074\u0061\u0063\u0068\u0065\u0064\u0020\u0069\u006d\u0061\u0067\u0065"));
      const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
        document.createElement("\u0066\u0069\u0067\u0063\u0061\u0070\u0074\u0069\u006f\u006e");
      ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.textContent =
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.name ||
        "\u0041\u0074\u0074\u0061\u0063\u0068\u0065\u0064\u0020\u0069\u006d\u0061\u0067\u0065"),
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.append(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        ),
        __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe
          .querySelector("\u002e\u0061\u0069\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u002d\u0063\u006f\u006e\u0074\u0065\u006e\u0074")
          ?.before(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96));
    } else if (
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713?.content &&
      !__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6
    ) {
      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
        __5ea342d1cfd9f6ec81afd2a89f838fcf564e58109239eebedf1a0061880697ca(
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
        );
      if (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
          document.createElement("\u0062\u0075\u0074\u0074\u006f\u006e");
        ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.className =
          "\u0061\u0069\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u002d\u0061\u0074\u0074\u0061\u0063\u0068\u006d\u0065\u006e\u0074\u0020\u0061\u0069\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u002d\u0074\u0065\u0078\u0074\u002d\u0061\u0074\u0074\u0061\u0063\u0068\u006d\u0065\u006e\u0074"),
          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.type = "\u0062\u0075\u0074\u0074\u006f\u006e"),
          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dataset.downloadTextAttachment =
            ""),
          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.title = `Download ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.name}`),
          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.innerHTML = `<span class="ai-text-file-icon" aria-hidden="true">TXT</span><span class="ai-text-file-copy"><strong>${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.name)}</strong><small>${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__fb84bf8140a5427bba17b38530ab10ca45ff2841d371e10707768f90f05c22f8(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.size))} \xb7 Download</small></span>`),
          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5._nyxTextAttachment =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
          __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe
            .querySelector("\u002e\u0061\u0069\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u002d\u0063\u006f\u006e\u0074\u0065\u006e\u0074")
            ?.before(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5));
      }
    }
    return (
      __1f32b7fb5dc1c965c36b1e4cd28ce2ac5ea9404b97612e636e1ae9c97d06f54e(
        __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        {
          error: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          thinking: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
        },
      ),
      "\u006c\u0065\u006e\u0067\u0074\u0068" === __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 &&
        __aba0927ff5f8a81d97a1a7ed24c9fe11716ada7113e9e0505ccd8cfa497c5057(
          __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
        ),
      __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d.appendChild(
        __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
      ),
      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a &&
        __39053f711d861234a1caa9142d12d9d933153846f62df2e5ffb2f8e72a90586e(
          __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
        ),
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc &&
        __cf6fdcea7f349c77dc5d548287454d806a7f9a58ad99fdf8faa4f7b1caaab4fa(
          __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
        ),
      __0e8a6d1bc97ab98cf703324d0e0e366a651559fae879579fcdd8b18acab33b09(),
      __4e619f930cea09160a9023fa534442b7af20e49e7fddadb6d6b4dadacce066b3(!0),
      __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe
    );
  }
  function __d6f1a735bfdd454493a8d3b563f29dc31ba2ca3baf7aa48a79bd877d8539feef(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
  ) {
    return `<button class="ai-starter" type="button" data-prompt="${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)}"><span class="ai-starter-icon">${(function (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) {
      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = {
        project: "\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0034\u0020\u0037\u002e\u0035\u0068\u0031\u0036\u004d\u0037\u002e\u0035\u0020\u0034\u0076\u0037\u004d\u0031\u0036\u002e\u0035\u0020\u0034\u0076\u0037\u004d\u0035\u0020\u0031\u0032\u0068\u0031\u0034\u0076\u0038\u0048\u0035\u007a\u0022\u002f\u003e",
        explain:
          "\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0031\u0032\u0020\u0033\u0061\u0037\u0020\u0037\u0020\u0030\u0020\u0030\u0020\u0030\u002d\u0034\u0020\u0031\u0032\u002e\u0037\u0034\u0056\u0031\u0039\u0068\u0038\u0076\u002d\u0033\u002e\u0032\u0036\u0041\u0037\u0020\u0037\u0020\u0030\u0020\u0030\u0020\u0030\u0020\u0031\u0032\u0020\u0033\u005a\u0022\u002f\u003e\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0039\u0020\u0032\u0032\u0068\u0036\u004d\u0039\u002e\u0035\u0020\u0031\u0035\u0068\u0035\u0022\u002f\u003e",
        code: "\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u006d\u0038\u0020\u0039\u002d\u0033\u0020\u0033\u0020\u0033\u0020\u0033\u004d\u0031\u0036\u0020\u0039\u006c\u0033\u0020\u0033\u002d\u0033\u0020\u0033\u004d\u0031\u0034\u0020\u0035\u006c\u002d\u0034\u0020\u0031\u0034\u0022\u002f\u003e",
        ideas:
          "\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0031\u0032\u0020\u0033\u0076\u0033\u004d\u0034\u002e\u0032\u0032\u0020\u0036\u002e\u0032\u0032\u006c\u0032\u002e\u0031\u0032\u0020\u0032\u002e\u0031\u0032\u004d\u0033\u0020\u0031\u0034\u0068\u0033\u004d\u0031\u0038\u0020\u0031\u0034\u0068\u0033\u004d\u0031\u0037\u002e\u0036\u0036\u0020\u0038\u002e\u0033\u0034\u006c\u0032\u002e\u0031\u0032\u002d\u0032\u002e\u0031\u0032\u0022\u002f\u003e\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0038\u002e\u0035\u0020\u0031\u0038\u0068\u0037\u004d\u0039\u002e\u0035\u0020\u0032\u0031\u0068\u0035\u004d\u0031\u0032\u0020\u0038\u0061\u0035\u0020\u0035\u0020\u0030\u0020\u0030\u0020\u0030\u002d\u0033\u0020\u0039\u0068\u0036\u0061\u0035\u0020\u0035\u0020\u0030\u0020\u0030\u0020\u0030\u002d\u0033\u002d\u0039\u005a\u0022\u002f\u003e",
      };
      return `<svg aria-hidden="true" viewBox="0 0 24 24">${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5[__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96] || __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.ideas}</svg>`;
    })(
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
    )}</span><span class="ai-starter-copy"><strong>${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)}</strong></span></button>`;
  }
  function __9df5fc35fdff065d38d3f5e096268bdcee1c00ca0aba340ab7672fb8557be277() {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = [
        ...__8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433,
      ].sort(
        (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ) =>
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.updatedAt -
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.updatedAt,
      ),
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
        __b769cfef6d38d8b555019ba9dbf653f1b85fbdc3ec8f99db5a9368ed7a200661.value
          .trim()
          .toLowerCase(),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.filter(
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.title}\n${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.messages.map((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.content).join("\u000a")}`
                  .toLowerCase()
                  .includes(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
            )
          : __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96;
    ((__3024b81c189fd2c8b2a9d40c5083c0a67b5bc98a00d6e0dc336123d41b1a0c7f.textContent =
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
        ? `${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.length}/${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.length}`
        : String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.length)),
      (__ed46735a7066924b61d2076cc7666ca73533276eec44191d16b834970c65bf6d.hidden =
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.length > 0),
      (__ed46735a7066924b61d2076cc7666ca73533276eec44191d16b834970c65bf6d.textContent =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.length &&
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ? "\u004e\u006f\u0020\u006d\u0061\u0074\u0063\u0068\u0069\u006e\u0067\u0020\u0063\u0068\u0061\u0074\u0073\u002e"
          : "\u004e\u006f\u0020\u0063\u0068\u0061\u0074\u0073\u0020\u0079\u0065\u0074\u002e"),
      (__b1beae86029a4f3a21d0d992ca0d2036eaaaae8e45994cac42b42d390c73e329.innerHTML =
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
          .map(
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
              `<div role="listitem"><button class="ai-thread-button" type="button" data-thread-id="${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id)}" aria-current="${__0159afb719a78ed8c8a3938ee144c930b121f1fd74d588b30e9186af4a2f89d7 || __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id !== __93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb ? "\u0066\u0061\u006c\u0073\u0065" : "\u0074\u0072\u0075\u0065"}"><span class="ai-thread-icon"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 5h14v11H9l-4 3V5Z"/></svg></span><span class="ai-thread-copy"><strong>${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.title)}</strong><small>${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(
                (function (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
                  const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                      new Date(
                        Number(
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                        ) || Date.now(),
                      ),
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = new Date();
                  if (
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.toDateString() ===
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.toDateString()
                  )
                    return __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.toLocaleTimeString(
                      [],
                      {
                        hour: "\u006e\u0075\u006d\u0065\u0072\u0069\u0063",
                        minute: "\u0032\u002d\u0064\u0069\u0067\u0069\u0074",
                      },
                    );
                  const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                    new Date(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c);
                  return (
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.setDate(
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.getDate() -
                        1,
                    ),
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.toDateString() ===
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.toDateString()
                      ? "\u0059\u0065\u0073\u0074\u0065\u0072\u0064\u0061\u0079"
                      : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.toLocaleDateString(
                          [],
                          {
                            month: "\u0073\u0068\u006f\u0072\u0074",
                            day: "\u006e\u0075\u006d\u0065\u0072\u0069\u0063",
                          },
                        )
                  );
                })(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.updatedAt),
              )}</small></span></button></div>`,
          )
          .join("")),
      __e89c06b9c8c138ab668108b5f84a303333ad66d3886346a0eb785642be515763.setAttribute(
        "\u0061\u0072\u0069\u0061\u002d\u0070\u0072\u0065\u0073\u0073\u0065\u0064",
        String(__0159afb719a78ed8c8a3938ee144c930b121f1fd74d588b30e9186af4a2f89d7),
      ));
  }
  function __d20abde5627bd367bf319347744deb97dc8c68d73d6cd9dfbb7d87e7e7a9ab7f() {
    (__66e401afb5509cbf5c4bb5624e18bcf319933c46cb9b07bc6c7f86affaa05b78?.abort(),
      (__66e401afb5509cbf5c4bb5624e18bcf319933c46cb9b07bc6c7f86affaa05b78 = null),
      __553fd208cfae8e08e0267b27d02381364da70f59e03ddce0ac47ae09e5b5c29a(!1));
  }
  function __7441a9beb486dffedb80e293924081313fd873c8e8d79f20865af07f2719c736(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    (__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.classList.toggle(
      "\u0069\u0073\u002d\u0073\u0069\u0064\u0065\u0062\u0061\u0072\u002d\u006f\u0070\u0065\u006e",
      Boolean(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
    ),
      __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b.setAttribute(
        "\u0061\u0072\u0069\u0061\u002d\u0065\u0078\u0070\u0061\u006e\u0064\u0065\u0064",
        String(Boolean(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)),
      ));
  }
  function __35d101a55d7c96921069c824f54e70ddec94132127d41ddfcaa893442577a894({
    temporary: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = !1,
  } = {}) {
    if (
      (__d20abde5627bd367bf319347744deb97dc8c68d73d6cd9dfbb7d87e7e7a9ab7f(),
      __33fc4fa3fc7e5e999d7d45936b017e261c484a8603d0551b846aeb5b1b7cb9c0(),
      (__0159afb719a78ed8c8a3938ee144c930b121f1fd74d588b30e9186af4a2f89d7 =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
      (__17637b72fc4733887b3a19c85d5d3c70864a8f76b0495e06a14055b0d0c65db6 = []),
      (__93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb = ""),
      !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)
    ) {
      try {
        localStorage.removeItem(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c);
      } catch {}
      __6a415fc87620178d27b437cc0f4824caf47662a63117ba3cbdfcbcdc0240786f([]);
    }
    (__9df5fc35fdff065d38d3f5e096268bdcee1c00ca0aba340ab7672fb8557be277(),
      __f1a3ca812160fc80a7a4757479307b5c1a9f2d4aacc8aed8c176f98fd068a168(),
      (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.value = ""),
      __c00319a2b6f50c7d31e0932e1f4e94b86c7ddb4b8219f796ed3931cd30a86bfd(),
      __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.focus());
  }
  const __913d9a91b8b045584d61f6d2a7bf5b9cac11d7d88a2c07f47d25c48b7a0c43fb = Object.freeze({
    0: "\u0023\u0030\u0030\u0030\u0030\u0030\u0030",
    1: "\u0023\u0030\u0030\u0030\u0030\u0061\u0061",
    2: "\u0023\u0030\u0030\u0061\u0061\u0030\u0030",
    3: "\u0023\u0030\u0030\u0061\u0061\u0061\u0061",
    4: "\u0023\u0061\u0061\u0030\u0030\u0030\u0030",
    5: "\u0023\u0061\u0061\u0030\u0030\u0061\u0061",
    6: "\u0023\u0066\u0066\u0061\u0061\u0030\u0030",
    7: "\u0023\u0061\u0061\u0061\u0061\u0061\u0061",
    8: "\u0023\u0035\u0035\u0035\u0035\u0035\u0035",
    9: "\u0023\u0035\u0035\u0035\u0035\u0066\u0066",
    a: "\u0023\u0035\u0035\u0066\u0066\u0035\u0035",
    b: "\u0023\u0035\u0035\u0066\u0066\u0066\u0066",
    c: "\u0023\u0066\u0066\u0035\u0035\u0035\u0035",
    d: "\u0023\u0066\u0066\u0035\u0035\u0066\u0066",
    e: "\u0023\u0066\u0066\u0066\u0066\u0035\u0035",
    f: "\u0023\u0066\u0066\u0066\u0066\u0066\u0066",
  });
  function __a5c9dfe805d3179c2b07cfc79ddcce24e86e8cb4409fa83b5e7aea9b14da1b88(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    return String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || "")
      .replace(/&[0-9a-fklmnor]/gi, "")
      .trim();
  }
  function __3753e88ff350392a4cfe9913f5634655772496a4eae9ec667abbcc572af9e053(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = {},
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
        String(localStorage.getItem("\u006e\u0079\u0078\u002e\u0075\u0073\u0065\u0072\u004e\u0061\u006d\u0065") || "\u0050\u0072\u006f\u0066\u0069\u006c\u0065").trim() || "\u0050\u0072\u006f\u0066\u0069\u006c\u0065",
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
        String(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.displayName ||
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ).trim() || "\u0050\u0072\u006f\u0066\u0069\u006c\u0065",
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = String(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.handle ||
          "\u004f\u0070\u0065\u006e\u0020\u0079\u006f\u0075\u0072\u0020\u004e\u0037\u0058\u0020\u0070\u0072\u006f\u0066\u0069\u006c\u0065",
      ).trim(),
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = String(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.avatarUrl || "",
      ).trim();
    (!(function (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    ) {
      const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = String(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 || "",
        ),
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = /&([0-9a-fklmnor])/gi,
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
          document.createDocumentFragment();
      let __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = 0,
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = {};
      const __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = (
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      ) => {
        if (!__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) return;
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
          document.createElement("\u0073\u0070\u0061\u006e");
        ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.textContent =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.color &&
            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.style.color =
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.color),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.bold &&
            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.style.fontWeight =
              "\u0039\u0030\u0030"),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.italic &&
            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.style.fontStyle =
              "\u0069\u0074\u0061\u006c\u0069\u0063"));
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = [];
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.underline &&
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.push("\u0075\u006e\u0064\u0065\u0072\u006c\u0069\u006e\u0065"),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.strike &&
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.push("\u006c\u0069\u006e\u0065\u002d\u0074\u0068\u0072\u006f\u0075\u0067\u0068"),
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.length &&
            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.style.textDecoration =
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.join("\u0020")),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.magic &&
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.classList.add(
              "\u0061\u0069\u002d\u006d\u0069\u006e\u0065\u0063\u0072\u0061\u0066\u0074\u002d\u006d\u0061\u0067\u0069\u0063",
            ),
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.append(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          ));
      };
      for (
        ;
        (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.exec(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          ));

      ) {
        (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.slice(
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.index,
          ),
        ),
          (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.lastIndex));
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a[1].toLowerCase();
        __913d9a91b8b045584d61f6d2a7bf5b9cac11d7d88a2c07f47d25c48b7a0c43fb[
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
        ]
          ? (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = {
              color:
                __913d9a91b8b045584d61f6d2a7bf5b9cac11d7d88a2c07f47d25c48b7a0c43fb[
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                ],
            })
          : "\u006c" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
            ? (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.bold = !0)
            : "\u006f" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
              ? (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.italic = !0)
              : "\u006e" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                ? (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.underline =
                    !0)
                : "\u006d" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                  ? (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.strike = !0)
                  : "\u006b" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                    ? (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.magic =
                        !0)
                    : "\u0072" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
                      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = {});
      }
      (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.slice(
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
        ),
      ),
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.replaceChildren(
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
        ),
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.title =
          __a5c9dfe805d3179c2b07cfc79ddcce24e86e8cb4409fa83b5e7aea9b14da1b88(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          ) || "\u0050\u0072\u006f\u0066\u0069\u006c\u0065"));
    })(
      __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3,
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
    ),
      (__eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454.textContent =
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03),
      (__cbe3e169b82a066efb87cecf43ee78a46c91fe23c1c18420de9d26beb1a60ea4.textContent = (
        Array.from(
          __a5c9dfe805d3179c2b07cfc79ddcce24e86e8cb4409fa83b5e7aea9b14da1b88(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          ),
        )[0] || "\u004e"
      ).toUpperCase()),
      /^(?:https?:|blob:|data:image\/|\/)/i.test(
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
      )
        ? ((__3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2.src =
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713),
          (__3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2.hidden = !1),
          (__cbe3e169b82a066efb87cecf43ee78a46c91fe23c1c18420de9d26beb1a60ea4.hidden = !0))
        : (__3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2.removeAttribute(
            "\u0073\u0072\u0063",
          ),
          (__3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2.hidden = !0),
          (__cbe3e169b82a066efb87cecf43ee78a46c91fe23c1c18420de9d26beb1a60ea4.hidden = !1)));
  }
  function __b1d9d225243cc6b2bb3f35046efd5be2eac49665156078377b5f872bf15b5487() {
    (__3753e88ff350392a4cfe9913f5634655772496a4eae9ec667abbcc572af9e053(),
      parent !== window &&
        parent.postMessage(
          {
            type: "\u006e\u0079\u0078\u003a\u0061\u0069\u002d\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u002d\u0072\u0065\u0071\u0075\u0065\u0073\u0074",
          },
          location.origin,
        ));
  }
  function __a93c1f964ed03e99641b2345a9618f60d43558aa06333bd7417381d77e45a088(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.find(
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
          "\u0075\u0073\u0065\u0072" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.role,
      )?.content || "";
    __26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82.textContent =
      __0159afb719a78ed8c8a3938ee144c930b121f1fd74d588b30e9186af4a2f89d7 &&
      !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
        ? "\u0054\u0065\u006d\u0070\u006f\u0072\u0061\u0072\u0079\u0020\u0063\u0068\u0061\u0074"
        : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ? __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length > 58
            ? `${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.slice(0, 58)}\u2026`
            : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          : "\u004e\u0065\u0077\u0020\u0063\u006f\u006e\u0076\u0065\u0072\u0073\u0061\u0074\u0069\u006f\u006e";
  }
  function __f1a3ca812160fc80a7a4757479307b5c1a9f2d4aacc8aed8c176f98fd068a168() {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
      __f3e544449444922495ce531668ccc68ed8651ebd7dd66e90ad5b3651bfdca0d8();
    if (
      ((__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d.innerHTML = ""),
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.length)
    ) {
      __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d.classList.remove(
        "\u0069\u0073\u002d\u0065\u006d\u0070\u0074\u0079",
      );
      let __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = Math.max(
        0,
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.length - 40,
      );
      const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = (
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      ) =>
        __4965b8628823c7647e57b6b2f8106781a2dc9590b4c179a4bb5aed150a727d0a(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.role,
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.content,
          {
            attachment:
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.textAttachment ||
              null,
            imageId: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.imageId,
            mediaJobId:
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.mediaJobId,
            metadata: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.metadata,
            timing: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.timing,
            modelId: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.modelId,
            modelName: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.modelName,
            finishReason:
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.finishReason,
          },
        );
      if (
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
          .slice(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)
          .forEach(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)
      ) {
        const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
          document.createElement("\u0062\u0075\u0074\u0074\u006f\u006e");
        ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.type = "\u0062\u0075\u0074\u0074\u006f\u006e"),
          (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.className =
            "\u0061\u0069\u002d\u0068\u0069\u0073\u0074\u006f\u0072\u0079\u002d\u0065\u0061\u0072\u006c\u0069\u0065\u0072"),
          (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.textContent =
            "\u004c\u006f\u0061\u0064\u0020\u0065\u0061\u0072\u006c\u0069\u0065\u0072\u0020\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u0073"),
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.addEventListener(
            "\u0063\u006c\u0069\u0063\u006b",
            () => {
              const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                  __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.scrollHeight,
                __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                  __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.scrollTop,
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = Math.max(
                  0,
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 - 40,
                ),
                __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
                  document.createDocumentFragment();
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = !0;
              try {
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                  .slice(
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                  )
                  .forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                    __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.append(
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                      ),
                    ),
                  );
              } finally {
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = !1;
              }
              (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.after(
                __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
              ),
                (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc),
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ||
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.remove(),
                (__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.scrollTop =
                  __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a +
                  __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.scrollHeight -
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713));
            },
          ),
          __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d.prepend(
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
          ));
      }
    } else
      (__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d.classList.add("\u0069\u0073\u002d\u0065\u006d\u0070\u0074\u0079"),
        (__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d.innerHTML = `<section class="ai-welcome" data-ai-welcome>\n      <h2>What's on your mind?</h2>\n      <div class="ai-starters">\n        ${__d6f1a735bfdd454493a8d3b563f29dc31ba2ca3baf7aa48a79bd877d8539feef("\u0048\u0065\u006c\u0070\u0020\u006d\u0065\u0020\u0070\u006c\u0061\u006e\u0020\u0061\u006e\u0064\u0020\u0062\u0075\u0069\u006c\u0064\u0020\u0061\u0020\u006e\u0065\u0077\u0020\u0070\u0072\u006f\u006a\u0065\u0063\u0074\u0020\u0066\u0072\u006f\u006d\u0020\u0073\u0063\u0072\u0061\u0074\u0063\u0068", "\u0050\u006c\u0061\u006e\u0020\u0061\u0020\u0070\u0072\u006f\u006a\u0065\u0063\u0074", "\u0070\u0072\u006f\u006a\u0065\u0063\u0074")}\n        ${__d6f1a735bfdd454493a8d3b563f29dc31ba2ca3baf7aa48a79bd877d8539feef("\u0045\u0078\u0070\u006c\u0061\u0069\u006e\u0020\u0071\u0075\u0061\u006e\u0074\u0075\u006d\u0020\u0063\u006f\u006d\u0070\u0075\u0074\u0069\u006e\u0067\u0020\u0069\u006e\u0020\u0073\u0069\u006d\u0070\u006c\u0065\u0020\u0074\u0065\u0072\u006d\u0073\u0020\u0077\u0069\u0074\u0068\u0020\u0061\u0020\u0075\u0073\u0065\u0066\u0075\u006c\u0020\u0061\u006e\u0061\u006c\u006f\u0067\u0079", "\u0045\u0078\u0070\u006c\u0061\u0069\u006e\u0020\u0073\u006f\u006d\u0065\u0074\u0068\u0069\u006e\u0067", "\u0065\u0078\u0070\u006c\u0061\u0069\u006e")}\n        ${__d6f1a735bfdd454493a8d3b563f29dc31ba2ca3baf7aa48a79bd877d8539feef("\u0052\u0065\u0076\u0069\u0065\u0077\u0020\u0074\u0068\u0069\u0073\u0020\u0063\u006f\u0064\u0065\u0020\u0066\u006f\u0072\u0020\u0062\u0075\u0067\u0073\u002c\u0020\u0063\u006c\u0061\u0072\u0069\u0074\u0079\u002c\u0020\u0061\u006e\u0064\u0020\u0070\u0065\u0072\u0066\u006f\u0072\u006d\u0061\u006e\u0063\u0065\u0020\u0069\u006d\u0070\u0072\u006f\u0076\u0065\u006d\u0065\u006e\u0074\u0073", "\u0052\u0065\u0076\u0069\u0065\u0077\u0020\u006d\u0079\u0020\u0063\u006f\u0064\u0065", "\u0063\u006f\u0064\u0065")}\n        ${__d6f1a735bfdd454493a8d3b563f29dc31ba2ca3baf7aa48a79bd877d8539feef("\u0042\u0072\u0061\u0069\u006e\u0073\u0074\u006f\u0072\u006d\u0020\u0074\u0065\u006e\u0020\u006f\u0072\u0069\u0067\u0069\u006e\u0061\u006c\u0020\u0069\u0064\u0065\u0061\u0073\u0020\u0066\u006f\u0072\u0020\u0061\u0020\u0063\u0072\u0065\u0061\u0074\u0069\u0076\u0065\u0020\u0073\u0069\u0064\u0065\u0020\u0070\u0072\u006f\u006a\u0065\u0063\u0074", "\u0042\u0072\u0061\u0069\u006e\u0073\u0074\u006f\u0072\u006d\u0020\u0069\u0064\u0065\u0061\u0073", "\u0069\u0064\u0065\u0061\u0073")}\n      </div>\n    </section>`));
    (__a93c1f964ed03e99641b2345a9618f60d43558aa06333bd7417381d77e45a088(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ),
      __0e8a6d1bc97ab98cf703324d0e0e366a651559fae879579fcdd8b18acab33b09());
  }
  function __9035082f34e59b4e95e5cedfad27c135e107d9baedc5c5f35025bb7dd8d273ce(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    return (
      __3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211.find(
        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id ===
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      )?.label || __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
    );
  }
  const __661d08851e170b58f0e4380e499af7b40cda7afcd47ebf64b1766d7c3d638cdc = {
    openai: ["\u004f\u0070\u0065\u006e\u0041\u0049", "\u006f\u0070\u0065\u006e\u0061\u0069"],
    anthropic: ["\u0041\u006e\u0074\u0068\u0072\u006f\u0070\u0069\u0063", "\u0061\u006e\u0074\u0068\u0072\u006f\u0070\u0069\u0063"],
    google: ["\u0047\u006f\u006f\u0067\u006c\u0065", "\u0067\u0065\u006d\u0069\u006e\u0069"],
    deepseek: ["\u0044\u0065\u0065\u0070\u0053\u0065\u0065\u006b", "\u0064\u0065\u0065\u0070\u0073\u0065\u0065\u006b"],
    qwen: ["\u0051\u0077\u0065\u006e", "\u0071\u0077\u0065\u006e"],
    "\u0078\u002d\u0061\u0069": ["\u0078\u0041\u0049", "\u0078\u0061\u0069"],
    xai: ["\u0078\u0041\u0049", "\u0078\u0061\u0069"],
    mistralai: ["\u004d\u0069\u0073\u0074\u0072\u0061\u006c", "\u006d\u0069\u0073\u0074\u0072\u0061\u006c"],
    moonshotai: ["\u004d\u006f\u006f\u006e\u0073\u0068\u006f\u0074", "\u006d\u006f\u006f\u006e\u0073\u0068\u006f\u0074"],
    "\u007a\u002d\u0061\u0069": ["\u005a\u002e\u0061\u0069", "\u007a\u0061\u0069"],
    inception: ["\u0049\u006e\u0063\u0065\u0070\u0074\u0069\u006f\u006e", "\u0069\u006e\u0063\u0065\u0070\u0074\u0069\u006f\u006e"],
    nvidia: ["\u004e\u0056\u0049\u0044\u0049\u0041", "\u006e\u0076\u0069\u0064\u0069\u0061"],
    "\u006d\u0065\u0074\u0061\u002d\u006c\u006c\u0061\u006d\u0061": ["\u004d\u0065\u0074\u0061", "\u006d\u0065\u0074\u0061"],
    cohere: ["\u0043\u006f\u0068\u0065\u0072\u0065", "\u0063\u006f\u0068\u0065\u0072\u0065"],
    minimax: ["\u004d\u0069\u006e\u0069\u004d\u0061\u0078", "\u006d\u0069\u006e\u0069\u006d\u0061\u0078"],
    openrouter: ["\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072", "\u006f\u0070\u0065\u006e\u0072\u006f\u0075\u0074\u0065\u0072"],
    xiaomi: ["\u0058\u0069\u0061\u006f\u006d\u0069", "\u0078\u0069\u0061\u006f\u006d\u0069\u006d\u0069\u006d\u006f"],
    amazon: ["\u0041\u006d\u0061\u007a\u006f\u006e", "\u0061\u0077\u0073"],
    microsoft: ["\u004d\u0069\u0063\u0072\u006f\u0073\u006f\u0066\u0074", "\u006d\u0069\u0063\u0072\u006f\u0073\u006f\u0066\u0074"],
    perplexity: ["\u0050\u0065\u0072\u0070\u006c\u0065\u0078\u0069\u0074\u0079", "\u0070\u0065\u0072\u0070\u006c\u0065\u0078\u0069\u0074\u0079"],
    stepfun: ["\u0053\u0074\u0065\u0070\u0046\u0075\u006e", "\u0073\u0074\u0065\u0070\u0066\u0075\u006e"],
    baidu: ["\u0042\u0061\u0069\u0064\u0075", "\u0062\u0061\u0069\u0064\u0075"],
    bytedance: ["\u0042\u0079\u0074\u0065\u0044\u0061\u006e\u0063\u0065", "\u0062\u0079\u0074\u0065\u0064\u0061\u006e\u0063\u0065"],
    arcee: ["\u0041\u0072\u0063\u0065\u0065", "\u0061\u0072\u0063\u0065\u0065"],
    ai21: ["\u0041\u0049\u0032\u0031", "\u0061\u0069\u0032\u0031"],
    "\u0061\u0072\u0063\u0065\u0065\u002d\u0061\u0069": ["\u0041\u0072\u0063\u0065\u0065", "\u0061\u0072\u0063\u0065\u0065"],
    "\u0062\u0079\u0074\u0065\u0064\u0061\u006e\u0063\u0065\u002d\u0073\u0065\u0065\u0064": ["\u0042\u0079\u0074\u0065\u0044\u0061\u006e\u0063\u0065", "\u0062\u0079\u0074\u0065\u0064\u0061\u006e\u0063\u0065"],
    meta: ["\u004d\u0065\u0074\u0061", "\u006d\u0065\u0074\u0061"],
    "\u0061\u0069\u006f\u006e\u002d\u006c\u0061\u0062\u0073": ["\u0041\u0069\u006f\u006e\u0020\u004c\u0061\u0062\u0073", "\u0061\u0069\u006f\u006e\u006c\u0061\u0062\u0073"],
    tencent: ["\u0054\u0065\u006e\u0063\u0065\u006e\u0074", "\u0074\u0065\u006e\u0063\u0065\u006e\u0074"],
    sakana: ["\u0053\u0061\u006b\u0061\u006e\u0061\u0020\u0041\u0049", "\u0073\u0061\u006b\u0061\u006e\u0061"],
    poolside: ["\u0050\u006f\u006f\u006c\u0073\u0069\u0064\u0065", "\u0070\u006f\u006f\u006c\u0073\u0069\u0064\u0065"],
    upstage: ["\u0055\u0070\u0073\u0074\u0061\u0067\u0065", "\u0075\u0070\u0073\u0074\u0061\u0067\u0065"],
    nousresearch: ["\u004e\u006f\u0075\u0073\u0020\u0052\u0065\u0073\u0065\u0061\u0072\u0063\u0068", "\u006e\u006f\u0075\u0073\u0072\u0065\u0073\u0065\u0061\u0072\u0063\u0068"],
    perceptron: ["\u0050\u0065\u0072\u0063\u0065\u0070\u0074\u0072\u006f\u006e", "\u0070\u0065\u0072\u0063\u0065\u0070\u0074\u0072\u006f\u006e"],
    "\u0069\u006e\u0066\u0065\u0072\u0065\u006e\u0063\u0065\u002d\u006e\u0065\u0074": ["\u0049\u006e\u0066\u0065\u0072\u0065\u006e\u0063\u0065\u002e\u006e\u0065\u0074", "\u0069\u006e\u0066\u0065\u0072\u0065\u006e\u0063\u0065"],
    "\u0069\u0062\u006d\u002d\u0067\u0072\u0061\u006e\u0069\u0074\u0065": ["\u0049\u0042\u004d", "\u0069\u0062\u006d"],
    rekaai: ["\u0052\u0065\u006b\u0061", "\u0072\u0065\u006b\u0061"],
    relace: ["\u0052\u0065\u006c\u0061\u0063\u0065", "\u0072\u0065\u006c\u0061\u0063\u0065"],
    morph: ["\u004d\u006f\u0072\u0070\u0068", "\u006d\u006f\u0072\u0070\u0068"],
    fireworks: ["\u0046\u0069\u0072\u0065\u0077\u006f\u0072\u006b\u0073", "\u0066\u0069\u0072\u0065\u0077\u006f\u0072\u006b\u0073"],
    "\u0064\u006f\u0074\u0073\u002d\u0073\u0074\u0075\u0064\u0069\u006f": ["\u0044\u006f\u0074\u0073", "\u0064\u006f\u0074\u0073\u0073\u0074\u0075\u0064\u0069\u006f"],
    liquid: ["\u004c\u0069\u0071\u0075\u0069\u0064\u0020\u0041\u0049", "\u006c\u0069\u0071\u0075\u0069\u0064"],
    kwaipilot: ["\u004b\u0077\u0061\u0069", "\u006b\u0077\u0061\u0069\u0070\u0069\u006c\u006f\u0074"],
    meituan: ["\u004d\u0065\u0069\u0074\u0075\u0061\u006e", "\u006c\u006f\u006e\u0067\u0063\u0061\u0074"],
    thinkingmachines: ["\u0054\u0068\u0069\u006e\u006b\u0069\u006e\u0067\u0020\u004d\u0061\u0063\u0068\u0069\u006e\u0065\u0073", "\u0074\u0068\u0069\u006e\u006b\u0069\u006e\u0067\u006d\u0061\u0063\u0068\u0069\u006e\u0065\u0073"],
    inclusionai: ["\u0049\u006e\u0063\u006c\u0075\u0073\u0069\u006f\u006e\u0041\u0049", "\u0069\u006e\u0063\u006c\u0075\u0073\u0069\u006f\u006e\u0061\u0069"],
    thedrummer: ["\u0054\u0068\u0065\u0044\u0072\u0075\u006d\u006d\u0065\u0072", "\u0074\u0068\u0065\u0064\u0072\u0075\u006d\u006d\u0065\u0072"],
    typesafe: ["\u0054\u0079\u0070\u0065\u0053\u0061\u0066\u0065", "\u0074\u0079\u0070\u0065\u0073\u0061\u0066\u0065"],
    unbiased: ["\u0055\u006e\u0062\u0069\u0061\u0073\u0065\u0064", "\u0075\u006e\u0062\u0069\u0061\u0073\u0065\u0064"],
    writer: ["\u0057\u0072\u0069\u0074\u0065\u0072", "\u0077\u0072\u0069\u0074\u0065\u0072"],
    stealth: ["\u0053\u0074\u0065\u0061\u006c\u0074\u0068", "\u0073\u0074\u0065\u0061\u006c\u0074\u0068"],
    sao10k: ["\u0053\u0061\u006f\u0031\u0030\u004b", "\u0073\u0061\u006f\u0031\u0030\u006b"],
    "\u0061\u006e\u0074\u0068\u0072\u0061\u0063\u0069\u0074\u0065\u002d\u006f\u0072\u0067": ["\u0041\u006e\u0074\u0068\u0072\u0061\u0063\u0069\u0074\u0065", "\u0061\u006e\u0074\u0068\u0072\u0061\u0063\u0069\u0074\u0065\u002d\u006f\u0072\u0067"],
    gryphe: ["\u0047\u0072\u0079\u0070\u0068\u0065", "\u0067\u0072\u0079\u0070\u0068\u0065"],
    undi95: ["\u0055\u006e\u0064\u0069\u0039\u0035", "\u0075\u006e\u0064\u0069\u0039\u0035"],
    cognitivecomputations: ["\u0043\u006f\u0067\u006e\u0069\u0074\u0069\u0076\u0065\u0020\u0043\u006f\u006d\u0070\u0075\u0074\u0061\u0074\u0069\u006f\u006e\u0073", "\u0063\u006f\u0067\u006e\u0069\u0074\u0069\u0076\u0065\u0063\u006f\u006d\u0070\u0075\u0074\u0061\u0074\u0069\u006f\u006e\u0073"],
    "\u0070\u0072\u0069\u0073\u006d\u002d\u006d\u006c": ["\u0050\u0072\u0069\u0073\u006d\u004d\u004c", "\u0070\u0072\u0069\u0073\u006d\u002d\u006d\u006c"],
    mancer: ["\u004d\u0061\u006e\u0063\u0065\u0072", "\u006d\u0061\u006e\u0063\u0065\u0072"],
    "\u0062\u006c\u0061\u0063\u006b\u002d\u0066\u006f\u0072\u0065\u0073\u0074\u002d\u006c\u0061\u0062\u0073": ["\u0042\u006c\u0061\u0063\u006b\u0020\u0046\u006f\u0072\u0065\u0073\u0074\u0020\u004c\u0061\u0062\u0073", "\u0066\u006c\u0075\u0078"],
    recraft: ["\u0052\u0065\u0063\u0072\u0061\u0066\u0074", "\u0072\u0065\u0063\u0072\u0061\u0066\u0074"],
    runway: ["\u0052\u0075\u006e\u0077\u0061\u0079", "\u0072\u0075\u006e\u0077\u0061\u0079"],
    kwaivgi: ["\u004b\u006c\u0069\u006e\u0067", "\u006b\u006c\u0069\u006e\u0067"],
    elevenlabs: ["\u0045\u006c\u0065\u0076\u0065\u006e\u004c\u0061\u0062\u0073", "\u0065\u006c\u0065\u0076\u0065\u006e\u006c\u0061\u0062\u0073"],
    assemblyai: ["\u0041\u0073\u0073\u0065\u006d\u0062\u006c\u0079\u0041\u0049", "\u0061\u0073\u0073\u0065\u006d\u0062\u006c\u0079\u0061\u0069"],
    suno: ["\u0053\u0075\u006e\u006f", "\u0073\u0075\u006e\u006f"],
    alibaba: ["\u0041\u006c\u0069\u0062\u0061\u0062\u0061", "\u0061\u006c\u0069\u0062\u0061\u0062\u0061"],
    apodex: ["\u0041\u0070\u006f\u0064\u0065\u0078", "\u0061\u0070\u006f\u0064\u0065\u0078"],
    heygen: ["\u0048\u0065\u0079\u0047\u0065\u006e", "\u0068\u0065\u0079\u0067\u0065\u006e"],
    togethercomputer: ["\u0054\u006f\u0067\u0065\u0074\u0068\u0065\u0072", "\u0074\u006f\u0067\u0065\u0074\u0068\u0065\u0072\u0063\u006f\u006d\u0070\u0075\u0074\u0065\u0072"],
    voyageai: ["\u0056\u006f\u0079\u0061\u0067\u0065\u0020\u0041\u0049", "\u0076\u006f\u0079\u0061\u0067\u0065\u0061\u0069"],
    respan: ["\u0052\u0065\u0073\u0070\u0061\u006e", "\u0072\u0065\u0073\u0070\u0061\u006e"],
    jaredpalmer: ["\u004a\u0061\u0072\u0065\u0064\u0020\u0050\u0061\u006c\u006d\u0065\u0072", "\u006a\u0061\u0072\u0065\u0064\u0070\u0061\u006c\u006d\u0065\u0072"],
    "\u0066\u0069\u0073\u0068\u002d\u0061\u0075\u0064\u0069\u006f": ["\u0046\u0069\u0073\u0068\u0020\u0041\u0075\u0064\u0069\u006f", "\u0066\u0069\u0073\u0068\u002d\u0061\u0075\u0064\u0069\u006f"],
    "\u006e\u0065\u0078\u002d\u0061\u0067\u0069": ["\u004e\u0065\u0078\u0020\u0041\u0047\u0049", "\u006e\u0065\u0078\u002d\u0061\u0067\u0069"],
    deepgram: ["\u0044\u0065\u0065\u0070\u0067\u0072\u0061\u006d", "\u0064\u0065\u0065\u0070\u0067\u0072\u0061\u006d"],
    krea: ["\u004b\u0072\u0065\u0061", "\u006b\u0072\u0065\u0061"],
    sourceful: ["\u0053\u006f\u0075\u0072\u0063\u0065\u0066\u0075\u006c", "\u0073\u006f\u0075\u0072\u0063\u0065\u0066\u0075\u006c"],
    canopylabs: ["\u0043\u0061\u006e\u006f\u0070\u0079\u0020\u004c\u0061\u0062\u0073", "\u0063\u0061\u006e\u006f\u0070\u0079\u006c\u0061\u0062\u0073"],
    sesame: ["\u0053\u0065\u0073\u0061\u006d\u0065", "\u0073\u0065\u0073\u0061\u006d\u0065"],
    hexgrad: ["\u0048\u0065\u0078\u0067\u0072\u0061\u0064", "\u0068\u0065\u0078\u0067\u0072\u0061\u0064"],
    thenlper: ["\u0054\u0068\u0065\u006e\u006c\u0070\u0065\u0072", "\u0074\u0068\u0065\u006e\u006c\u0070\u0065\u0072"],
    intfloat: ["\u0049\u006e\u0074\u0066\u006c\u006f\u0061\u0074", "\u0069\u006e\u0074\u0066\u006c\u006f\u0061\u0074"],
    "\u0073\u0065\u006e\u0074\u0065\u006e\u0063\u0065\u002d\u0074\u0072\u0061\u006e\u0073\u0066\u006f\u0072\u006d\u0065\u0072\u0073": ["\u0053\u0065\u006e\u0074\u0065\u006e\u0063\u0065\u0020\u0054\u0072\u0061\u006e\u0073\u0066\u006f\u0072\u006d\u0065\u0072\u0073", "\u0073\u0065\u006e\u0074\u0065\u006e\u0063\u0065\u002d\u0074\u0072\u0061\u006e\u0073\u0066\u006f\u0072\u006d\u0065\u0072\u0073"],
    baai: ["\u0042\u0041\u0041\u0049", "\u0062\u0061\u0061\u0069"],
  };
  let __a3ef2414e5699bd228492a44d46edafcdc62d2500be0374994517128c6588ee9 = "";
  const __4626e4f5b629c2aebb6e5d0d4c0ab1d46a841da37f5223953547384d74f002ad =
      document.getElementById("\u006d\u006f\u0064\u0065\u006c\u0053\u0065\u0061\u0072\u0063\u0068"),
    __b729892fa6bd497df81ef39e4b1f77fb16ba03e315e624f5d635d1bc4987359d =
      document.getElementById("\u006d\u006f\u0064\u0065\u006c\u0043\u006f\u006d\u0070\u0061\u006e\u0069\u0065\u0073");
  function __a5360e08b418eaef79601a68c14915026ef332b4e698531544b4e43ff6ebbe7f(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id
          .split("\u002f")[0]
          .toLowerCase()
          .replace(/^~/, ""),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
        __661d08851e170b58f0e4380e499af7b40cda7afcd47ebf64b1766d7c3d638cdc[
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
        ];
    return {
      key:
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.[1] ||
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      label:
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.[0] ||
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.company ||
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ||
        "\u004f\u0074\u0068\u0065\u0072",
      icon: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.[1] || "",
    };
  }
  const __38aafd58b6a8306b5d4dbec5576b5701cb60237b4d8a8ea806c656a96ade3b1b = new Set([
      "\u006b\u006c\u0069\u006e\u0067",
      "\u0061\u0073\u0073\u0065\u006d\u0062\u006c\u0079\u0061\u0069",
      "\u0061\u006c\u0069\u0062\u0061\u0062\u0061",
      "\u0061\u0069\u006f\u006e\u006c\u0061\u0062\u0073",
      "\u0061\u0072\u0063\u0065\u0065",
      "\u0061\u0077\u0073",
      "\u0062\u0061\u0069\u0064\u0075",
      "\u0062\u0079\u0074\u0065\u0064\u0061\u006e\u0063\u0065",
      "\u0063\u006c\u0061\u0075\u0064\u0065",
      "\u0063\u006f\u0068\u0065\u0072\u0065",
      "\u0064\u0065\u0065\u0070\u0073\u0065\u0065\u006b",
      "\u0066\u0069\u0072\u0065\u0077\u006f\u0072\u006b\u0073",
      "\u0067\u0065\u006d\u0069\u006e\u0069",
      "\u0067\u0065\u006d\u006d\u0061",
      "\u0068\u0075\u006e\u0079\u0075\u0061\u006e",
      "\u006b\u0069\u006d\u0069",
      "\u006b\u0077\u0061\u0069\u0070\u0069\u006c\u006f\u0074",
      "\u006c\u006f\u006e\u0067\u0063\u0061\u0074",
      "\u006d\u0065\u0074\u0061",
      "\u006d\u0069\u0063\u0072\u006f\u0073\u006f\u0066\u0074",
      "\u006d\u0069\u006e\u0069\u006d\u0061\u0078",
      "\u006d\u0069\u0073\u0074\u0072\u0061\u006c",
      "\u006d\u006f\u0072\u0070\u0068",
      "\u006e\u0076\u0069\u0064\u0069\u0061",
      "\u006f\u0070\u0065\u006e\u0072\u006f\u0075\u0074\u0065\u0072",
      "\u0070\u0065\u0072\u0070\u006c\u0065\u0078\u0069\u0074\u0079",
      "\u0070\u006f\u006f\u006c\u0073\u0069\u0064\u0065",
      "\u0071\u0077\u0065\u006e",
      "\u0073\u0061\u006b\u0061\u006e\u0061",
      "\u0073\u0074\u0065\u0070\u0066\u0075\u006e",
      "\u0074\u0065\u006e\u0063\u0065\u006e\u0074",
      "\u0075\u0070\u0073\u0074\u0061\u0067\u0065",
    ]),
    __8e691a07b8e61e3dc7d896b96b496b899f6829333ed73ce06ae5d9c93777e656 = {
      thinkingmachines: "\u0074\u0068\u0069\u006e\u006b\u0069\u006e\u0067\u006d\u0061\u0063\u0068\u0069\u006e\u0065\u0073\u002d\u0061\u0075\u0074\u0068\u006f\u0072\u002e\u0070\u006e\u0067",
      inclusionai: "\u0069\u006e\u0063\u006c\u0075\u0073\u0069\u006f\u006e\u0061\u0069\u002d\u0061\u0075\u0074\u0068\u006f\u0072\u002e\u0070\u006e\u0067",
      thedrummer: "\u0074\u0068\u0065\u0064\u0072\u0075\u006d\u006d\u0065\u0072\u002d\u0061\u0075\u0074\u0068\u006f\u0072\u002e\u0070\u006e\u0067",
      typesafe: "\u0074\u0079\u0070\u0065\u0073\u0061\u0066\u0065\u002d\u0061\u0075\u0074\u0068\u006f\u0072\u002e\u0070\u006e\u0067",
      unbiased: "\u0075\u006e\u0062\u0069\u0061\u0073\u0065\u0064\u002d\u0061\u0075\u0074\u0068\u006f\u0072\u002e\u0070\u006e\u0067",
      writer: "\u0077\u0072\u0069\u0074\u0065\u0072\u002d\u0061\u0075\u0074\u0068\u006f\u0072\u002e\u0070\u006e\u0067",
      stealth: "\u0073\u0074\u0065\u0061\u006c\u0074\u0068\u002d\u0061\u0075\u0074\u0068\u006f\u0072\u002e\u0073\u0076\u0067",
      sao10k: "\u0073\u0061\u006f\u0031\u0030\u006b\u002d\u0061\u0075\u0074\u0068\u006f\u0072\u002e\u0077\u0065\u0062\u0070",
      "\u0061\u006e\u0074\u0068\u0072\u0061\u0063\u0069\u0074\u0065\u002d\u006f\u0072\u0067": "\u0061\u006e\u0074\u0068\u0072\u0061\u0063\u0069\u0074\u0065\u002d\u006f\u0072\u0067\u002d\u0061\u0075\u0074\u0068\u006f\u0072\u002e\u0077\u0065\u0062\u0070",
      gryphe: "\u0067\u0072\u0079\u0070\u0068\u0065\u002d\u0061\u0075\u0074\u0068\u006f\u0072\u002e\u0077\u0065\u0062\u0070",
      undi95: "\u0075\u006e\u0064\u0069\u0039\u0035\u002d\u0061\u0075\u0074\u0068\u006f\u0072\u002e\u0077\u0065\u0062\u0070",
      cognitivecomputations: "\u0063\u006f\u0067\u006e\u0069\u0074\u0069\u0076\u0065\u0063\u006f\u006d\u0070\u0075\u0074\u0061\u0074\u0069\u006f\u006e\u0073\u002d\u0061\u0075\u0074\u0068\u006f\u0072\u002e\u0070\u006e\u0067",
      "\u0070\u0072\u0069\u0073\u006d\u002d\u006d\u006c": "\u0070\u0072\u0069\u0073\u006d\u002d\u006d\u006c\u002d\u0061\u0075\u0074\u0068\u006f\u0072\u002e\u0070\u006e\u0067",
      mancer: "\u006d\u0061\u006e\u0063\u0065\u0072\u002d\u0061\u0075\u0074\u0068\u006f\u0072\u002e\u0070\u006e\u0067",
    };
  function __4df58bb01d2416b300bfde9a32e96d7574c3bfc0d80c2f802791b9c3bd43144f(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = {
      apodex: "\u0073\u0076\u0067",
      heygen: "\u0070\u006e\u0067",
      togethercomputer: "\u0073\u0076\u0067",
      voyageai: "\u0073\u0076\u0067",
      respan: "\u0070\u006e\u0067",
      jaredpalmer: "\u0070\u006e\u0067",
      "\u0066\u0069\u0073\u0068\u002d\u0061\u0075\u0064\u0069\u006f": "\u0073\u0076\u0067",
      "\u006e\u0065\u0078\u002d\u0061\u0067\u0069": "\u0073\u0076\u0067",
      deepgram: "\u0073\u0076\u0067",
      krea: "\u0073\u0076\u0067",
      sourceful: "\u0070\u006e\u0067",
      canopylabs: "\u0070\u006e\u0067",
      sesame: "\u0070\u006e\u0067",
      hexgrad: "\u0070\u006e\u0067",
      thenlper: "\u0070\u006e\u0067",
      intfloat: "\u0070\u006e\u0067",
      "\u0073\u0065\u006e\u0074\u0065\u006e\u0063\u0065\u002d\u0074\u0072\u0061\u006e\u0073\u0066\u006f\u0072\u006d\u0065\u0072\u0073": "\u0070\u006e\u0067",
      baai: "\u0073\u0076\u0067",
    };
    if (
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5[
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.icon
      ]
    ) {
      const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/icons/ai-companies/${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.icon}-author.${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5[__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.icon]}`;
      return ["\u0062\u0061\u0061\u0069", "\u0066\u0069\u0073\u0068\u002d\u0061\u0075\u0064\u0069\u006f", "\u006b\u0072\u0065\u0061", "\u0064\u0065\u0065\u0070\u0067\u0072\u0061\u006d", "\u0076\u006f\u0079\u0061\u0067\u0065\u0061\u0069"].includes(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.icon,
      )
        ? `<span class="ai-company-logo" style="--company-logo:url('${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c}')" aria-hidden="true"></span>`
        : `<img class="ai-company-logo ai-company-logo-color" src="${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c}" alt="" aria-hidden="true" width="22" height="22">`;
    }
    return __8e691a07b8e61e3dc7d896b96b496b899f6829333ed73ce06ae5d9c93777e656[
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.icon
    ]
      ? `<img class="ai-company-logo ai-company-logo-color" src="/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/icons/ai-companies/${__8e691a07b8e61e3dc7d896b96b496b899f6829333ed73ce06ae5d9c93777e656[__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.icon]}" alt="" aria-hidden="true" width="22" height="22">`
      : __38aafd58b6a8306b5d4dbec5576b5701cb60237b4d8a8ea806c656a96ade3b1b.has(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.icon,
          )
        ? `<img class="ai-company-logo ai-company-logo-color" src="/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/icons/ai-companies/${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.icon}-color.svg" alt="" aria-hidden="true" width="22" height="22">`
        : __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.icon
          ? `<span class="ai-company-logo" style="--company-logo:url('/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/icons/ai-companies/${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.icon}.svg')" aria-hidden="true"></span>`
          : "\u003c\u0073\u0076\u0067\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0061\u0069\u002d\u0063\u006f\u006d\u0070\u0061\u006e\u0079\u002d\u006c\u006f\u0067\u006f\u0020\u0061\u0069\u002d\u0063\u006f\u006d\u0070\u0061\u006e\u0079\u002d\u006c\u006f\u0067\u006f\u002d\u0063\u006f\u006c\u006f\u0072\u0022\u0020\u0061\u0072\u0069\u0061\u002d\u0068\u0069\u0064\u0064\u0065\u006e\u003d\u0022\u0074\u0072\u0075\u0065\u0022\u0020\u0076\u0069\u0065\u0077\u0042\u006f\u0078\u003d\u0022\u0030\u0020\u0030\u0020\u0032\u0034\u0020\u0032\u0034\u0022\u0020\u0066\u0069\u006c\u006c\u003d\u0022\u006e\u006f\u006e\u0065\u0022\u0020\u0073\u0074\u0072\u006f\u006b\u0065\u003d\u0022\u0063\u0075\u0072\u0072\u0065\u006e\u0074\u0043\u006f\u006c\u006f\u0072\u0022\u0020\u0073\u0074\u0072\u006f\u006b\u0065\u002d\u0077\u0069\u0064\u0074\u0068\u003d\u0022\u0031\u002e\u0036\u0022\u003e\u003c\u0072\u0065\u0063\u0074\u0020\u0078\u003d\u0022\u0036\u0022\u0020\u0079\u003d\u0022\u0036\u0022\u0020\u0077\u0069\u0064\u0074\u0068\u003d\u0022\u0031\u0032\u0022\u0020\u0068\u0065\u0069\u0067\u0068\u0074\u003d\u0022\u0031\u0032\u0022\u0020\u0072\u0078\u003d\u0022\u0033\u0022\u002f\u003e\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0039\u0020\u0032\u0076\u0034\u006d\u0036\u002d\u0034\u0076\u0034\u004d\u0039\u0020\u0031\u0038\u0076\u0034\u006d\u0036\u002d\u0034\u0076\u0034\u004d\u0032\u0020\u0039\u0068\u0034\u006d\u002d\u0034\u0020\u0036\u0068\u0034\u006d\u0031\u0032\u002d\u0036\u0068\u0034\u006d\u002d\u0034\u0020\u0036\u0068\u0034\u0022\u002f\u003e\u003c\u002f\u0073\u0076\u0067\u003e";
  }
  function __a868fe495f6ad08410f90c93aa7dc43a13e6fe0392308a1d0640f14b954ec47f(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
        __a5360e08b418eaef79601a68c14915026ef332b4e698531544b4e43ff6ebbe7f(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id
          .toLowerCase()
          .replace(/^~/, ""),
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.startsWith(
          "\u0061\u006e\u0074\u0068\u0072\u006f\u0070\u0069\u0063\u002f\u0063\u006c\u0061\u0075\u0064\u0065",
        )
          ? "\u0063\u006c\u0061\u0075\u0064\u0065"
          : __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.startsWith(
                "\u0067\u006f\u006f\u0067\u006c\u0065\u002f\u0067\u0065\u006d\u006d\u0061",
              )
            ? "\u0067\u0065\u006d\u006d\u0061"
            : __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.startsWith(
                  "\u006d\u006f\u006f\u006e\u0073\u0068\u006f\u0074\u0061\u0069\u002f\u006b\u0069\u006d\u0069",
                )
              ? "\u006b\u0069\u006d\u0069"
              : __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.startsWith(
                    "\u0078\u002d\u0061\u0069\u002f\u0067\u0072\u006f\u006b",
                  )
                ? "\u0067\u0072\u006f\u006b"
                : __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.startsWith(
                      "\u0074\u0065\u006e\u0063\u0065\u006e\u0074\u002f\u0068\u0075\u006e\u0079\u0075\u0061\u006e",
                    )
                  ? "\u0068\u0075\u006e\u0079\u0075\u0061\u006e"
                  : "";
    return __4df58bb01d2416b300bfde9a32e96d7574c3bfc0d80c2f802791b9c3bd43144f(
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
        ? {
            ...__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            icon: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
          }
        : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    );
  }
  function __18f8fb636678dab7c1507d1eceede43f8941d0b13b53291425ec16d10b9d1da9(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = "",
  ) {
    const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
        "\u0073\u0074\u0072\u0069\u006e\u0067" == typeof __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ? __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.trim().slice(0, 200)
          : "",
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
        __3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211.find(
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id ===
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
        ),
      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 &&
        !__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.includes("\u002f")
          ? __3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211.filter(
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id
                  .split("\u002f")
                  .slice(1)
                  .join("\u002f") === __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
            )
          : [],
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 ||
        (1 === __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.length
          ? __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a[0]
          : null);
    ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96._modelId =
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc?.id ||
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03),
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96._modelName =
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc?.label ||
        String(
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ||
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 ||
            "\u0041\u0073\u0073\u0069\u0073\u0074\u0061\u006e\u0074",
        ).slice(0, 200)),
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
        "\u002e\u0061\u0069\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u002d\u006d\u0065\u0074\u0061\u0020\u0073\u0074\u0072\u006f\u006e\u0067",
      ).textContent =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96._modelName),
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
        "\u002e\u0061\u0069\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u002d\u0061\u0076\u0061\u0074\u0061\u0072",
      ).innerHTML = __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96._modelId
        ? __a868fe495f6ad08410f90c93aa7dc43a13e6fe0392308a1d0640f14b954ec47f({
            id: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96._modelId,
            company: "\u0041\u0073\u0073\u0069\u0073\u0074\u0061\u006e\u0074",
          })
        : "\u003c\u0073\u0070\u0061\u006e\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0061\u0069\u002d\u0063\u006f\u006d\u0070\u0061\u006e\u0079\u002d\u0069\u006e\u0069\u0074\u0069\u0061\u006c\u0022\u0020\u0061\u0072\u0069\u0061\u002d\u0068\u0069\u0064\u0064\u0065\u006e\u003d\u0022\u0074\u0072\u0075\u0065\u0022\u003e\u0041\u0049\u003c\u002f\u0073\u0070\u0061\u006e\u003e"));
  }
  const __6db3dc44fa6b2c1dbc899fa9fc29e97a45eaf531159ca375ae2de64abaccf780 = () =>
    "\u0074\u0075\u0074\u0073\u0069" === document.documentElement.dataset.appShell ||
    "\u0061\u0069" === document.documentElement.dataset.tutsiApp;
  function __38059bc19361fe2ed6780b9e1cda7708107d7693ff9d1d8f3477c5cac573c6c8() {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = [
        "\u006f\u0070\u0065\u006e\u0061\u0069",
        "\u0061\u006e\u0074\u0068\u0072\u006f\u0070\u0069\u0063",
        "\u0067\u0065\u006d\u0069\u006e\u0069",
        "\u0064\u0065\u0065\u0070\u0073\u0065\u0065\u006b",
        "\u006d\u0065\u0074\u0061",
        "\u0071\u0077\u0065\u006e",
        "\u0078\u0061\u0069",
        "\u006d\u0069\u0073\u0074\u0072\u0061\u006c",
      ],
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = (
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      ) =>
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.includes(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        )
          ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.indexOf(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            )
          : __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.length,
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = [
        ...new Map(
          [
            {
              id: "\u006f\u0070\u0065\u006e\u0061\u0069\u002f",
            },
            {
              id: "\u0061\u006e\u0074\u0068\u0072\u006f\u0070\u0069\u0063\u002f",
            },
            ...__3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211,
          ].map((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
            const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              __a5360e08b418eaef79601a68c14915026ef332b4e698531544b4e43ff6ebbe7f(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              );
            return [
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.key,
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            ];
          }),
        ).values(),
      ].sort(
        (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        ) =>
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key,
          ) -
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.key,
            ) ||
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.label.localeCompare(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.label,
          ),
      );
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.some(
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key ===
        __a3ef2414e5699bd228492a44d46edafcdc62d2500be0374994517128c6588ee9,
    ) || (__a3ef2414e5699bd228492a44d46edafcdc62d2500be0374994517128c6588ee9 = "");
    const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
      __6db3dc44fa6b2c1dbc899fa9fc29e97a45eaf531159ca375ae2de64abaccf780();
    __b729892fa6bd497df81ef39e4b1f77fb16ba03e315e624f5d635d1bc4987359d.dataset.layout =
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 ? "\u0074\u0075\u0074\u0073\u0069" : "\u006e\u0079\u0078";
    const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
    ) =>
      `<button type="button" data-model-company="${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key)}" title="${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.label)}" aria-label="${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.label)} models" aria-pressed="${__a3ef2414e5699bd228492a44d46edafcdc62d2500be0374994517128c6588ee9 === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key}">${__4df58bb01d2416b300bfde9a32e96d7574c3bfc0d80c2f802791b9c3bd43144f(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)}${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ? `<span class="ai-company-filter-label">${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.label)}</span>` : ""}</button>`;
    if (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03)
      return (
        (__b729892fa6bd497df81ef39e4b1f77fb16ba03e315e624f5d635d1bc4987359d.innerHTML =
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
            .map((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              ),
            )
            .join("")),
        void __8639992de1355551a5798b911cea744edc2514fdc5cf78ffe9c0cd13fc292aba()
      );
    const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.filter(
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
          !["\u006f\u0070\u0065\u006e\u0061\u0069", "\u0061\u006e\u0074\u0068\u0072\u006f\u0070\u0069\u0063"].includes(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key,
          ),
      );
    ((__b729892fa6bd497df81ef39e4b1f77fb16ba03e315e624f5d635d1bc4987359d.innerHTML = [0, 1]
      .map(
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
          `<div class="ai-company-column"><div class="ai-company-pinned">${__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.find(
              (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.key ===
                (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                  ? "\u0061\u006e\u0074\u0068\u0072\u006f\u0070\u0069\u0063"
                  : "\u006f\u0070\u0065\u006e\u0061\u0069"),
            ),
            !0,
          )}</div><div class="ai-company-rail" aria-label="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ? "\u0052\u0069\u0067\u0068\u0074" : "\u004c\u0065\u0066\u0074"} company filters"><div class="ai-company-track">${__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a
            .filter(
              (
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
              ) =>
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c % 2 ===
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            )
            .map((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              ),
            )
            .join("")}</div></div></div>`,
      )
      .join("")),
      __b729892fa6bd497df81ef39e4b1f77fb16ba03e315e624f5d635d1bc4987359d
        .querySelectorAll("\u002e\u0061\u0069\u002d\u0063\u006f\u006d\u0070\u0061\u006e\u0079\u002d\u0072\u0061\u0069\u006c")
        .forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.firstElementChild.cloneNode(
              !0,
            );
          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.setAttribute(
            "\u0061\u0072\u0069\u0061\u002d\u0068\u0069\u0064\u0064\u0065\u006e",
            "\u0074\u0072\u0075\u0065",
          ),
            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dataset.loopCopy =
              ""),
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
              .querySelectorAll("\u0062\u0075\u0074\u0074\u006f\u006e")
              .forEach(
                (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.tabIndex =
                    -1),
              ),
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.append(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            ),
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.addEventListener(
              "\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u006c\u0065\u0061\u0076\u0065",
              () => {
                ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96._loopOffset =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.scrollTop),
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96._continueOnHover =
                    !1));
              },
            ),
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.addEventListener(
              "\u0066\u006f\u0063\u0075\u0073\u006f\u0075\u0074",
              () => {
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96._loopOffset =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.scrollTop;
              },
            ));
        }),
      __8639992de1355551a5798b911cea744edc2514fdc5cf78ffe9c0cd13fc292aba());
  }
  let __20343e89a855fc028fc1a7f78f2da41152083b9ee6d27839e5c3885d75e154e0 = 0;
  function __8639992de1355551a5798b911cea744edc2514fdc5cf78ffe9c0cd13fc292aba() {
    if (
      (cancelAnimationFrame(__20343e89a855fc028fc1a7f78f2da41152083b9ee6d27839e5c3885d75e154e0),
      __b729892fa6bd497df81ef39e4b1f77fb16ba03e315e624f5d635d1bc4987359d.dataset.layout !==
        (__6db3dc44fa6b2c1dbc899fa9fc29e97a45eaf531159ca375ae2de64abaccf780() ? "\u0074\u0075\u0074\u0073\u0069" : "\u006e\u0079\u0078"))
    )
      return void __38059bc19361fe2ed6780b9e1cda7708107d7693ff9d1d8f3477c5cac573c6c8();
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
      matchMedia("\u0028\u0070\u0072\u0065\u0066\u0065\u0072\u0073\u002d\u0072\u0065\u0064\u0075\u0063\u0065\u0064\u002d\u006d\u006f\u0074\u0069\u006f\u006e\u003a\u0020\u0072\u0065\u0064\u0075\u0063\u0065\u0029").matches ||
      __6db3dc44fa6b2c1dbc899fa9fc29e97a45eaf531159ca375ae2de64abaccf780();
    if (
      (__f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb
        .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006d\u006f\u0064\u0065\u006c\u002d\u0063\u006f\u006d\u0070\u0061\u006e\u0079\u003d\u0022\u0022\u005d")
        .setAttribute(
          "\u0061\u0072\u0069\u0061\u002d\u0070\u0072\u0065\u0073\u0073\u0065\u0064",
          String(!__a3ef2414e5699bd228492a44d46edafcdc62d2500be0374994517128c6588ee9),
        ),
      __b729892fa6bd497df81ef39e4b1f77fb16ba03e315e624f5d635d1bc4987359d
        .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u006c\u006f\u006f\u0070\u002d\u0063\u006f\u0070\u0079\u005d")
        .forEach(
          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.hidden =
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
        ),
      __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb.hidden ||
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)
    )
      return;
    let __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = 0;
    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) => {
      const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ? Math.min(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 -
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              50,
            )
          : 0;
      ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
        __b729892fa6bd497df81ef39e4b1f77fb16ba03e315e624f5d635d1bc4987359d
          .querySelectorAll("\u002e\u0061\u0069\u002d\u0063\u006f\u006d\u0070\u0061\u006e\u0079\u002d\u0072\u0061\u0069\u006c")
          .forEach(
            (
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            ) => {
              const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.firstElementChild;
              if (
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.offsetHeight <=
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.clientHeight
              )
                return void (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.lastElementChild.hidden =
                  !0);
              if (
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.matches(
                  "\u003a\u0066\u006f\u0063\u0075\u0073\u002d\u0077\u0069\u0074\u0068\u0069\u006e",
                ) ||
                (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.matches(
                  "\u003a\u0068\u006f\u0076\u0065\u0072",
                ) &&
                  !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96._continueOnHover) ||
                document.hidden
              )
                return;
              const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96._loopOffset ??
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.scrollTop) +
                0.018 *
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 *
                  (0 === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                    ? 1
                    : -1);
              ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96._loopOffset =
                ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 %
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.offsetHeight) +
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.offsetHeight) %
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.offsetHeight),
                (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.scrollTop =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96._loopOffset));
            },
          ),
        (__20343e89a855fc028fc1a7f78f2da41152083b9ee6d27839e5c3885d75e154e0 = requestAnimationFrame(
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        )));
    };
    __20343e89a855fc028fc1a7f78f2da41152083b9ee6d27839e5c3885d75e154e0 = requestAnimationFrame(
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
    );
  }
  function __fc82f9ac2f58bda26f8dcfaaaa65e42bee83b34f5ff42b60354a7ffc47efe2de(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    if (
      !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
      __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb.hidden
    )
      return;
    if (__6db3dc44fa6b2c1dbc899fa9fc29e97a45eaf531159ca375ae2de64abaccf780()) {
      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = [
        ...__b729892fa6bd497df81ef39e4b1f77fb16ba03e315e624f5d635d1bc4987359d.querySelectorAll(
          "\u0062\u0075\u0074\u0074\u006f\u006e",
        ),
      ].find(
        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dataset
            .modelCompany === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      );
      return void __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.scrollIntoView(
        {
          block: "\u006e\u0065\u0061\u0072\u0065\u0073\u0074",
          inline: "\u006e\u0065\u0061\u0072\u0065\u0073\u0074",
        },
      );
    }
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = [
        ...__b729892fa6bd497df81ef39e4b1f77fb16ba03e315e624f5d635d1bc4987359d.querySelectorAll(
          "\u002e\u0061\u0069\u002d\u0063\u006f\u006d\u0070\u0061\u006e\u0079\u002d\u0074\u0072\u0061\u0063\u006b\u003a\u006e\u006f\u0074\u0028\u005b\u0064\u0061\u0074\u0061\u002d\u006c\u006f\u006f\u0070\u002d\u0063\u006f\u0070\u0079\u005d\u0029\u0020\u0062\u0075\u0074\u0074\u006f\u006e",
        ),
      ].find(
        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dataset
            .modelCompany === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      ),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.closest(
          "\u002e\u0061\u0069\u002d\u0063\u006f\u006d\u0070\u0061\u006e\u0079\u002d\u0072\u0061\u0069\u006c",
        );
    if (!__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) return;
    const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.firstElementChild,
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.getBoundingClientRect()
          .top -
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.getBoundingClientRect()
          .top +
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.scrollTop -
        (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.clientHeight -
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.offsetHeight) /
          2,
      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
        !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.lastElementChild
          .hidden &&
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.offsetHeight >
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.clientHeight;
    ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c._loopOffset =
      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a
        ? ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 %
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.offsetHeight) +
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.offsetHeight) %
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.offsetHeight
        : Math.max(
            0,
            Math.min(
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.scrollHeight -
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.clientHeight,
            ),
          )),
      (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.scrollTop =
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c._loopOffset));
  }
  function __87fe42c31137b8265e912162aa89c36f00446fbabc485306cf95857dc03b51f1() {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = (
        __4626e4f5b629c2aebb6e5d0d4c0ab1d46a841da37f5223953547384d74f002ad.value || ""
      )
        .trim()
        .toLowerCase(),
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
        __3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211.filter(
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
            !__a3ef2414e5699bd228492a44d46edafcdc62d2500be0374994517128c6588ee9 ||
            __a5360e08b418eaef79601a68c14915026ef332b4e698531544b4e43ff6ebbe7f(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            ).key === __a3ef2414e5699bd228492a44d46edafcdc62d2500be0374994517128c6588ee9,
        ),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = NyxModelSearch.search(
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        __a5360e08b418eaef79601a68c14915026ef332b4e698531544b4e43ff6ebbe7f,
      );
    ((__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.innerHTML =
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.length
        ? (function (
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = !1,
          ) {
            return (
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
                ? [
                    [
                      "\u0042\u0065\u0073\u0074\u0020\u006d\u0061\u0074\u0063\u0068\u0065\u0073",
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                    ],
                  ]
                : __e2cc3526fba28db9837c4e1f83738f8d1ae340b0a3489d066dd123ee31c6445a(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  )
            )
              .map(
                (
                  [
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                  ],
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                ) => {
                  const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = `modelGroup${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03}`;
                  return `<section class="ai-model-group" role="group" aria-labelledby="${__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713}">\n        <p class="ai-model-group-label" id="${__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713}">${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)}</p>\n        <div class="ai-model-group-grid">${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.map((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => `<button class="ai-model-option" type="button" role="option" data-model-id="${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id)}" aria-selected="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ? "\u0074\u0072\u0075\u0065" : "\u0066\u0061\u006c\u0073\u0065"}">\n          ${__a868fe495f6ad08410f90c93aa7dc43a13e6fe0392308a1d0640f14b954ec47f(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)}<span class="ai-model-option-label"><strong>${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.label)}</strong><small>${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__a5360e08b418eaef79601a68c14915026ef332b4e698531544b4e43ff6ebbe7f(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96).label)} &middot; ${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__51aaf900b5ada938f719e07db5ace0048ef3dab804f453c691ed703d1e149bf3(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96))}${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.allowanceLabel ? "\u0020\u0026\u006d\u0069\u0064\u0064\u006f\u0074\u003b\u0020" + __5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.allowanceLabel) : ""}${__ad8c4078b686d575f909ad9a0ad704cc0593af9729a40b2543dd732ab3c58c44(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) ? "\u0020\u00b7\u0020\u004f\u0070\u0065\u006e\u0020\u0069\u006e\u0020\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072\u0020\u2197" : ""}</small></span>\n          <span class="ai-model-option-check" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="m5 10 3 3 7-7"/></svg></span>\n        </button>`).join("")}</div>\n      </section>`;
                },
              )
              .join("");
          })(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
            __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.value,
            Boolean(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
          )
        : `<p class="ai-model-empty" role="status">${__a3ef2414e5699bd228492a44d46edafcdc62d2500be0374994517128c6588ee9 && !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ? "\u004e\u006f\u0020\u006d\u006f\u0064\u0065\u006c\u0073\u0020\u0066\u0072\u006f\u006d\u0020\u0074\u0068\u0069\u0073\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0020\u0061\u0072\u0065\u0020\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0066\u006f\u0072\u0020\u0074\u0068\u0069\u0073\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002e" : "\u004e\u006f\u0020\u006d\u0061\u0074\u0063\u0068\u0069\u006e\u0067\u0020\u006d\u006f\u0064\u0065\u006c\u0073\u002e"}</p>`),
      (__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.scrollTop = 0));
    const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.find(
        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
          __a5360e08b418eaef79601a68c14915026ef332b4e698531544b4e43ff6ebbe7f(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          ).label.toLowerCase() ===
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      ) || __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c[0];
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
      ? __fc82f9ac2f58bda26f8dcfaaaa65e42bee83b34f5ff42b60354a7ffc47efe2de(
          __a5360e08b418eaef79601a68c14915026ef332b4e698531544b4e43ff6ebbe7f(
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
          ).key,
        )
      : __a3ef2414e5699bd228492a44d46edafcdc62d2500be0374994517128c6588ee9 &&
        __fc82f9ac2f58bda26f8dcfaaaa65e42bee83b34f5ff42b60354a7ffc47efe2de(
          __a3ef2414e5699bd228492a44d46edafcdc62d2500be0374994517128c6588ee9,
        );
    const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
      __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u006d\u006f\u0064\u0065\u006c\u002d\u0063\u006f\u0075\u006e\u0074\u005d",
      );
    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 &&
      (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.textContent =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
        __a3ef2414e5699bd228492a44d46edafcdc62d2500be0374994517128c6588ee9
          ? `${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.length} of ${__3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211.length}`
          : `${__3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211.length} available`);
  }
  function __e2cc3526fba28db9837c4e1f83738f8d1ae340b0a3489d066dd123ee31c6445a(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = [
        "\u006f\u0070\u0065\u006e\u0061\u0069\u002f\u0067\u0070\u0074\u002d\u0036\u002d\u0061\u0073\u0074\u0072\u0061",
        "\u0061\u006e\u0074\u0068\u0072\u006f\u0070\u0069\u0063\u002f\u0063\u006c\u0061\u0075\u0064\u0065\u002d\u0066\u0061\u0062\u006c\u0065\u002d\u0035\u002e\u0031",
        "\u006f\u0070\u0065\u006e\u0061\u0069\u002f\u0067\u0070\u0074\u002d\u0036\u002d\u0073\u006f\u006c",
        "\u006f\u0070\u0065\u006e\u0061\u0069\u002f\u0067\u0070\u0074\u002d\u0035\u002e\u0036\u002d\u0073\u006f\u006c\u002d\u0070\u0072\u006f",
        "\u006f\u0070\u0065\u006e\u0061\u0069\u002f\u0067\u0070\u0074\u002d\u0036\u002d\u006c\u0075\u006e\u0061\u002d\u0070\u0072\u006f",
        "\u006f\u0070\u0065\u006e\u0061\u0069\u002f\u0067\u0070\u0074\u002d\u0036\u002d\u006c\u0075\u006e\u0061",
        "\u006f\u0070\u0065\u006e\u0061\u0069\u002f\u0067\u0070\u0074\u002d\u0035\u002e\u0036\u002d\u006c\u0075\u006e\u0061",
      ],
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = (
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      ) =>
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.free ||
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id.endsWith("\u003a\u0066\u0072\u0065\u0065") ||
        "\u006f\u0070\u0065\u006e\u0072\u006f\u0075\u0074\u0065\u0072\u002f\u0066\u0072\u0065\u0065" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = (
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      ) =>
        __a5360e08b418eaef79601a68c14915026ef332b4e698531544b4e43ff6ebbe7f(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ).label,
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = (
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      ) => {
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.indexOf(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
          );
        return __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c < 0
          ? __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length
          : __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c;
      },
      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = [
        ...__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      ].sort(
        (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ) =>
          Number(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            ),
          ) -
            Number(
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              ),
            ) ||
          Number(
            "\u004f\u0070\u0065\u006e\u0041\u0049" ===
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              ),
          ) -
            Number(
              "\u004f\u0070\u0065\u006e\u0041\u0049" ===
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ),
            ) ||
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          ).localeCompare(
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            ),
          ) ||
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          ) -
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            ) ||
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.label.localeCompare(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.label,
          ),
      ),
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = new Map();
    return (
      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.forEach(
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = `${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) ? "\u0046\u0072\u0065\u0065" : "\u0050\u0061\u0069\u0064"} \xb7 ${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)}`;
          (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.has(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          ) ||
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.set(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              [],
            ),
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc
              .get(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)
              .push(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96));
        },
      ),
      [...__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc]
    );
  }
  function __51aaf900b5ada938f719e07db5ace0048ef3dab804f453c691ed703d1e149bf3(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = {
        text: "\u0054\u0065\u0078\u0074",
        image: "\u0049\u006d\u0061\u0067\u0065\u0020\u0067\u0065\u006e\u0065\u0072\u0061\u0074\u0069\u006f\u006e",
        video: "\u0056\u0069\u0064\u0065\u006f\u0020\u0067\u0065\u006e\u0065\u0072\u0061\u0074\u0069\u006f\u006e",
        audio: "\u0041\u0075\u0064\u0069\u006f",
        speech: "\u0053\u0070\u0065\u0065\u0063\u0068",
        transcription: "\u0054\u0072\u0061\u006e\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e",
        embeddings: "\u0045\u006d\u0062\u0065\u0064\u0064\u0069\u006e\u0067\u0073",
        rerank: "\u0052\u0065\u0072\u0061\u006e\u006b",
        decisions: "\u0044\u0065\u0063\u0069\u0073\u0069\u006f\u006e\u0073",
      },
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.outputModalities || [
          ...(!1 !== __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.text
            ? ["\u0074\u0065\u0078\u0074"]
            : []),
          ...(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.imageGeneration
            ? ["\u0069\u006d\u0061\u0067\u0065"]
            : []),
        ];
    return [
      ...new Set([
        ...__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.map(
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5[
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
            ] || __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ),
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.vision ? "\u0056\u0069\u0073\u0069\u006f\u006e" : "",
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.reasoning
          ? "\u0052\u0065\u0061\u0073\u006f\u006e\u0069\u006e\u0067"
          : "",
      ]),
    ]
      .filter(Boolean)
      .join("\u0020\u00b7\u0020");
  }
  function __ad8c4078b686d575f909ad9a0ad704cc0593af9729a40b2543dd732ab3c58c44(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    return (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
      !1 === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.text &&
      !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.imageGeneration &&
      !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.outputModalities?.includes(
        "\u0076\u0069\u0064\u0065\u006f",
      )
    );
  }
  function __d3952da1913828f888ba529eb15c553c4fb53674bde66b891b6b796b152d2c3d() {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
        __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.value ||
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
        __9035082f34e59b4e95e5cedfad27c135e107d9baedc5c5f35025bb7dd8d273ce(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        );
    ((__e3c7b38e84c27c3e546e6e603229d78351eaa60fabff2a12958e3b3f35427d4e.textContent =
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
      (__0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b.title = `Model: ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5}${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.endsWith("\u003a\u0066\u0072\u0065\u0065") || "\u006f\u0070\u0065\u006e\u0072\u006f\u0075\u0074\u0065\u0072\u002f\u0066\u0072\u0065\u0065" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ? "\u002e\u0020\u0055\u0073\u0065\u0073\u0020\u0079\u006f\u0075\u0072\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u2019\u0073\u0020\u0074\u006f\u006b\u0065\u006e\u0020\u0061\u006c\u006c\u006f\u0077\u0061\u006e\u0063\u0065\u002e\u0020\u0050\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0020\u0072\u0061\u0074\u0065\u0020\u006c\u0069\u006d\u0069\u0074\u0073\u0020\u0061\u006c\u0073\u006f\u0020\u0061\u0070\u0070\u006c\u0079\u002e" : ""}`),
      __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b.setAttribute(
        "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
        `AI model: ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5}`,
      ),
      (__72a91b917bacdbcddd40e0b0aed73d716d3df7426f358b72f02cb51e3ea8899d.textContent =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
      __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87
        .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u006d\u006f\u0064\u0065\u006c\u002d\u0069\u0064\u005d")
        .forEach((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.setAttribute(
            "\u0061\u0072\u0069\u0061\u002d\u0073\u0065\u006c\u0065\u0063\u0074\u0065\u0064",
            String(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dataset.modelId ===
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            ),
          );
        }));
  }
  function __f43e4b6c1a12fe553cba11279b558dac704a6ad61274f79b1784f9fb7a468544(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
  ) {
    ((__568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.innerHTML = (function (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) {
      return __e2cc3526fba28db9837c4e1f83738f8d1ae340b0a3489d066dd123ee31c6445a(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      )
        .map(
          ([
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          ]) =>
            `<optgroup label="${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)}">${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.map((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => `<option value="${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id)}"${__ad8c4078b686d575f909ad9a0ad704cc0593af9729a40b2543dd732ab3c58c44(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) ? "\u0020\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064" : ""}>${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.label)} \xb7 ${__5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(__51aaf900b5ada938f719e07db5ace0048ef3dab804f453c691ed703d1e149bf3(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96))}</option>`).join("")}</optgroup>`,
        )
        .join("");
    })(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)),
      (__568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.value =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
      __38059bc19361fe2ed6780b9e1cda7708107d7693ff9d1d8f3477c5cac573c6c8(),
      __87fe42c31137b8265e912162aa89c36f00446fbabc485306cf95857dc03b51f1(),
      __d3952da1913828f888ba529eb15c553c4fb53674bde66b891b6b796b152d2c3d());
  }
  function __b150088b0a7ba298f2477bcc26bd2516ea5284929456fa00e37593ae57060383() {
    return [
      ...__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.querySelectorAll(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u006d\u006f\u0064\u0065\u006c\u002d\u0069\u0064\u005d",
      ),
    ];
  }
  function __e1984352a6dcc4b50a23d02e441699ffc0632cda96e3fba63e920dc9e61dc2c8({
    restoreFocus: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = !1,
  } = {}) {
    __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb.hidden ||
      (cancelAnimationFrame(__20343e89a855fc028fc1a7f78f2da41152083b9ee6d27839e5c3885d75e154e0),
      __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb.close(),
      (__f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb.hidden = !0),
      __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed.classList.remove(
        "\u0069\u0073\u002d\u006f\u0070\u0065\u006e",
      ),
      __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b.setAttribute(
        "\u0061\u0072\u0069\u0061\u002d\u0065\u0078\u0070\u0061\u006e\u0064\u0065\u0064",
        "\u0066\u0061\u006c\u0073\u0065",
      ),
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
        __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b.focus());
  }
  function __14523a1fce54995bb65e94645657fb2a334057f659a26d358537410f6e057771(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = 0,
  ) {
    __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b.disabled ||
      ((__f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb.hidden = !1),
      __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb.showModal(),
      __8639992de1355551a5798b911cea744edc2514fdc5cf78ffe9c0cd13fc292aba(),
      __a3ef2414e5699bd228492a44d46edafcdc62d2500be0374994517128c6588ee9 ||
        __4626e4f5b629c2aebb6e5d0d4c0ab1d46a841da37f5223953547384d74f002ad.value.trim() ||
        (__fc82f9ac2f58bda26f8dcfaaaa65e42bee83b34f5ff42b60354a7ffc47efe2de("\u006f\u0070\u0065\u006e\u0061\u0069"),
        __fc82f9ac2f58bda26f8dcfaaaa65e42bee83b34f5ff42b60354a7ffc47efe2de("\u0061\u006e\u0074\u0068\u0072\u006f\u0070\u0069\u0063")),
      __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed.classList.add("\u0069\u0073\u002d\u006f\u0070\u0065\u006e"),
      __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b.setAttribute(
        "\u0061\u0072\u0069\u0061\u002d\u0065\u0078\u0070\u0061\u006e\u0064\u0065\u0064",
        "\u0074\u0072\u0075\u0065",
      ),
      requestAnimationFrame(() => {
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
            __b150088b0a7ba298f2477bcc26bd2516ea5284929456fa00e37593ae57060383(),
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = Math.max(
            0,
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.findIndex(
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                "\u0074\u0072\u0075\u0065" ===
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getAttribute(
                  "\u0061\u0072\u0069\u0061\u002d\u0073\u0065\u006c\u0065\u0063\u0074\u0065\u0064",
                ),
            ),
          ),
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 < 0
              ? __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length - 1
              : __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 > 0
                ? 0
                : __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c;
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
          ? (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5[
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
            ]?.focus({
              preventScroll: !0,
            }),
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5[
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
            ]?.scrollIntoView({
              block: "\u006e\u0065\u0061\u0072\u0065\u0073\u0074",
            }))
          : __4626e4f5b629c2aebb6e5d0d4c0ab1d46a841da37f5223953547384d74f002ad.focus();
      }));
  }
  function __5dffeb04c3ec35650b50c61e66d423d97ae279a1b87d78d4a82aa57b8574b858(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    __3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211.some(
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id ===
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) &&
      (__ad8c4078b686d575f909ad9a0ad704cc0593af9729a40b2543dd732ab3c58c44(
        __3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211.find(
          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id ===
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ),
      )
        ? window.open(
            "\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u006f\u0070\u0065\u006e\u0072\u006f\u0075\u0074\u0065\u0072\u002e\u0061\u0069\u002f" +
              encodeURI(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
            "\u005f\u0062\u006c\u0061\u006e\u006b",
            "\u006e\u006f\u006f\u0070\u0065\u006e\u0065\u0072",
          )
        : ((__568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.value =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
          __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.dispatchEvent(
            new Event("\u0063\u0068\u0061\u006e\u0067\u0065", {
              bubbles: !0,
            }),
          ),
          __e1984352a6dcc4b50a23d02e441699ffc0632cda96e3fba63e920dc9e61dc2c8({
            restoreFocus: !0,
          })));
  }
  async function __142365502a8b87ca1ebd149d88da5a5fda8ed864077446cb4ab7418934dc7e2d() {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
      document.querySelector("\u002e\u0061\u0069\u002d\u006d\u006f\u0064\u0065\u006c\u002d\u0073\u0074\u0061\u0074\u0075\u0073");
    ((__568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.disabled = !0),
      (__0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b.disabled = !0),
      __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b.setAttribute(
        "\u0061\u0072\u0069\u0061\u002d\u0062\u0075\u0073\u0079",
        "\u0074\u0072\u0075\u0065",
      ));
    try {
      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = await fetch(
          (__6db3dc44fa6b2c1dbc899fa9fc29e97a45eaf531159ca375ae2de64abaccf780()
            ? "\u002f\u0061\u0070\u0069\u002f\u0074\u0075\u0074\u0073\u0069\u002d\u0061\u0069\u002f\u006d\u006f\u0064\u0065\u006c\u0073"
            : "\u002f\u0061\u0070\u0069\u002f\u006e\u0079\u0078\u002d\u0061\u0069\u002f\u006d\u006f\u0064\u0065\u006c\u0073") +
            (__ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d ? "\u003f\u0063\u0075\u0073\u0074\u006f\u006d\u003d\u0031" : ""),
          {
            headers: await __fd19848ac69360eadd3ad8ebfb82354628baec31764b5277d32eb7b6f79b622c({
              accept: "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
            }),
          },
        ),
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
          await __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.json();
      if (!__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.ok)
        throw new Error(
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.error ||
            `Model catalog failed (${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.status})`,
        );
      __8a634624ecf034ed097cd5e7c1a9e014c7efed1bf92024f2b4af50aa6eb48c94 =
        !0 === __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.ownerMediaAccess;
      const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = Array.isArray(
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.models,
      )
        ? __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.models.flatMap(
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
              if (
                __ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d &&
                "\u006e\u0079\u0078" === __46d18b7d900224138364f734f03bee4c2597d91b3a6d5526a280ee4f28f7143f() &&
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.imageGeneration
              )
                return [];
              const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = String(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.id || "",
                ).trim(),
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = String(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.label ||
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                ).trim(),
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = String(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.company || "",
                ).trim();
              return __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
                ? [
                    {
                      id: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                      label: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                      company: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                      allowanceLabel: String(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.allowanceLabel ||
                          "",
                      ),
                      catalogRank: Number.isFinite(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.catalogRank,
                      )
                        ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.catalogRank
                        : 9999,
                      codingRank:
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.codingRank,
                      outputModalities:
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.outputModalities,
                      inputModalities:
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.inputModalities,
                      poolTokenLimit:
                        Number.isSafeInteger(
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.poolTokenLimit,
                        ) &&
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.poolTokenLimit >
                          0
                          ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.poolTokenLimit
                          : null,
                      free: Boolean(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.free,
                      ),
                      text:
                        !1 !==
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.text,
                      imageGeneration:
                        !(
                          __ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d &&
                          "\u006e\u0079\u0078" ===
                            __46d18b7d900224138364f734f03bee4c2597d91b3a6d5526a280ee4f28f7143f()
                        ) &&
                        Boolean(
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.imageGeneration,
                        ),
                      vision:
                        (!__ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d ||
                          "\u006e\u0079\u0078" !==
                            __46d18b7d900224138364f734f03bee4c2597d91b3a6d5526a280ee4f28f7143f()) &&
                        (Boolean(
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.vision,
                        ) ||
                          __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6.has(
                            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                          )),
                      reasoning: Boolean(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.reasoning,
                      ),
                    },
                  ]
                : [];
            },
          )
        : [];
      if (!__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.length)
        throw new Error("\u004e\u006f\u0020\u006d\u006f\u0064\u0065\u006c\u0073\u0020\u0061\u0072\u0065\u0020\u0063\u0075\u0072\u0072\u0065\u006e\u0074\u006c\u0079\u0020\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e");
      const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
          __9aa51242f18b84964521804845518a53dcb10905e08f5bb15c44c748782f7ae4()?.model ||
          localStorage.getItem(
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
          ) ||
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
          __3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211.find(
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id ===
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
          )?.label || __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a;
      __3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211 =
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713;
      const __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.some(
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id ===
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
        )
          ? __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a
          : __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.some(
                (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id ===
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
              )
            ? __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc
            : __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713[0].id;
      return (
        __f43e4b6c1a12fe553cba11279b558dac704a6ad61274f79b1784f9fb7a468544(
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
          __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
        ),
        __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 ===
        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a
          ? (localStorage.setItem(
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
              __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
            ),
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.classList.remove(
                "\u0069\u0073\u002d\u0077\u0061\u0072\u006e\u0069\u006e\u0067",
              ),
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.title = `${__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.length} models available`)))
          : __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.classList.add(
              "\u0069\u0073\u002d\u0077\u0061\u0072\u006e\u0069\u006e\u0067",
            ),
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.title = `${__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2} is temporarily unavailable. N7X will restore it when it returns.`)),
        !0
      );
    } catch (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) {
      return (
        console.warn(
          "\u004e\u0037\u0058\u0020\u0041\u0049\u0020\u006d\u006f\u0064\u0065\u006c\u0020\u0063\u0061\u0074\u0061\u006c\u006f\u0067\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u006c\u006f\u0061\u0064\u0065\u0064\u003a",
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ),
        (__3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211 = []),
        __f43e4b6c1a12fe553cba11279b558dac704a6ad61274f79b1784f9fb7a468544([], ""),
        (__e3c7b38e84c27c3e546e6e603229d78351eaa60fabff2a12958e3b3f35427d4e.textContent =
          "\u004d\u006f\u0064\u0065\u006c\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065"),
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.classList.add(
            "\u0069\u0073\u002d\u0077\u0061\u0072\u006e\u0069\u006e\u0067",
          ),
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.title =
            "\u0054\u0068\u0065\u0020\u006d\u006f\u0064\u0065\u006c\u0020\u006c\u0069\u0073\u0074\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0076\u0065\u0072\u0069\u0066\u0069\u0065\u0064")),
        !1
      );
    } finally {
      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
        __3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211.length > 0;
      ((__568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.disabled =
        !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
        (__0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b.disabled =
          !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
        __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b.removeAttribute(
          "\u0061\u0072\u0069\u0061\u002d\u0062\u0075\u0073\u0079",
        ));
    }
  }
  function __c00319a2b6f50c7d31e0932e1f4e94b86c7ddb4b8219f796ed3931cd30a86bfd() {
    ((__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.style.height = "\u0061\u0075\u0074\u006f"),
      (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.style.height = `${Math.min(__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.scrollHeight, 190)}px`),
      __8d22331976a8113666a0908c81e73aa73428cab2801e9b29ace9b37721493fda &&
        (__8d22331976a8113666a0908c81e73aa73428cab2801e9b29ace9b37721493fda.textContent = `${__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.value.length} / ${__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.maxLength}`));
  }
  function __4e619f930cea09160a9023fa534442b7af20e49e7fddadb6d6b4dadacce066b3(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = !1,
  ) {
    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 ||
      (!__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
        !__386438b87474d2f2a7f9bcafb4095c3f466d499afdc8b7dc19046a9c96d5b10e) ||
      requestAnimationFrame(() => {
        __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.scrollTop =
          __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.scrollHeight;
      });
  }
  function __553fd208cfae8e08e0267b27d02381364da70f59e03ddce0ac47ae09e5b5c29a(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    (__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.setAttribute(
      "\u0061\u0072\u0069\u0061\u002d\u0062\u0075\u0073\u0079",
      String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
    ),
      __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.classList.toggle(
        "\u0069\u0073\u002d\u0062\u0075\u0073\u0079",
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      ),
      (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.disabled =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
      (__d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21.disabled =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
        Date.now() < __3abefec312ee58c7fe62ed56861d8dd221822df7f4adf805e11d7b6e7cea0012),
      (__ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90.disabled =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
      (__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417.disabled =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
      (__ee07b2c1f5ae5a68cf1a38fc099e028ffbe3e7bdd9c0223fa1ec952465f7acbf.disabled =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
      (__d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c.disabled =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
      __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21.setAttribute(
        "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
          ? `Waiting for ${__244d1cdcaa8ad70eaeb3d64221d1bac83d532b18f34d6b838e65a430a6a2af78()}`
          : "\u0053\u0065\u006e\u0064\u0020\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
      ));
  }
  async function __64de0c65bc46a47c8a38d93319c824365ea2dd8a9c5ebb1a0cc03a9bb91d6cfd(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    if (navigator.clipboard?.writeText)
      return void (await navigator.clipboard.writeText(
        String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || ""),
      ));
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      document.createElement("\u0074\u0065\u0078\u0074\u0061\u0072\u0065\u0061");
    ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.value = String(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || "",
    )),
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.style.position = "\u0066\u0069\u0078\u0065\u0064"),
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.style.opacity = "\u0030"),
      document.body.appendChild(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.select(),
      document.execCommand("\u0063\u006f\u0070\u0079"),
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.remove());
  }
  function __2964229471f9cdad224a2dc7855414d522fc9f789d8af69d8ea72c09957ea2c1(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector("\u0073\u0070\u0061\u006e"),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.textContent || "";
    (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.classList.add("\u0069\u0073\u002d\u0063\u006f\u0070\u0069\u0065\u0064"),
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.setAttribute(
        "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
        "\u0043\u006f\u0070\u0069\u0065\u0064",
      ),
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.textContent = "\u0043\u006f\u0070\u0069\u0065\u0064"),
      setTimeout(() => {
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.classList.remove(
          "\u0069\u0073\u002d\u0063\u006f\u0070\u0069\u0065\u0064",
        ),
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.setAttribute(
            "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.hasAttribute(
              "\u0064\u0061\u0074\u0061\u002d\u0063\u006f\u0070\u0079\u002d\u0063\u006f\u0064\u0065",
            )
              ? "\u0043\u006f\u0070\u0079\u0020\u0063\u006f\u0064\u0065"
              : "\u0043\u006f\u0070\u0079\u0020\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
          ),
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.textContent =
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c || "\u0043\u006f\u0070\u0079"));
      }, 1200));
  }
  async function __a88f75c7fa7b50d8cbfce5e4e5c1d41dd7fbe28bd80bbd6c52a217a65fd6345a() {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
      __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.value.trim();
    let __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      __ba14105c51bb0f53ea6c93b0e81a448b1f1c675a13c2b275c94ab1333860fa3c;
    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
        __00608ea01db0bfd231b71dae9747f95df1bb6ae442fb96e53df2e709c0f4f7b4,
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = Boolean(
        __7afa888e62ebfbac2e6002ec2d80426c0fd84774cdd464eebc432bfd97f1d538,
      );
    if (
      (!__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
        !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
        !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
        !__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03) ||
      __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21.disabled
    )
      return;
    if (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03)
      try {
        ((__98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13.textContent =
          "\u0043\u0061\u0070\u0074\u0075\u0072\u0069\u006e\u0067\u0020\u0074\u0068\u0065\u0020\u0063\u0075\u0072\u0072\u0065\u006e\u0074\u0020\u0066\u0072\u0061\u006d\u0065\u2026"),
          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = await (function () {
            if (
              !__7afa888e62ebfbac2e6002ec2d80426c0fd84774cdd464eebc432bfd97f1d538 ||
              "\u0065\u006e\u0064\u0065\u0064" ===
                __7afa888e62ebfbac2e6002ec2d80426c0fd84774cdd464eebc432bfd97f1d538.getVideoTracks()[0]
                  ?.readyState
            )
              return Promise.reject(
                new Error("\u0053\u0063\u0072\u0065\u0065\u006e\u0020\u0073\u0068\u0061\u0072\u0069\u006e\u0067\u0020\u0068\u0061\u0073\u0020\u0065\u006e\u0064\u0065\u0064\u002e\u0020\u0053\u0074\u0061\u0072\u0074\u0020\u0069\u0074\u0020\u0061\u0067\u0061\u0069\u006e\u0020\u0074\u006f\u0020\u0061\u0074\u0074\u0061\u0063\u0068\u0020\u0079\u006f\u0075\u0072\u0020\u0073\u0063\u0072\u0065\u0065\u006e\u002e"),
              );
            const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = Math.max(
                1,
                __a27fb158ddcbc635df4f915211d5c8e5d6a8c04827fe1281526c34bc41e8fb8b.videoWidth ||
                  Number(
                    __7afa888e62ebfbac2e6002ec2d80426c0fd84774cdd464eebc432bfd97f1d538
                      .getVideoTracks()[0]
                      ?.getSettings?.().width,
                  ) ||
                  0,
              ),
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = Math.max(
                1,
                __a27fb158ddcbc635df4f915211d5c8e5d6a8c04827fe1281526c34bc41e8fb8b.videoHeight ||
                  Number(
                    __7afa888e62ebfbac2e6002ec2d80426c0fd84774cdd464eebc432bfd97f1d538
                      .getVideoTracks()[0]
                      ?.getSettings?.().height,
                  ) ||
                  0,
              );
            if (
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 <= 1 ||
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 <= 1
            )
              return Promise.reject(
                new Error("\u0054\u0068\u0065\u0020\u0073\u0068\u0061\u0072\u0065\u0064\u0020\u0073\u0063\u0072\u0065\u0065\u006e\u0020\u0069\u0073\u0020\u006e\u006f\u0074\u0020\u0072\u0065\u0061\u0064\u0079\u0020\u0079\u0065\u0074\u002e\u0020\u0057\u0061\u0069\u0074\u0020\u0061\u0020\u006d\u006f\u006d\u0065\u006e\u0074\u0020\u0061\u006e\u0064\u0020\u0074\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006e\u002e"),
              );
            const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = Math.min(
                1,
                __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f /
                  Math.max(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                  ),
              ),
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                document.createElement("\u0063\u0061\u006e\u0076\u0061\u0073"),
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.getContext("\u0032\u0064");
            if (!__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713)
              return Promise.reject(new Error("\u0053\u0063\u0072\u0065\u0065\u006e\u0020\u0063\u0061\u0070\u0074\u0075\u0072\u0065\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0069\u006e\u0020\u0074\u0068\u0069\u0073\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u002e"));
            ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.width = Math.max(
              1,
              Math.round(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 *
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
              ),
            )),
              (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.height = Math.max(
                1,
                Math.round(
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 *
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                ),
              )),
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.drawImage(
                __a27fb158ddcbc635df4f915211d5c8e5d6a8c04827fe1281526c34bc41e8fb8b,
                0,
                0,
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.width,
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.height,
              ));
            let __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = 0.88,
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.toDataURL(
                  "\u0069\u006d\u0061\u0067\u0065\u002f\u006a\u0070\u0065\u0067",
                  __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                );
            for (
              ;
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.length >
                __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 &&
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a > 0.5;

            )
              ((__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a -= 0.08),
                (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.toDataURL(
                    "\u0069\u006d\u0061\u0067\u0065\u002f\u006a\u0070\u0065\u0067",
                    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                  )));
            return __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.length >
              __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238
              ? Promise.reject(
                  new Error("\u004e\u0037\u0058\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0070\u0072\u0065\u0070\u0061\u0072\u0065\u0020\u0074\u0068\u0061\u0074\u0020\u0073\u0063\u0072\u0065\u0065\u006e\u0020\u0066\u0072\u0061\u006d\u0065\u0020\u0077\u0069\u0074\u0068\u0069\u006e\u0020\u0074\u0068\u0065\u0020\u0075\u0070\u006c\u006f\u0061\u0064\u0020\u006c\u0069\u006d\u0069\u0074\u002e"),
                )
              : Promise.resolve({
                  name: "\u0053\u0068\u0061\u0072\u0065\u0064\u0020\u0073\u0063\u0072\u0065\u0065\u006e",
                  size: Math.ceil(
                    0.75 *
                      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.length,
                  ),
                  type: "\u0069\u006d\u0061\u0067\u0065\u002f\u006a\u0070\u0065\u0067",
                  dataUrl: __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
                  screenCapture: !0,
                });
          })()));
      } catch (__5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7) {
        return void (__98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13.textContent =
          __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7?.message ||
          "\u004e\u0037\u0058\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0063\u0061\u0070\u0074\u0075\u0072\u0065\u0020\u0074\u0068\u0065\u0020\u0073\u0068\u0061\u0072\u0065\u0064\u0020\u0073\u0063\u0072\u0065\u0065\u006e\u002e");
      }
    const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
        __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.value ||
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
        __3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211.find(
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id ===
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
        );
    if (
      __ad8c4078b686d575f909ad9a0ad704cc0593af9729a40b2543dd732ab3c58c44(
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
      )
    )
      return void window.open(
        "\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u006f\u0070\u0065\u006e\u0072\u006f\u0075\u0074\u0065\u0072\u002e\u0061\u0069\u002f" +
          encodeURI(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713),
        "\u005f\u0062\u006c\u0061\u006e\u006b",
        "\u006e\u006f\u006f\u0070\u0065\u006e\u0065\u0072",
      );
    const __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = Boolean(
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2?.outputModalities?.includes(
          "\u0076\u0069\u0064\u0065\u006f",
        ),
      ),
      __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 =
        __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 ||
        ((__8a634624ecf034ed097cd5e7c1a9e014c7efed1bf92024f2b4af50aa6eb48c94 ||
          !1 === __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2?.text) &&
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2?.imageGeneration);
    if (
      __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 &&
      __ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d
    )
      return void __4965b8628823c7647e57b6b2f8106781a2dc9590b4c179a4bb5aed150a727d0a(
        "\u0061\u0073\u0073\u0069\u0073\u0074\u0061\u006e\u0074",
        "\u0055\u0073\u0065\u0020\u004e\u0037\u0058\u0020\u0073\u0068\u0061\u0072\u0065\u0064\u0020\u0066\u006f\u0072\u0020\u0064\u0065\u0064\u0069\u0063\u0061\u0074\u0065\u0064\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0061\u006e\u0064\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0067\u0065\u006e\u0065\u0072\u0061\u0074\u0069\u006f\u006e\u002c\u0020\u006f\u0072\u0020\u006f\u0070\u0065\u006e\u0020\u0074\u0068\u0065\u0020\u006d\u006f\u0064\u0065\u006c\u0020\u006f\u006e\u0020\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072\u002e",
        {
          error: !0,
          modelId: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
        },
      );
    const __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 =
        Boolean(
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2?.imageGeneration,
        ) && !__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239,
      __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
        (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
          ? "\u0050\u006c\u0065\u0061\u0073\u0065\u0020\u0061\u006e\u0061\u006c\u0079\u007a\u0065\u0020\u0077\u0068\u0061\u0074\u0020\u0069\u0073\u0020\u0063\u0075\u0072\u0072\u0065\u006e\u0074\u006c\u0079\u0020\u006f\u006e\u0020\u006d\u0079\u0020\u0073\u0063\u0072\u0065\u0065\u006e\u002e"
          : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
            ? "\u0050\u006c\u0065\u0061\u0073\u0065\u0020\u0061\u006e\u0061\u006c\u0079\u007a\u0065\u0020\u0074\u0068\u0069\u0073\u0020\u0069\u006d\u0061\u0067\u0065\u002e"
            : "\u0050\u006c\u0065\u0061\u0073\u0065\u0020\u0072\u0065\u0076\u0069\u0065\u0077\u0020\u0074\u0068\u0065\u0020\u0061\u0074\u0074\u0061\u0063\u0068\u0065\u0064\u0020\u0074\u0065\u0078\u0074\u0020\u0066\u0069\u006c\u0065\u002e"),
      __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a =
        __f3e544449444922495ce531668ccc68ed8651ebd7dd66e90ad5b3651bfdca0d8();
    (__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.length ||
      __a93c1f964ed03e99641b2345a9618f60d43558aa06333bd7417381d77e45a088([
        {
          role: "\u0075\u0073\u0065\u0072",
          content: __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
        },
      ]),
      __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.push({
        role: "\u0075\u0073\u0065\u0072",
        content: __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
        ...(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
          ? {
              textAttachment: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
            }
          : {}),
      }),
      __f5a98170663d5cceb3a16cb9c8d715eb4066220f710277ffeebe6d9e51edff77(
        __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a,
      ),
      __4965b8628823c7647e57b6b2f8106781a2dc9590b4c179a4bb5aed150a727d0a(
        "\u0075\u0073\u0065\u0072",
        __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
        {
          attachment:
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ||
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        },
      ),
      (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.value = ""),
      __c00319a2b6f50c7d31e0932e1f4e94b86c7ddb4b8219f796ed3931cd30a86bfd());
    const __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d =
      __4965b8628823c7647e57b6b2f8106781a2dc9590b4c179a4bb5aed150a727d0a("\u0061\u0073\u0073\u0069\u0073\u0074\u0061\u006e\u0074", "", {
        thinking: !0,
        modelId: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
        modelName: __9035082f34e59b4e95e5cedfad27c135e107d9baedc5c5f35025bb7dd8d273ce(
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
        ),
      });
    ((__66e401afb5509cbf5c4bb5624e18bcf319933c46cb9b07bc6c7f86affaa05b78 = new AbortController()),
      __553fd208cfae8e08e0267b27d02381364da70f59e03ddce0ac47ae09e5b5c29a(!0));
    let __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 = "",
      __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba = null;
    const __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed = performance.now();
    let __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b = null,
      __e3c7b38e84c27c3e546e6e603229d78351eaa60fabff2a12958e3b3f35427d4e = 0;
    const __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb = () => ({
        elapsedMs:
          performance.now() - __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed,
        firstTextMs: __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b,
        tokens:
          __e3c7b38e84c27c3e546e6e603229d78351eaa60fabff2a12958e3b3f35427d4e ||
          Math.ceil(__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797.length / 4),
        estimated: !__e3c7b38e84c27c3e546e6e603229d78351eaa60fabff2a12958e3b3f35427d4e,
      }),
      __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87 = setInterval(
        () =>
          __a424c97aa3f9ffe3ab859a6c369fdfe37e17c68d6a58ea4d01134a34a8daab2c(
            __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d,
            __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb(),
            !0,
          ),
        500,
      );
    __a424c97aa3f9ffe3ab859a6c369fdfe37e17c68d6a58ea4d01134a34a8daab2c(
      __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d,
      __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb(),
      !0,
    );
    let __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c = null,
      __26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82 = null,
      __8d22331976a8113666a0908c81e73aa73428cab2801e9b29ace9b37721493fda = !1,
      __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43 = 0;
    const __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b = () => {
      ((__eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43 = 0),
        __1f32b7fb5dc1c965c36b1e4cd28ce2ac5ea9404b97612e636e1ae9c97d06f54e(
          __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d,
          __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797,
        ),
        __4e619f930cea09160a9023fa534442b7af20e49e7fddadb6d6b4dadacce066b3());
    };
    try {
      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
            ? await ((__9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6 =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
              __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6?.dataUrl
                ? new Promise(
                    (
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                    ) => {
                      const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                        new Image();
                      ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onload =
                        () => {
                          try {
                            const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                                Math.max(
                                  1,
                                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.naturalWidth ||
                                    1,
                                ),
                              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                                Math.max(
                                  1,
                                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.naturalHeight ||
                                    1,
                                );
                            if (
                              __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6
                                .dataUrl.length <=
                                __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 &&
                              Math.max(
                                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                              ) <=
                                __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f
                            )
                              return void __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(
                                {
                                  dataUrl:
                                    __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6.dataUrl,
                                  mime: __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6.type,
                                  width:
                                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                                  height:
                                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                                  screenCapture:
                                    !0 ===
                                    __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6.screenCapture,
                                },
                              );
                            const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                                document.createElement("\u0063\u0061\u006e\u0076\u0061\u0073"),
                              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.getContext(
                                  "\u0032\u0064",
                                );
                            if (!__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a)
                              throw new Error("\u0049\u006d\u0061\u0067\u0065\u0020\u0070\u0072\u0065\u0070\u0061\u0072\u0061\u0074\u0069\u006f\u006e\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e");
                            let __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                                Math.min(
                                  1,
                                  __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f /
                                    Math.max(
                                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                                      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                                    ),
                                ),
                              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
                                "";
                            for (
                              let __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = 0;
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 <
                                7 &&
                              ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.width =
                                Math.max(
                                  1,
                                  Math.round(
                                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 *
                                      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
                                  ),
                                )),
                              (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.height =
                                Math.max(
                                  1,
                                  Math.round(
                                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 *
                                      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
                                  ),
                                )),
                              (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.fillStyle =
                                "\u0023\u0066\u0066\u0066\u0066\u0066\u0066"),
                              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.fillRect(
                                0,
                                0,
                                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.width,
                                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.height,
                              ),
                              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.drawImage(
                                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                                0,
                                0,
                                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.width,
                                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.height,
                              ),
                              (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
                                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.toDataURL(
                                  "\u0069\u006d\u0061\u0067\u0065\u002f\u006a\u0070\u0065\u0067",
                                  Math.max(
                                    0.52,
                                    0.9 -
                                      0.07 *
                                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                                  ),
                                )),
                              !(
                                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.length <=
                                __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238
                              ));
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 += 1
                            )
                              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc *= 0.82;
                            if (
                              !__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 ||
                              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.length >
                                __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238
                            )
                              throw new Error(
                                "\u004e\u0037\u0058\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0070\u0072\u0065\u0070\u0061\u0072\u0065\u0020\u0074\u0068\u0061\u0074\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0077\u0069\u0074\u0068\u0069\u006e\u0020\u0074\u0068\u0065\u0020\u0075\u0070\u006c\u006f\u0061\u0064\u0020\u006c\u0069\u006d\u0069\u0074\u002e",
                              );
                            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96({
                              dataUrl:
                                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
                              mime: "\u0069\u006d\u0061\u0067\u0065\u002f\u006a\u0070\u0065\u0067",
                              width:
                                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                              height:
                                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                              screenCapture:
                                !0 ===
                                __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6.screenCapture,
                            });
                          } catch (__5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7) {
                            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
                              __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7,
                            );
                          }
                        }),
                        (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onerror =
                          () =>
                            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
                              new Error("\u004e\u0037\u0058\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0064\u0065\u0063\u006f\u0064\u0065\u0020\u0074\u0068\u0061\u0074\u0020\u0069\u006d\u0061\u0067\u0065\u002e"),
                            )),
                        (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.src =
                          __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6.dataUrl));
                    },
                  )
                : Promise.reject(new Error("\u0054\u0068\u0065\u0020\u0061\u0074\u0074\u0061\u0063\u0068\u0065\u0064\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e")))
            : null,
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
            ? `Original image dimensions: ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.width}x${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.height}px.`
            : "";
      let __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2;
      if (
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
          (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
            ? (__98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13.textContent = `N7X is reading this screen frame for ${__9035082f34e59b4e95e5cedfad27c135e107d9baedc5c5f35025bb7dd8d273ce(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713)}\u2026`)
            : __c7d123844d6f7dae6fe9f3567270687f63cb66ecf524f57495619264bfe3a494(
                `N7X is reading this image for ${__9035082f34e59b4e95e5cedfad27c135e107d9baedc5c5f35025bb7dd8d273ce(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713)}\u2026`,
              )),
        __ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d)
      ) {
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
          __46d18b7d900224138364f734f03bee4c2597d91b3a6d5526a280ee4f28f7143f();
        if (
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
            __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6) &&
          "\u006e\u0079\u0078" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
        )
          throw new Error(
            "\u004e\u0037\u0058\u0020\u0041\u0050\u0049\u0020\u006b\u0065\u0079\u0073\u0020\u0063\u0075\u0072\u0072\u0065\u006e\u0074\u006c\u0079\u0020\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u0020\u0074\u0065\u0078\u0074\u0020\u006f\u006e\u006c\u0079\u002e\u0020\u0055\u0073\u0065\u0020\u004e\u0037\u0058\u0020\u0073\u0068\u0061\u0072\u0065\u0064\u0020\u006f\u0072\u0020\u0061\u006e\u0020\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072\u0020\u006b\u0065\u0079\u0020\u0066\u006f\u0072\u0020\u0069\u006d\u0061\u0067\u0065\u0073\u002e",
          );
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
          __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a
            .slice(-20)
            .map((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => ({
              role: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.role,
              content:
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.content +
                (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.textAttachment
                  ? "\u000a\u000a" +
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                      .textAttachment.content
                  : ""),
            }));
        if (
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
            (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c[
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.length - 1
            ].content = [
              {
                type: "\u0074\u0065\u0078\u0074",
                text: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c[
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.length - 1
                ].content,
              },
              {
                type: "\u0069\u006d\u0061\u0067\u0065\u005f\u0075\u0072\u006c",
                image_url: {
                  url: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataUrl,
                },
              },
            ]),
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = await fetch(
            "\u006e\u0079\u0078" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
              ? "\u002f\u0061\u0070\u0069\u002f\u0076\u0031\u002f\u0061\u0069"
              : "\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u006f\u0070\u0065\u006e\u0072\u006f\u0075\u0074\u0065\u0072\u002e\u0061\u0069\u002f\u0061\u0070\u0069\u002f\u0076\u0031\u002f\u0063\u0068\u0061\u0074\u002f\u0063\u006f\u006d\u0070\u006c\u0065\u0074\u0069\u006f\u006e\u0073",
            {
              method: "\u0050\u004f\u0053\u0054",
              signal: __66e401afb5509cbf5c4bb5624e18bcf319933c46cb9b07bc6c7f86affaa05b78.signal,
              headers: {
                "\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065": "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
                Authorization:
                  "\u0042\u0065\u0061\u0072\u0065\u0072\u0020" + __ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d,
              },
              body: JSON.stringify({
                model: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                messages: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                max_tokens: __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6
                  ? 2200
                  : 512,
                stream:
                  !__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 &&
                  "\u006e\u0079\u0078" !== __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                ...(__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6
                  ? {
                      modalities: ["\u0074\u0065\u0078\u0074", "\u0069\u006d\u0061\u0067\u0065"],
                    }
                  : {}),
              }),
            },
          )),
          "\u006e\u0079\u0078" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.ok)
        ) {
          const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
              await __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.json(),
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.choices?.[0]
                ?.message?.content || "";
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = new Response(
            "\u0064\u0061\u0074\u0061\u003a\u0020" +
              JSON.stringify({
                model: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.model,
                choices: [
                  {
                    delta: {
                      content: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                    },
                    finish_reason:
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                        .choices?.[0]?.finish_reason,
                  },
                ],
              }) +
              "\u000a\u000a\u0064\u0061\u0074\u0061\u003a\u0020\u005b\u0044\u004f\u004e\u0045\u005d\u000a\u000a",
            {
              headers: {
                "\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065": "\u0074\u0065\u0078\u0074\u002f\u0065\u0076\u0065\u006e\u0074\u002d\u0073\u0074\u0072\u0065\u0061\u006d",
              },
            },
          );
        }
      } else
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = await fetch(
          __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1
            ? __6db3dc44fa6b2c1dbc899fa9fc29e97a45eaf531159ca375ae2de64abaccf780()
              ? "\u002f\u0061\u0070\u0069\u002f\u0074\u0075\u0074\u0073\u0069\u002d\u0061\u0069\u002f\u006d\u0065\u0064\u0069\u0061"
              : "\u002f\u0061\u0070\u0069\u002f\u006e\u0079\u0078\u002d\u0061\u0069\u002f\u006d\u0065\u0064\u0069\u0061"
            : __6db3dc44fa6b2c1dbc899fa9fc29e97a45eaf531159ca375ae2de64abaccf780()
              ? "\u002f\u0061\u0070\u0069\u002f\u0074\u0075\u0074\u0073\u0069\u002d\u0061\u0069"
              : "\u002f\u0061\u0070\u0069\u002f\u006e\u0079\u0078\u002d\u0061\u0069",
          {
            method: "\u0050\u004f\u0053\u0054",
            signal: __66e401afb5509cbf5c4bb5624e18bcf319933c46cb9b07bc6c7f86affaa05b78.signal,
            headers: await __fd19848ac69360eadd3ad8ebfb82354628baec31764b5277d32eb7b6f79b622c({
              "\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0074\u0079\u0070\u0065": "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
            }),
            body: JSON.stringify({
              historyNoticeVersion: 1,
              temporaryChat: __0159afb719a78ed8c8a3938ee144c930b121f1fd74d588b30e9186af4a2f89d7,
              model: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
              message: __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
              messages:
                __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.slice(-20),
              textAttachment: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
              imageContext: __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
              image: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              responseDepth: __62516b3d67659acde2ed095c5e65043f9a756eddaa7c07346c546771330b5378(),
              generateImage: __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6,
              stream: !__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6,
            }),
          },
        );
      if (!__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.ok) {
        !(function (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = Number(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.headers.get(
              "\u0072\u0065\u0074\u0072\u0079\u002d\u0061\u0066\u0074\u0065\u0072",
            ),
          );
          if (
            429 !== __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.status ||
            !Number.isFinite(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) ||
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 < 1 ||
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 > 60
          )
            return;
          ((__3abefec312ee58c7fe62ed56861d8dd221822df7f4adf805e11d7b6e7cea0012 =
            Date.now() + 1e3 * __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
            clearInterval(__a03f49e95f91224af5b136a0e23dcb87a6dadeb3f9d7f2a0a1bc0a0ffa3f7f6a));
          const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = () => {
            const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = Math.max(
              0,
              Math.ceil(
                (__3abefec312ee58c7fe62ed56861d8dd221822df7f4adf805e11d7b6e7cea0012 - Date.now()) /
                  1e3,
              ),
            );
            ((__8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5.hidden =
              !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
              (__8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5.textContent =
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                  ? `You can send another message in ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}s.`
                  : ""),
              (__d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21.disabled =
                !!__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
                __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.classList.contains(
                  "\u0069\u0073\u002d\u0062\u0075\u0073\u0079",
                )),
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
                clearInterval(__a03f49e95f91224af5b136a0e23dcb87a6dadeb3f9d7f2a0a1bc0a0ffa3f7f6a));
          };
          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(),
            (__a03f49e95f91224af5b136a0e23dcb87a6dadeb3f9d7f2a0a1bc0a0ffa3f7f6a = setInterval(
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
              250,
            )));
        })(__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2);
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
          await __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2
            .json()
            .catch(() => ({}));
        throw new Error(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.error?.message ||
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.error ||
            (__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 &&
            [502, 504].includes(
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.status,
            )
              ? "\u0054\u0068\u0065\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0020\u0066\u0061\u0069\u006c\u0065\u0064\u0020\u006f\u0072\u0020\u0074\u0069\u006d\u0065\u0064\u0020\u006f\u0075\u0074\u0020\u0062\u0065\u0066\u006f\u0072\u0065\u0020\u0066\u0069\u006e\u0069\u0073\u0068\u0069\u006e\u0067\u002e\u0020\u0054\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006e\u0020\u006f\u0072\u0020\u0063\u0068\u006f\u006f\u0073\u0065\u0020\u0061\u006e\u006f\u0074\u0068\u0065\u0072\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u006d\u006f\u0064\u0065\u006c\u002e"
              : `N7X AI failed (${__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.status})`),
        );
      }
      if (__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1) {
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
          await __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.json();
        if (
          !/^[a-f0-9-]{36}$/.test(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.jobId || "",
          )
        )
          throw new Error("\u0054\u0068\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u0020\u0064\u0069\u0064\u0020\u006e\u006f\u0074\u0020\u0072\u0065\u0074\u0075\u0072\u006e\u0020\u0061\u0020\u006a\u006f\u0062\u002e");
        ((__26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82 =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.jobId),
          (__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 =
            "\u0069\u006d\u0061\u0067\u0065" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.kind
              ? "\u0052\u0065\u006e\u0064\u0065\u0072\u0069\u006e\u0067\u0020\u0079\u006f\u0075\u0072\u0020\u0069\u006d\u0061\u0067\u0065\u002e\u0020\u0059\u006f\u0075\u0020\u0063\u0061\u006e\u0020\u006b\u0065\u0065\u0070\u0020\u0063\u0068\u0061\u0074\u0074\u0069\u006e\u0067\u0020\u0077\u0068\u0069\u006c\u0065\u0020\u0069\u0074\u0020\u0066\u0069\u006e\u0069\u0073\u0068\u0065\u0073\u002e"
              : `Rendering a ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.duration}-second video${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.resolution ? "\u0020\u0061\u0074\u0020" + __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.resolution : ""}. It may take a few minutes.`),
          __cf6fdcea7f349c77dc5d548287454d806a7f9a58ad99fdf8faa4f7b1caaab4fa(
            __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d,
            __26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82,
          ));
      } else if (__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6) {
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.body.getReader(),
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = new TextDecoder();
        let __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = "",
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = 0;
        for (;;) {
          const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
            await __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.read();
          if (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.done) break;
          if (
            ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 +=
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.value.byteLength),
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 > 8388608)
          )
            throw (
              await __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.cancel(),
              new Error("\u0054\u0068\u0065\u0020\u0067\u0065\u006e\u0065\u0072\u0061\u0074\u0065\u0064\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065\u0020\u0069\u0073\u0020\u0074\u006f\u006f\u0020\u006c\u0061\u0072\u0067\u0065\u002e")
            );
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c +=
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.decode(
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.value,
              {
                stream: !0,
              },
            );
        }
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c +=
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.decode();
        const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = JSON.parse(
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        );
        if (
          ("\u0073\u0074\u0072\u0069\u006e\u0067" ==
            typeof __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.model &&
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.model.trim() &&
            __18f8fb636678dab7c1507d1eceede43f8941d0b13b53291425ec16d10b9d1da9(
              __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d,
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.model,
            ),
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.error)
        )
          throw new Error(
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.error.message ||
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.error,
          );
        const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.choices?.[0]?.message;
        __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 =
          "\u0073\u0074\u0072\u0069\u006e\u0067" == typeof __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.text
            ? __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.text
            : "\u0073\u0074\u0072\u0069\u006e\u0067" ==
                typeof __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a?.content
              ? __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.content
              : "";
        const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.images ||
          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a?.images ||
          (Array.isArray(
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a?.content,
          )
            ? __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.content.filter(
                (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                  "\u0069\u006d\u0061\u0067\u0065\u005f\u0075\u0072\u006c" ===
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.type,
              )
            : []);
        if (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.length > 1)
          throw new Error("\u0041\u0073\u006b\u0020\u0066\u006f\u0072\u0020\u006f\u006e\u0065\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0061\u0074\u0020\u0061\u0020\u0074\u0069\u006d\u0065\u002e");
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.length &&
          ((__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c =
            await __fac5552d8ca9e8594b4ade43fe88eed003bb5afad2fda9d44bc9fca79f780be0(
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc[0].dataUrl ||
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc[0].image_url
                  ?.url,
            )),
          __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797.trim() ||
            (__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 =
              "\u0047\u0065\u006e\u0065\u0072\u0061\u0074\u0065\u0064\u0020\u0069\u006d\u0061\u0067\u0065\u002e"),
          await __39053f711d861234a1caa9142d12d9d933153846f62df2e5ffb2f8e72a90586e(
            __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d,
            __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c,
          ));
      } else if (
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.headers
          .get("\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0074\u0079\u0070\u0065")
          ?.includes("\u0074\u0065\u0078\u0074\u002f\u0065\u0076\u0065\u006e\u0074\u002d\u0073\u0074\u0072\u0065\u0061\u006d")
      ) {
        if (!__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.body)
          throw new Error("\u0054\u0068\u0065\u0020\u0073\u0065\u006c\u0065\u0063\u0074\u0065\u0064\u0020\u006d\u006f\u0064\u0065\u006c\u0020\u0064\u0069\u0064\u0020\u006e\u006f\u0074\u0020\u0072\u0065\u0074\u0075\u0072\u006e\u0020\u0061\u0020\u0073\u0074\u0072\u0065\u0061\u006d\u002e");
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.body.getReader(),
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = new TextDecoder();
        let __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = "",
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = "";
        const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ) => {
          if (
            !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.startsWith("\u0064\u0061\u0074\u0061\u003a")
          )
            return;
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.slice(5).trim();
          if (
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
            "\u005b\u0044\u004f\u004e\u0045\u005d" !== __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          )
            try {
              const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = JSON.parse(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              );
              if (
                ("\u0073\u0074\u0072\u0069\u006e\u0067" ==
                  typeof __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.model &&
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.model.trim() &&
                  __18f8fb636678dab7c1507d1eceede43f8941d0b13b53291425ec16d10b9d1da9(
                    __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d,
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.model,
                  ),
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.error)
              )
                return void (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                  String(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.error
                      .message ||
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.error,
                  ));
              __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba =
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.choices?.[0]
                  ?.finish_reason ||
                __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba;
              const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = Number(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.nyx_usage
                  ?.completion_tokens ??
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.usage
                    ?.completion_tokens,
              );
              if (
                (Number.isFinite(
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                ) &&
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c > 0 &&
                  (__e3c7b38e84c27c3e546e6e603229d78351eaa60fabff2a12958e3b3f35427d4e =
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.nyx_metadata)
              ) {
                const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                  __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d._nyxMetadata || {
                    sources: [],
                    summary: "",
                  };
                ((__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d._nyxMetadata =
                  __cb8b8efc63a2032db603714e09f48ef8a26c9f49dd507ca099a34d527c65199b({
                    sources: [
                      ...__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.sources,
                      ...(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                        .nyx_metadata.sources || []),
                    ],
                    summary:
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.summary +
                      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                        .nyx_metadata.summary || ""),
                  })),
                  __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43 ||
                    (__eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43 =
                      requestAnimationFrame(
                        __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b,
                      )));
              }
              const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.choices?.[0]
                  ?.delta?.content ||
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.choices?.[0]
                  ?.text ||
                "";
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 &&
                (null === __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b &&
                  (__0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b =
                    performance.now() -
                    __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed),
                (__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 =
                  !0 ===
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.nyx_replace
                    ? String(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713)
                    : __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 +
                      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713),
                __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43 ||
                  (__eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43 =
                    requestAnimationFrame(
                      __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b,
                    )));
            } catch {}
        };
        for (;;) {
          const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
            await __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.read();
          if (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.done) break;
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c +=
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.decode(
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.value,
              {
                stream: !0,
              },
            );
          const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.split(/\r?\n/);
          ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.pop() || ""),
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.forEach(
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
            ));
        }
        if (
          ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c +=
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.decode()),
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
            .split(/\r?\n/)
            .forEach(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713),
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03)
        )
          throw new Error(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03);
        __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43 &&
          (cancelAnimationFrame(__eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43),
          __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b());
      } else {
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
          await __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.json();
        if (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.error)
          throw new Error(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.error.message ||
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.error,
          );
        ((__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.text ||
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.choices?.[0]?.message
            ?.content ||
          ""),
          (__51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.finishReason ||
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.choices?.[0]
              ?.finish_reason ||
            null),
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.model &&
            __18f8fb636678dab7c1507d1eceede43f8941d0b13b53291425ec16d10b9d1da9(
              __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d,
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.model,
            ),
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.metadata &&
            (__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d._nyxMetadata =
              __cb8b8efc63a2032db603714e09f48ef8a26c9f49dd507ca099a34d527c65199b(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.metadata,
              )));
      }
      __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 &&
        null === __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b &&
        (__0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b =
          performance.now() - __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed);
      const __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 =
          __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797.trim(),
        __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34 =
          __9f64789489e405e4c60c11d80fd3e2816edb4d9bb0f9b104df0f74207b08a725(
            __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239,
          ).answer.trim();
      if (!__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34)
        throw new Error(
          "\u0054\u0068\u0069\u0073\u0020\u006d\u006f\u0064\u0065\u006c\u0020\u0064\u0069\u0064\u0020\u006e\u006f\u0074\u0020\u0070\u0072\u006f\u0064\u0075\u0063\u0065\u0020\u0061\u0020\u0066\u0069\u006e\u0061\u006c\u0020\u0061\u006e\u0073\u0077\u0065\u0072\u002e\u0020\u0054\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006e\u0020\u006f\u0072\u0020\u0063\u0068\u006f\u006f\u0073\u0065\u0020\u0061\u006e\u006f\u0074\u0068\u0065\u0072\u0020\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u006d\u006f\u0064\u0065\u006c\u002e",
        );
      (__1f32b7fb5dc1c965c36b1e4cd28ce2ac5ea9404b97612e636e1ae9c97d06f54e(
        __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d,
        __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239,
      ),
        "\u006c\u0065\u006e\u0067\u0074\u0068" === __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba &&
          __aba0927ff5f8a81d97a1a7ed24c9fe11716ada7113e9e0505ccd8cfa497c5057(
            __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d,
          ),
        __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.push({
          role: "\u0061\u0073\u0073\u0069\u0073\u0074\u0061\u006e\u0074",
          content: __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34,
          finishReason: __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba,
          modelId: __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d._modelId,
          modelName: __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d._modelName,
          metadata: __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d._nyxMetadata,
          timing: __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb(),
          ...(__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c
            ? {
                imageId: __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c,
              }
            : {}),
          ...(__26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82
            ? {
                mediaJobId: __26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82,
              }
            : {}),
        }),
        __f5a98170663d5cceb3a16cb9c8d715eb4066220f710277ffeebe6d9e51edff77(
          __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a,
        ),
        (function (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ) {
          const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = (function () {
            try {
              const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = JSON.parse(
                localStorage.getItem(
                  __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                ) || "\u005b\u005d",
              );
              return Array.isArray(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              )
                ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                    .filter(
                      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                        Number.isFinite(
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.at,
                        ) &&
                        Number.isFinite(
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.tokens,
                        ) &&
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.tokens >
                          0,
                    )
                    .slice(-1e3)
                : [];
            } catch {
              return [];
            }
          })();
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.push({
            at: Date.now(),
            tokens: Math.max(
              1,
              Math.ceil(
                (String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || "")
                  .length +
                  String(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 || "")
                    .length) /
                  4,
              ),
            ),
          });
          try {
            localStorage.setItem(
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
              JSON.stringify(
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.slice(-1e3),
              ),
            );
          } catch {}
        })(
          __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
          __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34,
        ),
        (__8d22331976a8113666a0908c81e73aa73428cab2801e9b29ace9b37721493fda = !0));
    } catch (__5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7) {
      if ("\u0041\u0062\u006f\u0072\u0074\u0045\u0072\u0072\u006f\u0072" === __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7?.name)
        return;
      (__1f32b7fb5dc1c965c36b1e4cd28ce2ac5ea9404b97612e636e1ae9c97d06f54e(
        __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d,
        __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7?.message ||
          "\u004e\u0037\u0058\u0020\u0041\u0049\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0063\u006f\u006d\u0070\u006c\u0065\u0074\u0065\u0020\u0074\u0068\u0061\u0074\u0020\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u002e",
        {
          error: !0,
        },
      ),
        __ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d ||
          __142365502a8b87ca1ebd149d88da5a5fda8ed864077446cb4ab7418934dc7e2d());
    } finally {
      (clearInterval(__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87),
        __a424c97aa3f9ffe3ab859a6c369fdfe37e17c68d6a58ea4d01134a34a8daab2c(
          __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d,
          __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb(),
        ),
        __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43 &&
          cancelAnimationFrame(__eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43),
        (__66e401afb5509cbf5c4bb5624e18bcf319933c46cb9b07bc6c7f86affaa05b78 = null),
        __553fd208cfae8e08e0267b27d02381364da70f59e03ddce0ac47ae09e5b5c29a(!1),
        __8d22331976a8113666a0908c81e73aa73428cab2801e9b29ace9b37721493fda &&
          __33fc4fa3fc7e5e999d7d45936b017e261c484a8603d0551b846aeb5b1b7cb9c0(),
        __7afa888e62ebfbac2e6002ec2d80426c0fd84774cdd464eebc432bfd97f1d538 &&
          (__98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13.textContent =
            "\u0041\u0020\u0066\u0072\u0065\u0073\u0068\u0020\u0066\u0072\u0061\u006d\u0065\u0020\u0069\u0073\u0020\u0061\u0074\u0074\u0061\u0063\u0068\u0065\u0064\u0020\u006f\u006e\u006c\u0079\u0020\u0077\u0068\u0065\u006e\u0020\u0079\u006f\u0075\u0020\u0073\u0065\u006e\u0064\u002e"),
        __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.focus(),
        __4e619f930cea09160a9023fa534442b7af20e49e7fddadb6d6b4dadacce066b3(),
        __342b0ab9499804405c03233753667f1eb72349e426fecd4a9fb2da0673b0d0c4());
    }
    var __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6;
  }
  (matchMedia("\u0028\u0070\u0072\u0065\u0066\u0065\u0072\u0073\u002d\u0072\u0065\u0064\u0075\u0063\u0065\u0064\u002d\u006d\u006f\u0074\u0069\u006f\u006e\u003a\u0020\u0072\u0065\u0064\u0075\u0063\u0065\u0029").addEventListener(
    "\u0063\u0068\u0061\u006e\u0067\u0065",
    __8639992de1355551a5798b911cea744edc2514fdc5cf78ffe9c0cd13fc292aba,
  ),
    __873b86a00f690ff2f7422c1a8cd3a4eb9b66caaebb072c9bdd29b047f36257ec(),
    addEventListener(
      "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.origin ===
          location.origin &&
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.source === parent &&
            "\u006e\u0079\u0078\u003a\u0074\u0068\u0065\u006d\u0065\u002d\u0073\u0079\u006e\u0063" ===
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data?.type &&
            __873b86a00f690ff2f7422c1a8cd3a4eb9b66caaebb072c9bdd29b047f36257ec(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data.theme,
            ),
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.source === parent &&
            "\u006e\u0079\u0078\u003a\u0061\u0069\u002d\u0070\u0072\u006f\u0066\u0069\u006c\u0065" ===
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data?.type &&
            (__3753e88ff350392a4cfe9913f5634655772496a4eae9ec667abbcc572af9e053(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data.profile || {},
            ),
            __342b0ab9499804405c03233753667f1eb72349e426fecd4a9fb2da0673b0d0c4()));
      },
    ),
    addEventListener("\u0066\u006f\u0063\u0075\u0073", () => {
      (__b1d9d225243cc6b2bb3f35046efd5be2eac49665156078377b5f872bf15b5487(),
        __342b0ab9499804405c03233753667f1eb72349e426fecd4a9fb2da0673b0d0c4());
    }),
    document.addEventListener("\u0076\u0069\u0073\u0069\u0062\u0069\u006c\u0069\u0074\u0079\u0063\u0068\u0061\u006e\u0067\u0065", () => {
      document.hidden || __342b0ab9499804405c03233753667f1eb72349e426fecd4a9fb2da0673b0d0c4();
    }),
    __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.addEventListener(
      "\u0063\u0068\u0061\u006e\u0067\u0065",
      () => {
        __342b0ab9499804405c03233753667f1eb72349e426fecd4a9fb2da0673b0d0c4();
      },
    ),
    addEventListener(
      "\u0073\u0074\u006f\u0072\u0061\u0067\u0065",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        (["\u006e\u0079\u0078\u002e\u0074\u0068\u0065\u006d\u0065", "\u006e\u0079\u0078\u002e\u0063\u0075\u0073\u0074\u006f\u006d\u0054\u0068\u0065\u006d\u0065\u0043\u006f\u006c\u006f\u0072"].includes(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key,
        ) && __873b86a00f690ff2f7422c1a8cd3a4eb9b66caaebb072c9bdd29b047f36257ec(),
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key ===
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
            ((__8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433 =
              __1aa3654021979ecd779da91bacb5a805cd2e1bd3bb684bceaac1a7abfea72ee5()),
            __93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb &&
              !__8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433.some(
                (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id ===
                  __93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb,
              ) &&
              (__93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb = ""),
            __9df5fc35fdff065d38d3f5e096268bdcee1c00ca0aba340ab7672fb8557be277(),
            __f1a3ca812160fc80a7a4757479307b5c1a9f2d4aacc8aed8c176f98fd068a168()),
          "\u006e\u0079\u0078\u002e\u0075\u0073\u0065\u0072\u004e\u0061\u006d\u0065" ===
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key &&
            __b1d9d225243cc6b2bb3f35046efd5be2eac49665156078377b5f872bf15b5487());
      },
    ),
    __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.addEventListener(
      "\u0073\u0063\u0072\u006f\u006c\u006c",
      () => {
        __386438b87474d2f2a7f9bcafb4095c3f466d499afdc8b7dc19046a9c96d5b10e =
          __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.scrollHeight -
            __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.scrollTop -
            __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.clientHeight <
          100;
      },
      {
        passive: !0,
      },
    ),
    __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      async (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
            "\u005b\u0064\u0061\u0074\u0061\u002d\u0070\u0072\u006f\u006d\u0070\u0074\u005d",
          );
        if (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)
          return (
            (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.value =
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dataset.prompt ||
              ""),
            __c00319a2b6f50c7d31e0932e1f4e94b86c7ddb4b8219f796ed3931cd30a86bfd(),
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.focus(),
            void __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.requestSubmit()
          );
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
            "\u005b\u0064\u0061\u0074\u0061\u002d\u0064\u006f\u0077\u006e\u006c\u006f\u0061\u0064\u002d\u0074\u0065\u0078\u0074\u002d\u0061\u0074\u0074\u0061\u0063\u0068\u006d\u0065\u006e\u0074\u005d",
          );
        if (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)
          return void (function (
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          ) {
            const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              __5ea342d1cfd9f6ec81afd2a89f838fcf564e58109239eebedf1a0061880697ca(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              );
            if (!__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) return;
            const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                URL.createObjectURL(
                  new Blob(
                    [__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.content],
                    {
                      type: "\u0074\u0065\u0078\u0074\u002f\u0070\u006c\u0061\u0069\u006e\u003b\u0063\u0068\u0061\u0072\u0073\u0065\u0074\u003d\u0075\u0074\u0066\u002d\u0038",
                    },
                  ),
                ),
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                document.createElement("\u0061");
            ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.href =
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
              (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.download =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.name),
              document.body.appendChild(
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
              ),
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.click(),
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.remove(),
              setTimeout(
                () =>
                  URL.revokeObjectURL(
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                  ),
                1e3,
              ));
          })(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c._nyxTextAttachment);
        const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
            "\u005b\u0064\u0061\u0074\u0061\u002d\u0063\u006f\u0070\u0079\u002d\u0063\u006f\u0064\u0065\u005d",
          );
        if (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03)
          return (
            await __64de0c65bc46a47c8a38d93319c824365ea2dd8a9c5ebb1a0cc03a9bb91d6cfd(
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
                .closest("\u002e\u0061\u0069\u002d\u0063\u006f\u0064\u0065\u002d\u0062\u006c\u006f\u0063\u006b")
                ?.querySelector("\u0070\u0072\u0065\u0020\u0063\u006f\u0064\u0065")?.textContent || "",
            ),
            void __2964229471f9cdad224a2dc7855414d522fc9f789d8af69d8ea72c09957ea2c1(
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
            )
          );
        const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
            "\u005b\u0064\u0061\u0074\u0061\u002d\u0063\u006f\u0070\u0079\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u005d",
          );
        if (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713) {
          const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.closest(
              "\u002e\u0061\u0069\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
            );
          (await __64de0c65bc46a47c8a38d93319c824365ea2dd8a9c5ebb1a0cc03a9bb91d6cfd(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?._nyxMessageText ||
              "",
          ),
            __2964229471f9cdad224a2dc7855414d522fc9f789d8af69d8ea72c09957ea2c1(
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
            ));
        }
      },
    ),
    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.addEventListener(
      "\u0073\u0075\u0062\u006d\u0069\u0074",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
          __a88f75c7fa7b50d8cbfce5e4e5c1d41dd7fbe28bd80bbd6c52a217a65fd6345a());
      },
    ),
    __ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      () => __ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90.click(),
    ),
    __ee07b2c1f5ae5a68cf1a38fc099e028ffbe3e7bdd9c0223fa1ec952465f7acbf.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      () => {
        !(async function () {
          if (navigator.mediaDevices?.getDisplayMedia) {
            (__658e800664ce4b8e4f05529203158b8b93cb3e61267733d16b020977659f1a6a(),
              __33fc4fa3fc7e5e999d7d45936b017e261c484a8603d0551b846aeb5b1b7cb9c0());
            try {
              const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                  await navigator.mediaDevices.getDisplayMedia({
                    video: {
                      frameRate: {
                        ideal: 5,
                        max: 10,
                      },
                    },
                    audio: !1,
                  }),
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getVideoTracks()[0];
              if (!__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)
                throw new Error("\u004e\u006f\u0020\u0073\u0063\u0072\u0065\u0065\u006e\u0020\u0077\u0061\u0073\u0020\u0073\u0065\u006c\u0065\u0063\u0074\u0065\u0064\u002e");
              ((__7afa888e62ebfbac2e6002ec2d80426c0fd84774cdd464eebc432bfd97f1d538 =
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.addEventListener(
                  "\u0065\u006e\u0064\u0065\u0064",
                  __658e800664ce4b8e4f05529203158b8b93cb3e61267733d16b020977659f1a6a,
                  {
                    once: !0,
                  },
                ),
                (__a27fb158ddcbc635df4f915211d5c8e5d6a8c04827fe1281526c34bc41e8fb8b.srcObject =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
                (__96269fbafcaf1e59a066bbe22f9ec441fbf0ff3e38084b904ada564b445561a8.hidden = !1),
                __ee07b2c1f5ae5a68cf1a38fc099e028ffbe3e7bdd9c0223fa1ec952465f7acbf.classList.add(
                  "\u0068\u0061\u0073\u002d\u0061\u0074\u0074\u0061\u0063\u0068\u006d\u0065\u006e\u0074",
                ),
                __ee07b2c1f5ae5a68cf1a38fc099e028ffbe3e7bdd9c0223fa1ec952465f7acbf.setAttribute(
                  "\u0061\u0072\u0069\u0061\u002d\u0070\u0072\u0065\u0073\u0073\u0065\u0064",
                  "\u0074\u0072\u0075\u0065",
                ),
                (__98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13.textContent =
                  "\u0041\u0020\u0066\u0072\u0065\u0073\u0068\u0020\u0066\u0072\u0061\u006d\u0065\u0020\u0069\u0073\u0020\u0061\u0074\u0074\u0061\u0063\u0068\u0065\u0064\u0020\u006f\u006e\u006c\u0079\u0020\u0077\u0068\u0065\u006e\u0020\u0079\u006f\u0075\u0020\u0073\u0065\u006e\u0064\u002e"),
                await __a27fb158ddcbc635df4f915211d5c8e5d6a8c04827fe1281526c34bc41e8fb8b
                  .play()
                  .catch(() => {}),
                __7afa888e62ebfbac2e6002ec2d80426c0fd84774cdd464eebc432bfd97f1d538 ===
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
                  __f18d6fef436eab40ad4f09805d365642f87fb386cbbc1cbe7c04719beb4b8ebf.start());
            } catch (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
              (__658e800664ce4b8e4f05529203158b8b93cb3e61267733d16b020977659f1a6a(),
                "\u004e\u006f\u0074\u0041\u006c\u006c\u006f\u0077\u0065\u0064\u0045\u0072\u0072\u006f\u0072" !==
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.name &&
                  __528574a814f4c0082dd87aed0646ab3dca3c963ad65971edfb94b06f72fee8fe(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.message ||
                      "\u004e\u0037\u0058\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0073\u0074\u0061\u0072\u0074\u0020\u0073\u0063\u0072\u0065\u0065\u006e\u0020\u0073\u0068\u0061\u0072\u0069\u006e\u0067\u002e",
                    "\u0053\u0063\u0072\u0065\u0065\u006e\u0020\u0073\u0068\u0061\u0072\u0069\u006e\u0067\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065",
                  ));
            }
          } else
            __528574a814f4c0082dd87aed0646ab3dca3c963ad65971edfb94b06f72fee8fe(
              "\u0053\u0063\u0072\u0065\u0065\u006e\u0020\u0073\u0068\u0061\u0072\u0069\u006e\u0067\u0020\u0069\u0073\u0020\u006e\u006f\u0074\u0020\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u0065\u0064\u0020\u0062\u0079\u0020\u0074\u0068\u0069\u0073\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u002e",
              "\u0053\u0063\u0072\u0065\u0065\u006e\u0020\u0073\u0068\u0061\u0072\u0069\u006e\u0067\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065",
            );
        })();
      },
    ),
    __34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      () => {
        (__658e800664ce4b8e4f05529203158b8b93cb3e61267733d16b020977659f1a6a(),
          __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.focus());
      },
    ),
    __ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90.addEventListener(
      "\u0063\u0068\u0061\u006e\u0067\u0065",
      () => {
        __8a74b6aa2723fd3cb24f9ae3a4b71198fac8beba0ce313f31ab37ec9b0df1397(
          __ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90.files?.[0],
        );
      },
    ),
    __d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      () => {
        (__33fc4fa3fc7e5e999d7d45936b017e261c484a8603d0551b846aeb5b1b7cb9c0(),
          __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.focus());
      },
    ),
    __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.addEventListener(
      "\u0070\u0061\u0073\u0074\u0065",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = [
          ...(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.clipboardData
            ?.files || []),
        ].find((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
          String(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.type || "",
          ).startsWith("\u0069\u006d\u0061\u0067\u0065\u002f"),
        );
        if (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)
          return void __8a74b6aa2723fd3cb24f9ae3a4b71198fac8beba0ce313f31ab37ec9b0df1397(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          );
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = String(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.clipboardData?.getData(
              "\u0074\u0065\u0078\u0074\u002f\u0070\u006c\u0061\u0069\u006e",
            ) || "",
          ),
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = Math.max(
            0,
            (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.selectionEnd || 0) -
              (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.selectionStart ||
                0),
          ),
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.value.length -
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 +
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.length;
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 >
            Number(
              __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.maxLength || 4e3,
            ) &&
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
          (function (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
            const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = String(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || "",
            );
            if (!__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) return null;
            if (
              (__658e800664ce4b8e4f05529203158b8b93cb3e61267733d16b020977659f1a6a(),
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length >
                __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239)
            )
              return (
                __528574a814f4c0082dd87aed0646ab3dca3c963ad65971edfb94b06f72fee8fe(
                  `Pasted text is limited to ${__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239.toLocaleString()} characters.`,
                  "\u0054\u0065\u0078\u0074\u0020\u0066\u0069\u006c\u0065\u0020\u006e\u006f\u0074\u0020\u0061\u0074\u0074\u0061\u0063\u0068\u0065\u0064",
                ),
                null
              );
            const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
              __5ea342d1cfd9f6ec81afd2a89f838fcf564e58109239eebedf1a0061880697ca({
                name: __b8bd8b401b63f97c694f0a15349b9dd559cbad8c78080a8f4efc6ca4a6307763(),
                content: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              });
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
              ((__ba14105c51bb0f53ea6c93b0e81a448b1f1c675a13c2b275c94ab1333860fa3c = null),
              (__00608ea01db0bfd231b71dae9747f95df1bb6ae442fb96e53df2e709c0f4f7b4 =
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
              (__ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90.value = ""),
              (__75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5.hidden = !1),
              __75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5.classList.remove(
                "\u0069\u0073\u002d\u0065\u0072\u0072\u006f\u0072",
                "\u0069\u0073\u002d\u0066\u0069\u006c\u0065\u002d\u0065\u0072\u0072\u006f\u0072",
              ),
              __75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5.classList.add(
                "\u0069\u0073\u002d\u0074\u0065\u0078\u0074\u002d\u0066\u0069\u006c\u0065",
              ),
              (__037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec.hidden = !0),
              __037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec.removeAttribute(
                "\u0073\u0072\u0063",
              ),
              (__5285a5bbd045fe6fc6ebb94cc24c149a1dcccd7cfeb2f5de9c7a211dad268afa.textContent =
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.name),
              __c7d123844d6f7dae6fe9f3567270687f63cb66ecf524f57495619264bfe3a494(
                `${__fb84bf8140a5427bba17b38530ab10ca45ff2841d371e10707768f90f05c22f8(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.size)} \xb7 Ready to send`,
              ),
              __ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417.classList.remove(
                "\u0068\u0061\u0073\u002d\u0061\u0074\u0074\u0061\u0063\u0068\u006d\u0065\u006e\u0074",
              ),
              __ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417.setAttribute(
                "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
                "\u0041\u0074\u0074\u0061\u0063\u0068\u0020\u0061\u006e\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0028\u0072\u0065\u0070\u006c\u0061\u0063\u0065\u0073\u0020\u0074\u0068\u0065\u0020\u0074\u0065\u0078\u0074\u0020\u0066\u0069\u006c\u0065\u0029",
              ),
              (__d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c.title =
                "\u0052\u0065\u006d\u006f\u0076\u0065\u0020\u0074\u0065\u0078\u0074\u0020\u0066\u0069\u006c\u0065"),
              __d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c.setAttribute(
                "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
                "\u0052\u0065\u006d\u006f\u0076\u0065\u0020\u0061\u0074\u0074\u0061\u0063\u0068\u0065\u0064\u0020\u0074\u0065\u0078\u0074\u0020\u0066\u0069\u006c\u0065",
              ));
          })(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
          __c00319a2b6f50c7d31e0932e1f4e94b86c7ddb4b8219f796ed3931cd30a86bfd());
      },
    ),
    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.addEventListener(
      "\u0064\u0072\u0061\u0067\u0065\u006e\u0074\u0065\u0072",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        [
          ...(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataTransfer
            ?.items || []),
        ].some(
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
            "\u0066\u0069\u006c\u0065" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.kind,
        ) &&
          __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.classList.add(
            "\u0069\u0073\u002d\u0064\u0072\u0061\u0067\u0067\u0069\u006e\u0067",
          );
      },
    ),
    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.addEventListener(
      "\u0064\u0072\u0061\u0067\u006f\u0076\u0065\u0072",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        [
          ...(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataTransfer
            ?.items || []),
        ].some(
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
            "\u0066\u0069\u006c\u0065" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.kind,
        ) && __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault();
      },
    ),
    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.addEventListener(
      "\u0064\u0072\u0061\u0067\u006c\u0065\u0061\u0076\u0065",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.contains(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.relatedTarget,
        ) ||
          __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.classList.remove(
            "\u0069\u0073\u002d\u0064\u0072\u0061\u0067\u0067\u0069\u006e\u0067",
          );
      },
    ),
    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.addEventListener(
      "\u0064\u0072\u006f\u0070",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.classList.remove(
          "\u0069\u0073\u002d\u0064\u0072\u0061\u0067\u0067\u0069\u006e\u0067",
        );
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = [
          ...(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataTransfer
            ?.files || []),
        ][0];
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
          __8a74b6aa2723fd3cb24f9ae3a4b71198fac8beba0ce313f31ab37ec9b0df1397(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          ));
      },
    ),
    __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.addEventListener(
      "\u0069\u006e\u0070\u0075\u0074",
      __c00319a2b6f50c7d31e0932e1f4e94b86c7ddb4b8219f796ed3931cd30a86bfd,
    ),
    __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.addEventListener(
      "\u006b\u0065\u0079\u0064\u006f\u0077\u006e",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        "\u0045\u006e\u0074\u0065\u0072" !== __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key ||
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.shiftKey ||
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.ctrlKey ||
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.altKey ||
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.metaKey ||
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.isComposing ||
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
          __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.requestSubmit());
      },
    ),
    __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      () => {
        __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb.hidden
          ? __14523a1fce54995bb65e94645657fb2a334057f659a26d358537410f6e057771()
          : __e1984352a6dcc4b50a23d02e441699ffc0632cda96e3fba63e920dc9e61dc2c8();
      },
    ),
    __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b.addEventListener(
      "\u006b\u0065\u0079\u0064\u006f\u0077\u006e",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        "\u0041\u0072\u0072\u006f\u0077\u0044\u006f\u0077\u006e" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key ||
        "\u0041\u0072\u0072\u006f\u0077\u0055\u0070" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key
          ? (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
            __14523a1fce54995bb65e94645657fb2a334057f659a26d358537410f6e057771(
              "\u0041\u0072\u0072\u006f\u0077\u0044\u006f\u0077\u006e" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key
                ? 1
                : -1,
            ))
          : "\u0045\u0073\u0063\u0061\u0070\u0065" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key &&
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
            __e1984352a6dcc4b50a23d02e441699ffc0632cda96e3fba63e920dc9e61dc2c8());
      },
    ),
    document.getElementById("\u006d\u006f\u0064\u0065\u006c\u004d\u0065\u006e\u0075\u0043\u006c\u006f\u0073\u0065").addEventListener("\u0063\u006c\u0069\u0063\u006b", () =>
      __e1984352a6dcc4b50a23d02e441699ffc0632cda96e3fba63e920dc9e61dc2c8({
        restoreFocus: !0,
      }),
    ),
    __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb.addEventListener(
      "\u0063\u0061\u006e\u0063\u0065\u006c",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
          __e1984352a6dcc4b50a23d02e441699ffc0632cda96e3fba63e920dc9e61dc2c8({
            restoreFocus: !0,
          }));
      },
    ),
    __4626e4f5b629c2aebb6e5d0d4c0ab1d46a841da37f5223953547384d74f002ad.addEventListener(
      "\u0069\u006e\u0070\u0075\u0074",
      () => {
        ((__a3ef2414e5699bd228492a44d46edafcdc62d2500be0374994517128c6588ee9 = ""),
          __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb
            .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u006d\u006f\u0064\u0065\u006c\u002d\u0063\u006f\u006d\u0070\u0061\u006e\u0079\u005d")
            .forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.setAttribute(
                "\u0061\u0072\u0069\u0061\u002d\u0070\u0072\u0065\u0073\u0073\u0065\u0064",
                String(
                  "" ===
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset
                      .modelCompany,
                ),
              ),
            ),
          __87fe42c31137b8265e912162aa89c36f00446fbabc485306cf95857dc03b51f1());
      },
    ),
    __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
            "\u005b\u0064\u0061\u0074\u0061\u002d\u006d\u006f\u0064\u0065\u006c\u002d\u0063\u006f\u006d\u0070\u0061\u006e\u0079\u005d",
          );
        if (!__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) return;
        ((__a3ef2414e5699bd228492a44d46edafcdc62d2500be0374994517128c6588ee9 =
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dataset.modelCompany),
          (__4626e4f5b629c2aebb6e5d0d4c0ab1d46a841da37f5223953547384d74f002ad.value = ""),
          __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb
            .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u006d\u006f\u0064\u0065\u006c\u002d\u0063\u006f\u006d\u0070\u0061\u006e\u0079\u005d")
            .forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.setAttribute(
                "\u0061\u0072\u0069\u0061\u002d\u0070\u0072\u0065\u0073\u0073\u0065\u0064",
                String(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset
                    .modelCompany ===
                    __a3ef2414e5699bd228492a44d46edafcdc62d2500be0374994517128c6588ee9,
                ),
              ),
            ),
          __8639992de1355551a5798b911cea744edc2514fdc5cf78ffe9c0cd13fc292aba(),
          __87fe42c31137b8265e912162aa89c36f00446fbabc485306cf95857dc03b51f1());
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.closest(
            "\u002e\u0061\u0069\u002d\u0063\u006f\u006d\u0070\u0061\u006e\u0079\u002d\u0072\u0061\u0069\u006c",
          );
        (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c._continueOnHover =
            !0),
          __4626e4f5b629c2aebb6e5d0d4c0ab1d46a841da37f5223953547384d74f002ad.focus({
            preventScroll: !0,
          }));
      },
    ),
    __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
            "\u005b\u0064\u0061\u0074\u0061\u002d\u006d\u006f\u0064\u0065\u006c\u002d\u0069\u0064\u005d",
          );
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
          __5dffeb04c3ec35650b50c61e66d423d97ae279a1b87d78d4a82aa57b8574b858(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dataset.modelId ||
              "",
          );
      },
    ),
    __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb.addEventListener(
      "\u006b\u0065\u0079\u0064\u006f\u0077\u006e",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
            "\u005b\u0064\u0061\u0074\u0061\u002d\u006d\u006f\u0064\u0065\u006c\u002d\u0069\u0064\u005d",
          );
        if (
          !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
          "\u0041\u0072\u0072\u006f\u0077\u0044\u006f\u0077\u006e" !== __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key &&
          "\u0045\u0073\u0063\u0061\u0070\u0065" !== __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key
        )
          return;
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
            __b150088b0a7ba298f2477bcc26bd2516ea5284929456fa00e37593ae57060383(),
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = Math.max(
            0,
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.indexOf(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            ),
          );
        let __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = -1;
        if ("\u0041\u0072\u0072\u006f\u0077\u0044\u006f\u0077\u006e" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key)
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
              ? Math.min(
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.length - 1,
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 + 1,
                )
              : 0;
        else if (
          "\u0041\u0072\u0072\u006f\u0077\u0055\u0070" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key
        )
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = Math.max(
            0,
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 - 1,
          );
        else if ("\u0048\u006f\u006d\u0065" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key)
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = 0;
        else if ("\u0045\u006e\u0064" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key)
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.length - 1;
        else {
          if (
            "\u0045\u006e\u0074\u0065\u0072" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key ||
            "\u0020" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key
          )
            return (
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
              void (
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
                __5dffeb04c3ec35650b50c61e66d423d97ae279a1b87d78d4a82aa57b8574b858(
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dataset
                    .modelId || "",
                )
              )
            );
          if ("\u0045\u0073\u0063\u0061\u0070\u0065" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key)
            return (
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.stopPropagation(),
              void __e1984352a6dcc4b50a23d02e441699ffc0632cda96e3fba63e920dc9e61dc2c8({
                restoreFocus: !0,
              })
            );
        }
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 >= 0 &&
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c[
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713
          ]?.focus(),
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c[
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713
          ]?.scrollIntoView({
            block: "\u006e\u0065\u0061\u0072\u0065\u0073\u0074",
          }));
      },
    ),
    document.addEventListener(
      "\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u0064\u006f\u0077\u006e",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        if (
          !__f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb.hidden &&
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target ===
            __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb
        ) {
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
            __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb.getBoundingClientRect();
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.clientX <
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.left ||
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.clientX >
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.right ||
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.clientY <
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.top ||
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.clientY >
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.bottom) &&
            __e1984352a6dcc4b50a23d02e441699ffc0632cda96e3fba63e920dc9e61dc2c8({
              restoreFocus: !0,
            });
        }
      },
    ),
    __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.addEventListener(
      "\u0063\u0068\u0061\u006e\u0067\u0065",
      () => {
        (localStorage.setItem(
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
          __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.value ||
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
        ),
          (__568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.title =
            __9035082f34e59b4e95e5cedfad27c135e107d9baedc5c5f35025bb7dd8d273ce(
              __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.value,
            )));
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
          __9aa51242f18b84964521804845518a53dcb10905e08f5bb15c44c748782f7ae4();
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
          ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.model =
            __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.value ||
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc),
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.updatedAt =
            Date.now()),
          __241882ebf750560aebf30117b44960a1287b15d2532ea995096e7cf0f2608575(),
          __9df5fc35fdff065d38d3f5e096268bdcee1c00ca0aba340ab7672fb8557be277()),
          __d3952da1913828f888ba529eb15c553c4fb53674bde66b891b6b796b152d2c3d());
      },
    ),
    __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      function () {
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
          __f3e544449444922495ce531668ccc68ed8651ebd7dd66e90ad5b3651bfdca0d8()
            .map(
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.imageId,
            )
            .filter(Boolean);
        for (const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 of __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)
          __259662ca3c6d31818950d16cdb4d6a741cf5409a367d0e1b56988004b7d0d6ec.delete(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          );
        if (
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.length &&
            __37e8ce9abe97de314046d2ca5959938599ed734a941539567c7fca16b4943890()
              .then((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
                const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.transaction(
                    "\u0069\u006d\u0061\u0067\u0065\u0073",
                    "\u0072\u0065\u0061\u0064\u0077\u0072\u0069\u0074\u0065",
                  );
                for (const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 of __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
                    .objectStore("\u0069\u006d\u0061\u0067\u0065\u0073")
                    .delete(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03);
                ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.oncomplete =
                  () => __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.close()),
                  (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onerror =
                    () =>
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.close()));
              })
              .catch(() => {}),
          __d20abde5627bd367bf319347744deb97dc8c68d73d6cd9dfbb7d87e7e7a9ab7f(),
          __658e800664ce4b8e4f05529203158b8b93cb3e61267733d16b020977659f1a6a(),
          __33fc4fa3fc7e5e999d7d45936b017e261c484a8603d0551b846aeb5b1b7cb9c0(),
          __0159afb719a78ed8c8a3938ee144c930b121f1fd74d588b30e9186af4a2f89d7)
        )
          __17637b72fc4733887b3a19c85d5d3c70864a8f76b0495e06a14055b0d0c65db6 = [];
        else if (__93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb) {
          ((__8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433 =
            __8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433.filter(
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id !==
                __93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb,
            )),
            (__93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb = ""));
          try {
            localStorage.removeItem(
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
            );
          } catch {}
          __241882ebf750560aebf30117b44960a1287b15d2532ea995096e7cf0f2608575();
        }
        (__6a415fc87620178d27b437cc0f4824caf47662a63117ba3cbdfcbcdc0240786f([]),
          __9df5fc35fdff065d38d3f5e096268bdcee1c00ca0aba340ab7672fb8557be277(),
          __f1a3ca812160fc80a7a4757479307b5c1a9f2d4aacc8aed8c176f98fd068a168(),
          (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.value = ""),
          __c00319a2b6f50c7d31e0932e1f4e94b86c7ddb4b8219f796ed3931cd30a86bfd(),
          __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.focus());
      },
    ),
    __fee7105fc4d51af0577a7b27c6ef4e0cf85c90de87e72e9d1a6579f318300a72.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      () => __35d101a55d7c96921069c824f54e70ddec94132127d41ddfcaa893442577a894(),
    ),
    __e89c06b9c8c138ab668108b5f84a303333ad66d3886346a0eb785642be515763.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      () =>
        __35d101a55d7c96921069c824f54e70ddec94132127d41ddfcaa893442577a894({
          temporary: !0,
        }),
    ),
    __b1beae86029a4f3a21d0d992ca0d2036eaaaae8e45994cac42b42d390c73e329.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
            "\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0068\u0072\u0065\u0061\u0064\u002d\u0069\u0064\u005d",
          );
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
          (function (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
            const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              __8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433.find(
                (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id ===
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              );
            if (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) {
              (__d20abde5627bd367bf319347744deb97dc8c68d73d6cd9dfbb7d87e7e7a9ab7f(),
                __33fc4fa3fc7e5e999d7d45936b017e261c484a8603d0551b846aeb5b1b7cb9c0(),
                (__0159afb719a78ed8c8a3938ee144c930b121f1fd74d588b30e9186af4a2f89d7 = !1),
                (__17637b72fc4733887b3a19c85d5d3c70864a8f76b0495e06a14055b0d0c65db6 = []),
                (__93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb =
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id));
              try {
                localStorage.setItem(
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                  __93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb,
                );
              } catch {}
              (__6a415fc87620178d27b437cc0f4824caf47662a63117ba3cbdfcbcdc0240786f(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.messages,
              ),
                __3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211.some(
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id ===
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.model,
                ) &&
                  ((__568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.value =
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.model),
                  localStorage.setItem(
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.model,
                  ),
                  __d3952da1913828f888ba529eb15c553c4fb53674bde66b891b6b796b152d2c3d()),
                __9df5fc35fdff065d38d3f5e096268bdcee1c00ca0aba340ab7672fb8557be277(),
                __f1a3ca812160fc80a7a4757479307b5c1a9f2d4aacc8aed8c176f98fd068a168(),
                __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.focus());
            }
          })(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dataset.threadId ||
              "",
          );
      },
    ),
    __b769cfef6d38d8b555019ba9dbf653f1b85fbdc3ec8f99db5a9368ed7a200661.addEventListener(
      "\u0069\u006e\u0070\u0075\u0074",
      __9df5fc35fdff065d38d3f5e096268bdcee1c00ca0aba340ab7672fb8557be277,
    ),
    __d2aab0836d3c8a8d85c1c08050ef020cbdd6d0e9d50ae0173328a5d5cd612701.forEach(
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          () => {
            (localStorage.setItem(
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset
                .responseDepth || "\u006e\u006f\u0072\u006d\u0061\u006c",
            ),
              __b66636d73568f95ee2630b81b72a615bf9765be1be3bf82a5a8cf7580ab56691());
          },
        ),
    ),
    __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      () =>
        __7441a9beb486dffedb80e293924081313fd873c8e8d79f20865af07f2719c736(
          !__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.classList.contains(
            "\u0069\u0073\u002d\u0073\u0069\u0064\u0065\u0062\u0061\u0072\u002d\u006f\u0070\u0065\u006e",
          ),
        ),
    ),
    __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      () => __7441a9beb486dffedb80e293924081313fd873c8e8d79f20865af07f2719c736(!1),
    ),
    __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      () => __7441a9beb486dffedb80e293924081313fd873c8e8d79f20865af07f2719c736(!1),
    ),
    __153775183a87af39b37d038f0f2d9a41fb6f191283bb242f26b279c138ab61ea.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      () => {
        (__b1d9d225243cc6b2bb3f35046efd5be2eac49665156078377b5f872bf15b5487(),
          parent !== window
            ? parent.postMessage(
                {
                  type: "\u006e\u0079\u0078\u003a\u0061\u0069\u002d\u006f\u0070\u0065\u006e\u002d\u0070\u0072\u006f\u0066\u0069\u006c\u0065",
                },
                location.origin,
              )
            : (location.href = "\u002f"));
      },
    ),
    __3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2.addEventListener(
      "\u0065\u0072\u0072\u006f\u0072",
      () => {
        ((__3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2.hidden = !0),
          (__cbe3e169b82a066efb87cecf43ee78a46c91fe23c1c18420de9d26beb1a60ea4.hidden = !1));
      },
    ),
    document.addEventListener(
      "\u006b\u0065\u0079\u0064\u006f\u0077\u006e",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        "\u0045\u0073\u0063\u0061\u0070\u0065" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key &&
          __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.classList.contains(
            "\u0069\u0073\u002d\u0073\u0069\u0064\u0065\u0062\u0061\u0072\u002d\u006f\u0070\u0065\u006e",
          ) &&
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
          __7441a9beb486dffedb80e293924081313fd873c8e8d79f20865af07f2719c736(!1),
          __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b.focus());
      },
    ),
    addEventListener(
      "\u0070\u0061\u0067\u0065\u0068\u0069\u0064\u0065",
      __658e800664ce4b8e4f05529203158b8b93cb3e61267733d16b020977659f1a6a,
    ),
    __7441a9beb486dffedb80e293924081313fd873c8e8d79f20865af07f2719c736(!0),
    (function () {
      if (
        ((__8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433 =
          __1aa3654021979ecd779da91bacb5a805cd2e1bd3bb684bceaac1a7abfea72ee5()),
        !__8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433.length)
      ) {
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = (function () {
          try {
            return __d4328b3c079cae4765d909537fb4faf59c803748f8b68cadb684080155074109(
              JSON.parse(
                localStorage.getItem(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ) || "\u005b\u005d",
              ),
            );
          } catch {
            return [];
          }
        })();
        if (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length) {
          const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = Date.now(),
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
              __ba28619db82731972dc33cb411fe98aee7e736ac5cbb9ed2073b2def2836bdac({
                id: `chat-${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.toString(36)}`,
                messages: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                model:
                  localStorage.getItem(
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                  ) || __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
                createdAt: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                updatedAt: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              });
          ((__8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433 = [
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          ]),
            (__93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb =
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id),
            __241882ebf750560aebf30117b44960a1287b15d2532ea995096e7cf0f2608575());
        }
      }
      if (!__93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb) {
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
          localStorage.getItem(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          ) || "";
        __93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb =
          __8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433.some(
            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id ===
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          )
            ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
            : __8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433[0]?.id || "";
      }
      if (__93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb) {
        try {
          localStorage.setItem(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
            __93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb,
          );
        } catch {}
        __6a415fc87620178d27b437cc0f4824caf47662a63117ba3cbdfcbcdc0240786f(
          __9aa51242f18b84964521804845518a53dcb10905e08f5bb15c44c748782f7ae4()?.messages || [],
        );
      }
    })(),
    __f43e4b6c1a12fe553cba11279b558dac704a6ad61274f79b1784f9fb7a468544(
      __3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211,
      __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.value ||
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
    ),
    __9df5fc35fdff065d38d3f5e096268bdcee1c00ca0aba340ab7672fb8557be277(),
    __f1a3ca812160fc80a7a4757479307b5c1a9f2d4aacc8aed8c176f98fd068a168(),
    __c00319a2b6f50c7d31e0932e1f4e94b86c7ddb4b8219f796ed3931cd30a86bfd(),
    __b66636d73568f95ee2630b81b72a615bf9765be1be3bf82a5a8cf7580ab56691(),
    __342b0ab9499804405c03233753667f1eb72349e426fecd4a9fb2da0673b0d0c4(),
    __b1d9d225243cc6b2bb3f35046efd5be2eac49665156078377b5f872bf15b5487(),
    (async () => {
      (await (async function () {
        try {
          const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = await fetch(
              "\u002f\u0061\u0070\u0069\u002f\u006e\u0079\u0078\u002d\u0061\u0069\u002f\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0073",
              {
                headers: await __fd19848ac69360eadd3ad8ebfb82354628baec31764b5277d32eb7b6f79b622c({
                  accept: "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
                }),
              },
            ),
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              await __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.json();
          if (!__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.ok)
            throw new Error(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.error ||
                "\u0053\u0068\u0061\u0072\u0065\u0064\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0073\u0020\u0061\u0072\u0065\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e",
            );
          __800b423fb67fba61b04a9759cd74b02c49005295eb1e7ac6ecbc5489a9b58a85 = Array.isArray(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.providers,
          )
            ? __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.providers.flatMap(
                (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
                  const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = String(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.id || "",
                  ).trim();
                  return (
                    String(
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.label ||
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                    ).trim(),
                    "\u0073\u0068\u0061\u0072\u0065\u0064" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                      ? [
                          {
                            id: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                            label: "\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072",
                          },
                        ]
                      : []
                  );
                },
              )
            : [];
        } catch {
          __800b423fb67fba61b04a9759cd74b02c49005295eb1e7ac6ecbc5489a9b58a85 = [];
        }
        __9424b58569d5ac344830f11e289b7923b433273ecad0b18a974a395a48c05a66();
      })(),
        await __142365502a8b87ca1ebd149d88da5a5fda8ed864077446cb4ab7418934dc7e2d());
    })(),
    __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.focus());
})();
