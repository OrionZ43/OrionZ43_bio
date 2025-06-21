<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { base } from '$app/paths';
</script>

<div class="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
    <div class="lg:col-span-2 art-container" in:fade={{ duration: 1000, delay: 200 }}>
        <img src="{base}/orion_z43_art.png" alt="Арт персонажа Orion_Z43" class="max-w-full h-auto drop-shadow-glow" />

        <div class="mt-8 text-center w-full">
            <h3 class="info-title">//: ОТКРЫТЫЕ КАНАЛЫ СВЯЗИ</h3>
             <div class="flex flex-wrap justify-center gap-4 mt-4">
                 <a href="https://t.me/Orion_Z43" target="_blank" rel="noopener noreferrer" class="contact-link">Telegram</a>
                 <a href="https://github.com/OrionZ43" target="_blank" rel="noopener noreferrer" class="contact-link">GitHub</a>
                 <a href="mailto:kovalevd418@gmail.com" class="contact-link">Email</a>
                 <a href="https://t.me/orionscorner" target="_blank" rel="noopener noreferrer" class="contact-button-special">
                <span>Orion's Corner</span>
                </a>
             </div>
        </div>
    </div>

    <div class="lg:col-span-3 info-container">

        <div class="info-block" in:fly={{ y: 20, duration: 600, delay: 400 }}>
            <h3 class="info-title">//: ДОСЬЕ: ORION_Z43 // ИНДЕКС: BINARYTHORN</h3>
            <ul class="info-list">
                <li><span class="label">КЛАССИФИКАЦИЯ:</span><span class="value">Протоген [Боевая Модель Z43]</span></li>
                <li><span class="label">ПРОИСХОЖДЕНИЕ:</span><span class="value">Проект "Орион", планета Хоризония</span></li>
                <li><span class="label">ТЕКУЩИЙ СТАТУС:</span><span class="value text-green-400">Активен // Сеть "Земля"</span></li>
            </ul>
        </div>

        <div class="info-block" in:fly={{ y: 20, duration: 600, delay: 600 }}>
             <h3 class="info-title">//: ИЗВЛЕЧЕНО ИЗ ПОВРЕЖДЕННОГО ЛОГА #998.4</h3>
             <p class="lore-text">
                <span class="log-entry">> ЦЕЛЬ:</span> Оружейный склад "Гелиоса" на FYX-394. Критически важен. <br>
                <span class="log-entry">> УСЛОВИЯ:</span> Планетарное ядро нестабильно. Выбросы энергии каждые 30 минут. Защитное поле склада — единственное укрытие. Уничтожение поля = фатально. <br>
                <span class="log-entry">> ХРОНОМЕТР:</span> 23 минуты до выброса. Сирена. Лазерная ловушка зацепила Рика. Контакт с противником. <br>
                <span class="log-entry">> ПОТЕРИ:</span> Рик — KIA. Второй член отряда тяжело ранен. <br>
                <span class="log-entry">> ХРОНОМЕТР:</span> 10 минут. Заряды установлены. Отступаем. Запрос на эвакуацию... Канал молчит. В небе — армада "Гелиоса". Поддержки не будет. <br>
                <span class="log-entry">> ХРОНОМЕТР:</span> 5 минут. Единственный корабль. Загрузка оружия. Вступаем в бой. <br>
                <span class="log-entry">> ХРОНОМЕТР:</span> 2 минуты. Я остался один. Последний противник — пал. Гиперпрыжок. Склад взорвался через 20 секунд... Связь с Хоризонией потеряна.
             </p>
        </div>

        <div class="info-block" in:fly={{ y: 20, duration: 600, delay: 800 }}>
             <h3 class="info-title">//: ДЕШИФРОВАННЫЙ СИГНАЛ #1012.7</h3>
             <p class="lore-text">
                <span class="log-entry">> ПОВТОРЯЮЩИЙСЯ ЗАПРОС:</span> `status_report` // Ответа нет...<br>
                <span class="log-entry">> ВХОДЯЩЕЕ СООБЩЕНИЕ... ИСТОЧНИК: "Оникс"</span><br>
                <span class="log-entry">> ТЕКСТ:</span> `УБЕЖИЩЕ. КООРДИНАТЫ ПРИКРЕПЛЕНЫ.`<br>
                <span class="log-entry">> ПУНКТ НАЗНАЧЕНИЯ:</span> Система "Солнце". Планета "Земля".<br>
                <span class="log-entry">> ИТОГ:</span> Обнаружен дрон-компаньон "Оникс". Новая база операций развернута в заброшенной лаборатории. Начата адаптация к местной сети. Присвоен позывной для ассимиляции: Байнариторн.
             </p>
        </div>
    </div>
