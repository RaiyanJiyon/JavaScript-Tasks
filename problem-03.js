function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return 'Invalid Input';
    }

    let splitCharacters = name.split('');
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (let i = 0; i < splitCharacters.length; i++) {
        if (numbers.includes(splitCharacters[i])) {
            return true;
        }
    }
    return false;
};

console.log(checkDigitsInName('Raj123'));
console.log(checkDigitsInName('Suman'));
console.log(checkDigitsInName('Name2024'));
console.log(checkDigitsInName('!@#'));
console.log(checkDigitsInName(["Raj"]));