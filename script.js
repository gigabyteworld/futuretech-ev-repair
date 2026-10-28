function sendWhatsapp() {

let name=document.getElementById("name").value;
let mobile=document.getElementById("mobile").value;
let vehicle=document.getElementById("vehicle").value;
let issue=document.getElementById("message").value;

let text=`Hello FutureTechnologies,

Name: ${name}
Mobile: ${mobile}
Vehicle: ${vehicle}

Issue:
${issue}

Please contact me regarding repair.`;

let phone="919999999999";

let url=`https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

window.open(url,"_blank");

}
