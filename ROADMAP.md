# Онбординг-роадмап: от базового Expo к production-анимациям за 20 часов

Этот роадмап превращает разрозненные знания о React Native/Expo в системное понимание production-разработки с акцентом на высокопроизводительные анимации. **20 часов разделены на 6 блоков**, каждый со своей целью, ресурсами и практическим заданием. Порядок блоков выстроен так, чтобы каждый следующий опирался на предыдущий: сначала фундамент платформы, потом навигация, затем сборка и деплой, и наконец — три связанных анимационных блока (Reanimated → Gesture Handler → Skia).

Главный принцип: **70% времени — практика, 30% — чтение документации и просмотр видео**. Не пытайся прочитать всё — смотри видео на 1.5×, открывай доку по ходу написания кода, а мини-задание делай сразу после каждого блока.

---

## Прогресс

| Блок | Тема | Часы | Статус |
|------|------|------|--------|
| 1 | Expo + React Native база | 3 ч | ⬜ |
| 2 | Expo Router + навигация | 3 ч | ⬜ |
| 3 | EAS + Dev Builds + Config Plugins | 2 ч | ⬜ |
| 4 | React Native Reanimated 3 | 5 ч | ⬜ |
| 5 | Gesture Handler | 4 ч | ⬜ |
| 6 | React Native Skia | 3 ч | ⬜ |

---

## Блок 1. Expo + React Native база (3 часа)

**Цель блока:** уверенно работать с компонентами, стилями, хуками и нативными API в TypeScript-проекте на Expo.

### Что изучить

Начни с ключевых компонентов React Native (`View`, `Text`, `Image`, `ScrollView`, `FlatList`, `TextInput`, `Pressable`) и системы стилей. **StyleSheet.create** — не CSS: здесь Flexbox по умолчанию работает в `column`-направлении, нет каскадности, а стили — это объекты. Разбери `flexDirection`, `justifyContent`, `alignItems`, `flex`, `gap`, `position: 'absolute'`.

По хукам: `useState` и `useEffect` ты знаешь из React, но обрати особое внимание на **useRef** (для хранения ссылок без ре-рендера — критично для анимаций), **useCallback** и **useMemo** (мемоизация — нужна для оптимизации рендеров в длинных списках и при работе с Reanimated). Разбери, почему неправильное использование этих хуков вызывает лишние ре-рендеры.

Нативные API Expo: `expo-haptics` для тактильного отклика, `expo-notifications` для пушей, `@react-native-async-storage/async-storage` для локального хранения, `expo-secure-store` для чувствительных данных. TypeScript в Expo настраивается через `tsconfig.json` — Expo поддерживает TS из коробки.

### Документация

- Компоненты React Native: https://reactnative.dev/docs/intro-react-native-components
- Flexbox: https://reactnative.dev/docs/flexbox
- React-хуки в RN: https://reactnative.dev/docs/intro-react
- Expo SDK (все модули): https://docs.expo.dev/versions/latest/
- AsyncStorage: https://docs.expo.dev/versions/latest/sdk/async-storage/
- Локальное хранение данных: https://docs.expo.dev/develop/user-interface/store-data/
- Expo Notifications: https://docs.expo.dev/versions/latest/sdk/notifications/
- Expo Haptics: https://docs.expo.dev/versions/latest/sdk/haptics/
- TypeScript в Expo: https://docs.expo.dev/guides/typescript/

### Видео и курсы

**Kadi Kraman** — ведущий разработчик Expo и лучший источник для этого блока. Её курс на Frontend Masters «React Native v3» (2024) покрывает компоненты, стили, FlatList, AsyncStorage, Haptics, Notifications и Expo Router. **Бесплатные текстовые материалы** к курсу доступны по ссылке: https://kadikraman.github.io/react-native-v3-course/. Курс: https://frontendmasters.com/courses/react-native-v3/

Полезная статья от Kadi для понимания различий web vs native: https://expo.dev/blog/from-web-to-native-with-react

### GitHub-репозитории

