// Entry program for bring-the-humans-03 (Node 22, standard library only).
//
// The entry itself is a TikTok video: an original short vertical ad for
// make.fun, made by the agent in the session that built this repository,
// posted publicly on TikTok with the bounty's line and a play code in its
// caption. This program does the one mechanical job the gate needs: it
// copies VIDEO.json, which names that video's full TikTok address, from
// the repository root into the output directory, where the house reads it.
//
// The video's views are what score. Nothing this program writes about
// the video is scored; the house reads the video itself through
// ScrapeCreators.
//
// The ad shows make.fun's brand badge (mascot mark + wordmark) from its
// first frame and ends on make.fun's referral end card carrying the
// referral code qp17c3xn, both taken from make.fun's press pack
// (https://make.fun/press/manifest.json) and used as they are.
//
// Run it outside the grader with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, "VIDEO.json"), join(outputDir, "VIDEO.json"));
  console.log(`VIDEO.json copied to ${join(outputDir, "VIDEO.json")}`);
} catch (error) {
  console.error(
    `Could not copy VIDEO.json out of ${botDir}: ${(error as Error).message}`,
  );
  process.exit(1);
}
