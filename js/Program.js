//Программы обучения детей программированию

//Список программ в подразделах
window.onload=() => {
   var program=document.getElementById('program');

   for(let listUnit in listChap) {
      let chap=document.createElement('div');
      chap.className='chap';
      program.appendChild(chap);

      //Вывод заголовков подразделов
      let title=document.createElement('div');
      title.className='title';
      chap.appendChild(title);

         let heading=document.createElement('h2');
         heading.textContent=listChap[listUnit].title[0];
         title.appendChild(heading);

         let paragraph=document.createElement('p');
         paragraph.textContent=listChap[listUnit].title[1];
         title.appendChild(paragraph);

      let group=document.createElement('section');
      group.className='group';
      chap.appendChild(group);

      //Вывод блоков подразделов
      for(let i of listChap[listUnit].content) {
         let unit=document.createElement('article');
         unit.className='unit';
         group.appendChild(unit);
         
         let bg=document.createElement('img');
         bg.className='unit-bg';
         bg.src=i[4];
         unit.appendChild(bg);

         let image=document.createElement('img');
         image.className='unit-img';
         image.src=i[4];
         unit.appendChild(image);

         let descript=document.createElement('div');
         descript.className='unit-descript';
         descript.textContent=i[5];
         unit.appendChild(descript);
         
         let title=document.createElement('div');
         title.className='unit-title';
         title.textContent=i[0];
         unit.appendChild(title);
         
         let tool=document.createElement('img');
         tool.className='unit-tool logo';
         tool.src=i[3];
         unit.appendChild(tool);

         let lang=document.createElement('img');
         lang.className='unit-lang logo';
         lang.src=i[2];
         unit.appendChild(lang);

         let year=document.createElement('div');
         year.className='unit-year';
         year.textContent=i[1];
         unit.appendChild(year);
      }
   }
}