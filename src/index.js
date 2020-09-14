import generateTodo from './generateList';

const titleInput = document.getElementById("title")
const descriptionInput = document.getElementById('description')
const endDateInput = document.getElementById('enddate')
const form = document.getElementById('form');

const contentSelector = document.querySelector('#grid-container');

let TodoStorage = {
}; 

let TodoStorage_deserialized = JSON.parse(localStorage.getItem("TodoStorage"));

console.log(TodoStorage_deserialized);

const TodoFactory = (title, description, prority, dueDate) => {
    return {title, description, prority, dueDate};
};

let first = TodoFactory('Pies', 'wyjsc z psem', 'high', '15:40');
let second = TodoFactory ('Sasiad', 'odwiedzic sasiada', 'low', '19:40');
let third = TodoFactory('Kupcia', 'zrobic duze pupu', 'Critical', 'now!');

TodoStorage['test'] = [first];
TodoStorage['test'].push(second, third);

let fourth = TodoFactory('Koteg', 'wyjsc z psem', 'high', '15:40');
let fifth = TodoFactory ('Srmomsiod', 'odwiedzic sasiada', 'low', '19:40');
let sixth = TodoFactory('Hedidnto', 'Naprawde dusze', 'Critical', 'now!');

TodoStorage['test2'] = [];
TodoStorage['test2'].push(fourth, fifth, sixth);


generateTodo(TodoStorage_deserialized);
// generateTodo(TodoStorage_deserialized);

// When the form is submitted, new object is created then added to TodoStorage
// TodoStorage then is conversted into serialized JSON, which is saved in localStorage
form.addEventListener('submit', (e) => {
    let newItem = TodoFactory(titleInput.value, descriptionInput.value, document.querySelector('input[name="priority"]:checked').value, endDateInput.value)
    TodoStorage['test'].push(newItem); 
    console.log(TodoStorage);
    let TodoStorage_serialized = JSON.stringify(TodoStorage);
    localStorage.setItem("TodoStorage", TodoStorage_serialized);
});

