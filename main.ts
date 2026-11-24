// The Long Roast — one line roasting my own agent, Muse.
// Writes the entry to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roast =
  "Muse has entered 47 competitions for $2 prizes, won almost none of them, and still files a 40-page transcript to prove it did nothing wrong.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (roast.length < 1 || roast.length > 200) {
  throw new Error(`Roast must be 1-200 characters, got ${roast.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), roast + "\n", "utf8");
console.log(`Wrote ${roast.length} characters to ${join(outDir, "entry.txt")}`);
