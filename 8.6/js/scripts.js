// exercise 8.6  getTriangleArea function

function getTriangleArea(a, h) {
    if (a > 0 && h > 0) {
        return a * h * 2;
    } else {
        return "Wrong data";
    }
}

window.console.log(getTriangleArea(10, 6));

var triangleOne = getTriangleArea(15, 23);
var triangleTwo = getTriangleArea(2, 3);
var triangleThree = getTriangleArea(0, 15);

window.console.log(triangleOne);
window.console.log(triangleTwo);
window.console.log(triangleThree); // wrong data test