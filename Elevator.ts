interface Passenger {
    floor: number
}

interface Floor {
    level: number,
    queue: Passenger[]
}


class Elevator {
    static numberOfFloors: number = 10; // Make into a variable
    
    public currentFloor: number = 0;
    public queue: Passenger[] = [];
    // Features
        // Go to floor
    public goToFloor(floor:number): void {
        const directionIsUp = this.directionIsUp(floor);
        if(directionIsUp) {
           // Map over floors 
        }
        this.currentFloor=floor;
    };
        // Queue passengers
            // Simple
                // Onload passenger
    public queuePassenger(passenger:Passenger): void {
        this.queue.push(passenger);
    }
                // Offload passenger
    public dequeueLastPassenger(): void {
        this.queue.pop();
    }
    // public number

    private directionIsUp(newFloor:number) {
        return this.currentFloor < newFloor;
    }
            // Advanced
    private checkNewPassenger(passenger:Passenger): void {
        // Check new passenger position
        // isPassengerOnTheCurrentFloor(passenger)
    }
    private isPassengerOnTheCurrentFloor(passenger:Passenger): boolean {
        return this.currentFloor === passenger.floor;
    }
    private isNewPassengerClosest(passenger:Passenger): boolean {
        return false
    }


    private checkFloor(floor:number): boolean {
        // True if not
            // Bigger 10 or smaller than 0
        return false
    }
        
}

// export default Elevator;

/*
window.Elevator = Elevator;

const Heis = new Elevator();

console.log(Heis);

console.log('currentFloor ',Heis.currentFloor);
Heis.goToFloor(5);
console.log('currentFloor ',Heis.currentFloor);

console.log('queue ',Heis.queue);
console.log('queing passenger');
Heis.queuePassenger({
    floor: 4
});
console.log(' New passenger going to ',Heis.queue[0]);
Heis.goToFloor(4);
console.log('Offloading passenger at ',Heis.currentFloor);
Heis.dequeueLastPassenger();
console.log(' Finally done! Passengers:  ',Heis.queue.length)
*/
// Heis

// console.log(window)