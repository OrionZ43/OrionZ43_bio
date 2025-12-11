<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import { base } from '$app/paths';
    import Lightbox from './Lightbox.svelte';

    interface Artwork {
        id: number;
        src: string;
        title: string;
        category: 'CANON' | 'COMBAT' | 'LIFESTYLE' | 'SEASONAL' | 'OTHER';
        desc?: string;
    }

    const artworks: Artwork[] = [
        { id: 1, src: '/gallery/z43_official.jpg', title: 'MODEL Z43 // OFFICIAL', category: 'CANON', desc: 'Модель Z43. Базовая конфигурация брони.' },
        { id: 2, src: '/gallery/z43_canon.jpg', title: 'CANONICAL REFERENCE', category: 'CANON', desc: 'Каноничный вид Ориона. Полное сканирование экстерьера.' },
        { id: 3, src: '/gallery/portrait_hexagon.jpg', title: 'HEADSHOT ID', category: 'CANON', desc: 'Идентификационный портрет в шестиугольной рамке.' },

        { id: 4, src: '/gallery/combat_stance.jpg', title: 'COMBAT READY', category: 'COMBAT', desc: 'Боевая готовность. Плазменная винтовка активна.' },
        { id: 5, src: '/gallery/ninja_bridge.jpg', title: 'STEALTH PROTOCOL', category: 'COMBAT', desc: 'Тень на мосту. Традиционная маскировка типа "Ниндзя".' },
        { id: 18, src: '/gallery/chibi_stance.jpg', title: 'MINI THREAT', category: 'COMBAT', desc: 'Мини-угроза. Компактный боевой режим.' },

        { id: 6, src: '/gallery/black_hole.jpg', title: 'EVENT HORIZON', category: 'LIFESTYLE', desc: 'Горизонт событий. Наблюдение за сингулярностью.' },
        { id: 7, src: '/gallery/mew_cuddle.jpg', title: 'STAR FRIEND', category: 'LIFESTYLE', desc: 'Звездный друг. Контакт с органической формой жизни (Мью).' },
        { id: 8, src: '/gallery/king_on_hummer.jpg', title: 'GROUND VEHICLE', category: 'LIFESTYLE', desc: '42 братуха. Доминирование на Хаммере.' },
        { id: 9, src: '/gallery/wine_relax.jpg', title: 'RECHARGE CYCLE', category: 'LIFESTYLE', desc: 'Чилл. Восстановление энергии.' },
        { id: 10, src: '/gallery/beach_fun.jpg', title: 'HYDRO-COOLING', category: 'LIFESTYLE', desc: 'Водные процедуры. Тестирование гидроизоляции.' },
        { id: 11, src: '/gallery/sand_castle.jpg', title: 'SAND FORTRESS', category: 'LIFESTYLE', desc: 'Песчаная крепость. Архитектурные эксперименты.' },
        { id: 12, src: '/gallery/moth_hug.jpg', title: 'SOCIAL INTERACTION', category: 'LIFESTYLE', desc: 'Теплые объятия с дружественным юнитом.' },
        { id: 17, src: '/gallery/tongue_out.jpg', title: 'SYS_MOD_TONGUE', category: 'LIFESTYLE', desc: 'Видал какой длинный? Язык тоже кстати. Демонстрация модификаций.' },

        { id: 13, src: '/gallery/halloween_pumpkin_scary.jpg', title: 'TRICK OR TREAT', category: 'SEASONAL', desc: 'Сладость или гадость? >:3 Модификация лицевой панели.' },
        { id: 14, src: '/gallery/halloween_witch.jpg', title: 'WITCHCRAFT', category: 'SEASONAL', desc: 'Колдовской вечер. Косметический модуль "Ведьма".' },
        { id: 15, src: '/gallery/anubis.jpg', title: 'ANCIENT LEGACY', category: 'SEASONAL', desc: 'Наследие Древних. Образ: Анубис.' },

        { id: 99, src: '/gallery/in_a_box.jpg', title: 'LOGISTICS', category: 'OTHER', desc: 'На переработку. Транспортировочный контейнер.' },
        { id: 16, src: '/gallery/chibi_butterfly.jpg', title: 'IDLE MODE', category: 'OTHER', desc: 'Минута покоя. Взаимодействие с фауной.' },
        { id: 19, src: '/gallery/fluffy_sketch.jpg', title: 'GIGACHAD CONCEPT', category: 'OTHER', desc: 'Гигачад. Увеличенная мышечная масса (Sketch).' },
    ];

    let activeFilter = 'ALL';
    let selectedImage: Artwork | null = null;

    $: filteredArtworks = activeFilter === 'ALL'
        ? artworks
        : artworks.filter(art => art.category === activeFilter);

    const categories = ['ALL', 'CANON', 'COMBAT', 'LIFESTYLE', 'SEASONAL', 'OTHER'];
</script>

<div class="relative z-10">

    <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-white/10 pb-6">
        <div>
            <div class="flex items-center gap-2 mb-2">
                <span class="w-2 h-2 bg-cyan rounded-sm animate-pulse"></span>
                <span class="font-mono text-xs text-cyan tracking-widest">VISUAL_DB // ACCESS_GRANTED</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-display font-bold text-white uppercase">
                Visual <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple">Archive</span>
            </h2>
        </div>

        <div class="flex flex-wrap gap-2">
            {#each categories as cat}
                <button
                    on:click={() => activeFilter = cat}
                    class="px-4 py-2 text-xs font-mono font-bold border transition-all duration-300 relative group overflow-hidden rounded-sm
                    {activeFilter === cat
                        ? 'bg-cyan text-black border-cyan shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                        : 'bg-transparent text-gray-500 border-white/10 hover:border-cyan/50 hover:text-cyan'}"
                >
                    <span class="relative z-10">[{cat}]</span>
                    {#if activeFilter !== cat}
                        <div class="absolute inset-0 bg-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    {/if}
                </button>
            {/each}
        </div>
    </div>

    <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {#each filteredArtworks as art (art.id)}
            <div
                class="break-inside-avoid"
                in:fly={{ y: 20, duration: 400 }}
                animate:flip={{ duration: 400 }}
            >
                <button
                    class="group relative w-full overflow-hidden rounded-lg bg-gray-900 border border-white/5 hover:border-cyan/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] text-left"
                    on:click={() => selectedImage = art}
                    aria-label="View {art.title}"
                >
                    <div class="relative overflow-hidden">
                        <img
                            src="{base}{art.src}"
                            alt={art.title}
                            class="w-full h-auto object-cover transition-all duration-700
                            grayscale group-hover:grayscale-0 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            loading="lazy"
                        />

                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/20 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out pointer-events-none z-10"></div>

                        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                    </div>

                    <div class="absolute bottom-0 left-0 w-full p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <div class="flex justify-between items-end">
                            <div>
                                <p class="text-[10px] font-mono text-cyan mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    IMG_0{art.id} :: {art.category}
                                </p>
                                <h3 class="text-lg font-display font-bold text-white leading-none group-hover:text-cyan transition-colors">
                                    {art.title}
                                </h3>
                            </div>
                            <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div class="absolute top-2 left-2 w-2 h-2 border-l border-t border-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute top-2 right-2 w-2 h-2 border-r border-t border-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                </button>
            </div>
        {/each}
    </div>
</div>

{#if selectedImage}
    <Lightbox image={selectedImage} on:close={() => selectedImage = null} />
{/if}

<style>
    .columns-1, .columns-2, .columns-3 {
        column-fill: balance;
    }
</style>