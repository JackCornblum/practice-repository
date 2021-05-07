const h2 = document.createElement('h2');
h2.textContent = "This content added by JavaScript";

// get the modal
var modal = document.getElementById("modal1");

var btn = document.getElementById("btnOne");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

// when user clicks outside the modal, it closes
window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}