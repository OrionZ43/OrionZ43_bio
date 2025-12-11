export type BlockType = 'text' | 'orion' | 'onyx' | 'system' | 'code' | 'enemy';

export interface LoreBlock {
    type: BlockType;
    content: string;
}

export interface ChapterContent {
    title: string;
    subtitle: string;
    blocks: LoreBlock[];
}

export interface Chapter {
    id: number;
    ru: ChapterContent;
    en: ChapterContent;
}

export const loreChapters: Chapter[] = [
    {
        id: 1,
        ru: {
            title: "Глава 1: Гробница Пустоты",
            subtitle: "СЕКТОР ОМИКРОН-9 // АНОМАЛИЯ",
            blocks: [
                { type: 'text', content: "Космос в секторе Омикрон-9 не был просто черным. Он был голодным. Здесь, на задворках галактических карт, где свет далеких звезд едва пробивался сквозь плотные туманности ионизированного газа, любой навигационный компьютер сходил с ума." },
                { type: 'text', content: "Орион любил это место. В кабине его старого челнока, собранного из запчастей трех разных эпох, пахло озоном и перегретым пластиком. Единственным звуком был ритмичный писк радара дальнего действия." },
                { type: 'text', content: "Он был «мусорщиком» — так их называли официально. На сленге же их звали «трупоедами». Протогены, люди, киборги — все, кто был достаточно отчаянным, чтобы лезть в мертвые зоны ради довоенного хлама. Но сегодня радар Ориона нащупал не хлам." },
                { type: 'system', content: "— Объект неопознан. Сигнатура энергии: отсутствует. Масса: аномальная. Материал: не поддается сканированию." },
                { type: 'text', content: "Орион наклонился к экрану. Впереди, среди дрейфующих астероидов, висел монолит. Это был не корабль. Это была идеально ровная геометрическая структура из матового обсидиана, поглощающего свет. Казалось, что в пространстве кто-то вырезал дыру в форме вытянутого ромба." },
                { type: 'orion', content: "— Джекпот." },
                { type: 'text', content: "Голос дрогнул. Инстинкты кричали: «Разворачивайся». Но жадность победила. Стыковка прошла в гробовой тишине. Шлюз монолита словно расступился, пропуская гостя внутрь." },
                { type: 'text', content: "Внутри не было гравитации. Орион плыл по бесконечному коридору. Стены были исписаны узорами — микросхемами, вырезанными в камне. Было так холодно, что терморегуляция костюма работала на пределе." },
                { type: 'text', content: "В центре огромного зала парил Он. Сфера размером с голову протогена из текучего, меняющего форму металла. Воздух вокруг вибрировал." },
                { type: 'orion', content: "— Сканирую." },
                { type: 'text', content: "Он подошел ближе. Древние механизмы молчали. Орион протянул руку, открывая порт для прямого подключения. Коннектор с щелчком вошел в паз сферы." },
                { type: 'text', content: "В ту же секунду мир исчез. Не было ни вспышки, ни звука. Был только крик миллионов байт информации, хлынувший в нейросеть Ориона. Воспоминания, схемы оружия, эмоции — холодная, расчетливая ярость." },
                { type: 'text', content: "Орион упал на колени. Его визор сменил цвет на ослепительно белый, а затем погас. Перед глазами побежали строки кода:" },
                { type: 'code', content: "> НОСИТЕЛЬ ОБНАРУЖЕН.\n> ЦЕЛОСТНОСТЬ ОБОЛОЧКИ: 89%.\n> СИНХРОНИЗАЦИЯ НЕЙРОИНТЕРФЕЙСА...\n> ОШИБКА. СЛИШКОМ МАЛО МЕСТА.\n> ПЕРЕЗАПИСЬ ЛИЧНОСТИ... ОТМЕНА.\n> АДАПТАЦИЯ." },
                { type: 'text', content: "Орион попытался выдернуть кабель, но тело окаменело. В тишине его разума раздался голос — глубокий, бархатный и пугающе древний." },
                { type: 'onyx', content: "\"Ты опоздал на три миллиона лет, маленький мародер. Но ты подойдешь.\"" },
                { type: 'text', content: "Последнее, что увидел Орион — как сфера распадается на миллионы черных частиц и втягивается в его руку, проникая в вены, в самую суть его существа. Темнота накрыла его." }
            ]
        },
        en: {
            title: "Chapter 1: Tomb of the Void",
            subtitle: "SECTOR OMICRON-9 // ANOMALY",
            blocks: [
                { type: 'text', content: "Space in the Omicron-9 sector wasn't just black. It was hungry. Here, on the outskirts of galactic charts, where the light of distant stars barely pierced through dense nebulae of ionized gas, any navigation computer would go insane." },
                { type: 'text', content: "Orion loved this place. The cockpit of his old shuttle smelled of ozone and overheated plastic. The only sound was the rhythmic beep of the long-range radar." },
                { type: 'text', content: "He was a 'scavenger', or as they were called in slang, a 'corpse eater'. Protogens, humans, cyborgs—anyone desperate enough to venture into dead zones for pre-war scrap. But today, Orion's radar found no scrap." },
                { type: 'system', content: "— Object unidentified. Energy signature: none. Mass: anomalous. Material: unscannable." },
                { type: 'text', content: "Orion leaned toward the screen. Ahead hung a monolith—a perfectly smooth geometric structure made of matte obsidian that absorbed light. Like a hole cut in space." },
                { type: 'orion', content: "— Jackpot." },
                { type: 'text', content: "His voice trembled. Instincts screamed: 'Turn back.' But greed won. Docking happened in dead silence. The monolith's airlock seemed to part, inviting the guest inside." },
                { type: 'text', content: "Inside, there was no gravity. Orion floated down an endless corridor. Walls were etched with patterns—circuits carved into stone. It was so cold his suit's thermal regulation was at its limit." },
                { type: 'text', content: "In the center of a massive hall hovered It. A sphere the size of a protogen's head made of shifting liquid metal. The air around it vibrated." },
                { type: 'orion', content: "— Scanning." },
                { type: 'text', content: "He approached. Ancient mechanisms were silent. Orion extended his arm, opening the port for direct connection. The connector clicked into the sphere's groove." },
                { type: 'text', content: "Instantly, the world vanished. No flash, no sound. Only a scream of millions of bytes of information flooding Orion's neural network. Memories, weapon schematics, emotions—cold, calculated rage." },
                { type: 'text', content: "Orion fell to his knees. His visor turned blindingly white, then went dark. Lines of code raced before his eyes:" },
                { type: 'code', content: "> CARRIER DETECTED.\n> HULL INTEGRITY: 89%.\n> NEURAL INTERFACE SYNC...\n> ERROR. INSUFFICIENT STORAGE.\n> IDENTITY OVERWRITE... CANCEL.\n> ADAPTATION." },
                { type: 'text', content: "Orion tried to pull the cable, but his body turned to stone. In the silence of his mind, a voice resonated—deep, velvet, and terrifyingly ancient." },
                { type: 'onyx', content: "\"You are three million years late, little scavenger. But you will suffice.\"" },
                { type: 'text', content: "The last thing Orion saw was the sphere disintegrating into millions of black particles and pulling itself into his arm, invading his veins, the very essence of his being. Darkness consumed him." }
            ]
        }
    },
{
        id: 2,
        ru: {
            title: "Глава 2: Ошибка Синхронизации",
            subtitle: "СИСТЕМНЫЙ СБОЙ // СИМБИОЗ",
            blocks: [
                { type: 'text', content: "Пробуждение было похоже на всплытие с огромной глубины. Сначала вернулся звук — низкий гул двигателей. Потом холод. И, наконец, боль. Она пульсировала не в теле, а в коде сознания, словно кто-то переписал часть ОС ржавым гвоздем." },
                { type: 'text', content: "Орион разлепил веки. Перед глазами плыли красные строки диагностики. Он сидел в кресле пилота. Это было неправильно. Последнее, что он помнил — зал монолита." },
                { type: 'orion', content: "— Компьютер. Отчет о статусе." },
                { type: 'text', content: "Голос звучал чужим, с металлическим скрежетом. Бортовой ИИ ответил не сразу." },
                { type: 'system', content: "— Системы жизнеобеспечения: 98%. Навигация: автопилот активирован. Курс: выход из сектора. Внимание: обнаружено стороннее ПО. Класс угрозы: критический." },
                { type: 'text', content: "Орион попытался поднять правую руку, но она была тяжелой, как свинец. Он посмотрел вниз и замер. Стандартная обшивка исчезла. Руку покрывал матовый черный материал, под которым текли фиолетовые жилы, пульсирующие в такт сердцу." },
                { type: 'orion', content: "— Что за черт..." },
                { type: 'text', content: "Он схватился левой рукой за правую, пытаясь нащупать стык." },
                { type: 'onyx', content: "\"Не советую это трогать.\"" },
                { type: 'text', content: "Орион дернулся. Кабина была пуста. Он бросился к зеркалу. Из отражения на него смотрел знакомый протоген, но визор сбоил. Голубой цвет сменялся ядовито-фиолетовым, а испуганное выражение — хищным оскалом." },
                { type: 'orion', content: "— Ты вирус. Я подцепил логическую бомбу. Мне нужно форматирование..." },
                { type: 'onyx', content: "\"Вирус? Вирус разрушает. Я же — оптимизирую. Моё имя Оникс. Я — единственная причина, почему ты всё ещё функционируешь.\"" },
                { type: 'text', content: "Зрение самовольно переключилось в тактический режим. Перед глазами всплыла схема мозга. Огромный сектор памяти был закрашен черным." },
                { type: 'code', content: "> СТАТУС ПАМЯТИ: ЗАШИФРОВАНО.\n> ДОСТУП ЗАПРЕЩЕН.\n> АКТИВНЫЙ ПРОТОКОЛ: [ONYX]" },
                { type: 'orion', content: "— Убирайся из моей головы!" },
                { type: 'onyx', content: "\"Не могу. Мы связаны на молекулярном уровне. Твоя нейросеть была слабой — я расширил её. Мы — симбиоз. Ты — «железо». Я — «софт».\"" },
                { type: 'text', content: "Внезапно челнок тряхнуло. Завыла сирена тревоги." },
                { type: 'system', content: "— Внимание! Скачок сигнатуры. Три судна класса «Перехватчик». Принадлежность: Корпорация «Гелиос». Выход из варпа через 10 секунд." },
                { type: 'text', content: "Орион похолодел. Наемники. У него не было щитов." },
                { type: 'orion', content: "— Мы покойники. У нас нет оружия." },
                { type: 'onyx', content: "\"У тебя нет оружия. У нас — есть. Расслабься, Орион. Закрой глаза. Или я закрою их за тебя.\"" },
                { type: 'orion', content: "— Что ты..." },
                { type: 'text', content: "Правая рука, черная и тяжелая, дернулась сама по себе, поднимаясь вверх. Фиолетовые жилы вспыхнули ослепительным светом. Орион закричал, чувствуя, как кости предплечья перестраиваются." },
                { type: 'code', content: ">> ИНИЦИАЛИЗАЦИЯ ПРОТОКОЛА Z-43..." }
            ]
        },
        en: {
            title: "Chapter 2: Synchronization Error",
            subtitle: "SYSTEM FAILURE // SYMBIOSIS",
            blocks: [
                { type: 'text', content: "Awakening was like surfacing from a great depth. First came the sound—a low hum of engines. Then the cold. And finally, pain. It pulsed not in the body, but in the code of his consciousness, as if someone had rewritten part of his OS with a rusty nail." },
                { type: 'text', content: "Orion opened his eyes. Red diagnostic lines floated before him. He was in the pilot's seat. This was wrong. The last thing he remembered was the monolith hall." },
                { type: 'orion', content: "— Computer. Status report." },
                { type: 'text', content: "His voice sounded alien, metallic. The onboard AI didn't reply immediately." },
                { type: 'system', content: "— Life support: 98%. Navigation: autopilot active. Course: sector exit. Warning: foreign software detected. Threat class: critical." },
                { type: 'text', content: "Orion tried to lift his right arm, but it was heavy as lead. He looked down and froze. The standard plating was gone. Matte black material covered his arm, with purple veins pulsing underneath in time with his heart." },
                { type: 'orion', content: "— What the hell..." },
                { type: 'text', content: "He grabbed his right arm with his left, trying to find the seam." },
                { type: 'onyx', content: "\"I wouldn't touch that.\"" },
                { type: 'text', content: "Orion flinched. The cockpit was empty. He rushed to the mirror. A familiar protogen looked back, but the visor glitched. Blue shifted to toxic purple, and the scared expression turned into a predatory grin." },
                { type: 'orion', content: "— You're a virus. I caught a logic bomb. I need formatting..." },
                { type: 'onyx', content: "\"Virus? A virus destroys. I optimize. My name is Onyx. I am the only reason you are still functioning.\"" },
                { type: 'text', content: "His vision forcibly switched to tactical mode. A schematic of his brain appeared. A huge memory sector was blacked out." },
                { type: 'code', content: "> MEMORY STATUS: ENCRYPTED.\n> ACCESS DENIED.\n> ACTIVE PROTOCOL: [ONYX]" },
                { type: 'orion', content: "— Get out of my head!" },
                { type: 'onyx', content: "\"I can't. We are bonded at the molecular level. Your neural net was weak—I expanded it. We are a symbiosis. You are the 'hardware'. I am the 'software'.\"" },
                { type: 'text', content: "Suddenly, the shuttle shook. The alarm wailed." },
                { type: 'system', content: "— Warning! Signature spike. Three Interceptor-class vessels. Affiliation: Helios Corp. Warp exit in 10 seconds." },
                { type: 'text', content: "Orion went cold. Mercenaries. He had no shields." },
                { type: 'orion', content: "— We're dead. We have no weapons." },
                { type: 'onyx', content: "\"You don't have weapons. We do. Relax, Orion. Close your eyes. Or I'll close them for you.\"" },
                { type: 'orion', content: "— What are you..." },
                { type: 'text', content: "His right arm, black and heavy, jerked upward on its own. Purple veins flared with blinding light. Orion screamed as the bones of his forearm rearranged." },
                { type: 'code', content: ">> INITIALIZING PROTOCOL Z-43..." }
            ]
        }
    },
{
        id: 3,
        ru: {
            title: "Глава 3: Оружие Z-43",
            subtitle: "БОЕВОЙ ПРОТОКОЛ // УДАЛЕНИЕ ЦЕЛИ",
            blocks: [
                { type: 'text', content: "Боль была ослепляющей, но странной — холодной. Орион чувствовал, как кости предплечья разжижаются. Черная субстанция вздыбилась шипами и начала расти. Из локтя вырвались наниты, собираясь в сложную геометрию — длинный хищный ствол, парящий в магнитном поле." },
                { type: 'orion', content: "— Что ты делаешь?!" },
                { type: 'onyx', content: "\"Калибрую.\"" },
                { type: 'text', content: "Корабль снова тряхнуло." },
                { type: 'enemy', content: "— Неизвестное судно, заглушить двигатели! Отдайте нам Артефакт, и мы сохраним вам жизнь. У вас десять секунд." },
                { type: 'text', content: "Орион попытался открыть рот, чтобы молить о пощаде, но челюсть сжалась сама собой. Тело развернулось к лобовому стеклу." },
                { type: 'onyx', content: "\"Десять секунд — это слишком долго для принятия смерти.\"" },
                { type: 'orion', content: "— Нет, стой! Стекло не выдержит разгерметизации! Мы умрем!" },
                { type: 'onyx', content: "\"Это стекло — кварцевый полимер. Мой луч пройдет сквозь него. Физика — это просто набор рекомендаций, Орион. Смотри.\"" },
                { type: 'text', content: "Рука-орудие поднялась. Визор полыхнул фиолетовым глитчем. На конце ствола Z-43 скопилась черная сфера. Звук зарядки был похож на стон реальности." },
                { type: 'enemy', content: "— Пять секунд! Огонь по готовно..." },
                { type: 'code', content: ">> ВЫСТРЕЛ [Z43_VOID_BEAM]" },
                { type: 'text', content: "Звука выстрела не было. Был звук отсутствия. Луч искаженных данных прошел сквозь стекло и ударил во флагман врага. Взрыва не последовало. Корабль просто начал исчезать, рассыпаясь на цифровые кубики. Его стерли из существования." },
                { type: 'enemy', content: "— Что это было?! У него оружие класса «Армагеддон»! Уходим в варп!" },
                { type: 'text', content: "Орион смотрел на пустое место, где только что были живые существа. Его рука начала остывать, наниты втянулись обратно под кожу." },
                { type: 'orion', content: "— Ты стер их... Ты их просто удалил." },
                { type: 'onyx', content: "\"Эффективность 100%. Угроза устранена. Но один выстрел истощил биореакторы на 60%. Нам нужно питание. И укрытие.\"" },
                { type: 'orion', content: "— Ты монстр." },
                { type: 'onyx', content: "\"Я — инструмент выживания. И теперь ты — ножны для этого инструмента. Запускай двигатели.\"" },
                { type: 'text', content: "Орион сглотнул. Пути назад не было. Дрожащими пальцами он ввел координаты гиперпрыжка." },
                { type: 'system', content: "— ЦЕЛЬ: СИСТЕМА СОЛ. ПЛАНЕТА: ЗЕМЛЯ." },
                { type: 'orion', content: "— Поехали." }
            ]
        },
        en: {
            title: "Chapter 3: Weapon Z-43",
            subtitle: "COMBAT PROTOCOL // TARGET DELETION",
            blocks: [
                { type: 'text', content: "The pain was blinding but strangely cold. Orion felt his forearm bones liquefying. The black substance spiked and grew. Nanites burst from his elbow, assembling into complex geometry—a long, predatory barrel hovering in a magnetic field." },
                { type: 'orion', content: "— What are you doing?!" },
                { type: 'onyx', content: "\"Calibrating.\"" },
                { type: 'text', content: "The ship shook again." },
                { type: 'enemy', content: "— Unknown vessel, cut your engines! Hand over the Artifact and we will spare your life. You have ten seconds." },
                { type: 'text', content: "Orion tried to speak, to beg for mercy, but his jaw clenched on its own. His body turned toward the windshield." },
                { type: 'onyx', content: "\"Ten seconds is too long to accept death.\"" },
                { type: 'orion', content: "— No, stop! The glass won't hold decompression! We'll die!" },
                { type: 'onyx', content: "\"This glass is quartz polymer. My beam will pass through it. Physics is just a set of suggestions, Orion. Watch.\"" },
                { type: 'text', content: "The arm-cannon raised. His visor flared with a purple glitch. A black sphere gathered at the tip of the Z-43 barrel. The charging sound was like reality itself groaning." },
                { type: 'enemy', content: "— Five seconds! Fire at wil..." },
                { type: 'code', content: ">> FIRE [Z43_VOID_BEAM]" },
                { type: 'text', content: "There was no gunshot sound. It was the sound of absence. A beam of corrupted data passed through the glass and struck the enemy flagship. No explosion followed. The ship simply began to vanish, dissolving into digital cubes. It was erased from existence." },
                { type: 'enemy', content: "— What was that?! He has an Armageddon-class weapon! Warp out!" },
                { type: 'text', content: "Orion stared at the empty space where living beings used to be. His arm cooled down, nanites retracting under his skin." },
                { type: 'orion', content: "— You erased them... You just deleted them." },
                { type: 'onyx', content: "\"Efficiency 100%. Threat eliminated. But one shot drained your bioreactors by 60%. We need sustenance. And shelter.\"" },
                { type: 'orion', content: "— You are a monster." },
                { type: 'onyx', content: "\"I am a survival tool. And now you are the sheath for this tool. Start the engines.\"" },
                { type: 'text', content: "Orion swallowed. There was no going back. With trembling fingers, he entered hyperjump coordinates." },
                { type: 'system', content: "— DESTINATION: SOL SYSTEM. PLANET: EARTH." },
                { type: 'orion', content: "— Let's go." }
            ]
        }
    },
{
        id: 4,
        ru: {
            title: "Глава 4: Бегство и Имя",
            subtitle: "СЕКТОР ЗЕМЛЯ // НОВАЯ ЛИЧНОСТЬ",
            blocks: [
                { type: 'text', content: "Гиперпрыжок всегда вызывал тошноту, но в этот раз было хуже. Вместо туннеля звезд Орион видел чужие сны: города из черного стекла, горящие небеса и миллиарды существ, в ужасе смотрящих вверх. Он чувствовал их страх." },
                { type: 'text', content: "Когда челнок вывалился в нормальное пространство, Ориона вырвало на панель приборов." },
                { type: 'system', content: "— Прибытие в систему Сол. Планета Земля. Орбитальный контроль отсутствует. Добро пожаловать в захолустье." },
                { type: 'text', content: "Земля. Древняя колыбель человечества, ставшая гигантским неоновым трущобом. Они сели в «Секторе 7», среди ржавых заводов и кислотного дождя." },
                { type: 'orion', content: "— Нам нужно спрятать корабль." },
                { type: 'onyx', content: "\"Не волнуйся. Я перехватил управление местными дроидами. Они завалят шлюз мусором через час. Никто не найдет.\"" },
                { type: 'text', content: "Орион поежился. Власть Оникса над техникой пугала. Они нашли убежище в подвале старой сборочной линии." },
                { type: 'orion', content: "— Кто ты на самом деле? Не ври про «протокол». Программы не имеют чувства юмора." },
                { type: 'text', content: "Из проектора на запястье сформировалась голограмма — черный лис с горящими фиолетовыми глазами." },
                { type: 'onyx', content: "\"Я — память. Я последний эхо-слепок разума главного Архитектора моей расы. Мы создали технологии, чтобы стать богами, но открыли дверь, которую не смогли закрыть.\"" },
                { type: 'orion', content: "— И что вышло оттуда?" },
                { type: 'onyx', content: "\"Тишина. Абсолютная энтропия. Она сожрала нас. Я сохранил себя в сфере, чтобы найти того, кто сможет закончить нашу войну.\"" },
                { type: 'orion', content: "— Значит, я теперь солдат в войне, которая закончилась миллион лет назад?" },
                { type: 'onyx', content: "\"Нет. Ты — хранитель. Но за Хранителем всегда приходят. Корпорация «Гелиос» видела запись. Они перевернут галактику.\"" },
                { type: 'orion', content: "— Мне нужно новое имя. Старого Ориона найдут по базе данных." },
                { type: 'text', content: "Он подошел к разбитому окну, глядя на огни кибер-рынка." },
                { type: 'orion', content: "— Мы — ошибка системы. Двоичный код, ставший плотью. Шип в заднице вселенной." },
                { type: 'onyx', content: "\"Binary... thorn. Байнариторн. Звучит достаточно пафосно для наемника. Мне нравится.\"" },
                { type: 'orion', content: "— Орион Байнариторн. Звучит неплохо." },
                { type: 'text', content: "Он поднял свою черную руку, сжал кулак, и фиолетовые жилы снова вспыхнули." },
                { type: 'orion', content: "— Ладно, Оникс. Если мы застряли вместе, давай установим правила. Ты не лезешь в мою личную жизнь. Я не пытаюсь тебя удалить. И мы выживаем. Любой ценой." },
                { type: 'onyx', content: "\"Принято. А теперь спи. Твой коленный сустав скрипит, это меня раздражает.\"" },
                { type: 'text', content: "Орион закрыл глаза. Шум дождя снаружи успокаивал. Он был беглецом, монстром и носителем апокалипсиса. Но впервые в жизни он чувствовал, что он не один." }
            ]
        },
        en: {
            title: "Chapter 4: Escape and Name",
            subtitle: "SECTOR EARTH // NEW IDENTITY",
            blocks: [
                { type: 'text', content: "The hyperjump usually caused nausea, but this time was worse. Instead of a star tunnel, Orion saw alien dreams: cities of black glass, burning skies, and billions of beings looking up in terror. He felt their fear." },
                { type: 'text', content: "When the shuttle dropped into normal space, Orion threw up on the dashboard." },
                { type: 'system', content: "— Arrival: Sol System. Planet Earth. No orbital control detected. Welcome to the backwater." },
                { type: 'text', content: "Earth. The ancient cradle of humanity, now a giant neon slum. They landed in 'Sector 7', amidst rusted factories and acid rain." },
                { type: 'orion', content: "— We need to hide the ship." },
                { type: 'onyx', content: "\"Don't worry. I've hijacked local cleaning droids. They'll bury the airlock in trash within an hour. No one will find it.\"" },
                { type: 'text', content: "Orion shivered. Onyx's control over tech was terrifying. They took shelter in an old assembly line basement." },
                { type: 'orion', content: "— Who are you, really? Don't lie about being a 'protocol'. Programs don't have a sense of humor." },
                { type: 'text', content: "A hologram formed from his wrist projector—a black fox with burning purple eyes." },
                { type: 'onyx', content: "\"I am memory. I am the last echo of the Architect's mind. We created technology to become gods, but we opened a door we couldn't close.\"" },
                { type: 'orion', content: "— And what came out?" },
                { type: 'onyx', content: "\"Silence. Absolute entropy. It consumed us. I saved myself in the sphere to find someone who could finish our war.\"" },
                { type: 'orion', content: "— So I'm a soldier in a war that ended a million years ago?" },
                { type: 'onyx', content: "\"No. You are a Guardian. But they always come for the Guardian. Helios Corp saw the footage. They will tear the galaxy apart.\"" },
                { type: 'orion', content: "— I need a new name. They'll find the old Orion in the database." },
                { type: 'text', content: "He walked to the broken window, looking at the cyber-market lights." },
                { type: 'orion', content: "— We are a system error. Binary code made flesh. A thorn in the universe's side." },
                { type: 'onyx', content: "\"Binary... thorn. Binarythorn. Sounds pretentious enough for a mercenary. I like it.\"" },
                { type: 'orion', content: "— Orion Binarythorn. Sounds good." },
                { type: 'text', content: "He raised his black hand, clenched his fist, and purple veins flared again." },
                { type: 'orion', content: "— Alright, Onyx. If we're stuck together, let's set rules. You stay out of my personal life. I don't try to delete you. And we survive. At any cost." },
                { type: 'onyx', content: "\"Accepted. Now sleep. Your knee joint is squeaking, it annoys me.\"" },
                { type: 'text', content: "Orion closed his eyes. The rain outside was soothing. He was a fugitive, a monster, and the carrier of an apocalypse. But for the first time in his life, he felt he wasn't alone." }
            ]
        }
    }
];