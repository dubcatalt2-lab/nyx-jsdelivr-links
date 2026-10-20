import { setupDeveloper as __93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb } from "\u002e\u002f\u0040\u0072\u0061\u0034\u0037\u0031\u0066\u0032\u0065\u0064\u0063\u0037\u0031\u0036\u0034\u0039\u0031\u0039\u0039\u0035\u0033\u0035\u0038\u0063\u0062\u0064\u0021\u002e\u006a\u0073\u003f\u0076\u003d\u0032\u0030\u0032\u0036\u0031\u0030\u0030\u0032\u002d\u0068\u0061\u0069\u006b\u0075\u002d\u0076\u0031";

import { readResponse as __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 } from "\u002e\u002f\u0040\u0072\u0033\u0030\u0065\u0035\u0062\u0037\u0035\u0035\u0061\u0038\u0039\u0034\u0032\u0037\u0037\u0037\u0063\u0064\u0064\u0066\u0063\u0030\u0065\u0066\u0021\u002e\u006a\u0073";

import { agentInstruction as __0159afb719a78ed8c8a3938ee144c930b121f1fd74d588b30e9186af4a2f89d7 } from "\u002e\u002f\u0040\u0072\u0065\u0038\u0035\u0035\u0064\u0039\u0061\u0062\u0062\u0039\u0063\u0066\u0036\u0038\u0031\u0036\u0063\u0031\u0032\u0061\u0061\u0032\u0037\u0066\u0021\u002e\u006a\u0073";

import { supportsConversationVoice as __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a } from "\u002e\u002f\u0040\u0072\u0065\u0062\u0066\u0036\u0065\u0062\u0030\u0035\u0035\u0061\u0038\u0066\u0034\u0035\u0065\u0064\u0063\u0038\u0061\u0065\u0032\u0031\u0065\u0036\u0021\u002e\u006a\u0073";

