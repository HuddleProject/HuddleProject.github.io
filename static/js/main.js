// Theme toggle (dark by default), active-section highlight in the sidebar, BibTeX copy button.
(function () {
  var root = document.documentElement;

  document.getElementById("theme-toggle").addEventListener("click", function () {
    var next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("huddle-theme", next); } catch (e) {}
  });

  // Highlight the sidebar entry of the section in view.
  var links = Array.prototype.slice.call(document.querySelectorAll(".toc a"));
  var sections = links.map(function (a) { return document.querySelector(a.getAttribute("href")); });
  function update() {
    var y = window.scrollY + window.innerHeight * 0.3, current = 0;
    sections.forEach(function (s, i) { if (s && s.offsetTop <= y) current = i; });
    if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = sections.length - 1;
    links.forEach(function (a, i) { a.classList.toggle("active", i === current); });
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();

  // Placeholder links (arXiv / Code) do nothing until they are filled in.
  document.querySelectorAll("[data-todo]").forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); });
    a.title = "Coming soon";
  });

  var copy = document.getElementById("copy-bibtex");
  copy.addEventListener("click", function () {
    var text = document.getElementById("bibtex-text").innerText;
    var done = function () { copy.textContent = "Copied"; setTimeout(function () { copy.textContent = "Copy"; }, 1500); };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(done, function () {});
    } else {
      var t = document.createElement("textarea");
      t.value = text; document.body.appendChild(t); t.select();
      try { document.execCommand("copy"); done(); } catch (e) {}
      document.body.removeChild(t);
    }
  });
})();
