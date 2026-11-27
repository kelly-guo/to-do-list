class project {
    constructor(name){
        this.id=crypto.randomUUID();
        this.name=name;
        this.todos= [];
    }

    addTodo(todo){
        this.todos.push(todo);
    }

    removeTodo(id){
        this.todos.splice(id,1);

    }

    getTodo(id){
        return this.todos[id];
    }
}