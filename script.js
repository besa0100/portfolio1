window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);


}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
        document.querySelector("#header").classList.remove("farve");
        document.querySelector("#menu").classList.remove("farve");

    } else {
        document.querySelector("#menuknap").textContent = "X";
        document.querySelector("#header").classList.add("farve");
        document.querySelector("#menu").classList.add("farve");

    }
}
