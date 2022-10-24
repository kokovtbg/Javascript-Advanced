function solve() {
    let checkButton = document.querySelectorAll('td button')[0];
    let clearButton = document.querySelectorAll('td button')[1];
    checkButton.addEventListener('click', check);
    clearButton.addEventListener('click', clear);
    let table = document.getElementsByTagName('table')[0];
    let paragraph = document.querySelector('#check p');
    let allCells = Array.from(document.querySelectorAll('td input'));

    function check() {
        let done = true;
        let numberObj = {
            1: 0,
            2: 0,
            3: 0
        }
        let matrix = [];
        let array = [];
        for (let i = 0; i < allCells.length; i++) {
            array.push(allCells[i].value)
            if ((i + 1) % 3 === 0) {
                matrix.push(array);
                array = [];
            }
        }
        console.log(matrix);
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                let number = Number(matrix[i][j]);
                switch (number) {
                    case 1:
                        numberObj[1]++;
                        break;
                    case 2:
                        numberObj[2]++;
                        break;
                    case 3:
                        numberObj[3]++;
                        break;
                }
            }
            if (numberObj[1] !== 1 || numberObj[2] !== 1 || numberObj[3] !== 1) {
                done = false;
            }
            numberObj = {
                1: 0,
                2: 0,
                3: 0
            }
        }
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                let number = Number(matrix[j][i]);
                switch (number) {
                    case 1:
                        numberObj[1]++;
                        break;
                    case 2:
                        numberObj[2]++;
                        break;
                    case 3:
                        numberObj[3]++;
                        break;
                }
            }
            if (numberObj[1] !== 1 || numberObj[2] !== 1 || numberObj[3] !== 1) {
                done = false;
            }
            numberObj = {
                1: 0,
                2: 0,
                3: 0
            }
        }

        if (done) {
            table.style.border = "2px solid green";
            paragraph.style.color = "green";
            paragraph.textContent = "You solve it! Congratulations!";
        } else {
            table.style.border = "2px solid red";
            paragraph.style.color = "red";
            paragraph.textContent = "NOP! You are not done yet..." ;
        }
    }

    function clear() {
        allCells.forEach(e => e.value = '');
        table.style.border = '';
        paragraph.textContent = ''
    }
}