let sizeImg = document.getElementById('sizeImg')
let eye = document.getElementById('eye')

sizeImg.addEventListener('mouseover',function(event){
    
   if(eye.style.display ==='none'){
       eye.style.display ='block'
   } else{
       eye.style.display ='none'
   }
   console.log('hello')
})