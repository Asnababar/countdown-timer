class CountdownTimer {
    private seconds: number;
    constructor(seconds: number) {
        this.seconds = seconds;
    }
    start() {
        const intervalId = setInterval(() => {
            this.seconds--;
            if (this.seconds < 0) {
                clearInterval(intervalId);
                console.log("Countdown over!");
            }
            else {
                console.log(`Time remaining: ${this.seconds}`);
            }
            
        }, 1000);
    }
}
const timer = new CountdownTimer(10);
timer.start();

    
    