</div>

<style>
    .art-container {
        @apply flex flex-col items-center;
        perspective: 1000px;
    }

    .art-container img {
        clip-path: polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
        border: 2px solid rgba(252, 238, 10, 0.3);
        animation: breathe 5s ease-in-out infinite;
        transition: transform 0.4s ease, filter 0.4s ease;
    }

    .art-container:hover img {
        transform: translateY(-10px) rotateX(5deg) rotateY(-5deg) scale(1.05);
        filter: drop-shadow(0 10px 30px rgba(252, 238, 10, 0.8));
        animation-play-state: paused;
    }

    @keyframes breathe {
        0% {
            transform: scale(1);
            filter: drop-shadow(0 0 15px var(--cyber-yellow, #fcee0a));
        }
        50% {
            transform: scale(1.02);
            filter: drop-shadow(0 0 25px var(--cyber-yellow, #fcee0a));
        }
        100% {
            transform: scale(1);
            filter: drop-shadow(0 0 15px var(--cyber-yellow, #fcee0a));
        }
    }

    .drop-shadow-glow {
        filter: drop-shadow(0 0 20px var(--cyber-yellow, #fcee0a));
    }

    .info-block {
        @apply p-6 border-l-4;
        background: linear-gradient(90deg, rgba(252, 238, 10, 0.05) 0%, rgba(252, 238, 10, 0) 100%);
        border-color: var(--cyber-yellow, #fcee0a);
    }

    .info-title {
        @apply font-bold uppercase tracking-widest text-cyber-yellow mb-4;
    }

    .info-list { @apply space-y-3; }
    .info-list li { @apply flex justify-between items-baseline flex-wrap gap-x-4; }
    .info-list .label { @apply text-gray-400 mr-4 whitespace-nowrap; }
    .info-list .value { @apply text-white font-semibold text-right; }

    .lore-text {
        @apply text-gray-300 leading-relaxed font-light;
    }
    .log-entry {
        @apply block mb-2;
    }
    .log-entry > span {
        @apply text-gray-500 font-semibold;
    }

    .contact-link {
        @apply px-4 py-2 text-gray-300 border border-gray-600 font-bold;
        transition: all 0.2s ease-in-out;
    }
    .contact-link:hover {
        background: var(--cyber-yellow, #fcee0a);
        border-color: var(--cyber-yellow, #fcee0a);
        color: black;
        box-shadow: 0 0 10px var(--cyber-yellow, #fcee0a);
        transform: translateY(-2px);
    }

    @media (max-width: 1023px) {
        .art-container { order: 1; }
        .info-container { order: 2; }
    }
        .contact-button-special {
        @apply relative inline-block px-8 py-4 font-bold uppercase tracking-widest text-lg;
        color: var(--cyber-yellow, #fcee0a);
        background: transparent;
        border: 2px solid var(--cyber-yellow, #fcee0a);
        transition: color 0.4s ease-in-out;
        overflow: hidden;
    }
    .contact-button-special::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: var(--cyber-yellow, #fcee0a);
        transition: all 0.4s ease-in-out;
        z-index: 0;
    }
    .contact-button-special:hover::before {
        left: 0;
    }
    .contact-button-special span {
        position: relative;
        z-index: 1;
    }
    .contact-button-special:hover span {
        color: black;
    }
</style>