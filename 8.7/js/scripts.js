// exercise 8.7  Arrays

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
    maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'],
    allNames = femaleNames.concat(maleNames),
    newName = 'Marian';

function addName(name, nameArray) {
    if (nameArray.indexOf(name) === -1) {
        nameArray.push(name);
    }
}

window.console.log(allNames);
addName(newName, allNames);
window.console.log(allNames);