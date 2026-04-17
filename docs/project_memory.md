# Project Memory

## 2026-04-17 - Cursor setup for SEO-focused Svelte work

### Current State
- Added always-on Cursor rule: `.cursor/rules/svelte-seo-always-on.mdc`.
- Added file-scoped Cursor rule: `.cursor/rules/svelte-seo-files.mdc`.
- Added project skill: `.cursor/skills/svelte-seo-workflow/SKILL.md`.
- Created `docs/` directory and initialized this memory log.

### Decisions
- Chose an always-on rule for non-negotiable SEO baselines (SSR-first content, canonical strategy, metadata completeness).
- Added a file-scoped rule to guide implementation details during Svelte/SvelteKit edits.
- Added a reusable project skill so future sessions can follow a consistent SEO workflow with validation loops.

### Next Steps
- Align route-level SEO utility structure in `src` with these rules (typed metadata contract if missing).
- Add or verify sitemap and robots handling for canonical public routes.
- Add regression checks for metadata and structured data on key landing pages.

## 2026-04-17 - Integrasi 3 project ke 1 aplikasi

### Current State
- Root app sekarang menggunakan basis kode `sparated/onjourney` untuk layout utama dan halaman inti.
- Flow `my-app` telah diintegrasikan ke route normalisasi: `/auth/login`, `/auth/register`, `/booking`, `/booking/payment`, `/booking/summary`.
- Modul `travel-agent1 - Copy` telah diintegrasikan ke `/travel-agent/[slug]` termasuk route normalisasi detail `/travel-agent/[slug]/packages/detail/[packageId]`.
- Redirect kompatibilitas ditambahkan untuk URL lama: `/login`, `/register`, `/PersonalizedTrip`, dan path lama `detailpackages`.
- Asset dari ketiga project sudah dipindahkan ke `static/` serta disalin juga ke namespace `static/home`, `static/agent`, dan `static/booking`.
- Shared context/store awal ditambahkan di `src/lib/stores/app-context.ts` untuk auth UI, explore tab, dan booking step.

### Decisions
- Strategi integrasi memakai model hybrid: layout/navigasi dari `onjourney`, alur booking-auth dari `my-app`, dan modul detail agent dari `travel-agent1 - Copy`.
- Struktur route dinormalisasi agar semua fitur berjalan dalam satu peta URL konsisten, dengan redirect untuk menjaga backward compatibility.
- Konfigurasi compiler disesuaikan agar kompatibel dengan campuran komponen runes dan non-runes hasil merge lintas project.

### Next Steps
- Hardening UX route-level: konsolidasikan komponen tab/filter yang masih memakai URL lama seperti `/Saved`/`/History`.
- Tingkatkan kualitas aksesibilitas (a11y warnings) bertahap pada komponen hasil migrasi.
- Tambahkan smoke test Playwright untuk alur utama: home -> explore -> travel agent -> booking -> payment -> summary.
- Pertimbangkan cleanup bertahap folder `sparated/` setelah seluruh flow terverifikasi stabil.

## 2026-04-17 - Leaflet map mock Bali untuk detail package

### Current State
- `DestinationMap` di detail package sekarang memakai Leaflet interaktif (bukan static map image).
- Dependency `leaflet` ditambahkan ke project.
- Peta menampilkan mock lokasi di Bali dengan beberapa titik marker agar area peta langsung terlihat jelas.
- Styling marker disesuaikan dengan brand OnJourney (warna cyan/teal dan ring highlight).

### Decisions
- Menggunakan `onMount` + dynamic import `leaflet` untuk menjaga kompatibilitas SSR SvelteKit.
- Menggunakan OpenStreetMap tile layer agar tidak bergantung API key statis.
- Menggunakan `fitBounds` dari kumpulan titik Bali supaya viewport selalu fokus ke area destinasi.

