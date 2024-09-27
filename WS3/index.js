// Button 1
function showAlert() {
    let date = new Date();
    alert("You clicked me! " + date);
}

// Button 2
function showTable() {
    let tableHTML = `
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>$320,800</td>
                </tr>
                <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>$170,750</td>
                </tr>
                <tr>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>$86,000</td>
                </tr>
                <tr>
                    <td>Cedric Kelly</td>
                    <td>Senior Javascript Developer</td>
                    <td>$433,060</td>
                </tr>
                <tr>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>$162,700</td>
                </tr>              
            </tbody>
        </table>
    `;
    document.write(tableHTML);
}

// Button 3
function getGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            console.log("Latitude: " + lat + ", Longitude: " + lon);
            document.body.innerHTML += `<p>Latitude: ${lat}, Longitude: ${lon}</p>`;
            window.location.href = `https://www.google.com/maps?q=${lat},${lon}`;
        });
    }
}



// Mouseover event
function handleMouseOver() {
    console.log("Stepped over by a mouse!");
}

// Mouseout event 
function handleMouseOut() {
    alert("Bye bye mouse!");
}



function handleFocus() {
    const textarea = document.getElementById("textdata");
    const message = document.createElement("p");
    message.innerText = "Please fill in the form with proper data.";
    message.id = "focusMessage";
    
    textarea.insertAdjacentElement("beforebegin", message);

    
}



function handleBlur() {
    const message = document.getElementById("focusMessage");
    if (message) {
        message.remove();
    }

    document.getElementById("textdata").style.backgroundColor = "";
}


let charCount = 0;
function countKeyPresses() {
    charCount++;
    document.getElementById("charcount").innerText = `Character count: ${charCount}`;
}

function validateForm(event) {
    const text = document.getElementById("textdata").value;
    if (text.trim() === "") {
        alert("Please fill in the textarea before submitting.");
        event.preventDefault();
    }
}



function showCoordinates(event) {
    const x = event.clientX;
    const y = event.clientY;
    console.log("Mouse X: " + x + ", Mouse Y: " + y);
    document.getElementById("coordinates").innerHTML = `Mouse X: ${x}, Mouse Y: ${y}`;
    const coordsHeading = document.getElementById("coords");
    if (coordsHeading) {
        coordsHeading.innerHTML = `Coordinates: X = ${x}, Y = ${y}`;
    }
}
