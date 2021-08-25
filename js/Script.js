var bat='ico/Batch.png', cpp='', js='', java='', sharp='', py='', pas='ico/Pascal.jpg', sql='', php='';

var note='', np='ico/Notepad.png', vs='ico/VS.png', as='', ps='', abc='', vsc='', os='';

var list_prog = [
   ['Прога 1', 2018, bat, np, 'img/bat01.png', 'Описание 111 ...'],
   ['Прога 2', 2019, bat, np, 'img/bat02.png', 'Описание 222 ...'],
   ['Прога 3', 2020, bat, np, 'img/bat03.png', 'Описание 333 ...'],
   ['Прога 4', 2021, bat, np, 'img/bat04.png', 'Описание 444 ...'],
   ['Прога 5', 2022, bat, np, 'img/bat05.png', 'Описание 555 ...'],
   ['Прога 6', 2023, bat, np, 'img/bat06.png', 'Описание 666 ...'],
   ['Прога 7', 2024, bat, np, 'img/bat07.png', 'Описание 777 ...'],
   ['Прога 8', 2025, bat, np, 'img/bat08.png', 'Описание 888 ...'],
   ['Прога 9', 2026, bat, np, 'img/bat09.png', 'Описание 999 ...'],
   ['Прога 10', 2027, bat, np, 'img/cpp10.png', 'Описание 1000 ...'],
];

var section = document.getElementById('programs');

for(let i of list_prog){
   let block = document.createElement('article');
   block.className = 'program';
   section.appendChild(block);
   
   let bgimage = document.createElement('img');
   bgimage.className = 'pr-bgimg';
   bgimage.src = i[4];
   block.appendChild(bgimage);

   let image = document.createElement('img');
   image.className = 'pr-img';
   image.src = i[4];
   block.appendChild(image);

   let year = document.createElement('div');
   year.className = 'pr-year';
   year.textContent = i[1];
   block.appendChild(year);

   let lang = document.createElement('img');
   lang.className = 'pr-lang logo';
   lang.src = i[2];
   block.appendChild(lang);

   let tool = document.createElement('img');
   tool.className = 'pr-tool logo';
   tool.src = i[3];
   block.appendChild(tool);

   let taxt = document.createElement('div');
   taxt.className = 'pr-text';
   taxt.textContent = i[5];
   block.appendChild(taxt);
   
   let name = document.createElement('div');
   name.className = 'pr-name';
   name.textContent = i[0];
   block.appendChild(name);
}

var up = document.getElementById('up');
up.onclick = () => {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}

window.onscroll = () => {
   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
      up.style.display = 'block';
   else
      up.style.display = 'none';
}