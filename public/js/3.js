class Human {
    constructor(name = 'Ivan', age = '100', dateOfBirth = '01.01.1919') {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    displayInfo() {
        return `${this.name}, ${this.age}, ${this.dateOfBirth}`;
    }
}

class Employee extends Human {
    constructor(name = 'Ivan', age = '100', dateOfBirth = '01.01.1919', salary = 0, department = '0') {
        super(name, age, dateOfBirth);
        this.salary = salary;
        this.department = department;
    }

    displayInfo() {
        let str = super.displayInfo();
        return `${str}, ${this.salary}, ${this.department}`;
    }
}

class Manager extends Employee {
    constructor(name = 'Ivan', age = '100', dateOfBirth = '01.01.1919', salary = 0, department = '0', developers = []) {
        super(name, age, dateOfBirth, salary, department);
        this.developers = developers;
    }

    addDeveloper(developer){
        this.developers.push(developer);
    }

    removeDeveloper(developer){
        let key = this.developers.indexOf(developer);
        this.developers.splice(key, 1);
    }

    writeDevelopers(){
        return this.developers.slice();
    }
}

class Developer extends Employee{
    constructor(name = 'Ivan', age = '100', dateOfBirth = '01.01.1919', salary = 0, department = '0', manager) {
        super(name, age, dateOfBirth, salary, department);
        this.manager = manager;
    }

    changeManager (name, age, dateOfBirth, salary, department){
        this.manager.name = name;
        this.manager.age = age;
        this.manager.dateOfBirth = dateOfBirth;
        this.manager.salary = salary;
        this.manager.department = department;
    }

}