export function setupKeys({
  user: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  busy: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
  changed: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
  notice: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
  appName: __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = "\u004e\u006f\u006f\u006b",
}) {
  const __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = (
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) => document.getElementById(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96);
  let __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = "",
    __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = "",
    __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = 0,
    __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 = [],
    __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 = !1;
  const __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe =
      "\u004e\u006f\u006f\u006b" === __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
    __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a = () =>
      __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.startsWith("\u006e\u005f\u0061\u0070\u0069\u005f")
        ? "\u0061\u0063\u0063\u006f\u0075\u006e\u0074"
        : "\u006f\u0070\u0065\u006e\u0072\u006f\u0075\u0074\u0065\u0072";
  async function __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d(
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
  ) {
    const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
      await __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96()?.getIdToken();
    if (!__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a)
      throw Error("\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0066\u0069\u0072\u0073\u0074\u002e");
    return __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
      await fetch(
        (__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe
          ? "\u002f\u0061\u0070\u0069\u002f\u006e\u006f\u006f\u006b\u002d\u0064\u0065\u0076\u0065\u006c\u006f\u0070\u0065\u0072"
          : "\u002f\u0061\u0070\u0069\u002f\u0064\u0065\u0076\u0065\u006c\u006f\u0070\u0065\u0072") + __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        {
          method:
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 ||
            (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ? "\u0050\u004f\u0053\u0054" : "\u0047\u0045\u0054"),
          headers: {
            Authorization:
              "\u0042\u0065\u0061\u0072\u0065\u0072\u0020" + __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
            "\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065": "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
          },
          ...(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
            ? {
                body: JSON.stringify(
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                ),
              }
            : {}),
          cache: "\u006e\u006f\u002d\u0073\u0074\u006f\u0072\u0065",
        },
      ),
    );
  }
  const __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161 =
    __93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb({
      account: __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d,
      user: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      nook: __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
      secret: () => __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
      refresh: () => __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c(),
    });
  function __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34() {
    (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2("\u0061\u0070\u0069\u004b\u0065\u0079\u0073").setAttribute(
      "\u0061\u0072\u0069\u0061\u002d\u0070\u0072\u0065\u0073\u0073\u0065\u0064",
      String(!!__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238),
    ),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
        "\u006b\u0065\u0079\u0043\u006f\u006e\u006e\u0065\u0063\u0074\u0069\u006f\u006e",
      ).textContent = __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238
        ? "\u0061\u0063\u0063\u006f\u0075\u006e\u0074" === __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a()
          ? "\u0055\u0073\u0069\u006e\u0067\u0020\u0079\u006f\u0075\u0072\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0041\u0050\u0049\u0020\u006b\u0065\u0079"
          : "\u0055\u0073\u0069\u006e\u0067\u0020\u0079\u006f\u0075\u0072\u0020\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072\u0020\u006b\u0065\u0079"
        : "\u0055\u0073\u0069\u006e\u0067\u0020\u0073\u0068\u0061\u0072\u0065\u0064\u0020\u0061\u0063\u0063\u0065\u0073\u0073"));
  }
  function __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21() {
    ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2("\u0063\u0072\u0065\u0061\u0074\u0065\u0064\u004b\u0065\u0079").value = ""),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
        "\u0063\u0072\u0065\u0061\u0074\u0065\u0064\u004b\u0065\u0079\u0050\u0061\u006e\u0065\u006c",
      ).hidden = !0),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2("\u0070\u0065\u0072\u0073\u006f\u006e\u0061\u006c\u004b\u0065\u0079").value =
        ""));
  }
  async function __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c() {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
      __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239;
    try {
      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
        await __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d("\u002f\u006d\u0065");
      if (
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 !==
        __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239
      )
        return;
      ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
        "\u0063\u0072\u0065\u0061\u0074\u0065\u0041\u0063\u0063\u006f\u0075\u006e\u0074\u004b\u0065\u0079",
      ).disabled =
        !!__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.key ||
        !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.configured),
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
          "\u0072\u0065\u0076\u006f\u006b\u0065\u0041\u0063\u0063\u006f\u0075\u006e\u0074\u004b\u0065\u0079",
        ).hidden = !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.key),
        __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.update(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ),
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
          "\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u004b\u0065\u0079\u0053\u0074\u0061\u0074\u0075\u0073",
        ).textContent = __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.key
          ? "\u0041\u0063\u0074\u0069\u0076\u0065\u0020\u006b\u0065\u0079\u003a\u0020" +
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.key.prefix +
            "\u002e\u002e\u002e"
          : "\u004e\u006f\u0020\u0061\u0063\u0074\u0069\u0076\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0041\u0050\u0049\u0020\u006b\u0065\u0079\u002e"));
    } catch (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) {
      if (
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 !==
        __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239
      )
        return;
      ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
        "\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u004b\u0065\u0079\u0053\u0074\u0061\u0074\u0075\u0073",
      ).textContent = __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.message),
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
          "\u0063\u0072\u0065\u0061\u0074\u0065\u0041\u0063\u0063\u006f\u0075\u006e\u0074\u004b\u0065\u0079",
        ).disabled = !0));
    }
  }
  return (
    (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2("\u0061\u0070\u0069\u004b\u0065\u0079\u0073").onclick = () => {
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5() ||
        (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34(),
        __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.tab("\u006b\u0065\u0079\u0073"),
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
          "\u006b\u0065\u0079\u0045\u0072\u0072\u006f\u0072",
        ).textContent = ""),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2("\u006b\u0065\u0079\u0044\u0069\u0061\u006c\u006f\u0067").showModal(),
        __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c());
    }),
    (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2("\u0063\u006c\u006f\u0073\u0065\u004b\u0065\u0079\u0073").onclick =
      () => {
        __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 ||
          (__d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21(),
          __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.clear(),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2("\u006b\u0065\u0079\u0044\u0069\u0061\u006c\u006f\u0067").close());
      }),
    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
      "\u006b\u0065\u0079\u0044\u0069\u0061\u006c\u006f\u0067",
    ).addEventListener(
      "\u0063\u0061\u006e\u0063\u0065\u006c",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6
          ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault()
          : (__d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21(),
            __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.clear());
      },
    ),
    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
      "\u006b\u0065\u0079\u0044\u0069\u0061\u006c\u006f\u0067",
    ).addEventListener("\u0063\u006c\u006f\u0073\u0065", () => {
      (__d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21(),
        __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.clear());
    }),
    (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
      "\u0070\u0065\u0072\u0073\u006f\u006e\u0061\u006c\u004b\u0065\u0079\u0046\u006f\u0072\u006d",
    ).onsubmit = async (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
      if (
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5() ||
          __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6)
      )
        return;
      const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
          "\u0070\u0065\u0072\u0073\u006f\u006e\u0061\u006c\u004b\u0065\u0079",
        ).value.trim();
      if (
        !/^sk-or-[A-Za-z0-9_-]{20,}$/.test(
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
        ) &&
        !/^n_api_[A-Za-z0-9_-]{43}$/.test(
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
        )
      )
        return void (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
          "\u006b\u0065\u0079\u0045\u0072\u0072\u006f\u0072",
        ).textContent = "\u0045\u006e\u0074\u0065\u0072\u0020\u0061\u006e\u0020\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072\u0020\u006f\u0072\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0041\u0050\u0049\u0020\u006b\u0065\u0079\u002e");
      __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 = !0;
      const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
        __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239;
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
        "\u0075\u0073\u0065\u0050\u0065\u0072\u0073\u006f\u006e\u0061\u006c\u004b\u0065\u0079",
      ).disabled = !0;
      try {
        if (
          (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.startsWith(
            "\u0073\u006b\u002d\u006f\u0072\u002d",
          ) &&
            (await __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
              await fetch("\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u006f\u0070\u0065\u006e\u0072\u006f\u0075\u0074\u0065\u0072\u002e\u0061\u0069\u002f\u0061\u0070\u0069\u002f\u0076\u0031\u002f\u006b\u0065\u0079", {
                headers: {
                  Authorization:
                    "\u0042\u0065\u0061\u0072\u0065\u0072\u0020" + __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                },
                redirect: "\u0065\u0072\u0072\u006f\u0072",
                cache: "\u006e\u006f\u002d\u0073\u0074\u006f\u0072\u0065",
              }),
            )),
          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a !==
            __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239)
        )
          return;
        ((__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03),
          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239++,
          __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34(),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2("\u006b\u0065\u0079\u0044\u0069\u0061\u006c\u006f\u0067").close(),
          await __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c());
      } catch (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc) {
        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a ===
          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 &&
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
            "\u006b\u0065\u0079\u0045\u0072\u0072\u006f\u0072",
          ).textContent =
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.message.replaceAll(
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
              "\u005b\u006b\u0065\u0079\u005d",
            ));
      } finally {
        ((__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 = !1),
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
            "\u0075\u0073\u0065\u0050\u0065\u0072\u0073\u006f\u006e\u0061\u006c\u004b\u0065\u0079",
          ).disabled = !1));
      }
    }),
    (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2("\u0075\u0073\u0065\u0053\u0068\u0061\u0072\u0065\u0064\u004b\u0065\u0079").onclick =
      async () => {
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5() ||
          __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 ||
          ((__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = ""),
          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239++,
          __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34(),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2("\u006b\u0065\u0079\u0044\u0069\u0061\u006c\u006f\u0067").close(),
          await __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c());
      }),
    (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
      "\u0063\u0072\u0065\u0061\u0074\u0065\u0041\u0063\u0063\u006f\u0075\u006e\u0074\u004b\u0065\u0079",
    ).onclick = async () => {
      if (
        __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 ||
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5()
      )
        return;
      ((__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 = !0),
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
          "\u0063\u0072\u0065\u0061\u0074\u0065\u0041\u0063\u0063\u006f\u0075\u006e\u0074\u004b\u0065\u0079",
        ).disabled = !0));
      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
        __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239;
      try {
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
          await __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d("\u002f\u006b\u0065\u0079\u0073", {
            label:
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
                "\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u004b\u0065\u0079\u004c\u0061\u0062\u0065\u006c",
              ).value.trim() || __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
          });
        if (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 !==
          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239
        )
          return;
        ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2("\u0063\u0072\u0065\u0061\u0074\u0065\u0064\u004b\u0065\u0079").value =
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.key),
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
            "\u0063\u0072\u0065\u0061\u0074\u0065\u0064\u004b\u0065\u0079\u0050\u0061\u006e\u0065\u006c",
          ).hidden = !1),
          await __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c());
      } catch (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) {
        if (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 !==
          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239
        )
          return;
        ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
          "\u006b\u0065\u0079\u0045\u0072\u0072\u006f\u0072",
        ).textContent = __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.message),
          await __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c());
      } finally {
        __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 = !1;
      }
    }),
    (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
      "\u0072\u0065\u0076\u006f\u006b\u0065\u0041\u0063\u0063\u006f\u0075\u006e\u0074\u004b\u0065\u0079",
    ).onclick = async () => {
      if (
        __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 ||
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5()
      )
        return;
      __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 = !0;
      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
        __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239;
      try {
        if (
          (await __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d(
            "\u002f\u006b\u0065\u0079\u0073",
            null,
            "\u0044\u0045\u004c\u0045\u0054\u0045",
          ),
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 !==
            __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239)
        )
          return;
        (__d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21(),
          __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 &&
            "\u0061\u0063\u0063\u006f\u0075\u006e\u0074" === __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a() &&
            ((__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = ""),
            __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239++,
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34(),
            await __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c()),
          await __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c());
      } catch (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03) {
        if (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 !==
          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239
        )
          return;
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2("\u006b\u0065\u0079\u0045\u0072\u0072\u006f\u0072").textContent =
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.message;
      } finally {
        __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 = !1;
      }
    }),
    (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2("\u0063\u006f\u0070\u0079\u0043\u0072\u0065\u0061\u0074\u0065\u0064\u004b\u0065\u0079").onclick =
      async () => {
        try {
          (await navigator.clipboard.writeText(
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2("\u0063\u0072\u0065\u0061\u0074\u0065\u0064\u004b\u0065\u0079").value,
          ),
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03("\u004b\u0065\u0079\u0020\u0063\u006f\u0070\u0069\u0065\u0064\u002e"));
        } catch {
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
            "\u0053\u0065\u006c\u0065\u0063\u0074\u0020\u0074\u0068\u0065\u0020\u006b\u0065\u0079\u0020\u0061\u006e\u0064\u0020\u0063\u006f\u0070\u0079\u0020\u0069\u0074\u0020\u006d\u0061\u006e\u0075\u0061\u006c\u006c\u0079\u002e",
          );
        }
      }),
    (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2("\u0075\u0073\u0065\u0043\u0072\u0065\u0061\u0074\u0065\u0064\u004b\u0065\u0079").onclick =
      async () => {
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5() ||
          __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 ||
          !__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2("\u0063\u0072\u0065\u0061\u0074\u0065\u0064\u004b\u0065\u0079").value ||
          ((__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2("\u0063\u0072\u0065\u0061\u0074\u0065\u0064\u004b\u0065\u0079").value),
          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239++,
          __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34(),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2("\u006b\u0065\u0079\u0044\u0069\u0061\u006c\u006f\u0067").close(),
          await __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c());
      }),
    window.addEventListener("\u0070\u0061\u0067\u0065\u0068\u0069\u0064\u0065", () => {
      ((__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = ""),
        __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21());
    }),
    {
      revision: () => __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239,
      active: () => !!__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
      bind(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f !==
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
          ((__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239++,
          (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = ""),
          (__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 = []),
          __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.clear(),
          __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21(),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2("\u006b\u0065\u0079\u0044\u0069\u0061\u006c\u006f\u0067").close(),
          __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34());
      },
      async models() {
        if (!__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238) return null;
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
            __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
            __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239;
        if ("\u0061\u0063\u0063\u006f\u0075\u006e\u0074" === __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a()) {
          const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
            await __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d("\u002f\u006d\u0065");
          if (
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 !==
            __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239
          )
            throw new DOMException("\u0041\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0063\u0068\u0061\u006e\u0067\u0065\u0064", "\u0041\u0062\u006f\u0072\u0074\u0045\u0072\u0072\u006f\u0072");
          return (
            (__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 =
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.catalog ||
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.models || []).map(
                (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => ({
                  id: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  label: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  text: !0,
                  inputModalities: ["\u0074\u0065\u0078\u0074"],
                  outputModalities: ["\u0074\u0065\u0078\u0074"],
                }),
              )),
            {
              models: __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1,
            }
          );
        }
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
          await __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
            await fetch("\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u006f\u0070\u0065\u006e\u0072\u006f\u0075\u0074\u0065\u0072\u002e\u0061\u0069\u002f\u0061\u0070\u0069\u002f\u0076\u0031\u002f\u006d\u006f\u0064\u0065\u006c\u0073", {
              headers: {
                Authorization:
                  "\u0042\u0065\u0061\u0072\u0065\u0072\u0020" + __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              },
              redirect: "\u0065\u0072\u0072\u006f\u0072",
              cache: "\u006e\u006f\u002d\u0073\u0074\u006f\u0072\u0065",
            }),
          );
        if (
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 !==
          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239
        )
          throw new DOMException("\u0041\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0063\u0068\u0061\u006e\u0067\u0065\u0064", "\u0041\u0062\u006f\u0072\u0074\u0045\u0072\u0072\u006f\u0072");
        return (
          (__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 = (
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.data || []
          ).map((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => ({
            id: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
            label:
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.name ||
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
            created: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.created,
            inputModalities:
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.architecture
                ?.input_modalities || [],
            outputModalities: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
              .architecture?.output_modalities || ["\u0074\u0065\u0078\u0074"],
            text: (
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.architecture
                ?.output_modalities || ["\u0074\u0065\u0078\u0074"]
            ).includes("\u0074\u0065\u0078\u0074"),
            vision:
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.architecture?.input_modalities?.includes(
                "\u0069\u006d\u0061\u0067\u0065",
              ),
            reasoning:
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.supported_parameters?.includes(
                "\u0072\u0065\u0061\u0073\u006f\u006e\u0069\u006e\u0067",
              ),
            supportedParameters:
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.supported_parameters ||
              [],
          }))),
          {
            models: __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1,
          }
        );
      },
      async send(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
      ) {
        const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
            __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
            "\u0061\u0063\u0063\u006f\u0075\u006e\u0074" === __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a(),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
            __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1.find(
              (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id ===
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.model,
            );
        if (
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc &&
          !__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe &&
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.image ||
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.generateAudio)
        )
          throw Error(
            "\u0041\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0041\u0050\u0049\u0020\u006b\u0065\u0079\u0073\u0020\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u0020\u0074\u0065\u0078\u0074\u0020\u006f\u006e\u006c\u0079\u002e\u0020\u0055\u0073\u0065\u0020\u0061\u006e\u0020\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072\u0020\u006b\u0065\u0079\u0020\u0066\u006f\u0072\u0020\u0069\u006d\u0061\u0067\u0065\u0073\u0020\u0061\u006e\u0064\u0020\u0076\u006f\u0069\u0063\u0065\u002e",
          );
        const __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.messages || [
            {
              role: "\u0075\u0073\u0065\u0072",
              content: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message,
            },
          ]
        ).map((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => ({
          role: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.role,
          content: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.content,
        }));
        if (
          ("\u0063\u006f\u006d\u0070\u0075\u0074\u0065\u0072\u002d\u0061\u0067\u0065\u006e\u0074" ===
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.task &&
            __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.unshift({
              role: "\u0073\u0079\u0073\u0074\u0065\u006d",
              content: __0159afb719a78ed8c8a3938ee144c930b121f1fd74d588b30e9186af4a2f89d7,
            }),
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.image)
        ) {
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
            __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.at(-1);
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.content = [
            {
              type: "\u0074\u0065\u0078\u0074",
              text: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.content,
            },
            {
              type: "\u0069\u006d\u0061\u0067\u0065\u005f\u0075\u0072\u006c",
              image_url: {
                url: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.image
                  .dataUrl,
              },
            },
          ];
        }
        const __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = {
          model: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.model,
          messages: __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f,
          max_tokens:
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc &&
            !__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe
              ? 512
              : "\u0063\u006f\u006d\u0070\u0075\u0074\u0065\u0072\u002d\u0061\u0067\u0065\u006e\u0074" ===
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.task
                ? 4096
                : 2048,
          stream:
            !(
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc &&
              !__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe
            ) && !1 !== __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.stream,
        };
        let __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6;
        if (
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2?.reasoning &&
            (__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239.reasoning = {
              effort:
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.reasoningEffort ||
                "\u006d\u0065\u0064\u0069\u0075\u006d",
            }),
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.generateAudio)
        ) {
          if (
            !__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
            )
          )
            throw Error("\u0043\u0068\u006f\u006f\u0073\u0065\u0020\u0061\u0020\u0063\u006f\u006e\u0076\u0065\u0072\u0073\u0061\u0074\u0069\u006f\u006e\u0061\u006c\u0020\u0076\u006f\u0069\u0063\u0065\u0020\u006d\u006f\u0064\u0065\u006c\u002e");
          ((__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.model.startsWith(
              "\u006f\u0070\u0065\u006e\u0061\u0069\u002f",
            )
              ? "\u0070\u0063\u006d\u0031\u0036"
              : "\u006d\u0070\u0033"),
            (__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239.stream = !0),
            (__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239.modalities = [
              "\u0074\u0065\u0078\u0074",
              "\u0061\u0075\u0064\u0069\u006f",
            ]),
            (__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239.audio = {
              voice:
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.voice || "\u0061\u006c\u006c\u006f\u0079",
              format: __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6,
            }));
        }
        try {
          const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = await fetch(
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc
                ? "\u002f\u0061\u0070\u0069\u002f\u0076\u0031\u002f\u0061\u0069"
                : "\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u006f\u0070\u0065\u006e\u0072\u006f\u0075\u0074\u0065\u0072\u002e\u0061\u0069\u002f\u0061\u0070\u0069\u002f\u0076\u0031\u002f\u0063\u0068\u0061\u0074\u002f\u0063\u006f\u006d\u0070\u006c\u0065\u0074\u0069\u006f\u006e\u0073",
              {
                method: "\u0050\u004f\u0053\u0054",
                signal: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                redirect: "\u0065\u0072\u0072\u006f\u0072",
                headers: {
                  Authorization:
                    "\u0042\u0065\u0061\u0072\u0065\u0072\u0020" + __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                  "\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065": "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
                },
                body: JSON.stringify(
                  __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239,
                ),
              },
            ),
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
              await __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6,
              );
          return __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.choices
            ? {
                text:
                  __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.choices[0]
                    ?.message?.content || "",
                model: __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.model,
                finishReason:
                  __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.choices[0]
                    ?.finish_reason,
              }
            : __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a;
        } catch (__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d) {
          if (
            "\u0041\u0062\u006f\u0072\u0074\u0045\u0072\u0072\u006f\u0072" === __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d.name
          )
            throw __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d;
          throw Error(
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
              ? __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d.message.replaceAll(
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                  "\u005b\u006b\u0065\u0079\u005d",
                )
              : __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d.message,
          );
        }
      },
    }
  );
}
