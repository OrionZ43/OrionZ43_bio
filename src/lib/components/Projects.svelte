<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { base } from '$app/paths';
</script>

<div class="w-full max-w-6xl mx-auto text-center">
    <h2 class="text-4xl font-bold uppercase text-cyber-yellow mb-10" in:fade|global>
        //: АКТИВНЫЕ ПРОЕКТЫ
    </h2>
    <div
        class="project-card grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left p-6 md:p-8"
        in:fly={{ y: 50, duration: 800 }}
    >
        <div class="preview-container">
                <img src="/gallery/protomap_preview.png" alt="Превью проекта ProtoMap" />
        </div>

        <!-- Правая часть с описанием -->
        <div class="description-container flex flex-col h-full">
            <h3 class="text-3xl font-bold text-white font-display">МИССИЯ "PROTOMAP"</h3>
            <span class="text-sm text-green-400 font-mono mt-1 mb-4">СТАТУС: АКТИВНА // СЕТЬ РАСШИРЯЕТСЯ</span>

            <p class="text-gray-300 leading-relaxed mb-6">
                После потери связи с родным миром, основной задачей стала ассимиляция и поиск союзников. ProtoMap — это инструмент, созданный для этой цели. Глобальная сеть, позволяющая протогенам и другим кибернетическим формам жизни регистрировать свое присутствие, находить друг друга и создавать новые связи в этом секторе галактики.
            </p>

            <div class="mt-auto pt-4 flex flex-wrap gap-4">
                <a
                    href="https://proto-map.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="neon-cta-btn w-full sm:w-auto flex-grow text-center"
                >
                    Открыть Карту
                 </a>
                <a
                    href="https://t.me/proto_map"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="secondary-btn w-full sm:w-auto flex-grow text-center"
                >
                    Чат проекта
                </a>
                <a
                    href="https://github.com/OrionZ43/ProtoMap"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="secondary-btn w-full sm:w-auto flex-grow text-center"
                >
                    Исходный Код
                </a>
            </div>
        </div>
    </div>
</div>

<style>
    .project-card {
        background: rgba(10, 10, 10, 0.7);
        border: 1px solid rgba(0, 240, 255, 0.2);
        clip-path: polygon(0 15px, 15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%);
    }

    .preview-container video,
    .preview-container img {
        border: 2px solid rgba(0, 240, 255, 0.3);
    }

    .neon-cta-btn {
        @apply px-6 py-3 font-bold uppercase tracking-widest text-black bg-cyber-yellow border-2 border-cyber-yellow;
        box-shadow: 0 0 5px var(--cyber-yellow, #fcee0a), 0 0 15px var(--cyber-yellow, #fcee0a), inset 0 0 5px rgba(255, 255, 255, 0.5);
        transition: all 0.2s ease-in-out;
    }
    .neon-cta-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 10px var(--cyber-yellow, #fcee0a), 0 0 25px var(--cyber-yellow, #fcee0a), inset 0 0 5px rgba(255, 255, 255, 0.5);
    }

    .secondary-btn {
        @apply px-6 py-3 font-bold uppercase tracking-widest text-gray-300 border-2 border-gray-600;
        min-height: 52px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease-in-out;
    }
    .secondary-btn:hover {
        background: rgba(255, 255, 255, 0.9);
        border-color: #fff;
        color: black;
        box-shadow: 0 0 15px #fff;
        transform: translateY(-2px);
    }
</style>