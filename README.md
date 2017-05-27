# Шаблон проекта для быстрого старта
Шаблон помогает быстро начать вёрстку проекта.

Склонировать репозиторий, перейти в созданную папку проекта, удалить скрытую папку _.git_:

``` bash
git clone https://github.com/4enki/spt.git new-project && cd $_ && rm -rf ./.git
```

Перед первым запуском нужно установить зависимости (_быстрее через [Yarn](https://yarnpkg.com); один раз на проект_):

``` bash
npm/yarn install
```

## Режимы сборки
Запуск живой сборки на локальном сервере:

``` bash
npm run start
```

Одноразовая сборка:

``` bash
npm run one
```

Сборка проекта и архивация в _*.zip_-архив:

``` bash
npm run zip
```

## Шаблонизация
Шаблоны собираются в папке `app/templates/` с помощью [gulp-file-include](https://github.com/coderhaoxin/gulp-file-include). Страницы размещаются в `app/templates/pages/` и состоят из блоков `app/templates/blocks/`.

Внутри отдельного блока размещается всё, что имеет к нему отношение — файл разметки, стили, JS, изображения.

Готовые страницы компилируются в корень папки `dist/`.

В шаблонах работает антикэш — к ссылкам на стили и скрипты добавляется md5-хэш.

## Стили
Верстаются в `app/styles/styles.pcss`, компилируются стили в файл `dist/assets/styles/style.css`.

### PostCSS-плагины и всякое
1. [Autoprefixer](https://github.com/postcss/autoprefixer), конечно же.
1. [CSS MQPacker](https://www.npmjs.com/package/css-mqpacker) — группирует медиазапросы и помещает их в конец CSS документа;
1. [PostCSS ASSETS](https://github.com/assetsjs/postcss-assets) — магия для работы с ресурсами сайта;
1. [PostCSS Sprites](https://github.com/2createStudio/postcss-sprites) — работа со спрайтами;
1. [Postcss Inline-SVG](https://github.com/TrySound/postcss-inline-svg) — работа с SVG;

## Графика и файлы проекта
Вся графика размещается в `app/images`, собираются в `dist/assets/images/` с сохранением структуры. 

В `app/images/_debug/` размещается графика для Pixel-perfect сравнения.

Изображения для отдельного блока размещаются в папке `app/templates/blocks/**/images/` и копируются в корень папки `dist/assets/images/` без сохранения структуры.

### Вектор
SVG-иконки собираются в папке `app/images/svg/`, в CSS так:

``` css
background-image: svg-load('name.svg', fill: #000');
```

### Растр
PNG-иконки для спрайтов собираются в папке `app/images/sprites/`, в CSS так:

``` css
background: url('images/sprites/name.png') no-repeat 0 0;
```

Общий спрайт автоматически собирается в `dist/assets/images/sprites/`.

## Статические файлы для копирования
Статические файлы автоматически собираются из директории `app/resources`, копируются в `dist/assets/resources/`. Структура при копировании сохраняется.

## Скрипты
Можно писать на es2015 — подключен и работает Babel. Включен jQuery v3.

Никаких `#id` для JS. Классы для JS в разметке начинаются с символа `_`, чтобы не мешать стили и логику в одну кучу. Исходники скриптов рамещены в `app/scripts/`, компилируются в `dist/assets/scripts/scripts.js`.

## Структура папок и файлов
```
├── app/                              # Исходники
│   ├── images/                       # Изображения и графика
│   │   ├── _debug/                   # Картинки для отладки (Pixel-perfect)
│   │   ├── i/                        # Favicons
│   │   ├── sprites/                  # Папка PNG-иконок для генерации растрового спрайта
│   │   └── svg/                      # SVG иконки
│   ├── resources                     # Статические файлы для копирования в /dist
│   │   └── robots.txt                # Роботс для поисковых систем
│   ├── scripts/                      # Скрипты
│   │   └── hover.js                  # Подсвечивает одинаковые ссылки
│   ├── styles/                       # Стили
│   │   ├── _debug/                   # Стили для отладки
│   │   │   ├── diagnostics.scss      # Быстрая диагностика
│   │   │   └── px2px.scss            # CSS-файл Pixel-perfect
│   │   ├── base/                     # Стандратные стили
│   │   │   ├── default.scss          # Базовые стили
│   │   │   ├── form.scss             # Формы и элементы
│   │   │   ├── table.scss            # Таблицы
│   │   │   └── typo.scss             # Типографика
│   │   ├── helpers/                  # Помощники
│   │   │   ├── animations.scss       # Анимации
│   │   │   ├── flexboxgrid.scss      # Сетка
│   │   │   ├── mixins.scss           # Миксины
│   │   │   └── normalize.scss        # Normalize
│   │   ├── variables.scss            # Переменные
│   │   └── style.scss                # Главный стилевой файл
│   └── templates/                    # Шаблоны
│       ├── blocks/                   # Блоки
│       │   ├── _base/                # Базовые блоки для общего шаблона
│       │   │   ├── _head.html        # Разметка блока <head>
│       │   │   ├── _icons.html       # Базовый джентльменский набор иконок всех пород
│       │   │   └── _social.html      # Базовый джентльменский набор OpenGraph-тегов
│       │   └── block/                # Блок
│       │       ├── images            # Изображения, используемые в этом блоке
│       │       ├── block.html        # Разметка блока
│       │       ├── block.sсss        # Стили блока
│       │       └── block.js          # Скрипт блока
│       └── pages/                    # Страницы
│           └── index.html            # Разметка карты сайта с прогрессом работ
├── dist/                             # Сборка проекта (автогенерация)
│   ├── assets/                       # Подключаемые ресурсы
│   │   ├── images/                   # Изображения
│   │   ├── scripts/                  # Скрипты
│   │   └── styles/                   # Стили
│   ├── robots.txt                    # Файл для поисковых систем
│   └── index.html                    # Карта сайта с прогрессом работ
├── gulpfile.js/                      # Конфиг Gulp.js
│   ├── tasks/                        # Отдельные файлы с задачами
│   ├── errorHandler.js               # Аккуратные ошибки, чтобы gulp не вылетал
│   ├── paths.js                      # Пути к ресурсам проекта
│   └── index.js                      # Основные задачи
├── .editorconfig                     # Конфигурационный файл IDE
├── .gitignore                        # Список исключённых файлов из Git
├── browserslist                      # Список поддерживаемых браузеров для Автопрефиксера
├── package.json                      # Список модулей и прочей информации
├── sass-lint.yml                     # Конфиг для линтинга scss
├── yarn.lock                         # Список модулей и прочей информации для Yarn
└── README.md                         # Документация проекта
```
