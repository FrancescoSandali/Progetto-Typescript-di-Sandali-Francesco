//Define Interface Transport
//Define Class Transport
var Transport = /** @class */ (function () {
    function Transport(type, id, available) {
        this.type = type;
        this.id = id;
        this.available = available;
    }
    Transport.prototype.verifyAvailable = function () {
        if (this.available === true) {
            console.log("The vehicle ".concat(this.id, " can be booked by the user, hurry up!!!"));
        }
        else {
            console.log("The vehicle ".concat(this.id, " can't be booked beacause other user was faster than you"));
        }
    };
    Transport.prototype.assignUser = function (user) {
        if (this.available === true && user) {
            console.log("The vehicle is assigned to ".concat(user.name, " ").concat(user.subname));
        }
        else if (this.available === false && user) {
            console.log("Hi ".concat(user.name, " ").concat(user.subname, " the vehicle is booked by another user"));
        }
    };
    return Transport;
}());
//Define Class User
var User = /** @class */ (function () {
    function User(name, subname, email, payMethods) {
        this.name = name;
        this.subname = subname;
        this.email = email;
        this.payMethods = payMethods;
    }
    User.prototype.bookTransport = function (transport) {
        transport.assignUser(this);
        if (transport.available === true) {
            console.log("Congratulation ".concat(this.name, " ").concat(this.subname, ", you has book ").concat(transport.type, " with ID: ").concat(transport.id, ", you have pay with ").concat(this.payMethods));
            transport.available = false;
        }
        else {
            console.log("Hi ".concat(this.name, " ").concat(this.subname, ", you can't book this ").concat(transport.type, " with ID: ").concat(transport.id, " because is books by another user"));
        }
    };
    return User;
}());
//Define Class City
var City = /** @class */ (function () {
    function City(city) {
        this.city = city;
        this.availableTransport = [];
    }
    City.prototype.getAvailableTransport = function () {
        return this.availableTransport.filter(function (transport) { return transport.available === true; });
    };
    City.prototype.addTransport = function (transport) {
        this.availableTransport.push(transport);
        console.log("The vehicle ".concat(transport.type, " with ID:").concat(transport.id, " is coming to ").concat(this.city));
    };
    return City;
}());
//I'm starting to instantiate, to check in the console log
// Create transport and user instances for testing
var scooter1 = new Transport('scooter', 4, true);
var scooter2 = new Transport('electric car', 1, false);
var scooter3 = new Transport('scooter', 3, true);
var user1 = new User('Francesco', 'Sandali', 'francesco09sandali@gmail.com', 'credit card');
var user2 = new User('Federico', 'Cassini', 'federico.cassini@gmail.com', 'contanti');
var user3 = new User('Francesca', 'Tamalli', 'francesca.tamalli@gmail.com', 'credit card');
// Create a city and add transports
var arezzo = new City('Arezzo');
arezzo.addTransport(scooter1);
arezzo.addTransport(scooter2);
arezzo.addTransport(scooter3);
// Verify state and book transport
scooter1.verifyAvailable();
user1.bookTransport(scooter1); // Francesco books scooter1
user2.bookTransport(scooter1); // Federico tries to book scooter1 but it's already in use
// Verify state and try booking an already used vehicle
scooter2.verifyAvailable();
user3.bookTransport(scooter2); // Francesca tries to book scooter2 but it's already in use
// Check available vehicles in the city
console.log('Available vehicles in Milano:', arezzo.getAvailableTransport());
