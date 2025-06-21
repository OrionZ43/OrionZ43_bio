<script lang="ts">
    import { fade, fly } from 'svelte/transition';
</script>

<div class="w-full max-w-3xl mx-auto text-center">
    <div
        class="contact-container p-8 md:p-12"
        in:fly={{ y: 50, duration: 800 }}
    >
        <h2 class="text-4xl font-bold uppercase text-cyber-yellow mb-4 font-display">
            //: СВЯЗЬ
        </h2>

        <p class="text-xl text-gray-300 leading-relaxed max-w-xl mx-auto mb-8">
            Есть идеи для коллаборации, интересные проекты или просто хочешь пообщаться? Я всегда открыт для общения. Выбери удобный канал связи.
        </p>

        <div class="flex flex-wrap justify-center gap-4">
             <a href="https://t.me/Orion_Z43" target="_blank" rel="noopener noreferrer" class="contact-button">
                <span>Telegram</span>
             </a>
             <a href="https://github.com/OrionZ43" target="_blank" rel="noopener noreferrer" class="contact-button">
                <span>GitHub</span>
             </a>
             <a href="mailto:kovalevd4118@gmail.com" class="contact-button">
                <span>Email</span>
             </a>
        </div>
    </div>
</div>

<style>
    .contact-container {
    }

    .contact-button {
        @apply relative inline-block px-8 py-4 font-bold uppercase tracking-widest text-lg;
        color: var(--cyber-cyan, #00f0ff);
        background: transparent;
        border: 2px solid var(--cyber-cyan, #00f0ff);
        overflow: hidden;
        transition: color 0.4s ease-in-out;
    }

    .contact-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: var(--cyber-cyan, #00f0ff);
        transition: all 0.4s ease-in-out;
        z-index: 0;
    }
    .contact-button:hover::before {
        left: 0;
    }

    .contact-button span {
        position: relative;
        z-index: 1;
    }
    .contact-button:hover span {
        color: black;
    }
</style>