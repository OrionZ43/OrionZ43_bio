<script lang="ts">
    import { base } from '$app/paths';
    import GlitchText from './GlitchText.svelte';
</script>

<div class="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-10">

    <!-- LEFT COLUMN: CHARACTER VISUAL -->
    <div class="lg:col-span-5 relative group">
        <!-- Рамка "Монолит" -->
        <div class="absolute -inset-1 bg-gradient-to-b from-orion-cyan to-onyx-purple opacity-30 group-hover:opacity-70 blur transition duration-500"></div>
        <div class="relative bg-black p-2 clip-path-tech">
            <img src="{base}/orion_z43_art.png" alt="Orion Z43" class="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition duration-500 grayscale-[20%] group-hover:grayscale-0" />

            <!-- HUD Overlay on Image -->
            <div class="absolute bottom-4 left-4 font-mono text-xs text-orion-cyan">
                <p>SYNC RATE: <span class="text-white animate-pulse">98.4%</span></p>
                <p>SYMBIOTE: <span class="text-onyx-purple">ONYX_ACTIVE</span></p>
            </div>
        </div>

        <!-- Stats Grid -->
        <div class="mt-6 grid grid-cols-2 gap-2 font-mono text-xs">
            <div class="bg-onyx-dim border border-white/10 p-3">
                <span class="text-gray-500 block mb-1">CLASS</span>
                <span class="text-white">PROTOGEN [Z43]</span>
            </div>
            <div class="bg-onyx-dim border border-white/10 p-3">
                <span class="text-gray-500 block mb-1">STATUS</span>
                <span class="text-orion-cyan">WANTED / ALIVE</span>
            </div>
            <div class="bg-onyx-dim border border-white/10 p-3 col-span-2 flex justify-between items-center">
                <span class="text-gray-500">WEAPONRY</span>
                <span class="text-onyx-purple font-bold">VOID CANNON / NANITES</span>
            </div>
        </div>
    </div>

    <!-- RIGHT COLUMN: LORE DATA -->
    <div class="lg:col-span-7 space-y-8">

        <!-- Header -->
        <div>
            <div class="flex items-center space-x-2 text-onyx-purple mb-2">
                <span class="animate-pulse">●</span>
                <span class="font-mono text-xs tracking-[0.2em]">CLASSIFIED DATA</span>
            </div>
            <h1 class="text-5xl md:text-6xl font-display font-bold text-white mb-2 uppercase leading-none">
                Binary<span class="text-transparent bg-clip-text bg-gradient-to-r from-orion-cyan to-onyx-purple">thorn</span>
            </h1>
            <p class="font-mono text-gray-400 text-sm border-l-2 border-orion-cyan pl-4">
                // ИНДЕКС: ОРИОН_Z43<br>
                // ТЕКУЩАЯ ЛОКАЦИЯ: СЕКТОР ЗЕМЛЯ, ПРОМЗОНА-7
            </p>
        </div>

        <!-- Lore Log Tabs (Styled) -->
        <div class="space-y-6">

            <div class="bg-onyx-dim/50 border-l-4 border-onyx-purple p-6 hover:bg-onyx-dim transition-colors group">
                <h3 class="font-display text-xl text-white mb-2 group-hover:text-onyx-purple transition-colors">
                    <span class="text-xs font-mono text-gray-500 mr-2">LOG_01:</span>
                    ГРОБНИЦА ПУСТОТЫ
                </h3>
                <p class="font-sans text-gray-300 leading-relaxed font-light">
                    Космос в секторе Омикрон-9 был голодным. Я искал металлолом, а нашел <span class="text-white font-medium">Монолит</span>. Черный обсидиан, поглощающий свет. Внутри парил Он. Сфера из текучего металла. Я совершил ошибку — я прикоснулся. <br><br>
                    <span class="text-onyx-purple italic">"Ты опоздал на три миллиона лет, мародер. Но ты подойдешь."</span>
                </p>
            </div>

            <div class="bg-onyx-dim/50 border-l-4 border-orion-cyan p-6 hover:bg-onyx-dim transition-colors group">
                <h3 class="font-display text-xl text-white mb-2 group-hover:text-orion-cyan transition-colors">
                    <span class="text-xs font-mono text-gray-500 mr-2">LOG_02:</span>
                    ПРОТОКОЛ Z-43
                </h3>
                <p class="font-sans text-gray-300 leading-relaxed font-light">
                    Оникс — не вирус. Он называет себя "софтом", а меня — "железом". Когда наемники "Гелиоса" загнали нас в угол, моя рука перестала быть моей. Черная материя перестроилась. Оружие Z-43.<br>
                    Выстрел не издал звука. Он просто стер вражеский флагман из реальности. <span class="text-orion-cyan">Ошибка: Цель не найдена.</span>
                </p>
            </div>

            <div class="bg-onyx-dim/50 border-l-4 border-white p-6 hover:bg-onyx-dim transition-colors group">
                <h3 class="font-display text-xl text-white mb-2">
                    <span class="text-xs font-mono text-gray-500 mr-2">LOG_03:</span>
                    НОВАЯ ЖИЗНЬ
                </h3>
                <p class="font-sans text-gray-300 leading-relaxed font-light">
                    Мы бежали на Землю. В трущобы. Оникс прячется в моей нейросети, появляясь как голограмма черного лиса. Мы — ошибка системы. Двоичный код, ставший плотью. <br>
                    Мое имя — <span class="font-bold text-white">Байнариторн</span>. И я больше не мусорщик.
                </p>
            </div>

        </div>

    </div>
</div>

<style>
    .clip-path-tech {
        clip-path: polygon(
            0 0,
            100% 0,
            100% 85%,
            90% 100%,
            0 100%,
            0 15%
        );
    }
</style>