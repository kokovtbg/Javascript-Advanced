function deleteByEmail() {
    let searchText = document.querySelector('input').value;
    let rows = document.querySelectorAll('table tbody tr');
    let hasRow = false;
    for (let row of rows) {
        if (row.children[1].textContent === searchText) {
            let tableBody = document.querySelector('table tbody');
            tableBody.removeChild(row);
            document.getElementById('result').textContent = 'Deleted.';
            hasRow = true;
        }
    }
    if (!hasRow) {
        document.getElementById('result').textContent = 'Not found.';
    }
}