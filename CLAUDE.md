# CLAUDE.md

This is an Expo React Native learning project. The goal is to work through a structured 20-hour roadmap (see `ROADMAP.md`) covering Expo fundamentals, navigation, EAS builds, Reanimated, Gesture Handler, and Skia.

## Project Stack

- **Expo** ~54, **expo-router** ~6 (file-based routing)
- **React Native** 0.81.5, **React** 19.1.0
- **TypeScript** ~5.9 with strict mode
- **New Architecture** enabled (`newArchEnabled: true`)
- **React Compiler** enabled (`experiments.reactCompiler: true`)
- **Typed Routes** enabled (`experiments.typedRoutes: true`)

## Project Structure

```
app/
  _layout.tsx          # Root layout
  (tabs)/
    _layout.tsx        # Tab navigator
    index.tsx          # Home screen
    explore.tsx        # Explore screen
  modal.tsx            # Modal screen
components/            # Shared UI components
constants/
  theme.ts             # Colors + Fonts (light/dark)
hooks/
  use-color-scheme.ts
  use-theme-color.ts
assets/                # Images, fonts
```

## Path Alias

`@/` maps to the project root. Always use it for imports:
```ts
import { Colors } from '@/constants/theme';
import { HapticTab } from '@/components/haptic-tab';
```

## Conventions

- All files use **kebab-case** (e.g. `haptic-tab.tsx`, `use-color-scheme.ts`)
- All components and hooks are typed with TypeScript — no `any`
- Styles use `StyleSheet.create()`, not inline objects
- Dark/light theming via `useColorScheme()` + `Colors` from `constants/theme.ts`
- Platform-specific files use the `.web.ts` / `.ios.ts` / `.android.ts` suffix convention

## Commands

```bash
# Start dev server
npm start

# Run on platform
npm run ios
npm run android
npm run web

# Lint
npm run lint

# Reset to blank project
npm run reset-project
```

## Learning Roadmap

See `ROADMAP.md` for the full 20-hour plan. Current focus blocks:

1. **Блок 1** — Expo + RN base (3h) ⬜
2. **Блок 2** — Expo Router + навигация (3h) ⬜
3. **Блок 3** — EAS + Dev Builds (2h) ⬜
4. **Блок 4** — Reanimated 3 (5h) ⬜
5. **Блок 5** — Gesture Handler (4h) ⬜
6. **Блок 6** — React Native Skia (3h) ⬜

## Key Dependencies (Animation Blocks)

When working on Blocks 4–6, these are already installed:
- `react-native-reanimated` ~4.1.1
- `react-native-gesture-handler` ~2.28.0

Skia (`@shopify/react-native-skia`) will need to be added for Block 6.

---

## Workflow Orchestration

### 1. Plan Node Default

- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately — don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy

- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

### 3. Self-Improvement Loop

- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Write rules that prevent the same mistake from recurring
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant context

### 4. Verification Before Done

- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness

### 5. Demand Elegance (Balanced)

- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes — don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing

- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests — then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how

---

## Task Management

1. **Plan First** — write plan to `tasks/todo.md` with checkable items
2. **Verify Plan** — check in before starting implementation
3. **Track Progress** — mark items complete as you go
4. **Explain Changes** — high-level summary at each step
5. **Document Results** — add review section to `tasks/todo.md`
6. **Capture Lessons** — update `tasks/lessons.md` after corrections

---

## Core Principles

- **Simplicity First** — make every change as simple as possible; impact minimal code
- **No Laziness** — find root causes; no temporary fixes; senior developer standards
- **Minimal Impact** — changes should only touch what's necessary; avoid introducing bugs
