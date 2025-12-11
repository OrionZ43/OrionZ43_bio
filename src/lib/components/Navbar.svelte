<script lang="ts">
    import { onMount } from 'svelte';
    import { slide, fade } from 'svelte/transition';
    import GlitchText from './GlitchText.svelte';
    import { currentLang, toggleLanguage } from '$lib/stores/language';

    let isScrolled = false;
    let activeSection = 'dossier';
    let isMobileMenuOpen = false;

    $: navItems = [
        { id: 'dossier', label: $currentLang === 'ru' ? 'ДОСЬЕ' : 'DOSSIER' },
        { id: 'gallery', label: $currentLang === 'ru' ? 'АРХИВ' : 'VISUALS' },
        { id: 'projects', label: $currentLang === 'ru' ? 'ПРОЕКТЫ' : 'MISSIONS' },
        { id: 'contact', label: $currentLang === 'ru' ? 'СВЯЗЬ' : 'UPLINK' }
    ];

    onMount(() => {
        const handleScroll = () => {
            isScrolled = window.scrollY > 20;

            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 150;

            for (const section of sections) {
                if (section &&
                    section.offsetTop <= scrollPosition &&
                    (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    activeSection = section.id;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    function scrollTo(id: string) {
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        isMobileMenuOpen = false;
    }
</script>

<nav
    class="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out px-4
    {isScrolled ? 'pt-4' : 'pt-6'}"
>
    <div
        class="w-full max-w-6xl bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-cyan/5 transition-all duration-500 relative overflow-hidden flex justify-between items-center
        {isScrolled ? 'py-3 px-6' : 'py-4 px-8'}"
    >
        <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent opacity-50 pointer-events-none"></div>

        <button
            on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            class="relative group z-20 flex items-center gap-2 shrink-0"
        >
            <div class="w-2 h-2 bg-cyan rounded-full animate-pulse shadow-[0_0_10px_#00f0ff]"></div>
            <GlitchText text="ORION_Z43" size="text-lg md:text-xl" color="text-white" />
        </button>

        <div class="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5 absolute left-1/2 -translate-x-1/2">
            {#each navItems as item}
                <button
                    on:click={() => scrollTo(item.id)}
                    class="relative px-5 py-2 rounded-full text-xs font-mono font-bold tracking-widest transition-all duration-300
                    {activeSection === item.id ? 'text-black' : 'text-gray-400 hover:text-white'}"
                >
                    {#if activeSection === item.id}
                        <div
                            class="absolute inset-0 bg-cyan rounded-full shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                            in:fade={{ duration: 200 }}
                            out:fade={{ duration: 200 }}
                        ></div>
                    {/if}

                    <span class="relative z-10">{item.label}</span>
                </button>
            {/each}
        </div>

        <div class="flex items-center gap-4">

            <button
                on:click={toggleLanguage}
                class="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded hover:border-cyan/50 transition-all group"
                aria-label="Switch Language"
            >
                <span class="text-[10px] font-bold font-mono transition-colors" class:text-white={$currentLang === 'ru'} class:text-gray-600={$currentLang === 'en'}>RU</span>
                <span class="text-[10px] text-gray-700">/</span>
                <span class="text-[10px] font-bold font-mono transition-colors" class:text-white={$currentLang === 'en'} class:text-gray-600={$currentLang === 'ru'}>EN</span>
            </button>

            <div class="hidden lg:flex flex-col items-end text-[10px] font-mono leading-tight text-gray-500 border-l border-white/10 pl-4">
                <div class="flex items-center gap-1">
                    <span>NET:</span>
                    <span class="text-cyan">SECURE</span>
                </div>
                <div class="flex items-center gap-1">
                    <span>LOC:</span>
                    <span class="text-purple">EARTH</span>
                </div>
            </div>

            <button
                class="md:hidden text-white p-2 relative z-20"
                on:click={() => isMobileMenuOpen = !isMobileMenuOpen}
                aria-label="Menu"
            >
                <div class="w-6 h-5 flex flex-col justify-between items-end">
                    <span class="w-full h-0.5 bg-white transition-all {isMobileMenuOpen ? 'rotate-45 translate-y-2.5 bg-cyan' : ''}"></span>
                    <span class="w-3/4 h-0.5 bg-white transition-all {isMobileMenuOpen ? 'opacity-0' : ''}"></span>
                    <span class="w-full h-0.5 bg-white transition-all {isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-cyan' : ''}"></span>
                </div>
            </button>
        </div>
    </div>
</nav>

{#if isMobileMenuOpen}
    <div
        class="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8"
        transition:fade={{ duration: 300 }}
    >
        <div class="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-3xl"></div>
        </div>

        {#each navItems as item, i}
            <button
                on:click={() => scrollTo(item.id)}
                class="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 hover:from-cyan hover:to-white transition-all duration-300 uppercase"
                in:slide={{ delay: i * 50, duration: 400 }}
            >
                {item.label}
            </button>
        {/each}

        <button
            on:click={toggleLanguage}
            class="mt-8 px-6 py-2 border border-white/20 rounded-full font-mono text-cyan hover:bg-cyan/10 transition-colors"
        >
            LANGUAGE: <span class="font-bold text-white">{$currentLang.toUpperCase()}</span>
        </button>

        <div class="absolute bottom-10 text-xs font-mono text-gray-600">
            // SYSTEM NAVIGATION //
        </div>
    </div>
{/if}

<style>
    button {
        -webkit-tap-highlight-color: transparent;
    }
</style>