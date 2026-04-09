// Тип элемента списка — используется на Home, Search и Detail экранах
export type Item = {
  id: string;
  title: string;
  description: string;
  emoji: string;
};

// Мок-данные — в реальном приложении пришли бы с API
export const ITEMS: Item[] = [
  { id: '1', title: 'React Native', description: 'Фреймворк для создания нативных мобильных приложений с помощью React', emoji: '📱' },
  { id: '2', title: 'Expo Router', description: 'File-based routing — файлы в app/ автоматически становятся маршрутами', emoji: '🧭' },
  { id: '3', title: 'TypeScript', description: 'Статическая типизация поверх JavaScript — ловит ошибки до запуска', emoji: '🔷' },
  { id: '4', title: 'AsyncStorage', description: 'Локальное хранилище ключ-значение, как localStorage в вебе', emoji: '💾' },
  { id: '5', title: 'Reanimated', description: 'Анимации на UI-потоке — 60fps без блокировки JavaScript', emoji: '🎬' },
  { id: '6', title: 'Gesture Handler', description: 'Нативная обработка жестов: свайпы, пинчи, вращения', emoji: '👆' },
  { id: '7', title: 'Skia', description: '2D-графический движок от Google — кастомная графика с GPU-ускорением', emoji: '🎨' },
  { id: '8', title: 'EAS Build', description: 'Облачная сборка iOS/Android без локального Xcode или Android Studio', emoji: '🏗️' },
  { id: '9', title: 'Flexbox', description: 'Система лейаута в RN — по умолчанию column, без каскадности CSS', emoji: '📐' },
  { id: '10', title: 'Expo Haptics', description: 'Тактильная обратная связь — вибрация при взаимодействии', emoji: '📳' },
];
