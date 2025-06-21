<script lang="ts">
    import { onMount } from 'svelte';
    import { quintOut } from 'svelte/easing';
    import { fade } from 'svelte/transition';
    import Navbar from '$lib/components/Navbar.svelte';
    import Dossier from '$lib/components/Dossier.svelte';
    import Gallery from '$lib/components/Gallery.svelte';
    import Projects from '$lib/components/Projects.svelte';
    import Contact from '$lib/components/Contact.svelte';

    let isLoading = true;
    let loadingStep = 0;
    const loadingMessages = [
        '> ACCESSING ARCHIVE...',
        '> AUTHENTICATION REQUIRED... BYPASSING...',
        '> DECRYPTING FILES [ORION_Z43]...',
        '> RENDERING INTERFACE...',
        '> ACCESS GRANTED.'
    ];
    let displayedMessages: string[] = [];
    onMount(() => {
        const interval = setInterval(() => {
            if (loadingStep < loadingMessages.length) {
                displayedMessages = [...displayedMessages, loadingMessages[loadingStep]];
                loadingStep++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    isLoading = false;
                }, 700);
            }
        }, 500);
        return () => clearInterval(interval);
    });
</script>

<svelte:head>
    <title>{isLoading ? 'ACCESSING...' : 'ORION_Z43 // DOSSIER'}</title>
</svelte:head>

<div class="w-full min-h-screen bg-black text-gray-300 font-mono">

    {#if isLoading}
        <div class="w-full min-h-screen flex items-center justify-center p-4 sm:p-8" transition:fade={{ duration: 500 }}>
            <div class="w-full max-w-2xl">
                <div class="terminal-output">
                    {#each displayedMessages as message, i}
                        <p transition:fade={{ duration: 300, delay: i * 50 }}>
                            {message}
                            {#if i === loadingMessages.length - 1}
                                <span class="blinking-cursor">_</span>
                            {/if}
                        </p>
                    {/each}
                </div>
            </div>
        </div>
    {:else}
        <div class="main-content" transition:fade={{ duration: 1000 }}>
            <Navbar />

            <main>
                <section id="dossier">
                    <Dossier />
                </section>

                <section id="gallery">
                    <Gallery />
                </section>

                <section id="projects">
                    <Projects />
                </section>

                <section id="contact">
                    <Contact />
                </section>
            </main>
        </div>
    {/if}
</div>

<style>
    :global(body) {
        background-color: #000;
    }
    .terminal-output p {
        margin-bottom: 0.5rem;
        color: var(--cyber-yellow, #fcee0a);
        text-shadow: 0 0 5px var(--cyber-yellow, #fcee0a);
    }

    .blinking-cursor {
        animation: blink 1s step-end infinite;
    }
    @keyframes blink {
        from, to { opacity: 1; }
        50% { opacity: 0; }
    }

    section {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 6rem 2rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
</style>