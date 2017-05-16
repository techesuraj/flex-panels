const panels = document.querySelectorAll('.panel');

function toggleOpen(){
  this.classList.toggle('open');
}
function toggleActive(e){
  console.log(e.properttyName);
  if(e.propertyName.includes('flex')){
    console.log(e.propertyName);
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click',toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));