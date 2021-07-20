alert("Test JS!");

var	block = document.getElementById('block');

block.textContent = "Тест JS";

var toAdd = document.createDocumentFragment();
for(var i=0; i <= 5; i++){
   var newDiv = document.createElement('div');
   newDiv.id = 'myDiv'
   newDiv.className = 'myClass'
   newDiv.textContent = 'Тест '+i;
   toAdd.appendChild(newDiv);
}
array.appendChild(toAdd);
