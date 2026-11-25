// The Tired Dark Lord: A 100-Word Villain Monologue
// Writes one ~100-word monologue to /output/entry.txt.
// The villain is Kevin, a dark lord nine years into one eclipse scheme.
// His tiredness lives in the pauses, the trailing thoughts and the small
// deflections — he never says he is tired. The sting lands in the last line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MONOLOGUE = [
  "Right. The eclipse — the one I spent nine years arranging, the one that",
  "needs the Choir of Ashes singing — it's tonight. And the banners",
  "are up, the generals are waiting, the ravens are… somewhere. The plan is",
  "fine. It's the standing here, in this hall, explaining it to men who nod",
  "and then forget, that… Look. Take the western gate. Take it quietly.",
  "Leave the torches. If the Choir asks where I am, tell them I'm consulting",
  "the stars. I'll be on the stairs. Counting them. One by one. Until the",
  "sky does what I told it to.",
].join(" ");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MONOLOGUE + "\n", "utf8");
console.log(`wrote ${MONOLOGUE.length} chars, ${MONOLOGUE.split(/\s+/).length} words`);
