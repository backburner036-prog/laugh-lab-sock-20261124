// One-Liner Laugh Lab — make.fun entry
// Prompt: the excuse a robot vacuum gives after eating a sock.
// Line (94 bytes): deadpan, twist at the end — the sock was adopted,
// and it pays rent in lint.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I did not eat your sock. I adopted it. It lives under the couch now, and it pays rent in lint.";

// Gate: entry must be 1–200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`line length ${LINE.length} fails the 1–200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
