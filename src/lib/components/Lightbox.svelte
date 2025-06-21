<script lang="ts">
    import { fade } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';

    export let src: string;
    export let alt: string;

    const dispatch = createEventDispatcher();

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            dispatch('close');
        }
    }
</script>

<svelte:window on:keydown={handleKeydown}/>

<div
    class="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md flex items-center justify-center"
    on:click|self={() => dispatch('close')}
    transition:fade={{ duration: 200 }}
>
    <div class="relative max-w-4xl max-h-[90vh] p-4">
        <img {src} {alt} class="block max-w-full max-h-[90vh] object-contain drop-shadow-lightbox" />

        <button
            class="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-white/20 transition-colors"
            on:click={() => dispatch('close')}
            aria-label="Закрыть"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
</div>

<style>
    .drop-shadow-lightbox {
        filter: drop-shadow(0 0 25px rgba(255, 255, 255, 0.3));
    }
</style>