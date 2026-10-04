/* =========================================================
   AGARWAL TRADING COMPANY
   PREMIUM ROYAL WEBSITE
========================================================= */

:root {
    --navy: #111827;
    --navy-light: #1c2638;
    --navy-soft: #263247;

    --gold: #d5b06a;
    --gold-light: #ead5a5;
    --gold-dark: #a9823d;

    --ivory: #f8f5ee;
    --cream: #eee9de;
    --white: #ffffff;

    --text: #202633;
    --muted: #70757d;
    --border: #ded9cf;

    --shadow: 0 20px 55px rgba(17, 24, 39, 0.12);
    --radius: 18px;
}


/* =========================================================
   RESET
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 90px;
}

body {
    font-family: "Inter", Arial, Helvetica, sans-serif;
    background: var(--white);
    color: var(--text);
    line-height: 1.7;
    overflow-x: hidden;
}

img {
    max-width: 100%;
    display: block;
}

a {
    color: inherit;
    text-decoration: none;
}

button,
input,
textarea {
    font-family: inherit;
}

.section {
    padding: 105px 0;
}

.section-container {
    width: min(1180px, 90%);
    margin: 0 auto;
}


/* =========================================================
   HEADER
========================================================= */

.site-header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.96);
    backdrop-filter: blur(15px);
    border-bottom: 1px solid rgba(213, 176, 106, 0.2);
}

.header-inner {
    width: min(1240px, 92%);
    min-height: 86px;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.brand {
    display: flex;
    align-items: center;
    flex-shrink: 0;
}

.atc-logo {
    width: 210px;
    height: auto;
    display: block;
}

.main-nav {
    display: flex;
    align-items: center;
    gap: 30px;
}

.main-nav a {
    position: relative;
    font-size: 14px;
    font-weight: 600;
    color: var(--navy);
    transition: 0.3s ease;
}

.main-nav a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 0;
    height: 2px;
    background: var(--gold);
    transition: 0.3s ease;
}

.main-nav a:hover {
    color: var(--gold-dark);
}

.main-nav a:hover::after {
    width: 100%;
}

.menu-btn {
    display: none;
    border: none;
    background: transparent;
    color: var(--navy);
    font-size: 28px;
    cursor: pointer;
}


/* =========================================================
   HERO
========================================================= */

.hero {
    min-height: 88vh;
    position: relative;

    display: flex;
    align-items: center;

    background:
        linear-gradient(
            90deg,
            rgba(8, 14, 26, 0.96) 0%,
            rgba(8, 14, 26, 0.82) 42%,
            rgba(8, 14, 26, 0.48) 100%
        ),
        url("https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=85")
        center / cover no-repeat;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background:
        linear-gradient(
            135deg,
            rgba(213, 176, 106, 0.08),
            transparent 40%
        );
    pointer-events: none;
}

.hero-content {
    position: relative;
    z-index: 2;

    width: min(1180px, 90%);
    margin: 0 auto;

    padding: 100px 0;
}

.eyebrow {
    color: var(--gold);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 17px;
}

.hero h1 {
    max-width: 760px;

    color: var(--white);
    font-family: Georgia, "Times New Roman", serif;

    font-size: clamp(48px, 7vw, 82px);
    font-weight: 500;
    line-height: 1.03;
    letter-spacing: -2px;

    margin-bottom: 28px;
}

.hero h1 span {
    color: var(--gold-light);
    display: block;
}

.hero-description {
    max-width: 630px;

    color: rgba(255, 255, 255, 0.82);
    font-size: 17px;
    line-height: 1.8;

    margin-bottom: 38px;
}

.hero-actions {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
}

.gold-btn,
.outline-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-height: 52px;
    padding: 0 28px;

    border-radius: 4px;

    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.5px;

    transition: 0.3s ease;
}

.gold-btn {
    background: var(--gold);
    color: var(--navy);
}

.gold-btn:hover {
    background: var(--gold-light);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(213, 176, 106, 0.25);
}

.outline-btn {
    border: 1px solid rgba(255, 255, 255, 0.5);
    color: white;
}

.outline-btn:hover {
    background: white;
    color: var(--navy);
    transform: translateY(-3px);
}

.hero-trust {
    display: flex;
    gap: 0;
    margin-top: 65px;
}

.hero-trust div {
    min-width: 145px;
    padding-right: 30px;
    margin-right: 30px;

    border-right: 1px solid rgba(255, 255, 255, 0.2);
}

.hero-trust div:last-child {
    border: none;
}

.hero-trust strong,
.hero-trust span {
    display: block;
}

.hero-trust strong {
    color: var(--gold);
    font-size: 13px;
    letter-spacing: 1.5px;
}

.hero-trust span {
    color: rgba(255, 255, 255, 0.65);
    font-size: 12px;
}


