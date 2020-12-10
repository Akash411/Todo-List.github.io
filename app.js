
var addBtn = document.getElementById("add-task");
var inputList = document.querySelector('.input-list');
var todoInput = document.getElementById("todo-input");

todoInput.addEventListener("keyup",function() {
    if(event.keyCode == 13){
        event.preventDefault();
        addBtn.click();
    }
})
    
addBtn.addEventListener('click', function() {

    
var app = document.querySelector(".app");
    
    if(todoInput.value === ""){
        alert("Enter The Tasks to do..");
        
    }
     else{
         var parentDiv = document.createElement("Div");
         parentDiv.classList.add("common-cls");
        var inputField = document.createElement("input");
        inputField.type = "text";
        inputField.value = todoInput.value;
        inputField.setAttribute("disabled", "true");
        inputField.classList.add("input-list");
    parentDiv.appendChild(inputField);
    
    todoInput.value = "";
        
        var editDiv = document.createElement("DIV");
        editDiv.classList.add("edit-btns");
        
        var updateBtn = document.createElement("Button");
        updateBtn.classList.add("update", "visibal", "btn-cls"); 
        updateBtn.innerHTML = "UPDATE";
        editDiv.appendChild(updateBtn);
        
        var editBtn = document.createElement("Button");
        editBtn.classList.add("edit", "btn-cls")
        editBtn.innerHTML = "EDIT";
        editDiv.appendChild(editBtn);

        var removeBtn = document.createElement("Button");
        removeBtn.classList.add("remove", "btn-cls");
        removeBtn.innerHTML = "REMOVE";
        editDiv.appendChild(removeBtn);
        
    
        parentDiv.appendChild(editDiv);
    app.appendChild(parentDiv);

//    Editable Div
    
        editBtn.addEventListener('click', ()=> {
    inputField.disabled = false;
    updateBtn.classList.remove("visibal");
        })
         
        updateBtn.addEventListener('click', () => {
    inputField.disabled = true;
    updateBtn.classList.toggle("visibal");
        })
         
         inputField.addEventListener("keyup",function() {
    if(event.keyCode == 13){
        event.preventDefault();
        updateBtn.click();
    }
})
        
        removeBtn.addEventListener('click', () => {
        parentDiv.remove();
})
     }

})


   


