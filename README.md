# Huddle project page

Static site (no build step) for *Visual Grounding and Deliberation Help Multi-Robot Teams Make High-Stakes Decisions*.

- `index.html`: the page. TODO markers: arXiv link, GitHub link, abstract, BibTeX arXiv number.
- `static/css/style.css`, `static/js/main.js`: dark theme by default, light/dark toggle, sticky section sidebar.
- `static/videos/hospital_demo.mp4`: the hospital demo video, played on the page.
- `static/images/environments.jpg`, `static/images/huddle_protocol.png`: the paper's environment and protocol figures.

Preview locally: `python -m http.server 8000` in this folder, then open http://localhost:8000.

Deploy: push this folder to a GitHub repo and enable Pages (Settings -> Pages -> Deploy from branch -> main, / root).
