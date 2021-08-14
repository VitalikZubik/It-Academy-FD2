const parentClock = document.querySelector('.wrapper_clock');

class ClockSVG {
    constructor (parentClock) {
        this.parentClock = parentClock
    }

    start = () => {
        this.createClock();
        this.updateTime();
        setInterval(this.updateTime,1000);
    }

    createClockArrow = () => {
        this.hourArrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        this.hourArrow.setAttribute('class', 'hourArrow');
        this.hourArrow.setAttribute('x1', '150');
        this.hourArrow.setAttribute('y1', '150');
        this.hourArrow.setAttribute('x2', '150');
        this.hourArrow.setAttribute('y2', '75');
        this.hourArrow.setAttribute('stroke', 'black');
        this.hourArrow.setAttribute('stroke-width', '12');
        this.hourArrow.setAttribute('stroke-linecap', 'round');
        this.hourArrow.setAttribute('stroke-opacity', '0.7');
        this.svg.appendChild(this.hourArrow);

        this.minuteArrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        this.minuteArrow.setAttribute('class', 'minuteArrow');
        this.minuteArrow.setAttribute('x1', '150');
        this.minuteArrow.setAttribute('y1', '150');
        this.minuteArrow.setAttribute('x2', '150');
        this.minuteArrow.setAttribute('y2', '35');
        this.minuteArrow.setAttribute('stroke', 'black');
        this.minuteArrow.setAttribute('stroke-width', '8');
        this.minuteArrow.setAttribute('stroke-linecap', 'round');
        this.minuteArrow.setAttribute('stroke-opacity', '0.7');
        this.svg.appendChild(this.minuteArrow);

        this.secondArrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        this.secondArrow.setAttribute('class', 'secondArrow');
        this.secondArrow.setAttribute('x1', '150');
        this.secondArrow.setAttribute('y1', '150');
        this.secondArrow.setAttribute('x2', '150');
        this.secondArrow.setAttribute('y2', '45');
        this.secondArrow.setAttribute('stroke', 'black');
        this.secondArrow.setAttribute('stroke-width', '4');
        this.secondArrow.setAttribute('stroke-linecap', 'round');
        this.secondArrow.setAttribute('stroke-opacity', '0.7');
        this.svg.appendChild(this.secondArrow);
    }

    createNumbersClock = (countHours) => {  
        const arrCordXItemClock = [213,260,275,260,213,150,87,40,25,40,87,150];          
        const arrCordYItemClock = [43,90,150,210,257,275,257,210,150,90,43,25];
        
        const arrCordXNumsClock = [209,256,271,256,209,146,83,36,21,31,78,141];
        const arrCordYNumsClock = [47,94,154,214,261,279,261,214,154,94,47,29];

        for (let i = 1; i <= countHours; i++) {
            const numItem = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            numItem.setAttribute('cx', arrCordXItemClock[i - 1]);
            numItem.setAttribute('cy', arrCordYItemClock[i - 1]);
            numItem.setAttribute('r', '25');
            numItem.setAttribute('class', 'item');

            const textItem = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            const text = document.createTextNode(i);
            textItem.setAttribute('class', 'itemText');
            textItem.setAttribute('x', arrCordXNumsClock[i - 1]);
            textItem.setAttribute('y', arrCordYNumsClock[i - 1]);
            textItem.appendChild(text);
            this.svg.appendChild(numItem);
            this.svg.appendChild(textItem);            
        }
    }


    createElectronicClock = () => {
        const electronicClock = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        electronicClock.setAttribute('class', 'electronicClock');
        electronicClock.setAttribute('x', '115');
        electronicClock.setAttribute('y', '80');

        this.svg.appendChild(electronicClock);
    }

    setTime = () => {
        const currTime=new Date();
        this.hours=currTime.getHours();
        this.minutes=currTime.getMinutes();
        this.seconds=currTime.getSeconds();
    }

    updateHourArrow = (hour,minute) => {
        let arrowDegree = hour*30 + (minute * 0.5);
        this.hourArrow.style.transform = `rotate(${arrowDegree}deg)`;
    }

    updateMinuteArrow = (minute,second) => {
        let arrowDegree = minute*6 + (second * 0.1);
        this.minuteArrow.style.transform = `rotate(${arrowDegree}deg)`;
    }

    updateSecondArrow = (second) => {
        const arrowDegree = second*6;
        this.secondArrow.style.transform = `rotate(${arrowDegree}deg)`;
    }

    updateTime = () => {
        this.setTime()

        this.updateHourArrow(this.hours,this.minutes);
        this.updateMinuteArrow(this.minutes,this.seconds);
        this.updateSecondArrow(this.seconds);

        const currTimeStr = `${this.formatTime(this.hours,2)}:${this.formatTime(this.minutes,2)}:${this.formatTime(this.seconds,2)}`;
        document.querySelector('.electronicClock').innerHTML = currTimeStr;
    }    

    formatTime = (val,len) => {
        let strVal=val.toString();
        while ( strVal.length < len )
            strVal ='0'+strVal;
        return strVal;
    }  

    createClock = () => {
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.setAttribute('width', '300');
        this.svg.setAttribute('height', '300');
        this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        

        const clock = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        clock.setAttribute('cx', '150');
        clock.setAttribute('cy', '150');
        clock.setAttribute('r', '150');
        clock.setAttribute('fill', 'yellow');

        this.svg.appendChild(clock)

        this.createNumbersClock(12);
        this.createClockArrow();
        
        this.parentClock.appendChild(this.svg);
        this.createElectronicClock();
    }
}
    
const clockSVG = new ClockSVG(parentClock);
clockSVG.start();