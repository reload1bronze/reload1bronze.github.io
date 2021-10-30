const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // 클릭 이벤트가 일어난 버튼 요소의 부모 요소 반환
  const li = event.target.parentElement;

  // function sexyFilter(toDo) {
  //   return toDo.id !== li.id
  // }
  // toDos = toDos.filter(sexyFilter);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
  toDoForm.classList.remove("hidden");
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.style.display = "flex";
  li.style.alignItems = "center";
  const btn = document.createElement("button");
  btn.innerText = "⚔️";
  btn.style.backgroundColor = "transparent";
  btn.style.border = "none";
  btn.style.fontSize = "30px"
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  btn.addEventListener("click", deleteToDo);

  li.appendChild(btn);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
  toDoForm.classList.add("hidden");
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos && savedToDos.length > 2) {
  toDoForm.classList.add("hidden");
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  toDos.forEach(paintToDo);
} else {
  toDoForm.classList.remove("hidden");
} 
