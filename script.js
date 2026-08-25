
/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".info-card, .cause, .impact-item, .solution-card, .stat, .sustainability-card"
);


const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});


const style = document.createElement("style");

style.innerHTML = `

    .show {

        opacity: 1 !important;

        transform: translateY(0) !important;

    }

`;

document.head.appendChild(style);


/* =========================
   CHECKLIST
========================= */

const checkboxes = document.querySelectorAll(
    '.checklist input[type="checkbox"]'
);


const progressText =
    document.getElementById("progress");


const progressFill =
    document.getElementById("progress-fill");


function updateProgress() {

    const completed =
        document.querySelectorAll(
            '.checklist input[type="checkbox"]:checked'
        ).length;


    const total =
        checkboxes.length;


    const percentage =
        (completed / total) * 100;


    progressText.textContent =
        `${completed} / ${total}`;


    progressFill.style.width =
        `${percentage}%`;

}


checkboxes.forEach((checkbox) => {

    checkbox.addEventListener(
        "change",
        updateProgress
    );

});


/* =========================
   COUNTER
========================= */

const counters =
    document.querySelectorAll(".counter");


let counterStarted = false;


function startCounters() {

    if (counterStarted) return;

    counterStarted = true;


    counters.forEach((counter) => {

        const target =
            parseFloat(
                counter.getAttribute("data-target")
            );


        let current = 0;


        const increment =
            target / 50;


        function updateCounter() {

            current += increment;


            if (current < target) {

                counter.textContent =
                    current.toFixed(1);

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.textContent =
                    target.toFixed(1);

            }

        }


        updateCounter();

    });

}


const dataSection =
    document.querySelector(".data-section");


const counterObserver =
    new IntersectionObserver(

        (entries) => {

            if (entries[0].isIntersecting) {

                startCounters();

            }

        },

        {
            threshold: 0.3
        }

    );


counterObserver.observe(dataSection);


/* =========================
   NAVBAR
========================= */

const navbar =
    document.querySelector("nav");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(5, 8, 6, 0.95)";

        } else {

            navbar.style.background =
                "rgba(5, 8, 6, 0.7)";

        }

    }
);


/* =========================
   HERO PARALLAX
========================= */

const hero =
    document.querySelector(".hero");


window.addEventListener(
    "scroll",
    () => {

        const scrollPosition =
            window.scrollY;


        if (
            scrollPosition <
            window.innerHeight
        ) {

            hero.style.backgroundPosition =
                `center ${scrollPosition * 0.35}px`;

        }

    }
);