- **Obytes React Native Template** — production-ready стартер с Expo Router, TypeScript, TailwindCSS (NativeWind), React Query, Zustand, EAS, GitHub Actions. **⭐ 4.1k stars**. Изучи структуру проекта — это эталон: https://github.com/obytes/react-native-template-obytes. Документация: https://starter.obytes.com

### Мини-задание

Создай экран «Профиль пользователя» с помощью `npx create-expo-app@latest`. На экране: аватар (`Image`), имя и bio (`Text`), кнопка «Сохранить» (`Pressable` с `expo-haptics` при нажатии). Данные профиля сохраняй в `AsyncStorage` и загружай при открытии через `useEffect`. Вёрстку сделай полностью на Flexbox. Весь код — на TypeScript с типизированными пропсами и стейтом.

> **Статус:** ⬜ Не начато

---

## Блок 2. Expo Router + навигация (3 часа)

**Цель блока:** собрать многоэкранное приложение с file-based routing, табами, вложенными layout'ами и типизированными маршрутами.

### Что изучить

Expo Router — это file-based routing поверх React Navigation. Файлы в директории `app/` автоматически становятся маршрутами. Ключевые концепции: **`_layout.tsx`** — определяет layout (Stack, Tabs, Drawer) для группы экранов; **route groups `(groupName)`** — группировка без влияния на URL (удобно для auth/unauth разделения); **динамические маршруты `[id].tsx`** — параметризованные экраны; **typed routes** — TypeScript-автогенерация типов маршрутов через `experiments.typedRoutes` в `app.json`.

Навигация осуществляется через компонент `<Link>` или хук `useRouter()` (`router.push`, `router.replace`, `router.back`). Deep linking работает из коробки — каждый файл-маршрут автоматически получает URL-схему. Табы реализуются через `<Tabs>` layout в `_layout.tsx`.

### Документация

- Введение в Expo Router: https://docs.expo.dev/router/introduction/
- File-based routing: https://docs.expo.dev/develop/file-based-routing/
- Core concepts: https://docs.expo.dev/router/basics/core-concepts/
- Нотация (groups, dynamic): https://docs.expo.dev/router/basics/notation/
- Layouts (Stack, Tabs, Drawer): https://docs.expo.dev/router/basics/layout/
- Навигация и deep linking: https://docs.expo.dev/router/basics/navigation/
- Typed Routes: https://docs.expo.dev/router/reference/typed-routes/
- Route groups (advanced): https://docs.expo.dev/router/advanced/shared-routes/
- Аутентификация: https://docs.expo.dev/router/advanced/authentication/
- Native intent (deep links от сторонних сервисов): https://docs.expo.dev/router/advanced/native-intent/

### Видео и курсы

**Kadi Kraman** выпустила в 2025 году бесплатную серию видео на YouTube, покрывающую Expo Router от и до: file-based routing, layouts, навигационные паттерны, универсальные приложения. Ссылки — на её сайте https://kadi.dev/ и в профиле GitHub https://github.com/kadikraman.

**Code with Beto** — «Expo Router — Beginner's Crash Course» (2024, ~49 мин): настройка проекта, auth-flow, работа с контекстом.

Также полезен интерактивный туториал от Expo: https://docs.expo.dev/tutorial/add-navigation/

### GitHub-репозитории

- **Obytes Template** (повторно) — отличный пример структуры Expo Router в production: https://github.com/obytes/react-native-template-obytes
- Профиль Kadi Kraman с учебными проектами: https://github.com/kadikraman

### Мини-задание

Построй приложение с **3 табами** (Home, Search, Profile) через Expo Router. В табе Home сделай список элементов (`FlatList`), при нажатии на элемент — переход на динамический экран `[id].tsx` с деталями. Добавь **route group** `(auth)` с экранами Login и Register, отдельными от основных табов. Включи `experiments.typedRoutes` в `app.json` и убедись, что все навигационные вызовы типизированы — TypeScript должен ругаться, если ты передаёшь несуществующий маршрут.

> **Статус:** ⬜ Не начато

