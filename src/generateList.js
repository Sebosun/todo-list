

// what do i need? 
// bede zbierał jakas funkcja dane danego ToDo
const renderTodoList = (listData, ) => {
    for (let index = 0; index < 10; index++) {
        let todoList = document.createElement('div');
        todoList.className = 'content';
        todoList.textContent = 'Todolist title'
        for (let dataInt = 0; dataInt < 5; dataInt++) {
            let dataDiv = document.createElement('div');
            dataDiv.className = `data`;
            dataDiv.textContent = `${dataInt}. jakies tam dane`
            todoList.appendChild(dataDiv);
        }
    }
    contentSelector.appendChild(todoList);
}

// export default renderTodoList;