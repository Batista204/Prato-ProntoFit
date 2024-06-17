// -------------------------- botão top --------------------------

window.addEventListener('scroll', function() {
    const button = document.getElementById('scrollToTop');
    if (window.scrollY > 10) {
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
});

function scrollToTop() {
    window.scrollTo(0, 0);
};

// -------------------------- Cookies --------------------------

const cookieBox = document.querySelector(".Cookie"),
    buttonCookies = document.querySelectorAll(".buttons");

const executeCodes = () => {
    if(document.cookie.includes("codinglab")) return;
    cookieBox.classList.add("show");

    buttonCookies.forEach((buttons) => {
        buttons.addEventListener("click", () => {
            cookieBox.classList.remove("show");

            if(buttons.id == "aceitarBtn") {
                document.cookie = "cookieBy= codinglab; max-age="+ 60 * 60 * 24 * 30;
            }
        });
    });
};

window.addEventListener("load", executeCodes);

// ------------------------ Navbar Mobile ------------------------

const bar = document.getElementById('bar');
const nav = document.getElementsById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav
    })
}
