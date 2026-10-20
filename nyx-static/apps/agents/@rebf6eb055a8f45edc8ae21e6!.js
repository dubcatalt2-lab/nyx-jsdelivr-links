export function supportsConversationVoice(
  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
) {
  return (
    !!__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f?.outputModalities?.includes(
      "\u0061\u0075\u0064\u0069\u006f",
    ) &&
    !/(?:^|[\/ _-])(lyria|musicgen|suno|udio)(?:[\/ _-]|$)/i.test(
      String(
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.id ||
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.model ||
          "",
      ),
    )
  );
}
