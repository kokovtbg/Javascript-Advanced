function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    
    function onClick() {
        let textarea = document.querySelector('textarea');
        let text = textarea.value;
        let array = JSON.parse(text);

        let allRest = [];
        for (let el of array) {

            let restaurant = el.split(' - ')[0];
            let workersArr = el.split(' - ')[1];
            let workers = workersArr.split(', ');
            for (let worker of workers) {
                let name = worker.split(' ')[0];
                let salary = worker.split(' ')[1];

                salary = Number(salary);
                
                if (allRest.some(e => e.name === restaurant)) {
                    allRest = allRest.map(e => {
                        if (e.name === restaurant) {
                            e.totalSalary += salary;
                            if (salary > e.bestSalary) {
                                e.bestSalary = salary;
                            }
                            let workerObj = {
                                name: name,
                                salary: salary
                            };
                            e.workers.push(workerObj);
                        }
                        return e;
                    });
                } else {
                    allRest.push({
                        name: restaurant,
                        totalSalary: salary,
                        bestSalary: salary,
                        workers: [{name: name, salary: salary}]
                    });
                }
            }
        }
        let restFinal = allRest
        .sort((a, b) => b.totalSalary / b.workers.length - a.totalSalary / a.workers.length)[0];
        restFinal.avgSalary = restFinal.totalSalary / restFinal.workers.length;
        


        restFinal.workers.sort((a, b) => b.salary - a.salary);

        let restParagraph = document.querySelector('div#bestRestaurant p');
        restParagraph.textContent = `Name: ${restFinal.name} Average Salary: ${restFinal.avgSalary.toFixed(2)} Best Salary: ${restFinal.bestSalary.toFixed(2)}`;

        let workerText = '';
        let count = 0;
        for (let worker of restFinal.workers) {
            workerText += `Name: ${worker.name} With Salary: ${worker.salary}`;
            if (count < restFinal.workers.length - 1) {
                workerText += ' ';
            }
            count++;
        }
        let workersParagraph = document.querySelector('div#workers p');
        workersParagraph.textContent = workerText;

    }
    
}
