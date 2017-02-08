/** Exercise 10.4 Kodilla */

function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}

Phone.prototype.printInfo = function() {
    console.log("Phone brand is " + this.brand + " color is " + this.color + " and the price is " + this.price + " PLN" );
};

Phone.prototype.makeCall = function(number) {
    console.log("I'm calling " + number);
    setTimeout(function() {
        console.log('... ... ...');
    }, 1000);
    setTimeout(function() {
        console.log('Nobody answer');
        console.log('Connection terminated');
    }, 2000);

};

var galaxyS6 = new Phone('Samsung', '2500', 'silver'),
    iPhone6s = new Phone('Apple', '3500', 'white'),
    onoPlusOne = new Phone('OnePlus', '1500', 'dark silver');

galaxyS6.printInfo();
iPhone6s.printInfo();
onoPlusOne.printInfo();

galaxyS6.makeCall('555-549-688');