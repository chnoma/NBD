
export async function fetch(): Promise<void> {
    await (Deno.run({ cmd: ['git', 'fetch'] })).status();
}