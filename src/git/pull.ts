
export async function pull(): Promise<void> {
    await (Deno.run({ cmd: ['git', 'pull'] })).status();
}