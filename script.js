// Cursor Glow

const glow =
document.getElementById("cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});

// Counter Animation

document.querySelectorAll(".counter")
.forEach(counter=>{

const update=()=>{

const target=
+counter.getAttribute("data-target");

const count=
+counter.innerText;

const speed=50;

const inc=
target/speed;

if(count<target){

counter.innerText=
Math.ceil(count+inc);

setTimeout(update,20);

}
else{

counter.innerText=target;

}

};

update();

});

// GSAP

gsap.registerPlugin(ScrollTrigger);

gsap.from(".service-card",{

opacity:0,
y:100,

stagger:.2,

scrollTrigger:{

trigger:".services"

}

});

// Swiper

new Swiper(".review-slider",{

loop:true,

autoplay:{
delay:3000
}

});

// THREE JS HERO

const scene =
new THREE.Scene();

const camera =
new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer =
new THREE.WebGLRenderer({
alpha:true,
antialias:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

document
.getElementById("hero3d")
.appendChild(renderer.domElement);

const geometry =
new THREE.TorusKnotGeometry(
1,
0.3,
200,
32
);

const material =
new THREE.MeshPhysicalMaterial({

color:0x00e5ff,

metalness:1,

roughness:0.1

});

const knot =
new THREE.Mesh(
geometry,
material
);

scene.add(knot);

camera.position.z=4;

function animate(){

requestAnimationFrame(animate);

knot.rotation.x+=0.005;
knot.rotation.y+=0.005;

renderer.render(
scene,
camera
);

}

animate();
