function strings()
{
    var fName = document.getElementById("1stString").value; //string for first name
    var lName = document.getElementById("2ndString").value; //string for last name
    var badgeN = document.getElementById("3rdString").value; //string for badge number
    var fullName = lName + ", " + fName; //combination of first name and last name
     
    if(fullName.length > 22 || fullName.length < 4) //name length validation. I had to make it 22 or greater because of my ", " that I used to pretty the alert up.
    {
        document.getElementById("access").innerHTML = "Name is Invalid. Please try again with valid data." //message displayed if invalid data is submitted.
    }
    else if (badgeN > 999 || badgeN < 1) //badge number data validation
    { 
        document.getElementById("access").innerHTML = "Invalid Badge Number. Please try again with valid data." //message displayed if invalid data is submitted.
    }
    else //if everything else is good this step starts
    {
        alert("Access granted, welcome " + fullName + " - Badge #: " + badgeN) //alert to user if data is correct after validation.
        location.replace("data.html"); //loads page for launch control
    }
}
function start(){ //This function starts the timer for displaying data.
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
function stop(){ //function stop. when stop is clicked it will grey it out and it wont reactive till user presses start
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}

/**
* This is from team class video on how to format the display data 
*/

class InputData {

    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

function getData(){
    var loadedData = loadData();
    return loadedData;
}
 
function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}