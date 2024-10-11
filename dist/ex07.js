"use strict";
// Create a function `logCoordinates` that accepts a tuple of latitude and longitude.
// - The latitude is required, but the longitude is optional.
// - Use a type guard to log different messages based on whether the longitude is provided.
// - Return type: void.
function logCoordinates(coords) {
    if (coords.length === 2) {
        console.log(`Latitude: ${coords[0]}, Longitude: ${coords[1]}`);
    }
    else {
        console.log(`Latitude: ${coords[0]}`);
    }
}
// Expected output:
logCoordinates([40.7128, -74.006]); // "Latitude: 40.7128, Longitude: -74.0060"
logCoordinates([34.0522]); // "Latitude: 34.0522"
