// exercise 8.5  Quadratic Equation

var a = 6,
    b = 6,
    value = (a * a) + (2 * a * b) - (b * b);

window.console.log('Wynik: ' + value);
window.console.log(value === 0 ? 'zero' : (value > 0) ? 'wynik dodatni' : 'wynik ujemny');
