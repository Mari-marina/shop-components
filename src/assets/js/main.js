function counterFunction(count) {

  var plus = count.querySelector('.plus');
  var minus = count.querySelector('.minus');
  var number = count.querySelector('.number');
  var numberValue = parseFloat(number.value, 10);

  minus.addEventListener('click', function() {

    if (numberValue === 0) {
      return;
    };

    numberValue--;
    number.value = numberValue;
  });

  plus.addEventListener('click', function() {
    numberValue++;
    number.value = numberValue;
  });

}

var counts = document.querySelectorAll('.counter');

counts.forEach(counterFunction);



