//Программы обучения детей программированию

//Список программ в подразделах
var block=document.getElementById('block');
for(let listBlock in listProg) {
   let section=document.createElement('section');
   section.className='listBlock';
   block.appendChild(section);

   for(let i of listProg[listBlock]){
      let block=document.createElement('article');
      block.className = 'prog';
      section.appendChild(block);
      
      let bgimage=document.createElement('img');
      bgimage.className='pr-bgimg';
      bgimage.src='img/'+i[4];
      block.appendChild(bgimage);

      let image=document.createElement('img');
      image.className='pr-img';
      image.src='img/'+i[4];
      block.appendChild(image);

      let year=document.createElement('div');
      year.className='pr-year';
      year.textContent=i[1];
      block.appendChild(year);

      let lang=document.createElement('img');
      lang.className='pr-lang logo';
      lang.src='ico/'+i[2]+'.png';
      block.appendChild(lang);

      let tool=document.createElement('img');
      tool.className='pr-tool logo';
      tool.src='ico/'+i[3]+'.png';
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