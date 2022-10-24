function pie(pies, pie1, pie2) {
    let beginIndex = pies.indexOf(pie1);
    let endIndex = pies.indexOf(pie2);
    let piesToPrint = [];
    for (let i = beginIndex; i <= endIndex; i++) {
        const element = pies[i];
        piesToPrint.push(element);
    }
    return piesToPrint;
}

pie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);