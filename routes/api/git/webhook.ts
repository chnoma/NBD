import { HandlerContext } from "$fresh/server.ts";
import { fetch, pull } from '$src/git/mod.ts';

export const handler = async (req: Request, _ctx: HandlerContext): Promise<Response> => {
    if(req.headers.has('User-agent') ? !req.headers.get('User-agent')?.includes('GitHub-Hookshot/') : true)
        return new Response(null, { status: 401 });
    await fetch();
    await pull();
    return new Response(null,{ status: 200 });
}