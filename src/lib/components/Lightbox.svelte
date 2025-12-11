<script lang="ts">
    import { fade, scale } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    import { base } from '$app/paths';

    export let image: { src: string; title: string; category: string; desc?: string };

    const dispatch = createEventDispatcher();
    let isLoaded = false;

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === 'Escape') dispatch('close');
    }

    function portal(node: HTMLElement) {
        let target = document.body;
        async function update() {
            target.appendChild(node);
            node.hidden = false;
        }
        update();
        return {
            destroy() {
                if (node.parentNode) node.parentNode.removeChild(node);
            }
        };
    }
</script>

<svelte:window on:keydown={handleKeydown} />

<div
    use:portal
    class="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
    transition:fade={{ duration: 200 }}
    on:click|self={() => dispatch('close')}
    hidden
>

    <div
        class="relative max-w-6xl w-full max-h-[90vh] flex flex-col md:flex-row bg-panel border border-white/10 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
        in:scale={{ start: 0.95, duration: 300 }}
        on:click|stopPropagation
    >

        <button
            on:click={() => dispatch('close')}
            class="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-red-500/20 text-gray-400 hover:text-red-500 rounded-full border border-white/10 hover:border-red-500 transition-all"
        >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div class="w-full md:w-3/4 bg-black/50 relative flex items-center justify-center overflow-hidden group select-none">
            <!-- Grid Background -->
            <div class="absolute inset-0 opacity-20 pointer-events-none" style="background-image: linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px); background-size: 40px 40px;"></div>

            {#if !isLoaded}
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-10 h-10 border-2 border-cyan border-t-transparent rounded-full animate-spin"></div>
                </div>
            {/if}

            <img
                src="{base}{image.src}"
                alt={image.title}
                class="max-w-full max-h-[85vh] object-contain shadow-lg"
                on:load={() => isLoaded = true}
            />

            <div class="absolute top-0 left-0 w-full h-[2px] bg-cyan/50 shadow-[0_0_20px_#00f0ff] animate-scan pointer-events-none"></div>
        </div>

        <div class="w-full md:w-1/4 bg-panel border-l border-white/5 p-6 md:p-8 flex flex-col justify-between max-h-[40vh] md:max-h-full overflow-y-auto">
            <div>
                <div class="flex items-center gap-2 mb-6">
                     <span class="px-2 py-0.5 bg-cyan/10 border border-cyan/30 text-cyan text-[10px] font-mono font-bold rounded">
                        {image.category}
                     </span>
                     <span class="text-[10px] font-mono text-gray-500">RES: HIGH_DEF</span>
                </div>

                <h2 class="text-2xl md:text-3xl font-display font-bold text-white mb-4 leading-tight">
                    {image.title}
                </h2>

                <div class="space-y-4">
                    <div class="p-4 bg-black/30 rounded border border-white/5">
                        <p class="text-xs font-mono text-gray-500 mb-1">DESCRIPTION_LOG:</p>
                        <p class="text-gray-300 font-sans leading-relaxed text-sm">
                            {image.desc || "No additional data available for this memory fragment."}
                        </p>
                    </div>

                    <!-- Fake Stats -->
                    <div class="grid grid-cols-2 gap-2 text-[10px] font-mono text-gray-400">
                        <div class="bg-white/5 p-2 rounded">ISO: 400</div>
                        <div class="bg-white/5 p-2 rounded">SHUTTER: 1/200</div>
                        <div class="bg-white/5 p-2 rounded">SOURCE: NEURAL_CAM</div>
                        <div class="bg-white/5 p-2 rounded">ENCRYPTION: NONE</div>
                    </div>
                </div>
            </div>

            <div class="mt-6 pt-6 border-t border-white/5">
                <a
                    href="{base}{image.src}"
                    download
                    class="w-full py-3 bg-cyan text-black font-mono font-bold text-xs hover:bg-white transition-colors uppercase tracking-widest flex justify-center items-center gap-2 rounded"
                >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    Download Data
                </a>
            </div>
        </div>

    </div>
</div>

<style>
    @keyframes scan {
        0% { top: 0; opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { top: 100%; opacity: 0; }
    }
    .animate-scan {
        animation: scan 4s linear infinite;
    }
</style>