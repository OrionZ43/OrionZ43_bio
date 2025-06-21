<script lang="ts">
    import { fade } from 'svelte/transition';
    import Lightbox from './Lightbox.svelte';

    const artworks = [
    {
        src: '/OrionZ43_bio/gallery/z43_official.jpg',
        alt: 'Orion Z43 в динамичной позе с оружием на фоне неоновых надписей',
        title: 'Модель Z43'
    },
    {
        src: '/OrionZ43_bio/gallery/combat_stance.jpg',
        alt: 'Orion Z43 с плазменной винтовкой в боевой стойке в руинах',
        title: 'Боевая готовность'
    },
    {
        src: '/OrionZ43_bio/gallery/ninja_bridge.jpg',
        alt: 'Orion Z43 в одежде ниндзя с катаной на мосту в лесу с розовыми деревьями',
        title: 'Тень на мосту'
    },
    {
        src: '/OrionZ43_bio/gallery/black_hole.jpg',
        alt: 'Два протогена, Orion Z43 и другой, сидят в космосе на фоне черной дыры',
        title: 'Горизонт событий'
    },
    {
        src: '/OrionZ43_bio/gallery/z43_canon.jpg',
        alt: 'Протоген Orion Z43 в полный рост со светящимися элементами на фоне эмблемы Z43',
        title: 'Каноничный вид Ориона'
    },

    {
        src: '/OrionZ43_bio/gallery/halloween_pumpkin_scary.jpg',
        alt: 'Orion Z43 со зловещей ухмылкой на визоре держит резную тыкву на Хэллоуин',
        title: 'Сладость или гадость? >:3'
    },
    {
        src: '/OrionZ43_bio/gallery/halloween_witch.jpg',
        alt: 'Orion Z43 в ведьминской шляпе с тыквой и дроном-помощником',
        title: 'Колдовской вечер'
    },

    {
        src: '/OrionZ43_bio/gallery/mew_cuddle.jpg',
        alt: 'Покемон Мью трется о щеку протогена Orion Z43 на фоне звездного неба',
        title: 'Звездный друг'
    },
    {
        src: '/OrionZ43_bio/gallery/in_a_box.jpg',
        alt: 'Orion Z43 держит коробку с маленькими существами',
        title: 'На переработку.'
    },
    {
        src: '/OrionZ43_bio/gallery/beach_fun.jpg',
        alt: 'Orion Z43 играет на пляже с водяным пистолетом',
        title: 'Водные процедуры'
    },
    {
        src: '/OrionZ43_bio/gallery/sand_castle.jpg',
        alt: 'Orion Z43 строит замок из песка на пляже вместе с маленьким другом',
        title: 'Песчаная крепость'
    },
    {
        src: '/OrionZ43_bio/gallery/moth_hug.jpg',
        alt: 'Orion Z43 обнимает антропоморфного мотылька',
        title: 'Теплые объятия'
    },

    {
        src: '/OrionZ43_bio/gallery/anubis.jpg',
        alt: 'Orion Z43 в образе древнеегипетского бога Анубиса',
        title: 'Наследие Древних'
    },
    {
        src: '/OrionZ43_bio/gallery/king_on_hummer.jpg',
        alt: 'Orion Z43 в короне сидит на капоте Хаммера',
        title: '42 братуха'
    },
    {
        src: '/OrionZ43_bio/gallery/portrait_hexagon.jpg',
        alt: 'Портрет-бюст Orion Z43 в шестиугольной рамке',
        title: 'Идентификация'
    },
    {
        src: '/OrionZ43_bio/gallery/chibi_butterfly.jpg',
        alt: 'Чиби-версия Orion Z43 сидит на траве с бабочкой на визоре',
        title: 'Минута покоя'
    },
    {
        src: '/OrionZ43_bio/gallery/tongue_out.jpg',
        alt: 'Портрет Orion Z43 с высунутым кибернетическим языком на фоне зеленого дыма',
        title: 'Видал какой длинный? Язык тоже кстати.'
    },
    {
        src: '/OrionZ43_bio/gallery/chibi_stance.jpg',
        alt: 'Чиби-версия Orion Z43 в боевой стойке',
        title: 'Мини-угроза'
    },
    {
        src: '/OrionZ43_bio/gallery/fluffy_sketch.jpg',
        alt: 'Пушистый и мускулистый скетч протогена',
        title: 'Гигачад'
    },
    {
        src: '/OrionZ43_bio/gallery/wine_relax.jpg',
        alt: 'Orion Z43 отдыхает с бокалом вина',
        title: 'Чилл'
    }
];

    let selectedImage: string | null = null;
</script>

<div class="w-full max-w-6xl mx-auto text-center">
    <h2 class="text-4xl font-bold uppercase text-cyber-yellow mb-10" in:fade|global>
        //: ВИЗУАЛЬНЫЕ ДАННЫЕ
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {#each artworks as art, i}
            <div
                class="gallery-item"
                on:click={() => selectedImage = art.src}
                in:fade={{ duration: 500, delay: 200 + i * 100 }}
                role="button"
                tabindex="0"
                on:keydown={(e) => { if (e.key === 'Enter') selectedImage = art.src; }}
            >
                <img src={art.src} alt={art.alt} class="w-full h-full object-cover" />
                <div class="overlay">
                    <h4 class="title">{art.title}</h4>
                </div>
            </div>
        {/each}
    </div>
</div>

{#if selectedImage}
    <Lightbox src={selectedImage} alt="Просмотр изображения" on:close={() => selectedImage = null} />
{/if}

<style>
    .gallery-item {
        @apply relative aspect-square overflow-hidden cursor-pointer;
        clip-path: polygon(0 10px, 10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .gallery-item:hover {
        transform: scale(1.05) rotate(1deg);
        box-shadow: 0 0 20px var(--cyber-yellow, #fcee0a);
    }

    .gallery-item .overlay {
        @apply absolute inset-0 flex items-end justify-start p-4;
        background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    .gallery-item:hover .overlay {
        opacity: 1;
    }

    .gallery-item .title {
        @apply text-lg font-bold text-white uppercase tracking-wider;
        transform: translateY(20px);
        transition: transform 0.3s ease;
    }
    .gallery-item:hover .title {
        transform: translateY(0);
    }
</style>