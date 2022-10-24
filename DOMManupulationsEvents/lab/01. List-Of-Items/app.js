function addItem() {
    let li = document.createElement('li');
    let text = document.getElementById('newItemText').value;
    li.textContent = text;
    let list = document.getElementById('items');
    list.appendChild(li);
}