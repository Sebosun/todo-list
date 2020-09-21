//shows collection adder after button is clicked
const showForm = () => {
    document.getElementById('task-button').addEventListener("click", function() {
        document.querySelectorAll('.bg-modal')[0].style.display = 'flex';
    });

    hideForm();
}

const hideForm = () =>{
    document.getElementById('exit-form').addEventListener('click', function(){
        document.querySelectorAll('.bg-modal')[0].style.display = 'none';
    })
}

const showCollection = () => {
    console.log('dizlaa')
    document.getElementById('collection-button').addEventListener("click", function() {
        document.querySelectorAll('.bg-modal')[1].style.display = 'flex';
    });

    hideCollectionForm();
}

const hideCollectionForm = () => {
    document.getElementById('exit-collection').addEventListener("click", function() {
        document.querySelectorAll('.bg-modal')[1].style.display = 'none';
    });
}

export {showForm, showCollection};