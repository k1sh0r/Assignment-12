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
regbtn.className = "center reg-btn";
regbtn.innerHTML = "Register";
regrow.setAttribute("onclick","reg()");
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
console.log(typeof passwords);

function login() {
    
    var name = document.getElementById("namein").value;
    var pass = document.getElementById("passin").value;
    var messages = "Error! Register as a new user";
    for(i=0;i<=names.length;i++){
        if(names[i]==name && passwords[i]==pass){
            container.innerHTML="Logged in";
            container.className = "center";
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

function reg() {
    var exists = "false";
    var name = document.getElementById("namein").value;
    var pass = document.getElementById("passin").value;
    for(i=0;i<=names.length;i++){
        if(names[i]==name && passwords[i]==pass){
            messages = "User already exists"
            exists = "true";
        }
    }
    if(exists == "false"){
        names[names.length] = name;
        localStorage.setItem('names', JSON.stringify(names));
        passwords[passwords.length] = pass;
        localStorage.setItem('passwords', JSON.stringify(passwords));
        messages = "User created, now login";
    }
    document.getElementById("message").innerHTML = messages;

}