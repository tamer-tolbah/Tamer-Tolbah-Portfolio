function showContent (evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

function big(img) {
  img.style.height = "80px";
  img.style.width = "80px";
  img.style.transition = "0.3s";
}
function small(img) {
  img.style.height = "50px";
  img.style.width = "50px";
  img.style.transition = "0.3s";
}

function showbig(img) {
  img.style.height = "80%";
  img.style.width = "80%";
  img.style.transition = "0.5s";
}

function showsmall(img) {
  img.style.height = "70px";
  img.style.width = "250px";
  img.style.transition = "0.5s";
}