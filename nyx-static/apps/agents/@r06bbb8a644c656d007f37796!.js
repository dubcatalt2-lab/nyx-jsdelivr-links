export function supportsConversationVoice(i) {
  return (
    !!i?.["\u006f\u0075\u0074\u0070\u0075\u0074\u004d\u006f\u0064\u0061\u006c\u0069\u0074\u0069\u0065\u0073"]?.["\u0069\u006e\u0063\u006c\u0075\u0064\u0065\u0073"]("\u0061\u0075\u0064\u0069\u006f") &&
    !/(?:^|[\/ _-])(lyria|musicgen|suno|udio)(?:[\/ _-]|$)/i["\u0074\u0065\u0073\u0074"](String(i["\u0069\u0064"] || i["\u006d\u006f\u0064\u0065\u006c"] || ""))
  );
}
