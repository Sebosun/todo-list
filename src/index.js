import generateTodo from './generateList';
import addCollectionOptions from './addCollectionOptions';

const titleInput = document.getElementById("title")
const descriptionInput = document.getElementById('description')
const endDateInput = document.getElementById('enddate')
const getItemForm = document.getElementById('add-item-form');

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

addCollectionOptions(TodoStorage);
generateTodo(TodoStorage);
console.log(Object.keys(TodoStorage));

// When the getItemForm is submitted, new object is created then added to TodoStorage
// TodoStorage then is conversted into serialized JSON, which is saved in localStorage
getItemForm.addEventListener('submit', (e) => {
    const collectionChoice = document.getElementById('collection-choice').value;

    let newItem = TodoFactory(titleInput.value, descriptionInput.value, document.querySelector('input[name="priority"]:checked').value, endDateInput.value)

    // if a given collection does not exist, add empty array

    if (TodoStorage[collectionChoice] === undefined){
        TodoStorage[collectionChoice] = [];
    }
    TodoStorage[collectionChoice].push(newItem); 
    alert('alert test');

    let TodoStorage_serialized = JSON.stringify(TodoStorage);
    localStorage.setItem("TodoStorage", TodoStorage_serialized);
});

