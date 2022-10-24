function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    function onClick() {
        let tableRows = document.querySelectorAll('tr');
        for (let row of tableRows) {
            row.classList.remove('select');
        }
        let searchText = document.querySelector('input');
        for (let i = 1; i < tableRows.length; i++) {
            if (searchText.value !== '' && 
            tableRows[i].textContent.includes(searchText.value)) {
                tableRows[i].classList.add('select');
            } 
        }
    }
    
}