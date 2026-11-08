# Website notes (sangoleyefisayo.github.io)

Last updated: 2026-11-08

## What the site is now
- A single static page: `index.html` (+ `portrait.jpg`, `Fisayo_Sangoleye_Resume.pdf`) at the root of this repo\n  (`my_new_site/`, branch `main`). This is the source of truth; `gh-pages` holds the published copy.
- No React, no Node, no build step. Edit the HTML, copy, push.
- Live at https://sangoleyefisayo.github.io/ , served from the **`gh-pages` branch** of
  `sangoleyefisayo/sangoleyefisayo.github.io` (default branch is `master`; `main` only holds old source).
- Old React site: removed from `main` on 2026-11-08 (still in git history of `main` before commit "Clean up repo", and
  as the old build on `gh-pages` at commit `45e69db`). A full backup bundle of all branches is in\n  `MyWebsite\backup-before-cleanup\all-branches.bundle`.

## How to change the site
1. Edit `index.html` (About text, timeline, tags are all plain HTML).
   To change the resume or photo, replace the files here keeping the same names.
2. Preview: open `index.html` in a browser.
3. Deploy (fresh clone each time is simplest):
   ```powershell
   $git = "C:\Program Files\Git\cmd\git.exe"
   $d = "$env:TEMP\site-deploy"
   Remove-Item $d -Recurse -Force -ErrorAction SilentlyContinue
   & $git clone --branch gh-pages --single-branch https://github.com/sangoleyefisayo/sangoleyefisayo.github.io.git $d
   Get-ChildItem $d -Force | ? Name -ne ".git" | Remove-Item -Recurse -Force
   $src = "C:\Users\Fisayo\Documents\GitHub\MyWebsite\my_new_site"\n   Copy-Item "$src\index.html","$src\portrait.jpg","$src\Fisayo_Sangoleye_Resume.pdf" $d
   & $git -C $d config user.name "sangoleyefisayo"
   & $git -C $d config user.email "sangoleye.fm@gmail.com"
   & $git -C $d add -A
   & $git -C $d commit -m "Update site"
   & $git -C $d push origin gh-pages
   ```
   Live in ~1 minute. Hard refresh (Ctrl+F5) if the old page shows.
4. Roll back: `git revert` the last commit on `gh-pages`, or restore `45e69db` for the old React site.

## Gotchas learned
- **Auth:** Use HTTPS, not SSH (no SSH key on this PC; `origin` in `my_new_site` is SSH and won't work).
  The first push needs a sign-in via Git Credential Manager and must be run in a **normal PowerShell window**
  (not Claude Code's shell, which can't show the prompt). After that the login is cached. GitHub 2FA is on.
- **Node is not installed**, so `yarn deploy` / `gh-pages` don't work. Use the git steps above.
- **File encoding:** Keep `index.html` UTF-8 **without BOM**. Don't edit it with `Get-Content | Set-Content`
  in Windows PowerShell 5.1: it garbled "·" and "–" once (shows as "Â·" / "â€“"). Use an editor or
  `[IO.File]::ReadAllText/WriteAllText` with a UTF8Encoding($false).
- **Git** was installed with winget (`Git.Git`). It is not always on PATH; use the full path above.
  A global `safe.directory = *` was set to get past an ownership warning.
- The resume PDF on the site includes the phone number (public, intentionally). It does not
  auto-update: replace `Fisayo_Sangoleye_Resume.pdf` and redeploy.

## History / security notes
- The old repo was based on someone else's template (first commits by "NafisIrtija").
  Their `github-recovery-codes.txt` was committed in 2021 (commit `5d2b700`) and sat in the public repo.
  It was removed from all branches on 2026-11-08 (commit `cba4204` on `main`), but still exists in old
  history. Those codes are **not yours** (your commits never touched it; your account had no 2FA codes then).
- Never commit recovery codes, tokens or `.env` files to this repo.
- Old uncommitted edits (Home.js, CV.pdf) from the React site were saved to MyWebsite\backup-before-cleanup\ before cleanup.
- Branches: ix-teaching/ead-more (template leftovers) deleted. Your 2020-2022 Jekyll site lives on master (tag rchive/jekyll-site-2022).

## Accounts / domain
- Personal GitHub: `sangoleyefisayo`. The username `fisayosangoleye` is your **Bumble work account**
  (`fisayosangoleye@team.bumble.com`); don't rename or delete it without checking with Bumble IT.
- GitHub user-site URLs are fixed to the username, so the address can't change without renaming the account.
  If you ever want a cleaner URL: buy a custom domain, add a `CNAME` file next to `index.html` (and copy it in the deploy step), and set DNS
  records to GitHub Pages (GitHub redirects the old URL automatically). Not done.
