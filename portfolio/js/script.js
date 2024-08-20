var up = document.getElementById('up'); //Кнопка вверх

up.onclick=() => {
   document.body.scrollTop=0;
   document.documentElement.scrollTop=0;
}

window.onscroll=() => {
    if (document.body.scrollTop>256 || document.documentElement.scrollTop>256)
       up.style.display='block';
    else
       up.style.display='none';
 }
