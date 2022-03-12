function send(to, body, user){
var url = "https://mail.google.com/mail/u/?authuser=" + user + "&source=mailto&to=" + to + "&body=" + body + "&fs=1&tf=cm";
console.log(url)
window.location.href = url;
}
function create(){
var rname = document.getElementById("rname").value;
var mname = document.getElementById("mname").value;
var mail = document.getElementById("mail").value;
var user = document.getElementById("user").value;
var body = document.getElementById("body").value;
var body = body.replaceAll(" ", "%20")
var json = {}
json.mail = mail;
document.getElementById("butt").innerHTML = 'Enviar-ho amb gmail'
document.getElementById("butt").setAttribute('onclick','tosend()')
var mail = "Hola, " + rname + ".%0D%0A T'escric perquè " + body + "%0D%0A%0D%0A" + "Amb tots els respectes.%0D%0A" + mname;
console.log(mail);
sessionStorage.setItem("mail", mail)
json.body = mail;
json.user = user;
string = JSON.stringify(json)
sessionStorage.setItem("json", string)
console.log(string)
console.log(json)
}
function tosend() {
var string = sessionStorage.getItem("json")
var json = JSON.parse(string)
var mail = sessionStorage.getItem("mail")
console.log(mail)
send(json.mail, json.body, json.user)
}