<script lang="ts">
    import { onMount } from 'svelte';
    import { spring } from 'svelte/motion';

    // Координаты курсора с физикой (spring) для плавности
    let coords = spring({ x: -100, y: -100 }, {
        stiffness: 0.15,
        damping: 0.7
    });

    let size = spring(10, { stiffness: 0.2, damping: 0.4 });
    let isHovering = false;
    let isClicking = false;

    onMount(() => {
        const move = (e: MouseEvent) => {
            coords.set({ x: e.clientX, y: e.clientY });

            // Проверяем, наведены ли мы на кликабельный элемент
            const target = e.target as HTMLElement;
            if (target.closest('a, button, [role="button"], input, textarea')) {
                isHovering = true;
                size.set(30); // Увеличиваем размер
            } else {
                isHovering = false;
                size.set(10); // Возвращаем размер
            }
        };

        const mousedown = () => {
            isClicking = true;
            size.set(5); // Сжимаем при клике
        };

        const mouseup = () => {
            isClicking = false;
            size.set(isHovering ? 30 : 10);
        };

        window.addEventListener('mousemove', move);
        window.addEventListener('mousedown', mousedown);
        window.addEventListener('mouseup', mouseup);

        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mousedown', mousedown);
            window.removeEventListener('mouseup', mouseup);
        };
    });
</script>

<!-- Курсор скрыт на мобилках (там тач) -->
<div class="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block mix-blend-difference">

    <!-- Основная точка (Всегда следует за мышью мгновенно) -->
    <!-- Мы используем глобальный курсор: none в CSS, см. ниже -->
</div>

<!-- Трейл (Плавный круг) -->
<div
    class="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:flex items-center justify-center rounded-full border border-cyan/80 mix-blend-exclusion transition-colors duration-300"
    style="
        transform: translate({$coords.x}px, {$coords.y}px) translate(-50%, -50%);
        width: {$size}px;
        height: {$size}px;
        background-color: {isHovering ? 'rgba(0, 240, 255, 0.1)' : 'transparent'};
        border-color: {isClicking ? '#9d00ff' : '#00f0ff'};
    "
>
    <!-- Центральная точка -->
    {#if !isHovering}
        <div class="w-1 h-1 bg-cyan rounded-full"></div>
    {/if}
</div>

<style>
    :global(body) {
        cursor: none; /* Скрываем стандартный курсор */
    }

    /* Возвращаем курсор на мобилках */
    @media (max-width: 768px) {
        :global(body) {
            cursor: auto;
        }
    }
</style>