let url = location.href;
let tabs = document.querySelectorAll("a.nav-link");

for(let i=0; i<tabs.length; i++){
    if(tabs[i] == url){
        tabs[i].classList.add('active');
    }
}