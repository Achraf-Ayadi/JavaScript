const todos = document.getElementById("todos");
const input = document.getElementById("input"); 
const form = document.getElementById("form");

form.addEventListener("submit" , (e) =>{
    e.preventDefault();
    addtodo();

    

})

function addtodo(){
    const todotext = input.value;

    if (todotext){

        const todoelement = document.createElement("li");

        todoelement.innerText = todotext;

        todoelement.addEventListener("click" ,() => {
            todoelement.classList.toggle("finish");


        });
        todoelement.addEventListener("contextmenu", (e) =>{
            e.preventDefault();
            todoelement.remove("delete");
        })

        todos.appendChild(todoelement);
        input.value="";
    }
};