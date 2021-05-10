var osszes = document.getElementById("Összesen");
function myfunction(){

var pont1 = document.getElementById("pont").value;
var pont2 = document.getElementById("pont2").value;

 osszes.innerHTML = "Összesen: " + (pont1 * 10 + pont2 * 150) + "pont";
if (pont2 < 0) {
window.alert ("Negatív szám nem lehet")
}
else if (pont2 >= 2) {
window.alert ("Egynél nagyobb szám nem lehet")
}
else {
    osszes.innerHTML = "Összesen: " + (pont1 * 10 + pont2 * 150) + "pont";
}
}