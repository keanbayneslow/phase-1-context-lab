/* Your Code Here */

function createEmployeeRecord(employeeData) {
    return {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');

    this.timeInEvents.push({
        type: 'TimeIn',
        date: date,
        hour: parseInt(hour, 10)
    });

    return this;
}

function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');

    this.timeOutEvents.push({
        type: 'TimeOut',
        date: date,
        hour: parseInt(hour, 10)
    });

    return this;
}

function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);

    return (timeOutEvent.hour - timeInEvent.hour) / 100;
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function allWagesFor() {
    const eligibleDates = this.timeInEvents.map(event => event.date);

    return eligibleDates.reduce((totalWages, date) => {
        return totalWages + wagesEarnedOnDate.call(this, date);
    }, 0);
}

function findEmployeeByFirstName(employees, firstName) {
    return employees.find(employee => employee.firstName === firstName);
}

function calculatePayroll(employees) {
    return employees.reduce((totalPayroll, employee) => {
        return totalPayroll + allWagesFor.call(employee);
    }, 0);
}
