const parentClock = document.querySelector('.wrapper_clock');

let canvas,context,hours,minutes,seconds,currTimeStr;

class ClockCanvas {
    constructor (parentClock) {
        this.parentClock = parentClock
    }

    update = () => {
        this.canvas = '';
        this.parentClock.innerHTML = '';
        this.createCanvas();
        this.drawClock();
        this.drawNums(12);
        this.setTime();
        this.createElectronicClock();
        this.createClockArrow();
    }
    
    start = () => {
        this.createCanvas();
        this.drawClock();
        this.drawNums(12);
        this.setTime();
        this.createElectronicClock();
        this.createClockArrow();
        setInterval(this.update, 1000);
    }

    createCanvas = () => {
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('width', '300');
        this.canvas.setAttribute('height', '300');

        this.context = this.canvas.getContext('2d');
    
        this.parentClock.appendChild(this.canvas);
    }

    drawClock = () => {        
        this.context.strokeStyle='black';
        this.context.fillStyle='red';
        this.context.beginPath();
        this.context.arc(150,150, 150, 0, Math.PI*2, false);
        this.context.stroke();
        this.context.fill();
    }

    drawNums = (countNums) => {
        const arrCordXItemClock = [213,260,275,260,213,150,87,40,25,40,87,150];          
        const arrCordYItemClock = [43,90,150,210,257,275,257,210,150,90,43,25];

        const arrCordXNumsClock = [209,255,271,255,208,145,82,35,20,30,78,140];
        const arrCordYNumsClock = [48,95,156,216,263,280,262,215,155,96,48,30];

        for (let i = 1; i <= countNums; i++) {
            this.context.fillStyle='yellow';
            
            this.context.beginPath();
            this.context.arc(arrCordXItemClock[i-1],arrCordYItemClock[i-1], 25, Math.PI*2, false);
            this.context.fill();
            this.context.fillStyle='black';
            this.context.font = 'bold 18px Arial';
            this.context.fillText(i,arrCordXNumsClock[i-1],arrCordYNumsClock[i-1]);
        }
    }

    setTime = () => {
        const currTime=new Date();
        this.hours=currTime.getHours();
        this.minutes=currTime.getMinutes();
        this.seconds=currTime.getSeconds();
    
        this.currTimeStr = `${this.formatTime(this.hours,2)}:${this.formatTime(this.minutes,2)}:${this.formatTime(this.seconds,2)}`
    }

    createElectronicClock = () => {
        this.context.beginPath();
        this.context.fillStyle='black';
        this.context.font = 'bold 20px Arial';
        this.context.fillText(this.currTimeStr,112,80);
    }

    createClockArrow = () => {
        this.context.save()
        this.context.translate(150,150);
        this.context.rotate(-Math.PI/2);
        this.context.strokeStyle = 'black';
        this.context.fillStyle = 'black';
        this.context.lineCap = 'round';
        this.context.save();
    
        // часовая стрелка
        this.context.lineWidth=12;
        this.context.rotate((Math.PI/6)*this.hours + (Math.PI/360)*this.minutes + (Math.PI/21600)* this.seconds)
        this.context.beginPath();
        this.context.moveTo(-10,0);
        this.context.lineTo(80,0);
        this.context.stroke();
        this.context.restore();
    
        this.context.save();
    
        // минутная стрелка
        this.context.rotate((Math.PI/30*this.minutes)+(Math.PI/1800)*this.seconds)
        this.context.lineWidth=8;
        this.context.beginPath();
        this.context.moveTo(-10,0);
        this.context.lineTo(100,0);
        this.context.stroke();
        this.context.restore();
    
        this.context.save();
        
        // секундная стрелка
        this.context.lineWidth=4;
        this.context.rotate(this.seconds * Math.PI/30)
        this.context.beginPath();
        this.context.moveTo(-10,0);
        this.context.lineTo(115,0); 
        this.context.stroke();
    }

    formatTime = (val,len) => {
        let strVal=val.toString();
        while ( strVal.length < len )
            strVal ='0'+strVal;
        return strVal;
    }

}

const clockCanvas = new ClockCanvas(parentClock);
clockCanvas.start();