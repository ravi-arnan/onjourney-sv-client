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

## Git & Panduan Branch

Panduan ini mengikuti **trunk-based development** (satu garis utama, integrasi sering) dan **spec-driven development** (spesifikasi dan acceptance criteria jelas sebelum kode mengunci arah yang salah).

### Filosofi singkat

| Prinsip | Arti praktis di repo ini |
| ------- | ------------------------ |
| **Trunk-based** | Satu branch `main`; perubahan masuk lewat PR kecil-sering; hindari branch fitur “jangka panjang” yang jarang disentuh `main`. |
| **Spec-driven** | Issue (atau spec singkat) mendefinisikan *apa suksesnya*; PR membuktikan *bagaimana*; reviewer memverifikasi keduanya. |
| **Kualitas di trunk** | Yang di-merge ke `main` harus bisa di-`check`, di-`lint`, di-`test`, dan di-`build` oleh orang lain tanpa ritual rahasia. |

### Trunk-based development

- **`main` adalah trunk**: sumber kebenaran tunggal. Targetkan `main` selalu lolos `bun run check`, `bun run lint`, `bun run test`, dan `bun run build`.
- **Branch berumur pendek**: dari cabang `feat/` / `fix/` sampai merge ke `main` idealnya **beberapa jam hingga beberapa hari**. Jika lebih lama, pecah jadi beberapa issue/PR berurutan.
- **PR kecil lebih mudah benar**: satu PR = satu maksud (fitur tunggal, satu bug, satu refactor terarah). Lebih cepat direview dan lebih sedikit risiko konflik.
- **Sinkronisasi berkala**: saat PR terbuka, update branch Anda dari `main` (merge `main` ke branch Anda, atau rebase jika kebijakan tim mengizinkan) agar tidak drift berminggu-minggu.
- **CI sebagai gerbang**: merge hanya jika pipeline hijau (setara dengan perintah lokal di atas).
- **Tanpa “integration branch” permanen**: hindari pola `develop` jangka panjang kecuali organisasi Anda secara eksplisit memakainya; default panduan ini adalah PR langsung ke `main`.
- **Hotfix**: cabang dari `main` terbaru, perubahan minimal, PR cepat, merge balik ke `main`. Satu hotfix = satu masalah produksi (atau satu kelompok bug sangat terkait).

### Spec-driven development

- **Kapan membuat issue**
  - **Wajib** untuk fitur baru, perubahan perilaku pengguna, perbaikan bug non-trivial, atau pekerjaan yang menyentuh kontrak (URL, props publik, API).
  - **Boleh tanpa issue** untuk typo dokumentasi, format kecil, atau perbaikan satu baris yang sudah jelas dari konteks PR (tetap jelaskan di deskripsi PR).
- **Isi minimum issue**: konteks, tujuan, **acceptance criteria** (bisa dicentang), **non-goals**, dependensi, dan risiko/uji manual jika perlu.
- **Hubungan PR–issue**: gunakan `Closes #123` jika PR menyelesaikan seluruh scope issue; `Refs #123` jika PR halah sebagian atau menyiapkan fondasi. Nomor issue boleh masuk nama branch: `feat/142-package-filter-tabs`.
- **Spec besar**: jika issue panjang, tambahkan subjudul “Perilaku UI/API” dan “Edge cases” agar implementasi dan QA punya checklist yang sama.

### Struktur issue yang disarankan (template ringkas)

Salin ke GitHub issue dan isi bagian yang relevan:

```markdown
## Konteks
(Siapa yang terdampak, masalah apa, metrik atau laporan bug jika ada.)

## Tujuan
(Satu kalimat: apa yang berubah setelah selesai.)

## Acceptance criteria
- [ ] …
- [ ] …

## Non-goals
- (Yang sengaja tidak dikerjakan di issue ini.)

## Catatan teknis / dependensi
(File, route, atau PR lain yang perlu diselaraskan.)

## Uji manual (opsional)
(Langkah di browser atau skenario edge case.)
```

### Contoh issue — fitur (explore)

**Judul:** `[feat] Filter paket di /explore/packages berdasarkan harga dan durasi`

```markdown
## Konteks
Pengguna di halaman explore packages kesulitan menemukan paket yang sesuai budget dan lama hari; saat ini hanya scroll daftar.

## Tujuan
Menambahkan filter harga (min–max) dan durasi (hari) pada `/explore/packages` dengan state yang jelas dan URL yang bisa dibagikan jika memungkinkan.

## Acceptance criteria
- [ ] Pengguna dapat menyetel rentang harga; daftar terfilter tanpa reload penuh yang mengganggu (navigasi SvelteKit wajar).
- [ ] Pengguna dapat memfilter durasi (mis. 3–5 hari) jika data tersedia di model paket; jika tidak, tampilkan pesan/kondisi kosong yang jelas.
- [ ] `bun run check` dan `bun run lint` lulus; tes yang relevan ditambah atau diperbarui.
- [ ] Tidak ada regresi pada mobile lebar ~375px (layout filter tidak menutupi kartu paket).

## Non-goals
- Sorting lanjutan (popularitas, rating) — issue terpisah.
- Backend baru; asumsikan data ada di struktur yang sudah dipakai halaman.

## Catatan teknis / dependensi
- Route: `src/routes/explore/packages` atau setara; selaraskan dengan store/query yang sudah ada.
- Pertimbangkan query param `?minPrice=&maxPrice=&days=` untuk share link (opsional; sebutkan di PR jika diimplementasi).

## Uji manual
- Buka `/explore/packages`, geser filter, pastikan jumlah item konsisten.
- Refresh halaman: jika query param dipakai, state harus konsisten.
```

