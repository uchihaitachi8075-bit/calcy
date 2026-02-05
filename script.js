let display = document.getElementById('display');
let searchInterface = document.getElementById('search-interface');

function appendToDisplay(value) {
    display.value += value;
    if (display.value === '23234567') {
        showSearchInterface();
    }
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let result = math.evaluate(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function showSearchInterface() {
    document.querySelector('.calculator').style.display = 'none';
    searchInterface.classList.remove('hidden');
}

function backToCalculator() {
    searchInterface.classList.add('hidden');
    document.querySelector('.calculator').style.display = 'block';
    display.value = '';
}

function searchGoogle() {
    let query = document.getElementById('search-query').value;
    if (query) {
        window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank');
    }
}
