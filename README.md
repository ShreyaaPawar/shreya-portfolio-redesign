# Shreya Pawar — portfolio

An updated copy of the React + Vite portfolio at https://shreya-pawar.vercel.app/.

## What was fixed

- Corrected the contact layout: contact links no longer override the form's grid.
- Repaired mobile navigation, including close-on-selection, Escape, accessible state, and focus behavior.
- Fixed skill-card overflow, mobile portrait sizing, and layouts between phone and desktop widths.
- Improved text contrast, keyboard focus, touch targets, and fixed-header anchor spacing.
- Added a pause/resume control for the technology ticker and support for reduced-motion preferences.
- Bundled fonts and technology icons locally, removing their third-party CDN dependencies.
- Corrected the share-preview domain and added a PNG preview image.
- Added lazy loading for images farther down the page and corrected the development instructions.

The existing career content, resume, contact email, project links, certificates, and form delivery destination are preserved.

## Preview locally

Use Node.js 22.12+ or Node.js 24.

```bash
npm ci
npm run dev
```

Open the local address printed by Vite. Opening index.html directly from your file manager will not run a Vite project.

For a production preview:

```bash
npm run build
npm run preview
```

## Update your existing Vercel website

This download has not been deployed to your Vercel account.

1. Extract the ZIP.
2. Open your existing Vercel project and check which GitHub repository is connected. The source used for this repair is `ShreyaaPawar/shreya-portfolio-redesign`.
3. Copy the updated source files listed below into that connected repository, preserving their folders. Include the new font and icon folders.
4. Commit to a branch to review a preview deployment. Merge into the project's configured production branch when ready to publish.

Vercel's Git integration builds preview and production deployments from the connected repository. See https://vercel.com/docs/git.

Build settings: **Vite**, build command **npm run build**, output directory **dist**.

### Updated source files

- `src/App.jsx`
- `src/App.css`
- `src/overrides.css`
- `src/layout.css`
- `src/contact-form.css`
- `src/index.css`
- `index.html`
- `public/og-image.svg`
- `public/og-image.png` (new)
- `public/icons/` (new)
- `public/fonts/` (new, includes font licenses)
- `README.md`

The ZIP also includes `dist/`, the built static website. Vercel's normal Git workflow builds this folder from the source; you do not need to commit dist or node_modules.

## Verification

- Production build and ESLint checks.
- Chromium layout checks at 320, 375, 390, 768, 820, 1024, 1440, and 1920 pixels.
- Mobile menu selection, Escape/focus, section anchor positioning, ticker pause/resume, and reduced motion.
- Required form fields and email-format validation, without submitting a message.
- Local images and resume/certificate links.

Actual email delivery through the existing FormSubmit service has not been tested. No authenticated GitHub or Vercel changes were made.

## Source

Based on https://github.com/ShreyaaPawar/shreya-portfolio-redesign at commit `b98f37b01b02584f51d7a01b5da448e147df5c5f`.

Fonts are from Google Fonts and retain their SIL Open Font License files under `public/fonts/`. Technology icons are from Simple Icons and Devicon; source license files are under `public/icons/`.
