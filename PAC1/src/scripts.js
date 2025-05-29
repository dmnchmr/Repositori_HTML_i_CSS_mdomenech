document.addEventListener("DOMContentLoaded", function () {
    // Hamburguesa
    let menuToggle = document.querySelector(".menu-toggle"); 
    let menuLinks = document.querySelector(".links-menu");
    let menu = document.querySelector(".menu");

    if (menuToggle && menuLinks && menu) {
        menuToggle.addEventListener("click", function () {
            menuLinks.classList.toggle("active");
            menu.classList.toggle("open");
        });

        menuLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", function () {
                menuLinks.classList.remove("active");
                menu.classList.remove("open");
            });
        });
    }

    // Formulari
    let form = document.querySelector("form");
    let selectPack = document.getElementById("packs");
    let preuText = document.getElementById("preu");
    let numeroPersones = document.getElementById("numero");

    if (form && selectPack && preuText && numeroPersones) {
        let preus = {
            pack1: 25,
            pack2: 40,
            pack3: 60,
        };

        function actualitzarPreu() {
            let packSeleccionat = selectPack.value;
            let persones = parseInt(numeroPersones.value);

            if (packSeleccionat && persones > 0) {
                let preuTotal = preus[packSeleccionat] * persones;
                preuText.textContent = `Preu: ${preuTotal}€`;
            } else {
                preuText.textContent = "";
            }
        }

        selectPack.addEventListener("change", actualitzarPreu);
        numeroPersones.addEventListener("input", actualitzarPreu);

        form.addEventListener("submit", function (event) {
            let valid = true;
            let inputs = form.querySelectorAll("input[required], select[required]");

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.border = "1px solid red";
                } else {
                    input.style.border = "";
                }
            });

            if (!valid) {
                event.preventDefault();
                alert("Si us plau, omple tots els camps.");
            }
            else {
                alert('Reserva realitzada amb èxit!');
            }
        });
    }
});

/* videos */

window.load_on_iframe = function () {
    const box = document.getElementById("iframeboxing");
    const iframe = document.getElementById("iframeonclick");
    if (iframe) {
        iframe.src = "https://www.youtube.com/embed/n5C5s6gJjcU?autoplay=1";
        iframe.classList.remove("hidden");
        box.style.background = "none";
    }
};

window.load_on_iframe2 = function () {
    const box = document.getElementById("iframeboxing2");
    const iframe = document.getElementById("iframeonclick2");
    if (iframe) {
        iframe.src = "https://www.youtube.com/embed/LcdM_shS3jo?si=i9GQRzwFwZKjBmjr&autoplay=1";
        iframe.classList.remove("hidden");
        box.style.background = "none";
    }
};