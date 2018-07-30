

function openNav() {
   
    var x=document.getElementById("mySidenav");
    if (x.style.display === "none") {
        document.getElementById("mySidenav").style.minWidth="175px";
        document.getElementById("main").style.marginLeft = "175px";
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
        document.getElementById("main").style.marginLeft = "0px";
    }
}

