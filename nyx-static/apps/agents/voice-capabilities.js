export function supportsConversationVoice(
  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
) {
  return (
    !!__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28?.outputModalities?.includes(
      "\u0061\u0075\u0064\u0069\u006f",
    ) &&
    !/(?:^|[\/ _-])(lyria|musicgen|suno|udio)(?:[\/ _-]|$)/i.test(
      String(
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.id ||
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.model ||
          "",
      ),
    )
  );
}
