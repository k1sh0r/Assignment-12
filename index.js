document.body.setAttribute("style","font-family : 'Jost', sans-serif; margin : 0px;");
let header = document.createElement("div");
header.setAttribute("class","header text-center");
header.innerHTML = "Tic Tac Toe";
document.body.appendChild(header);

let container = document.createElement("div");
container.setAttribute("class","container");

let form = document.createElement("div");
form.className = "text-center";
form.style.marginTop = "5rem";
form.id="form";

let namerow = document.createElement("div");
namerow.className = "row m-1 center";
let namelabel = document.createElement("div");
namelabel.className = "m-1 label";
namelabel.style.textAlign = "right";
namelabel.innerHTML = "Name ";
let namein = document.createElement("input");
namein.id = "namein";
namein.type = "text";
namein.className = "m-1";
namerow.appendChild(namelabel);
namerow.appendChild(namein);
form.appendChild(namerow);

let passrow = document.createElement("div");
passrow.className = "row m-1 center";
let passlabel = document.createElement("div");
passlabel.className = "m-1 label";
passlabel.style.textAlign = "right";
passlabel.innerHTML = "Password ";
let passin = document.createElement("input");
passin.id = "passin";
passin.type = "password";
passin.className = "m-1";
passrow.appendChild(passlabel);
passrow.appendChild(passin);
form.appendChild(passrow);

let loginrow = document.createElement("div");
loginrow.className = " m-1";
let loginbtn = document.createElement("button");
loginbtn.className = "center btn";
loginbtn.innerHTML = "Login";
loginrow.setAttribute("onclick","login()");
loginrow.appendChild(loginbtn);
form.appendChild(loginrow);

let regrow = document.createElement("div");
regrow.className = " m-1";
let regbtn = document.createElement("a");
regbtn.className = "center btn";
regbtn.innerHTML = "New user? Register here";
regrow.setAttribute("onclick","regform()");
regrow.appendChild(regbtn);
form.appendChild(regrow);

let displaymess = document.createElement("div");
displaymess.id = "message";
displaymess.className = "center m-1";


container.appendChild(form);
container.appendChild(displaymess);
document.body.appendChild(container);

//var names = new Array();
//var passwords = new Array();
//names[0] = "0";
//passwords[0] = "0";

let names = localStorage.getItem('names') ? JSON.parse(localStorage.getItem('names')) : [];
let passwords = localStorage.getItem('passwords') ? JSON.parse(localStorage.getItem('passwords')) : [];
//console.log(typeof passwords);

function login() {
    
    var name = document.getElementById("namein").value;
    var pass = document.getElementById("passin").value;
    var messages = "Error! Register as a new user";
    for(i=0;i<=names.length;i++){
        if(names[i]==name && passwords[i]==pass){
            form.innerHTML="";
            messages = "Enter Player-1 and Player-2 names";
            getpnames();
        }
        else {
            if(names[i]!=name && passwords[i]==pass){
                messages = "Username not found";
            }
            else if(passwords[i]!=pass && names[i]==name){
                messages = "Password Wrong";
            }
            
        } 
    }
    document.getElementById("message").innerHTML = messages;
}

function getpnames() {
    //container.innerHTML="pnames executed";
    
    let pform = document.createElement("div");
    pform.className = "text-center";
    pform.id="pform";

    let p1row = document.createElement("div");
    p1row.className = "row m-1 center";
    let p1label = document.createElement("div");
    p1label.className = "m-1 label";
    p1label.style.textAlign = "right";
    p1label.innerHTML = "Player-1: ";
    let p1in = document.createElement("input");
    p1in.id = "p1in";
    p1in.type = "text";
    p1in.className = "m-1";
    p1row.appendChild(p1label);
    p1row.appendChild(p1in);
    pform.appendChild(p1row);

    let p2row = document.createElement("div");
    p2row.className = "row m-1 center";
    let p2label = document.createElement("div");
    p2label.className = "m-1 label";
    p2label.style.textAlign = "right";
    p2label.innerHTML = "Player-2: ";
    let p2in = document.createElement("input");
    p2in.id = "p2in";
    p2in.type = "text";
    p2in.className = "m-1";
    p2row.appendChild(p2label);
    p2row.appendChild(p2in);
    pform.appendChild(p2row);

    let enterrow = document.createElement("div");
    enterrow.className = " m-1";
    let enterbtn = document.createElement("button");
    enterbtn.className = "center btn";
    enterbtn.innerHTML = "enter";
    enterrow.setAttribute("onclick","enter()");
    enterrow.appendChild(enterbtn);

    container.appendChild(pform);
    pform.appendChild(enterrow);
    
}

