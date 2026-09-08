# Screenwriting Desk

A personal screenwriting workspace built from Syd Field's books — Roadmap, Treatment, Characters, Sequences, Cards, Critic's Page, Structure Map, Rewrite Checklist, Coverage, and a Submission tracker, plus a 205-term Glossary.

This is a installable web app (PWA): once hosted, opening it in Chrome or Edge shows an "Install" option that adds it to your Start Menu / taskbar like a regular program, with offline support. All project data is stored locally in the browser — nothing is sent anywhere.

## Publishing this to GitHub Pages (one-time setup)

From this folder:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Aathmanathan-bot/screenwriting-desk.git
git push -u origin main
```

(If the `screenwriting-desk` repo doesn't exist yet, create an empty one first at https://github.com/new — don't initialize it with a README, since this folder already has one.)

Then on GitHub:
1. Go to the repo → **Settings → Pages**.
2. Under "Build and deployment", set **Source** to "Deploy from a branch".
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. Wait a minute or two, then your app is live at:
   `https://aathmanathan-bot.github.io/screenwriting-desk/`

## Installing it as an app

Open that URL in Chrome or Edge on the machine you want it on, then:
- **Windows (Chrome/Edge):** click the install icon in the address bar (or menu → "Install Screenwriting Desk…").
- It'll open in its own window from then on, with an icon in your Start Menu, and keep working offline.

## Publishing updates later

Whenever the app changes, from this folder:

```bash
git add .
git commit -m "Update"
git push
```

GitHub Pages redeploys automatically within a minute or two. Already-installed copies pick up the change the next time they're opened online (the service worker refreshes the cache in the background).

## Moving data from the Claude Artifact version

Use the **Export all** / **Import** buttons in the sidebar to move projects between the two versions, or just as a manual backup — it downloads/reads a plain JSON file.
