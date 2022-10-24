function solve(data, criteria) {
    data = JSON.parse(data);
    if (criteria === 'all') {
        data.forEach((e, i) => {
            console.log(`${i}. ${e.first_name} ${e.last_name} - ${e.email}`);
        });
        return;
    } 
    let [field, value] = criteria.split('-');
    function filterData(element, field, value) {
        return element[field] === value;
    }
    data = data.filter(e => filterData(e, field, value));
    data.forEach((e, i) => console.log(`${i}. ${e.first_name} ${e.last_name} - ${e.email}`));
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female');