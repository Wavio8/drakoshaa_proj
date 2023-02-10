const buttonNav = document.querySelectorAll(".nav__button");
const hrefLocation = document.location.href.split("/");
const htmlFile = hrefLocation[hrefLocation.length - 1];

buttonNav.forEach(function (item) {
    if (item.getAttribute("href")=== htmlFile
    ) {
        buttonNav.forEach((item) =>
            item.classList.remove("active")
        );
        item.classList.add("active");
    }
});