### Next Steps
- Jika diperlukan, ganti mock koordinat dengan koordinat dinamis dari data package/itinerary.
- Tambahkan popup konten per marker (nama spot, hari itinerary, dll) saat data backend siap.
- Evaluasi opsi tile style yang paling sesuai identitas visual OnJourney.

## 2026-04-17 - Penyesuaian layout bawah banner detail package

### Current State
- Layout area bawah banner di `HeroSection` sudah disesuaikan agar kartu agent dan tombol `Save/Share` sejajar kiri-kanan seperti referensi.
- Styling kartu agent (radius, border, typografi, rating) dan tombol action diperbarui agar lebih dekat ke desain target.
- Border separator di bawah area action diperjelas agar ritme antar section konsisten.

### Decisions
- Menghapus pola `stack` mobile (`md:flex-row`) dan menggunakan satu baris responsif sejak viewport kecil supaya komposisi tetap sesuai screenshot.
- Menggunakan `min-w-0` + `truncate` pada nama agent agar tetap aman pada lebar layar sempit tanpa merusak alignment tombol kanan.

### Next Steps
- Hubungkan data agent/rating di HeroSection ke data dinamis package agar tidak statis.
- Validasi visual lanjutan untuk breakpoint paling kecil (<375px) jika dibutuhkan.

## 2026-04-17 - Peningkatan tipografi Facilities dan Description

### Current State
- Ukuran font pada section `Facilities` dan `Package Description` di halaman detail package sudah diperbesar agar lebih dekat ke referensi `onjourney.id/package/353`.
- Heading section dinaikkan menjadi skala besar (`text-[32px]`) dengan kontras teks yang lebih kuat.
- Body text dan label list dinaikkan ke ukuran yang lebih readable (`14px`-`16px`) beserta line-height yang lebih longgar.

### Decisions
- Menjaga struktur konten yang sama, fokus hanya pada tipografi dan spacing agar risiko regresi layout tetap rendah.
- Menambahkan key pada setiap `{#each}` di `PackageDescription` untuk mengikuti best practice Svelte dan mencegah warning.

### Next Steps
- Lakukan fine-tuning visual setelah review screenshot terbaru (khususnya jika heading ingin lebih besar/kecil per breakpoint).

## 2026-04-17 - Perbaikan halaman booking utama

### Current State
- Layout `booking` utama dirapikan: grid konten kiri/kanan lebih stabil dan spacing horizontal tidak terlalu lebar.
- Tipografi heading pada `Trip Summary` dan `Guest Details` diperkuat agar lebih konsisten dengan halaman detail lain.
- `OrderSummary` CTA diperbaiki secara semantic dari `a > button` menjadi satu elemen link berstyle tombol.
- Label `Same as user details` di `GuestDetail` diganti dari `<label>` menjadi `<span>` untuk menghindari mismatch a11y pada kontrol form.

### Decisions
- Fokus pada perbaikan struktur dan readability tanpa mengubah alur bisnis booking.
- Mempertahankan pola legacy pada komponen booking yang ada agar minim risiko regresi di flow payment/summary.

### Next Steps
- Lanjutkan polishing untuk halaman `booking/payment` dan `booking/summary` agar visual hierarchy antar-step lebih seragam.
- Saat migrasi booking ke runes penuh nanti, ubah event handler `on:` dan state lokal supaya sejalan dengan standar Svelte 5 terbaru.

## 2026-04-17 - Fix double header pada route booking

### Current State
- Masalah double header di halaman booking diperbaiki dengan menonaktifkan header/footer global saat path dimulai dari `/booking`.
- Header khusus booking dari `booking/+layout.svelte` sekarang menjadi satu-satunya header yang tampil di flow booking.

### Decisions
- Perbaikan dilakukan di `src/routes/+layout.svelte` agar aturan visibilitas global berlaku konsisten untuk seluruh subroute booking.
- Tidak mengubah struktur komponen booking lokal agar risiko regresi minimal.

