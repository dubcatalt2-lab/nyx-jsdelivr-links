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
  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = location.hostname,
) {
  return (
    ["\u006c\u006f\u0063\u0061\u006c\u0068\u006f\u0073\u0074", "\u0031\u0032\u0037\u002e\u0030\u002e\u0030\u002e\u0031", "\u005b\u003a\u003a\u0031\u005d"].includes(
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    ) && window === window.top
  );
}

function __b6974df6d7bddea7836e334aee0c2934cfb565862b17e00d2529bc2285efd651() {
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
        (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.getClientRects()
            .length &&
          "\u0076\u0069\u0073\u0069\u0062\u006c\u0065" ===
            getComputedStyle(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f)
              .visibility,
      ) || null;
}

publisherHostAllowed() &&
  (window.__nyxPublisherHome = __b6974df6d7bddea7836e334aee0c2934cfb565862b17e00d2529bc2285efd651);

export function publisherMode() {
  return publisherHostAllowed() &&
    __b6974df6d7bddea7836e334aee0c2934cfb565862b17e00d2529bc2285efd651()
    ? "\u0073\u0074\u0061\u006e\u0064\u0061\u0072\u0064"
    : "\u006f\u0066\u0066";
}
