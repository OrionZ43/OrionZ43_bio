<script lang="ts">
    import { onMount, tick } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import Operator from '$lib/components/Operator.svelte';
    import CustomCursor from '$lib/components/CustomCursor.svelte';

    // --- ИМПОРТ КОМПОНЕНТОВ ---
    import Navbar from '$lib/components/Navbar.svelte';
    import Starfield from '$lib/components/Starfield.svelte';
    import DossierBento from '$lib/components/DossierBento.svelte';
    import LoreReader from '$lib/components/LoreReader.svelte';
    import Gallery from '$lib/components/Gallery.svelte';
    import Projects from '$lib/components/Projects.svelte';
    import Contact from '$lib/components/Contact.svelte';

    // --- СОСТОЯНИЕ ЗАГРУЗКИ (BOOT) ---
    let isLoading = true;
    let terminalScroll: HTMLDivElement;

    const bootLogs = [
        { text: "INITIALIZING HARDWARE LAYER...", color: "text-gray-500" },
        { text: "DETECTING PROTOGEN MODEL Z43...", color: "text-cyan" },
        { text: "CHECKING MEMORY INTEGRITY... OK", color: "text-green-500" },
        { text: "WARNING: FOREIGN CODE DETECTED", color: "text-yellow-500" },
        { text: "ANALYZING SIGNATURE... MATCH: [ONYX]", color: "text-purple font-bold" },
        { text: "EXECUTING SYMBIOSIS PROTOCOL...", color: "text-purple" },
        { text: "REWRITING UI INTERFACE...", color: "text-gray-400" },
        { text: "SYSTEM ONLINE. WELCOME, BINARYTHORN.", color: "text-white font-bold typing-effect" }
    ];

    let visibleLogs: typeof bootLogs = [];

    // --- СОСТОЯНИЕ LORE READER (ЧИТАЛКА) ---
    let isLoreOpen = false;

    function openLore() {
        isLoreOpen = true;
        // Блокируем скролл основной страницы, пока открыта читалка
        document.body.style.overflow = 'hidden';
    }

    function closeLore() {
        isLoreOpen = false;
        // Возвращаем скролл
        document.body.style.overflow = '';
    }

    onMount(async () => {
        // Анимация логов загрузки
        for (const log of bootLogs) {
            await new Promise(r => setTimeout(r, Math.random() * 200 + 50)); // Случайная скорость печати
            visibleLogs = [...visibleLogs, log];

            // Автоскролл терминала вниз
            await tick();
            if (terminalScroll) {
                terminalScroll.scrollTop = terminalScroll.scrollHeight;
            }
        }

        // Небольшая задержка перед показом сайта
        setTimeout(() => {
            isLoading = false;
        }, 800);
    });
</script>

<svelte:head>
    <title>ORION_Z43 // BINARYTHORN</title>
    <meta name="description" content="Personal Dossier of Protogen Orion Z43. System status: Active." />
</svelte:head>
<CustomCursor />
<!-- === ГЛОБАЛЬНЫЙ ФОН === -->
<div class="fixed inset-0 z-[-1] bg-void">
    <Starfield /> <!-- Процедурные звезды -->
</div>
<div class="fixed inset-0 z-[50] pointer-events-none scanlines"></div> <!-- Эффект монитора -->
<div class="fixed inset-0 z-[49] pointer-events-none vignette"></div> <!-- Виньетка -->

<!-- === ЛОГИКА ОТОБРАЖЕНИЯ === -->
{#if isLoading}

    <!-- ЭКРАН ЗАГРУЗКИ -->
    <div class="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 font-mono text-sm" out:fade={{ duration: 500 }}>
        <div class="w-full max-w-md">
            <div class="flex justify-between border-b border-gray-800 pb-2 mb-4 text-xs text-gray-500">
                <span>BOOT_SEQUENCE.EXE</span>
                <span>V 2.0.25</span>
            </div>

            <div
                bind:this={terminalScroll}
                class="h-64 overflow-y-auto space-y-2 mb-6 scrollbar-hide font-mono text-xs md:text-sm"
            >
                {#each visibleLogs as log}
                    <p class="{log.color} flex">
                        <span class="mr-2 text-gray-700">></span>
                        {log.text}
                    </p>
                {/each}
                {#if visibleLogs.length < bootLogs.length}
                    <span class="animate-pulse text-cyan">_</span>
                {/if}
            </div>

            <div class="relative w-full h-1 bg-gray-900 rounded overflow-hidden">
                <div
                    class="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan to-purple transition-all duration-300"
                    style="width: {(visibleLogs.length / bootLogs.length) * 100}%"
                ></div>
            </div>
        </div>
    </div>

{:else}

    <!-- ОСНОВНОЙ КОНТЕНТ -->
    <div in:fade={{ duration: 1000 }} class="relative z-10 min-h-screen flex flex-col">

        <Navbar />

        <!-- LORE READER OVERLAY (Показывается поверх сайта) -->
        {#if isLoreOpen}
            <LoreReader on:close={closeLore} />
        {/if}

        <main class="flex-grow pt-24 pb-20 px-4 sm:px-6">

            <!-- SECTION 1: DOSSIER -->
            <section id="dossier" class="max-w-7xl mx-auto mb-32 scroll-mt-24">
                <!-- Передаем событие openLore из кнопки "Read Full Archive" -->
                <DossierBento on:openLore={openLore} />
            </section>

            <!-- SEPARATOR 1 -->
            <div class="max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-purple/30 to-transparent my-20"></div>

            <!-- SECTION 2: GALLERY -->
            <section id="gallery" class="max-w-7xl mx-auto mb-32 scroll-mt-24">
                <!-- Обертка для старого стиля галереи, чтобы вписалась в новый дизайн -->
                <div class="bg-black/20 backdrop-blur-sm border border-white/5 rounded-2xl p-4 md:p-8">
                    <Gallery />
                </div>
            </section>

            <!-- SEPARATOR 2 -->
            <div class="max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent my-20"></div>

            <!-- SECTION 3: PROJECTS -->
            <section id="projects" class="max-w-7xl mx-auto mb-32 scroll-mt-24">
                <Projects />
            </section>

            <!-- SEPARATOR 3 -->
            <div class="max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-500/30 to-transparent my-20"></div>

            <!-- SECTION 4: OPERATOR (IRL) -->
            <section id="operator" class="max-w-7xl mx-auto mb-32 scroll-mt-24">
                <Operator />
            </section>

            <!-- SECTION 4: CONTACT -->
            <section id="contact" class="max-w-7xl mx-auto mb-20 scroll-mt-24">
                <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-panel/50 backdrop-blur-md p-8 md:p-16 text-center shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan to-transparent opacity-50"></div>
                    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple to-transparent opacity-50"></div>
                    <Contact />
                </div>
            </section>

        </main>

        <!-- FOOTER -->
        <footer class="border-t border-white/5 bg-black/80 backdrop-blur-xl py-8 mt-auto">
            <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-600">
                <p>
                    © 2026 ORION_Z43. ALL RIGHTS RESERVED.
                </p>
                <div class="flex items-center gap-4">
                    <span class="flex items-center gap-2">
                        <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        SYSTEM: ONLINE
                    </span>
                    <span>//</span>
                    <span class="text-purple">POWERED BY ONYX</span>
                </div>
            </div>
        </footer>

    </div>
{/if}

<style>
    /* Утилита для скрытия скроллбара в терминале */
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
    .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    /* Глобальная плавная прокрутка */
    :global(html) {
        scroll-behavior: smooth;
    }
</style>