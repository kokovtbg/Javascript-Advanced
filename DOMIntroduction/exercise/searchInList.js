function search() {
    let items = document.getElementsByTagName('li');
    let searchString = document.getElementById('searchText').value;
    let count = 0;
    for (let element of items) {
        if (element.textContent.includes(searchString)) {
            let underline = document.createElement('u');
            let bold = document.createElement('bold');
            
            let text = element.textContent;
            bold.textContent = text;

            element.innerHTML = '';
            element.appendChild(underline);
            underline.appendChild(bold);
            count++;
        }
    }
    let countMatchHeader = document.getElementById('result');
    countMatchHeader.textContent = `${count} matches found`;
}
