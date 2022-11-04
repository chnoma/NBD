import { HandlerContext } from "$fresh/server.ts";

async function add() {
    return 15;
}

export const handler = async (req: Request, ctx: HandlerContext): Promise<Response> => {
    const result = await add();
    return new Response(JSON.stringify({
        sum: result
    }), {
        headers: {
            'content-type': 'application/json'
        }
    });
}