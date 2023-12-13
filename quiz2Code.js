let calculator = (function () {
  let savedValue;
  
    function calculate(operation, secondNumber) {
      let result;
      switch (operation) {
        case 'plus':
          result = savedValue + secondNumber;
          console.log("The result of the sum is: ", result);
          return result;
        case 'minus':
          result = savedValue - secondNumber;
          console.log("The result of the subtraction is: ", result);
          return result;
        case 'times':
          result = savedValue * secondNumber;
          console.log("The result of the multiplication is: ", result);
          return result;
        case 'dividedBy':
          result = savedValue / secondNumber;
          console.log("The result of the division is: ", result);
          return result;
        default:
          console.error('Invalid operation');
          return NaN;
      }
    }
  
    return {
      plus: function (firstNumber) {
        savedValue = firstNumber;
        return function (secondNumber) {
          return calculate('plus', secondNumber);
        };
      },
      minus: function (firstNumber) {
        savedValue = firstNumber;
        return function (secondNumber) {
          return calculate('minus', secondNumber);
        };
      },
      times: function (firstNumber) {
        savedValue = firstNumber;
        return function (secondNumber) {
          return calculate('times', secondNumber);
        };
      },
      dividedBy: function (firstNumber) {
        savedValue = firstNumber;
        return function (secondNumber) {
          return calculate('dividedBy', secondNumber);
        };
      }
    };
})();
  
var result1 = calculator.plus(6)(5);
var result2 = calculator.minus(3)(9);
var result3 = calculator.times(8)(3);
var result4 = calculator.dividedBy(7)(2);