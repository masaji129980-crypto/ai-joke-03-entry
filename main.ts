// Entry for make.fun bounty ai-joke-03 ("Make the AI judge laugh").
// Node 22, standard library only: writes one fixed one-liner about AI coding
// agents to /output/entry.txt. The gate takes UTF-8 text of 1 to 280
// characters that is not only white space, and the judge reads exactly the
// bytes written, so the joke is written with no trailing newline.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE = "My AI coding agent has never once said 'I don't know.' It just commits.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
