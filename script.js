let sizeImg = document.getElementById('sizeImg')
let eye = document.getElementById('eye')
let layer = document.getElementById('layer')

sizeImg.addEventListener('mouseover',function(event){
    
   layer.style.display= 'block'
   eye.style.display ='block'
   
})

sizeImg.addEventListener('mouseout',function(event){
    
    layer.style.display= 'none'
    eye.style.display ='none'
    
 })