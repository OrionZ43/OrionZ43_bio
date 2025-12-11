<script lang="ts">
    import { fly } from 'svelte/transition';

    // Каналы связи
    const channels = [
        {
            name: 'TELEGRAM',
            id: 'T-GRAM_SECURE',
            url: 'https://t.me/Orion_Z43',
            status: 'ONLINE',
            // Telegram (Fill icon, 32x32)
            viewBox: '0 0 32 32',
            isStroke: false,
            path: 'M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z'
        },
        {
            name: 'GITHUB',
            id: 'REPO_ACCESS',
            url: 'https://github.com/OrionZ43',
            status: 'OPEN',
            // GitHub (Fill icon, 24x24)
            viewBox: '0 0 24 24',
            isStroke: false,
            path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
        },
        {
            name: 'EMAIL',
            id: 'MAIL_RELAY',
            url: 'mailto:kovalevd418@gmail.com',
            status: 'WAITING',
            // Email (Stroke icon, 192x192)
            viewBox: '0 0 192 192',
            isStroke: true,
            strokeWidth: 12,
            path: 'M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z'
        }
    ];

    // Special channel
    const community = {
        name: "ORION'S CORNER",
        id: 'COMMUNITY_HUB',
        url: 'https://t.me/orionscorner',
        status: 'JOIN_US'
    };
</script>

<div class="relative z-10 w-full max-w-4xl mx-auto">

    <!-- ЗАГОЛОВОК -->
    <div class="text-center mb-10">
        <div class="flex items-center justify-center gap-2 mb-2">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
            <span class="font-mono text-xs text-green-500 tracking-[0.2em]">CONNECTION_STABLE</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-4">
            Secure <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple">Uplink</span>
        </h2>

        <!-- SIGNAL VISUALIZER (CSS Animation) -->
        <div class="flex items-center justify-center gap-1 h-8">
            {#each Array(10) as _, i}
                <div class="w-1 bg-cyan/50 rounded-full animate-signal" style="animation-delay: {i * 0.1}s; height: {Math.random() * 100}%;"></div>
            {/each}
        </div>
    </div>

    <!-- GRID OF LINKS -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {#each channels as channel, i}
            <a
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                class="group relative bg-black/40 border border-white/10 hover:border-cyan/50 p-6 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] flex flex-col items-center justify-center gap-4"
                in:fly={{ y: 20, delay: i * 100 }}
            >
                <!-- Background Gradient -->
                <div class="absolute inset-0 bg-gradient-to-b from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <!-- Icon Container -->
                <div class="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan group-hover:text-black group-hover:shadow-[0_0_15px_#00f0ff] transition-all duration-300 text-white">
                    <svg
                        class="w-6 h-6 {channel.isStroke ? 'stroke-current fill-none' : 'fill-current'}"
                        viewBox={channel.viewBox}
                        stroke-width={channel.strokeWidth || 0}
                    >
                        <path d={channel.path} />
                    </svg>
                </div>

                <!-- Text -->
                <div class="text-center relative z-10">
                    <h3 class="font-display font-bold text-lg text-white group-hover:tracking-wider transition-all">{channel.name}</h3>
                    <p class="font-mono text-[10px] text-gray-500 mt-1">{channel.id} // <span class="text-green-500">{channel.status}</span></p>
                </div>

                <!-- Corner Decor -->
                <div class="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20 group-hover:border-cyan transition-colors"></div>
                <div class="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20 group-hover:border-cyan transition-colors"></div>
            </a>
        {/each}
    </div>

    <!-- SPECIAL COMMUNITY LINK (Full Width) -->
    <a
        href={community.url}
        target="_blank"
        rel="noopener noreferrer"
        class="group relative block w-full bg-gradient-to-r from-purple/10 to-cyan/10 border border-purple/30 hover:border-purple/80 rounded-xl p-1 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(157,0,255,0.2)]"
        in:fly={{ y: 20, delay: 300 }}
    >
        <div class="relative bg-black/60 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-sm">

            <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded bg-purple/20 flex items-center justify-center border border-purple/40 text-purple group-hover:bg-purple group-hover:text-white transition-all">
                    <!-- Telegram Icon for Community (Fill based) -->
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 32 32">
                        <path d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z" />
                    </svg>
                </div>
                <div class="text-center md:text-left">
                    <h3 class="font-display font-bold text-xl text-white tracking-wide">{community.name}</h3>
                    <p class="font-mono text-xs text-purple">OFFICIAL COMMUNITY HUB</p>
                </div>
            </div>

            <div class="flex items-center gap-2 px-4 py-2 bg-purple/20 border border-purple/40 rounded text-xs font-mono font-bold text-purple-200 group-hover:bg-purple group-hover:text-white transition-all">
                <span>INITIATE_JOIN</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            </div>

        </div>

        <!-- Scan Line Animation -->
        <div class="absolute top-0 left-0 w-[2px] h-full bg-purple shadow-[0_0_10px_#9d00ff] animate-scan-horizontal opacity-0 group-hover:opacity-100"></div>
    </a>

</div>

<style>
    @keyframes signal {
        0%, 100% { height: 10%; opacity: 0.3; }
        50% { height: 100%; opacity: 1; box-shadow: 0 0 10px #00f0ff; }
    }
    .animate-signal {
        animation: signal 1s ease-in-out infinite;
    }

    @keyframes scan-horizontal {
        0% { left: 0; opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { left: 100%; opacity: 0; }
    }
    .animate-scan-horizontal {
        animation: scan-horizontal 2s linear infinite;
    }
</style>