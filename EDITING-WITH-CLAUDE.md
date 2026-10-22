# Prompt for updating the website with Claude

How to use it: start a new chat with Claude (or a Claude Project), attach the website files (the zipped site folder, or connect the GitHub repo), plus a Figma link, screenshots or sketches of your changes if you have them. Then paste everything below the line, filling in the part in [brackets].

---

I'm a photographer and this is my portfolio website. I'd like your help redesigning and updating it. The site files are attached.

**About the site (please keep these working):**
- It's a plain HTML/CSS/JavaScript site with no build step, hosted for free on GitHub Pages. Please keep it that way: no frameworks, no npm, no server code, nothing that costs money.
- Pages: `index.html` (landing page with a full-screen photo and a slide-out menu; it should not scroll), `about.html`, `portfolio.html` (links to the galleries), `portraits.html`, `scenery.html`, `events.html` (galleries), and `contact.html`. Each page is its own separate page.
- Colors, fonts and sizes live in `css/style.css`, with the main values as variables at the top. Behavior lives in `js/main.js`.
- In the galleries, clicking any photo enlarges it in the middle of the screen over a faded background. The X in the top-right corner (or the Esc key) closes it and returns to the same gallery. Please keep this for every photo, including any I add.
- The contact form sends me an email titled "Photo Shoot Inquiry" through FormSubmit (the `action` address in `contact.html`). Please don't change the email address or remove the hidden `_subject` field unless I ask.
- The site has to look good on phones as well as computers.
- Photos are in `images/<gallery>/`. Each photo has a full-size version (`name.jpg`, ~2000px) for the enlarged view and a preview (`name-sm.jpg`, ~900px) for the gallery grid. In the gallery HTML, `--r` is the photo's width ÷ height.

**What I want to change:**
[Describe what you'd like here, as much or as little as you want. For example: a different font or color scheme, a new layout for the landing page, new photos added to or removed from a gallery, a new gallery (e.g. "Art"), rewritten About text, an Instagram link, a different order of photos, etc. If you made a Figma design, paste its link. If you have screenshots of websites you like, attach them.]

**How I'd like you to work:**
1. Before making changes, ask me any questions you need, such as the overall look and feel I'm going for, or anything in my description that could be read more than one way. I'm not a coder, so please explain choices in plain language.
2. Show me what the main pages will look like before or as you change them, so I can react to the design.
3. When we're done, give me the complete updated files (a zip of the whole site folder is easiest), and tell me exactly which files changed so I can upload them to GitHub.
4. If I'm adding new photos, resize them to the full-size and `-sm` versions described above, and add both to the right gallery page.
