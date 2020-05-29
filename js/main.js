function openCity(cityName, elmnt, color) {
    let i, tabcont, tablink;
    tabcont = document.getElementsByClassName("tabcont");

    for(i = 0; i < tabcont.length; i++) {
        tabcont[i].style.display = "none";
    }

    tablink = document.getElementsByClassName("tablink");
    for(i = 0; i < tablink.length; i++) {
        tablink[i].style.backgroundColor = "";
    }

    document.getElementById(cityName).style.display = "block";
    element.style.backgroundColor = color;

}