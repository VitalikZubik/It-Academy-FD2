const parentClock = document.querySelector('.wrapper_clock');

class Clock {
    constructor(parentClock) {
        this.parentClock = parentClock    
    }

    resizeRender = () => {
        this.parentClock.innerHTML = '';
        this.createClock();
        this.createClockArrow();
        this.updateTime();
    }
    
    start = () => {
        this.createClock();
        this.createClockArrow();
        this.updateTime();
        setInterval(this.updateTime,1000);
    }

    createClock = () => {
        this.clock = document.createElement('div');
        this.clock.setAttribute('class', 'clock');
        this.parentClock.appendChild(this.clock);

        this.createNumbersClock(12);
        this.createElectronicClock();
    }

    createNumbersClock = (countHours) => {            
        for (let i = 0; i < countHours; i++) {
            let angle = (i > 0? (360 / countHours) * i: 0) / 180 * Math.PI;
            const numClock = document.createElement('div');
            numClock.setAttribute('class', `item`);

            const textNum = document.createTextNode(`${i === 0 ? countHours : i}`);
            numClock.appendChild(textNum);

            this.clock.appendChild(numClock);

            const radius = this.clock.offsetHeight / 2 - numClock.offsetHeight / 2;
            
            const clockCenterX = this.clock.offsetLeft + this.clock.offsetWidth / 2;
            const clockCenterY = this.clock.offsetTop + this.clock.offsetHeight / 2;

            const numClockCenterX = clockCenterX + radius * Math.sin(angle);
            const numClockCenterY = clockCenterY - radius * Math.cos(angle);            

            numClock.style.left = Math.round(numClockCenterX - numClock.offsetWidth / 2) + 'px';
            numClock.style.top = Math.round(numClockCenterY - numClock.offsetHeight / 2) + 'px';
        }
    }

    createElectronicClock = () => {
        const electronicClock = document.createElement('div');
        electronicClock.setAttribute('class', 'electronicClock');

        this.clock.appendChild(electronicClock);

        const clockCenterX = this.clock.offsetLeft + this.clock.offsetWidth / 2;
        const clockCenterY = this.clock.offsetTop + this.clock.offsetHeight / 2;

        electronicClock.style.left = Math.round(clockCenterX - electronicClock.offsetWidth / 2) + 'px';
        electronicClock.style.top = Math.round(clockCenterY - electronicClock.offsetHeight / 2 - this.clock.offsetHeight / 4) + 'px';
    }

    createClockArrow = () => {
        const clockCenterX = this.clock.offsetLeft + this.clock.offsetWidth / 2;
        const clockCenterY = this.clock.offsetTop + this.clock.offsetHeight / 2;

        this.hourArrow = document.createElement('div');
        this.hourArrow.setAttribute('class', 'hourArrow');
        this.clock.appendChild(this.hourArrow);

        this.hourArrow.style.left = Math.round(clockCenterX) + 'px';
        this.hourArrow.style.top = Math.round(clockCenterY - this.hourArrow.offsetHeight / 2) + 'px';

        this.minuteArrow = document.createElement('div');
        this.minuteArrow.setAttribute('class', 'minuteArrow');
        this.clock.appendChild(this.minuteArrow);

        this.minuteArrow.style.left = Math.round(clockCenterX) + 'px';
        this.minuteArrow.style.top = Math.round(clockCenterY - this.minuteArrow.offsetHeight / 2) + 'px';

        this.secondArrow = document.createElement('div');
        this.secondArrow.setAttribute('class', 'secondArrow');
        this.clock.appendChild(this.secondArrow);

        this.secondArrow.style.left = Math.round(clockCenterX) + 'px';
        this.secondArrow.style.top = Math.round(clockCenterY - this.secondArrow.offsetHeight / 2) + 'px';
    }

    updateTime = () => {
        this.setTime()

        this.updateHourArrow(this.hours,this.minutes);
        this.updateMinuteArrow(this.minutes,this.seconds);
        this.updateSecondArrow(this.seconds);

        const currTimeStr = `${this.formatTime(this.hours,2)}:${this.formatTime(this.minutes,2)}:${this.formatTime(this.seconds,2)}`;
        document.querySelector('.electronicClock').innerHTML = currTimeStr;
    }

    updateHourArrow = (hour,minute) => {
        let arrowDegree = hour*30 - 90 + (minute * 0.5);
        this.hourArrow.style.transform = `rotate(${arrowDegree}deg)`;
    }

    updateMinuteArrow = (minute,second) => {
        let arrowDegree = minute*6 - 90 + (second * 0.1);
        this.minuteArrow.style.transform = `rotate(${arrowDegree}deg)`;
    }

    updateSecondArrow = (second) => {
        const arrowDegree = second*6 - 90;
        this.secondArrow.style.transform = `rotate(${arrowDegree}deg)`;
    }

    setTime = () => {
        const currTime=new Date();
        this.hours=currTime.getHours();
        this.minutes=currTime.getMinutes();
        this.seconds=currTime.getSeconds();
    }

    formatTime = (val,len) => {
        let strVal=val.toString();
        while ( strVal.length < len )
            strVal ='0'+strVal;
        return strVal;
    }    
}

const clock = new Clock(parentClock);
clock.start();

window.addEventListener('resize', clock.resizeRender);