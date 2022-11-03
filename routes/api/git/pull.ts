import { HandlerContext } from "$fresh/server.ts";

async function gitPull() {
    const r = Deno.run({
        cmd: ['git', 'pull'],
        stdout: 'piped'
    });
    const output = await r.output();
    const text = new TextDecoder().decode(output);
    return text.slice(0, text.length - 2);
}

export const handler = async (req: Request, ctx: HandlerContext): Promise<Response> => {
    const runperm = (await Deno.permissions.query({ name: "run" })).state;
    if(runperm !== 'granted') return new Response(null, { status: 500 });
    const result = await gitPull();
    return new Response(JSON.stringify({
        status: result
    }), {
        headers: {
            'content-type': 'application/json'
        }
    });
}