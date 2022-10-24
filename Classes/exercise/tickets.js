function solve(array, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
        static sort(a, b, criteria) {
            switch(criteria) {
                case 'destination':
                    return a.destination.localeCompare(b.destination);
                case 'price':
                    return a.price - b.price;
                case 'status':
                    return a.status.localeCompare(b.status);
            }
        }
    }


    let arrToPrint = [];
    array.forEach(e => {
        let splittedData = e.split('\|');
        let destination = splittedData[0];
        let price = Number(splittedData[1]);
        let status = splittedData[2];
        let ticket = new Ticket(destination, price, status);
        arrToPrint.push(ticket);
    });
    
    return arrToPrint.sort((a, b) => Ticket.sort(a, b, criteria));
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'));
console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'));