
//events
document.getElementById('title_list').addEventListener('click',showButtons);
document.getElementById('button2').addEventListener('click', hideButtons);
document.getElementById('button1').addEventListener('click',addNewList);


//functions
function showButtons(event) {
 event.preventDefault();
 var containerToDoes = document.getElementById('card_parent');
 containerToDoes.className = 'containerToDoes';
 document.getElementById('button1').style.display = 'block';
 document.getElementById('button2').style.display = 'block';
}

function hideButtons(event) {
 event.preventDefault();
 document.getElementById('button1').style.display = 'none';
 document.getElementById('button2').style.display = 'none';
}

function addNewList(event) {
 // prevent input to onload the page
 event.preventDefault();
 var listContainer = document.createElement('div');
 var toDo = document.createElement('textarea');
 var addToDo = document.createElement('a');

 //atributos
 listContainer.className = 'wrapper';
 addToDo.className='add-text';
 //Taking value from input

 var titleList = document.getElementById('title_list').value;
 //creating elements for toDoList
 var containerToDoes = document.getElementById('container-to-do');
 var title = document.createElement('h4');
 //locating elements newLists
 title.className= 'title';
 containerToDoes.appendChild(listContainer);
 listContainer.appendChild(title);
 listContainer.appendChild(addToDo);
 //adding Title to the list
 title.innerText = titleList;
 addToDo.innerText = 'Add a card...';
 //event
 addToDo.onclick = showTextArea;
 function showTextArea() {
   // Creating Variables
   var add = document.createElement('p');
   var close = document.createElement('button');
   // Assigning attributes
   toDo.className = 'textarea';
   add.innerHTML = 'Add';
   close.innerText = 'X';
   add.type = 'submit';
   add.className = 'button1';
   close.className = 'button2';
   close.id='close';
   addToDo.style.display = 'none';
   //locating elements
   listContainer.appendChild(toDo);
   listContainer.appendChild(add);
   listContainer.appendChild(close);
   // event
   add.onclick = createCard;

   function createCard() {
     // Creating Variables
     var pNewList = document.createElement('button');
     var wrapper = document.createElement('div');
     //locating elements
     listContainer.appendChild(wrapper);
     wrapper.appendChild(pNewList);
     listContainer.insertBefore(wrapper,toDo);
     var valueTextArea = toDo.value;
     pNewList.innerText = valueTextArea;
     //set attibutes
     pNewList.className = 'show-activity';
   }
 }
}
