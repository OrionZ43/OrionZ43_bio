<script lang="ts">
    import { base } from '$app/paths';
    import SpotlightCard from './SpotlightCard.svelte';
    import { onMount } from 'svelte';

    // Живое время (Минск)
    let time = '';
    onMount(() => {
        const updateTime = () => {
            time = new Date().toLocaleTimeString('ru-RU', { timeZone: 'Europe/Minsk', hour: '2-digit', minute: '2-digit' });
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    });

    // Данные о железе
    const hardware = [
        {
            name: "Google Pixel 9 Pro Fold",
            type: "MOBILE TERMINAL",
            image: "/operator/pixel_fold.png",
            specsLeft: [
                { label: "SOC", val: "Google Tensor G4" },
                { label: "RAM", val: "16GB LPDDR5X" },
                { label: "MAIN SCREEN", val: '8" Super Actua Flex' }
            ],
            specsRight: [
                { label: "CAM", val: "48MP + 5x Telephoto" },
                { label: "OUTER SCREEN", val: '6.3" Actua OLED' },
                { label: "OS", val: "Android 16" }
            ]
        },
        {
            name: "ASUS ROG Strix Scar 17",
            type: "MAIN WORKSTATION",
            image: "/operator/rog_laptop.png",
            specsLeft: [
                { label: "CPU", val: "i9-12900H (14 Cores)" },
                { label: "GPU", val: "RTX 3070 Ti (150W)" },
                { label: "RAM", val: "16GB DDR5 4800MHz" }
            ],
            specsRight: [
                { label: "DISPLAY", val: "17.3\" FHD 360Hz" },
                { label: "STORAGE", val: "1TB NVMe Gen4" },
                { label: "KEYBOARD", val: "Per-Key RGB Mech" }
            ]
        }
    ];
</script>

<div class="relative z-10 w-full">

    <!-- HEADER: RED THEME (ADMIN ACCESS) -->
    <div class="mb-12 border-b border-white/10 pb-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
        <div>
            <div class="flex items-center gap-2 mb-2">
                <span class="w-2 h-2 bg-red-500 rounded-sm animate-pulse shadow-[0_0_10px_#ef4444]"></span>
                <span class="font-mono text-xs text-red-500 tracking-[0.2em]">RESTRICTED_AREA // LEVEL_5</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-display font-bold text-white uppercase leading-none">
                Operator <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Profile</span>
            </h2>
        </div>
        <div class="text-left md:text-right font-mono text-xs text-gray-500 space-y-1 bg-black/30 p-2 rounded border border-white/5">
            <p>USER_ID: <span class="text-white font-bold">DENIS [ADMIN]</span></p>
            <p>GEO_LOC: <span class="text-red-500">{time} MSK [BY]</span></p>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <!-- КОЛОНКА 1: ID CARD -->
        <div class="lg:col-span-1 h-full">
            <SpotlightCard>
                <div class="h-full p-6 bg-panel/40 backdrop-blur-md flex flex-col items-center text-center relative overflow-hidden group">
                    <!-- Background Map Effect -->
                    <div class="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-center bg-no-repeat bg-cover grayscale"></div>

                    <!-- Avatar with Rotating Rings -->
                    <div class="relative w-40 h-40 mb-6 mt-4">
                        <div class="absolute inset-[-10px] rounded-full border border-dashed border-red-500/30 animate-spin-slow"></div>
                        <div class="absolute inset-[-4px] rounded-full border border-orange-500/20 animate-reverse-spin"></div>
                        <div class="absolute inset-0 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-red-500 transition-colors duration-500">
                            <img
                                src="{base}/operator/operator_main.jpg"
                                alt="Denis"
                                class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div class="absolute -bottom-2 -right-2 px-3 py-1 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold font-mono text-[10px] rounded shadow-lg">ROOT</div>
                    </div>

                    <h3 class="text-3xl font-display font-bold text-white mb-1 tracking-wide">DENIS</h3>
                    <p class="text-red-400 font-mono text-xs tracking-widest mb-8">SYSTEM_ARCHITECT</p>

                    <!-- Stats Table -->
                    <div class="w-full space-y-3 font-mono text-sm text-left bg-black/40 p-5 rounded-xl border border-white/5 relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-1 h-full bg-red-500/50"></div>

                        <div class="flex justify-between border-b border-white/5 pb-2">
                            <span class="text-gray-500">AGE</span>
                            <span class="text-white">19 YEARS</span>
                        </div>
                        <div class="flex justify-between border-b border-white/5 pb-2">
                            <span class="text-gray-500">INIT_DATE</span>
                            <span class="text-white">2006.05.19</span>
                        </div>
                        <div class="flex justify-between border-b border-white/5 pb-2">
                            <span class="text-gray-500">LOCATION</span>
                            <span class="text-white flex items-center gap-2">
                                MINSK, BY
                                <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                            </span>
                        </div>
                        <div class="flex justify-between pt-1">
                            <span class="text-gray-500">STATUS</span>
                            <span class="text-green-400 animate-pulse font-bold">ONLINE</span>
                        </div>
                    </div>
                </div>
            </SpotlightCard>
        </div>

        <!-- КОЛОНКА 2 & 3: HARDWARE (BLUEPRINT STYLE) -->
        <div class="lg:col-span-2 flex flex-col gap-6">
            {#each hardware as item}
                <SpotlightCard>
                    <div class="relative w-full p-6 md:p-8 bg-panel/40 backdrop-blur-md overflow-hidden group min-h-[350px] flex flex-col md:flex-row items-center justify-between gap-8">

                        <!-- Blueprint Grid Background -->
                        <div class="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                        <!-- 1. LEFT SPECS -->
                        <div class="w-full md:w-1/4 space-y-6 relative z-10 order-2 md:order-1">
                            {#each item.specsLeft as spec}
                                <div class="relative flex flex-col items-center md:items-end text-center md:text-right group/spec">
                                    <span class="text-[9px] font-mono text-gray-500 tracking-wider uppercase mb-0.5">{spec.label}</span>
                                    <span class="text-xs md:text-sm font-bold text-gray-200 group-hover/spec:text-red-400 transition-colors">{spec.val}</span>

                                    <!-- Line (Desktop) -->
                                    <div class="hidden md:block absolute top-1/2 -right-10 w-10 h-[1px] bg-white/10 group-hover/spec:bg-red-500/50 transition-colors"></div>
                                    <div class="hidden md:block absolute top-1/2 -right-10 w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover/spec:opacity-100 transition-opacity"></div>
                                </div>
                            {/each}
                        </div>

                        <!-- 2. CENTER IMAGE (УВЕЛИЧЕННАЯ ЗОНА) -->
                        <div class="w-full md:w-2/4 relative z-10 order-1 md:order-2 flex flex-col items-center">
                            <!-- Title -->
                            <div class="text-center mb-6 relative">
                                <div class="text-[9px] font-mono text-red-500 mb-1 tracking-[0.2em]">{item.type}</div>
                                <h3 class="text-xl md:text-2xl font-display font-bold text-white">{item.name}</h3>
                            </div>

                            <!-- УВЕЛИЧИЛ ВЫСОТУ КОНТЕЙНЕРА ТУТ -->
                            <div class="relative w-full h-64 md:h-80 flex items-center justify-center animate-float">
                                <!-- Glow -->
                                <div class="absolute inset-0 bg-red-500/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>

                                <img
                                    src="{base}{item.image}"
                                    alt={item.name}
                                    class="relative z-10 max-h-full max-w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-110"
                                />

                                <!-- Tech Brackets -->
                                <div class="absolute inset-0 border border-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100 pointer-events-none">
                                    <div class="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-red-500"></div>
                                    <div class="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-red-500"></div>
                                    <div class="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-red-500"></div>
                                    <div class="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-red-500"></div>
                                </div>
                            </div>
                        </div>

                        <!-- 3. RIGHT SPECS -->
                        <div class="w-full md:w-1/4 space-y-6 relative z-10 order-3">
                            {#each item.specsRight as spec}
                                <div class="relative flex flex-col items-center md:items-start text-center md:text-left group/spec">
                                    <span class="text-[9px] font-mono text-gray-500 tracking-wider uppercase mb-0.5">{spec.label}</span>
                                    <span class="text-xs md:text-sm font-bold text-gray-200 group-hover/spec:text-red-400 transition-colors">{spec.val}</span>

                                    <!-- Line (Desktop) -->
                                    <div class="hidden md:block absolute top-1/2 -left-10 w-10 h-[1px] bg-white/10 group-hover/spec:bg-red-500/50 transition-colors"></div>
                                    <div class="hidden md:block absolute top-1/2 -left-10 w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover/spec:opacity-100 transition-opacity"></div>
                                </div>
                            {/each}
                        </div>

                    </div>
                </SpotlightCard>
            {/each}
        </div>

    </div>
</div>

<style>
    @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    .animate-spin-slow {
        animation: spin-slow 12s linear infinite;
    }

    @keyframes reverse-spin {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
    }
    .animate-reverse-spin {
        animation: reverse-spin 15s linear infinite;
    }

    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }
    .animate-float {
        animation: float 4s ease-in-out infinite;
    }
</style>