interface Queue {
    floor: number
}

interface Passenger {

}

class Elevator {
    static floors: number = 10;
    
    public currentFloor: number = 0;
    public queue: Queue[] = [];
    // Features
        // Go to floor
    public goToFloor(floor:number): void {
        this.currentFloor=floor;
    };
        // Queue passengers
            // Simple
                // Onload passenger
    public queuePassenger(passenger:Queue): void {
        this.queue.push(passenger);
    }
                // Offload passenger
    public dequeueLastPassenger(): void {
        this.queue.pop();
    }
    // public number
            // Advanced
    private checkNewPassenger(passenger:Queue): void {
        // Check new passenger position
        // isPassengerOnTheCurrentFloor(passenger)
    }
    private isPassengerOnTheCurrentFloor(passenger:Queue): boolean {
        return this.currentFloor === passenger.floor;
    }
    private isNewPassengerClosest(passenger:Queue): boolean {
        
    }


    private checkFloor(floor:number): boolean {
        // True if not
            // Bigger 10 or smaller than 0
    }
        
}

// export default Elevator;


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
// Heis

// console.log(window)