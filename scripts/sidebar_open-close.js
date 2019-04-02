function getWidth() {
    if (self.innerWidth) {
      return self.innerWidth;
    }
  
    if (document.documentElement && document.documentElement.clientWidth) {
      return document.documentElement.clientWidth;
    }
  
    if (document.body) {
      return document.body.clientWidth;
    }
  }


let w = getWidth();





let maxW = document.getElementById("mySidebar").style.max-width;
function openNav() {
    if(w <= 600){
        document.getElementById("mySidebar").style.width = "650px";
    }else{
        document.getElementById("mySidebar").style.width = "650px";

    }
    document.getElementById("closeNav").style.width = "21px";
    document.getElementById("closeNav").style.float = "right";
    document.getElementById("nav-menu").style.width = "0";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("closeNav").style.width = "0";
    document.getElementById("nav-menu").style.width = "100px";
}