const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const updateCounter=()=>{

const target =
+counter.getAttribute("data-target");

const count =
+counter.innerText;

const increment =
target/100;

if(count < target){

counter.innerText =
`${Math.ceil(count+increment)}`;

setTimeout(updateCounter,20);

}
else{

counter.innerText=target;

}

};

updateCounter();

});

function sendWhatsapp(){

let name =
document.getElementById("name").value;

let mobile =
document.getElementById("mobile").value;

let vehicle =
document.getElementById("vehicle").value;

let issue =
document.getElementById("issue").value;

let message =
`Hello FutureTechnologies,%0A%0A
Name: ${name}%0A
Mobile: ${mobile}%0A
Vehicle: ${vehicle}%0A%0A
Issue:%0A${issue}%0A%0A
Please contact me for repair service.`;

window.open(
`https://wa.me/919999999999?text=${message}`,
"_blank"
);

}
