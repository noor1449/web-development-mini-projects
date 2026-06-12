const notesContainer=document.querySelector(".notes-container")
const createbutton=document.querySelector(".btn")
let notes=document.querySelectorAll(".input-box");

function shownotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
shownotes();
function updatestorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createbutton.addEventListener("click", ()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="assets/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})
notesContainer.addEventListener("click",function(e){
   if(e.target.tagName==="IMG"){
    e.target.parentElement.remove();
    updatestorage();
   }
   else if(e.target.tagName==="P"){
    notes=document.querySelectorAll(".input-box");
    notes.forEach(nt => {
        nt.onkeyup=function(){
            updatestorage();
        }
    })
   }
   })

   document.addEventListener("keydown", event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
   })
