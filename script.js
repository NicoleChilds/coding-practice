var todos = ["item 1", "item 2", "item 3"];
function displayTodos (){
  console.log("My Todos:", todos);
};

function addTodo(todo){
  todos.push(todo);
  displayTodos();
};

function changeTodo(position, newValue){
  todos[position] = newValue; 
  displayTodos();
};

function deleteTodos(position){
  todos.splice(position, 1);
  displayTodos();
}

addTodo("some stufff");
changeTodo(0, "buy catfood")
deleteTodos(1);
displayTodos();