"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            sum += item.massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        var canAdd = this.canAdd(cargo);
        if (canAdd) {
            this.cargoItems.push(cargo);
        }
        return canAdd;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        var canAdd = this.canAdd(astronaut);
        if (canAdd) {
            this.astronauts.push(astronaut);
        }
        return canAdd;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
