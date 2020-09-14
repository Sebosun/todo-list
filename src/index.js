import generateTodo from './generateList';
import addCollectionOptions from './addCollectionOptions';

const titleInput = document.getElementById("title")
const descriptionInput = document.getElementById('description')
const endDateInput = document.getElementById('enddate')
const getItemForm = document.getElementById('add-item-form');
// const collectionsDiv = document.getElementById('collections');

// const form = document.getElementById('form');


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



// // asks you to which todoCollection add the given todo
// const addCollectionOptions = (storage) => {
//     // let buttonsDiv = document.createElement('div')
//     let labelDiv = document.createElement('label');
//     let selectDiv = document.createElement('select');

//     selectDiv.id = 'collection-choice';

//     labelDiv.htmlFor = 'collection'
//     labelDiv.textContent = 'Choose your collection  '
    
//     // Object.keys returns an array
//     Object.keys(storage).forEach(element => {
//         console.log(storage);
//         let option = document.createElement('option')
//         option.textContent = element;
//         option.value = element;
//         selectDiv.appendChild(option);
//     });

//     labelDiv.appendChild(selectDiv);
//     collectionsDiv.append(labelDiv);
    
// }


addCollectionOptions(TodoStorage);
generateTodo(TodoStorage);
console.log(Object.keys(TodoStorage));
// console.log('Collections value: ', collectionsChoice.value)
// When the getItemForm is submitted, new object is created then added to TodoStorage
// TodoStorage then is conversted into serialized JSON, which is saved in localStorage
getItemForm.addEventListener('submit', (e) => {
    const collectionChoice = document.getElementById('collection-choice').value;

    let newItem = TodoFactory(titleInput.value, descriptionInput.value, document.querySelector('input[name="priority"]:checked').value, endDateInput.value)

    if (TodoStorage[collectionChoice] === undefined){
        TodoStorage[collectionChoice] = [];
    }
    TodoStorage[collectionChoice].push(newItem); 
    alert('alert test');

    let TodoStorage_serialized = JSON.stringify(TodoStorage);
    localStorage.setItem("TodoStorage", TodoStorage_serialized);
});

