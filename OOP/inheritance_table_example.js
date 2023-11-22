/* In this file we explore the use of the super(); statement in inheritance */

class Table {
    constructor(legs) {
        this.legs = legs;
    }
}

class MeetingTable extends Table {
    constructor(dataPorts) {
        super(6);               // we place the arguments of the parent constructor as default.
        this.dataPorts = dataPorts;
    }
}

class customTable extends Table {
    constructor(legs) {
        super(legs);
    }
}

const meetingRoomTable = new MeetingTable(true);
const heavyDutyTable = new customTable(10);

console.log(meetingRoomTable);
console.log(heavyDutyTable);
