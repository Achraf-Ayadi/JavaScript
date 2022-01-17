
const add = document.querySelector(".add")

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes){
    notes.forEach(note =>{
        AddNewNote(note);
    })

    
}

add.addEventListener("click", ()=> {
    AddNewNote();
}
)
function AddNewNote(text =""){

    
    const note = document.createElement("div");

     note.classList.add("note");

     note.innerHTML= `<div class="note">
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main hidden"></div>
        <textarea></textarea>
        </div>`

        

        const editBtn = note.querySelector(".edit");
        const deleteBtn= note.querySelector(".delete");
        

        const main = note.querySelector(".main")
        const textarea = note.querySelector("textarea");

        textarea.value= text;

        


        editBtn.addEventListener("click" , ()=>{

            main.classList.toggle("hidden");
            textarea.classList.toggle("hidden");
        });
        
        deleteBtn.addEventListener("click" , ()=>{
            note.remove();
            updateLS();
        })
        textarea.addEventListener('input', updateValue);
        
        function updateValue(e) {
          main.textContent = e.target.value;

          updateLS();

        };


        document.body.appendChild(note);
}

function updateLS(){

    const notestext= document.querySelectorAll("textarea");

    const notes= [];

    notestext.forEach(note => {

        notes.push(note.value);
        
    });
    localStorage.setItem("notes", JSON.stringify(notes));

} 