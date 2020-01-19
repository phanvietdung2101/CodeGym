let Remote = function (id) {
    this.id = id;

    this.switchChannel = function (target,targetChannel) {
        target.switchToChannel(targetChannel);
    };

    this.changeVol = function (target,targetVol) {
        target.changeVol(targetVol);
    };

    this.turnPow = function (target) {
        target.turnPow();
    };

};

let TiVi = function () {
    this.status = "OFF";
    this.channel = 0;
    this.vol = 0;

    this.switchToChannel = function (value) {
        this.channel = value;
    };

    this.getStatus = function () {
        return this.status;
    };

    this.getChannel = function () {
        return this.channel;
    };

    this.getVol = function (){
        return this.vol ;
    };

    this.changeVol = function (value) {
        this.vol += value;
    };

    this.turnPow = function () {
        if(this.status == "OFF"){
            this.status = "ON"
        } else {
            this.status = "OFF"
        }
    }
};


let remote1 = new Remote();
let tivi1  = new TiVi();

tivi1.turnPow();
tivi1.switchToChannel(7);
remote1.switchChannel(tivi1,3);
remote1.changeVol(tivi1,2);
remote1.turnPow(tivi1);

