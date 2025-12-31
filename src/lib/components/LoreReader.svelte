<script lang="ts">
    import { fade, fly, slide } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    import { loreChapters } from '$lib/data/lore';
    import { altLoreChapters } from '$lib/data/alt_lore';
    import { currentLang, toggleLanguage } from '$lib/stores/language';
    import AmbientPlayer from './AmbientPlayer.svelte';
    import { base } from '$app/paths';

    const dispatch = createEventDispatcher();
    let activeChapterId = 1;
    let isMobileMenuOpen = false;
    let contentArea: HTMLElement;

    // Режим Альт-Лора
    let isAltMode = false;

    // Выбор источника данных
    $: sourceChapters = isAltMode ? altLoreChapters : loreChapters;
    $: lang = $currentLang;
    $: currentChapter = sourceChapters.find(c => c.id === activeChapterId)?.[lang] || sourceChapters[0].ru;

    // Цветовая тема
    $: themeColor = isAltMode ? 'text-[#39ff14]' : 'text-cyan';
    $: borderColor = isAltMode ? 'border-[#39ff14]' : 'border-cyan';
    $: bgHighlight = isAltMode ? 'bg-[#39ff14]/10' : 'bg-cyan/10';

    $: if (activeChapterId && contentArea) {
        contentArea.scrollTop = 0;
    }

    function selectChapter(id: number) {
        activeChapterId = id;
        isMobileMenuOpen = false;
    }

    function toggleAltMode() {
        isAltMode = !isAltMode;
        activeChapterId = 1;
    }

    function close() {
        dispatch('close');
    }
</script>

