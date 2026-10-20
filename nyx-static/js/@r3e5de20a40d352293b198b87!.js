export const publisherConfig = Object.freeze({
  homeBanners: [
    {
      path: "\u002f\u0061\u0070\u0070\u0073\u002f\u0073\u0070\u006f\u006e\u0073\u006f\u0072\u002f\u0073\u0069\u0064\u0065\u002e\u0068\u0074\u006d\u006c",
      width: 160,
      height: 600,
    },
    {
      path: "\u002f\u0061\u0070\u0070\u0073\u002f\u0073\u0070\u006f\u006e\u0073\u006f\u0072\u002f\u0073\u0069\u0064\u0065\u002e\u0068\u0074\u006d\u006c",
      width: 160,
      height: 600,
    },
  ],
});

export function publisherHostAllowed(
  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = location.hostname,
) {
  return (
    ["\u006c\u006f\u0063\u0061\u006c\u0068\u006f\u0073\u0074", "\u0031\u0032\u0037\u002e\u0030\u002e\u0030\u002e\u0031", "\u005b\u003a\u003a\u0031\u005d"].includes(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) && window === window.top
  );
}

function __dbb8e495684fca740ecc2124e239afd6f7e4ff273439910b2a0cad58d6f9ab07() {
  return document.hidden ||
    document.body?.classList.contains("\u006e\u0037\u0078\u002d\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u002d\u0061\u0063\u0074\u0069\u0076\u0065") ||
    document.body?.classList.contains("\u0071\u0031\u0032\u0033\u0034\u0036\u0035\u0031\u0037\u0064\u0032\u0066\u0062\u0030\u0030\u0064\u0064\u0062\u0039") ||
    document.querySelector("\u002e\u0071\u0031\u0062\u0038\u0062\u0035\u0037\u0062\u0064\u0064\u0034\u0034\u0061\u0062\u0039\u0031\u0032\u0036\u0037")
    ? null
    : [
        ...document.querySelectorAll(
          "\u002e\u006e\u0032\u0061\u0063\u0030\u0036\u0030\u0034\u0063\u0036\u0065\u0062\u0063\u002e\u0071\u0036\u0031\u0033\u0039\u0064\u0038\u0065\u0063\u0065\u0062\u0063\u0064\u0066\u0038\u0065\u0038\u0063\u0031\u0020\u002e\u0071\u0034\u0066\u0039\u0035\u0039\u0062\u0030\u0036\u0033\u0036\u0037\u0039\u0066\u0065\u0033\u0061\u0066\u0061\u002e\u006e\u0037\u0078\u002d\u006d\u0069\u006e\u0069\u006d\u0061\u006c\u002d\u0068\u006f\u006d\u0065\u003a\u006e\u006f\u0074\u0028\u002e\u0068\u0069\u0064\u0064\u0065\u006e\u0029",
        ),
      ].find(
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getClientRects()
            .length &&
          "\u0076\u0069\u0073\u0069\u0062\u006c\u0065" ===
            getComputedStyle(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)
              .visibility,
      ) || null;
}

publisherHostAllowed() &&
  (window.__nyxPublisherHome = __dbb8e495684fca740ecc2124e239afd6f7e4ff273439910b2a0cad58d6f9ab07);

export function publisherMode() {
  return publisherHostAllowed() &&
    __dbb8e495684fca740ecc2124e239afd6f7e4ff273439910b2a0cad58d6f9ab07()
    ? "\u0073\u0074\u0061\u006e\u0064\u0061\u0072\u0064"
    : "\u006f\u0066\u0066";
}
