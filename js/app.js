document.getElementById('title_list').addEventListener('click',showButtons);
document.getElementById('button2').addEventListener('click', hideButtons);

function showButtons() {
  document.getElementById('button1').style.display = 'block';
  document.getElementById('button2').style.display = 'block';
}

function hideButtons() {
  document.getElementById('button1').style.display = 'none';
  document.getElementById('button2').style.display = 'none';
}
