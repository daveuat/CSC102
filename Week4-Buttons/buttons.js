function start(){ //function start. when clicked it will grey out the button afterwards
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
function stop(){ //function stop. when stop is clicked it will grey it out and it wont reactive till user presses start
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}