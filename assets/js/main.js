/* Librevore — progressive enhancement only. The site is fully readable without JS. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------- Header state */
  var header = document.getElementById("siteHeader");
  if (header) {
    var onScroll = function () {
      header.setAttribute("data-scrolled", window.scrollY > 12 ? "true" : "false");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ----------------------------------------------------------- Mobile menu */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("mobileMenu");
  var closeBtn = document.getElementById("menuClose");

  function setMenu(open) {
    if (!menu || !toggle) return;
    menu.setAttribute("data-open", open ? "true" : "false");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
    if (open && closeBtn) closeBtn.focus();
    else toggle.focus();
  }

  if (toggle) toggle.addEventListener("click", function () { setMenu(true); });
  if (closeBtn) closeBtn.addEventListener("click", function () { setMenu(false); });
  if (menu) {
    menu.addEventListener("click", function (event) {
      if (event.target.tagName === "A") setMenu(false);
    });
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu && menu.getAttribute("data-open") === "true") setMenu(false);
  });

  /* ------------------------------------------------------------- Accordion */
  var triggers = document.querySelectorAll(".accordion__trigger");
  Array.prototype.forEach.call(triggers, function (trigger) {
    var panel = document.getElementById(trigger.getAttribute("aria-controls"));
    if (!panel) return;

    trigger.addEventListener("click", function () {
      var isOpen = trigger.getAttribute("aria-expanded") === "true";

      // Close siblings for a calm, one-thing-at-a-time reading rhythm.
      Array.prototype.forEach.call(triggers, function (other) {
        if (other === trigger) return;
        var otherPanel = document.getElementById(other.getAttribute("aria-controls"));
        other.setAttribute("aria-expanded", "false");
        if (otherPanel) {
          otherPanel.style.maxHeight = "0px";
          otherPanel.setAttribute("data-open", "false");
        }
      });

      trigger.setAttribute("aria-expanded", isOpen ? "false" : "true");
      panel.setAttribute("data-open", isOpen ? "false" : "true");
      panel.style.maxHeight = isOpen ? "0px" : panel.scrollHeight + "px";
    });
  });

  window.addEventListener("resize", function () {
    Array.prototype.forEach.call(document.querySelectorAll('.accordion__panel[data-open="true"]'), function (panel) {
      panel.style.maxHeight = panel.scrollHeight + "px";
    });
  });

  /* --------------------------------------------------------- Scroll reveal */
  var revealables = document.querySelectorAll("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(revealables, function (el) { el.classList.add("is-visible"); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });

    Array.prototype.forEach.call(revealables, function (el) { observer.observe(el); });
  }

  /* ------------------------------------------------- Join form → mail draft */
  var form = document.getElementById("joinForm");
  var status = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var place = form.elements.place.value;
      var message = form.elements.message.value.trim();

      if (!name || !email || !message) {
        if (status) status.textContent = "Please add your name, email and a few lines about your family.";
        return;
      }

      var subject = "Librevore — introduction from " + name;
      var body = [
        "Name: " + name,
        "Email: " + email,
        "Drawn to: " + place,
        "",
        message
      ].join("\n");

      window.location.href =
        "mailto:librevoreme@gmail.com?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      if (status) status.textContent = "Opening your email app… if nothing happens, write to librevoreme@gmail.com.";
    });
  }

  /* ---------------------------------------------------------------- Details */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
