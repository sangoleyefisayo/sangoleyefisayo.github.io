# Website notes (sangoleyefisayo.github.io)

Last updated: 2026-11-08

## What the site is now
- A single static page: `index.html` (+ `portrait.jpg`, `Fisayo_Sangoleye_Resume.pdf`) at the root of this
  repo (`C:\Users\Fisayo\Documents\GitHub\MyWebsite`, branch `main`). This is the source of truth.
- No React, no Node, no build step. Edit the HTML, copy, push.
- Live at https://sangoleyefisayo.github.io/ , served from the **`gh-pages` branch** of
  `sangoleyefisayo/sangoleyefisayo.github.io`. `gh-pages` holds the published copy of the three site files.
- `main` is the default branch and holds the source. There are only two branches: `main` and `gh-pages`.

## How to change the site
1. Edit `index.html` (About text, timeline and tags are plain HTML). To change the resume or photo, replace
   the files here, keeping the same names.
2. Preview: open `index.html` in a browser.
3. Commit and push `main` (backup of the source).
4. Deploy (fresh clone each time is simplest):
   ```powershell
   $git = "C:\Program Files\Git\cmd\git.exe"
   $src = "C:\Users\Fisayo\Documents\GitHub\MyWebsite"
   $d = "$env:TEMP\site-deploy"
   Remove-Item $d -Recurse -Force -ErrorAction SilentlyContinue
   & $git clone --branch gh-pages --single-branch https://github.com/sangoleyefisayo/sangoleyefisayo.github.io.git $d
   Get-ChildItem $d -Force | ? Name -ne ".git" | Remove-Item -Recurse -Force
   Copy-Item "$src\index.html","$src\portrait.jpg","$src\Fisayo_Sangoleye_Resume.pdf" $d
   & $git -C $d config user.name "sangoleyefisayo"
   & $git -C $d config user.email "sangoleye.fm@gmail.com"
   & $git -C $d add -A
   & $git -C $d commit -m "Update site"
   & $git -C $d push origin gh-pages
   ```
   Live in about a minute. Hard refresh (Ctrl+F5) if the old page shows.
5. Roll back: revert the last commit on `gh-pages`. The old React site is at `gh-pages` commit `45e69db`.

## Gotchas learned
- **Auth:** Use HTTPS, not SSH (no SSH key on this PC; `origin` is set to the HTTPS URL). The first push needs a sign-in through Git Credential
  Manager and must be run in a **normal PowerShell window**, not Claude Code's shell, which cannot show the
  prompt. After that the login is cached. GitHub 2FA is on.
- **Node is not installed**, so `yarn deploy` / `gh-pages` no longer apply. Use the git steps above.
- **File encoding:** Keep `index.html` UTF-8 **without BOM**. Do not edit it with `Get-Content | Set-Content`
  in Windows PowerShell 5.1: it once garbled the middle dot and en dash (showed as "Â·" and "â€“").
  Use an editor, or `[IO.File]::ReadAllText` / `WriteAllText` with `New-Object Text.UTF8Encoding $false`.
- **PowerShell strings:** In double-quoted strings a backtick is an escape character (`` `r `` `` `a `` `` `f ``
  turn into control characters). Use single quotes or a real editor for text containing backticks.
- **Git** was installed with winget (`Git.Git`) and is not always on PATH; use the full path above.
  A global `safe.directory = *` was set to get past an ownership warning.
- The resume PDF on the site includes the phone number (public, intentionally). It does not update by itself:
  replace `Fisayo_Sangoleye_Resume.pdf` and redeploy.

## History and security notes
- The old repo was based on someone else's template (first commits by "NafisIrtija"). Their
  `github-recovery-codes.txt` was committed in 2021 (commit `5d2b700`) and sat in the public repo. It was
  removed on 2026-11-08 (commit `cba4204`) but still exists in old history. Those codes are **not yours**.
- Never commit recovery codes, tokens or `.env` files. `.gitignore` blocks the common cases.
- The old React site was removed from `main` on 2026-11-08. The old branches (`fix-teaching`, `read-more`,
  and `master` with your 2020-2022 Jekyll site) were deleted, and their backups were deleted too.
  They are not recoverable.

## Accounts and domain
- Personal GitHub: `sangoleyefisayo`. The username `fisayosangoleye` is your **Bumble work account**
  (`fisayosangoleye@team.bumble.com`); do not rename or delete it without checking with Bumble IT.
- GitHub user-site URLs are fixed to the username, so the address cannot change without renaming the account.
  For a cleaner URL: buy a custom domain, add a `CNAME` file next to `index.html` (and copy it in the deploy
  step), and set DNS records to GitHub Pages. GitHub redirects the old URL automatically. Not done.
