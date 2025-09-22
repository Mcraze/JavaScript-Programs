// Function to convert Celcius to Farhenheit
function celciusToFarenheit(temp) {
    
    // Formula: (Celsius × 9/5) + 32 = Farhenheit
    let farhenheit = (temp * 9/5) + 32;

    console.log(farhenheit);
}
celciusToFarenheit(0);


// Function to convert Farhenheit to Celcius
function farenheitToCelcius(temp) {

    // Formula: (Farhenheit − 32) × 5/9 = Celcius
    let celcius = (temp - 32) * 5/9;

    console.log(celcius);
}
farenheitToCelcius(50);