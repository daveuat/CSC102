function start()
{
    var count = 10; //variable for countdown timer

    for(i=0; i < 11; i++) { // for loop function for timeout
        setTimeout(function() {
            document.write("Countdown " + count + "<br>");

            if(count <= 5) { //adds message at 5 second mark
                document.write("Warning, less than 1/2 way to launch, " + count + " seconds left.<br>");
            }
            count=count-1;

        }, 1000*i) //delay in miliseconds 1000=1 second
    }
    setTimeout(function() {
        alert("Blast Off!"); //blast off popup alert
        document.write("Blast Off!" + "<br>"); //displays text to user
        document.write('<img src="1701d.gif"/>'); //loads gif on screen for user
    }, 11000)
}
function reset(){
    window.location.reload(); //reloads page and sets everything back to the start. works the quickest.
    alert("Timer Reset."); //confirmation to user that the timer is now reset and ready to run again.
}