class Textbox {
   constructor(selector, regex) {
    this._elements = Array.from(document.querySelectorAll(selector));
    this._invalidSymbols = regex; 
   } 
   get value() {
    return this._value;
   }
   set value(newValue) {
    this._value = newValue;
   }
   get elements() {
    return this._elements;
   }
   isValid() {
    this._elements.forEach(e => {
        if (this._invalidSymbols.test(e)) {
            return false;
        }
    })
    return true;
   }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = Array.from(document.getElementsByClassName('textbox'));

inputs.forEach(e => {
    e.addEventListener('change',function(){console.log(textbox._elements);})
});