/* =========================================================
   SECTION HEADINGS
========================================================= */

.section-heading {
    max-width: 760px;
    margin-bottom: 55px;
}

.section-heading.centered {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}

.section-heading h2 {
    color: var(--navy);
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(36px, 5vw, 55px);
    font-weight: 500;
    line-height: 1.15;
    margin-bottom: 18px;
}

.section-heading h2 span {
    color: var(--gold-dark);
}

.section-heading > p:last-child {
    color: var(--muted);
}


/* =========================================================
   ABOUT / INTRO
========================================================= */

.intro {
    background: var(--ivory);
}

.intro-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 80px;
    align-items: center;
}

.intro-text p {
    color: #555b64;
    font-size: 16px;
    margin-bottom: 20px;
}

.text-link {
    display: inline-block;
    margin-top: 15px;

    color: var(--navy);
    font-weight: 800;
    font-size: 14px;

    border-bottom: 1px solid var(--gold);
    padding-bottom: 5px;

    transition: 0.3s ease;
}

.text-link:hover {
    color: var(--gold-dark);
}

.intro-card {
    position: relative;

    min-height: 340px;
    padding: 45px;

    background: var(--navy);
    color: white;

    border-radius: var(--radius);
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    box-shadow: var(--shadow);
}

.intro-card::before {
    content: "";
    position: absolute;
    width: 260px;
    height: 260px;
    border: 1px solid rgba(213, 176, 106, 0.35);
    border-radius: 50%;

    top: -100px;
    right: -70px;
}

.intro-card::after {
    content: "";
    position: absolute;
    width: 170px;
    height: 170px;
    border: 1px solid rgba(213, 176, 106, 0.18);
    border-radius: 50%;

    top: -55px;
    right: -25px;
}

.intro-card-number {
    position: absolute;
    top: 35px;
    left: 40px;

    color: var(--gold);
    font-family: Georgia, serif;
    font-size: 42px;
    letter-spacing: 3px;
}

.small-label {
    color: var(--gold-dark);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.intro-card .small-label {
    color: var(--gold);
}

.intro-card h3 {
    font-family: Georgia, serif;
    font-size: 31px;
    font-weight: 500;
    margin-bottom: 12px;
}

.intro-card p:last-child {
    color: rgba(255, 255, 255, 0.65);
}


/* =========================================================
   PRODUCTS
========================================================= */

.products {
    background: white;
}

.category-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}

.category-card {
    background: white;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;

    transition:
        transform 0.4s ease,
        box-shadow 0.4s ease;
}

.category-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow);
}

.category-card.large-card {
    grid-column: span 1;
}

.category-image {
    height: 290px;
    position: relative;

    background-size: cover;
    background-position: center;

    overflow: hidden;
}

.category-image::after {
    content: "";
    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            180deg,
            rgba(17, 24, 39, 0.05),
            rgba(17, 24, 39, 0.7)
        );
}

.image-shade {
    position: absolute;
    inset: 0;
    z-index: 1;
}

.category-number {
    position: absolute;
    z-index: 2;

    top: 22px;
    right: 25px;

    color: white;
    font-family: Georgia, serif;
    font-size: 28px;

    opacity: 0.9;
}

/*
    These are premium photographic backgrounds.
    They are temporary category visuals and can be replaced
    with your actual catalog images later.
*/

.pipes-image {
    background-image:
        url("https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=85");
}

.sanitary-image {
    background-image:
        url("https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85");
}

.toilet-image {
    background-image:
        url("https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=85");
}

.basin-image {
    background-image:
        url("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85");
}

.vanity-image {
    background-image:
        url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85");
}

.faucet-image {
    background-image:
        url("https://images.unsplash.com/photo-1584622781867-1e2d0c7f2e9a?auto=format&fit=crop&w=1200&q=85");
}

.category-content {
    padding: 30px;
}

.category-content h3 {
    color: var(--navy);
    font-family: Georgia, serif;
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 10px;
}

.category-content p:not(.small-label) {
    color: var(--muted);
    font-size: 14px;
    margin-bottom: 22px;
}

.category-link {
    color: var(--navy);
    font-size: 13px;
    font-weight: 800;

    transition: 0.3s ease;
}

.category-link:hover {
    color: var(--gold-dark);
}


/* =========================================================
   INQUIRY BANNER
========================================================= */

.inquiry-banner {
    background: var(--navy);
    color: white;
    padding: 70px 0;
}

.inquiry-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
}

.inquiry-inner h2 {
    max-width: 650px;

    font-family: Georgia, serif;
    font-size: clamp(30px, 4vw, 45px);
    font-weight: 500;
    line-height: 1.2;
}

.inquiry-inner .eyebrow {
    margin-bottom: 10px;
}


/* =========================================================
   CATALOG
========================================================= */

.catalog {
    background: var(--ivory);
}

