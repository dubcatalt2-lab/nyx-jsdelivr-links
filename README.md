# Nyx jsDelivr SVG links

This public repository contains a reusable SVG loader for the official Nyx site and a small tested starter batch.

## Source SVG

Download `nyx-source.svg` and upload it to the SVG Batch Publisher. The publisher duplicates this exact loader under many randomized `.svg` filenames.

## Safe publisher settings

- Repository mode: `Pick a repo`
- Repository: `dubcatalt2-lab/nyx-jsdelivr-links`
- SVG file: `nyx-source.svg`
- Main words: `nyx, learning, study`
- Side words: `portal, cloud, school, page, hub`
- Count: start with `10`, verify the links, and then increase it

Use a short-lived GitHub token restricted to this repository with `Contents: Read and write`. Revoke it after publishing. Do not give the publisher access to private or important repositories.

## URL format

`https://cdn.jsdelivr.net/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/FILENAME.svg`

The SVG does not contain Nyx credentials or application code. It displays the official `https://nyxlearning.org/` application in a full-window iframe.