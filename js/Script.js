var list_prog = [
   ['Один', 1, 1],
   ['Два', 2, 22],
   ['Три', 3, 333],
   ['Четыре', 4, 4444],
   ['Пять', 5, 55555],
];

var section = document.getElementById('programs');

for(let i of list_prog){
   let block = document.createElement('article');
   block.className = 'program';
   block.textContent = i[0];
   section.appendChild(block);
}
