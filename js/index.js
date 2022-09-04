//Функція обрахунку академічних годин
// Вхідне значення в хвилинах
function convert(a){
    hours = Math.trunc(a/80);
    minutes = a % 80;
    console.log(hours +":"+ minutes);
  }
var min = document.querySelector('#min'),
       send = document.querySelector('.send'),
       reset = document.querySelector('.reset'),
       result = document.querySelector('#hour'),
       hour = 60;

       result.value = '0' + ':' + '00';

       send.addEventListener('click', function (e) {
           e.preventDefault();
           minutes = min.value;
           if (~minutes.indexOf('.') || minutes < 0) {
            result.value = 'Please input a integer type > 0';
          } else
           //Рахуємо кількість годин
          if ( minutes < hour ) {
                  return result.value = minutes + ' ' + 'min';
          } else if ( minutes == '') {
              result.value = '0' + 'min';
          } else {
              a = minutes; //Берем значення поля min
              convert(a); // надаєм фунцкції значення поля мін зі змінної а
              //Вивід результату
              if (minutes < 10 ) {
                  result.value = hours + ':' + 0 + minutes;
              } else {
                  result.value = hours + ':' + minutes;
              }
          }
       });
       //Подія reset для кнопки reset
       reset.addEventListener('click', function (e) {
           e.preventDefault();
           min.value = '';
           result.value = '0' + ':' + '00';
           min.focus();
       });
