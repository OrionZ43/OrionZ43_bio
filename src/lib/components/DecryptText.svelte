<script lang="ts">
    import { onMount } from 'svelte';

    export let text: string;
    export let speed: number = 30; // Скорость перебора
    export let revealDelay: number = 0; // Задержка перед стартом
    export let className: string = "";

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
    let displayedText = "";
    let interval: any;

    onMount(() => {
        setTimeout(() => {
            let iteration = 0;
            interval = setInterval(() => {
                displayedText = text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("");

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3; // Плавность открытия
            }, speed);
        }, revealDelay);

        return () => clearInterval(interval);
    });
</script>

<span class="font-mono {className}">{displayedText}</span>