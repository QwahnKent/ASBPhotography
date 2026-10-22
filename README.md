# ASB Photography website

A plain HTML/CSS/JavaScript site, so GitHub Pages can host it for free. There is no build step: the files in this folder are the website.

## What's in here

| File | Page |
|---|---|
| `index.html` | Landing page (full-screen photo + slide-out menu, no scrolling) |
| `about.html` | About |
| `portfolio.html` | Portfolio (links to the three galleries) |
| `portraits.html`, `scenery.html`, `events.html` | Galleries. Click any photo to enlarge it; the X closes it |
| `contact.html` | Contact form. Sends an email titled "Photo Shoot Inquiry" |
| `css/style.css` | All colors, fonts and sizes (the main ones are at the top) |
| `js/main.js` | Menu, enlarged photos and contact form |
| `images/` | Photos. Each gallery photo has a full-size version (`name.jpg`) and a smaller preview (`name-sm.jpg`) |

## 1. Set the email address for the contact form (required)

Open `contact.html` and replace `YOUR-EMAIL@example.com` with the email address where she wants to receive inquiries.

The form uses [FormSubmit](https://formsubmit.co), which is free and needs no account:

- **The first time** someone submits the form, FormSubmit sends her an email asking her to activate the form. She clicks the link once; after that, every submission arrives as an email titled **Photo Shoot Inquiry**. Submit a test message yourself after the site goes live so the activation email comes right away.
- After activation, FormSubmit's email also shows a random code (e.g. `a1b2c3...`). You can put that code in place of her email address in `contact.html`, so her address isn't visible in the page source.

## 2. Put it on GitHub Pages

1. Create a free account at github.com if you don't have one.
2. Click **New repository**. Name it `<username>.github.io` to get the address `https://<username>.github.io`, or use any name (e.g. `asb-photography`) to get `https://<username>.github.io/asb-photography`. Make it **Public**.
3. On the new repo's page, click **uploading an existing file**. Drag in **everything inside this folder** (not the folder itself), including the `css`, `js` and `images` folders and the `.nojekyll` file. Click **Commit changes**.
   - On a Mac, `.nojekyll` is hidden. Press Cmd + Shift + . in Finder to show it. It isn't strictly required, but it's harmless to include.
4. Go to **Settings → Pages**. Under "Build and deployment," set Source to **Deploy from a branch**, Branch to **main**, and folder to **/ (root)**, then click **Save**.
5. Wait a minute or two and refresh. The page will show the site's address.

To update the site later, upload the changed files to the repo the same way. GitHub Pages republishes automatically within a minute or two.

**Optional custom domain** (e.g. asbphotography.com): buy the domain from any registrar, then enter it under Settings → Pages → Custom domain and follow GitHub's DNS instructions. The domain is the only part that costs money.

## Adding or swapping photos

1. Export the photo as a JPG, roughly 2000px on its longest side.
2. Put it in the right folder in `images/`. Make a copy that is roughly 900px on its longest side and name it with `-sm` on the end (e.g. `img_1234-sm.jpg`).
3. In the gallery page, copy one of the existing `<a class="photo" ...>` lines and change the file names. Set `--r` to the photo's width ÷ height: **1.508** for landscape and **0.663** for portrait.

Each `<div class="row">` is one row. Photos in a row automatically resize so they share the same height and fill the width, just like the Figma layout. On phones, the photos stack one per line.
