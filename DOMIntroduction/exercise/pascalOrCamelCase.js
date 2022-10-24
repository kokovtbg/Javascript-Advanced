function changeCase() {
    let string = document.getElementById('text').value;
    let caseToUse = document.getElementById('naming-convention').value;
    let result;
    let stringAsArr = string.split(' ');
    switch (caseToUse) {
        case 'Camel Case':
            stringAsArr = stringAsArr.map((e, i) => {
                if (i === 0) {
                    return e.toLowerCase();
                } else {
                    return e.charAt(0).toUpperCase() 
                    + e.substring(1).toLowerCase();
                }
            })
            result = stringAsArr.join('');
            break;
        case 'Pascal Case':
            stringAsArr = stringAsArr.map(e => e.charAt(0).toUpperCase() 
            + e.substring(1).toLowerCase());
            result = stringAsArr.join('');
            break;
        default:
            result = 'Error!';
            break;
    }
    document.getElementsByTagName('span')[0].textContent = result;
}
