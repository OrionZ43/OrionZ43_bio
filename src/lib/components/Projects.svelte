<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { base } from '$app/paths';
    import SpotlightCard from './SpotlightCard.svelte';

    // Технический стек в виде массива для красивого рендера
    const techStack = [
        { name: 'SvelteKit', type: 'CORE' },
        { name: 'Tailwind CSS', type: 'STYLE' },
        { name: 'Leaflet.js', type: 'MAP ENGINE' },
        { name: 'Firebase', type: 'BACKEND' },
        { name: 'Vercel', type: 'HOSTING' },
        { name: 'Cloudinary', type: 'MEDIA' },
    ];
</script>

<div class="relative z-10">

    <!-- ЗАГОЛОВОК -->
    <div class="mb-12 border-b border-white/10 pb-6">
        <div class="flex items-center gap-2 mb-2">
            <span class="w-2 h-2 bg-purple rounded-sm animate-pulse"></span>
            <span class="font-mono text-xs text-purple tracking-widest">ACTIVE_MISSIONS // DEPLOYED</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-display font-bold text-white uppercase">
            System <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple to-cyan">Projects</span>
        </h2>
    </div>

    <!-- PROJECT CARD: PROTOMAP -->
    <SpotlightCard>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-panel/40 backdrop-blur-md rounded-xl overflow-hidden">

            <!-- LEFT: PREVIEW (MONITOR STYLE) -->
            <div class="relative group h-64 lg:h-auto overflow-hidden bg-black border-r border-white/5">
                <!-- Image -->
                <img
                    src="{base}/gallery/protomap_preview.png"
                    alt="ProtoMap Interface"
                    class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />

                <!-- Overlay Grid -->
                <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBWMGg0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-50 pointer-events-none"></div>

                <!-- Status Badge on Image -->
                <div class="absolute top-4 left-4">
                    <div class="px-3 py-1 bg-black/70 backdrop-blur border border-green-500/50 rounded flex items-center gap-2">
                        <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        <span class="text-[10px] font-mono font-bold text-green-400 tracking-wider">LIVE STATUS: ONLINE</span>
                    </div>
                </div>

                <!-- Hover Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <!-- RIGHT: INFO & TECH -->
            <div class="p-6 md:p-10 flex flex-col justify-between">

                <div>
                    <h3 class="text-3xl md:text-4xl font-display font-bold text-white mb-2">PROTOMAP</h3>
                    <p class="font-mono text-cyan text-xs mb-6 border-l-2 border-cyan pl-3">
                        GLOBAL CONNECTION NETWORK
                    </p>

                    <p class="text-gray-300 font-sans leading-relaxed mb-8">
                        Веб-приложение для объединения сообщества протогенов. Глобальная система трекинга, позволяющая регистрировать сигнатуры, отмечать геолокацию на карте мира, кастомизировать профили и устанавливать защищенные каналы связи. Выполнено в уникальной киберпанк-эстетике.
                    </p>

                    <!-- TECH STACK GRID -->
                    <div class="mb-8">
                        <span class="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-3">System Architecture:</span>
                        <div class="flex flex-wrap gap-2">
                            {#each techStack as tech}
                                <div class="px-3 py-1.5 bg-white/5 border border-white/10 rounded hover:border-cyan/50 hover:bg-cyan/5 transition-colors group cursor-default">
                                    <span class="text-[10px] font-mono text-gray-500 block group-hover:text-cyan transition-colors">{tech.type}</span>
                                    <span class="text-xs font-bold text-gray-300 group-hover:text-white transition-colors">{tech.name}</span>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>

                <!-- ACTIONS -->
                <div class="flex flex-wrap gap-4 pt-6 border-t border-white/5">
                    <a
                        href="https://proto-map.vercel.app"
                        target="_blank"
                        class="flex-1 min-w-[140px] py-3 bg-cyan text-black font-mono font-bold text-xs hover:bg-white transition-all uppercase tracking-widest text-center flex items-center justify-center gap-2 rounded shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)]"
                    >
                        <span>Launch System</span>
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>

                    <a
                        href="https://github.com/OrionZ43/ProtoMap"
                        target="_blank"
                        class="flex-1 min-w-[140px] py-3 bg-transparent border border-gray-600 text-gray-300 font-mono font-bold text-xs hover:border-white hover:text-white transition-all uppercase tracking-widest text-center flex items-center justify-center gap-2 rounded"
                    >
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
                        Source Code
                    </a>

                     <a
                        href="https://t.me/proto_map"
                        target="_blank"
                        class="flex-none px-4 py-3 bg-transparent border border-gray-600 text-gray-300 font-mono font-bold text-xs hover:border-[#229ED9] hover:text-[#229ED9] transition-all uppercase tracking-widest flex items-center justify-center rounded"
                        title="Telegram Chat"
                    >
                         <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                    </a>
                </div>

            </div>
        </div>
    </SpotlightCard>
</div>