const tableKey = 'cms-table';


let cmsTable;
let cmsTableDemo = {
    'Ionut': {
        'phone':'12345'
    },
    'George': {
        'phone':'234324'
    }
};

let enableDisablenameInput = (option) => {
    let newPersonName = document.getElementById('newPersonName');
    if(option === 'enable'){
        newPersonName.disabled = false;
    }else if (option === 'disable'){
        newPersonName.disabled = true;
    }
}

let refreshDomTable = () => {

    let cmsTableKeys = Object.keys(cmsTable);
    let tableContainer = document.getElementById('cmsTableContainer');
    let oldTableBody = document.getElementById('tableBody');
    tableContainer.removeChild(oldTableBody);
    let newTableBody = document.createElement('span');
    newTableBody.id = 'tableBody';
    tableContainer.appendChild(newTableBody);

    for (let i = 0; i < cmsTableKeys.length; i++ ){
        let currentRow = document.createElement('div');
        let currentNameCol = document.createElement('div');
        let currentPhoneCol = document.createElement('div');
        let currentEditBtn = document.createElement('div');
        let currentDeleteBtn = document.createElement('div');

        currentRow.className = 'cms-table-row';
        currentNameCol.className = 'cms-table-column cms-name';
        currentPhoneCol.className = 'cms-table-column cms-phone';
        currentEditBtn.className = 'cms-table-column cms-edit';
        currentDeleteBtn.className = 'cms-table-column cms-delete';

        currentNameCol.innerHTML = cmsTableKeys[i];
        currentPhoneCol.innerHTML = cmsTable[cmsTableKeys[i]].phone;

        currentEditBtn.innerHTML = '<i class="fas fa-edit"></i>';
        currentDeleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

        currentRow.appendChild(currentNameCol);
        currentRow.appendChild(currentPhoneCol);
        currentRow.appendChild(currentEditBtn);
        currentRow.appendChild(currentDeleteBtn);
        
        newTableBody.appendChild(currentRow);
    }

    let enableDisableNewUserModal = (option) => {
        let newPersonName = document.getElementById('newPersonName');
        let newPersonPhone = document.getElementById('newPersonPhone');
        newPersonName.value = '';
        newPersonPhone.value = '';

        let newPersonModal = document.getElementById('newPersonModal');
        let backDrop = document.getElementById('backDrop');

        newPersonModal.className = `${option}-modal`;
        backDrop.className = `${option}-modal`;
    }

    let addNewEntryBtn = document.getElementById('cmsAddNewEntry');
    let editBtns = document.getElementsByClassName('cms-edit');
    let deleteBtn = document.getElementsByClassName('cms-delete');

    let newPersonSubmitBtn = document.getElementById('newPersonSubmitBtn');
    let newPersoneCancelBtn = document.getElementById('newPersonCancelBtn');

    newPersonSubmitBtn.addEventListener('click', () => {
        let newPersonName = document.getElementById('newPersonName').value.trim();
        let newPersonPhone = document.getElementById('newPersonPhone').value.trim();

        if (newPersonName === '') {
            document.getElementById('newPersonName').className = 'input-err';
        }else {
            document.getElementById('newPersonName').className = '';
        }
        if (newPersonPhone === '') {
            document.getElementById('newPersonPhone').className = 'input-err';
        }else {
            document.getElementById('newPersonPhone').className = '';
        }

        if (newPersonName !== '' && newPersonPhone !== ''){
            let newPerson = {};
            cmsTable[newPersonName] = {
                'phone': newPersonPhone,
            }
            localStorage.setItem(tableKey, JSON.stringify(cmsTable));
            enableDisableNewUserModal('disable');
            refreshDomTable();
        }
    });

    newPersoneCancelBtn.addEventListener('click', () =>{
        enableDisableNewUserModal('disable');
    });

    addNewEntryBtn.addEventListener('click', () => {
        enableDisableNewUserModal('enable');
    });

    for(let i = 0; i<editBtns.length; i++){
        editBtns[i].addEventListener('click', ($event) =>{
           let nameToEdit = $event.target.parentElement.children[0].innerText;
           let personToEdit = cmsTable[nameToEdit];
           enableDisableNewUserModal('enable'); 
           let newPersonName = document.getElementById('newPersonName');
           let newPersonPhone = document.getElementById('newPersonPhone');
           newPersonName.value = nameToEdit;
           newPersonPhone.value = personToEdit.phone;
           enableDisablenameInput('disable');
        });
    }

    for(let i = 0; i < deleteBtn.length; i++){
        deleteBtn[i].addEventListener('click',($event) => {
            let nameToDelete = $event.target.parentElement.children[0].innerText;
            let isSure = window.confirm('Are you sure you want to delete ' + nameToDelete + '?');
            if(isSure){
                deleteUserFromTable(nameToDelete)
            }
        });
    }

}

let deleteUserFromTable = (userName) => {
    let tempTable = {};
    let cmsTableKeys = Object.keys(cmsTable);
    for(let i = 0; i < cmsTableKeys.length; i++){
        if(userName !== cmsTableKeys[i]){
            tempTable[cmsTableKeys[i]] = cmsTable[cmsTableKeys[i]];
        }
    }
    cmsTable = tempTable;
    localStorage.setItem(tableKey, JSON.stringify(cmsTable));
    refreshDomTable();
}

let init = () =>{
    if(localStorage.getItem(tableKey)){
        cmsTable = JSON.parse(localStorage.getItem(tableKey));
    }else {
        cmsTable = cmsTableDemo;
        localStorage.setItem(tableKey, JSON.stringify(cmsTable));
    }
    refreshDomTable();
}

init();
