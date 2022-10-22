function loop1()
{
    for (var i = 1; i<4; i++)
    {
        alert("Inside for Loop")
    }
}

function loop2()
{
    var i = 1;
    while (i < 4)
    {
        alert("Inside While Loop")
        i++; // i = i + 1;
    }
}

function loop3()
{
    var i = 5;
    do
    {
        alert("Inside Do Loop")
        i++; // i = i + 1;
    } while (i < 4)
}