function enter() {
    var p1 = document.getElementById("p1in").value;
    var p2 = document.getElementById("p2in").value;
    var current = 1;
    var ibi;
    
    document.getElementById("pform").innerHTML="";
    container.removeChild(displaymess);
    let box = document.createElement("div");
    box.className="box";
    for(let i=1;i<=3;i++){
        for(let j=1;j<=3;j++) {
            let innerbox = document.createElement("div");
            innerbox.className="inner-box"
            innerbox.id="ib"+i+j;
            //innerbox.setAttribute("onclick","markxo()")
            box.appendChild(innerbox);
        }
    }
    container.appendChild(box);
    for(let i=1;i<=3;i++){
        for(let j=1;j<=3;j++){
            ibi = document.getElementById("ib"+i+j)
            ibi.onclick = function () {                
                if(current==1){
                    this.innerHTML="X";
                    this.onclick = "";
                    current=0;
                }
                else {
                    this.innerHTML="O";
                    this.onclick = "";
                    current=1;
                }
                checkwon();
            }
        };
    }
    var rows = "";
    var cols = "";
    function checkwon(){
        for(let i=1;i<=3;i++){
            for(let j=1;j<=3;j++){
                
                
            }
        }
        console.log(vals);
    }
}

function regform() {
    document.getElementById("form").style.display="none";
    container.removeChild(displaymess);
    let regform = document.createElement("div");
    regform.className = "text-center";
    regform.style.marginTop = "5rem";
    regform.id = "regform";

    let namerow = document.createElement("div");
    namerow.className = "row m-1 center";
    let namelabel = document.createElement("div");
    namelabel.className = "m-1 label";
    namelabel.style.textAlign = "right";
    namelabel.innerHTML = "Name ";
    let namein = document.createElement("input");
    namein.id = "namein";
    namein.type = "text";
    namein.className = "m-1";
    namerow.appendChild(namelabel);
    namerow.appendChild(namein);
    regform.appendChild(namerow);

    let passrow = document.createElement("div");
    passrow.className = "row m-1 center";
    let passlabel = document.createElement("div");
    passlabel.className = "m-1 label";
    passlabel.style.textAlign = "right";
    passlabel.innerHTML = "Password ";
    let passin = document.createElement("input");
    passin.id = "passin";
    passin.type = "password";
    passin.className = "m-1";

    let regrow = document.createElement("div");
    regrow.className = " m-1";
    let regbtn = document.createElement("button");
    regbtn.className = "center btn";
    regbtn.innerHTML = "Register";
    regrow.setAttribute("onclick","reg()");
    regrow.appendChild(regbtn);

    passrow.appendChild(passlabel);
    passrow.appendChild(passin);
    regform.appendChild(passrow);    
    regform.appendChild(regrow);
    container.appendChild(regform);
    //container.appendChild(displaymess);

    let logrow = document.createElement("div");
    logrow.className = "center m-1 btn";
    logrow.id="logrow";
    let logbtn = document.createElement("a");
    logrow.setAttribute("onclick","logform()");
    container.appendChild(logrow);
}
function reg() {
            var exists = "false";
            var name = document.getElementById("namein").value;
            var pass = document.getElementById("passin").value;
            for(i=0;i<=names.length;i++){
                if(names[i]==name && passwords[i]==pass){
                    exists = "true";
                    document.getElementById("logrow").innerHTML= "User already exists! Click here to login.";
                }
            }
            if(exists == "false"){
                names[names.length] = name;
                localStorage.setItem('names', JSON.stringify(names));
                passwords[passwords.length] = pass;
                localStorage.setItem('passwords', JSON.stringify(passwords));
                messages = "User created, now click here to login";
            }
            document.getElementById("message").innerHTML = messages;
        }
function logform() {
    document.getElementById("regform").style.display="none";
    document.getElementById("form").style.display="";
    document.getElementById("logrow").style.display="none";
}
