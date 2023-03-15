let count = 1;

const root = document.getElementById("root");
const list = document.querySelector("ul");

const button = document.createElement("button");

button.innerText = "Add Todo";
button.setAttribute("style", "color : red");
button.setAttribute("class", "addBtn");

button.addEventListener("click", e => {
    const todo = prompt('todo');

    const li = document.createElement("li");
    const span = document.createElement("span");
    const checkbox = document.createElement("input");
    const delBtn = document.createElement("input");

    li.setAttribute("id", `todo${count++}`);
    span.innerText = todo;
    checkbox.setAttribute("type", "checkbox");
    delBtn.setAttribute("type", "button");
    delBtn.setAttribute("value", "x");
    delBtn.addEventListener("click", e => {

        console.log(e.target);
        console.log(e.target.parentNode);

        const delList = e.target.parentNode;
        list.removeChild(delList);

    });

    li.append(span);
    li.append(checkbox);
    li.append(delBtn);

    list.append(li);
});

root.append(button);