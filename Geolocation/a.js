function getUserLocation() {
    if (!navigator.geolocation) {
        return;
    }
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const element = document.getElementById('user-location');
            element.innerHTML = `Your latitude is ${latitude} and your longitude is ${longitude}`;
        },
        (error) => {
            switch (error.code) {
                case 1:
                    console.log(
                        'The user denied the request for location information.'
                    );
                    break;
                case 2:
                    console.log("The user's location could not be determined.");
                    break;
                case 3:
                    console.log('The request timed out.');
                    break;
                default:
                    console.log('An unknown error occurred.');
                    break;
            }
        }
    );
}

window.onload = getUserLocation;
