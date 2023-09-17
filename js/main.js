document.addEventListener('DOMContentLoaded', function() {
    let valueDisplays = document.querySelectorAll(".counter-num");
    let interval = 5000;

    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        //also support decimals using parseFloat
        let endValue = parseFloat(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function() {
            startValue += 1;
            valueDisplay.textContent = startValue;
            //stop when startValue is greater than or equal to endValue
            if (startValue >= endValue) {
                clearInterval(counter);
            }
        }, duration);
    });
});
