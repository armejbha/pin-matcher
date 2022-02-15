// pin generated 
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
document.getElementById('generated-pin').addEventListener('click',
    function () {
        const pin = getPin();
        const pinInput = document.getElementById('pin-input');
        const pinNumber = pinInput.value;
        pinInput.value = pin;
    })

// get input form keyboard 
document.getElementById('key-pad').addEventListener('click',
    function (event) {
        const number = event.target.innerText;
        const clacNumber = document.getElementById('typed-numbers');
        if (isNaN(number)) {
            if (number == 'C') {
                clacNumber.value = '';
            }
        }
        else {
            const previusNumber = clacNumber.value;
            const newNumber = previusNumber + number;
            clacNumber.value = newNumber;
        }
    })
document.getElementById('submit').addEventListener('click',
    function () {
        const pin = document.getElementById('pin-input').value;
        const clacNumber = document.getElementById('typed-numbers').value;
        const success = document.getElementById('notify-success');
        const fail = document.getElementById('notify-fail');
        if (pin == clacNumber) {
            success.style.display = 'block';
            fail.style.display = 'none';
        }
        else {

            fail.style.display = 'block';
            success.style.display = 'none';
        }
    })