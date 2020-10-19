const log = console.log;

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const location = search.value;
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    // fetch('http://api.weatherstack.com/current?access_key=3792be275cac070df66088e50ff2dc93&query=' + location + '&units=m').then((response) => {
    fetch('/weather?address=' + location).then((response) => {   
    response.json().then((data) => {
            if (data.error) {
                log('Error', data.error);
                messageTwo.textContent = data.error.info;
            } else {
                log('Location: ', data.location);
                log('Forecast: ', data.forecast);
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        });
    });
});