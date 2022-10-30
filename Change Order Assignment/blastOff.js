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
function reset(){
    window.location.reload(); //reloads page and sets everything back to the start. works the quickest.
    alert("Timer Reset."); //confirmation to user that the timer is now reset and ready to run again.
}