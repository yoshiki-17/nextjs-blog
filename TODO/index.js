const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach(todo =>{
        add(todo);
    })
}

form.addEventListener("submit", function (Event) {
    Event.preventDefault();
    add();
})

function add(todo) {
    let todoText=input.value;

    if (todo) {
        todoText = todo.Text;
    }
    if (todoText) {
        const li = document.createElement("li");
        li.innerText = todoText;
        li.classList.add("list-group-item");

        if (todo && todo.completed) {
            li.classList.add("text-decoration-line-through");
        }

        li.addEventListener("contextmenu",function
        (Event){
            Event.preventDefault();
            li.remove();
            seveDeta();
        })

        li.addEventListener("click",function(){
            li.classList.toggle
            ("text-decoration-line-through");
            seveDeta();
        });

        ul.appendChild(li);
        input.value = ""; 
        seveDeta();
    }
}

function seveDeta(){
    const lists = document.querySelectorAll("li")
    let todos = [];
    lists.forEach(list => {
        let todo = {
            Text: list.innerText,
            completed: list.classList.contains
            ("text-decoration-line-through")
        };
        todos.push(todo);
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}