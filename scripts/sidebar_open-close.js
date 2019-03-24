function openNav() {
    if(window.innerWidth <= 400){
        document.getElementById("mySidebar").style.width = "65%";
    }else{
        document.getElementById("mySidebar").style.width = "35%";

    }

    document.getElementById("nav-menu").style.width = "0";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("nav-menu").style.width = "100px";
}