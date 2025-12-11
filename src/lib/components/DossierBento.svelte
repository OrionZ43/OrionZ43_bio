<script lang="ts">
    import { base } from '$app/paths';
    import { createEventDispatcher } from 'svelte';
    import SpotlightCard from './SpotlightCard.svelte';
    import DecryptText from './DecryptText.svelte';

    const dispatch = createEventDispatcher();

    let card: HTMLElement;

    function handleTilt(e: MouseEvent) {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    function resetTilt() {
        if (!card) return;
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    }
</script>

<div class="w-full max-w-7xl mx-auto p-4 relative z-10">

    <div class="mb-12 text-center md:text-left relative">
        <div class="absolute -top-10 -left-10 text-[150px] font-display font-bold text-white/5 pointer-events-none select-none -z-10 hidden md:block">
            Z43
        </div>

        <div class="flex items-center justify-center md:justify-start gap-3 mb-1">
            <span class="text-cyan font-mono text-xs tracking-[0.3em] uppercase opacity-70">Project_ID:</span>
            <div class="px-2 py-0.5 bg-cyan/10 border border-cyan/40 rounded text-cyan font-mono text-xs font-bold shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                MODEL Z-43
            </div>
        </div>

        <h1 class="font-display font-bold leading-none tracking-tighter uppercase relative z-10">
            <div class="text-7xl md:text-9xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                ORION
            </div>

            <div class="text-4xl md:text-6xl mt-[-5px] md:mt-[-15px] font-bold">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-white to-purple animate-gradient-x">
                    BINARYTHORN
                </span>
            </div>
        </h1>

        <div class="flex items-center justify-center md:justify-start gap-4 text-gray-400 font-mono text-sm mt-6 pl-1">
            <span class="inline-block w-8 h-[2px] bg-purple"></span>
            <DecryptText text="SYSTEM STATUS: ROGUE // NETWORK: EARTH" speed={40} />
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-[300px_minmax(200px,auto)] gap-4">

        <div class="col-span-1 md:col-span-2 md:row-span-2 relative h-[500px] md:h-auto group perspective-container"
             on:mousemove={handleTilt} on:mouseleave={resetTilt} role="img" aria-label="Orion Z43 Art">

            <div
                bind:this={card}
                class="w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan/10 transition-transform duration-100 ease-out relative bg-black transform-style-3d"
            >
                <img src="{base}/orion_z43_art.png" alt="Orion Z43" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-105" />
                <div class="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80 pointer-events-none"></div>

                <div class="absolute bottom-6 left-6 font-mono z-30 pointer-events-none">
                    <h2 class="text-3xl font-display font-bold text-white drop-shadow-md">ORION</h2>
                    <p class="text-purple text-sm drop-shadow-md bg-black/50 inline-block px-1">SYMBIOTE: <span class="text-white">ONYX</span></p>
                </div>

                <div class="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
        </div>

        <SpotlightCard>
            <div class="relative p-6 h-full flex flex-col justify-between bg-panel/50 backdrop-blur-sm overflow-hidden group">

                <div class="absolute inset-0 opacity-10"
                     style="background-image: radial-gradient(#00f0ff 1px, transparent 1px); background-size: 20px 20px;">
                </div>

                <div class="flex justify-between items-start relative z-10">
                    <div>
                        <span class="text-cyan font-mono text-[10px] tracking-widest uppercase">System Integrity</span>
                        <div class="flex gap-1 mt-1">
                            <span class="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                            <span class="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-75"></span>
                            <span class="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-150"></span>
                        </div>
                    </div>
                    <i class="font-mono text-[10px] text-gray-500">CPU_01</i>
                </div>

                <div class="relative flex items-center justify-center py-4">
                    <!-- Rotating Rings -->
                    <div class="absolute w-24 h-24 border-2 border-dashed border-white/10 rounded-full animate-spin-slow"></div>
                    <div class="absolute w-20 h-20 border border-cyan/20 rounded-full animate-reverse-spin"></div>

                    <div class="text-center relative z-10">
                        <div class="text-5xl font-bold font-display text-white group-hover:text-cyan transition-colors drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                            98<span class="text-2xl align-top">%</span>
                        </div>
                    </div>
                </div>

                <div class="relative z-10">
                    <div class="flex justify-between text-[10px] font-mono text-gray-400 mb-1">
                        <span>NEURAL_SYNC</span>
                        <span class="text-white">STABLE</span>
                    </div>
                    <div class="flex items-end gap-[2px] h-6 opacity-50">
                        {#each Array(15) as _, i}
                            <div class="w-full bg-cyan transition-all duration-300 animate-equalizer"
                                 style="height: {Math.random() * 100}%; animation-delay: {i * 0.1}s"></div>
                        {/each}
                    </div>
                </div>
            </div>
        </SpotlightCard>

        <SpotlightCard>
            <div class="relative p-6 h-full flex flex-col justify-center items-center text-center bg-panel/50 backdrop-blur-sm overflow-hidden group">

                <div class="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none transition-opacity group-hover:opacity-40">
                    <div class="w-[1px] h-full bg-purple"></div>
                    <div class="h-[1px] w-full bg-purple absolute"></div>
                    <div class="w-32 h-32 border border-purple/50 rounded-full absolute"></div>
                </div>

                <div class="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/30"></div>
                <div class="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/30"></div>
                <div class="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-white/30"></div>
                <div class="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/30"></div>

                <div class="relative z-10">
                    <div class="text-[10px] font-mono text-purple mb-2 tracking-[0.3em] uppercase">Weapon System</div>
                    <h3 class="text-4xl font-display font-bold text-white group-hover:text-purple transition-colors duration-300 group-hover:scale-110 transform">
                        Z-43
                    </h3>
                    <div class="mt-2 px-3 py-1 bg-purple/10 border border-purple/30 rounded text-[10px] font-mono text-purple-200 uppercase">
                        Void Cannon
                    </div>
                </div>

                <div class="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
                    <div class="h-full bg-purple w-full animate-charge origin-left"></div>
                </div>
            </div>
        </SpotlightCard>

        <div class="col-span-1 md:col-span-2 h-full">
            <SpotlightCard>
                <div class="p-6 h-full flex flex-col bg-panel/50 backdrop-blur-sm">
                    <div class="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                         <span class="text-cyan font-bold font-mono">LOG_ENTRY:</span>
                         <span class="text-gray-500 font-mono text-sm">#998.4_ORIGIN</span>
                    </div>

                    <div class="overflow-y-auto pr-2 space-y-4 text-gray-400 font-body leading-relaxed max-h-[200px] scrollbar-thin">
                        <p>
                            <span class="text-white font-bold">ОШИБКА СИНХРОНИЗАЦИИ.</span> Пробуждение было похоже на всплытие с огромной глубины. Я помнил холодный зал монолита и сферу. Но теперь моя рука была черной, как сама пустота.
                        </p>
                        <p>
                            <span class="text-purple italic">"Ты опоздал на три миллиона лет, мародер. Но ты подойдешь."</span> — голос Оникса звучал прямо в моем коде. Мы стали единым целым.
                        </p>
                        <p class="text-sm text-gray-500">
                            [...DATA FRAGMENTED...]
                        </p>
                    </div>

                    <div class="mt-auto pt-4 flex justify-end">
                         <button
                            on:click={() => dispatch('openLore')}
                            class="text-xs font-mono text-cyan border border-cyan/30 px-4 py-2 hover:bg-cyan/10 hover:border-cyan hover:text-white transition-all flex items-center gap-2 group uppercase tracking-widest"
                         >
                            Read Full Archive <span class="group-hover:translate-x-1 transition-transform">-></span>
                         </button>
                    </div>
                </div>
            </SpotlightCard>
        </div>

    </div>
</div>

<style>
    .animate-gradient-x {
        background-size: 200% 200%;
        animation: gradient-move 3s ease infinite;
    }

    @keyframes gradient-move {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

    .scrollbar-thin::-webkit-scrollbar { width: 4px; }
    .scrollbar-thin::-webkit-scrollbar-track { background: #1a1a1a; }
    .scrollbar-thin::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
    .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: #00f0ff; }

    .transform-style-3d {
        transform-style: preserve-3d;
    }
    @keyframes reverse-spin {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
    }
    .animate-reverse-spin {
        animation: reverse-spin 10s linear infinite;
    }

    @keyframes equalizer {
        0%, 100% { height: 20%; }
        50% { height: 90%; }
    }
    .animate-equalizer {
        animation: equalizer 1s ease-in-out infinite;
    }

    @keyframes charge {
        0% { transform: scaleX(0); opacity: 0.5; }
        50% { opacity: 1; }
        100% { transform: scaleX(1); opacity: 0.5; }
    }
    .animate-charge {
        animation: charge 3s ease-in-out infinite;
    }
</style>