<script lang="ts">
    import { onMount } from 'svelte';
    import { slide, fade } from 'svelte/transition';
    let isMenuOpen = false;

    function scrollTo(selector: string) {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        isMenuOpen = false;
    }

    function handleClickOutside(event: MouseEvent) {
        const nav = document.querySelector('nav');
        if (nav && !nav.contains(event.target as Node)) {
            isMenuOpen = false;
        }
    }

    onMount(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    });
</script>

<nav class="fixed top-0 left-0 right-0 z-50 p-4 font-mono text-sm bg-black/30 backdrop-blur-lg border-b border-gray-500/20">
    <div class="container mx-auto flex justify-between items-center">
        <button on:click={() => scrollTo('#dossier')} class="logo glitch-text" data-text="ORION_Z43">ORION_Z43</button>

        <div class="hidden md:flex space-x-6 nav-links">
            <button on:click={() => scrollTo('#dossier')}>//:ДОСЬЕ</button>
            <button on:click={() => scrollTo('#gallery')}>//:ГАЛЕРЕЯ</button>
            <button on:click={() => scrollTo('#projects')}>//:ПРОЕКТЫ</button>
            <button on:click={() => scrollTo('#contact')}>//:СВЯЗЬ</button>
        </div>

        <div class="md:hidden">
            <button on:click={() => isMenuOpen = !isMenuOpen} class="burger-btn" aria-label="Открыть меню">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>
    </div>

    {#if isMenuOpen}
        <div
            class="mobile-menu md:hidden mt-4 pt-4 border-t border-gray-500/20"
            transition:slide={{ duration: 300, axis: 'y' }}
        >
            <button on:click={() => scrollTo('#dossier')} class="mobile-menu-link">//:ДОСЬЕ</button>
            <button on:click={() => scrollTo('#gallery')} class="mobile-menu-link">//:ГАЛЕРЕЯ</button>
            <button on:click={() => scrollTo('#projects')} class="mobile-menu-link">//:ПРОЕКТЫ</button>
            <button on:click={() => scrollTo('#contact')} class="mobile-menu-link">//:СВЯЗЬ</button>
        </div>
    {/if}
</nav>

<style>
    nav {
        transition: background-color 0.3s, border-color 0.3s;
    }
    .logo {
        @apply text-lg font-bold uppercase tracking-widest cursor-pointer;
        color: var(--cyber-yellow, #fcee0a);
        text-shadow: 0 0 5px var(--cyber-yellow, #fcee0a);
    }

    .nav-links button {
        @apply uppercase tracking-wider text-gray-400;
        transition: all 0.2s ease-in-out;
    }
    .nav-links button:hover {
        color: var(--cyber-yellow, #fcee0a);
        text-shadow: 0 0 8px var(--cyber-yellow, #fcee0a);
        transform: translateY(-2px);
    }

    .burger-btn {
        @apply p-2 text-gray-300 hover:text-cyber-yellow transition-colors;
    }

    .mobile-menu {
        @apply flex flex-col items-center space-y-2;
    }
    .mobile-menu-link {
        @apply w-full text-center py-3 uppercase tracking-wider text-gray-300 rounded-md;
        transition: background-color 0.2s, color 0.2s;
    }
    .mobile-menu-link:hover {
        background-color: rgba(252, 238, 10, 0.1);
        color: var(--cyber-yellow, #fcee0a);
    }
</style>