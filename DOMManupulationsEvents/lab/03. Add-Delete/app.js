function addItem() {
    let list = document.getElementById('items');
    let text = document.getElementById('newItemText').value;
    let listItem = document.createElement('li');
    listItem.textContent = text;
    list.appendChild(listItem);
    let aLink = document.createElement('a');
    aLink.setAttribute("href", "#");
    aLink.textContent = '[Delete]';
    listItem.appendChild(aLink);
    
    aLink.addEventListener('click', deleteItem);
    function deleteItem() {
        list.removeChild(listItem);
    }
}