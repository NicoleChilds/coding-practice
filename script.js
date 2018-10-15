var todoList = { 
  todos: ["item 1", "item 2", "item 3"],
  displayTodos: function (){
    console.log("My Todos", this.todos)
  },
  addTodo: function(todo){
    this.todos.push(todo);
    this.displayTodos(); 
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodos: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};

addTodo("some stufff");
changeTodo(0, "buy catfood")
deleteTodos(1);
displayTodos();