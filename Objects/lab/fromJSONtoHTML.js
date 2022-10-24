function jsonHTML(jsonStringArray) {
    
    let arr = JSON.parse(jsonStringArray);
    let content = '';
    content += '<table>\n\t<tr>';
    let headObj = Object.assign({}, arr[0]);
    for (const key in headObj) {
        content += '<th>' + key + '</th>';
    }
    content += '</tr>\n\t<tr>';
    let count = 0;
    for (const object of arr) {
        for (const key in object) {
            let cleanContent = object[key].toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            content += '<td>' + cleanContent + '</td>';
        }
        if (count < arr.length - 1) {
            content += '</tr>\n\t<tr>';
        } else {
            content += '</tr>\n</table>'
        }
        count++;
    }
    
    return content;
}

console.log(jsonHTML(`[{"Name":"Stamat &",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
));