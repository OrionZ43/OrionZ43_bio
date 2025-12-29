<script lang="ts">
    import { fade, fly, slide } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    import { loreChapters } from '$lib/data/lore';
    import { currentLang, toggleLanguage } from '$lib/stores/language';

    const dispatch = createEventDispatcher();
    let activeChapterId = 1;

    // Состояние для мобильного меню глав
    let isMobileMenuOpen = false;

    // Ссылка на контейнер с текстом для скролла
    let contentArea: HTMLElement;

    // Реактивность
    $: lang = $currentLang;
    $: currentChapter = loreChapters.find(c => c.id === activeChapterId)?.[lang] || loreChapters[0].ru;

    // Скролл наверх при смене главы
    $: if (activeChapterId && contentArea) {
        contentArea.scrollTop = 0;
    }

    function selectChapter(id: number) {
        activeChapterId = id;
        isMobileMenuOpen = false; // Закрываем меню на мобильном после выбора
    }

    function close() {
        dispatch('close');
    }
</script>

<!-- BACKDROP -->
<div class="fixed inset-0 z-[60] bg-void/90 backdrop-blur-md flex items-center justify-center p-0 md:p-8" transition:fade={{ duration: 300 }}>

    <!-- MAIN CONTAINER -->
    <!-- На мобильном h-full (весь экран), на ПК h-[85vh] и скругления -->
    <div
        class="w-full md:max-w-6xl h-full md:h-[85vh] bg-panel border-x-0 md:border border-cyan/20 md:rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.1)] flex flex-col md:flex-row overflow-hidden relative"
        in:fly={{ y: 50, duration: 500 }}
    >
        <!-- DECORATIVE LINE -->
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan via-purple to-cyan z-30"></div>

        <!-- === MOBILE HEADER (Только на телефонах) === -->
        <div class="md:hidden flex justify-between items-center p-4 bg-black/80 border-b border-white/10 z-20 shrink-0">
            <!-- Кнопка открытия списка глав -->
            <button
                on:click={() => isMobileMenuOpen = !isMobileMenuOpen}
                class="flex flex-col items-start max-w-[70%]"
            >
                <span class="text-[10px] font-mono text-cyan">CURRENT LOG:</span>
                <div class="flex items-center gap-2 text-white font-display font-bold text-sm leading-tight text-left">
                    {currentChapter.title}
                    <svg class="w-4 h-4 transition-transform {isMobileMenuOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </button>

            <!-- Управление -->
            <div class="flex gap-2">
                <button on:click={toggleLanguage} class="text-xs font-mono border border-gray-600 bg-black/50 px-2 py-1 rounded hover:border-white text-gray-300">
                    {$currentLang.toUpperCase()}
                </button>
                <button on:click={close} class="text-gray-400 hover:text-white bg-black/50 p-1 px-3 rounded border border-gray-600">✕</button>
            </div>
        </div>

        <!-- === SIDEBAR (CHAPTER LIST) === -->
        <!-- На мобильном это выпадающее меню (absolute), на ПК - колонка (static) -->
        <div class="
            {isMobileMenuOpen ? 'flex' : 'hidden'}
            md:flex
            absolute md:static inset-0 z-10 md:z-auto bg-black/95 md:bg-black/40
            w-full md:w-1/3 border-r border-white/5 flex-col backdrop-blur-xl md:backdrop-blur-none"
        >
            <!-- Header списка (Только ПК) -->
            <div class="hidden md:flex p-6 border-b border-white/5 justify-between items-center">
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

            <!-- Список глав -->
            <div class="flex-1 overflow-y-auto scrollbar-thin p-4 space-y-2 mt-14 md:mt-0">
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

            <!-- Footer списка (Кнопка закрытия на ПК) -->
            <div class="p-6 border-t border-white/5 hidden md:block">
                <button on:click={close} class="w-full py-3 border border-white/20 text-gray-400 hover:text-white hover:border-white hover:bg-white/5 font-mono text-sm transition-all uppercase tracking-widest">
                    // CLOSE ARCHIVE
                </button>
            </div>
        </div>

        <!-- === CONTENT AREA (TEXT) === -->
        <div
            bind:this={contentArea}
            class="w-full md:w-2/3 bg-gradient-to-br from-panel to-black flex flex-col relative overflow-y-auto scrollbar-thin"
        >
            <!-- Header контента -->
            <div class="p-6 md:p-10 pb-4 shrink-0">
                <div class="flex items-center gap-2 mb-2">
                    <span class="w-2 h-2 rounded-full bg-purple animate-pulse"></span>
                    <span class="font-mono text-xs text-purple uppercase tracking-widest">Memory Bank Access</span>
                </div>
                <h1 class="text-2xl md:text-4xl font-display font-bold text-white mb-2 leading-tight">{currentChapter.title}</h1>
                <p class="font-mono text-cyan text-xs md:text-sm border-l-2 border-cyan pl-3">{currentChapter.subtitle}</p>
            </div>

            <!-- Текст -->
            <div class="p-6 md:p-10 pt-2 space-y-4 pb-20">
                {#key activeChapterId + lang}
                    <div in:fade={{ duration: 300 }} class="space-y-4">
                        {#each currentChapter.blocks as block}

                            <!-- 1. TEXT -->
                            {#if block.type === 'text'}
                                <p class="text-gray-300 font-sans leading-relaxed text-lg">
                                    {block.content}
                                </p>

                            <!-- 2. ORION -->
                            {:else if block.type === 'orion'}
                                <p class="font-sans text-lg border-l-2 border-cyan pl-4 text-cyan-100">
                                    <span class="text-cyan font-bold text-xs block mb-1 font-mono uppercase">Orion</span>
                                    {block.content}
                                </p>

                            <!-- 3. ONYX -->
                            {:else if block.type === 'onyx'}
                                <p class="font-sans text-lg border-l-2 border-purple pl-4 text-purple-100 italic bg-purple/5 p-2 rounded-r">
                                    <span class="text-purple font-bold text-xs block mb-1 font-mono uppercase">Onyx // System</span>
                                    {block.content}
                                </p>

                            <!-- 4. SYSTEM -->
                            {:else if block.type === 'system'}
                                <p class="font-mono text-sm text-gray-400 bg-gray-900/50 p-3 border border-gray-700 rounded">
                                    <span class="text-yellow-500 mr-2">⚠ SYSTEM:</span>
                                    {block.content}
                                </p>

                            <!-- 5. ENEMY -->
                            {:else if block.type === 'enemy'}
                                <p class="font-mono text-sm text-red-400 bg-red-900/10 p-2 border-l-2 border-red-500">
                                    {block.content}
                                </p>

                            <!-- 6. CODE -->
                            {:else if block.type === 'code'}
                                <div class="font-mono text-xs md:text-sm text-green-500 bg-black p-4 rounded border border-green-900/50 shadow-inner overflow-x-auto whitespace-pre-wrap">
                                    <span class="animate-pulse opacity-80">{block.content}</span>
                                </div>

                            <!-- 7. CIVILIAN -->
                            {:else if block.type === 'civilian'}
                                <p class="font-sans text-lg border-l-2 border-yellow-600 pl-4 text-yellow-100/80 bg-yellow-900/10 p-2 rounded-r">
                                    <span class="text-yellow-600 font-bold text-xs block mb-1 font-mono uppercase">Civilian</span>
                                    {block.content}
                                </p>

                            <!-- 8. UNKNOWN -->
                            {:else if block.type === 'unknown'}
                                <p class="font-sans text-lg border-l-2 border-slate-400 pl-4 text-slate-200 bg-slate-800/30 p-2 rounded-r shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                                    <span class="text-slate-400 font-bold text-xs block mb-1 font-mono uppercase">???</span>
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