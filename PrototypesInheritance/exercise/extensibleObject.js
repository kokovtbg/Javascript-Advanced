function extensibleObject() {
    let obj = {};
    obj.extend = function (template) {
        for (let [key, value] of Object.entries(template)) {
            if (typeof value === 'function') {
                Object.prototype[key] = value;
            } else {
                this[key] = value;
            }
        }
    }
    return obj;
}
const myObj = extensibleObject();
const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);
console.log(myObj);
console.log(Object.getPrototypeOf(myObj));