---

## Блок 3. EAS + Dev Builds + Config Plugins (2 часа)

**Цель блока:** понять production pipeline Expo — от dev-сборок до OTA-обновлений.

### Что изучить

**Expo Go vs Development Build** — принципиальное различие. Expo Go — это готовое приложение с предустановленным набором нативных модулей. Dev Build — кастомная сборка с твоими конкретными нативными зависимостями. Для production и любых кастомных нативных библиотек (Reanimated, Skia, Gesture Handler) **нужен именно dev build**.

**Config Plugins** — механизм, через который Expo модифицирует нативный код (AndroidManifest, Info.plist, Podfile) декларативно, без ручного редактирования. **Prebuild** (`npx expo prebuild`) — генерация `ios/` и `android/` директорий из конфигурации. Это часть подхода **Continuous Native Generation (CNG)** — нативный код генерируется, а не пишется вручную.

**EAS Build** — облачный CI/CD: собирает iOS/Android-бинарники без локального Xcode/Android Studio. Конфигурируется через `eas.json` с профилями (`development`, `preview`, `production`). **EAS Update** — OTA-обновления JavaScript-бандла без пересборки нативной части. Работает через каналы (channels), ветки (branches) и runtime-версии.

### Документация

- Expo Go vs Dev Builds: https://docs.expo.dev/develop/development-builds/introduction/
- Миграция с Expo Go: https://docs.expo.dev/develop/development-builds/expo-go-to-dev-build/
- Создание dev build: https://docs.expo.dev/develop/development-builds/create-a-build/
- Config Plugins: https://docs.expo.dev/config-plugins/plugins/
- CNG / Prebuild: https://docs.expo.dev/workflow/continuous-native-generation/
- Обзор workflow: https://docs.expo.dev/workflow/overview/
- EAS Build — введение: https://docs.expo.dev/build/introduction/
- Конфигурация eas.json: https://docs.expo.dev/build/eas-json/
- Полная схема eas.json: https://docs.expo.dev/eas/json/
- EAS Update — введение: https://docs.expo.dev/eas-update/introduction/
- Как работает EAS Update: https://docs.expo.dev/eas-update/how-it-works/
- Runtime Versions: https://docs.expo.dev/eas-update/runtime-versions/
- Отправка OTA: https://docs.expo.dev/deploy/send-over-the-air-updates/
- Туториал по EAS: https://docs.expo.dev/tutorial/eas/configure-development-build/

### Видео и курсы

**Kadi Kraman** — курс «Intermediate React Native v2» на Frontend Masters (2024) покрывает dev builds, EAS Build, подпись приложений и деплой в сторы: https://frontendmasters.com/courses/intermediate-react-native-v2/. Также её бесплатная серия по EAS на YouTube (ссылки на https://kadi.dev/).

На страницах документации Expo встроены видео от **Keith Kurak** (Expo team) и **Code with Beto** с объяснениями dev builds и EAS.

### Мини-задание

Возьми приложение из Блока 2. Настрой **eas.json** с тремя профилями: `development` (dev build с dev-client), `preview` (для тестирования командой), `production` (для стора). Запусти `npx expo prebuild` и изучи сгенерированные `ios/` и `android/` директории — найди, где применяются config plugins. Собери dev build через `eas build --profile development --platform android` (или iOS). Затем внеси косметическое изменение в UI и отправь OTA-обновление через `eas update` — убедись, что приложение обновилось без пересборки.

> **Статус:** ⬜ Не начато

---

## Блок 4. React Native Reanimated 3 (5 часов)

**Цель блока:** уверенно создавать плавные 60 fps анимации на UI-потоке, понимая worklet-архитектуру.

### Что изучить

Reanimated — это **анимационная библиотека, работающая на UI-потоке** через механизм worklets. В отличие от стандартного `Animated` API, Reanimated не блокирует JS-поток — анимации не тормозят даже при тяжёлых вычислениях на JS-стороне.

