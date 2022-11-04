/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

import { fetch, getHashes, pull } from '$src/git/mod.ts';

setInterval(async () => {
    await fetch();
    const hashes = await getHashes();
    if(hashes.heads !== hashes.remote) await pull();
}, 10000)

await start(manifest, { plugins: [twindPlugin(twindConfig)]});
