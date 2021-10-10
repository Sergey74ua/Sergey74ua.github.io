//Программы для обучения программированию

window.onload=() => {
   //Список программ в подразделах
   var program=document.getElementById('program');

   for(let listUnit in listLang) {
      let catalog=document.createElement('div');
      catalog.className='catalog';
      program.appendChild(catalog);

      //Вывод заголовков подразделов
      let title=document.createElement('div');
      title.className='title';
      catalog.appendChild(title);

         let heading=document.createElement('h2');
         heading.textContent=listLang[listUnit].title[0];
         title.appendChild(heading);

         let paragraph=document.createElement('p');
         paragraph.textContent=listLang[listUnit].title[1];
         title.appendChild(paragraph);

      let group=document.createElement('section');
      group.className='group';
      catalog.appendChild(group);

      //Вывод блоков подразделов
      for(let i of listLang[listUnit].content) {
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

   //Список прочих данных в подразделах
   var other=document.getElementById('other');

   for(let listIcon in listOther) {
      let catalog=document.createElement('div');
      catalog.className='catalog';
      other.appendChild(catalog);

      //Вывод заголовков подразделов
      let title=document.createElement('div');
      title.className='title';
      catalog.appendChild(title);

         let heading=document.createElement('h2');
         heading.textContent=listOther[listIcon].title[0];
         title.appendChild(heading);

         let paragraph=document.createElement('p');
         paragraph.textContent=listOther[listIcon].title[1];
         title.appendChild(paragraph);

      let gallery=document.createElement('section');
      gallery.className='gallery';
      catalog.appendChild(gallery);

      //Вывод блоков подразделов
      for(let i of listOther[listIcon].content) {
         let icon=document.createElement('article');
         icon.className='icon';
         gallery.appendChild(icon);
         
         let image=document.createElement('img');
         image.className='icon-img';
         image.src=i[1];
         icon.appendChild(image);

         let title=document.createElement('div');
         title.className='icon-title';
         title.textContent=i[0];
         icon.appendChild(title);
      }
   }
}