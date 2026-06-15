# GPBS BSC — Deployment Notes

Static Balanced Scorecard dashboard on `ibsdo.com`. **Frontend only** — no
backend, no database, no PM2, no API proxy. Apache just serves the built files.
Same deployment pattern as **gpbs-portal**.

## Allocation summary

| Item | Value |
|---|---|
| Frontend URL | `https://ibsdo.com/gpbs-bsc/` |
| Web root (Apache serves from) | `/var/www/html/gpbs-bsc/` |
| Git checkout (SSH) | `/home/kittinv/gpbs-bsc/` |
| GitHub repo | `https://github.com/Kittinske15/gpbs-bsc.git` |
| Backend / DB / PM2 | none — static site |

The `homepage` field in `package.json` is already set to `/gpbs-bsc`, so the
build's asset paths match the URL above. If you change the URL path, change
`homepage` and rebuild.

The `build/` folder is **committed to the repo** (see `.gitignore`) so the
server can `git clone`/`git pull` and serve the prebuilt files directly — no
`npm install` or build step needed on the server.

## 1. Build on your dev machine

```powershell
cd "C:\Users\WINDOWS 11\Desktop\BSDO Work Coding\gpbs-bsc"
npm install      # first time only
npm run build    # outputs to .\build\
```

## 2. Push to GitHub (one-time repo creation)

Create the repo `Kittinske15/gpbs-bsc` on GitHub, then from the project folder:

```powershell
git init
git add .
git commit -m "Initial commit: GPBS BSC dashboard (demo data)"
git branch -M main
git remote add origin https://github.com/Kittinske15/gpbs-bsc.git
git push -u origin main
```

## 3. Apache: serve the folder (one-time)

SSH in as `kittinv@ibsdo.com`, edit (with sudo) the existing SSL vhost for
`ibsdo.com`, and add inside `<VirtualHost *:443>` — this is the ONLY Apache
change needed (no ProxyPass, just like gpbs-portal):

```apache
Alias /gpbs-bsc /var/www/html/gpbs-bsc
<Directory /var/www/html/gpbs-bsc>
    Options -Indexes +FollowSymLinks
    AllowOverride All
    Require all granted
</Directory>
```

Then:

```bash
sudo apache2ctl configtest
sudo systemctl reload apache2
```

## 4. Clone + copy the build into the web root

On the server:

```bash
cd /home/kittinv
git clone https://github.com/Kittinske15/gpbs-bsc.git
sudo mkdir -p /var/www/html/gpbs-bsc
sudo cp -r /home/kittinv/gpbs-bsc/build/. /var/www/html/gpbs-bsc/
sudo chown -R www-data:www-data /var/www/html/gpbs-bsc
```

## 5. Smoke test

Open `https://ibsdo.com/gpbs-bsc/` — should show the dark **Balanced Scorecard**
dashboard (overall gauge + 4 perspective panels), NOT the generic
"Welcome to IBSDO" page.

> If you still see the IBSDO placeholder, Apache hasn't been pointed at the new
> folder yet (step 3) or the build wasn't copied (step 4).

## Re-deploy after an update

On your dev machine:

```powershell
cd "C:\Users\WINDOWS 11\Desktop\BSDO Work Coding\gpbs-bsc"
npm run build
git add .
git commit -m "..."
git push
```

On the server:

```bash
cd /home/kittinv/gpbs-bsc
git pull
sudo cp -r build/. /var/www/html/gpbs-bsc/
```

No PM2 restart — there's no backend to restart.
