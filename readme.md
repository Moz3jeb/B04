# Report

Mohammed Alsayegh <7alsayegh@gmail.com>

## 4 State Management

| Task            | Done? | Comments                                                                 |
| :-------------- | :---- | :----------------------------------------------------------------------- |
| Components      | [x]   | Collection, Deck, Slide, Card under `components/`                        |
| Server          | [x]   | `app/layout.jsx` is a server component; `app/actions.js` is server-only  |
| Client          | [x]   | `app/page.jsx` and all four components marked with `"use client"`        |
| Fetching        | [x]   | All requests use `credentials: "include"` against `NEXT_PUBLIC_API_BASE` |
| Rendering       | [x]   | Type-specific card content (foreign-word, playing-card, string-list)     |
| Drilling        | [x]   | `favorites` and `isTagSelected` drilled from page → collection → … card  |
| Conditionals    | [x]   | `filtered` class on hidden cards; favorite styling on `Card`             |
| Events          | [x]   | Click to shuffle, click to filter, Alt+click to isolate, submit to add   |
| Hooks           | [x]   | `useState`, `useEffect`, `useMemo` (tag aggregation) in page/deck/slide  |
| Icons           | [x]   | `lucide-react` (`Plus`, `X`, `Heart`) on every action button             |
| Callbacks       | [x]   | `onRefresh`, `onToggleFavorite`, `onToggleTag` passed down               |
| Synchronization | [x]   | `stale` flag pattern from Guide 9; re-fetch after every mutation         |
| Actions         | [x]   | `toggleFavorite` / `getFavorites` server actions in `app/actions.js`     |
| Screenshots     | [ ]   | To be added under `results/`                                             |
| Report          | [x]   | This file                                                                |
| Plagiarism      | [x]   | All code authored for this assignment                                    |

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Notes

- Tags above a deck/slide are computed with `useMemo` from its descendants.
- Filter bar at the top: click a tag to toggle it; Alt+click to isolate.
- Click a card body to shuffle (PATCH); the heart button toggles favorite via a
  server action; the X button deletes (DELETE).
- Favorites are kept in a module-level array in `actions.js` (non-persistent,
  per spec).
