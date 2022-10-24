function calculator() {
    let num1Field = document.getElementById('num1');
    let num2Field = document.getElementById('num2');
    let result = document.getElementById('result');
    
    return {
        init: function(selector1, selector2, resultSelector) {
            selector1 = num1Field;
            selector2 = num2Field;
            resultSelector = result;
        },
        add: function() {
            result.value = Number(num1Field.value) + Number(num2Field.value);
        },
        subtract: function() {
            result.value = Number(num1Field.value) - Number(num2Field.value);
        }
    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 



