var CountdownTimer = /** @class */ (function () {
    function CountdownTimer(seconds) {
        this.seconds = seconds;
    }
    CountdownTimer.prototype.start = function () {
        var _this = this;
        var intervalId = setInterval(function () {
            _this.seconds--;
            if (_this.seconds < 0) {
                clearInterval(intervalId);
                console.log("Countdown over!");
            }
            else {
                console.log("Time remaining: ".concat(_this.seconds));
            }
        }, 1000);
    };
    return CountdownTimer;
}());
var timer = new CountdownTimer(10);
timer.start();
