export class Room {

    constructor(id, name, description, price, worker, client,totalBeds, totalBathrooms, totalTelevision, isBusy) {

        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.worker = worker;
        this.client = client;
        this.totalBeds = totalBeds;
        this.totalBathrooms = totalBathrooms;
        this.totalTelevision = totalTelevision;
        this.isBusy = isBusy;
        this.status = this.isBusy === true ? 'busy' : 'not busy';
    }

    static fromDisplayableRoom(displayableRoom) {

        return new Room(
            displayableRoom.id,
            displayableRoom.name,
            displayableRoom.description,
            displayableRoom.price,
            displayableRoom.worker,
            displayableRoom.client,
            displayableRoom.totalBeds,
            displayableRoom.totalBathrooms,
            displayableRoom.totalTelevision,
            displayableRoom.status === 'not busy');
    }

    static toDisplayableRoom(room) {
        return {
            id: room.id,
            name: room.name,
            description: room.description,
            price: room.price,
            worker: room.worker,
            client: room.client,
            totalBeds: room.totalBeds,
            totalBathrooms: room.totalBathrooms,
            totalTelevision: room.totalTelevision,
            status: room.isBusy === true ? 'busy' : 'not busy'
        };
    }
}