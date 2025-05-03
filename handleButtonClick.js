let cntClick = 0;
function handleButtonClick(buttonId, message) {
    const button = document.getElementById(buttonId);
    const clickInfo = document.getElementById('btnEventInfo');

    if (button) {

        button.addEventListener('click', function () {
            cntClick++;
            console.log(message);

            if (clickInfo)
                clickInfo.textContent = `Button state: ${message} Clicks count: ${cntClick}`;
            else
                clickInfo.textContent = 'Button state : ' + `Button with ID "${buttonId}" not found!`;
        });
    } else {
        console.log(`Button with ID "${buttonId}" not found!`);
    }
}

export { handleButtonClick };
