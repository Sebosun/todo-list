
// asks you to which todoCollection add the given todo
const addCollectionOptions = (storage) => {
    const collectionsDiv = document.getElementById('collections');
    // let buttonsDiv = document.createElement('div')
    let labelDiv = document.createElement('label');
    let selectDiv = document.createElement('select');

    selectDiv.id = 'collection-choice';

    labelDiv.htmlFor = 'collection'
    labelDiv.textContent = 'Choose your collection  '
    
    // Object.keys returns an array
    Object.keys(storage).forEach(element => {
        console.log(storage);
        let option = document.createElement('option')
        option.textContent = element;
        option.value = element;
        selectDiv.appendChild(option);
    });

    labelDiv.appendChild(selectDiv);
    collectionsDiv.append(labelDiv);
    
}

export default addCollectionOptions;