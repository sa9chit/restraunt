
  // Get references to the elements you want to interact with
 
  let button = document.querySelector("#book")
  let button2 = document.querySelector("#button")
let b = 0
  button2.addEventListener("click",function(){
   if( b == 0){
    button.style.opacity = 1;
   b = 1
   }else{
    button.style.opacity = 0;
   b = 0
   }
  } )

 
  const mb2Buttons = document.querySelectorAll(".mb-2");
  const show = document.querySelector("#show");
  const e = 0
  mb2Buttons.forEach((button) => {
   if(e == 0){
    button.addEventListener("click", function () {
      show.classList.remove('hidden');
      e = 1
    });
   } else{
    button.addEventListener("click", function () {
      show.classList.remove('hidden');
      e = 0
    });
   }
  });
  let contact = document.querySelector(".contact")
  let show2 = document.querySelector("#show2")
let d = 0
  contact.addEventListener("click", () => {
   if( d == 0){
    show2.style.opacity = 1;
    d = 1
   }else{
    show2.style.opacity = 0;
    d = 0
   }
    
  })
  

  let buttonhu = document.querySelector(".about")
  let show3 = document.querySelector("#show3")
  let f = 0
  buttonhu.addEventListener("click", function(){
    if(f == 0){
      show3.style.opacity = 1;
      f = 1;
    }else {
      show3.style.opacity = 0;
      f = 0;
    }
  })


  let book = document.querySelector("#book")
  let opacity = document.querySelector("#opacity1")
  book.addEventListener("click", function(){
    opacity1.style.opacity = 0
  })

  let buttonhu2 = document.querySelector(".about")
  let show4 = document.querySelector("#show2")
 
  buttonhu2.addEventListener("click", function(){
   
      show4.style.opacity = 0
    
  })
  let contact2 = document.querySelector(".contact")
  let show5 = document.querySelector("#show3")
  
  contact2.addEventListener("click", function(){
   
      show5.style.opacity = 0
      
   
    
  })
  // script.js
let login = document.querySelector("#login")
login.addEventListener("click",  function(){
  alert("Your Table Was Booked___'thanks for reaching us")
})

let dark = document.querySelector(".dark")
let footer = document.querySelector("#footer")
let followus = document.querySelector("#followus")
let legal = document.querySelector("#legal")
let companyname = document.querySelector("#namecompany")
let owner = document.querySelector("#owner")
let m = 0;

dark.addEventListener("click", function(){
if(m === 0){
  footer.style.backgroundColor = "#111827"
  followus.style.color = "white"
  legal.style.color = "white"
  companyname.style.color = "white"
  owner.style.color = "white"
  dark.style.color = "white"
  m = 1
}
else{
  footer.style.backgroundColor = "white"
  followus.style.color = "black"
  legal.style.color = "black"
  companyname.style.color = "black"
  owner.style.color = "black"
  dark.style.color = "black"
  m = 0
}
})