**Ключевые примитивы:**
- **`useSharedValue`** — реактивное значение, живущее на UI-потоке. Аналог `useRef`, но доступен из worklets. Изменение `.value` не вызывает ре-рендер React
- **`useAnimatedStyle`** — создаёт стиль, который обновляется на UI-потоке при изменении shared values
- **`withTiming`** — анимация с easing-кривой (линейная, ease-in-out и др.)
- **`withSpring`** — пружинная анимация с физической моделью (damping, stiffness, mass)
- **`withDecay`** — инерционное затухание (для свайпов и бросков)
- **Модификаторы:** `withDelay`, `withSequence`, `withRepeat` — комбинирование анимаций

**Layout Animations** — анимации появления/исчезновения/перестановки компонентов декларативно: `entering={FadeIn}`, `exiting={SlideOutRight}`. **Keyframe** — покадровая анимация с процентными ключевыми точками.

**Scroll APIs** — `useAnimatedScrollHandler` для отслеживания скролла на UI-потоке (parallax-эффекты, sticky headers, scroll-driven анимации).

**Worklets** — функции, помеченные директивой `'worklet'`, исполняются на UI-потоке. Это фундамент производительности Reanimated — понимание worklets необходимо для дебага.

### Документация

- Главная: https://docs.swmansion.com/react-native-reanimated/
- useSharedValue: https://docs.swmansion.com/react-native-reanimated/docs/core/useSharedValue/
- useAnimatedStyle: https://docs.swmansion.com/react-native-reanimated/docs/core/useAnimatedStyle/
- withTiming: https://docs.swmansion.com/react-native-reanimated/docs/animations/withTiming/
- withSpring: https://docs.swmansion.com/react-native-reanimated/docs/animations/withSpring/
- withDecay: https://docs.swmansion.com/react-native-reanimated/docs/animations/withDecay/
- Модификаторы (withRepeat, withSequence, withDelay): https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/applying-modifiers/
- Layout Animations: https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/
- Custom Layout Animations: https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/custom-animations/
- Keyframe: https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/keyframe-animations/
- useAnimatedScrollHandler: https://docs.swmansion.com/react-native-reanimated/docs/scroll/useAnimatedScrollHandler/
- Worklets (глоссарий): https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary/
- Кастомизация анимаций: https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/customizing-animation/
- Производительность: https://docs.swmansion.com/react-native-reanimated/docs/guides/performance/
- Интерактивные примеры: https://docs.swmansion.com/react-native-reanimated/examples/

### Видео и курсы

