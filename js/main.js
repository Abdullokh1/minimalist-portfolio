let elopen = document.getElementById('burgerBtn');

let elburger = document.getElementById('burger');

let elhidecontent = document.getElementById('hideList');

elopen.addEventListener('click', function(){
  elhidecontent.classList.toggle('show');
})

let count = 0;


elopen.addEventListener('click', function(){
  if (count == 0){
    elburger.className='bx bx-x';
    count = 1;
  }
  else{
    elburger.className='bx bx-menu';
    count = 0;
  }

})