# OnJourney Svelte Client

Frontend aplikasi OnJourney berbasis SvelteKit + TypeScript dengan package manager `bun`.

Project ini merupakan hasil integrasi beberapa modul (explore, travel agent, auth, booking) ke dalam satu aplikasi dengan routing terpusat dan beberapa redirect kompatibilitas untuk URL lama.

## Tech Stack

- `SvelteKit` + `Svelte`
- `TypeScript`
- `Tailwind CSS`
- `Vitest` + `Playwright`
- `ESLint` + `Prettier`
- Package manager: `bun`

## Jalankan Dengan Bun

### 1) Install dependency

```sh
bun install
```

### 2) Jalankan development server

```sh
bun run dev
```

Opsional buka otomatis di browser:

```sh
bun run dev -- --open
```

### 3) Type check / Svelte check

```sh
bun run check
```

### 4) Lint

```sh
bun run lint
```

### 5) Unit test

```sh
bun run test
```

### 6) Build production

```sh
bun run build
```

### 7) Preview hasil build

```sh
bun run preview
```

## Routing Utama

Berikut route utama yang dipakai saat ini:

- `/` — homepage
- `/explore`
- `/explore/packages`
- `/explore/agents`
- `/explore/destination`
- `/travel-agent/[slug]`
- `/travel-agent/[slug]/packages`
- `/travel-agent/[slug]/packages/detail/[packageId]`
- `/trip/personalized`
- `/transport`
- `/travel-story`
- `/auth/login`
- `/auth/register`
- `/auth/forgot-password`
- `/booking`
- `/booking/payment`
- `/booking/summary`

Route tambahan/dev:

- `/demo`
- `/demo/playwright`
- `/Saved` (legacy route)

## Redirect Kompatibilitas (Legacy URL)

Redirect server-side yang tersedia:

- `/login` -> `/auth/login`
- `/register` -> `/auth/register`
- `/PersonalizedTrip` -> `/trip/personalized`
- `/travel-agent/[slug]/packages/detailpackages/[packageId]` -> `/travel-agent/[slug]/packages/detail/[packageId]`

## Catatan Pengembangan

- Layout global berada di `src/routes/+layout.svelte`.
- Flow booking memiliki layout sendiri di `src/routes/booking/+layout.svelte`.
- Logo dan favicon sudah distandardkan menggunakan brand OnJourney SVG.
