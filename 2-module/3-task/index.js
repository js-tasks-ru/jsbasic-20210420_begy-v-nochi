let calculator = {
  read: function(value, value2) {
    this.firstNumber = value;
    this.secondNumber = value2;
  },
  sum: function() { return this.firstNumber + this.secondNumber; },
  mul: function() { return this.firstNumber*this.secondNumber; },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