.catalog-panel {
    min-height: 470px;

    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;

    border-radius: 24px;

    background:
        linear-gradient(
            90deg,
            rgba(17, 24, 39, 0.97),
            rgba(17, 24, 39, 0.78)
        ),
        url("https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=85")
        center / cover;
}

.catalog-panel::before {
    content: "";
    position: absolute;

    width: 430px;
    height: 430px;

    border: 1px solid rgba(213, 176, 106, 0.25);
    border-radius: 50%;

    right: -150px;
    top: -120px;
}

.catalog-panel::after {
    content: "";
    position: absolute;

    width: 300px;
    height: 300px;

    border: 1px solid rgba(213, 176, 106, 0.15);
    border-radius: 50%;

    right: -80px;
    top: -55px;
}

.catalog-content {
    position: relative;
    z-index: 2;

    width: min(680px, 85%);
    padding: 75px;
}

.catalog-content h2 {
    color: white;
    font-family: Georgia, serif;
    font-size: clamp(38px, 5vw, 57px);
    font-weight: 500;
    line-height: 1.12;

    margin-bottom: 20px;
}

.catalog-content h2 span {
    color: var(--gold-light);
}

.catalog-content > p:not(.eyebrow):not(.catalog-note) {
    color: rgba(255, 255, 255, 0.72);
    margin-bottom: 30px;
}

.catalog-note {
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    margin-top: 18px;
}

.catalog-button {
    display: inline-flex;
}


/* =========================================================
   WHY US
========================================================= */

.why-us {
    background: white;
}

.why-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.why-card {
    padding: 35px 28px;

    border-top: 2px solid var(--gold);
    background: var(--ivory);

    transition: 0.3s ease;
}

.why-card:hover {
    background: var(--navy);
    transform: translateY(-6px);
    box-shadow: var(--shadow);
}

.why-number {
    display: block;

    color: var(--gold-dark);
    font-family: Georgia, serif;
    font-size: 28px;

    margin-bottom: 25px;
}

.why-card h3 {
    color: var(--navy);
    font-family: Georgia, serif;
    font-size: 23px;
    font-weight: 500;
    margin-bottom: 10px;
}

.why-card p {
    color: var(--muted);
    font-size: 14px;
}

.why-card:hover h3 {
    color: white;
}

.why-card:hover p {
    color: rgba(255, 255, 255, 0.65);
}


/* =========================================================
   CONTACT
========================================================= */

.contact {
    background: var(--ivory);
}

.contact-layout {
    display: grid;
    grid-template-columns: 1fr 0.85fr;
    gap: 80px;
    align-items: start;
}

.contact-information h2 {
    color: var(--navy);
    font-family: Georgia, serif;
    font-size: clamp(40px, 5vw, 58px);
    font-weight: 500;
    line-height: 1.1;
    margin-bottom: 20px;
}

.contact-information h2 span {
    color: var(--gold-dark);
}

.contact-description {
    max-width: 520px;
    color: var(--muted);
    margin-bottom: 40px;
}

.contact-details {
    margin-bottom: 35px;
}

.contact-detail {
    display: flex;
    align-items: flex-start;
    gap: 18px;
    margin-bottom: 25px;
}

.detail-icon {
    min-width: 55px;
    height: 55px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--navy);
    color: var(--gold);

    font-size: 10px;
    font-weight: 800;
    letter-spacing: 1px;

    border-radius: 50%;
}

.contact-detail small {
    display: block;

    color: var(--gold-dark);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 2px;

    margin-bottom: 4px;
}

.contact-detail a {
    color: var(--navy);
    font-size: 18px;
    font-weight: 700;
}

.contact-detail p {
    color: var(--muted);
    max-width: 330px;
}

.whatsapp-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-height: 52px;
    padding: 0 27px;

    background: var(--navy);
    color: white;

    border-radius: 4px;

    font-size: 13px;
    font-weight: 800;

    transition: 0.3s ease;
}

.whatsapp-btn:hover {
    background: var(--gold);
    color: var(--navy);
    transform: translateY(-3px);
}


/* =========================================================
   CONTACT FORM
========================================================= */

.contact-form-wrapper {
    background: white;
    padding: 45px;

    border: 1px solid var(--border);
    border-radius: var(--radius);

    box-shadow: 0 15px 40px rgba(17, 24, 39, 0.07);
}

.contact-form h3 {
    color: var(--navy);
    font-family: Georgia, serif;
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 5px;
}

.contact-form > p {
    color: var(--muted);
    font-size: 14px;
    margin-bottom: 30px;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;

    color: var(--navy);
    font-size: 12px;
    font-weight: 800;

    margin-bottom: 8px;
}

.form-group input,
.form-group textarea {
    width: 100%;

    border: 1px solid var(--border);
    border-radius: 4px;

    background: #fcfbf8;

    color: var(--text);

    padding: 14px 15px;

    outline: none;

    transition: 0.3s ease;
}