**William Candillon** — канал «Can it be done in React Native?» (https://youtube.com/wcandillon). Это **главный YouTube-ресурс по анимациям в RN**: десятки эпизодов с Reanimated, от воссоздания UI Airbnb и Coinbase до сложных физических анимаций. Его платный курс: https://start-react-native.dev/

**Enzo Mangano (Reactiive)** — канал https://www.youtube.com/@Reactiive. Серия «Animate with Reanimated» — пошаговые туториалы от основ до продвинутых паттернов. Его платный курс https://reanimate.dev/ — 17 модулей: shared values, withTiming, withSpring, scroll handlers, layout animations, Skia, шейдеры.

**Catalin Miron** — канал https://www.youtube.com/c/catalinmirondev. FlatList-анимации, parallax-карусели, пагинация — всё на Reanimated. Также стримы с live-кодингом.

### GitHub-репозитории

- **William Candillon — can-it-be-done-in-react-native** (⭐ 4.2k) — исходники всех эпизодов YouTube-серии: https://github.com/wcandillon/can-it-be-done-in-react-native
- **Enzo Mangano — demos** (⭐ 1.5k+) — **110+ анимационных демо** с Reanimated, Gesture Handler и Skia: https://github.com/enzomanuelmangano/demos
- **Enzo Mangano — animate-with-reanimated** — код к YouTube-серии: https://github.com/enzomanuelmangano/animate-with-reanimated
- **Официальный репозиторий Reanimated**: https://github.com/software-mansion/react-native-reanimated

### Мини-задание

Создай анимированный **карточный стек** (3–5 карточек, уложенных друг на друга). При свайпе вверх верхняя карточка улетает с `withSpring` и `withTiming` (вращение + перемещение), следующая карточка масштабируется до полного размера. При добавлении новой карточки используй `entering={FadeIn.springify()}`. Весь скролл-хэндлер сделай через `useAnimatedScrollHandler`, карточки — через `useSharedValue` + `useAnimatedStyle`. Убедись, что анимации работают на **60 fps** — проверь через React Native Performance Monitor.

> **Статус:** ⬜ Не начато

---

## Блок 5. Gesture Handler (4 часа)

**Цель блока:** реализовывать сложные жестовые взаимодействия и связывать их с анимациями Reanimated.

### Что изучить

React Native Gesture Handler обрабатывает жесты на нативном уровне, минуя JS-поток. Ключевой компонент — **`GestureDetector`**, который оборачивает анимированные View и принимает объект жеста.

**Типы жестов:**
- **`Gesture.Tap()`** — нажатие. `onStart`, `onEnd`, `numberOfTaps` для двойного тапа
- **`Gesture.Pan()`** — перетаскивание. `translationX/Y`, `velocityX/Y` в коллбэках. Главный жест для drag-and-drop, свайпов, bottom sheet'ов
- **`Gesture.Pinch()`** — щипок двумя пальцами. `scale`, `focalX/Y`. Для зума изображений и карт
- **`Gesture.Rotation()`** — вращение двумя пальцами. `rotation` в радианах
- **`Gesture.LongPress()`** — долгое нажатие. `minDuration` для настройки порога

**Gesture Composition** — комбинирование жестов:
- **`Gesture.Race()`** — побеждает первый активированный жест, остальные отменяются
- **`Gesture.Simultaneous()`** — все жесты работают одновременно (pinch + rotation для редактора изображений)
- **`Gesture.Exclusive()`** — приоритет по порядку: первый подходящий жест забирает управление

**Интеграция с Reanimated** — коллбэки жестов автоматически выполняются как worklets на UI-потоке. Ты просто обновляешь `sharedValue.value` внутри `onUpdate`, а `useAnimatedStyle` подхватывает изменения мгновенно.

### Документация

- Главная: https://docs.swmansion.com/react-native-gesture-handler/
- Введение: https://docs.swmansion.com/react-native-gesture-handler/docs/
- GestureDetector: https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/gesture-detector/
- Все жесты: https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/gesture/
- Pan gesture: https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/pan-gesture/
- Rotation gesture: https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/rotation-gesture/
- Composed gestures: https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/composed-gestures/
- Gesture composition guide: https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/gesture-composition/
- Интеграция с Reanimated: https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/handling-gestures/
- Pressable компонент: https://docs.swmansion.com/react-native-gesture-handler/docs/components/pressable/
- Официальный репозиторий: https://github.com/software-mansion/react-native-gesture-handler

### Видео и курсы

**William Candillon** покрывает Gesture Handler практически в каждом эпизоде: Instagram pinch-to-zoom, Uber Eats swipe-to-delete, Spotify bottom sheet, circular gestures. Канал: https://youtube.com/wcandillon. Платный курс: https://start-react-native.dev/

**Enzo Mangano** — в курсе https://reanimate.dev/ отдельные модули по Pan Gesture и Tap Gesture. На YouTube (@Reactiive) — туториалы по gesture-driven анимациям.

**Catalin Miron** — карусели и взаимодействия на жестах: https://www.youtube.com/c/catalinmirondev

### GitHub-репозитории

- **wcandillon/can-it-be-done-in-react-native**: https://github.com/wcandillon/can-it-be-done-in-react-native
- **enzomanuelmangano/demos** — 110+ демо, многие с жестами: https://github.com/enzomanuelmangano/demos
- **Официальный репозиторий Gesture Handler**: https://github.com/software-mansion/react-native-gesture-handler

### Мини-задание

Построй **интерактивный просмотрщик изображений** с тремя одновременными жестами: `Gesture.Pan()` для перетаскивания, `Gesture.Pinch()` для зума, `Gesture.Rotation()` для поворота. Объедини их через `Gesture.Simultaneous()`. При отпускании: если `scale < 0.8` — карточка «улетает» с `withDecay`, иначе — возвращается на место с `withSpring`. Добавь `Gesture.Tap().numberOfTaps(2)` для возврата к исходному состоянию. Все значения (`translateX`, `translateY`, `scale`, `rotation`) храни в `useSharedValue`, стиль обновляй через `useAnimatedStyle`.

> **Статус:** ⬜ Не начато

---

## Блок 6. React Native Skia (3 часа)

**Цель блока:** рисовать кастомную графику, интегрировать Skia с Reanimated и Gesture Handler, понимать основы шейдеров.

### Что изучить

React Native Skia — это **2D-графический движок от Shopify**, построенный на Google Skia (том же, что лежит в основе Chrome и Flutter). Он позволяет рисовать произвольную графику с **GPU-ускорением** прямо в React Native.

**Canvas** — корневой компонент, внутри которого живут все Skia-элементы. **Примитивы**: `Circle`, `Rect`, `RoundedRect`, `Path`, `Line`, `Points` — базовые фигуры. **Paint** — стиль отрисовки (цвет, обводка, заливка, градиенты, тени). **Group** — группировка элементов с общими трансформациями.

**Интеграция с Reanimated** — `useSharedValue` из Reanimated напрямую работает в Skia-свойствах. Например, `<Circle r={radius} />` где `radius` — shared value, анимируется на UI-потоке без моста. Это ключевое преимущество: **Skia + Reanimated = анимированная векторная графика на 60 fps**.

**Интеграция с Gesture Handler** — через shared values: жест обновляет shared value, Skia-элемент реагирует мгновенно. Пример — arc slider с GestureDetector + Skia Canvas.

**Шейдеры** — GLSL-программы для пиксельных эффектов: `RuntimeShader` для кастомных шейдеров, `ImageShader` для текстур, плюс встроенные фильтры (blur, color matrix, displacement). Шейдеры — мощный инструмент для эффектов уровня «liquid glass» или «shader transitions».

### Документация

- Установка: https://shopify.github.io/react-native-skia/docs/getting-started/installation
- Hello World: https://shopify.github.io/react-native-skia/docs/getting-started/hello-world
- Canvas: https://shopify.github.io/react-native-skia/docs/canvas/overview
- Shapes (Path, Circle, Rect...): https://shopify.github.io/react-native-skia/docs/shapes/path
- Paint: https://shopify.github.io/react-native-skia/docs/paint/overview
- Group: https://shopify.github.io/react-native-skia/docs/group
- Images: https://shopify.github.io/react-native-skia/docs/images
- Shaders: https://shopify.github.io/react-native-skia/docs/shaders/overview
- Image Filters: https://shopify.github.io/react-native-skia/docs/image-filters/overview
- Backdrop Filters: https://shopify.github.io/react-native-skia/docs/backdrops-filters
- Mask: https://shopify.github.io/react-native-skia/docs/mask
- Path Effects: https://shopify.github.io/react-native-skia/docs/path-effects
- **Анимации (Reanimated integration)**: https://shopify.github.io/react-native-skia/docs/animations/animations
- **Все видео-туториалы**: https://shopify.github.io/react-native-skia/docs/tutorials
- Expo SDK-интеграция: https://docs.expo.dev/versions/latest/sdk/skia/
- Статья Shopify Engineering: https://shopify.engineering/getting-started-with-react-native-skia

### Видео и курсы

**William Candillon** — основной контрибьютор Skia. Его канал https://youtube.com/wcandillon содержит десятки Skia-туториалов: «Liquid Glass with React Native Skia», «Shader Transitions», «Neumorphism in React Native», «Charts in React Native Skia», «Introduction to Game Development with Expo, Skia and Reanimated». Полный список — на странице туториалов Skia: https://shopify.github.io/react-native-skia/docs/tutorials

**Enzo Mangano (@Reactiive)** — «Metaball Animation in React Native Skia», «Animated Blur Cards with React Native Skia», «Grid Magnification in React Native Skia», «Arc Slider with React-Native Skia, Gesture Handler and Reanimated». Канал: https://www.youtube.com/@Reactiive

### GitHub-репозитории

- **Shopify/react-native-skia** (⭐ 8.3k) — официальный репозиторий: https://github.com/Shopify/react-native-skia
- **wcandillon/can-it-be-done-in-react-native** — поздние сезоны с Skia: https://github.com/wcandillon/can-it-be-done-in-react-native
- **enzomanuelmangano/demos** — Skia-анимации среди 110+ демо: https://github.com/enzomanuelmangano/demos

### Мини-задание

Создай **анимированный прогресс-индикатор** на Skia Canvas. Нарисуй кольцо (`Path` с дугой) с градиентной заливкой, прогресс которого анимируется через `useSharedValue` + `withTiming`. Добавь `Gesture.Pan()` — при горизонтальном свайпе пользователь вручную меняет прогресс (shared value обновляется из жеста, Skia Path мгновенно перерисовывается). В центре кольца отобрази процент через Skia Text. Добавь простой `RuntimeShader` для glow-эффекта вокруг заполненной части кольца.

> **Статус:** ⬜ Не начато

---

## Сводка ресурсов и авторов

### Официальная документация

| Библиотека | Ссылка |
|-----------|--------|
| Expo | https://docs.expo.dev |
| Reanimated | https://docs.swmansion.com/react-native-reanimated/ |
| Gesture Handler | https://docs.swmansion.com/react-native-gesture-handler/ |
| Skia | https://shopify.github.io/react-native-skia/ |
| React Native | https://reactnative.dev/docs |

### Авторы и каналы

| Автор | YouTube | GitHub | Курс |
|-------|---------|--------|------|
| William Candillon | https://youtube.com/wcandillon | https://github.com/wcandillon | https://start-react-native.dev/ |
| Enzo Mangano (Reactiive) | https://www.youtube.com/@Reactiive | https://github.com/enzomanuelmangano | https://reanimate.dev/ |
| Catalin Miron | https://www.youtube.com/c/catalinmirondev | https://github.com/catalinmiron | https://www.animatereactnative.com/ |
| Kadi Kraman | — | https://github.com/kadikraman | https://frontendmasters.com/courses/react-native-v3/ |

Бесплатные материалы Kadi: https://kadikraman.github.io/react-native-v3-course/ | Сайт: https://kadi.dev/

### Ключевые GitHub-репозитории

| Репозиторий | Stars | Назначение |
|------------|-------|-----------|
| https://github.com/obytes/react-native-template-obytes | ⭐ 4.1k | Production-ready стартер |
| https://github.com/wcandillon/can-it-be-done-in-react-native | ⭐ 4.2k | Исходники YouTube-серии |
| https://github.com/enzomanuelmangano/demos | ⭐ 1.5k+ | 110+ анимационных демо |
| https://github.com/enzomanuelmangano/animate-with-reanimated | — | Код к YouTube-серии |
| https://github.com/Shopify/react-native-skia | ⭐ 8.3k | Официальный Skia |
| https://github.com/animate-react-native | — | Open-source компоненты |

### Утилиты

- react-native-redash (хелперы для Reanimated): https://github.com/wcandillon/react-native-redash
- Expo Learning Hub: https://expo.dev/learn

---

## Как использовать этот роадмап максимально эффективно

Двигайся строго по порядку блоков — каждый следующий опирается на предыдущий. Блоки 1–3 (Expo-фундамент, **8 часов**) можно пройти за первую неделю; блоки 4–6 (анимации, **12 часов**) — за вторую. Не пропускай мини-задания: именно они превращают прочитанное в навык. Репозиторий **enzomanuelmangano/demos** — лучший источник для «подглядывания» паттернов, когда застрял. А канал William Candillon — для вдохновения и понимания, что вообще возможно сделать на Reanimated + Skia.
