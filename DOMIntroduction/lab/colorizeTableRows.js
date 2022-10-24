function colorizeRows() {
    let tableRows = document.getElementsByTagName('tr');
    for (let i = 0; i < tableRows.length; i++) {
        if (i % 2 !== 0) {
            tableRows[i].style.background = 'teal';
        }
    }
}