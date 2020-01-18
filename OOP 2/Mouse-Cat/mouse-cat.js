let Rat = function (name,weight,speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = true;

    this.say = function () {
        console.log("Chit, chit");
    };
    this.dead = function () {
        this.status = false ;
    };
    this.getStatus = function () {
        return this.status;
    }

};

let Cat = function (name,weight,speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.catched = [0,0];

    this.getWeight = function () {
        return this.weight;
    };

    this.say = function () {
        console.log("Meow, Meow")
    };

    this.catchRat = function (rat) {
        if(this.speed > rat.speed){
            if(this.checkCatched()){
                console.log("You already got 1");
            } else if (rat.getStatus() == false){
                console.log("This rat was dead");
            } else {
                console.log("Got 1");
                rat.status = false ;
                this.catched[0] = 1;
                this.catched[1] = rat.weight;
            }
        } else {
            console.log("Cat so slow for this rat")
        }
    };

    this.checkCatched = function () {
        if(this.catched[0] === 1){
            return true;
        } else {
            return false;
        }
    };

    this.eatRat = function () {
        if(this.checkCatched()){
            this.weight += this.catched[1];
            console.log("Just eat a rat and gain " + this.catched[1] + " weight");
            this.catched = [0,0];
        } else {
            console.log("Nothing to eat");
        }
    }
};

let rat1 = new Rat("tom",2,5);
let rat2 = new Rat("mew",3,12);
let cat = new Cat("jerry",10,10);

rat2.say = function () {
    console.log("quac quac")
};
rat1.say();
rat2.say();
cat.say();

cat.catchRat(rat2);

cat.catchRat(rat1);
cat.eatRat();
console.log(cat.getWeight());