### Contoh issue — bug (booking)

**Judul:** `[fix] CTA ringkasan booking tidak mengarah ke langkah berikutnya`

```markdown
## Konteks
Laporan QA: di `/booking/summary`, tombol lanjut tidak navigasi; konsol bebas error.

## Tujuan
Memperbaiki alur navigasi dari ringkasan ke langkah berikutnya sesuai desain flow booking.

## Acceptance criteria
- [ ] Klik CTA utama pada `/booking/summary` membawa pengguna ke destinasi yang benar (sesuai flow existing: cek `booking/+layout` dan route sister).
- [ ] Tidak ada `a > button` atau pola a11y yang membingungkan pembaca layar untuk CTA tersebut.
- [ ] `bun run test` terkait booking (jika ada) hijau; tambahkan tes regresi ringan jika memungkinkan.

## Non-goals
- Redesain seluruh halaman summary.

## Catatan teknis / dependensi
- Cek komponen `OrderSummary` / CTA terkait; bandingkan dengan perilaku di `/booking/payment`.

## Uji manual
- Jalankan alur booking sampai summary; klik CTA; pastikan URL dan konten langkah berikutnya benar.
```

### Contoh issue — chore (tooling)

**Judul:** `[chore] Selaraskan ESLint dengan Svelte 5 dan perbaiki warning kritis`

```markdown
## Konteks
Upgrade aturan ESLint menimbulkan warning yang mengaburkan error sungguhan; ingin baseline bersih untuk PR berikutnya.

## Tujuan
Memperbarui konfigurasi ESLint (dan peer config jika perlu) serta memperbaiki hanya violation yang disepakati dalam issue ini.

## Acceptance criteria
- [ ] `bun run lint` lolos tanpa error; jumlah warning turun atau dikategorikan (documented di PR) jika tidak bisa nol dalam satu PR.
- [ ] Tidak ada perubahan perilaku fitur; diff dominan tooling/format.

## Non-goals
- Refactor besar komponen bisnis — lakukan bertahap di issue terpisah.

## Catatan teknis / dependensi
- Koordinasi dengan PR aktif untuk mengurangi konflik (merge `main` dulu).
```

### Konvensi nama branch dan commit

**Branch** — prefiks kecil, kata dipisah `-`, boleh sertakan nomor issue:

| Prefiks | Kapan dipakai |
| ------- | --------------- |
| `feat/` | Fitur baru |
| `fix/` | Perbaikan bug |
| `chore/` | Tooling, dependency, housekeeping |
| `docs/` | Dokumentasi saja |
| `refactor/` | Perilaku sama, struktur berubah |

Contoh: `feat/142-package-filter-tabs`, `fix/201-booking-summary-cta`, `chore/eslint-svelte5-rules`.

**Commit** — ikuti [Conventional Commits](https://www.conventionalcommits.org/) secara ringkas:

- `feat(explore): add price filter to packages list`
- `fix(booking): correct summary CTA navigation`
- `chore: align eslint config with svelte plugin`

### Contoh alur kerja (dari issue ke merge)

```text
# 1) Issue dibuat (mis. #142) dengan acceptance criteria lengkap.
# 2) Branch dari main terbaru
git checkout main && git pull origin main
git checkout -b feat/142-package-filter-tabs

# 3) Kembangkan dengan commit kecil
git add src/routes/explore/packages/...
git commit -m "feat(explore): add price range filter state"

# 4) Push dan buka PR ke main — judul contoh:
#    feat(explore): filter packages by price and duration (#142)

git push -u origin feat/142-package-filter-tabs
```

Setelah PR terbuka: sinkronkan dari `main` bila ada commit baru, selesaikan review, pastikan CI hijau, lalu merge (squash disarankan untuk riwayat linear di `main`).

### Contoh deskripsi Pull Request

```markdown
## Ringkasan
Menambahkan filter harga dan durasi di `/explore/packages` sesuai #142.

## Perilaku
- Filter memakai state lokal + (jika diimplementasi) query param `minPrice`, `maxPrice`, `days`.
- Daftar kosong menampilkan pesan yang sudah ada atau placeholder baru.

## Cara uji
1. `bun run check && bun run lint && bun run test`
2. Buka `/explore/packages`, ubah filter, pastikan daftar berubah.

## Issue
Closes #142
```

### Memecah pekerjaan besar (tetap trunk-based)

- **Milestone di issue induk**: pecah jadi sub-checklist atau issue anak (#142a, #142b) dengan dependensi jelas.
- **PR beruntun**: PR pertama fondasi (tipe, util), PR berikutnya UI; setiap PR tetap kecil dan bisa di-merge tanpa mematikan `main`.
- **Feature flag** (jika tim memakai): sembunyikan UI di production sampai issue berikutnya selesai — dokumentasikan di issue.

### Checklist sebelum merge

- [ ] Acceptance criteria di issue terpenuhi, atau penyimpangan disepakati di PR dan didokumentasikan.
- [ ] `bun run check` dan `bun run lint` lulus.
- [ ] `bun run test` lulus; tes baru/ubah untuk perilaku yang berubah.
- [ ] Tidak ada `console.log` debug, kredensial, atau URL internal sensitif di diff.
- [ ] PR menaut ke issue (`Closes` / `Refs`) dan menjelaskan cara uji singkat.
