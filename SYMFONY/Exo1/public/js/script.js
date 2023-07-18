const currentLocation = location.href;
const menuItemA = document.querySelectorAll('a.nav-link');

for(let i=0; i<menuItemA.length; i++){
  if(menuItemA[i].href === currentLocation){
    console.log(currentLocation);
    console.log(menuItemA[i].href);
      menuItemA[i].classList.add('active');
  }
}

