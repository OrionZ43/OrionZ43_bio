<script lang="ts">
    import { onMount } from 'svelte';
    import { spring, tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

    // 1. Точные координаты мыши (для центральной точки)
    let mouseX = 0;
    let mouseY = 0;

    // 2. Плавные координаты (для внешнего кольца) с эффектом "пружины"
    let cursorSpring = spring({ x: -100, y: -100 }, {
        stiffness: 0.1, // Жесткость пружины (меньше = плавнее/медленнее)
        damping: 0.4    // Затухание (меньше = больше инерции)
    });

    // 3. Состояния
    let isHovering = false;
    let isClicking = false;
    let isVisible = false; // Чтобы курсор не появлялся в углу при загрузке

    // 4. Вращение кольца (будет крутиться постоянно)
    let rotation = 0;

    onMount(() => {
        // Показываем курсор только когда мышь двинулась
        const initMove = () => {
            isVisible = true;
            window.removeEventListener('mousemove', initMove);
        };
        window.addEventListener('mousemove', initMove);

        const move = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorSpring.set({ x: e.clientX, y: e.clientY });

            // Проверка наведения на интерактивные элементы
            const target = e.target as HTMLElement;
            // Ищем кнопки, ссылки, инпуты И карточки с классом 'group' (наши spotlight card)
            const clickable = target.closest('a, button, [role="button"], input, textarea, .group');

            isHovering = !!clickable;
        };

        const mousedown = () => isClicking = true;
        const mouseup = () => isClicking = false;

        // Анимационный цикл для вращения
        let frame: number;
        const animate = () => {
            // Если навели - крутится быстрее, если нет - медленно
            rotation += isHovering ? 2 : 0.5;
            frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);

        window.addEventListener('mousemove', move);
        window.addEventListener('mousedown', mousedown);
        window.addEventListener('mouseup', mouseup);

        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mousedown', mousedown);
            window.removeEventListener('mouseup', mouseup);
            cancelAnimationFrame(frame);
        };
    });
</script>

<!-- Скрываем на мобильных и пока не двигали мышью -->
<div class="pointer-events-none fixed inset-0 z-[100000] hidden md:block" class:opacity-0={!isVisible}>

    <!-- 1. ЦЕНТРАЛЬНАЯ ТОЧКА (Crosshair) - Всегда мгновенно за мышью -->
    <div
        class="absolute w-2 h-2 bg-white rounded-full mix-blend-difference"
        style="
            left: {mouseX}px;
            top: {mouseY}px;
            transform: translate(-50%, -50%) scale({isClicking ? 0.5 : 1});
            transition: transform 0.1s;
        "
    ></div>

    <!-- 2. ВНЕШНИЙ HUD (Кольцо) - Плавное следование -->
    <div
        class="absolute flex items-center justify-center transition-colors duration-300"
        style="
            left: {$cursorSpring.x}px;
            top: {$cursorSpring.y}px;
            transform: translate(-50%, -50%);
            width: {isHovering ? 60 : 40}px;
            height: {isHovering ? 60 : 40}px;
        "
    >
        <!-- Вращающаяся SVG графика -->
        <svg
            viewBox="0 0 100 100"
            class="w-full h-full transition-all duration-300"
            style="
                transform: rotate({rotation}deg);
                filter: drop-shadow(0 0 5px {isClicking ? '#9d00ff' : (isHovering ? '#00f0ff' : 'rgba(0, 240, 255, 0.3)')});
            "
        >
            <!-- Кольцо с разрывами -->
            <path
                d="M 50 10 A 40 40 0 0 1 90 50"
                fill="none"
                stroke={isClicking ? '#9d00ff' : '#00f0ff'}
                stroke-width="2"
                stroke-linecap="round"
                class="transition-colors duration-300"
            />
            <path
                d="M 50 90 A 40 40 0 0 1 10 50"
                fill="none"
                stroke={isClicking ? '#9d00ff' : '#00f0ff'}
                stroke-width="2"
                stroke-linecap="round"
                class="transition-colors duration-300"
            />

            <!-- Декоративные засечки -->
            <circle cx="50" cy="50" r="48" stroke={isClicking ? '#9d00ff' : '#00f0ff'} stroke-width="1" stroke-dasharray="4 10" opacity="0.3" fill="none" />
        </svg>

        <!-- Текст координат (для атмосферы) -->
        {#if isHovering}
            <div
                class="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[8px] font-mono font-bold tracking-widest whitespace-nowrap bg-black/50 px-1 rounded backdrop-blur-sm border border-white/10"
                style="color: {isClicking ? '#9d00ff' : '#00f0ff'}"
            >
                TARGET_LOCK
            </div>
        {/if}
    </div>

</div>

<style>
    :global(body) {
        cursor: none;
    }

    /* Возвращаем стандартный курсор на мобильных */
    @media (max-width: 768px) {
        :global(body) {
            cursor: auto;
        }
    }
</style>