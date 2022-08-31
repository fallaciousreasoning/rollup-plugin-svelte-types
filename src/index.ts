import svelte2tsx from 'svelte2tsx';

const emitDts = (options = { libRoot: './', declarationDir: './types' }) => {
    return {
        name: 'emitDts',
        buildStart: async () => {
            await svelte2tsx.emitDts({
                libRoot: options.libRoot,
                svelteShimsPath: require.resolve('svelte2tsx/svelte-shims.d.ts'),
                declarationDir: options.declarationDir
            })
        }
    }
}

export default emitDts
