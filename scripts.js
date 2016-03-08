$( document ).ready(function() {

});



var Vehicle = function() {
    this.div = document.createElement('div');
    document.body.appendChild(this.div);
    
    

    
}
Vehicle.prototype.move = function() {

}
Vehicle.prototype.damge = function() {

}
Vehicle.prototype.remove = function() {

}

var Car = function() {
    Vehicle.call(this);
    this.health = 2;
    this.div.className = 'car';
    console.log('This cars health is ' + this.health);
    
}


Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

var CopCar = function() {
    Vehicle.call(this);
    this.health = 3;
    this.div.className = 'copcar';
    console.log('This copcars health is ' + this.health);
    $('.copcar').click(function() {
        this.health = this.health
        console.log(this.health);
    });
    
    
    
}
CopCar.prototype = Object.create(Car.prototype);
CopCar.prototype.constructor = CopCar;

var Motorcycle = function() {
    Vehicle.call(this);
    this.health = 1;
    this.div.className = 'motorcycle';
    console.log('This motorcycles health is ' + this.health);
    
}
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

var Tank = function() {
    Vehicle.call(this);
    this.health = 10;
    this.div.className = 'tank';
    console.log('This tanks health is ' + this.health);
}
Tank.prototype = Object.create(Vehicle.prototype);
Tank.prototype.constructor =Tank;



function spawnCar () {
    var car  = new Car();
    // $('.car').animate({left:'1250px'},5000);

}

function spawnCopCar () {
    var copcar = new CopCar();
    // $('.copcar').animate({top:'500px'},5000);

}

function spawnMotorcycle () {
    var motorcycle = new Motorcycle();
    // $('.motorcycle').animate({left:'1250px', top:'500px'},2500);


}

function spawnTank () {
    var tank = new Tank();
        // $('.tank').animate({left:'1250px'},10000);
}
// abc