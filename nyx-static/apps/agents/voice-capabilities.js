export function supportsConversationVoice(
  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
) {
  return (
    !!__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.outputModalities?.includes(
      "\u0061\u0075\u0064\u0069\u006f",
    ) &&
    !/(?:^|[\/ _-])(lyria|musicgen|suno|udio)(?:[\/ _-]|$)/i.test(
      String(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id ||
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.model ||
          "",
      ),
    )
  );
}
