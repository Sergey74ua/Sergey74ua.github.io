//Программа обучения детей программированию

//Языки программирования
const bat='Bat', c='C', Cpp='Cpp', cs='CS', css='CSS', html='HTML', java='Java', js='JS',
   pascal='Pascal', php='PHP', python='Python', sql='SQL';
//Инструменты
const abc='ABC', ac='AC', as='AS', atom='Atom', c4d='C4D', excel='Excel', figma='Figma', github='GitHub',
   idle='IDLE', n='Notepad', np='NP', os='OS', paint='Paint', pc='PC', ps='PS', vb='VB',
   vpn='VPN', vs='VS', vsc='VSC', word='Word';
//Фреймворки
const composer='Composer', laravel='Laravel', node='Node', qt='QT', unity='Unity', wp='WP';

//Подключение файлов script-классов и json-данных
var listClass=['data.js', 'Prog.js'];
for (let name of listClass) {
   let script=document.createElement('script');
   script.type='text/javascript';
   script.src='js/'+name;
   document.body.appendChild(script);
}

//Кнопка вверх
var up = document.getElementById('up');
up.onclick=() => {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}
window.onscroll=() => {
    if (document.body.scrollTop>500 ||
       document.documentElement.scrollTop>500)
       up.style.display='block';
    else
       up.style.display='none';
 }
 