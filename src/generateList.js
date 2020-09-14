const generateTodo = (storage) => {
    const contentSelector = document.querySelector('#grid-container');
    for (const property in storage) {
        let todoDiv = document.createElement('div');
        todoDiv.className = 'content';
        // storage[property] will return object in storage, first test then test2 etc
        console.log(storage[property].length);
        for (let i = 0; i < storage[property].length; i++) {
            // Gives the entire collection the name of the object/property
            todoDiv.textContent = `${property}`
            console.log(i);
            for (let dataInt = 0; dataInt < storage[property].length; dataInt++) {
                let dataDiv = document.createElement('div');
                dataDiv.className = `data`;
                let description = storage[property][dataInt].title
                dataDiv.textContent = `${dataInt}. ${description}`
                todoDiv.appendChild(dataDiv);
            }
        }
        contentSelector.appendChild(todoDiv);
    }
}

export default generateTodo;