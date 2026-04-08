# C4 Architecture Diagrams

C4 — четыре уровня детализации архитектуры: Context → Container → Component → Code.

---

## Level 1 — System Context
> Кто использует систему и с чем она взаимодействует.

```mermaid
C4Context
    title System Context — React Native Learning App

    Person(user, "Пользователь", "Открывает приложение на телефоне")

    System(app, "React Native App", "Мобильное приложение на Expo Router")

    SystemDb_Ext(storage, "AsyncStorage", "Локальное хранилище на устройстве")
    SystemDb_Ext(network, "Network / API", "Внешние данные (изображения, будущий API)")

    Rel(user, app, "Использует")
    Rel(app, storage, "Читает / записывает профиль")
    Rel(app, network, "Загружает данные")
```

---

## Level 2 — Container
> Из каких крупных частей состоит приложение.

```mermaid
C4Container
    title Container Diagram — React Native Learning App

    Person(user, "Пользователь")

    System_Boundary(app, "React Native App") {
        Container(router, "Expo Router", "File-based routing", "Управляет навигацией между экранами")

        Container(tabs, "Tab Navigator", "(tabs)/_layout.tsx", "Нижний таб-бар: Home / Search / Profile")

        Container(home, "Home Screen", "app/(tabs)/index.tsx", "Список элементов через FlatList")
        Container(search, "Search Screen", "app/(tabs)/search.tsx", "Поиск по элементам")
        Container(profile, "Profile Screen", "app/(tabs)/profile.tsx", "Профиль пользователя — имя, bio")

        Container(detail, "Detail Screen", "app/item/[id].tsx", "Детальный экран элемента по id")

        Container(auth, "Auth Screens", "app/(auth)/", "Login и Register — вне табов")
    }

    SystemDb_Ext(storage, "AsyncStorage", "Локальное хранилище")

    Rel(user, router, "Навигирует")
    Rel(router, tabs, "Показывает табы")
    Rel(tabs, home, "Home tab")
    Rel(tabs, search, "Search tab")
    Rel(tabs, profile, "Profile tab")
    Rel(home, detail, "Нажатие на элемент → [id]")
    Rel(profile, storage, "Сохраняет / загружает профиль")
    Rel(router, auth, "Редирект для неавторизованных")
```

---

## Level 3 — Component (Home Screen)
> Из чего состоит конкретный экран.

```mermaid
C4Component
    title Component Diagram — Home Screen

    Container_Boundary(home, "Home Screen — index.tsx") {
        Component(flatlist, "FlatList", "React Native", "Рендерит только видимые элементы списка")
        Component(item, "Item Component", "Pressable + View", "Один элемент списка — нажатие → навигация")
        Component(state, "useState / useEffect", "React Hooks", "Локальный стейт и загрузка данных")
        Component(router, "useRouter", "expo-router", "Программная навигация на [id].tsx")
    }

    SystemDb_Ext(storage, "AsyncStorage", "Локальное хранилище")
    Container_Ext(detail, "Detail Screen", "app/item/[id].tsx")

    Rel(flatlist, item, "Рендерит каждый элемент")
    Rel(item, router, "onPress вызывает router.push")
    Rel(router, detail, "Переход с передачей id")
    Rel(state, storage, "Загружает данные при монтировании")
```

---

## Планируемая структура файлов (Block 2)

```
app/
├── _layout.tsx              # Root layout (Stack)
├── (tabs)/
│   ├── _layout.tsx          # Tab navigator
│   ├── index.tsx            # Home — FlatList со списком
│   ├── search.tsx           # Search
│   └── profile.tsx          # Profile (перенесём сюда логику из index)
├── item/
│   └── [id].tsx             # Детальный экран
└── (auth)/
    ├── login.tsx
    └── register.tsx
```
