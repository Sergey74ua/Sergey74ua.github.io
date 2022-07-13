//Программы для обучения программированию

//Подключение файлов скриптов и данных
var listClass=['intro.js', 'icons.js', 'data.js', 'other.js', 'Main.js'];
for (let name of listClass) {
   let script=document.createElement('script');
   script.type='text/javascript';
   script.src='js/'+name;
   document.body.appendChild(script);
}

//Кнопка вверх
var up = document.getElementById('up');
up.onclick=() => {
   document.body.scrollTop=0;
   document.documentElement.scrollTop=0;
}
window.onscroll=() => {
    if (document.body.scrollTop>500 ||
       document.documentElement.scrollTop>500)
       up.style.display='block';
    else
       up.style.display='none';
 }
 