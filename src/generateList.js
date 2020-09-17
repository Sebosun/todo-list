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

            //the plan is to make a grid, which will be divided into couple of parts, each 
            //having different information / one reserved for buttons i guess

            for (let dataInt = 0; dataInt < storage[property].length; dataInt++) {
                let dataContainerDiv = document.createElement('div');
                dataContainerDiv.className = `data`;

                let titleDiv = document.createElement('div');
                let priorityDiv = document.createElement('div');
                let descriptionDiv = document.createElement('div');

                let description = storage[property][dataInt].title
                

                titleDiv.textContent = `${dataInt+1}. ${description}`
                descriptionDiv.textContent = ` : ${storage[property][dataInt].description}`
                priorityDiv.textContent = `Priority: ${storage[property][dataInt].priority}`
                
                
                dataContainerDiv.appendChild(titleDiv);
                dataContainerDiv.appendChild(descriptionDiv);
                dataContainerDiv.appendChild(priorityDiv);

                todoDiv.appendChild(dataContainerDiv);
            }
        }
        contentSelector.appendChild(todoDiv);
    }
}

export default generateTodo;