### Next Steps
- Verifikasi visual cepat pada `/booking`, `/booking/payment`, dan `/booking/summary` untuk memastikan tidak ada elemen global lain yang masih bocor.

## 2026-04-17 - Standardisasi logo header dan favicon

### Current State
- Logo header telah distandardkan menggunakan SVG On-Journey baru pada komponen header utama.
- Favicon aplikasi di `src/lib/assets/favicon.svg` sudah diganti menggunakan SVG yang sama untuk konsistensi brand.
- Ditambahkan komponen reusable `OnJourneyBrand` untuk mencegah duplikasi markup logo di beberapa header.

### Decisions
- Menerapkan satu sumber logo melalui `src/lib/components/brand/OnJourneyBrand.svelte` agar maintenance lebih mudah.
- Mengupdate header global dan booking-oriented header agar identitas visual konsisten di lintas halaman.

### Next Steps
- Jika diperlukan, normalisasi seluruh header legacy yang belum dipakai aktif agar tetap sinkron dengan komponen brand baru.

## 2026-04-17 - Pembaruan README project

### Current State
- `README.md` telah diperbarui dari template default menjadi dokumentasi proyek OnJourney yang aktual.
- README sekarang memuat panduan penggunaan `bun` end-to-end (install, dev, check, lint, test, build, preview).
- Ditambahkan daftar routing utama, route tambahan, serta redirect legacy yang aktif.

### Decisions
- Fokus README diarahkan ke operasional harian tim (run/check/build) dan peta route agar onboarding lebih cepat.
- Menyertakan route legacy/redirect untuk mengurangi kebingungan saat verifikasi URL lama.

### Next Steps
- Sinkronkan README lagi setelah ada perubahan besar pada route booking/payment jika struktur final berubah.

## 2026-04-17 - Cleanup error runes Svelte

### Current State
- Error runes untuk `export let` dan `$:` sudah diperbaiki di komponen brand, navbar, dan booking summary.
- Halaman register auth sekarang memakai `<script lang="ts">` agar type annotation valid.
- Komponen header booking dan desktop header sudah migrasi dari `<slot />` ke `{@render children?.()}`.
- Komponen guest detail sudah diperbarui ke `$state(...)` untuk `guests` serta migrasi `on:click` menjadi `onclick`.

### Decisions
- Migrasi dilakukan secara terarah pada file yang memunculkan diagnostic agar aman tanpa refactor besar.
- Tetap mempertahankan struktur UI existing; fokus di kompatibilitas Svelte 5 runes dan warning utama.

### Next Steps
- Lanjutkan cleanup warning `on:click` yang tersisa pada komponen legacy lain (khususnya `Navbar.svelte`).
- Evaluasi penghapusan `// @ts-nocheck` bertahap pada komponen booking setelah typing sudah stabil.

## 2026-04-17 - Perbaikan bug interaksi navbar, package like, dan asset footer

### Current State
- Tombol heart di `PackageCard` sekarang interaktif dan memanggil callback `onToggleLike(pkg)`.
- Tombol `Sign Up` di `Navbar` sekarang berfungsi dan mengarah ke `/auth/register`.
- Ikon Instagram di footer booking sudah memakai asset valid dari `static/icons/instagram.svg`.
- State file lokal Cursor di `.cursor/hooks/state/` sudah dihapus dari workspace dan dikecualikan via `.gitignore`.

### Decisions
- Heart icon diganti menjadi elemen `<button>` agar aksesibel dan benar secara semantik.
- Asset sosial dipindah ke `static` supaya path tetap valid di dev dan production.
- File state IDE dianggap artefak lokal sehingga harus di-ignore untuk mencegah noise diff lintas mesin.

### Next Steps
- Tambahkan indikator visual state liked pada `PackageCard` jika data favorit backend/store sudah siap.
- Pertimbangkan validasi route lama `/login` ke `/auth/login` secara konsisten di seluruh navbar legacy.
