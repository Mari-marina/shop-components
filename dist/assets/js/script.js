function test(a, b) {
    return a + b
}

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



window.addEventListener("DOMContentLoaded", function() {
  let callFormTel = document.querySelectorAll(".js-phoneMask")

  Array.prototype.forEach.call(callFormTel, function(input) {
    let keyCode

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode)
      let pos = this.selectionStart
      if (pos < 3) event.preventDefault()
      let matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function(a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        })
      i = new_value.indexOf("_")
      if (i !== -1) {
        i < 5 && (i = 3)
        new_value = new_value.slice(0, i)
      }
      let reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function(a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&")
      reg = new RegExp("^" + reg + "$")
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value
      if (event.type === "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false)
    input.addEventListener("focus", mask, false)
    input.addEventListener("blur", mask, false)
    input.addEventListener("keydown", mask, false)
  })
})
//# sourceMappingURL=script.js.map
