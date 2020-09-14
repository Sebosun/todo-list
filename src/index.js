import generateTodo from './generateList';

const titleInput = document.getElementById("title")
const descriptionInput = document.getElementById('description')
const endDateInput = document.getElementById('enddate')
const form = document.getElementById('add-item-form');

//const contentSelector = document.querySelector('#grid-container');

let TodoStorage = {
}; 

// basic ToDo Factory, creates one single ToDo object
const TodoFactory = (title, description, prority, dueDate) => {
    return {title, description, prority, dueDate};
};


// Checks if ToDoStorage deserialized is empty. If it's not, 
// replaces the content of ToDoStorage with user's previous data
let TodoStorage_deserialized = JSON.parse(localStorage.getItem("TodoStorage"));
if (TodoStorage_deserialized != null){
    TodoStorage = JSON.parse(localStorage.getItem("TodoStorage"));
}

// When the form is submitted, new object is created then added to TodoStorage
// TodoStorage then is conversted into serialized JSON, which is saved in localStorage
form.addEventListener('submit', (e) => {
    let newItem = TodoFactory(titleInput.value, descriptionInput.value, document.querySelector('input[name="priority"]:checked').value, endDateInput.value)
    TodoStorage['test'].push(newItem); 
    console.log(TodoStorage);
    let TodoStorage_serialized = JSON.stringify(TodoStorage);
    localStorage.setItem("TodoStorage", TodoStorage_serialized);
});

generateTodo(TodoStorage);