function addItem() {
    let textField = document.getElementById('newItemText');
    let valueField = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.value = valueField.value;
    option.textContent = textField.value;
    let select = document.getElementById('menu');
    select.appendChild(option);
    textField.value = '';
    valueField.value = '';
}