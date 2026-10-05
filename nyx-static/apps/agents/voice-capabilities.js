export function supportsConversationVoice(i) {
  return !!i?.outputModalities?.includes("audio") && !/(?:^|[\/ _-])(lyria|musicgen|suno|udio)(?:[\/ _-]|$)/i.test(String(i.id || i.model || ""));
}
