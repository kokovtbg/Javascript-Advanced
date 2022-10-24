function collect() {
    let collection = document.querySelectorAll('li');
    let textarea = document.getElementById('result');
    for (let el of collection) {
        textarea.appendChild(el);
    } 
}