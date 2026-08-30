document.addEventListener("DOMContentLoaded", function () {

    const topics = document.querySelectorAll(".topic");
    const currentNumber = document.getElementById("current");
    const nextButton = document.getElementById("nextButton");
    const earthImage = document.querySelector(".earth img");
    const title = document.querySelector(".showcase-title h1");

    let current = 0;


    /*
    ========================================
    SHOWCASE DATA
    ========================================
    */

    const showcaseData = [

        {
            title: "THE EARTH<br><span>WE LEAVE BEHIND.</span>",
            image: "earth.jpg"
        },

        {
            title: "NATURE<br><span>UNDER PRESSURE.</span>",
            image: "nature.jpg"
        },

        {
            title: "OUR OCEANS<br><span>ARE CHANGING.</span>",
            image: "ocean.jpg"
        },

        {
            title: "CITIES<br><span>OF TOMORROW.</span>",
            image: "city.jpg"
        },

        {
            title: "PEOPLE<br><span>AND PLANET.</span>",
            image: "people.jpg"
        },

        {
            title: "THE FUTURE<br><span>IS OURS TO SHAPE.</span>",
            image: "future.jpg"
        }

    ];


    /*
    ========================================
    CHANGE SHOWCASE
    ========================================
    */

    function changeShowcase(index) {

        current = index;

        const data = showcaseData[current];

        currentNumber.textContent =
            String(current + 1).padStart(2, "0");


        title.style.opacity = "0";
        earthImage.style.opacity = "0";


        setTimeout(function () {

            title.innerHTML = data.title;

            earthImage.src = data.image;

            title.style.opacity = "1";
            earthImage.style.opacity = "1";

        }, 300);


        topics.forEach(function (topic, i) {

            topic.classList.toggle(
                "active",
                i === current
            );

        });

    }


    /*
    ========================================
    TOPIC BUTTONS
    ========================================
    */

    topics.forEach(function (topic) {

        topic.addEventListener("click", function () {

            const index =
                Number(topic.dataset.index);

            changeShowcase(index);

        });

    });


    /*
    ========================================
    NEXT BUTTON
    ========================================
    */

    nextButton.addEventListener("click", function () {

        let next = current + 1;

        if (next >= showcaseData.length) {
            next = 0;
        }

        changeShowcase(next);

    });


    /*
    ========================================
    KEYBOARD
    ========================================
    */

    document.addEventListener("keydown", function (event) {

        if (event.key === "ArrowRight") {

            let next = current + 1;

            if (next >= showcaseData.length) {
                next = 0;
            }

            changeShowcase(next);

        }


        if (event.key === "ArrowLeft") {

            let previous = current - 1;

            if (previous < 0) {
                previous = showcaseData.length - 1;
            }

            changeShowcase(previous);

        }

    });


    /*
    ========================================
    INITIAL
    ========================================
    */

    changeShowcase(0);

});
