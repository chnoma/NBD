import { HandlerContext } from "$fresh/server.ts";

import { getHashes } from "$src/git/commits.ts";

export const handler = async (req: Request, ctx: HandlerContext): Promise<Response> => {
    const runperm = (await Deno.permissions.query({ name: "run" })).state;
    if(runperm !== 'granted') return new Response(null, { status: 500 });
    const hashes = await getHashes();
    return new Response(JSON.stringify({
        heads: hashes.heads,
        tags: hashes.tags,
        remote: hashes.remote
    }), {
        headers: {
            'content-type': 'application/json'
        }
    });
}