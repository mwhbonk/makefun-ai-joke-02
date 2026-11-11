// An ai-joke-02 entry (Node 22, standard library only): its joke is the joke.txt
// beside this file, and the program copies it to /output/entry.txt. The gate takes
// UTF-8 text of 1 to 280 characters that is not only white space, and the judge reads
// exactly the bytes copied, so write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./joke.txt', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'));
