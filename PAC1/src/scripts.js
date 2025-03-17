//hamburguesa
document.addEventListener("DOMContentLoaded", function () {
    let menuToggle = document.querySelector(".menu-toggle"); 
    let menuLinks = document.querySelector(".links-menu");
    let menu = document.querySelector(".menu");

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
});

//form

document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("form");
    let selectPack = document.getElementById("packs");
    let preuText = document.getElementById("preu");
    let numeroPersones = document.getElementById("numero");

    let preus = {
        pack1: 25,
        pack2: 40,
        pack3: 60,
    };

    function actualitzarPreu() {
        let packSeleccionat = selectPack.value;
        let persones = parseInt(numeroPersones.value) || 2;

        if (packSeleccionat) {
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
    });
});

