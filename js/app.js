
// Llamamos los elementos del HTML a JS
var containerToDo = document.getElementById('container-to-do');
// Creamos los elementos que necesitamos
var title= document.createElement('h1');
var form = document.createElement('form');
var toDo = document.createElement('input');
var btnSubmit = document.createElement('button');

// Le agregamos atributos a esos elementos creados
  toDo.setAttribute("type", "text");
  btnSubmit.innerText = 'Guardar';
  toDo.id = 'input';
//  Decimos donde se van a crear
containerToDo.appendChild(title);
containerToDo.appendChild(form);
form.appendChild(toDo);
containerToDo.appendChild(btnSubmit);


function showTitle() {
  event.preventDefault();
  // traemos los elementos
  var titleToDo = document.getElementById('title').value;
  var addToDo = document.createElement('a');
  //atributos
  title.innerText=titleToDo;
  title.style.fontSize= 'medium';
  title.style.textAlign='left';
  addToDo.id= 'add';
  addToDo.innerText = ('Añadir una tarjeta');
  //eventos
  addToDo.onclick= showToDoInContainer;
  //Crear
  containerToDo.appendChild(addToDo);
}
