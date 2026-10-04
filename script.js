// ======================================================
// AGARWAL TRADING COMPANY
// WhatsApp Inquiry + Catalog System
// ======================================================


// ================= WHATSAPP NUMBER =================

// India country code +91
// ATC number: 9837591626

const whatsappNumber = "919837591626";


// ======================================================
// WHATSAPP INQUIRY FUNCTION
// ======================================================

function inquireProduct(productName) {

    const message =
`Hello Agarwal Trading Company,
I want to inquire about ${productName}.
Brand:
Type:`;

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}


// ======================================================
// MOBILE MENU
// ======================================================

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    if (navbar) {
        navbar.classList.toggle("active");
    }
}


// Close mobile menu after clicking a navigation link

document.querySelectorAll(".navbar a").forEach(function(link) {

    link.addEventListener("click", function() {

        const navbar = document.getElementById("navbar");

        if (navbar) {
            navbar.classList.remove("active");
        }

    });

});


// ======================================================
// CURRENT YEAR
// ======================================================

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


// ======================================================
// TOILET SEAT CATALOG
// ======================================================
//
// IMPORTANT:
//
// Do NOT add prices here.
//
// When you give me the actual catalog,
// we will put the toilet-seat products here.
//
// Each product can contain:
//
// image
// name
// description
// specifications
//
// The images can also be embedded directly into
// this JavaScript file so that separate image
// files are not required.
//
// ======================================================


const toiletSeatCatalog = [

    /*
    Example format:

    {
        name: "Product Name",

        image: "data:image/jpeg;base64,......",

        description:
            "Short description of the product.",

        specifications:
            "Important specifications of the product."
    }

    */

];


// ======================================================
// LOAD CATALOG
// ======================================================

function loadCatalog() {

    const container =
        document.getElementById("catalog-container");

    const empty =
        document.getElementById("catalog-empty");


    // If catalog container doesn't exist
    if (!container) {
        return;
    }


    // If there are no catalog products yet
    if (toiletSeatCatalog.length === 0) {

        if (empty) {
            empty.style.display = "block";
        }

        return;
    }


    // Hide "Catalog Coming Soon"
    if (empty) {
        empty.style.display = "none";
    }


    // Clear existing content
    container.innerHTML = "";


    // Create every catalog product
    toiletSeatCatalog.forEach(function(product) {

        const card =
            document.createElement("article");

        card.className =
            "catalog-product";


        // Product image
        const image =
            product.image || "";


        // Product name
        const name =
            product.name || "Product";


        // Product description
        const description =
            product.description || "";


        // Product specifications
        const specifications =
            product.specifications || "";


        card.innerHTML = `

            <div class="catalog-product-image">

                <img
                    src="${image}"
                    alt="${name}"
                    loading="lazy">

            </div>


            <div class="catalog-product-info">

                <h3>
                    ${name}
                </h3>


                <p>
                    ${description}
                </p>


                ${
                    specifications
                    ?
                    `
                    <p class="specifications">
                        ${specifications}
                    </p>
                    `
                    :
                    ""
                }


                <button
                    class="inquire-btn"
                    onclick="inquireProduct(${JSON.stringify(name)})">

                    Inquire About This Product

                </button>

            </div>

        `;


        container.appendChild(card);

    });

}


// ======================================================
// START WEBSITE
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadCatalog();

    }
);
