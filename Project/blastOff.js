function start()
{
    var count = 10; //variable for countdown timer

    for(i=0; i < 11; i++) { // for loop function for timeout
        setTimeout(function() {
            if(count > 5) // message for greater than 5 second mark
            {
                document.getElementById("output").innerHTML = "Countdown " + count + "<br>"; //writes to screen the first 5 countdown messages
            }
            else if(count <= 5) // different message for 5 seconds or less
            {
                document.getElementById("output").innerHTML = "Warning, less than 1/2 way to launch, time left = " + count + "<br>"; // secondary message once the 5 second mark is reached
            }
            count=count-1;

        }, 1000*i) //delay in miliseconds 1000=1 second
    }
    setTimeout(function() {
        alert("Blast Off!"); //blast off popup alert
        document.getElementById("output").innerHTML = "Blast Off!" + "<br>"; //displays text to user
        document.getElementById("1701d").innerHTML = '<img src="1701d.gif"/>'; //loads gif on screen for user
    }, 11000)
}
function reset()
{
    window.location.reload(); //reloads page and sets everything back to the start. works the quickest.
    alert("Timer Reset."); //confirmation to user that the timer is now reset and ready to run again.
}
function reset2() //reset with no alert
{
    window.location.reload(); //reloads page and sets everything back to the start. works the quickest.
}
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
        location.replace("Launch.html"); //loads page for launch control
    }
}
function customSound(){ //custom warp core background noise
    mySound = new sound("tng.mp3");
    mySound.play();
}
function stationBackground(){ //standard background noise from assignment
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}
function customSoundStop(){ //cant get this to work :(
    sound.currentTime = 0;
    sound.pause();
    sound.remove();
}
function sound(src){ //helper function from Teams Live Session Week 4
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function(){
        this.sound.play();
    }
}