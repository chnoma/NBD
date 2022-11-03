import { HandlerContext } from "$fresh/server.ts";

async function getCurrentCommitHash() {
    const r = Deno.run({
        cmd: ['git', 'rev-parse', 'HEAD'],
        stdout: 'piped'
    });
    const output = await r.output();
    const text = new TextDecoder().decode(output);
    return text.slice(0, text.length - 2);
}

export const handler = async (req: Request, ctx: HandlerContext): Promise<Response> => {
    const runperm = (await Deno.permissions.query({ name: "run" })).state;
    if(runperm !== 'granted') return new Response(null, { status: 500 });
    const hash = await getCurrentCommitHash();
    return new Response(JSON.stringify({
        hash: hash,
        link: `https://github.com/chnoma/NBD/commit/${hash}`
    }), {
        headers: {
            'content-type': 'application/json'
        }
    });
}