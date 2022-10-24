class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (name === '' || name === undefined || name ===null) {
            throw new Error('Invalid input!');
        }
        if (salary === '' || salary === undefined || salary ===null) {
            throw new Error('Invalid input!');
        }
        if (position === '' || position === undefined || position ===null) {
            throw new Error('Invalid input!');
        }
        if (department === '' || department === undefined || department ===null) {
            throw new Error('Invalid input!');
        }
        if (salary < 0) {
            throw new Error('Invalid input!');
        }
        let employee = {
            name: name,
            salary: salary,
            position: position
        }
        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }
        this.departments[department].push(employee);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let result = '';
        let topAvgSalary = 0;
        let topDepartment = '';
        for (let [key, value] of Object.entries(this.departments)) {
            let avgSalary = 0;
            value.forEach(e => {
                avgSalary += e.salary;
            });
            avgSalary /= value.length;
            if (avgSalary > topAvgSalary) {
                topAvgSalary = avgSalary;
                topDepartment = key;
            }
        }
        this.departments[topDepartment].sort((a, b) => {
            let result = b.salary - a.salary;
            if (result === 0) {
                result = a.name.localeCompare(b.name);
            }
            return result;
        })
        result = `Best Department is: ${topDepartment}\n` + 
        `Average salary: ${topAvgSalary.toFixed(2)}\n`; 
        this.departments[topDepartment].forEach((e, i) => {
            let separator = i === 
            this.departments[topDepartment].length - 1 ? '' : '\n';
            result += e.name + ' ' + e.salary + ' ' + e.position + separator;
        })
        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
