<script lang="ts">
    import { onMount } from 'svelte';

    let canvas: HTMLCanvasElement;

    onMount(() => {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const stars = Array.from({ length: 150 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2,
            speed: Math.random() * 0.5 + 0.1
        }));

        function animate() {
            ctx.fillStyle = '#030303'; // Void color
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#ffffff';
            stars.forEach(star => {
                ctx.globalAlpha = Math.random() * 0.5 + 0.3;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Движение вверх (эффект полета)
                star.y -= star.speed;
                if (star.y < 0) {
                    star.y = height;
                    star.x = Math.random() * width;
                }
            });
            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });
</script>

<canvas bind:this={canvas} class="fixed inset-0 z-[-1] pointer-events-none opacity-60"></canvas>