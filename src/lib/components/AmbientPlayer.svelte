<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    export let src: string;

    let audio: HTMLAudioElement;
    let isPlaying = false;
    let volume = 0.5;
    let isLoaded = false;

    // При смене источника (главы) останавливаем и сбрасываем
    $: if (src && audio) {
        isPlaying = false;
        audio.pause();
        audio.currentTime = 0;
        audio.load(); // Перезагружаем новый файл
    }

    // Реактивность громкости
    $: if (audio) {
        audio.volume = volume;
    }

    function togglePlay() {
        if (!audio) return;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().catch(e => console.error("Audio play failed", e));
        }
        isPlaying = !isPlaying;
    }

    function onEnded() {
        // Зацикливание (хотя атрибут loop должен работать, это страховка)
        if (isPlaying) audio.play();
    }

    // Плавное появление громкости при старте
    onMount(() => {
        if (audio) audio.volume = volume;
    });

    onDestroy(() => {
        if (audio) {
            audio.pause();
            audio.src = '';
        }
    });
</script>

<div class="flex items-center gap-4 p-3 bg-black/40 border border-white/10 rounded-lg max-w-sm w-full backdrop-blur-md mb-6">

    <!-- Скрытый аудио элемент -->
    <audio
        bind:this={audio}
        {src}
        loop
        on:loadeddata={() => isLoaded = true}
        on:ended={onEnded}
    ></audio>

    <!-- КНОПКА PLAY/PAUSE -->
    <button
        on:click={togglePlay}
        disabled={!src}
        class="w-10 h-10 flex items-center justify-center rounded-full bg-cyan/10 border border-cyan/30 text-cyan hover:bg-cyan hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed group shrink-0"
    >
        {#if isPlaying}
            <!-- Pause Icon -->
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>
        {:else}
            <!-- Play Icon -->
            <svg class="w-4 h-4 fill-current group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        {/if}
    </button>

    <!-- ИНФО И ПОЛЗУНОК -->
    <div class="flex-1 flex flex-col justify-center">
        <div class="flex justify-between items-center mb-1">
            <span class="text-[10px] font-mono text-cyan tracking-widest uppercase">
                {isPlaying ? 'AUDIO_LOG: PLAYING' : 'AUDIO_LOG: PAUSED'}
            </span>
            <span class="text-[10px] font-mono text-gray-500">VOL: {Math.round(volume * 100)}%</span>
        </div>

        <!-- Кастомный Range Slider -->
        <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            bind:value={volume}
            class="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan hover:accent-white transition-all"
        />
    </div>

    <!-- Визуализатор (Декоративный) -->
    <div class="flex items-end gap-[2px] h-6 shrink-0 opacity-70">
        {#each Array(5) as _, i}
            <div
                class="w-1 bg-cyan rounded-full transition-all duration-300"
                style="height: {isPlaying ? Math.random() * 100 : 20}%; animation: {isPlaying ? `equalizer 0.5s infinite ${i * 0.1}s` : 'none'}"
            ></div>
        {/each}
    </div>

</div>

<style>
    /* Стилизация ползунка для Webkit */
    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background: #00f0ff;
        cursor: pointer;
        margin-top: -4px; /* Вам может потребоваться настроить это значение */
    }
    input[type=range]::-webkit-slider-runnable-track {
        height: 4px;
        cursor: pointer;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 2px;
    }

    @keyframes equalizer {
        0%, 100% { height: 20%; }
        50% { height: 100%; }
    }
</style>