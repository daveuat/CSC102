function strings()
{
    var string1 = document.getElementById("initString").value;
    var string2 = document.getElementById("2ndString").value;
    alert( "Press ok to go to next string manipulation");
    var str3  = string1 + string2
   // document.getElementById("Updated string").innerHTML = "concatenate = " + str3
   
    var len = str3.length
 //   document.getElementById("Updated string").innerHTML = "length of concatenated string = " + len
 
    // substring(first, last)
    // remember, the count starts at 0
 //   document.getElementById("Updated string").innerHTML = "substring 0-3 of initial string = " + string1.substring(0,3)

 //   document.getElementById("Updated string").innerHTML = "substring 5-25 of initial string = " + string1.substring(5,25)
   // var repJC = string1.replace(/we/i, "you")
  //  document.getElementById("Updated string").innerHTML = "replace we with you = " + repJC

    // i = insensitive - doesn't care about case
    // g = repeat for all occurances in the string 
    // can't have both.  If you want both - use the below code.
    var repJC = string1.toLowerCase()
    repJC = repJC.replace(/we/g, "you")
    document.getElementById("Updated string").innerHTML = "replace we with you repeat and lc = " + repJC

  /*   document.getElementById("Updated string").innerHTML = "length of concatenated string = " + len
    document.getElementById("Updated string").innerHTML = "length of concatenated string = " + len
    document.getElementById("Updated string").innerHTML = "length of concatenated string = " + len
    */
}

