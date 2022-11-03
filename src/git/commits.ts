
export async function getHashes(): Promise<{
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