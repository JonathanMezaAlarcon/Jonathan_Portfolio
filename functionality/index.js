function printLetterByLetter(destination, message, speed) {
    var i = 0;
    var interval = setInterval(function () {
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length) {
            document.getElementById("buttonAppear").style.visibility = "visible";
            clearInterval(interval);
        }
    }, speed);
}

printLetterByLetter("header1", "WELCOME TO JONATHAN'S ONLINE PORTFOLIO", 65);