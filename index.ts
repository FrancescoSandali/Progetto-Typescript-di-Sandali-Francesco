//Define Interface Transport

interface ITransport{
    type: string;
    id: number;
    available: boolean;
    verifyAvailable(): void;
    assignUser(user: IUser): void;
}

//Define Interface user
interface IUser{
    name: string;
    subname: string;
    email: string;
    payMethods: string;
    bookTransport(transport: ITransport): void;
}


//Define Interface City
interface ICity{
    city: string;
    availableTransport: ITransport[];
    addTransport(transport: ITransport):void;
}



//Define Class Transport
class Transport implements ITransport{
    type: string;
    id: number;
    available: boolean;

    constructor(type: string, id: number, available: boolean){
        this.type = type;
        this.id = id;
        this.available = available;
    }
    verifyAvailable(): void {
        if(this.available === true){
            console.log(`The vehicle ${this.id} can be booked by the user, hurry up!!!`);
        }else{
            console.log(`The vehicle ${this.id} can't be booked beacause other user was faster than you`);
        }
    }

    assignUser(user:User): void{
        if(this.available === true && user){
            console.log(`The vehicle is assigned to ${user.name} ${user.subname}`);
        }else if(this.available === false && user){
            console.log(`Hi ${user.name} ${user.subname} the vehicle is booked by another user`);
        }
    }
}


//Define Class User
class User implements IUser{
    name: string;
    subname: string;
    email: string;
    payMethods: string;

    constructor(name: string, subname: string, email:string, payMethods: string){
        this.name = name;
        this.subname = subname;
        this.email = email;
        this.payMethods = payMethods;
    }

    bookTransport(transport: Transport): void {
        transport.assignUser(this);
        if(transport.available === true){
            console.log(`Congratulation ${this.name} ${this.subname}, you has book ${transport.type} with ID: ${transport.id}, you have pay with ${this.payMethods}`);
            transport.available = false;
        }else{
            console.log(`Hi ${this.name} ${this.subname}, you can't book this ${transport.type} with ID: ${transport.id} because is books by another user`);
        }
    }
}


//Define Class City
class City implements ICity{
    city: string;
    availableTransport: ITransport[];
    
    constructor(city: string){
        this.city = city;
        this.availableTransport = []
    }

    getAvailableTransport(): Transport[]{
       return this.availableTransport.filter(transport => transport.available === true)
    }

    addTransport(transport: Transport): void {
        this.availableTransport.push(transport);
        console.log(`The vehicle ${transport.type} with ID:${transport.id} is coming to ${this.city}`);
    }
}


//I'm starting to instantiate, to check in the console log


// Create transport and user instances for testing
let scooter1 = new Transport('scooter', 4, true);
let electricCar1 = new Transport('electric car', 1, false);
let scooter3 = new Transport('scooter', 3, true);

let user1 = new User('Francesco', 'Sandali', 'francesco09sandali@gmail.com', 'credit card');
let user2 = new User('Federico', 'Cassini', 'federico.cassini@gmail.com', 'contanti');
let user3 = new User('Francesca', 'Tamalli', 'francesca.tamalli@gmail.com', 'credit card');

// Create a city and add transports
let arezzo = new City('Arezzo');
arezzo.addTransport(scooter1);
arezzo.addTransport(electricCar1); 
arezzo.addTransport(scooter3); 

// Verify state and book transport
scooter1.verifyAvailable();  
user1.bookTransport(scooter1); // Francesco books scooter1
user2.bookTransport(scooter1); // Federico tries to book scooter1 but it's already in use

// Verify state and try booking an already used vehicle
electricCar1.verifyAvailable();
user3.bookTransport(electricCar1); // Francesca tries to book scooter2 but it's already in use

// Check available vehicles in the city
console.log('Available vehicles in Milano:', arezzo.getAvailableTransport());