<div class="fixed inset-0 z-[60] bg-void/90 backdrop-blur-md flex items-center justify-center p-0 md:p-8" transition:fade={{ duration: 300 }}>

    <div
        class="w-full md:max-w-6xl h-full md:h-[85vh] bg-panel border-x-0 md:border md:rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row overflow-hidden relative transition-colors duration-500
        {isAltMode ? 'border-[#39ff14]/40 shadow-[0_0_50px_rgba(57,255,20,0.2)]' : 'border-cyan/20 shadow-[0_0_50px_rgba(0,240,255,0.1)]'}"
        in:fly={{ y: 50, duration: 500 }}
    >
        <!-- Top Line Decor -->
        <div class="absolute top-0 left-0 w-full h-1 z-30 transition-colors duration-500
            {isAltMode ? 'bg-gradient-to-r from-[#39ff14] via-black to-[#39ff14]' : 'bg-gradient-to-r from-cyan via-purple to-cyan'}">
        </div>

        <!-- === MOBILE HEADER === -->
        <div class="md:hidden flex justify-between items-center p-4 bg-black/80 border-b border-white/10 z-20 shrink-0">
            <button
                on:click={() => isMobileMenuOpen = !isMobileMenuOpen}
                class="flex flex-col items-start max-w-[50%]"
            >
                <span class="text-[10px] font-mono {themeColor}">CURRENT LOG:</span>
                <div class="flex items-center gap-2 text-white font-display font-bold text-sm leading-tight text-left">
                    <span class="truncate">{currentChapter.title}</span>
                    <svg class="w-4 h-4 transition-transform {isMobileMenuOpen ? 'rotate-180' : ''} shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </button>

            <!-- КНОПКИ УПРАВЛЕНИЯ (MOBILE) -->
            <div class="flex gap-2 shrink-0">
                <!-- 1. Взлом -->
                <button on:click={toggleAltMode} class="text-xs font-mono border border-gray-600 bg-black/50 px-2 py-1 rounded hover:border-white {isAltMode ? 'text-[#39ff14] border-[#39ff14]' : 'text-gray-500'}">
                    {!isAltMode ? '[?]' : '[!]'}
                </button>
                <!-- 2. Язык -->
                <button on:click={toggleLanguage} class="text-xs font-mono border border-gray-600 bg-black/50 px-2 py-1 rounded hover:border-white text-gray-300">
                    {$currentLang.toUpperCase()}
                </button>
                <!-- 3. Закрыть -->
                <button on:click={close} class="text-gray-400 hover:text-white bg-black/50 p-1 px-3 rounded border border-gray-600">✕</button>
            </div>
        </div>

        <!-- === SIDEBAR (DESKTOP LIST) === -->
        <div class="
            {isMobileMenuOpen ? 'flex' : 'hidden'}
            md:flex
            absolute md:static inset-0 z-10 md:z-auto bg-black/95 md:bg-black/40
            w-full md:w-1/3 border-r border-white/5 flex-col backdrop-blur-xl md:backdrop-blur-none"
        >
            <!-- Sidebar Header (DESKTOP) -->
            <div class="hidden md:flex p-6 border-b border-white/5 justify-between items-center">
                <div>
                    <h2 class="text-2xl font-display font-bold text-white">ARCHIVE</h2>
                    <p class="text-xs font-mono {themeColor} transition-colors">
                        {isAltMode ? 'CORRUPTED DATA' : 'DECRYPTED LOGS'}
                    </p>
                </div>

                <!-- КНОПКИ УПРАВЛЕНИЯ (DESKTOP) -->
                <div class="flex items-center gap-2">
                    <!-- 1. Взлом -->
                    <button
                        on:click={toggleAltMode}
                        class="text-xs font-bold font-mono border px-2 py-1 rounded transition-all
                        {isAltMode ? 'text-black bg-[#39ff14] border-[#39ff14] animate-pulse' : 'text-gray-600 border-gray-700 hover:text-red-500 hover:border-red-500'}"
                        title="Special Mode"
                    >
                        {isAltMode ? 'CRACKED' : '[ ! ]'}
                    </button>
                    <!-- 2. Язык -->
                    <button
                        on:click={toggleLanguage}
                        class="text-xs font-bold font-mono text-gray-400 border border-gray-600 px-3 py-1 rounded hover:text-white transition-all
                        {isAltMode ? 'hover:border-[#39ff14]' : 'hover:border-cyan'}"
                    >
                        [{ $currentLang.toUpperCase() }]
                    </button>
                </div>
            </div>

            <!-- Chapter List -->
            <div class="flex-1 overflow-y-auto scrollbar-thin p-4 space-y-2 mt-14 md:mt-0">
                {#each sourceChapters as chapter}
                    {@const content = chapter[lang]}
                    <button
                        class="w-full text-left p-4 rounded-lg border transition-all duration-200 group relative overflow-hidden
                        {activeChapterId === chapter.id
                            ? `${bgHighlight} ${borderColor} ${isAltMode ? 'text-[#39ff14]' : 'text-white'}`
                            : 'bg-transparent border-transparent hover:bg-white/5 text-gray-400'}"
                        on:click={() => selectChapter(chapter.id)}
                    >
                        {#if activeChapterId === chapter.id}
                            <div class="absolute left-0 top-0 bottom-0 w-1 {isAltMode ? 'bg-[#39ff14]' : 'bg-cyan'}" transition:slide></div>
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

        <!-- === CONTENT AREA === -->
        <div
            bind:this={contentArea}
            class="w-full md:w-2/3 bg-gradient-to-br from-panel to-black flex flex-col relative overflow-y-auto scrollbar-thin"
        >
            <div class="p-6 md:p-10 pb-4 shrink-0">
                <div class="flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full {isAltMode ? 'bg-[#39ff14] shadow-[0_0_10px_#39ff14]' : 'bg-purple'} animate-pulse"></span>
                    <span class="font-mono text-xs uppercase tracking-widest {isAltMode ? 'text-[#39ff14]' : 'text-purple'}">
                        {isAltMode ? 'ILLEGAL_ACCESS // ROOT' : 'Memory Bank Access'}
                    </span>
                </div>
                <h1 class="text-2xl md:text-4xl font-display font-bold text-white mb-2 leading-tight">{currentChapter.title}</h1>
                <p class="font-mono text-xs md:text-sm border-l-2 pl-3 {themeColor} {borderColor}">{currentChapter.subtitle}</p>
            </div>

            <div class="p-6 md:p-10 pt-2 space-y-4 pb-20">
                {#key activeChapterId + lang + isAltMode}

                    {#if sourceChapters.find(c => c.id === activeChapterId)?.soundtrack}
                        <div in:fade={{ duration: 500 }}>
                            <AmbientPlayer src="{base}{sourceChapters.find(c => c.id === activeChapterId)?.soundtrack}" />
                        </div>
                    {/if}

                    <div in:fade={{ duration: 300 }} class="space-y-4">
                        {#each currentChapter.blocks as block}

                            {#if block.type === 'text'}
                                <p class="text-gray-300 font-sans leading-relaxed text-lg">
                                    {block.content}
                                </p>

                            {:else if block.type === 'orion'}
                                <p class="font-sans text-lg border-l-2 pl-4 text-gray-200 {borderColor}">
                                    <span class="font-bold text-xs block mb-1 font-mono uppercase {themeColor}">Orion</span>
                                    {block.content}
                                </p>

                            {:else if block.type === 'onyx'}
                                <p class="font-sans text-lg border-l-2 border-purple pl-4 text-purple-100 italic bg-purple/5 p-2 rounded-r">
                                    <span class="text-purple font-bold text-xs block mb-1 font-mono uppercase">Onyx // System</span>
                                    {block.content}
                                </p>

                            {:else if block.type === 'system'}
                                <p class="font-mono text-sm text-gray-400 bg-gray-900/50 p-3 border border-gray-700 rounded">
                                    <span class="text-yellow-500 mr-2">⚠ SYSTEM:</span>
                                    {block.content}
                                </p>

                            {:else if block.type === 'code'}
                                <div class="font-mono text-xs md:text-sm text-green-500 bg-black p-4 rounded border border-green-900/50 shadow-inner overflow-x-auto whitespace-pre-wrap">
                                    <span class="animate-pulse opacity-80">{block.content}</span>
                                </div>

                            {:else if block.type === 'civilian'}
                                <p class="font-sans text-lg border-l-2 border-yellow-600 pl-4 text-yellow-100/80 bg-yellow-900/10 p-2 rounded-r">
                                    <span class="text-yellow-600 font-bold text-xs block mb-1 font-mono uppercase">Civilian</span>
                                    {block.content}
                                </p>

                            {:else if block.type === 'unknown'}
                                <p class="font-sans text-lg border-l-2 border-slate-400 pl-4 text-slate-200 bg-slate-800/30 p-2 rounded-r shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                                    <span class="text-slate-400 font-bold text-xs block mb-1 font-mono uppercase">???</span>
                                    {block.content}
                                </p>

                            {:else if block.type === 'enemy'}
                                <p class="font-mono text-sm text-red-400 bg-red-900/10 p-2 border-l-2 border-red-500">
                                    {block.content}
                                </p>

                            {:else}
                                <p class="font-sans text-lg border-l-2 border-gray-600 pl-4 text-gray-300">
                                    {block.content}
                                </p>
                            {/if}

                        {/each}
                    </div>
                {/key}

                <div class="pt-8 flex justify-center opacity-50 pb-8">
                    <span class="font-mono text-xs text-gray-500">*** END OF LOG ***</span>
                </div>
            </div>
        </div>

    </div>
</div>

<style>
    .scrollbar-thin::-webkit-scrollbar { width: 6px; }
    .scrollbar-thin::-webkit-scrollbar-track { background: #0a0a0a; }
    .scrollbar-thin::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
    .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: #00f0ff; }
</style>