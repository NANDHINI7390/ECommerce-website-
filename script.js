function dropdownn() {

let dropdown=document.getElementsByClassName("dropdown") 
let drop1 =document.getElementById("drop1") 
  let dropmenu=document.getElementById ("dropmenu") 
  let dropmenu1=document.getElementById ("dropmenu1") 
  let dropmenu2=document.getElementById ("dropmenu2") 
                               
 drop1.addEventListener ('click',function(){
  
  dropmenu. style. display ="block" ;
   let open =dropmenu.classList.contains("show")
  
   if(open) {
     dropmenu.style.display ="none" ;
    } 
   
   
  }) 

     
   let drop2 =document.getElementById ("drop2") 
                                    
 drop2.addEventListener ('click',function(){
  
  dropmenu1. style. display ="block" ;
   let open1 =dropmenu1.classList.contains("show")
   if(open1) {
     dropmenu1.style.display ="none" ;
    } 
  }) 
      
let drop3 =document.getElementById ("drop3") 
                                    
 drop3.addEventListener ('click',function(){
  
  dropmenu2.style.display ="block" ;
   let open2 =dropmenu2.classList.contains("show")
   if(open2) {
     dropmenu2.style.display ="none" ;
    } 
  }) 
  
  document.addEventListener('click', function(event) {
    

    if (event.target !== drop1 && event.target !== dropmenu) {
        // Clicked outside the dropdown button and its content, so close the dropdown
        dropmenu.style.display = 'none';
    }
});

  document.addEventListener('click', function(event) {
    

    if (event.target !== drop2 && event.target !== dropmenu1) {
        // Clicked outside the dropdown button and its content, so close the dropdown
        dropmenu1.style.display = 'none';
    }
});
  
  document.addEventListener('click', function(event) {
    

    if (event.target !== drop3 && event.target !== dropmenu2) {
        // Clicked outside the dropdown button and its content, so close the dropdown
        dropmenu2.style.display = 'none';
    }
});


} 
  
  


dropdownn() 


    
let category=document.getElementById ("category") 


let cat=document.getElementById ("cat") 
let home=document.getElementById ("home") 
let homeshw=document.getElementById ("homeshow") 
let blo=document.getElementById ("blo") 
let blog=document.getElementById ("blog") 
let con=document.getElementById ("con") 
let contact=document.getElementById ("contact") 
category.style.display="none";
blog.style.display="none" ;
contact.style.display="none" ;
blo.onclick=()=>{
  blog.style.display="block"
  
  category.style.display = 'none';
  home.style.display="none"
  contact.style.display="none" ;
  
  }
cat.onclick=()=>{
  
  
            category.style.display = 'block';
        
home.style.display="none"
  blog.style.display="none"
  
  contact.style.display="none" ;
  
  }
homeshw.onclick=()=>{
  home.style.display ="block" ;
  category.style.display ="none" ;
  
  blog.style.display="none";
  
  contact.style.display="none" ;
  }


con.onclick=()=>{
  contact.style.display ="block" ;
  category.style.display ="none" ;
  home.style.display ="none" ;
  
  blog.style.display="none"
  
  }

function change(button) {
  button.innerHTML="&#10004Added to cart" ;
 } 
function heart(i) {
   //i.classList.remove("bi-heart") ;
   //i.classList.add("bi-heart-fill");
  if(i.classList.contains("bi-heart")){
    i.classList.remove("bi-heart")
    i.classList.add("bi-heart-fill")
    }
  else{
    
    i.classList.remove("bi-heart-fill")
    i.classList.add("bi-heart")
    
    
   } 
  }