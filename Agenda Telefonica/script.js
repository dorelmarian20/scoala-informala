var list = [
  
  ]
  
  function initialize(){
    draw();
    addButton();
  }
  
  function addButton(){
    document.querySelector("#new-contact").addEventListener("click", function(){
      addItem();
    })
  }
  
  function draw(){
    let contactList = document.querySelector("#list");
    let saveButton = document.querySelector("#save-contact");
    let addButton = document.querySelector("#new-contact");
    addButton.style.display = "";
    saveButton.style.display = "none";
    contactList.innerHTML = "";
    for(let i = 0; i < list.length; i++){
      contactList.innerHTML += `<li>
        <div class="item container">
          <div class="item-np clr-white">
            <p>${list[i].name}</p>
          </div>
          <div class="item-np clr-white">
            <p>${list[i].phone}</p>
          </div>
          <div class="item-buttons">
            <i class="far fa-edit" onclick="editButtons(${i})"></i>
            <i class="fas fa-trash-alt" onclick="deleteButtons(${i})"></i>
          </div>
        </div>
      </li>`
    }
  }
  
  function addItem(){
    let name = document.querySelector("#add-name");
    let phone = document.querySelector("#add-phone");
    let newItem = {};
  
    if(name.value !== "" && phone.value !== ""){
      newItem.name = name.value;
      newItem.phone = phone.value;
      list.push(newItem);
      name.value = "";
      phone.value = "";
    }
    draw();
  }
  
  let listener = false;
  function editButtons(i){
    
    if(listener){
        alert("save first");
    } else {
        let name = document.querySelector("#add-name");
        let phone = document.querySelector("#add-phone");
        let saveButton = document.querySelector("#save-contact");
        let addButton = document.querySelector("#new-contact");
        saveButton.style.display = "";
        addButton.style.display = "none";
        name.value = list[i].name;
        phone.value = list[i].phone;
        listener = true;
  
        document.querySelector("#save-contact").addEventListener("click", function saveEdit(){
          if(name.value !== "" && phone.value !== ""){
            list[i].name = name.value;
            list[i].phone = phone.value;
            name.value = "";
            phone.value = "";
            draw();
          }
          listener = false;
          
        },{once: true})
    }
  }
  
  
  function deleteButtons(i){
    list.splice(i,1);
    draw();
  }
  
  
  initialize();