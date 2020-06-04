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
    var messages = "Enter Player-1 and Player-2 names";
    document.getElementById("message").innerHTML = messages;
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
    p1 = document.getElementById("p1in").value;
    p2 = document.getElementById("p2in").value;
}

function enter() {
    var p1 = document.getElementById("p1in").value;
    var p2 = document.getElementById("p2in").value;
    var current = 2;
    var ibi;
    var vals = [];
    document.getElementById("pform").innerHTML="";
    //container.removeChild(displaymess);
    let rand = Math.floor(Math.random()*10);
    console.log(rand);
    if(rand < 5){
        messages = p1 + " shall choose X or O and start";
        first = p1;
        second = p2;
    } 
    else{
        messages = p2 + " shall choose X or O and start";
        first = p2;
        second = p1;
    }
    displaymess.innerHTML = messages;
    let displayrow = document.createElement("div");
    displayrow.style.display="flex";
    displayrow.classList = "text-center"
    let xbox = document.createElement("div");
    xbox.classList = "center p-1";
    let selectx = document.createElement("button");
    selectx.classList = "btn center";
    selectx.innerHTML = "X";
    selectx.onclick = function () {
        current = 1;
        displaymess.innerHTML=first+"'s turn";
        console.log(current);
        xchose=first;
    }
    xbox.appendChild(selectx);
    let obox = document.createElement("div");
    obox.classList = "center p-1";
    let selecto = document.createElement("button");
    selecto.classList= "btn center";
    selecto.innerHTML = "O";
    selecto.onclick = function () {
        current = 0;
        displaymess.innerHTML=first+"'s turn";
        console.log(current);
        ochose=first;
    }
    obox.appendChild(selecto);
    displayrow.appendChild(xbox);
    displayrow.appendChild(obox);
    displaymess.appendChild(displayrow);

    let box = document.createElement("div");
    box.className="box";
    for(let i=1;i<=3;i++){
        for(let j=1;j<=3;j++) {
            let innerbox = document.createElement("div");
            innerbox.className="inner-box";
            innerbox.id="ib"+i+j;
            //innerbox.setAttribute("onclick","markxo()")
            box.appendChild(innerbox);
        }
    }
    var vals = [];
    container.appendChild(box);
    for(let i=1;i<=3;i++){
        for(let j=1;j<=3;j++){
            ibi = document.getElementById("ib"+i+j);
            ibi.onclick = function () {   
                if (current==2){
                    alert("Choose X or O first");
                }             
                else if(current==1){
                    this.innerHTML="X";
                    this.onclick = "";
                    current=0;
                }
                else if(current==0){
                    this.innerHTML="O";
                    this.onclick = "";
                    current=1;
                }
                var k=j-1+(i-1)*3;
                vals[k] = document.getElementById(this.id).innerHTML;
                checkwon();
            }
        };
    }

    function checkwon(){
        var comb = []
        for(let i=0;i<=2;i++){
            var combs = []
            var k = i*3
            comb[i] = vals[k]+vals[k+1]+vals[k+2];
            comb[i+3] = vals[i]+vals[i+3]+vals[i+6];
        }
        comb[6] = vals[0]+vals[4]+vals[8];
        comb[7] = vals[2]+vals[4]+vals[6];
        for(let i=0;i<=8;i++){
            if(comb[i] == "XXX"){
                alert(xchose+" has won the game");
                console.log("won");
                container.removeChild(box);
                displaymess.innerHTML = xchose+" has won the game";
                let displayrow = document.createElement("div");
                displayrow.classList = "center m-1";
                let playagain = document.createElement("button");
                playagain.setAttribute("onclick","getpnames()");
                playagain.innerHTML="Play again?"                
                displayrow.appendChild(playagain);
                displaymess.appendChild(displayrow);
            }
            if(comb[i] == "OOO"){
                alert(ochose+" has won the game");
                console.log("won");
                container.removeChild(box);
                displaymess.innerHTML = ochose+" has won the game";
                let displayrow = document.createElement("div");
                displayrow.classList = "center m-1";
                let playagain = document.createElement("button");
                playagain.setAttribute("onclick","getpnames()");
                playagain.innerHTML="Play again?"                
                displayrow.appendChild(playagain);
                displaymess.appendChild(displayrow);
            }
        }
        //console.log(comb);
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
    console.log(name);
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
        document.getElementById("logrow").innerHTML = "User created, now click here to login";
    }
}
function logform() {
    document.getElementById("regform").style.display="none";
    document.getElementById("form").style.display="";
    document.getElementById("logrow").style.display="none";
}
