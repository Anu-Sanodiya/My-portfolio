let tablinks = document.getElementsByClassName("tab-Links");
let tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
}
 let Sidemenu= document.getElementById("sidemenu");
 function openMenu(){
  Sidemenu.style.right="0";
 }
 function closeMenu(){
    Sidemenu.style.right="200px*";
   }