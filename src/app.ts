import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.querySelector('#address')! as HTMLInputElement;

// const GOOGLE_API_KEY;

type GeocodingResponse = {
    result: {geometry: {location: {lat: number, lng: number}}}[]
    status: "OK" | "ZERO-RESULTS"
}

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;


    // send to Google API
    axios.get<GeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`)
    .then(response => {
        if(response.data.status !== "OK") {
            throw new Error("Could not fetch location");
        }
        const coordinates = response.data.result[0].geometry.location;

    })  
    .catch(err => {
        alert(err.message)
        console.log(err)
    })

}

form?.addEventListener("submit", searchAddressHandler);