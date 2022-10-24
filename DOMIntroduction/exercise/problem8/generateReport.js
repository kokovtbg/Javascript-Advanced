function solve() {
    let tableHeads = document.getElementsByTagName('th');
    let count = 0;
    let columns = [];
    let columnNames = [];
    for (let head of tableHeads) {
        if (head.children[0].checked) {
            columns.push(count);
            columnNames
            .push(head.textContent.replace("\"", "").replace("\"", "").trim().toLowerCase());
        }
        count++;
    }
    let neededData = [];
    let rows = document.getElementsByTagName('tr');
    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        let rowColumns = row.children;
        let object = {};
        for (let j = 0; j < rowColumns.length; j++) {
            if (columns.includes(j)) {
                let index = 0;
                columns.forEach((e, i) => {
                    if (e === j) {
                        index = i;
                    }
                })
                object[columnNames[index]] = rowColumns[j].textContent;
            }
        }
        neededData.push(object);
    }
    console.log()
    neededData = JSON.stringify(neededData);
    let output = document.getElementById('output');
    output.value = neededData;
}