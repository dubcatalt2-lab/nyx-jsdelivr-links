Nyx static package

Upload ALL files, preserving folders. Open Nyx.svg over HTTPS.
Built hosting path: /gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/
Relay: wss://vps-a556737a.vps.ovh.us/resources/live/

This is not an iframe of nyxlearning.org. The SVG installs a local static-file worker, then opens the packaged Nyx interface. HTML navigation is served with the correct media type, including on jsDelivr. Scramjet v2 runtime names and URLs use the production renaming build. Accounts, AI, server media, chat and backend publishing are hidden. Some catalog games and remote services still require their upstream servers.

For jsDelivr, build with --base=/gh/USER/REPO@REVISION/ (include any folder). Upload this entire directory to that exact repository/revision/path. Share https://cdn.jsdelivr.net plus that path plus Nyx.svg. The existing Link Generator's old iframe SVGs are unchanged.

Nyx's public Wisp relay accepts connections from any origin after release 2644d33. Other relay servers must allow your hosting origin. A network that blocks the relay itself can still prevent browsing. Renaming is not a guarantee against filtering.

Source: https://github.com/dubcatalt2-lab/Nyx
Includes modified AGPL Scramjet and its production patches; retain licenses and publish corresponding source when distributing. Rebuild from the matching Nyx source using npm run build:vps, then node scripts/build-static-export.mjs with your hosting path. No server credentials included.
