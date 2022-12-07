class AlarmClock {
    constructor (){
        this. alarmCollection = [];
        this. timerId =  null;
    }

    addClock (time, callback, id) {
        if (id === undefined){
            throw new Error('id не передан');
        } else if (this.alarmCollection.some(element => element.id === id)) {
            return console.log('id существует');
        } else {
            this.alarmCollection.push({id, time, callback});
        }
    }

    removeClock (id) {
        this.alarmCollection = this.alarmCollection.filter(element => element.id !== id);
    }

    getCurrentFormattedTime () {
        return new Date().toLocaleTimeString().slice(0,-3);
    }

    printAlarms () {
        console.log("Печать всех будильников в количестве: " + this.alarmCollection.length);
        this.alarmCollection.forEach(element => {
            console.log(`Будильник № ${element.id} заведен на ${element.time}`)
        });
    }

    clearAlarms() {
        this.alarmCollection = [];
        clearInterval(this.timerId);
        this.timerId= null;
    }
    
    start () {
        let checkClock = (alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()){
                return alarm.callback();
            } 
        }

        if (this.timerId === null) {
            this.timerId = setInterval(() => {
              this.alarmCollection.forEach((alarm) => checkClock(alarm));
            }, 1000);
        }
    }

    stop () {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
}

// let alarm123 = new AlarmClock();
// alarm123.addClock("12:31", () => console.log("Доброе утро!"), 1);
// alarm123.addClock("16:55", () => console.log("Доброе утро!!!!!!!"), 2);

function testCase() {
    let phoneAlarm = new AlarmClock();

    phoneAlarm.addClock("19:46", () => console.log("Доброе утро!"), 1);
    phoneAlarm.addClock("19:47", () => {
        console.log("Доброе утро!!!!!!");
        phoneAlarm.removeClock(2);
    }, 2);
    phoneAlarm.addClock("19:47", () => console.log("Доброе утро!!!!!!!!!!!!!!!!!"), 2)
    phoneAlarm.addClock("19:48", () => console.log("Все, проспали!"), 3);

    phoneAlarm.printAlarms();
    phoneAlarm.start();

    phoneAlarm.stop();
    phoneAlarm.clearAlarms();
}

