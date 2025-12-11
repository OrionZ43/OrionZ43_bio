<script lang="ts">
    import { onMount } from 'svelte';

    let div: HTMLDivElement;
    let x = 0;
    let y = 0;

    function handleMouseMove(e: MouseEvent) {
        if (!div) return;
        const rect = div.getBoundingClientRect();
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
        div.style.setProperty('--mouse-x', `${x}px`);
        div.style.setProperty('--mouse-y', `${y}px`);
    }
</script>

<div
    bind:this={div}
    on:mousemove={handleMouseMove}
    class="relative group rounded-xl border border-white/10 bg-panel overflow-hidden"
>
    <div
        class="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300 z-10"
        style="background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0, 240, 255, 0.15), transparent 40%);"
    ></div>

    <div
        class="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300 z-10 rounded-xl"
        style="background: radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(0, 240, 255, 0.4), transparent 40%); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; padding: 1px;"
    ></div>

    <div class="relative z-20 h-full">
        <slot />
    </div>
</div>