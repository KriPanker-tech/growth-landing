# Growth Landing

Статический лендинг для оффера «опытная команда под рост».

## Стек

- Astro
- Tailwind CSS
- TypeScript
- GitHub Pages через GitHub Actions

## Где править текст

Весь смысловой контент лежит в `src/content/landing.ts`.

Верстка страницы собрана из Astro-компонентов в `src/components/`.

## Команды

```sh
npm run dev
npm run build
npm run preview
```

## Публикация

Workflow `.github/workflows/deploy.yml` собирает сайт и публикует `dist/` в GitHub Pages после push в ветку `main`.

Для первого запуска в настройках репозитория на GitHub нужно выбрать `Settings -> Pages -> Source -> GitHub Actions`.

## Метрики

Метрики подключаются только если задан ID счетчика.

В GitHub: `Settings -> Secrets and variables -> Actions -> Variables`.

- `YANDEX_METRIKA_ID` — ID счетчика Яндекс.Метрики.
- `GA_MEASUREMENT_ID` — ID потока Google Analytics, если нужен GA4.

Если переменные пустые, сторонние скрипты метрик не загружаются.
