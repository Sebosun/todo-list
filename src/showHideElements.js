//shows collection adder after button is clicked
const showForm = () => {
    document.getElementById('task-button').addEventListener("click", function() {
        document.querySelectorAll('.bg-modal')[0].style.display = 'flex';
    });
}

const hideForm = () =>{

}

const showCollection = () => {
    console.log('dizlaa')
    document.getElementById('collection-button').addEventListener("click", function() {
        document.querySelectorAll('.bg-modal')[1].style.display = 'flex';
    });
}

const hideCollectionForm = () => {

}

export {showForm, showCollection};