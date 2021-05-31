class Hotel {

    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;
    }

    get roomsPricing() {
        return {
            single: 50,
            double: 90,
            maisonette: 135
        }
    }

    capacityPerRoom() {
        return {
            single: this.capacity * 0.5,
            double: this.capacity * 0.3,
            maisonette: this.capacity * 0.2
        }
    }

    rentARoom(clientName, roomType, nights) {

        if (roomType === "single") {

            if (this.capacityPerRoom().single > 0) {
                this.capacityPerRoom().single--;
                let object = {
                    clientName,
                    roomType,
                    nights,
                    rentNumber: this.currentBookingNumber
                }
                this.bookings.push(object);
                return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber++}.`;
            } else {
                return `No ${roomType} rooms available! Available double rooms: ${capacityPerRoom.double}. Available maisonette rooms: ${capacityPerRoom.maisonette}.`;
            }

        } else if (roomType === "double") {

            if (this.capacityPerRoom().double > 0) {
                this.capacityPerRoom().double--;
                let object = {
                    clientName,
                    roomType,
                    nights,
                    rentNumber: this.currentBookingNumber
                }
                this.bookings.push(object);
                return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber++}.`;
            } else {
                return `No ${roomType} rooms available! Available single rooms: ${capacityPerRoom.single}. Available maisonette rooms: ${capacityPerRoom.maisonette}.`;
            }

        } else {

            if (this.capacityPerRoom().maisonette > 0) {
                this.capacityPerRoom().maisonette--;
                let object = {
                    clientName,
                    roomType,
                    nights,
                    rentNumber: this.currentBookingNumber
                }
                this.bookings.push(object);
                return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber++}.`;
            } else {
                return `No ${roomType} rooms available! Available single rooms: ${capacityPerRoom.single}. Available double rooms: ${capacityPerRoom.double}.`;
            }
        }
    }

    checkOut(currentBookingNumber) {

        let result;

        for (let index = 0; index < this.bookings.length; index++) {
            if (this.bookings[index].rentNumber === currentBookingNumber) {
                let amount;
                if (this.bookings[index].roomType === "single") {
                    this.capacityPerRoom().single++;
                    amount = this.bookings[index].nights * this.roomsPricing.single;
                } else if (this.bookings[index].roomType === "double") {
                    this.capacityPerRoom().double++;
                    amount = this.bookings[index].nights * this.roomsPricing.double;
                } else {
                    this.capacityPerRoom().maisonette++;
                    amount = this.bookings[index].nights * this.roomsPricing.maisonette;
                }
                result = `We hope you enjoyed your time here, Mr./Mrs. ${this.bookings[index].clientName}. The total amount of money you have to pay is ${amount} BGN.`;
                this.bookings.splice(index, 1);
                break;
            } else {
                result = `The booking ${currentBookingNumber} is invalid.`;
            }
        }
        return result;
    }

    report() {
        let result;

        if (this.bookings.length !== 0) {
            result = `${this.name.toUpperCase()} DATABASE:\n--------------------\n`;
            this.bookings.sort(function (a, b) { return a.rentNumber - b.rentNumber }).forEach(booking => {
                result += `bookingNumber - ${booking.rentNumber}\nclientName - ${booking.clientName}\nroomType - ${booking.roomType}\nnights - ${booking.nights}\n`;
                if (booking.rentNumber !== this.bookings.length) {
                    result += `----------\n`;
                }
            })
        } else {
            result = `${this.name.toUpperCase()} DATABASE:\n--------------------\nThere are currently no bookings.`;
        }
        return result;
    }
}

let hotel = new Hotel("HotUni", 10);
console.log(hotel.rentARoom('Peter', 'single', 4));
console.log(hotel.rentARoom('Robert', 'double', 4));
console.log(hotel.rentARoom('George', 'maisonette', 6));
console.log(hotel.report());