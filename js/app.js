//events
document.getElementById('title_list').addEventListener('click',showButtons);
document.getElementById('button2').addEventListener('click', hideButtons);
document.getElementById('button1').addEventListener('click',addNewList);
document.getElementById('add_card').addEventListener('click',showTextArea);
//global variables
var addToDo = document.createElement('a');
//adding attribute
addToDo.id = 'add_card';
//functions
function showButtons() {
  document.getElementById('button1').style.display = 'block';
  document.getElementById('button2').style.display = 'block';
}

function hideButtons() {
  document.getElementById('button1').style.display = 'none';
  document.getElementById('button2').style.display = 'none';
}

function addNewList() {
  // prevent input to onload the page
  event.preventDefault();
  //Taking value from input
  var titleList = document.getElementById('title_list').value;
  //creating elements for toDoList
  var containerToDoes = document.getElementById('container-to-do');
  var listContainer = document.createElement('div');
  var title = document.createElement('h5');
  // var addToDo = document.createElement('a');
  //locating elements newLists
  containerToDoes.appendChild(listContainer);
  listContainer.appendChild(title);
  listContainer.appendChild(addToDo);
  //adding Title to the list
  title.innerText = titleList;
  addToDo.innerText = 'Add a card...';
}

function showTextArea() {
  
}
