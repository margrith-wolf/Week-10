let id = 0;

document.getElementById('add1').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-plant').value;
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth()+1}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById('formControlSelect').value;
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-plant').value = '';
    
    // let editActions = row.insertCell(3);
    //editActions.appendChild(createEditButton(id++));
});


document.getElementById('add').addEventListener('click', () => {
    let reminderDate = new Date();
    let table = document.getElementById('reminders');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('what-plant').value;
    row.insertCell(1).innerHTML = `${reminderDate.getFullYear()}-${reminderDate.getMonth()+1}-${reminderDate.getDate()}`;
    //CHECKBOX CELL DOESN'T ADD SELECTED CHECKBOX CORRECTLY
    row.insertCell(2).innerHTML = document.querySelectorAll('input[name=select]').forEach((e) => {
        if (e.checked == true) {selectValue = e.value; }
    });

    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('what-plant').value = '';
})

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-secondary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}

/* EDIT FUNCTION DOESN'T WORK...YET

function createEditButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-success';
    btn.id = id;
    btn.innerHTML = 'Edit';
    btn.onclick = () => {
        $("#myModal").modal();
        console.log(`Editing row with id: item-${id}`);
        let elementtoEdit = document.getElementById(`item-${id}`);
        let newEdit = document.getElementById(`item-${id}`).innerHTML;
        newEdit = replaceChild(elementtoEdit, newEdit);
    };
    return btn;
} */


