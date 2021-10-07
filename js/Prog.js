//Программы обучения детей программированию

//Список программ в подразделах window.onload=() =>
var block=document.getElementById('block');
for(let listBlock in listPart) {
   let section=document.createElement('section');
   section.className='listBlock';
   block.appendChild(section);
   title(section, listBlock);
   unit(section, listBlock);
}

//Вывод заголовков подразделов
function title(section, listBlock) {
   for(let i of listPart[listBlock].descript) {

      let partName=document.createElement('h2');
      partName.className='partName';
      partName.textContent=i[0];
      section.appendChild(partName);

      let partText=document.createElement('p');
      partText.className='partText';
      partText.textContent=i[1];
      section.appendChild(partText);
   }
}

//Вывод блоков подразделов
function unit(section, listBlock) {
   for(let i of listPart[listBlock].content) {
      let block=document.createElement('article');
      block.className='prog';
      section.appendChild(block);
      
      let bgimage=document.createElement('img');
      bgimage.className='pr-bgimg';
      bgimage.src=i[4];
      block.appendChild(bgimage);

      let image=document.createElement('img');
      image.className='pr-img';
      image.src=i[4];
      block.appendChild(image);

      let year=document.createElement('div');
      year.className='pr-year';
      year.textContent=i[1];
      block.appendChild(year);

      let lang=document.createElement('img');
      lang.className='pr-lang logo';
      lang.src=i[2];
      block.appendChild(lang);

      let tool=document.createElement('img');
      tool.className='pr-tool logo';
      tool.src=i[3];
      block.appendChild(tool);

      let taxt=document.createElement('div');
      taxt.className='pr-text';
      taxt.textContent=i[5];
      block.appendChild(taxt);
      
      let name=document.createElement('div');
      name.className='pr-name';
      name.textContent=i[0];
      block.appendChild(name);
   }
}