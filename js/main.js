/* ASB Photography — site behavior
   1. Landing page menu (open / close)
   2. Click a photo to enlarge it; X, Esc or clicking outside closes it
   3. Contact form sends an email titled "Photo Shoot Inquiry"
*/

/* ---------- 1. Landing page menu ---------- */
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('side-menu');
  if (!toggle || !menu) return;

  function setOpen(open) {
    menu.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
    if (open) {
      var first = menu.querySelector('a');
      if (first) first.focus();
    }
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(!menu.classList.contains('open'));
  });
  document.addEventListener('click', function (e) {
    if (menu.classList.contains('open') && !menu.contains(e.target)) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      setOpen(false);
      toggle.focus();
    }
  });
})();

/* ---------- 2. Enlarged photo (lightbox) ---------- */
(function () {
  var photos = Array.prototype.slice.call(document.querySelectorAll('.gallery .photo'));
  if (!photos.length) return;

  var box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Enlarged photo');
  box.innerHTML =
    '<button class="lightbox-close" type="button" aria-label="Close photo">' +
    '<svg viewBox="0 0 50 52" fill="none" stroke="#000" stroke-width="4" stroke-linecap="square">' +
    '<path d="M3 3 L47 49 M47 3 L3 49"/></svg></button>' +
    '<img alt="">';
  document.body.appendChild(box);

  var img = box.querySelector('img');
  var closeBtn = box.querySelector('.lightbox-close');
  var current = -1;
  var lastFocus = null;

  function show(i) {
    current = (i + photos.length) % photos.length;
    var link = photos[current];
    var thumb = link.querySelector('img');
    img.src = link.getAttribute('href');
    img.alt = thumb ? thumb.alt : '';
  }

  function open(i) {
    lastFocus = document.activeElement;
    show(i);
    box.classList.add('open');
    document.body.classList.add('no-scroll');
    closeBtn.focus();
  }

  function close() {
    box.classList.remove('open');
    document.body.classList.remove('no-scroll');
    img.removeAttribute('src');
    if (lastFocus) lastFocus.focus();
  }

  photos.forEach(function (link, i) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      open(i);
    });
  });

  closeBtn.addEventListener('click', close);
  // Clicking the faded background (not the photo) also closes it
  box.addEventListener('click', function (e) {
    if (e.target === box) close();
  });
  document.addEventListener('keydown', function (e) {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowRight') show(current + 1);
    else if (e.key === 'ArrowLeft') show(current - 1);
    else if (e.key === 'Tab') { e.preventDefault(); closeBtn.focus(); }
  });
})();

/* ---------- 3. Contact form ---------- */
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  var status = document.getElementById('form-status');
  var button = form.querySelector('.submit');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;

    // The form's action is https://formsubmit.co/<email>; the AJAX
    // version of the same address is https://formsubmit.co/ajax/<email>
    var endpoint = form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');
    var data = {};
    new FormData(form).forEach(function (value, key) { data[key] = value; });

    button.disabled = true;
    status.className = 'form-status';
    status.textContent = 'Sending…';

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data)
    })
      .then(function (res) { return res.json().then(function (body) { return { ok: res.ok, body: body }; }); })
      .then(function (r) {
        if (!r.ok || String(r.body.success) === 'false') throw new Error(r.body.message || 'Send failed');
        form.reset();
        status.textContent = 'Thank you! Your message has been sent.';
      })
      .catch(function () {
        status.className = 'form-status error';
        status.textContent = 'Sorry, something went wrong. Please try again in a moment.';
      })
      .then(function () { button.disabled = false; });
  });
})();
