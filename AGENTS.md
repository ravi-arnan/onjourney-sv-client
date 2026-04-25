## Learned User Preferences

- For UI work, user expects layouts to closely match the provided reference pages and remain responsive across screen sizes.
- User gives concise iterative corrections and expects immediate visual re-checks until parity is reached.
- When executing a supplied implementation plan: follow the plan as written, do not edit the plan file itself, and advance the existing todos (mark in progress and complete) instead of recreating them.

## Learned Workspace Facts

- The integrated app merged sources from `sparated/onjourney` (primary layout and core routes), `sparated/my-app` (auth and booking flows), and `sparated/travel-agent1 - Copy` (travel-agent routes); legacy copies may still exist under `sparated/`.
- Documented Git flow uses `staging` as the integration trunk (branch and PR target for daily work) and `main` for releases via a promote PR (`staging` → `main`); see `docs/pipeline-staging-main.md` and the Git section in `README.md`.
- Dependabot npm updates target the `staging` branch (see `.github/dependabot.yml`).
- GitHub CI uses a pinned Bun version and `bun install --frozen-lockfile` (with `--ignore-scripts` in CI to skip Playwright prepare); see `.github/workflows/ci.yml`.
- The repo includes Cursor SEO guidance for SvelteKit: `.cursor/rules/svelte-seo-always-on.mdc`, `.cursor/rules/svelte-seo-files.mdc`, and `.cursor/skills/svelte-seo-workflow/`.
