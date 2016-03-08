$(document).ready(function() {

});



var Vehicle = function() {
    this.div = document.createElement('div');
    document.body.appendChild(this.div);
    
    var damage = 1;
    


    
}
Vehicle.prototype.move = function() {  
    var classname = this.div.className
    console.log(classname)
    
    if(classname === 'car') {
        $(this.div).animate({'left':'1400px'}, 10000).animate({'left':'-60px'} ,10000);
        console.log('a car is driving');
        return;
    };
    if(classname === 'copcar') {
        $(this.div).animate({'top':'900px'},10000).animate({'top':'-60px'},10000);
        console.log('a copcar is driving');
        return;
    };
    if(classname === 'motorcycle') {
        $(this.div).animate({'left':'1250px', 'top':'500px'},5000).animate({'left':'-60px', 'top':'-60px'},5000);
        console.log('a motorocycle is driving');
        return;
    };
    if(classname === 'tank') {
        $(this.div).animate({'left':'1350px'},20000).animate({'left':'-90px'},20000);
        console.log('a tank is driving');
        return;
    };
}
Vehicle.prototype.damage = function() {
    this.health = (this.health) -1;
    var classname = this.div.className;
    console.log('This ' +classname + ' has ' + this.health + ' health remaining');
    if(this.health === 0) {
        this.remove();
    };
    
}
Vehicle.prototype.remove = function() {
    $(this.div).remove();
};

var Car = function() {
    Vehicle.call(this);
    this.health = 2;
    this.div.className = 'car';
    console.log('This cars health is ' + this.health);
    
    $(this.div).css({
    left: Math.floor( Math.random() - 50),
    top: Math.floor( Math.random() * 750)
    });
    
    this.div.addEventListener('click', function() {
        this.damage();
    }.bind(this));
}


Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

var CopCar = function() {
    Vehicle.call(this);
    this.health = 3;
    this.div.className = 'copcar';
    console.log('This copcars health is ' + this.health); 
    
    $(this.div).css({
    left: Math.floor( Math.random() * 1000),
    top: Math.floor( Math.random() -60),
    });
    
    this.div.addEventListener('click', function() {
        this.health -1
        this.damage();
    }.bind(this));
}
CopCar.prototype = Object.create(Car.prototype);
CopCar.prototype.constructor = CopCar;

var Motorcycle = function() {
    Vehicle.call(this);
    this.health = 1;
    this.div.className = 'motorcycle';
    console.log('This motorcycles health is ' + this.health);
    
    $(this.div).css({
    left: Math.floor( Math.random() - 80),
    top: Math.floor( Math.random() * 700)
    });
    
    this.div.addEventListener('click', function() {
        this.damage();
    }.bind(this));
    
}
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

var Tank = function() {
    Vehicle.call(this);
    this.health = 10;
    this.div.className = 'tank';
    console.log('This tanks health is ' + this.health);
    
    $(this.div).css({
    left: Math.floor( Math.random() - 80),
    top: Math.floor( Math.random() * 700)
    });
    
    this.div.addEventListener('click', function() {
        this.damage();
    }.bind(this)); // Bind the click listener so that when it executes, "this" is equal to "this" (the tank) as it is at this instant in time
}
Tank.prototype = Object.create(Vehicle.prototype);
Tank.prototype.constructor = Tank;



function spawnCar () {
    var car  = new Car();
    car.move();
    setInterval(function() {
       car.move(); 
    }, 20000);
}

function spawnCopCar () {
    var copcar = new CopCar();
    copcar.move();
     setInterval(function() {
       copcar.move(); 
    }, 20000);
}

function spawnMotorcycle () {
    var motorcycle = new Motorcycle();
    motorcycle.move();
     setInterval(function() {
       motorcycle.move(); 
    }, 10000);
}

function spawnTank () {
    var tank = new Tank();
    tank.move();
     setInterval(function() {
       tank.move(); 
    }, 20000);
}



