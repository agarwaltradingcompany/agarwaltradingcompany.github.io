/* =========================================================
   AGARWAL TRADING COMPANY
   WEBSITE JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    if (navbar) {
        navbar.classList.toggle("active");
    }

}


/* Close mobile menu after clicking a link */

document.querySelectorAll(".main-nav a").forEach(function(link) {

    link.addEventListener("click", function() {

        const navbar = document.getElementById("navbar");

        if (navbar) {
            navbar.classList.remove("active");
        }

    });

});



/* =========================================================
   CONTACT FORM → WHATSAPP
========================================================= */

const contactForm = document.querySelector(".contact-form");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();


        /* Get form values */

        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const message =
            document.getElementById("message").value.trim();


        /* Basic validation */

        if (!name || !phone || !message) {

            alert("Please fill in all the details.");

            return;

        }


        /* Create WhatsApp message */

        const whatsappMessage =
`Hello Agarwal Trading Company,

My name is ${name}.

My phone number is ${phone}.

I am interested in:
${message}

Please share the available products and current details.

Thank you.`;


        /* WhatsApp number */

        const whatsappNumber = "919837591626";


        /* Create WhatsApp URL */

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        /* Open WhatsApp */

        window.open(
            whatsappURL,
            "_blank"
        );

    });

}



/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement =
    document.getElementById("current-year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



/* =========================================================
   HEADER SHADOW ON SCROLL
========================================================= */

window.addEventListener("scroll", function() {

    const header =
        document.querySelector(".site-header");


    if (!header) {
        return;
    }


    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 8px 25px rgba(16, 26, 43, 0.10)";

    } else {

        header.style.boxShadow =
            "none";

    }

});
