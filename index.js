const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let isAlive =false

const prima = document.getElementById("prim-pass")
const sec = document.getElementById("sec-pass")
const btn = document.getElementById("generate-btn")
const primMess = document.getElementById("p-prim")
const secMess  = document.getElementById("p-sec")
    

btn.addEventListener("click",function(){
    prima.textContent = " "
    sec.textContent=" "
    for( let i = 0; i < 10; i++){
        prima.textContent += characters[Math.floor(Math.random()*characters.length)]
        sec.textContent += characters[Math.floor(Math.random()*characters.length)]
    
    }
})

prima.addEventListener("click",function(){
    navigator.clipboard.writeText(prima.textContent)
    primMess.textContent = "copied on clipboard"
})

sec.addEventListener("click",function(){
    navigator.clipboard.writeText(sec.textContent)
    secMess.textContent = "copied on clipboard"
})

