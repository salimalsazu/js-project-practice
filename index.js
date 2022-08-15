
const inputMail = document.getElementById('delete-confirm');
var regEx = /\S+@\S+\.\S+/; // string, white-space, @ , white-space, dot, white-space, value, string //

document.getElementById('delete-confirm').addEventListener('keyup', function (event) {
    const text = event.target.value;

    const deleteButton = document.getElementById('btn-delete');
    if (regEx.test(inputMail.value)) {
        deleteButton.removeAttribute('disabled');
    } else {
        deleteButton.setAttribute('disabled', true);
    }
})