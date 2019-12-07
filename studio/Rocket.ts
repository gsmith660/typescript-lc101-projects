import { Payload } from './Payload';
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let sum: number = 0;
        for (let item of items) {
            sum += item.massKg;
        }
        return sum;
    }

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo): boolean {
        let canAdd = this.canAdd(cargo);
        if (canAdd) {
            this.cargoItems.push(cargo);
        }
        return canAdd;
    }

    addAstronaut(astronaut: Astronaut) {
        let canAdd = this.canAdd(astronaut);
        if (canAdd) {
            this.astronauts.push(astronaut);
        }
        return canAdd;
    }
}