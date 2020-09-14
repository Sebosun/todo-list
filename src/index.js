import generateTodo from './generateList';

const contentSelector = document.querySelector('#grid-container');

let TodoStorage = {
}; 

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

generateTodo(TodoStorage);

