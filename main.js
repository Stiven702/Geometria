console.log('i don not know how to speak English');

//cosa primitiva, sera mejorada desde css  expandida probablemente.

document.getElementById("btn").addEventListener("click", function() {
 var btns = document.getElementById("btns");
 if (btns.style.display === "none") {
 btns.style.display = "block";
 } else {
 btns.style.display = "none";
 }
});
