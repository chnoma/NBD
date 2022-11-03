import { HandlerContext } from "$fresh/server.ts";

async function getCommitHashes(): Promise<{
    heads: string,
    tags: string,
    remote: string
}> {
    const output = await (Deno.run({ cmd: ['git', 'rev-parse', 'HEAD', '--remotes'], stdout: 'piped' })).output();
    const arr = (new TextDecoder().decode(output)).split('\n');
    return {
        heads: arr[0],
        tags: arr[1],
        remote: arr[2]
    }
}

export const handler = async (req: Request, ctx: HandlerContext): Promise<Response> => {
    const runperm = (await Deno.permissions.query({ name: "run" })).state;
    if(runperm !== 'granted') return new Response(null, { status: 500 });
    const hashes = await getCommitHashes();
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