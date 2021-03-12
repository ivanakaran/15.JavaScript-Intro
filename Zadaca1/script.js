class Employee {
  constructor(_name, _company, _salary) {
    this.name = _name;
    this.company = _company;
    this.salary = _salary;
    this.position = this.setSalary(_salary);
  }

  setPosition() {
    if (this.salary <= 20000) {
      return 'employee';
    } else if (this.salary > 20000 && this.salary < 40000) {
      return 'manager';
    } else if (this.salary > 40000) {
      return 'executive';
    }
  }

  setSalary = function (salary) {
    return this.setPosition(salary);
  }

  printInfo() {
    return `Name: ${this.name}, Company: ${this.company},
    Position: ${this.position}, 
    Salary: ${this.salary}`
  }

}

let employeeOne = new Employee("Jack Smith", "Vodafone", 15000);

let employeeTwo = new Employee("Jane Doe", "T-Mobile", 30000);

let employeeThree = new Employee("Sam Jackson", "Vodafone", 45000)

let employeeArr = [employeeOne.printInfo(), employeeTwo.printInfo(), employeeThree.printInfo()]

let ul = document.createElement('ul')
document.body.appendChild(ul);


employeeArr.forEach(function (employee) {
  let li = document.createElement('li');
  ul.appendChild(li);
  li.innerHTML += employee;
})