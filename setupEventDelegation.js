function setupEventDelegation(selector) {

    const list = document.querySelector(selector);
    const listState = document.getElementById('testListInfo');

    if (list) {
        list.addEventListener('click', function (event) {

            if (event.target.tagName === 'LI') {

                let txt = `Item clicked: ${event.target.textContent.trim()}`;
                console.log(txt);

                if (listState)
                    listState.textContent = txt;
            }
        });
    } else {
        let txt = `Element with selector "${selector}" not found!`;
        console.log(txt);

        if (listState)
            listState.textContent = txt;
    }
}

export { setupEventDelegation };