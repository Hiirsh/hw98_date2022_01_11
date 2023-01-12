//id;firstName;lastName;age
const persons = [];
let inputData = prompt('Enter person data separate by ","');
while (inputData) {

    const [idT, firstNameT, lastNameT, ageT] = inputData.split(',')
    const id = idT.trim()
    const firstName = firstNameT.trim()
    const lastName = lastNameT.trim()
    const age = parseInt(ageTemp)
    if (!persons.find(p => p.id === id)) {
        persons.push(Person(id, firstName, lastName, age))
    }
    //Create person from inputData
    //add only unique person to persons
    inputData = prompt('Enter person data separate by ","')
}
printPersons(persons);
printStats(persons);

function printPersons(persons) {
    console.log('...printing')
    persons.forEach(element => {
        console.log(element)
    });
}
//*
function printStats(persons) {
    const tempPersons = [...persons].sort((p1, p2) => p1.age < p2.age)
    const res = {
        maxAge: tempPersons[0].age,
        minAge: tempPersons[tempPersons.length - 1].age,
        averageAge: tempPersons.reduce((acc, p) => acc + p.age, 0) / tempPersons.length
    }
    console.log(res)
    return res
}

function Person(id, firstName, lastName, age) {
    return {
        id, firstName, lastName, age
    }
}