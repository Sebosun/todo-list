const generateTodo = (storage) => {
    const contentSelector = document.querySelector('#grid-container');
    for (const property in storage) {
        let todoDiv = document.createElement('div');
        todoDiv.className = 'content';
        
        // Gives the entire collection the name of the object/property


        // storage[property] will return object in storage, first test then test2 etc
        console.log(storage[property].length);

        todoDiv.textContent = `${property}`

        for (let i = 0; i < storage[property].length; i++) {
            // doing it again, since for some reason if I want the name to be initiated at the beggining
            // not doing it again here breaks the addition
            todoDiv.textContent = `${property}`
            //the plan is to make a grid, which will be divided into couple of parts, each 
            //having different information / one reserved for buttons i guess
            for (let dataInt = 0; dataInt < storage[property].length; dataInt++) {
                let dataContainerDiv = document.createElement('div');
                dataContainerDiv.className = `data`;

                let titleDiv = document.createElement('div');
                titleDiv.className = "title";
                let priorityDiv = document.createElement('div');
                priorityDiv.className = 'priority';
                let descriptionDiv = document.createElement('div');
                descriptionDiv.className = 'description';
                let dateDiv = document.createElement('div');
                dateDiv.className = 'date';

                let description = storage[property][dataInt].title
                
                let doneButton = document.createElement('div');
                doneButton.textContent = "Done";
                doneButton.className = 'done';


                // checks if it's done, then saves storage to localStorage and rerenders the screen
                doneButton.addEventListener('click', (e) => {
                    if (storage[property][dataInt].done === "not-done"){
                        storage[property][dataInt].done = "done";
                    }
                    else{
                        storage[property][dataInt].done = "not-done";
                    }
                    
                    console.log(storage[property][dataInt])
                    let TodoStorage_serialized = JSON.stringify(storage);
                    localStorage.setItem("TodoStorage", TodoStorage_serialized);

                    reRender(storage);
                });

                let deleteButton = document.createElement('div');
                deleteButton.textContent = 'Delete';
                deleteButton.className = 'delete';


                // eventListener for delete button. When clicked, it uses splice to remove 1 element
                // from the position of dataInt. Then it saves storage to local storage and rerenders
                deleteButton.addEventListener('click', (e) => {
                    console.log(storage[property].splice(dataInt, 1));
                    let TodoStorage_serialized = JSON.stringify(storage);
                    localStorage.setItem("TodoStorage", TodoStorage_serialized);
                    reRender(storage);
                });


                //if given task is "done" the rendered item will be "striked-through"
                if (storage[property][dataInt].done === "done"){
                    dataContainerDiv.style.textDecoration = 'line-through';
                }

                titleDiv.textContent = `${dataInt+1}. ${description}:`
                descriptionDiv.textContent = `${storage[property][dataInt].description}`
                priorityDiv.textContent = `${storage[property][dataInt].priority} priority`
                dateDiv.textContent = `${storage[property][dataInt].dueDate}`              
                
                dataContainerDiv.appendChild(titleDiv);
                dataContainerDiv.appendChild(descriptionDiv);
                dataContainerDiv.appendChild(priorityDiv);
                dataContainerDiv.appendChild(dateDiv);
                dataContainerDiv.appendChild(doneButton);
                dataContainerDiv.appendChild(deleteButton);
                todoDiv.appendChild(dataContainerDiv);
            }
        }

        contentSelector.appendChild(todoDiv);
    }
}

//rerenders grid, first empties html then renders it again
const reRender = (storage) => {
    const contentSelector = document.querySelector('#grid-container');
    contentSelector.innerHTML = "";
    generateTodo(storage);

}

export default generateTodo;