
//2-тапшырма
let userName= prompt("Логин жазыңыз", '');


if (userName == 'admin') {

  let pass = prompt('Сыр сөздү жазыңыз', '');

  if (pass == '123456') {
    alert( 'Кош келиңиз!');
  } else if (pass == '' || pass == null) {
    alert( '' );
  } else {
    alert( 'Сыр сөз туура эмес!' );
  };

} else if (userName == '' || userName == null) {
  alert( '' );
} else {
  alert( "Логин туура эмес!" );
}

