<script lang="ts">
    import { fade, fly, slide } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    import { loreChapters } from '$lib/data/lore';
    import { currentLang, toggleLanguage } from '$lib/stores/language';

    const dispatch = createEventDispatcher();
    let activeChapterId = 1;
    let isMobileMenuOpen = false; // Состояние для мобильного меню глав

    $: lang = $currentLang;
    $: currentChapter = loreChapters.find(c => c.id === activeChapterId)?.[lang] || loreChapters[0].ru;

    function close() {
        dispatch('close');
    }

    function selectChapter(id: number) {
        activeChapterId = id;
        isMobileMenuOpen = false; // Закрываем меню после выбора
    }
</script>

<!-- BACKDROP -->
<div
    class="fixed inset-0 z-[60] bg-void/95 backdrop-blur-md flex items-center justify-center md:p-8"
    transition:fade={{ duration: 300 }}
>

    <!-- MAIN CONTAINER -->
    <div
        class="w-full h-[100dvh] md:h-[85vh] md:max-w-6xl bg-panel border-0 md:border border-cyan/20 md:rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.1)] flex flex-col md:flex-row overflow-hidden relative"
        in:fly={{ y: 50, duration: 500 }}
    >
        <!-- DECORATIVE LINES -->
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan via-purple to-cyan z-20"></div>

        <!-- MOBILE TOP BAR -->
        <div class="md:hidden flex justify-between items-center p-4 border-b border-white/10 bg-black/80 backdrop-blur z-30 shrink-0">
            <button
                on:click={() => isMobileMenuOpen = !isMobileMenuOpen}
                class="flex items-center gap-2 text-cyan font-mono text-xs border border-cyan/30 px-3 py-2 rounded uppercase"
            >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                {isMobileMenuOpen ? 'CLOSE LIST' : 'CHAPTERS'}
            </button>

            <div class="flex gap-2">
                <button on:click={toggleLanguage} class="text-xs font-mono font-bold border border-white/20 px-2 py-1 rounded text-white bg-white/5">
                    {$currentLang.toUpperCase()}
                </button>
                <button on:click={close} class="p-2 bg-red-500/10 text-red-400 rounded-full border border-red-500/20">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
        </div>

        <!-- LEFT SIDEBAR: CHAPTER LIST (Desktop: Always visible, Mobile: Overlay) -->
        <div
            class="absolute inset-0 z-20 md:static md:w-1/3 bg-black/95 md:bg-black/40 border-r border-white/5 flex flex-col transition-transform duration-300 md:translate-x-0
            {isMobileMenuOpen ? 'translate-x-0 pt-20' : '-translate-x-full md:pt-0'}"
        >
            <div class="p-6 border-b border-white/5 hidden md:flex justify-between items-center">
                <div>
                    <h2 class="text-2xl font-display font-bold text-white">ARCHIVE</h2>
                    <p class="text-xs font-mono text-cyan">DECRYPTED MEMORY LOGS</p>
                </div>
                <button
                    on:click={toggleLanguage}
                    class="text-xs font-bold font-mono text-gray-400 border border-gray-600 px-3 py-1 rounded hover:text-white hover:border-cyan transition-all"
                >
                    [{ $currentLang.toUpperCase() }]
                </button>
            </div>

            <div class="flex-1 overflow-y-auto scrollbar-thin p-4 space-y-2">
                {#each loreChapters as chapter}
                    {@const content = chapter[lang]}
                    <button
                        class="w-full text-left p-4 rounded-lg border transition-all duration-200 group relative overflow-hidden
                        {activeChapterId === chapter.id
                            ? 'bg-cyan/10 border-cyan text-white'
                            : 'bg-transparent border-transparent hover:bg-white/5 text-gray-400'}"
                        on:click={() => selectChapter(chapter.id)}
                    >
                        {#if activeChapterId === chapter.id}
                            <div class="absolute left-0 top-0 bottom-0 w-1 bg-cyan" transition:slide></div>
                        {/if}

                        <div class="font-mono text-xs opacity-60 mb-1">LOG_0{chapter.id}</div>
                        <div class="font-display font-bold text-sm md:text-base leading-tight">{content.title}</div>
                    </button>
                {/each}
            </div>

            <div class="p-6 border-t border-white/5 hidden md:block">
                <button on:click={close} class="w-full py-3 border border-white/20 text-gray-400 hover:text-white hover:border-white hover:bg-white/5 font-mono text-sm transition-all uppercase tracking-widest">
                    // CLOSE ARCHIVE
                </button>
            </div>
        </div>

        <!-- RIGHT SIDE: CONTENT -->
        <div class="w-full md:w-2/3 bg-gradient-to-br from-panel to-black flex flex-col relative min-h-0">
            <!-- Header -->
            <div class="p-6 md:p-10 pb-4 shrink-0 border-b border-white/5 md:border-none">
                <div class="flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-purple animate-pulse"></span>
                    <span class="font-mono text-xs text-purple uppercase tracking-widest">Memory Bank Access</span>
                </div>
                <h1 class="text-xl md:text-4xl font-display font-bold text-white mb-2 leading-tight">{currentChapter.title}</h1>
                <p class="font-mono text-cyan text-xs md:text-sm border-l-2 border-cyan pl-3">{currentChapter.subtitle}</p>
            </div>

            <!-- Styled Content (SCROLLABLE AREA) -->
            <div class="flex-1 overflow-y-auto p-6 md:p-10 pt-4 space-y-6 scrollbar-thin scroll-smooth" style="-webkit-overflow-scrolling: touch;">
                {#key activeChapterId + lang}
                    <div in:fade={{ duration: 300 }} class="space-y-6 pb-20 md:pb-0">
                        {#each currentChapter.blocks as block}

                            {#if block.type === 'text'}
                                <p class="text-gray-300 font-sans leading-relaxed text-base md:text-lg">
                                    {block.content}
                                </p>

                            {:else if block.type === 'orion'}
                                <div class="pl-4 border-l-2 border-cyan bg-cyan/5 p-3 rounded-r">
                                    <span class="text-cyan font-bold text-xs block mb-1 font-mono uppercase">Orion</span>
                                    <p class="font-sans text-base md:text-lg text-cyan-100">{block.content}</p>
                                </div>

                            {:else if block.type === 'onyx'}
                                <div class="pl-4 border-l-2 border-purple bg-purple/5 p-3 rounded-r">
                                    <span class="text-purple font-bold text-xs block mb-1 font-mono uppercase">Onyx // System</span>
                                    <p class="font-sans text-base md:text-lg text-purple-100 italic">{block.content}</p>
                                </div>

                            {:else if block.type === 'system'}
                                <div class="font-mono text-xs md:text-sm text-gray-400 bg-gray-900/80 p-3 border border-gray-700 rounded">
                                    <span class="text-yellow-500 mr-2">⚠ SYSTEM:</span>
                                    {block.content}
                                </div>

                            {:else if block.type === 'enemy'}
                                <div class="font-mono text-xs md:text-sm text-red-400 bg-red-900/10 p-3 border-l-2 border-red-500">
                                    {block.content}
                                </div>

                            {:else if block.type === 'code'}
                                <div class="font-mono text-xs md:text-sm text-green-500 bg-black p-4 rounded border border-green-900/50 shadow-inner overflow-x-auto whitespace-pre-wrap">
                                    <span class="animate-pulse opacity-80">{block.content}</span>
                                </div>
                            {/if}

                        {/each}

                        <div class="pt-8 flex justify-center opacity-50">
                            <span class="font-mono text-xs text-gray-500">*** END OF LOG ***</span>
                        </div>
                    </div>
                {/key}
            </div>
        </div>

    </div>
</div>

<style>
    .scrollbar-thin::-webkit-scrollbar { width: 4px; }
    .scrollbar-thin::-webkit-scrollbar-track { background: #0a0a0a; }
    .scrollbar-thin::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
    .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: #00f0ff; }
</style>