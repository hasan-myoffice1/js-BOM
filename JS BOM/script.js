document.getElementById("p1").innerHTML = 
"Browser inner window width: " + window.innerWidth + "px<br>" + "Browser inner widow height: " + window.innerHeight + "px";

//Window screen 

/*
    screen.width
    screen.height
    screen.availwidth
    screen.colorDepth
    screen.pixelDepth
*/

document.getElementById("p2").innerHTML = 
"Screen Width is " + screen.width + "px <br> Screen hight is: " + screen.height + "px";

document.getElementById("p3").innerHTML = 
"Screen Available Hight: " + screen.availHeight;
document.getElementById("p4").innerHTML = 
"Screen Color depth:" + screen.colorDepth + "<br> Screen pixel depth: " + screen.pixelDepth;


// window Location
/*
   window.location.href
   window.location.hostname
   window.location.pathname
   window.location.protocol
   window.location.assign
*/

document.getElementById("p5").innerHTML = 
"The full URL in this Page is: " + window.location.href + "<br> Page Hostname: " + window.location.hostname + "<br> Page path is: " + window.location.pathname + "<br> Page protocol is: " + window.location.protocol + "<br> Port Number is: " + window.location.port;


const btnP6 = document.getElementById("btnP6");
btnP6.addEventListener("click", link1);

function link1(){
    window.location.assign("https://www.w3schools.com");
};

// window history
document.getElementById("btnA").addEventListener("click", goBack);
function goBack() {
    window.history.back();
}

// Window Navigator
/*
   navigator.coolieEnabled
   navigator.appCodeName
   navigator.platform
*/

document.getElementById("p7").innerHTML = 
" Navigator.cookieEnable is: " + navigator.cookieEnabled + "<br> navigator.appName is: " + navigator.appName + " <br> navigator.appVersion: " + navigator.appVersion ;


// Alert popup
function alertB(){
    alert("i am asn alert box");
}

document.getElementById("btnB").addEventListener("click", alertB);

//confirm popup 
function conformB(){
    var txt;
    if(confirm("press a button!")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("p8").innerHTML = txt;
}

document.getElementById("conformB").addEventListener("click", conformB);

// prompt box

function promptA(){
    let text;
    let person = prompt("Please enter your name:",
    "Harry Potter");
    if(person == null || person == ""){
       text = "User canceled the prompt.";
    } else {
        text = "Hello " + person + "! How are you today?"
    }
    document.getElementById("p9").innerHTML = text;
}

document.getElementById("promptA").addEventListener("click", promptA);

 