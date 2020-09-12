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

console.log(TodoStorage);

// Czyli, storowac obiekty w obiekcie, potem sie to bedzie renderowac za pomoca generateList.js
// lista[sranie.title] = sranie;
// lista[sranie.title]['gowno'] = TodoFactory('a', 'b', 'c', 'd');


for (const property in TodoStorage) {
    let todoDiv = document.createElement('div');
    todoDiv.className = 'content';
    // TodoStorage[property] will return object in TodoStorage, first test then test2 etc
    console.log(TodoStorage[property].length);
    for (let i = 0; i < TodoStorage[property].length; i++) {


        // Gives the entire collection the name of the object/property

        todoDiv.textContent = `${property}`
        for (let dataInt = 0; dataInt < 3; dataInt++) {
            let dataDiv = document.createElement('div');
            dataDiv.className = `data`;

            let description = TodoStorage[property][dataInt].title

            dataDiv.textContent = `${dataInt}. ${description}`
            todoDiv.appendChild(dataDiv);
        }
        

    }
    contentSelector.appendChild(todoDiv);
}