.form-group textarea {
    min-height: 130px;
    resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: var(--gold);
    box-shadow: 0 0 0 3px rgba(213, 176, 106, 0.1);
}

.form-submit {
    width: 100%;
    min-height: 52px;

    border: none;
    border-radius: 4px;

    background: var(--navy);
    color: white;

    font-size: 13px;
    font-weight: 800;

    cursor: pointer;

    transition: 0.3s ease;
}

.form-submit:hover {
    background: var(--gold);
    color: var(--navy);
}


/* =========================================================
   FOOTER
========================================================= */

footer {
    background: #0b111d;
    color: white;
    padding: 70px 0 25px;
}

.footer-grid {
    display: grid;
    grid-template-columns: 1.5fr 0.7fr 1fr;
    gap: 70px;

    padding-bottom: 50px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-logo {
    width: 220px;
    height: auto;
    margin-bottom: 18px;
}

.footer-brand > p {
    color: rgba(255, 255, 255, 0.5);
    font-family: Georgia, serif;
    font-style: italic;
}

.footer-column h4 {
    color: var(--gold);
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 20px;
}

.footer-column a {
    display: block;

    color: rgba(255, 255, 255, 0.65);
    font-size: 14px;

    margin-bottom: 10px;

    transition: 0.3s ease;
}

.footer-column a:hover {
    color: var(--gold);
}

.footer-column p {
    max-width: 260px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
}

.footer-bottom {
    padding-top: 25px;
    text-align: center;
}

.footer-bottom p {
    color: rgba(255, 255, 255, 0.4);
    font-size: 12px;
}


/* =========================================================
   RESPONSIVE — TABLET
========================================================= */

@media (max-width: 1000px) {

    .main-nav {
        gap: 18px;
    }

    .main-nav a {
        font-size: 13px;
    }

    .intro-grid {
        gap: 45px;
    }

    .why-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .contact-layout {
        gap: 45px;
    }

}


/* =========================================================
   RESPONSIVE — MOBILE
========================================================= */

@media (max-width: 760px) {

    .section {
        padding: 75px 0;
    }

    .header-inner {
        min-height: 72px;
    }

    .atc-logo {
        width: 170px;
    }

    .menu-btn {
        display: block;
    }

    .main-nav {
        position: absolute;

        top: 72px;
        left: 0;

        width: 100%;

        display: none;
        flex-direction: column;
        align-items: stretch;

        gap: 0;

        padding: 10px 5% 20px;

        background: white;

        border-bottom: 1px solid var(--border);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
    }

    .main-nav.active {
        display: flex;
    }

    .main-nav a {
        padding: 14px 0;
        border-bottom: 1px solid #eee;
    }

    .main-nav a::after {
        display: none;
    }

    .hero {
        min-height: 88vh;

        background-position: 65% center;
    }

    .hero-content {
        padding: 80px 0;
    }

    .hero h1 {
        font-size: 49px;
        letter-spacing: -1px;
    }

    .hero-description {
        font-size: 15px;
    }

    .hero-trust {
        margin-top: 45px;
    }

    .hero-trust div {
        min-width: auto;
        padding-right: 16px;
        margin-right: 16px;
    }

    .hero-trust strong {
        font-size: 10px;
    }

    .hero-trust span {
        font-size: 10px;
    }

    .intro-grid {
        grid-template-columns: 1fr;
    }

    .intro-card {
        min-height: 300px;
    }

    .category-grid {
        grid-template-columns: 1fr;
    }

    .category-card.large-card {
        grid-column: span 1;
    }

    .category-image {
        height: 260px;
    }

    .inquiry-inner {
        flex-direction: column;
        align-items: flex-start;
    }

    .catalog-panel {
        min-height: 500px;
    }

    .catalog-content {
        padding: 45px 30px;
    }

    .why-grid {
        grid-template-columns: 1fr;
    }

    .contact-layout {
        grid-template-columns: 1fr;
    }

    .contact-form-wrapper {
        padding: 30px 22px;
    }

    .footer-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }

}


/* =========================================================
   SMALL PHONES
========================================================= */

@media (max-width: 430px) {

    .section-container {
        width: 88%;
    }

    .hero h1 {
        font-size: 42px;
    }

    .hero-actions {
        flex-direction: column;
        align-items: stretch;
    }

    .gold-btn,
    .outline-btn {
        width: 100%;
    }

    .hero-trust {
        display: none;
    }

    .intro-card {
        padding: 30px;
    }

    .catalog-content {
        width: 100%;
        padding: 40px 25px;
    }

    .catalog-content h2 {
        font-size: 38px;
    }

    .contact-information h2 {
        font-size: 40px;
    }

    .footer-logo {
        width: 190px;
    }

}
