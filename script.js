const h2 = document.createElement('h2');
h2.textContent = "This content added by JavaScript";

// get the modal
var modal = document.getElementById("modal1");

var modalTwo = document.getElementById("modal2");

var btn1 = document.getElementById("btnOne");


var span = document.getElementsByClassName("close")[0];

//btn.onclick = function() {
  //  modal.style.display = "block";
//}

function btnClick(element) {
    if (element.id === 'btnOne') {
        modal.style.display="block";
    }
    
    if (element.id === "btnTwo") {
        modalTwo.style.display="block";
    }
}


span.onclick = function () {
    modal.style.display = "none";
    modalTwo.style.display = "none";
}

// when user clicks outside the modal, it closes
window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }

    if (e.target == modalTwo) {
        modalTwo.style.display = "none";
    }
}