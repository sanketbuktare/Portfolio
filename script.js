function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("sideMenu").style.zIndex = "0"
    document.getElementById("sideMenu").style.transition = "0s"
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("sideMenu").style.zIndex = "1"
    document.getElementById("sideMenu").style.transition = "3s"
}

function showProjects() {
    document.getElementById("projects").style.display = "grid"
}