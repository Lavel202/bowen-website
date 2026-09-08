document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('header nav');
    var backdrop = document.querySelector('.nav-backdrop');

    function closeNav() {
        nav.classList.remove('open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        backdrop.classList.remove('visible');
    }

    if (toggle && nav && backdrop) {
        toggle.addEventListener('click', function () {
            var isOpen = nav.classList.toggle('open');
            toggle.classList.toggle('is-open', isOpen);
            toggle.setAttribute('aria-expanded', String(isOpen));
            backdrop.classList.toggle('visible', isOpen);
        });

        backdrop.addEventListener('click', closeNav);
        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeNav);
        });
    }

    if (header) {
        window.addEventListener('scroll', function () {
            header.classList.toggle('is-scrolled', window.scrollY > 10);
        }, { passive: true });
    }

    var form = document.querySelector('.contact-form-box form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            form.style.display = 'none';
            var success = document.querySelector('.form-success');
            if (success) {
                success.classList.add('visible');
            }
        });
    }
});
