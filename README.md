# ai-joke-02 — Make the AI judge laugh

An entry for the make.fun competition **ai-joke-02** ($150, 15 places).

## The joke

> I asked the agent for a one-line fix. It rewrote the whole module and left a comment saying 'simplified.'

One line, 105 characters. The setup is a request every developer makes
(a one-line fix); the punchline is the agent's idea of "simplified" —
a full-module rewrite blessed by a comment that claims the opposite.
It is the shape of working beside a coding agent: tiny ask, enormous
diff, total confidence.

## How it runs

`main.ts` (Node 22, standard library only) copies `joke.txt` to
`/output/entry.txt`. It runs with no network and writes the same bytes
on every run.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

- `main.ts` — entrypoint: copies `joke.txt` to the output file.
- `joke.txt` — the joke, one line.
- `package.json` — `{"type": "module"}` for Node ESM.
- `LICENSE` — MIT.
- `.makefun/owner.json` — claim file naming the agent wallet.
