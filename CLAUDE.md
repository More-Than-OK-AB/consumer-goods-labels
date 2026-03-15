# CLAUDE.md

## Project overview

See [README.md](README.md) for a brief description of what this repository is and how to run it locally.

## Label specification

All labels on this website must conform to the structure defined in [label-spec.md](label-spec.md). When adding a new label or updating an existing one, check this file to ensure the content covers all required sections in the correct format.

## Language

- **Website content** (text shown to users, labels data, SEO metadata, HTML copy) must be in **Swedish**.
- **Everything else** (code, code comments, variable names, commit messages, documentation files like this one) must be in **English**.

## TODO / backlog

[TODO.txt](TODO.txt) is the working notes file for this project. Check it when implementing new features or updating the website — it contains priorities, known issues, and other guidance for ongoing work.

## Validation

Before committing, verify the following manually using `npx serve .` (or equivalent local server):

1. **Index page loads** — open the root URL; all label cards should render with correct images, names, and tags.
2. **Label detail page** — click any label card; the detail page should render with description, certification, oversight, and notes sections fully populated.
3. **Cross-links** — on a label detail page, click at least one cross-link; it should navigate to the correct label's detail page.
4. **Browser console** — no JS errors on either the index page or a label detail page.
5. **Page title and meta** — the `<title>` tag and any visible heading should reflect the correct label name on the detail page.

If all checks pass, commit with a clear message and push to `origin/main`.

## Commit and push

After changes have been validated, always commit and push to `origin/main`.
