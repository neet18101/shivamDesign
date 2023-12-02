

const nameEdit = document.getElementById('name-edit')

function editInputValue() {
    // Get the input element
    let userName = document.getElementById('user-name')
    userName.classList.add('name__edit')

    // Make the input element editable
    userName.readOnly = false;
    userName.focus();
}

// Add an event listener to capture changes in the input value
document.getElementById('user-name').addEventListener('blur', function () {
    // Get the input element
    let userName = document.getElementById('user-name');

    console.log(userName);

    userName.classList.remove('name__edit')



    // Make the input element read-only again
    userName.readOnly = true;
});

nameEdit.addEventListener('click', editInputValue);