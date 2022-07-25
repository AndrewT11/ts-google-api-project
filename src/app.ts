// Code goes here!
const form = document.querySelector('form')!;
const addressInput = document.querySelector('#address')! as HTMLInputElement;

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;

    // send to Google API
    

}

form?.addEventListener("submit", searchAddressHandler);