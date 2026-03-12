alert("Bienvenue sur le site de stage de Nour Serry !");

function togglePresentation() {
    let section = document.getElementById("presentation");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}