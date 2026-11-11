// Isolate decorative search/navigation graphics without moving live form controls.
const ownedSelector = value => value;
const targets = ownedSelector('.n7x-minimal-search > svg, .q1a2b180d7cc7c3531f [data-n7x-dock-item] > svg');
function isolateGraphics(root) {
  if (!(root instanceof Element || root instanceof Document)) return;
  const icons = [...root.querySelectorAll(targets)];
  if (root instanceof Element && root.matches(targets)) icons.unshift(root);
  for (const icon of icons) {
    if (!icon.isConnected) continue;
    const host = document.createElement('nyx-ui-glyph');
    host.setAttribute('aria-hidden', 'true');
    const shadow = host.attachShadow({mode:'open'});
    const style = document.createElement('style');
    style.textContent = ':host{display:inline-flex;flex:none;width:var(--nyx-glyph-size,22px);height:var(--nyx-glyph-size,22px);color:inherit;pointer-events:none}svg{display:block;width:100%;height:100%;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}';
    icon.replaceWith(host);
    shadow.append(style, icon);
  }
}
isolateGraphics(document);
new MutationObserver(records => {
  for (const record of records) for (const node of record.addedNodes) isolateGraphics(node);
}).observe(document.body, {childList:true,subtree:true});
