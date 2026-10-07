export function supportsConversationVoice(_0x73d34b_0) {
  return !!_0x73d34b_0?.outputModalities?.includes("\x61\x75\x64\x69\x6f") && !/(?:^|[\/ _-])(lyria|musicgen|suno|udio)(?:[\/ _-]|$)/i.test(String(_0x73d34b_0.id || _0x73d34b_0.model || ""));
}
