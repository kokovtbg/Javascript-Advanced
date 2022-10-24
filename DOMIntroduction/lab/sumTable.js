function sum() {
    let sum = 0;
    let arrayRows = document.querySelectorAll('tr');
    for (let i = 1; i < arrayRows.length; i++) {
        let cols = arrayRows[i].children;
        sum += Number(cols[cols.length - 1].textContent);
    }
    document.querySelector('#sum').textContent = sum;
}