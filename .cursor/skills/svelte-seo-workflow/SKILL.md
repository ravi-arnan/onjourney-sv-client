---
name: svelte-seo-workflow
description: Implements SEO-intensive features in SvelteKit with SSR-first rendering, route metadata, canonical strategy, structured data, sitemap and robots updates, and validation loops. Use when users request SEO improvements, discoverability fixes, metadata work, schema markup, or Svelte page optimization.
---

# Svelte SEO Workflow

## When To Use

Use this skill for:
- route-level SEO changes in SvelteKit
- metadata and social preview tags
- JSON-LD and rich result readiness
- crawl/index/sitemap/robots behavior

## Required Workflow

1. Identify affected routes and whether they are indexable.
2. Define or update typed SEO inputs per route:
   - `title`
   - `description`
   - `canonical`
   - `robots`
   - social image data
   - optional schema payload
3. Ensure SEO-critical content is rendered server-side for indexable pages.
4. Apply metadata consistently from a shared utility, not scattered ad-hoc tags.
5. Add/update JSON-LD only for supported content types.
6. Validate and iterate:
   - run `svelte-autofixer` for changed Svelte files
   - run lint/typecheck/tests relevant to touched files
   - verify final HTML output includes required tags

## Implementation Defaults

- Prefer canonical URLs without tracking params.
- Prefer one primary `h1` per page.
- Keep route metadata deterministic and free of runtime-only browser assumptions.
- Avoid creating indexable thin pages with little unique content.
- Keep helper methods short and single-purpose.

## Definition Of Done

- SEO tags are present on initial render.
- Canonical and robots directives align with page intent.
- Schema is valid JSON and semantically correct.
- Internal links expose the page in crawl paths.
- Validation commands pass for changed areas.
